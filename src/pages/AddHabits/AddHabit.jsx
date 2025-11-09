import React, { use } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";

const AddHabit = () => {
  const { user } = use(AuthContext)


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-200 rounded-xl shadow-md my-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Add New Habit</h2>

      <form onSubmit={``} className="grid grid-cols-1 gap-5">
        
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
            <option disabled selected>Select category</option>
            <option value={`morning`}>Morning</option>
            <option value={`work`}>Work</option>
            <option value={`fitness`}>Fitness</option>
            <option value={`evening`}>Evening</option>
            <option value={`study`}>Study</option>
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
            defaultValue={user?.displayName}
            readOnly
            className="input input-bordered bg-gray-100"
          />
        </div>

        {/* User Email (read-only) */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">User Email:</span>
          </label>
          <input
            type="text"
            defaultValue={user?.email}
            readOnly
            className="input input-bordered bg-gray-100"
          />
        </div>

        {/* Public or Private */}
        <div className="form-control">
          <label className="cursor-pointer label flex justify-start gap-3">
            <input 
              type="checkbox" 
              className="checkbox checkbox-primary"
              checked="true"
            />
            <span className="label-text font-medium">Make this habit Public</span>
          </label>
        </div>

        {/* Submit Button */}
        <button className="btn btn-primary mt-4">Add Habit</button>
      </form>
    </div>
  );
};

export default AddHabit;
