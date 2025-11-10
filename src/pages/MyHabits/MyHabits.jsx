import React, { use, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../../AuthContext/AuthContext";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Link } from "react-router";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyHabits = () => {
  const { user } = use(AuthContext);
  const [myHabits, setMyHabits] = useState([]);
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [loading, setLoading] = useState(false);
  const habitModelRef = useRef(null);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/my-habits/?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyHabits(data);
        setLoading(false);
      });
  }, [user, refetch]);

  // handleUpdate
  const handleUpdateHabit = (e, id) => {
    e.preventDefault();
    const form = e.target;

    const updatedHabit = {
      title: form.title.value,
      description: form.description.value,
      image: form.image.value,
      category: form.category.value,
      reminderTime: form.reminderTime.value,
      userName: form.userName.value,
      userEmail: form.userEmail.value,
    };

    fetch(`http://localhost:3000/habits/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedHabit),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) toast.success("Habit updated successfully!");
        habitModelRef.current.close();
        setRefetch(!refetch);
        habitModelRef.close();
      })
      .catch((error) => toast.error(`Update failed: ${error.message}`));
  };

  // handleDelete
  const handleDeleteHabit = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/habits/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setRefetch(!refetch)
            }
          })
          .catch(() => toast.error("Error Data Not found"));
      }
    });
  };

  // console.log(myHabits);
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-purple-600">
        Build Better Habits, Build a Better You
      </h2>
      <p className="text-center font-medium text-lg max-w-[750px] mx-auto mb-10">
        Discover powerful habits that transform your daily routine. From morning
        rituals to evening wind-downs, find inspiration from our community of
        growth-minded individuals.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-11/12 mx-auto overflow-x-auto rounded-lg shadow-md border border-purple-200">
          <table className="table table-zebra w-full">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="py-3">Title</th>
                <th>Category</th>
                <th>Streak</th>
                <th className="hidden sm:block">Created Date</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {myHabits.length > 0 ? (
                myHabits.map((habit) => (
                  <tr key={habit?._id} className="hover:bg-purple-50">
                    <td className="font-semibold text-purple-600">
                      {habit?.title}
                    </td>

                    <td>{habit?.category}</td>

                    <td className="font-medium text-green-600">
                      {habit?.completionHistory.length} Days
                    </td>

                    <td className="hidden sm:block">
                      {new Date(habit?.createdAt).toLocaleDateString()}
                    </td>

                    <td>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <button
                          onClick={() => {
                            setSelectedHabit(habit);
                            habitModelRef.current.showModal();
                          }}
                          className="btn btn-xs bg-blue-500 text-white hover:bg-blue-600"
                        >
                          Update
                        </button>
                        <dialog
                          ref={habitModelRef}
                          className="modal modal-bottom sm:modal-middle"
                        >
                          <div className="modal-box">
                            <form
                              onSubmit={(e) =>
                                handleUpdateHabit(e, selectedHabit?._id)
                              }
                              className="grid grid-cols-1 gap-5"
                            >
                              {/* Title */}
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-medium">
                                    Habit Title
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  name="title"
                                  defaultValue={selectedHabit?.title}
                                  className="input input-bordered w-full"
                                  required
                                />
                              </div>

                              {/* Description */}
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-medium">
                                    Description
                                  </span>
                                </label>
                                <textarea
                                  name="description"
                                  className="textarea textarea-bordered h-28 w-full"
                                  defaultValue={selectedHabit?.description}
                                  required
                                ></textarea>
                              </div>

                              {/* Image URL */}
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-medium">
                                    Image URL (ImgBB)
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  name="image"
                                  defaultValue={selectedHabit?.image}
                                  className="input input-bordered w-full"
                                />
                              </div>

                              {/* Category */}
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-medium">
                                    Category
                                  </span>
                                </label>
                                <select
                                  name="category"
                                  value={selectedHabit?.category}
                                  className="select select-bordered w-full"
                                  required
                                >
                                  <option disabled>Select category</option>
                                  <option value="Morning">Morning</option>
                                  <option value="Work">Work</option>
                                  <option value="Fitness">Fitness</option>
                                  <option value="Evening">Evening</option>
                                  <option value="Study">Study</option>
                                </select>
                              </div>

                              {/* Reminder Time */}
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-medium">
                                    Reminder Time
                                  </span>
                                </label>
                                <input
                                  type="time"
                                  name="reminderTime"
                                  defaultValue={selectedHabit?.reminderTime}
                                  className="input input-bordered w-full"
                                  required
                                />
                              </div>

                              {/* User Name (read-only) */}
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-medium">
                                    User Name:{" "}
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  name="userName"
                                  defaultValue={user?.displayName}
                                  readOnly
                                  className="input input-bordered bg-gray-100"
                                />
                              </div>

                              {/* User Email (read-only) */}
                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text font-medium">
                                    User Email:
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  name="userEmail"
                                  defaultValue={user?.email}
                                  readOnly
                                  className="input input-bordered bg-gray-100"
                                />
                              </div>

                              {/* Submit Button */}
                              <button className="btn btn-primary mt-4">
                                Update Habit
                              </button>
                            </form>
                            <div className="modal-action">
                              <form method="dialog">
                                <button className="btn">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>

                        <button
                          onClick={() => handleDeleteHabit(habit?._id)}
                          className="btn btn-xs bg-red-500 text-white hover:bg-red-600"
                        >
                          Delete
                        </button>

                        <button className="btn btn-xs bg-green-500 text-white hover:bg-green-600">
                          Complete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-purple-600 text-lg"
                  >
                    You don't have any habits yet. Please add one to stay
                    motivated!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default MyHabits;
