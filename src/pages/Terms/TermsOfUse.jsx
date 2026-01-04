import { 
  FaShieldAlt, 
  FaUserCircle, 
  FaFileContract, 
  FaExclamationTriangle 
} from "react-icons/fa";

const TermsOfUse = () => {
  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Terms of Use</h1>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            These terms govern your use of our Habit Tracker platform. Please
            review them carefully.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="card bg-base-100 shadow-md p-6">
            <FaShieldAlt className="text-primary text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Platform Usage
            </h3>
            <p className="text-base-content/70">
              Our platform helps users build healthy daily habits. You agree to
              use the application responsibly and lawfully.
            </p>
          </div>

          <div className="card bg-base-100 shadow-md p-6">
            <FaUserCircle className="text-primary text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              User Accounts
            </h3>
            <p className="text-base-content/70">
              You are responsible for keeping your account credentials secure
              and for all activity that occurs under your account.
            </p>
          </div>

          <div className="card bg-base-100 shadow-md p-6">
            <FaFileContract className="text-primary text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Content Ownership
            </h3>
            <p className="text-base-content/70">
              You retain full ownership of your habit data. We only store and
              process it to deliver tracking and analytics features.
            </p>
          </div>

          <div className="card bg-base-100 shadow-md p-6">
            <FaExclamationTriangle className="text-primary text-3xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Service Updates
            </h3>
            <p className="text-base-content/70">
              Features may change or improve over time. We reserve the right to
              update or modify the service to enhance user experience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
