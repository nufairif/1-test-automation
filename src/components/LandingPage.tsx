export function LandingPage() {
  return (
    <main id="home" className="mx-auto max-w-5xl px-4 py-10 md:px-8 md:py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
        Welcome to Test Automation
      </h1>
      <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
        A simple landing page for exploring the Vite, React, and Tailwind CSS
        stack on both mobile and desktop widths.
      </p>
      <section id="about" className="mt-10 md:mt-16">
        <h2 className="text-2xl font-medium text-slate-900 md:text-3xl">About</h2>
        <p className="mt-3 max-w-2xl text-base text-slate-600 md:text-lg">
          This page is the starting point of the project: a responsive navbar
          and a concise landing section you can exercise in tests and in the
          browser.
        </p>
      </section>
    </main>
  )
}
