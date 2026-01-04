import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../../AuthContext/AuthContext";

const Login = () => {
  const { googleLogIn, passwordLogIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await passwordLogIn(data.email, data.password);
      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then(() => {
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const handleAutoFill = () => {
    setValue("email", "user@gmail.com");
    setValue("password", "User12");
    toast.success("Demo credentials filled");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Login to Continue
        </h2>

        <button
          onClick={handleAutoFill}
          className="btn btn-accent w-full mb-4"
        >
          Use Demo Account
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="label font-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="input input-bordered w-full pr-10"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-error text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full mt-4"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogIn}
          className="btn btn-outline w-full mt-4"
        >
          Login with Google
        </button>

        <p className="text-center mt-4">
          New to our website?
          <Link to="/register" className="text-primary font-semibold ml-1">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
