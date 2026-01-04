import { useContext, useState } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import {
  FaUser,
  FaEnvelope,
  FaCheckCircle,
  FaTimesCircle,
  FaIdBadge,
  FaCalendarAlt,
  FaSignInAlt,
  FaGoogle,
} from "react-icons/fa";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, profileUpdate } = useContext(AuthContext);
  const [loading, setLoading] = useState(false)

  if (!user) return null;

  const handleUpdateProfile = (e) => {
    setLoading(true)
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photoURL.value;
    // console.log({ name, photo })
    profileUpdate(name, photo)
      .then(() => {
        toast.success("Profile update success")
        setLoading(false)
        e.target.reset();
      })
      .catch(() => {
        toast.error("Something went wrong.")
        setLoading(false)
      })
  }

  return (
    <section className="bg-base-200 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-8">My Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="card bg-base-100 shadow-md p-6 text-center">
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-28 h-28 rounded-full mx-auto mb-4 border"
            />

            <h2 className="text-xl font-semibold">
              {user.displayName || "No Name"}
            </h2>

            <p className="text-sm text-base-content/70 mt-1">{user.email}</p>

            <div className="mt-3 flex justify-center gap-2 items-center">
              {user.emailVerified ? (
                <>
                  <FaCheckCircle className="text-success" />
                  <span className="text-sm">Email Verified</span>
                </>
              ) : (
                <>
                  <FaTimesCircle className="text-error" />
                  <span className="text-sm">Email Not Verified</span>
                </>
              )}
            </div>
          </div>

          {/* Info Card */}
          <div className="md:col-span-2 card bg-base-100 shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Account Information</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaUser className="text-primary" />
                <span className="font-medium">Full Name:</span>
                <span className="text-base-content/70">{user.displayName}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <span className="font-medium">Email:</span>
                <span className="text-base-content/70">{user.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaIdBadge className="text-primary" />
                <span className="font-medium">User ID:</span>
                <span className="text-base-content/70 break-all">
                  {user.uid}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaGoogle className="text-primary" />
                <span className="font-medium">Login Provider:</span>
                <span className="text-base-content/70">
                  {user.providerData?.[0]?.providerId}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCalendarAlt className="text-primary" />
                <span className="font-medium">Account Created:</span>
                <span className="text-base-content/70">
                  {user?.metadata?.creationTime}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-7">
          <form onSubmit={handleUpdateProfile}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-xl">Update Your Profile</legend>

              <label className="label">Name</label>
              <input name="name" type="text" className="input" placeholder="Name" required />

              <label className="label">Photo Url</label>
              <input name="photoURL" type="text" className="input" placeholder="Photo Url" required />

              <button className="btn btn-neutral mt-4">{loading ? "Updating" : "Update Profile"}</button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
