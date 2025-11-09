import { Link, replace, useLocation, useNavigate } from "react-router";
import { use, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../AuthContext/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const {googleLogIn, passwordLogIn} = use(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handlePasswordLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    passwordLogIn(email, password)
      .then(() => {
        navigate(from, {replace: true})
        toast.success('LogIn Successful')
      })
    .catch(err => toast.error(err.message))
  }


  const handleGoogleLogIn = () => {
    googleLogIn()
      .then(() => {
        toast.success('LogIn Success')
        navigate(from, {replace: true})
      })
      .catch(err => toast.error(err.message))
  }

  return (
    <div className="flex justify-center items-center">
      <title>Login-to continue</title>
      <div className="lg:w-2/5 p-6 bg-gray-50 rounded-xl shadow-inner border border-gray-200 sticky top-4">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">
          Login to continue !
        </h2>

        <form onSubmit={handlePasswordLogIn} className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-base text-gray-700 font-semibold"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* password */}

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-base text-gray-700 font-semibold"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              placeholder="Enter Password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-gray-500 hover:text-primary z-10"
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          </div>

          {/* login button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-purple-600 text-white font-bold text-lg rounded-md hover:bg-purple-700 transition duration-150 ease-in-out shadow-md"
          >
            Login
          </button>
        </form>
        <button onClick={handleGoogleLogIn} className="btn w-full mt-5 bg-[#454545] text-white py-6 border-[#e5e5e5]">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <p className="mt-3 text-center text-lg">
          New to our website. Please{" "}
          <Link className="underline text-red-500" to={`/register`}>
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;