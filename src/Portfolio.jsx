import Profile from "./assets/profile.png";

export default function Portfolio() {
  return (
    <div className="min-h-full bg-gray-50 text-gray-900 antialiased">
      <header className="sticky top-0 bg-white/80 backdrop-blur z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold text-xl">
            Catherine Orbe
          </a>
          <nav className="space-x-4 text-sm">
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
              className="ml-3 inline-block px-3 py-1.5 rounded-md border border-gray-200 text-sm"
            >
              Download Resume
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <section id="home" className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Hi, I’m Catherine —{" "}
              <span className="text-indigo-600">
                IT Graduate & Web Designer
              </span>
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              I design clean, accessible websites and solve technical problems.
              I also create graphics, manage social media, and support teams
              with admin and data tasks.
            </p>
            <div className="flex gap-3">
              <a
                href="#contact"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm"
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
            <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-indigo-100 to-white shadow-lg flex items-center justify-center">
              {/* Placeholder for profile image */}
              <div className="w-64 h-64 rounded-xl overflow-hidden shadow-md border border-gray-200">
                <img
                  src={Profile}
                  alt="Catherine Orbe"
                  className="w-full h-full object-cover"
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
          <h2 className="text-2xl font-bold mb-4">Tools & Technologies</h2>
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
        <section id="projects" className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Selected Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Project Card 1 */}
            <article className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold">Personal Portfolio Website</h3>
              <p className="text-sm text-gray-600 mt-2">
                Built a responsive portfolio site to showcase projects using
                HTML/CSS and hosted on GitHub Pages.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-xs text-gray-500">Wix / HTML / CSS</div>
                <a
                  href="https://catherinetorbe.github.io/about-me/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 text-sm"
                >
                  View
                </a>
              </div>
            </article>

            {/* Project Card 2 */}
            <article className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold">Community Campaign Graphics</h3>
              <p className="text-sm text-gray-600 mt-2">
                Designed posters and social media assets for Barangay Carikkikan
                Norte events and promotions using Canva.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-xs text-gray-500">Canva / Design</div>
                <button className="text-indigo-600 text-sm" disabled>
                  Gallery
                </button>
              </div>
            </article>

            {/* Project Card 3 */}
            <article className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-semibold">
                Student Records System (Intern Support)
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Assisted in data organization and reporting for ISU Ilagan
                Campus using MS Excel and Google Sheets.
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="text-xs text-gray-500">Excel / Data</div>
                <span className="text-sm text-gray-500">Private</span>
              </div>
            </article>
          </div>
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

        {/* Future Features */}
        <section id="features" className="mt-12 p-6 rounded-2xl ">
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
            <a href="#contact" className="text-indigo-600 underline">
              Contact me
            </a>{" "}
            — I’d love to collaborate!
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12 rounded-2xl">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="bg-white p-6 rounded-lg shadow-sm">
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
                    className="text-indigo-600"
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
                    className="text-indigo-600"
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
                    className="text-indigo-600"
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
