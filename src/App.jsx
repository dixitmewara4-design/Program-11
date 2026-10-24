
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'

function Home() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
        Welcome to RouteFlow
      </p>
      <h1 className="text-4xl font-black leading-tight sm:text-6xl">
        Navigate ideas.
        <br />
        <span className="text-cyan-300">Create the future.</span>
      </h1>
      <p className="mt-6 max-w-xl leading-7 text-slate-300">
        Discover how React Router lets you move between pages without
        reloading the entire website.
      </p>
      <Link to="/about" className="mt-8 inline-block rounded-xl bg-cyan-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-200">
        Discover More →
      </Link>
    </section>
  )
}

function About() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Who We Are</p>
      <h1 className="mt-4 text-4xl font-black sm:text-5xl">About Us</h1>
      <p className="mt-6 max-w-2xl leading-8 text-slate-300">
        We love technology, creativity, and building useful digital experiences.
        This page demonstrates navigation between React components.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-slate-800 p-5">
          <h2 className="text-xl font-bold text-cyan-300">Our Mission</h2>
          <p className="mt-2 text-slate-300">Make technology easy to understand.</p>
        </div>
        <div className="rounded-2xl bg-slate-800 p-5">
          <h2 className="text-xl font-bold text-cyan-300">Our Vision</h2>
          <p className="mt-2 text-slate-300">Turn creative ideas into reality.</p>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">Get In Touch</p>
      <h1 className="mt-4 text-4xl font-black sm:text-5xl">Contact Us</h1>
      <p className="mt-6 leading-7 text-slate-300">
        Have a question or suggestion? We would love to hear from you.
      </p>
      <div className="mt-8 rounded-2xl bg-slate-800 p-6">
        <p className="text-slate-400">Email</p>
        <p className="mt-1 break-all text-lg font-semibold text-cyan-300">hello@example.com</p>
        <p className="mt-5 text-sm text-slate-400">Sample contact detail for this practical.</p>
      </div>
    </section>
  )
}

function NotFound() {
  return (
    <section className="rounded-3xl bg-white/5 p-10 text-center">
      <h1 className="text-4xl font-black">404</h1>
      <p className="mt-3 text-slate-300">Page not found.</p>
      <Link to="/" className="mt-5 inline-block text-cyan-300 underline">Return Home</Link>
    </section>
  )
}

function App() {
  const linkStyle = ({ isActive }) =>
    `rounded-lg px-4 py-2 text-sm font-semibold transition ${
      isActive
        ? 'bg-cyan-300 text-slate-950'
        : 'text-slate-200 hover:bg-white/10'
    }`

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <header className="border-b border-white/10">
          <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
            <Link to="/" className="text-2xl font-black tracking-tight">
              Route<span className="text-cyan-300">Flow.</span>
            </Link>
            <div className="flex gap-2">
              <NavLink to="/" end className={linkStyle}>Home</NavLink>
              <NavLink to="/about" className={linkStyle}>About</NavLink>
              <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-5 py-12 sm:py-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="border-t border-white/10 px-5 py-6 text-center text-sm text-slate-400">
          Practical 11 · React Router · Built with React + Tailwind CSS
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
