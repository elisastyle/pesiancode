"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

/* ============================
   🔥 Toast Component (No Hooks)
   ============================ */
function Toast({ message, type }) {
  return (
    <div
      className={`
        fixed top-6 right-6 px-4 py-3 rounded-xl shadow-xl text-white
        flex items-center gap-3 animate-slide-in
        ${type === "success" ? "bg-green-600" : "bg-red-600"}
      `}
    >
      <span className="text-lg">
        {type === "success" ? "✔️" : "⚠️"}
      </span>
      <span className="font-medium">{message}</span>
    </div>
  );
}

/* ============================
   🔥 Dashboard Component
   ============================ */
export default function DashboardPage() {
  const router = useRouter();
  // ⭐ برای دکمه چشم
  const [showPassword, setShowPassword] = useState(false);
  /* ⭐ Toast State */
  const [toast, setToast] = useState(null);

  function showToast(message, type = "success") {
    setToast({ message, type });
    setTimeout(() => setToast(null), 2500);
  }

  /* ⭐ User Info */
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(
    "https://api.dicebear.com/7.x/thumbs/svg?seed=default"
  );

  /* ⭐ Active Page */
  const [activePage, setActivePage] = useState("overview");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.name) {
      setUsername(user.name);
      setAvatar(`https://api.dicebear.com/7.x/thumbs/svg?seed=${user.name}`);
    }
  }, []);

  function handleLogout() {
    router.push("/login");
  }

  const menuClass = (page) =>
    `text-left transition ${
      activePage === page
        ? "text-white font-semibold bg-[#334155] px-3 py-2 rounded-lg"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <main className="min-h-screen bg-[#0f172a] text-white flex">

      {/* ⭐ Toast Renderer */}
      {toast && <Toast message={toast.message} type={toast.type} />}

      {/* ⭐ Sidebar */}
      <aside className="w-64 bg-[#1e293b] p-6 hidden md:block">

        {/* ⭐ Avatar + Hello */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={avatar}
            alt="avatar"
            className="w-6 h-6 rounded-full border border-purple-500 bg-white"
          />
          <span className="text-lg font-semibold">Hello {username} 👋</span>
        </div>

        {/* ⭐ Dashboard Title */}
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>

        {/* ⭐ Menu */}
        <nav className="flex flex-col gap-4">
          <button onClick={() => setActivePage("overview")} className={menuClass("overview")}>
            Overview
          </button>

          <button onClick={() => setActivePage("users")} className={menuClass("users")}>
            Users
          </button>

          <button onClick={() => setActivePage("analytics")} className={menuClass("analytics")}>
            Analytics
          </button>

          <button onClick={() => setActivePage("settings")} className={menuClass("settings")}>
            Settings
          </button>
        </nav>
      </aside>

      {/* ⭐ Content */}
      <section className="flex-1 p-10">

        {/* ⭐ Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Welcome back 👋</h1>

          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Logout
          </button>
        </div>

        {/* ⭐ Overview Page */}
        {activePage === "overview" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>

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

            <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
              <ul className="space-y-3 text-gray-300">
                <li>• User “{username}” logged in</li>
                <li>• New signup created</li>
                <li>• Analytics updated</li>
              </ul>
            </div>
          </div>
        )}

        {/* ⭐ Users Page */}
        {activePage === "users" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Users</h2>
            <p className="text-gray-300">Manage your users here.</p>
          </div>
        )}

        {/* ⭐ Analytics Page */}
        {activePage === "analytics" && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Analytics</h2>
            <p className="text-gray-300">Track your analytics here.</p>
          </div>
        )}

        {/* ⭐ Settings Page */}
        {/* ⭐ Settings Page */}
{activePage === "settings" && (
  <div className="max-w-xl bg-[#1e293b] p-8 rounded-2xl shadow-xl border border-gray-700 space-y-10">

    {/* Profile Section */}
    <div>
      <h3 className="text-xl font-bold mb-4">Profile Information</h3>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-2 font-medium">
            Display Name
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-xl bg-[#0f172a] border border-gray-600 text-white 
                       focus:border-purple-500 focus:ring-2 focus:ring-purple-600 outline-none transition"
            placeholder="Your name"
          />
        </div>

        <button
          onClick={() => {
            const user = JSON.parse(localStorage.getItem("user")) || {};
            user.name = username;
            localStorage.setItem("user", JSON.stringify(user));
            showToast("Name updated successfully!", "success");
          }}
          className="w-full py-3 bg-purple-600 rounded-xl font-semibold hover:bg-purple-700 transition"
        >
          Save Changes
        </button>
      </div>
    </div>

    <hr className="border-gray-700" />

    {/* Security Section */}
    <div>
      <h3 className="text-xl font-bold mb-4">Security</h3>

      <div className="space-y-4">

        {/* Password Field */}
        <div>
          <label className="block text-gray-300 mb-2 font-medium">
            New Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="newPass"
              className="w-full p-3 rounded-xl bg-[#0f172a] border border-gray-600 text-white 
                         focus:border-purple-500 focus:ring-2 focus:ring-purple-600 outline-none transition"
              placeholder="Enter new password"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-white transition"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {/* Update Password Button */}
        <button
          onClick={() => {
            const newPass = document.getElementById("newPass").value;
            if (!newPass) return showToast("Password cannot be empty!", "error");

            const user = JSON.parse(localStorage.getItem("user")) || {};
            user.password = newPass;
            localStorage.setItem("user", JSON.stringify(user));

            showToast("Password updated successfully!", "success");
          }}
          className="w-full py-3 bg-purple-600 rounded-xl font-semibold hover:bg-purple-700 transition"
        >
          Update Password
        </button>

      </div>
    </div>

  </div>
)}


      </section>
    </main>
  );
}
