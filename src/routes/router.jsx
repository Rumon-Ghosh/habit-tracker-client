import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AllHabits from "../pages/AllHabits/AllHabits";
import MyHabits from "../pages/MyHabits/MyHabits";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddHabit from "../pages/AddHabits/AddHabit";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoadingSpinner from "../components/LoadingSpinner";
import HabitDetails from "../pages/HabitsDetails/HabitDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () =>
          fetch("https://habit-tracker-server-chi.vercel.app/latest-habits"),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/all-habits",
        element: <AllHabits></AllHabits>,
      },
      {
        path: "/habit/:id",
        element: (
          <PrivateRoute>
            <HabitDetails></HabitDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-habits",
        element: (
          <PrivateRoute>
            <MyHabits></MyHabits>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-habit",
        element: (
          <PrivateRoute>
            <AddHabit></AddHabit>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
