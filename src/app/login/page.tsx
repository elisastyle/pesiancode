"use client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();
    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center">
      <div className="bg-[#1e293b] p-10 rounded-xl w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-[#0f172a] border border-gray-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-[#0f172a] border border-gray-600"
          />

          <button className="bg-purple-600 hover:bg-purple-700 p-3 rounded text-white">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
