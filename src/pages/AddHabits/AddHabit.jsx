import React, { use, useRef } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AddHabit = () => {
  const { user } = use(AuthContext);
  const isPublicRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newHabit = {
      title: form.title.value,
      description: form.description.value,
      image: form.image.value,
      category: form.category.value,
      reminderTime: form.reminderTime.value,
      userName: form.userName.value,
      userEmail: form.userEmail.value,
      isPublic: isPublicRef.current.checked,
    };
    // console.log(newHabit)
    fetch(`${import.meta.env.VITE_API_URL}/habits`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newHabit),
    })
      .then((result) => result.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Habit Added Successfully");
          form.reset();
          navigate("/");
        }
      })
      .catch((err) => toast.error(`Error: ${err.message}`));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-200 rounded-xl shadow-md my-8">
      <title>Add Your Habits</title>
      <h2 className="text-3xl font-bold mb-6 text-center">Add New Habit</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
        {/* Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Habit Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Morning Jogging"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered h-28 w-full"
            placeholder="Describe your habit…"
            required
          ></textarea>
        </div>

        {/* Image URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Image URL (ImgBB)</span>
          </label>
          <input
            type="text"
            name="image"
            placeholder="https://ibb.co/your-image"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Category</span>
          </label>
          <select
            name="category"
            className="select select-bordered w-full"
            required
          >
            <option disabled selected>
              Select category
            </option>
            <option value="Morning">Morning</option>
            <option value="Work">Work</option>
            <option value="Fitness">Fitness</option>
            <option value="Evening">Evening</option>
            <option value="Study">Study</option>
            <option value="Playing">Playing</option>
          </select>
        </div>

        {/* Reminder Time */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Reminder Time</span>
          </label>
          <input
            type="time"
            name="reminderTime"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* User Name (read-only) */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">User Name: </span>
          </label>
          <input
            type="text"
            name="userName"
            defaultValue={user?.displayName}
            readOnly
            className="input input-bordered text-gray-500"
          />
        </div>

        {/* User Email (read-only) */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">User Email:</span>
          </label>
          <input
            type="text"
            name="userEmail"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered text-gray-500"
          />
        </div>

        {/* Public or Private */}
        <div className="form-control">
          <label className="cursor-pointer label flex justify-start gap-3">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              defaultChecked={false}
              ref={isPublicRef}
            />
            <span className="label-text font-medium">
              Make this habit Public
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button className="btn btn-primary mt-4">Add Habit</button>
      </form>
    </div>
  );
};

export default AddHabit;
