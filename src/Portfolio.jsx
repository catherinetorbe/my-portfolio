import { useState } from "react";
import Profile from "./assets/profile.png";
import Project1 from "./assets/portfolio.png";
import Project2 from "./assets/community-project.png";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      img: Project1,
      title: "Personal Portfolio Website",
      preview: "https://catherinetorbe.github.io/about-me/",
      description:
        "A modern responsive portfolio site built with React, Vite, and TailwindCSS.",
      live: "https://catherinetorbe.github.io/about-me/",
      code: "https://github.com/catherinetorbe/about-me",
    },
    {
      id: 2,
      img: Project2,
      title: "Community Project Campaign",
      preview: "https://www.facebook.com/profile.php?id=61553250814490",
      description:
        "Canva-designed digital campaign posters and event branding for Barangay Carikkikan Norte.",
      live: "https://www.facebook.com/profile.php?id=61553250814490", // you can link to your Facebook or Google Drive sample
    },
    // {
    //   id: 3,
    //   title: "Student Records Tracker (Excel App)",
    //   img: "https://images.unsplash.com/photo-1658203897339-0b8c64a42fba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3ByZWFkc2hlZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    //   preview: "#",
    //   description:
    //     "An organized Excel-based record management system built during my ISU internship.",
    //   live: "#",
    //   code: "",
    // },
  ];

  return (
    <div className="min-h-full bg-gray-50 text-gray-900 antialiased">
      <header className="sticky top-0 bg-white/80 backdrop-blur z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold text-xl">
            Catherine Orbe
          </a>
          {/* Humberger Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#projects" className="hover:underline">
              Portfolio
            </a>
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
            <a
              href="/Catherine_Orbe_Multi_Role_Resume.docx"
              download
              className="ml-3 inline-block px-3 py-1.5 rounded-md border border-gray-200 text-sm bg-blue-900 text-white hover:bg-blue-800"
            >
              Download Resume
            </a>
          </nav>
          {/* Mobile Dropdown Nav */}
          {menuOpen && (
            <nav className="md:hidden absolute top-16 left-0 w-full bg-white border-t shadow-md">
              <div className="flex flex-col px-6 py-4 space-y-3">
                <a
                  href="#about"
                  className="hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  Portfolio
                </a>
                <a
                  href="#services"
                  className="hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="/Catherine_Orbe_Multi_Role_Resume.docx"
                  download
                  className="mt-2 inline-block px-3 py-1.5 rounded-md border border-gray-200 text-sm bg-blue-900 text-white text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Download Resume
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <section id="home" className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Hi, I’m Catherine —{" "}
              <span className="text-blue-900">IT Graduate & Web Designer</span>
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              I design clean, accessible websites and solve technical problems.
              I also create graphics, manage social media, and support teams
              with admin and data tasks.
            </p>
            <div className="flex gap-3">
              <a
                href="#contact"
                className="px-4 py-2 bg-blue-900 text-white rounded-md shadow-sm"
              >
                Work with me
              </a>
              <a
                href="/Catherine_Orbe_Multi_Role_Resume.docx"
                download
                className="px-4 py-2 border rounded-md"
              >
                Resume
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-gray-700">
              <li>
                <strong>Location:</strong> Ilagan, Cagayan Valley
              </li>
              <li>
                <strong>Email:</strong> catherinetorbe@gmail.com
              </li>
              <li>
                <strong>LinkedIn:</strong>{" "}
                linkedin.com/in/catherine-orbe-6339b4380
              </li>
              <li>
                <strong>Portfolio:</strong> catherinetorbe.github.io/about-me/
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-indigo-100 to-white shadow-lg flex items-center justify-center">
              {/* Placeholder for profile image */}
              <div className="w-64 h-64 rounded-xl">
                <img
                  src={Profile}
                  alt="Catherine Orbe"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="mt-16 bg-white p-6 rounded-2xl shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-3">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I’m a Bachelor of Science in Information Technology graduate with a
            major in Web and Mobile Application Development. I enjoy building
            websites using Wix, HTML, and CSS; creating marketing visuals with
            Canva; and helping people by solving technical issues. I’ve worked
            with community projects, academic internships, and small freelance
            assignments to gain practical experience.
          </p>
          {/* <h2 className="text-2xl font-bold mb-4">Tools & Technologies</h2> */}
          {/* <div className="flex flex-wrap gap-6 text-4xl text-indigo-600">
            <div className="flex flex-col items-center text-sm text-gray-700">
              <FaReact title="React" /> React
            </div>
            <div className="flex flex-col items-center text-sm text-gray-700">
              <SiVite title="Vite" /> Vite
            </div>
            <div className="flex flex-col items-center text-sm text-gray-700">
              <SiTailwindcss title="Tailwind CSS" /> Tailwind
            </div>
            <div className="flex flex-col items-center text-sm text-gray-700">
              <FaHtml5 title="HTML5" /> HTML5
            </div>
            <div className="flex flex-col items-center text-sm text-gray-700">
              <FaCss3Alt title="CSS3" /> CSS3
            </div>
            <div className="flex flex-col items-center text-sm text-gray-700">
              <SiCanva title="Canva" /> Canva
            </div>
            <div className="flex flex-col items-center text-sm text-gray-700">
              <SiVisualstudiocode title="VS Code" /> VS Code
            </div>
            <div className="flex flex-col items-center text-sm text-gray-700">
              <FaGithub title="GitHub" /> GitHub
            </div>
            <div className="flex flex-col items-center text-sm text-gray-700">
              <FaNode title="Node.js" /> Node.js / npm
            </div>
          </div> */}

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Core Skills</h3>
              <ul className="text-sm mt-2 space-y-1 text-gray-700">
                <li>IT Support & Troubleshooting</li>
                <li>Web Design (Wix, HTML, CSS)</li>
                <li>Microsoft Office & Data Management</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Design Tools</h3>
              <ul className="text-sm mt-2 space-y-1 text-gray-700">
                <li>Canva (Certified)</li>
                <li>Figma (familiar)</li>
                <li>Basic Photoshop / Photo Editing</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Education</h3>
              <p className="text-sm mt-2 text-gray-700">
                BS Information Technology — Isabela State University, Ilagan
                Campus (2020–2025)
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-12 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">💼 Portfolio Gallery</h2>
          <p className="text-gray-700 mb-6">
            A collection of my featured projects. Click on any project to view a
            live preview and learn more about how it was made.
          </p>

          {/* Project Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-transform hover:scale-105 cursor-pointer"
                onClick={() =>
                  project.title === "Community Project Campaign"
                    ? navigate("/community-project")
                    : setActiveProject(project)
                }
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                    {project.description}
                  </p>
                  <button className="mt-3 text-indigo-600 text-sm hover:underline">
                    {project.title === "Community Project Campaign"
                      ? "View Details →"
                      : "Live Preview →"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for Live Preview */}
          {activeProject && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl shadow-lg max-w-3xl w-[90%] relative overflow-hidden">
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
                >
                  ✖
                </button>

                <iframe
                  src={activeProject.preview}
                  title={activeProject.title}
                  className="w-full h-64 object-cover"
                  sandbox="allow-scripts allow-same-origin"
                ></iframe>

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{activeProject.title}</h3>
                  <p className="text-gray-700 mt-2 mb-4">
                    {activeProject.description}
                  </p>

                  <div className="flex gap-4">
                    {activeProject.live && (
                      <a
                        href={activeProject.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                      >
                        Live Site
                      </a>
                    )}
                    {activeProject.code && (
                      <a
                        href={activeProject.code}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 border rounded-md hover:bg-gray-50"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Services */}
        <section
          id="services"
          className="mt-12 bg-white p-6 rounded-2xl shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-3">Services I Offer</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Website Design</h3>
              <p className="text-sm text-gray-700 mt-2">
                Wix sites, simple HTML/CSS builds, responsive layouts and basic
                SEO setup.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">IT Support</h3>
              <p className="text-sm text-gray-700 mt-2">
                Onsite & remote troubleshooting, printer & equipment setup, and
                basic network support.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Graphic Design</h3>
              <p className="text-sm text-gray-700 mt-2">
                Canva templates, social media visuals, posters, certificates,
                and print-ready files.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="mt-12 p-6 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Blog and Tutorials</h2>
          <p className="text-gray-700 mb-6">
            Note: This section is under development. Meanwhile, here are some
            sample blog post ideas I plan to write about:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols3 gap-6">
            {/* Blog Card 1 */}
            <article className="bg-white p-4 rounded-xl shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000"
                alt="Blog Post 1"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  {" "}
                  5 Easy Tips for Better Web Design
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Learn simple design principles to make your website look more
                  professional and user-friendly.
                </p>
                <a
                  href="#"
                  className="inline-block mt-3 text-blue-900 text-sm hover:underline"
                >
                  Read More...
                </a>
              </div>
            </article>
            {/* Blog Card 2 */}
            <article className="bg-white p-4 rounded-xl shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCBzdXBwb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000"
                alt="Blog Post 2"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  Top 7 IT Support Tricks for Small Businesses
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Practical tips to keep your business tech running smoothly
                  without breaking the bank.
                </p>
                <a
                  href="#"
                  className="inline-block mt-3 text-blue-900 text-sm hover:underline"
                >
                  Read More...
                </a>
              </div>
            </article>
            {/* Blog Card 3 */}
            <article className="bg-white p-4 rounded-xl shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&q=60&w=1000"
                alt="Blog Post 3"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">
                  Designing Eye-Catching Graphics with Canva
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  A beginner’s guide to creating stunning visuals for social
                  media and marketing.
                </p>
                <a
                  href="#"
                  className="inline-block mt-3 text-blue-900 text-sm hover:underline"
                >
                  Read More...
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Future Features */}
        <section
          id="features"
          className="mt-12 p-6 bg-white rounded-2xl shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-3">✨ Upcoming Features</h2>
          <p className="text-gray-700 mb-4">
            I’m constantly improving this portfolio to include new features and
            interactive projects. Here’s what I’m planning next:
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>🌐 Blog section to share tutorials and creative projects</li>
            <li>💼 Interactive portfolio gallery with live previews</li>
            <li>🧩 Client feedback/testimonial carousel</li>
            <li>🎨 Theme switcher (Light/Dark mode)</li>
            <li>📱 Fully mobile-optimized dashboard for freelance updates</li>
          </ul>

          <div className="mt-4 text-sm text-gray-500">
            Have ideas?{" "}
            <a href="#contact" className="text-blue-900 underline">
              Contact me
            </a>{" "}
            — I’d love to collaborate!
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className=" p-6 rounded-lg ">
              <h2 className="text-xl font-bold mb-2">Contact</h2>
              <p className="text-sm text-gray-700 mb-4">
                Interested in working together? Send a message or book a quick
                chat.
              </p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="https://mailto:catherinetorbe@gmail.com"
                    className="text-blue-900"
                  >
                    catherinetorbe@gmail.com
                  </a>
                </li>
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/catherine-orbe-6339b4380"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-900"
                  >
                    linkedin.com/in/catherine-orbe-6339b4380
                  </a>
                </li>
                <li>
                  <strong>Portfolio:</strong>{" "}
                  <a
                    href="https://catherinetorbe.github.io/about-me/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-900"
                  >
                    catherinetorbe.github.io/about-me/
                  </a>
                </li>
              </ul>
            </div>

            {/* <form
              className="bg-white p-6 rounded-lg shadow-sm"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href =
                  "mailto:catherinetorbe@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Catherine%2C%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20...";
              }}
            >
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                required
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your name"
              />
              <label className="block text-sm font-medium text-gray-700 mt-3">
                Your Email
              </label>
              <input
                type="email"
                required
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="you@example.com"
              />
              <label className="block text-sm font-medium text-gray-700 mt-3">
                Message
              </label>
              <textarea
                required
                className="mt-1 p-2 w-full border rounded-md"
                rows="4"
                placeholder="Tell me about your project..."
              ></textarea>
              <div className="mt-4 flex items-center justify-between">
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md"
                >
                  Send Message
                </button>
                <small className="text-xs text-gray-500">
                  Or email me directly
                </small>
              </div>
            </form> */}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 py-8 text-center text-sm text-gray-600">
          <div className="max-w-5xl mx-auto">
            © {new Date().getFullYear()} Catherine Orbe — Built with care.{" "}
          </div>
        </footer>
      </main>
    </div>
  );
}
