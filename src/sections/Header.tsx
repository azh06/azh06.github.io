import { GithubIcon, LinkedinIcon } from "../components/Icons";

export default function Header() {
  return (
    <header id="about" style={{ marginBottom: "3rem" }}>
      {/* Large avatar */}
      <img
        src="https://placehold.co/120x120/3a3a3c/636366?text=AZ"
        alt="Austin Zhong"
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid var(--border-bright)",
          marginBottom: "1.5rem",
        }}
      />

      <h1
        style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(2rem, 5vw, 2.6rem)",
          fontWeight: 400,
          lineHeight: 1.1,
          marginBottom: "0.4rem",
          letterSpacing: "-0.02em",
        }}
      >
        Hello! I'm <span style={{ color: "var(--accent)" }}>Austin</span> 👋
      </h1>

      <p
        style={{
          fontSize: "0.95rem",
          color: "var(--muted)",
          marginBottom: "1.25rem",
        }}
      >
        Aspiring Software Engineer · New York, NY / Boston, MA
      </p>

      {/* Social icons */}
      <div style={{ display: "flex", gap: "0.75rem" }}>
        {[
          {
            href: "https://github.com/azh06",
            label: "GitHub",
            icon: <GithubIcon />,
          },
          {
            href: "https://www.linkedin.com/in/austin-zhong/",
            label: "LinkedIn",
            icon: <LinkedinIcon />,
          },
        ].map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            style={{
              width: 36,
              height: 36,
              borderRadius: "10px",
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--muted)",
              transition: "background 0.15s, color 0.15s, border-color 0.15s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--bg-card)";
              el.style.color = "var(--text)";
              el.style.borderColor = "var(--border-bright)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--bg-elevated)";
              el.style.color = "var(--muted)";
              el.style.borderColor = "var(--border)";
            }}
          >
            {icon}
          </a>
        ))}
      </div>
    </header>
  );
}
