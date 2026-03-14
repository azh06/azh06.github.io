import { useState, useEffect } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "languages", label: "Languages" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setOpen(false);
  };

  return (
    <>
      {/* Toggle button — always visible */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle navigation"
        style={{
          position: "fixed",
          top: "1.25rem",
          left: "1.25rem",
          zIndex: 200,
          width: 38,
          height: 38,
          borderRadius: "50%",
          background: "rgba(44,44,46,0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid var(--border-bright)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          padding: 0,
          transition: "background 0.2s",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: open ? 14 : [14, 10, 14][i],
              height: 1.5,
              borderRadius: 2,
              background: "var(--text)",
              transition: "width 0.2s, opacity 0.2s",
              opacity: open && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 150,
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        />
      )}

      {/* Sidebar panel */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "var(--sidebar-w)",
          zIndex: 160,
          background: "rgba(28,28,30,0.92)",
          backdropFilter: "blur(30px) saturate(180%)",
          WebkitBackdropFilter: "blur(30px) saturate(180%)",
          borderRight: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "2rem 1.5rem",
          transform: open ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
        >
          {sections.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => go(id)}
                style={{
                  background: isActive ? "rgba(10,132,255,0.15)" : "none",
                  border: "none",
                  borderRadius: "10px",
                  padding: "0.6rem 0.9rem",
                  textAlign: "left",
                  fontSize: "0.95rem",
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  transition: "background 0.15s, color 0.15s",
                  letterSpacing: "-0.01em",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.background = "none";
                }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
