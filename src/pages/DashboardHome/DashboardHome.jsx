import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid
} from "recharts";
import { FaList, FaGlobe, FaLock, FaCheckCircle } from "react-icons/fa";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    if (!user) return;

    fetch(`${import.meta.env.VITE_API_URL}/my-habits?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`
      }
    })
      .then(res => res.json())
      .then(data => setHabits(data));
  }, [user]);

  // Stats
  const totalHabits = habits.length;
  const publicHabits = habits.filter(h => h.isPublic).length;
  const privateHabits = totalHabits - publicHabits;
  const totalCompletions = habits.reduce(
    (sum, h) => sum + h.completionHistory.length,
    0
  );

  // Category chart data
  const categoryData = ["Morning", "Work", "Fitness", "Evening", "Study"].map(cat => ({
    category: cat,
    count: habits.filter(h => h.category === cat).length
  }));

  // Completion trend (last 7 days)
  const last7Days = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const day = date.toISOString().split("T")[0];

    return {
      date: day.slice(5),
      completed: habits.filter(h =>
        h.completionHistory.includes(day)
      ).length
    };
  }).reverse();

  return (
    <div className="p-6 space-y-8">

      {/* Page Title */}
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-6">
        <StatCard icon={<FaList />} label="Total Habits" value={totalHabits} />
        <StatCard icon={<FaGlobe />} label="Public Habits" value={publicHabits} />
        <StatCard icon={<FaLock />} label="Private Habits" value={privateHabits} />
        <StatCard icon={<FaCheckCircle />} label="Total Completions" value={totalCompletions} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Bar Chart */}
        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Habits by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="card bg-base-100 shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Completion Trend (7 Days)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={last7Days}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="completed" />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="card bg-base-100 shadow-md p-6 flex items-center gap-4">
    <div className="text-3xl text-primary">{icon}</div>
    <div>
      <p className="text-sm text-base-content/70">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

export default DashboardHome;
