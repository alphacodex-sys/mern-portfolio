import { useState } from "react";
import axios from "axios";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCode,
} from "react-icons/fa";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const API = "https://mern-portfolio-backend-1qso.onrender.com/contact";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(API, formData);

      alert("Message Sent Successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Error sending message");
      console.log(error);
    }
  };

  return (
    <div className="bg-sky-100 text-gray-800 font-sans scroll-smooth">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md sticky top-0 z-50">

        <h1 className="text-2xl font-bold text-sky-700">
          Bhanu Prakash
        </h1>

        <div className="flex gap-6 font-semibold text-gray-700">
          <a href="#about" className="hover:text-sky-600">About</a>
          <a href="#skills" className="hover:text-sky-600">Skills</a>
          <a href="#projects" className="hover:text-sky-600">Projects</a>
          <a href="#contact" className="hover:text-sky-600">Contact</a>
        </div>

      </nav>

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center bg-sky-200 px-6">

        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, Bhanu Prakash
        </h1>

        <p className="text-2xl md:text-3xl text-gray-700 mb-8">
          MERN Stack Developer
        </p>

        <p className="max-w-2xl text-lg text-gray-600 leading-8 mb-10">
          Passionate developer focused on building modern web
          applications, solving problems, and continuously
          learning new technologies.
        </p>

        <div className="flex gap-6 text-4xl text-sky-700">

          <a href="#">
            <FaGithub className="hover:scale-125 duration-300 cursor-pointer" />
          </a>

          <a href="#">
            <FaLinkedin className="hover:scale-125 duration-300 cursor-pointer" />
          </a>

          <a href="#">
            <FaInstagram className="hover:scale-125 duration-300 cursor-pointer" />
          </a>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-8 text-center bg-sky-100"
      >

        <h2 className="text-5xl font-bold mb-10 text-gray-900">
          About Me
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-9">
          I am Bhanu Prakash Reddy Kadire, a passionate MERN Stack
          Developer who enjoys creating beautiful and functional
          web applications. I love coding, solving DSA problems,
          and exploring modern technologies.
        </p>

      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="py-24 px-8 bg-white text-center"
      >

        <h2 className="text-5xl font-bold mb-14 text-gray-900">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="bg-sky-100 p-10 rounded-3xl shadow-lg hover:scale-105 duration-300">
            <FaCode className="text-5xl mx-auto mb-6 text-sky-700" />

            <h3 className="text-3xl font-bold mb-6">
              Frontend
            </h3>

            <p className="text-lg leading-9">
              HTML <br />
              CSS
            </p>
          </div>

          <div className="bg-sky-100 p-10 rounded-3xl shadow-lg hover:scale-105 duration-300">
            <FaCode className="text-5xl mx-auto mb-6 text-sky-700" />

            <h3 className="text-3xl font-bold mb-6">
              Languages
            </h3>

            <p className="text-lg leading-9">
              C <br />
              Python <br />
              Java <br />
              JavaScript
            </p>
          </div>

          <div className="bg-sky-100 p-10 rounded-3xl shadow-lg hover:scale-105 duration-300">
            <FaCode className="text-5xl mx-auto mb-6 text-sky-700" />

            <h3 className="text-3xl font-bold mb-6">
              Other Skills
            </h3>

            <p className="text-lg leading-9">
              Problem Solving <br />
              DSA <br />
              MERN Stack
            </p>
          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-24 px-8 bg-sky-100 text-center"
      >

        <h2 className="text-5xl font-bold mb-14 text-gray-900">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-2 duration-300">

            <h3 className="text-3xl font-bold mb-5">
              Portfolio Website
            </h3>

            <p className="text-gray-700 leading-8">
              Full MERN Stack portfolio website with modern UI,
              backend integration, and responsive design.
            </p>

          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-2 duration-300">

            <h3 className="text-3xl font-bold mb-5">
              Upcoming Projects
            </h3>

            <p className="text-gray-700 leading-8">
              More advanced projects and full stack applications
              coming soon.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-8 bg-white text-center"
      >

        <h2 className="text-5xl font-bold mb-14 text-gray-900">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-sky-100 p-10 rounded-3xl shadow-xl"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 mb-6 rounded-xl border border-gray-300"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 mb-6 rounded-xl border border-gray-300"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 mb-6 rounded-xl border border-gray-300 h-40"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-sky-600 hover:bg-sky-700 text-white px-10 py-4 rounded-full text-lg shadow-md duration-300"
          >
            Send Message
          </button>

        </form>

      </section>

      {/* FOOTER */}
      <footer className="bg-sky-200 text-center py-6 text-gray-700 font-semibold">
        © 2026 Bhanu Prakash Reddy Kadire
      </footer>

    </div>
  );
}

export default App;