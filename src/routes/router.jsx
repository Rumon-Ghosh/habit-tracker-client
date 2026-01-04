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
import Support from "../pages/Support/Support";
import DashboardLayout from "../layouts/DashboardLayout";
import TermsOfUse from "../pages/Terms/TermsOfUse";
import PrivacyPolicy from "../pages/Policy/PrivacyPolicy";
import CookiePolicy from "../pages/CookiePolicy/CookiePolicy";
import DashboardHome from "../pages/DashboardHome/DashboardHome";
import MyProfile from "../pages/MyProfile/MyProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/latest-habits`),
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/all-habits",
        element: <AllHabits></AllHabits>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/terms",
        element: <TermsOfUse></TermsOfUse>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/cookie",
        element: <CookiePolicy></CookiePolicy>,
      },
      {
        path: "/habit/:id",
        element: <HabitDetails></HabitDetails>,
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
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "my-habits",
        element: (
          <PrivateRoute>
            <MyHabits></MyHabits>
          </PrivateRoute>
        ),
      },
      {
        path: "add-habit",
        element: (
          <PrivateRoute>
            <AddHabit></AddHabit>
          </PrivateRoute>
        ),
      },
      {
        path: "my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      }
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
