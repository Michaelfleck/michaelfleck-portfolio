import { useState } from "react";
import { ScrollProgress } from "./components/ScrollProgress";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Footer } from "./components/Footer";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ScrollProgress />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
