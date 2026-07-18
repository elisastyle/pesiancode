"use client";
import { useState } from "react";

function Tabs({ active, onChange }) {
  return (
    <div className="flex mb-6 bg-[#0f172a] p-1 rounded-lg">
      {["login", "signup"].map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`flex-1 p-3 text-center font-semibold rounded-md transition
            ${
              active === t
                ? "bg-purple-600 text-white"
                : "text-white/60 hover:text-white"
            }
          `}
        >
          {t === "login" ? "Login" : "Sign Up"}
        </button>
      ))}
    </div>
  );
}

function LoginForm() {
  return (
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
  );
}

function SignupForm() {
  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Full Name"
        className="p-3 rounded bg-[#0f172a] border border-white/10"
      />
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
        Create Account
      </button>
    </form>
  );
}

export default function AuthPage() {
  const [tab, setTab] = useState("login");

  return (
    <main className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center">
      <div className="bg-[#1e293b] p-10 rounded-xl w-full max-w-md">
        <Tabs active={tab} onChange={setTab} />
        {tab === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </main>
  );
}
