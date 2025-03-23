import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "JavaScript",
    "React",
    "TailwindCSS",
    "React Query",
    "Redux",
    "Webpack",
    "Jest",
    "Enzyme",
    "TypeScript",
  ];

  const backendSkills = [
    "Node.js",
    "Python",
    "MySQL",
    "Git",
    "Jira",
    "Tableau",
    "Grafana",
    "Google Cloud Platform",
    "Jenkins",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a software developer who thrives on solving complex problems
              and building efficient, scalable systems. My goal is to create
              robust solutions that streamline workflows and enhance user
              experiences through clean, maintainable code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Front-End</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                            "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                            "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🎓 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.B.A. in Management Information Systems </strong> -
                  Texas Tech University
                </li>
                <li>
                  <strong>
                    {" "}
                    Certificate - Full Stack Software Engineering Live
                  </strong>{" "}
                  - Flatiron School
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    <strong>Senior Associate</strong> at Infosys <br />
                    (July 2022 - February 2025)
                  </h4>
                  <p>
                    <br />
                    Trained in Java, Unix, Python, Spark, and Spark SQL, then
                    contracted to Wells Fargo to support an internal web
                    application by implementing and fixing data management
                    features.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    <strong>Software Engineer</strong> at Wells Fargo <br />
                    (March 2023 - December 2024)
                  </h4>
                  <p>
                    <br />
                    Led the development of an internal Tableau dashboard
                    integrating MySQL and Splunk data, implemented unit testing
                    with Karma/Jasmine, improved UI with TypeScript and HTML5,
                    and automated data processes using GCP and Airflow.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    <strong>Analyst</strong> at Magnum Forge <br />
                    (January 2020 - July 2021)
                  </h4>
                  <p>
                    <br />
                    Developed SQL data views, SSRS reports, and Python scripts
                    for data conversion, migrating financial and accounting data
                    into new ERP systems.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    <strong>Support Technician</strong> at Retail Information
                    Systems <br />
                    (December 2018 - December 2019)
                  </h4>
                  <p>
                    <br />
                    Maintained retail servers and e-commerce sites, provided
                    technical support, and customized WordPress-based platforms
                    using PHP, HTML, CSS, and JavaScript.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
