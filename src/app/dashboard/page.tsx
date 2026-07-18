export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white flex">

      {/* Sidebar */}
      <aside className="w-64 bg-[#1e293b] p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>

        <nav className="flex flex-col gap-4 text-gray-300">
          <button className="text-left hover:text-white transition">Overview</button>
          <button className="text-left hover:text-white transition">Users</button>
          <button className="text-left hover:text-white transition">Analytics</button>
          <button className="text-left hover:text-white transition">Settings</button>
        </nav>
      </aside>

      {/* Content */}
      <section className="flex-1 p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Welcome back 👋</h1>
          <button className="px-6 py-2 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition">
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
            <h2 className="text-xl font-bold mb-2">Users</h2>
            <p className="text-gray-300">Manage your users and accounts.</p>
          </div>

          <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
            <h2 className="text-xl font-bold mb-2">Analytics</h2>
            <p className="text-gray-300">Track your website performance.</p>
          </div>

          <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:scale-[1.02] transition">
            <h2 className="text-xl font-bold mb-2">Settings</h2>
            <p className="text-gray-300">Configure your preferences.</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• User “el” logged in</li>
            <li>• New signup created</li>
            <li>• Analytics updated</li>
          </ul>
        </div>

      </section>
    </main>
  );
}
