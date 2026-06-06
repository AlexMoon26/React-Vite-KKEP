import { NavLink, Outlet } from "react-router";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Learn", to: "/learn" },
  { label: "Feedback", to: "/feedback" },
];

export function RootLayout() {
  return (
    <>
      <header className="border-b border-[var(--border)] px-5 py-4 md:px-8">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
          <NavLink className="text-lg font-semibold text-[var(--text-h)]" to="/">
            React Vite Lessons
          </NavLink>
          <div className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  [
                    "rounded-md px-3 py-1.5 text-sm font-medium transition",
                    isActive
                      ? "bg-[var(--accent-bg)] text-[var(--accent)]"
                      : "text-[var(--text)] hover:text-[var(--text-h)]",
                  ].join(" ")
                }
                key={item.to}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
