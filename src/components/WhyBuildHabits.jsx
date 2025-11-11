import { FaBrain, FaSmileBeam, FaClock, FaChartLine } from "react-icons/fa";

const WhyBuildHabits = () => {
  return (
    <div className="w-11/12 mx-auto px-3 py-6 mt-8 md:mt-15 mb-2 rounded-2xl bg-base-200">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-purple-600">
        Why Build Habits?
      </h2>

      <p className="text-center mb-8 text-gray-800"> Small daily actions lead to big life changes—build habits that shape a better you.</p>

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        
        {/* Card 1 */}
        <div className="card bg-white shadow-md border border-purple-200 hover:shadow-lg transition">
          <div className="card-body items-center text-center">
            <FaBrain className="text-5xl text-purple-500 mb-3" />
            <h3 className="font-bold text-lg text-purple-600">Better Focus</h3>
            <p className="text-sm text-gray-600">
              Create routines that sharpen your concentration and help you stay aligned with your goals.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-white shadow-md border border-purple-200 hover:shadow-lg transition">
          <div className="card-body items-center text-center">
            <FaSmileBeam className="text-5xl text-purple-500 mb-3" />
            <h3 className="font-bold text-lg text-purple-600">Reduced Stress</h3>
            <p className="text-sm text-gray-600">
              Consistent habits simplify your day and reduce decision fatigue, lowering overall stress.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-white shadow-md border border-purple-200 hover:shadow-lg transition">
          <div className="card-body items-center text-center">
            <FaClock className="text-5xl text-purple-500 mb-3" />
            <h3 className="font-bold text-lg text-purple-600">Improved Discipline</h3>
            <p className="text-sm text-gray-600">
              Daily repetition helps build self-control and boosts your ability to stay consistent long-term.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card bg-white shadow-md border border-purple-200 hover:shadow-lg transition">
          <div className="card-body items-center text-center">
            <FaChartLine className="text-5xl text-purple-500 mb-3" />
            <h3 className="font-bold text-lg text-purple-600">Trackable Growth</h3>
            <p className="text-sm text-gray-600">
              Visual progress charts keep you motivated and help you celebrate your small wins every day.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyBuildHabits;
