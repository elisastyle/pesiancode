export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white p-10">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1e293b] p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Users</h2>
          <p className="text-gray-300">Manage your users and accounts.</p>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Analytics</h2>
          <p className="text-gray-300">Track your website performance.</p>
        </div>

        <div className="bg-[#1e293b] p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Settings</h2>
          <p className="text-gray-300">Configure your preferences.</p>
        </div>
      </div>
    </main>
  );
}
