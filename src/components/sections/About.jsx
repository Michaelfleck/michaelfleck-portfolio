import { RevealOnScroll } from "../RevealOnScroll";

const skills = [
  {
    title: "Front-End",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: ["JavaScript / TypeScript", "React & Angular", "HTML5 / CSS3", "Tailwind CSS", "Jasmine / Karma"],
  },
  {
    title: "Back-End",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    items: ["Node.js / Express", "Python", "SQL / PostgreSQL / MySQL", "GraphQL & REST APIs", "Knex.js / OAuth"],
  },
  {
    title: "Data & Analytics",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <rect x="7" y="11" width="3" height="6" />
        <rect x="12" y="7" width="3" height="10" />
        <rect x="17" y="13" width="3" height="4" />
      </svg>
    ),
    items: ["ETL Pipelines / Airflow", "Tableau / Power BI", "Grafana dashboards", "Excel (advanced)", "Data visualization"],
  },
  {
    title: "DevOps & Tools",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    ),
    items: ["Git & CI/CD", "Jenkins / UDeploy", "GCP & Azure", "Agile / Scrum", "Jira & Confluence"],
  },
];

const experience = [
  {
    when: "Jul 2022 — Feb 2025",
    role: "Senior Associate",
    org: "Infosys",
    desc: "Trained in Java, Unix, Python, Spark & Spark SQL, then contracted to Wells Fargo to implement and fix data-management features in an internal web application.",
    now: true,
  },
  {
    when: "Mar 2023 — Dec 2024",
    role: "Software Engineer",
    org: "Wells Fargo",
    desc: "Led an internal Tableau dashboard integrating MySQL & Splunk data, added Karma/Jasmine unit tests, improved the UI in TypeScript/HTML5, and automated data processes with GCP & Airflow.",
  },
  {
    when: "Jan 2020 — Jul 2021",
    role: "Analyst",
    org: "Magnum Forge",
    desc: "Built SQL data views, SSRS reports, and Python conversion scripts to migrate financial & accounting data into new ERP systems.",
  },
  {
    when: "Dec 2018 — Dec 2019",
    role: "Support Technician",
    org: "Retail Information Systems",
    desc: "Maintained retail servers and e-commerce sites, provided technical support, and customized WordPress platforms using PHP, HTML, CSS & JavaScript.",
  },
];

const education = [
  { when: "Degree", what: "B.B.A., Management Information Systems", where: "Texas Tech University" },
  { when: "Certificate", what: "Full-Stack Software Engineering, Live", where: "Flatiron School" },
];

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <RevealOnScroll as="p" className="eyebrow">
          <span className="num">02</span>&nbsp;About
        </RevealOnScroll>

        <div className="about-statement">
          <RevealOnScroll as="h2" className="about-intro">
            Engineering that turns{" "}
            <span className="grad-text">complexity into clarity.</span>
          </RevealOnScroll>
          <RevealOnScroll as="div" delay={1} className="body">
            <p>
              I'm a software developer with a background spanning front-end
              interfaces, data pipelines, and full-stack delivery. My work has taken
              me from enterprise banking platforms at{" "}
              <span className="highlight">Wells Fargo</span> to ERP migrations and
              fundraising apps — always with the same goal:{" "}
              <span className="highlight">
                build robust solutions that streamline workflows and elevate the user
                experience.
              </span>
            </p>
            <p>
              I care about clean, maintainable code, thoughtful interfaces, and
              shipping things that hold up in production. Below is the toolkit I reach
              for.
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll as="div" className="skills-head">
          <h3>Toolkit</h3>
        </RevealOnScroll>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <RevealOnScroll as="div" key={s.title} delay={i} className="skill-card">
              <div className="cat">
                <span className="ico">{s.icon}</span>
                <h4>{s.title}</h4>
              </div>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </RevealOnScroll>
          ))}
        </div>

        <div className="timeline-wrap">
          <RevealOnScroll as="div" className="timeline-col">
            <h3>Experience</h3>
            <div className="timeline">
              {experience.map((e) => (
                <div className={`tl-item${e.now ? " now" : ""}`} key={e.role + e.org}>
                  <div className="when">{e.when}</div>
                  <h4 className="what">
                    {e.role} <span className="org">· {e.org}</span>
                  </h4>
                  <p className="desc">{e.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll as="div" delay={1} className="timeline-col">
            <h3>Education</h3>
            <div className="timeline">
              {education.map((e) => (
                <div className="tl-item" key={e.what}>
                  <div className="when">{e.when}</div>
                  <h4 className="what">{e.what}</h4>
                  <p className="desc">{e.where}</p>
                </div>
              ))}
            </div>

            <h3 style={{ marginTop: "48px" }}>What I bring</h3>
            <div className="edu-item">
              <p className="deg">End-to-end ownership</p>
              <p className="school">From data pipeline to polished UI</p>
            </div>
            <div className="edu-item">
              <p className="deg">Production-grade rigor</p>
              <p className="school">Testing, CI/CD, and maintainable code</p>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
