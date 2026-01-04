import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { AuthContext } from "../../AuthContext/AuthContext";

const Register = () => {
  const { passwordRegister, googleLogIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password, photo } = data;

    try {
      await passwordRegister(email, password);
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      toast.success("Registration successful!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then(() => {
        toast.success("Login successful");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md bg-base-100 shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label font-semibold">Full Name</label>
            <input
              className="input input-bordered w-full"
              placeholder="Your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-error text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="Email address"
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

          {/* Photo URL */}
          <div>
            <label className="label font-semibold">Photo URL</label>
            <input
              className="input input-bordered w-full"
              placeholder="Profile photo URL"
              {...register("photo", {
                required: "Photo URL is required",
              })}
            />
            {errors.photo && (
              <p className="text-error text-sm mt-1">
                {errors.photo.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="label font-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="input input-bordered w-full pr-10"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                  message:
                    "Must include at least one uppercase and lowercase letter",
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
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogIn}
          className="btn btn-outline w-full mt-4"
        >
          Continue with Google
        </button>

        <p className="text-center mt-4">
          Already have an account?
          <Link to="/login" className="text-primary font-semibold ml-1">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
