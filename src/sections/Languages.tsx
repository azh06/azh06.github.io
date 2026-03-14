import { languages } from "../data";
import { sectionLabel, tag, tagRow } from "../styles";

export default function Languages() {
  return (
    <section id="languages">
      <div style={sectionLabel}>Languages</div>
      <div style={tagRow}>
        {languages.map((l) => <span key={l} style={tag}>{l}</span>)}
      </div>
    </section>
  );
}
