const Dashboard = () => {
  return (
    <div className="">
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <h2 className="text-xl font-bold">Admin Dashboard</h2>
            <p className="text-sm text-gray-600 font-medium">
              Last updated: April 30, 2025, 12:33 a.m.
            </p>
          </div>
          <div className="mt-2">
            <h3 className="text-2xl font-semibold mb-2">Welcome, Akash!</h3>
            <p className="text-gray-700">
              This is your admin dashboard where you can manage users and system
              settings.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { label: "Total Users", value: 8 },
            { label: "Active Users", value: 8 },
            { label: "Verified Users", value: 8 },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center"
            >
              <p className="text-3xl font-bold text-orange-500">{stat.value}</p>
              <p className="text-gray-600 mt-2 text-center">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
