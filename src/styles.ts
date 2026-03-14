import type { CSSProperties } from "react";

export const divider: CSSProperties = {
  border: "none",
  borderTop: "1px solid var(--border)",
  margin: "2.5rem 0",
};

export const sectionLabel: CSSProperties = {
  fontSize: "0.68rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: "1.25rem",
  fontWeight: 500,
};

export const tag: CSSProperties = {
  fontSize: "0.68rem",
  color: "var(--accent)",
  background: "var(--accent-dim)",
  padding: "2px 9px",
  borderRadius: "20px",  /* iOS pill */
  fontWeight: 500,
};

export const tagRow: CSSProperties = {
  display: "flex",
  gap: "0.4rem",
  flexWrap: "wrap",
};
