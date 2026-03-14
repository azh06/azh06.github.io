import { experience } from "../data";
import { sectionLabel } from "../styles";

export default function Experience() {
  return (
    <section id="experience">
      <div style={sectionLabel}>Experience</div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {experience.map((e) => (
          <a
            key={e.company}
            href={e.url}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "1.1rem 1.25rem",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(el) =>
              ((el.currentTarget as HTMLElement).style.borderColor =
                "var(--border-bright)")
            }
            onMouseLeave={(el) =>
              ((el.currentTarget as HTMLElement).style.borderColor =
                "var(--border)")
            }
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "1rem",
                marginBottom: "0.15rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.97rem",
                  fontWeight: 500,
                  color: "var(--text)",
                  letterSpacing: "-0.01em",
                }}
              >
                {e.role}
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "var(--muted)",
                  flexShrink: 0,
                }}
              >
                {e.date}
              </span>
            </div>

            <div
              style={{
                fontSize: "0.8rem",
                color: "var(--accent)",
                marginBottom: "0.75rem",
                fontWeight: 500,
              }}
            >
              {e.company}
            </div>

            <p
              style={{
                fontSize: "0.87rem",
                color: "var(--text-secondary)",
                lineHeight: 1.55,
              }}
            >
              {e.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
