import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiAngular,
  SiHtml5,
  SiTailwindcss,
  SiJasmine,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiGraphql,
  SiApacheairflow,
  SiGrafana,
  SiGit,
  SiJenkins,
  SiGooglecloud,
  SiJira,
} from "react-icons/si";
import { FiBarChart2, FiGrid, FiCloud } from "react-icons/fi";
import { RevealOnScroll } from "../RevealOnScroll";

const skills = [
  {
    title: "Front-End",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: [
      { label: "JavaScript", icon: <SiJavascript /> },
      { label: "TypeScript", icon: <SiTypescript /> },
      { label: "Next.js", icon: <SiNextdotjs /> },
      { label: "React & Angular", icon: <SiReact /> },
      { label: "HTML5 / CSS3", icon: <SiHtml5 /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss /> },
      { label: "Jasmine / Karma", icon: <SiJasmine /> },
    ],
  },
  {
    title: "Back-End",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    items: [
      { label: "Node.js / Express", icon: <SiNodedotjs /> },
      { label: "Python", icon: <SiPython /> },
      { label: "PostgreSQL / MySQL", icon: <SiPostgresql /> },
      { label: "GraphQL & REST APIs", icon: <SiGraphql /> },
      { label: "Knex.js / OAuth", icon: <SiNodedotjs /> },
    ],
  },
  {
    title: "Data & Analytics",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3v18h18" />
        <rect x="7" y="11" width="3" height="6" />
        <rect x="12" y="7" width="3" height="10" />
        <rect x="17" y="13" width="3" height="4" />
      </svg>
    ),
    items: [
      { label: "Airflow / ETL", icon: <SiApacheairflow /> },
      { label: "Tableau / Power BI", icon: <FiBarChart2 /> },
      { label: "Grafana dashboards", icon: <SiGrafana /> },
      { label: "Excel (advanced)", icon: <FiGrid /> },
      { label: "Data visualization", icon: <FiBarChart2 /> },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    ),
    items: [
      { label: "Git & CI/CD", icon: <SiGit /> },
      { label: "Jenkins / UDeploy", icon: <SiJenkins /> },
      { label: "GCP & AWS", icon: <FiCloud /> },
      { label: "Agile / Scrum", icon: <SiJira /> },
      { label: "Jira & Confluence", icon: <SiJira /> },
    ],
  },
];

const experience = [
  {
    when: "Sep 2025 — Current",
    role: "Founder / Web Developer",
    org: "Paradane",
    desc: "Developed a responsive business landing page with Next.js, React, and TailwindCSS, engineering reusable components (nav, service cards, responsive layouts), implementing smooth scrolling and dynamic UI behaviors, and applying image optimization and SEO best practices.",
    now: true,
  },
  {
    when: "Jul 2022 — Feb 2025",
    role: "Senior Associate",
    org: "Infosys",
    desc: "Trained in Java, Unix, Python, Spark & Spark SQL, then contracted to Wells Fargo to implement and fix data-management features in an internal web application.",
  },
  {
    when: "Mar 2023 — Dec 2024",
    role: "Software Engineer",
    org: "Wells Fargo",
    desc: "Led development of a complex multi-source Tableau dashboard integrating Splunk, MySQL, and Teradata, collaborating directly with senior stakeholders, delegating workstreams across team members, and delivering custom visual solutions not natively available in Tableau. Built Python and SQL ETL workflows orchestrated with Airflow on GCP supporting BigQuery data marts for enterprise data warehousing and analytics. Performed SQL-based data validation and reconciliation across multiple sources to investigate discrepancies and ensure data accuracy. Collaborated with cloud governance teams to provision service accounts, IAM permissions, and Terraform infrastructure. Implemented unit testing using Karma and Jasmine supporting CI/CD deployment pipelines and release governance.",
  },
  {
    when: "Jan 2020 — Jul 2021",
    role: "Analyst",
    org: "Magnum Forge",
    desc: "Built 15+ SQL views and SSRS reports to support financial tracking across multiple oil and gas client engagements after ERP implementation. Developed Python scripts with structured exception handling to transform, validate, and reconcile 10K+ ERP records during system migration, achieving 99.9% data accuracy across legacy and new environments. Built reusable Python functions to standardize data validation logic across multiple datasets and reporting workflows. Worked across W Energy Software, Enertia, Procount, and Carte platforms.",
  },
  {
    when: "Dec 2018 — Dec 2019",
    role: "Support Technician",
    org: "Retail Information Systems",
    desc: "Managed a data sync integration (Linked Retail) that extracted inventory and product data from Oracle-backed Retail Pro systems and loaded it into client e-commerce platforms, troubleshooting pipeline failures and data discrepancies. Supported 15+ clients on Oracle-backed retail management systems, diagnosing and resolving data integrity, connectivity, and application issues within SLA.",
  },
  {
    when: "Mar 2018 — Dec 2018",
    role: "IT Support Technician",
    org: "Auravox",
    desc: "Developed and maintained client websites, primarily in Wordpress, included bug fixes, theme customizations, and frontend enhancements. Provided technical support for end users, troubleshooting network, software, and VOIP issues.",
  },
];

const education = [
  {
    when: "Degree",
    what: "B.B.A., Management Information Systems",
    where: "Texas Tech University",
  },
  {
    when: "Certificate",
    what: "Full-Stack Software Engineering, Live",
    where: "Flatiron School",
  },
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
              I work across data engineering and front-end development, with
              most of my production experience on the data side. At{" "}
              <span className="highlight">Wells Fargo</span>, I built ETL
              pipelines, automated data workflows with Airflow, and led
              development of a multi-source Tableau dashboard integrating
              Splunk, MySQL, and Teradata to support enterprise banking systems.
            </p>
            <p>
              Currently I run{" "}
              <a
                href="https://paradane.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight"
              >
                Paradane
              </a>
              {", "}a small web development practice where I build and deliver
              full front-end applications for clients using React, Next.js, and
              Tailwind.
            </p>
            <p>
              Before touching the code I want to know how everything connects. A
              fix or feature that makes sense in isolation can break things
              downstream, so understanding the bigger picture is where I always
              start.
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll as="div" className="skills-head">
          <h3>Toolkit</h3>
        </RevealOnScroll>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <RevealOnScroll
              as="div"
              key={s.title}
              delay={i}
              className="skill-card"
            >
              <div className="cat">
                <span className="ico">{s.icon}</span>
                <h4>{s.title}</h4>
              </div>
              <ul>
                {s.items.map((item) => (
                  <li key={item.label}>
                    <span className="skill-icon">{item.icon}</span>
                    {item.label}
                  </li>
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
                <div
                  className={`tl-item${e.now ? " now" : ""}`}
                  key={e.role + e.org}
                >
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
