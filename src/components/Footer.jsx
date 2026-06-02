export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap">
        <a href="#hero" className="logo">
          <span className="dot"></span>michael<span className="muted">.fleck</span>
        </a>
        <span className="copy">
          © {year} Michael Fleck · Designed &amp; built with care.
        </span>
        <a href="#hero" className="totop">
          Back to top{" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  );
};
