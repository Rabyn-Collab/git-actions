export default function App() {
  const features = [
    {
      title: "Lightning Fast",
      description: "Built with React and Tailwind CSS for exceptional performance.",
      icon: "⚡",
    },
    {
      title: "Responsive",
      description: "Looks beautiful on desktop, tablet, and mobile devices.",
      icon: "📱",
    },
    {
      title: "Modern UI",
      description: "Clean layouts, gradients, glassmorphism, and smooth hover effects.",
      icon: "🎨",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute right-20 top-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6">
        {/* Navbar */}
        <header className="flex items-center justify-between py-8">
          <h1 className="text-2xl font-bold">
            Dev<span className="text-cyan-400">Flow</span>
          </h1>

          <nav className="hidden gap-8 text-gray-300 md:flex">
            <a href="#" className="hover:text-white">
              Home
            </a>
            <a href="#" className="hover:text-white">
              Features
            </a>
            <a href="#" className="hover:text-white">
              Pricing
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </nav>

          <button className="rounded-xl bg-cyan-500 px-5 py-2 font-semibold text-slate-900 transition hover:bg-cyan-400">
            Get Started
          </button>
        </header>

        {/* Hero */}
        <section className="flex flex-1 items-center py-20">
          <div className="grid w-full items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                🚀 React + Tailwind CSS
              </span>

              <h2 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
                Build Amazing
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Web Experiences
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg text-gray-400">
                Create beautiful, responsive, and high-performance applications
                with React and Tailwind CSS. Designed for developers who love
                clean UI and modern experiences.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-slate-900 transition hover:scale-105 hover:bg-cyan-400">
                  Start Building
                </button>

                <button className="rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10">
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero Card */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
                <div className="mb-6 flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <div className="space-y-4">
                  <div className="h-4 w-2/3 rounded bg-slate-700" />
                  <div className="h-4 rounded bg-slate-800" />
                  <div className="h-4 w-5/6 rounded bg-slate-700" />
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-cyan-500/20 p-6 text-center">
                      <h3 className="text-3xl font-bold text-cyan-400">
                        100+
                      </h3>
                      <p className="mt-2 text-gray-400">Components</p>
                    </div>

                    <div className="rounded-xl bg-purple-500/20 p-6 text-center">
                      <h3 className="text-3xl font-bold text-purple-400">
                        99%
                      </h3>
                      <p className="mt-2 text-gray-400">Performance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="pb-20">
          <h3 className="mb-12 text-center text-4xl font-bold">
            Why Choose Us?
          </h3>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:bg-white/10"
              >
                <div className="mb-5 text-5xl">{feature.icon}</div>

                <h4 className="mb-3 text-2xl font-semibold">
                  {feature.title}
                </h4>

                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 text-center text-gray-500">
          © {new Date().getFullYear()} DevFlow. Crafted with ❤️ using React &
          Tailwind CSS.
        </footer>
      </div>
    </div>
  );
}