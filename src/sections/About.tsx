const p: React.CSSProperties = {
  fontSize: "0.95rem",
  color: "var(--text-secondary)",
  marginBottom: "0.85rem",
  lineHeight: 1.65,
};

export default function About() {
  return (
    <section>
      <p style={p}>
        I'm a rising-third year at{" "}
        <strong style={{ color: "var(--text)", fontWeight: 500 }}>
          Northeastern University
        </strong>{" "}
        studying Computer Science with a focus in Software Development. I
        believe software should make people's lives better whether its through
        meaningful connection, useful knowledge, or simply to make someone's day
        brighter.
      </p>
      <p style={{ ...p, marginBottom: 0 }}>
        I'm always excited to pick up new languages, frameworks, and tools. I
        love the process of learning by building, and these days that's mostly
        been with{" "}
        <strong style={{ color: "var(--text)", fontWeight: 500 }}>React</strong>{" "}
        and{" "}
        <strong style={{ color: "var(--text)", fontWeight: 500 }}>
          TypeScript
        </strong>
        .
      </p>
    </section>
  );
}
