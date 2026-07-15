import Link from "next/link";

<span>
  <Link href="/login" className="hover:text-white transition">
    Login
  </Link>
</span>

export default function Home() {
  return (
    <main className="font-sans bg-[#0f172a] text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold">Hostinger Clone</h1>
        <div className="flex gap-8 text-gray-300">
          <span>Web Hosting</span>
          <span>VPS Hosting</span>
          <span>Domain</span>
         <span>
  <Link href="/login" className="hover:text-white transition">
    Login
  </Link>
</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24">
        <h2 className="text-5xl font-bold mb-4">
          From idea to online success
        </h2>
        <p className="text-gray-300 mb-8">
          Build your website with fast, secure hosting.
        </p>
        <button className="px-8 py-4 bg-purple-600 rounded-lg text-lg font-semibold">
          Get Started
        </button>
      </section>

      {/* Plans */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10 py-20">
        {[
          { title: "Web Hosting", price: "$2.99/mo" },
          { title: "Cloud Hosting", price: "$9.99/mo" },
          { title: "VPS Hosting", price: "$4.99/mo" },
          { title: "WordPress Hosting", price: "$2.99/mo" },
        ].map((p) => (
          <div key={p.title} className="bg-[#1e293b] p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-3">{p.title}</h3>
            <p className="text-purple-400 text-lg">{p.price}</p>
          </div>
        ))}
      </section>

      {/* Brands */}
      <section className="flex justify-center gap-10 py-10 text-gray-400">
        {["GitHub", "DHL", "Caterpillar", "Figma"].map((b) => (
          <span key={b} className="text-xl">{b}</span>
        ))}
      </section>

      {/* Testimonials */}
      <section className="px-10 py-20">
        <h2 className="text-3xl font-bold mb-10">What our customers say</h2>
        <div className="bg-[#1e293b] p-6 rounded-xl">
          <p className="text-gray-300">
            “Amazing hosting service. Fast, reliable and easy to use.”
          </p>
          <p className="mt-4 text-purple-400">★★★★★</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-400">
        © 2026 Hostinger Clone — Built with Next.js + Tailwind
      </footer>

    </main>
  );
}
