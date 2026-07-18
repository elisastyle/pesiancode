"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
/* ---------------- PASSWORD INPUT ---------------- */
function PasswordInput({ value, onChange }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        placeholder="Password"
        className="p-3 rounded bg-[#0f172a] border border-white/10 w-full pr-10"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
      >
        {show ? "🙈" : "👁️"}
      </button>
    </div>
  );
}

/* ---------------- FORGOT PASSWORD ---------------- */
function ForgotPasswordForm({ onBack }) {
  const [email, setEmail] = useState("");

  function handleReset(e) {
    e.preventDefault();

    const saved = JSON.parse(localStorage.getItem("user"));

    if (!saved || saved.email !== email) {
      alert("No account found with this email.");
      return;
    }

    alert("Password reset link sent (demo).");
  }

  return (
    <form onSubmit={handleReset} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="p-3 rounded bg-[#0f172a] border border-white/10"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="bg-purple-600 hover:bg-purple-700 transition p-3 rounded font-semibold">
        Reset Password
      </button>

      <button
        type="button"
        onClick={onBack}
        className="text-white/60 hover:text-white text-sm mt-2"
      >
        Back to Login
      </button>
    </form>
  );
}

/* ---------------- TABS ---------------- */
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

/* ---------------- LOGIN FORM ---------------- */
function LoginForm({ onForgot }) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const saved = JSON.parse(localStorage.getItem("user"));

    if (!saved) {
      alert("No account found. Please sign up first.");
      return;
    }

    if (saved.email === email && saved.password === password) {
      alert("Login successful!");

      // 🔥 اینجا می‌ره داخل داشبورد
      router.push("/dashboard");
    } else {
      alert("Incorrect email or password.");
    }
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        className="p-3 rounded bg-[#0f172a] border border-white/10"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <PasswordInput value={password} onChange={setPassword} />

      <button className="bg-purple-600 hover:bg-purple-700 transition p-3 rounded font-semibold">
        Login
      </button>

      <button
        type="button"
        onClick={onForgot}
        className="text-white/60 hover:text-white text-sm"
      >
        Forgot password?
      </button>
    </form>
  );
}


/* ---------------- SIGNUP FORM ---------------- */
function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created! You can now login.");
  }

  return (
    <form onSubmit={handleSignup} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Full Name"
        className="p-3 rounded bg-[#0f172a] border border-white/10"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        className="p-3 rounded bg-[#0f172a] border border-white/10"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <PasswordInput value={password} onChange={setPassword} />

      <button className="bg-purple-600 hover:bg-purple-700 transition p-3 rounded font-semibold">
        Create Account
      </button>
    </form>
  );
}

/* ---------------- MAIN PAGE ---------------- */
export default function AuthPage() {
  const [tab, setTab] = useState("login");
  const [forgot, setForgot] = useState(false);

  return (
    <main className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center">
      <div className="bg-[#1e293b] p-10 rounded-xl w-full max-w-md">

        {!forgot && <Tabs active={tab} onChange={setTab} />}

        {forgot ? (
          <ForgotPasswordForm onBack={() => setForgot(false)} />
        ) : tab === "login" ? (
          <LoginForm onForgot={() => setForgot(true)} />
        ) : (
          <SignupForm />
        )}
      </div>
    </main>
  );
}
