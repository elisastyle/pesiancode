export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center">
      <div className="bg-[#1e293b] p-10 rounded-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded bg-[#0f172a] border border-white/10"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-[#0f172a] border border-white/10"
          />

          <button className="bg-purple-600 hover:bg-purple-700 transition p-3 rounded font-semibold">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
