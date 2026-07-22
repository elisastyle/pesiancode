"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <main className="font-sans bg-[#0f172a] text-white min-h-screen">

      {/* Header */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          We’d love to hear from you. Whether you have a question or need support,
          our team is here to help.
        </p>
      </section>

      {/* Contact Box */}
      <section className="max-w-4xl mx-auto bg-[#1e293b] p-10 rounded-2xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              Reach out to us anytime and we’ll get back to you as soon as possible.
            </p>

            <div className="space-y-4 text-gray-300">
              <p>📧 Email: support@hostingerclone.com</p>
              <p>📞 Phone: +1 (555) 123‑4567</p>
              <p>📍 Address: 123 Web Hosting Street, Internet City</p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm">Your Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-[#0f172a] border border-white/10 focus:border-purple-500 outline-none"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Email Address</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-[#0f172a] border border-white/10 focus:border-purple-500 outline-none"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block mb-2 text-sm">Message</label>
              <textarea
                rows="5"
                className="w-full p-3 rounded-lg bg-[#0f172a] border border-white/10 focus:border-purple-500 outline-none"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-400 py-10 mt-20">
        © 2026 Hostinger Clone — Built with Next.js + Tailwind
      </footer>

    </main>
  );
}
