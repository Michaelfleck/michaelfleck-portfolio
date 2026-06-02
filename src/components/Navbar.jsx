import { useEffect, useState } from "react";

const links = [
  { id: "hero", idx: "01", label: "Home" },
  { id: "about", idx: "02", label: "About" },
  { id: "projects", idx: "03", label: "Work" },
  { id: "contact", idx: "04", label: "Contact" },
];

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const onScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      setScrolled(st > 24);

      const mid = window.scrollY + window.innerHeight * 0.4;
      let current = sections[0];
      for (const s of sections) if (s.offsetTop <= mid) current = s;
      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <a href="#hero" className="logo">
          <span className="dot"></span>michael<span className="muted">.fleck</span>
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "active" : ""}
            >
              <span className="idx">{l.idx}</span>
              {l.label}
            </a>
          ))}
          <a
            href="/resume/Michael_Fleck_Resume.pdf"
            download
            className="btn btn-ghost nav-cta"
          >
            Résumé ↓
          </a>
        </div>

        <button
          className={`burger${menuOpen ? " open" : ""}`}
          aria-label="Menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};
