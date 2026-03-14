import Sidebar from "./components/Sidebar";
import Header from "./sections/Header";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Languages from "./sections/Languages";
import Footer from "./components/Footer";
import { divider } from "./styles";

export default function App() {
  return (
    <>
      <Sidebar />

      <main
        style={{
          maxWidth: 680,
          margin: "0 auto",
          padding: "4rem 1.5rem 6rem",
        }}
      >
        <Header />
        <About />
        <hr style={divider} />
        <div className="fade-up d2">
          <Experience />
        </div>
        <hr style={divider} />
        <div className="fade-up d1">
          <Projects />
        </div>
        <hr style={divider} />
        <hr style={divider} />
        <div className="fade-up d3">
          <Languages />
        </div>
        <Footer />
      </main>
    </>
  );
}
