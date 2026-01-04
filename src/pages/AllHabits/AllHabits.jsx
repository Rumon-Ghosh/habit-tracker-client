import React, { useEffect, useState } from "react";
import HabitCard from "../../components/HabitCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import toast from "react-hot-toast";

const AllHabits = () => {
  const [habits, setHabits] = useState([]);
  const [created, setCreated] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    setLoading(true);
    fetch(
      `${
        import.meta.env.VITE_API_URL
      }/habits?page=${page}&limit=${limit}&sort=${created}`
    )
      .then((res) => res.json())
      .then((data) => {
        setHabits(data.result);
        setTotalPage(data.totalPage);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Something went wrong");
        setLoading(false);
      });
  }, [page, limit, created]);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    const searchField = e.target.search.value;
    // console.log(searchField)
    fetch(`${import.meta.env.VITE_API_URL}/search/?search=${searchField}`)
      .then((res) => res.json())
      .then((data) => {
        setHabits(data);
        setTotalPage(Math.ceil(data.length / limit));
        setLoading(false);
      })
      .catch((err) => toast.error(err.message));
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const filterValue = e.target.category.value;
    if (filterValue !== "All") {
      setLoading(true);
      fetch(`${import.meta.env.VITE_API_URL}/filter/?filter=${filterValue}`)
        .then((res) => res.json())
        .then((data) => {
          setHabits(data);
          setTotalPage(Math.ceil(data.length / limit));
          // console.log(totalPage)
          setLoading(false);
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
    } else {
      setLoading(true);
      fetch(
        `${import.meta.env.VITE_API_URL}/habits?page=${page}&limit=${limit}`
      )
        .then((res) => res.json())
        .then((data) => {
          setHabits(data.result);
          setTotalPage(data.totalPage);
          setLoading(false);
        })
        .catch(() => {
          toast.error("Something went wrong");
        });
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
        <p className="mt-2 w-10/12 md:w-7/12 mx-auto">
          Explore habits created by other users. Filter by category or search
          for something specific to fuel your personal growth journey.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div>
          {/* search form */}
          <form onSubmit={handleSearch} className="flex gap-0.5">
            <input
              type="search"
              placeholder="Search habits by title..."
              name="search"
              className="input input-bordered w-full bg-white text-gray-700 border-purple-300 focus:border-purple-500"
            />
            <button className="btn bg-purple-500 text-white">Search</button>
          </form>
        </div>

        <div className="flex gap-4 flex-col md:flex-row">
          {/* Sort Form */}
          <form className="w-48">
            <select
              onChange={(e) => setCreated(e.target.value)}
              className="select w-full"
            >
              <option value="">Sort By</option>
              <option value="latest">Latest</option>
              <option value="old">Old</option>
            </select>
          </form>

          {/* filter form */}
          <form onSubmit={handleFilter} className="flex gap-0.5">
            <select
              name="category"
              className="select select-bordered w-36"
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
            <button className="btn bg-purple-500 text-white">Filter</button>
          </form>
        </div>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {habits.length > 0 ? (
          habits.map((habit) => <HabitCard key={habit._id} habit={habit} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No habits found. Try another search or filter.
          </p>
        )}
      </div>
      <div className="flex items-center justify-center gap-3 mt-7">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-primary"
        >
          Prev
        </button>
        <p className="text-lg font-bold"> {page}</p>
        <button
          disabled={page === totalPage}
          onClick={() => setPage(page + 1)}
          className="btn btn-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllHabits;
