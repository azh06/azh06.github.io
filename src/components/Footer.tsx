export default function Footer() {
  return (
    <footer
      style={{
        fontSize: "0.75rem",
        color: "var(--muted)",
        marginTop: "3rem",
        paddingTop: "2rem",
        borderTop: "1px solid var(--border)",
      }}
    >
      Made with ❤️ by Austin Zhong · {new Date().getFullYear()}
    </footer>
  );
}
