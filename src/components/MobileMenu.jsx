import { useEffect } from "react";

const links = [
  { id: "hero", idx: "01", label: "Home" },
  { id: "about", idx: "02", label: "About" },
  { id: "projects", idx: "03", label: "Work" },
  { id: "contact", idx: "04", label: "Contact" },
];

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
      {links.map((l) => (
        <a key={l.id} href={`#${l.id}`} onClick={() => setMenuOpen(false)}>
          <span>{l.idx}</span>
          {l.label}
        </a>
      ))}
      <a
        href="/resume/Michael_Fleck_Resume.pdf"
        download
        onClick={() => setMenuOpen(false)}
      >
        <span>↓</span>Résumé
      </a>
    </div>
  );
};
