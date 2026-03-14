import { projects } from "../data";
import { sectionLabel, tag, tagRow } from "../styles";

export default function Projects() {
  return (
    <section id="projects">
      <div style={sectionLabel}>Projects</div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "var(--bg-elevated)",
              border: "1px solid var(--border)",
              borderRadius: "16px" /* iOS card radius */,
              overflow: "hidden",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor =
                "var(--border-bright)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor =
                "var(--border)")
            }
          >
            {/* Image */}
            <img
              src={p.image}
              alt={p.title}
              style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.8")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
            />

            {/* Content */}
            <div style={{ padding: "1.1rem 1.25rem 1.25rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "0.35rem",
                  gap: "1rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "1.05rem",
                    fontWeight: 400,
                    color: "var(--text)",
                  }}
                >
                  {p.title}
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--muted)",
                    flexShrink: 0,
                  }}
                >
                  {p.date}
                </span>
              </div>

              <p
                style={{
                  fontSize: "0.87rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.55,
                  marginBottom: "0.85rem",
                }}
              >
                {p.description}
              </p>

              <div style={tagRow}>
                {p.tech.map((t) => (
                  <span key={t} style={tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
