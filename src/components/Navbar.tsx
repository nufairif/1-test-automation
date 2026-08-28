export function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-4 py-4 md:flex-row md:items-center md:px-8"
      >
        <a href="#home" className="text-lg font-semibold text-slate-900">
          Test Automation
        </a>
        <ul className="flex flex-col gap-2 md:flex-row md:gap-6">
          <li>
            <a className="text-slate-700 hover:text-slate-900" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="text-slate-700 hover:text-slate-900" href="#about">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
