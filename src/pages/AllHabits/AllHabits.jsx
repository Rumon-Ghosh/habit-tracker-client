import React, { useEffect, useState } from "react";
import HabitCard from "../../components/HabitCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import toast from "react-hot-toast";

const AllHabits = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/habits")
      .then((res) => res.json())
      .then((data) => {
        setHabits(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Something went wrong")
        setLoading(false)
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    const searchField = e.target.search.value;
    // console.log(searchField)
    fetch(`http://localhost:3000/search/?search=${searchField}`)
      .then((res) => res.json())
      .then((data) => {
        setHabits(data);
        setLoading(false);
      })
      .catch(err => toast.error(err.message))
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const filterValue = e.target.category.value;
    if (filterValue !== "All") {
      setLoading(true);
      fetch(`http://localhost:3000/filter/?filter=${filterValue}`)
        .then((res) => res.json())
        .then((data) => {
          setHabits(data);
          setLoading(false);
        })
        .catch(() => {
          toast.error('Something went wrong')
        })
      } else {
        setLoading(true);
        fetch("http://localhost:3000/habits")
        .then((res) => res.json())
        .then((data) => {
          setHabits(data);
          setLoading(false);
        })
          .catch(() => {
          toast.error('Something went wrong')
        })
    }
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="w-11/12 mx-auto pb-10">
      <title>Browse Public Habits</title>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-600">
          Browse Public Habits
        </h1>
        <p className="text-gray-600 mt-2 w-10/12 md:w-7/12 mx-auto">
          Explore habits created by other users. Filter by category or search
          for something specific to fuel your personal growth journey.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="search"
            placeholder="Search habits by title..."
            name="search"
            className="input input-bordered w-full bg-white border-purple-300 focus:border-purple-500"
          />
          <button className="btn bg-purple-500 text-white">Search</button>
        </form>

        <form onSubmit={handleFilter} className="flex gap-2">
          <select
            name="category"
            className="select select-bordered w-32"
            required
            defaultValue="Select category"
          >
            <option disabled selected>
              Select category
            </option>
            <option value="All">All</option>
            <option value="Morning">Morning</option>
            <option value="Work">Work</option>
            <option value="Fitness">Fitness</option>
            <option value="Evening">Evening</option>
            <option value="Study">Study</option>
            <option value="Playing">Playing</option>
          </select>
          <button className="btn">Filter</button>
        </form>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {habits.length > 0 ? (
          habits.map((habit) => <HabitCard key={habit._id} habit={habit} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No habits found. Try another search or filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllHabits;
