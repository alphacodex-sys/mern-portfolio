import { useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://mern-portfolio-backend-lqso.onrender.com/contact",
        formData
      );

      alert("Message Sent Successfully ✅");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Failed To Send Message ❌");
      console.log(error);
    }
  };

  return (
    <div className="font-sans">

      {/* NAVBAR */}
      <nav className="bg-blue-600 text-white p-5 flex justify-between">
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        <ul className="flex gap-6">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center p-5"
      >
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Kadire 👋
        </h1>

        <p className="text-xl text-gray-700 mb-5">
          Beginner Full Stack Developer | MERN Stack Learner
        </p>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Explore My Work
        </button>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="p-10 bg-white">
        <h2 className="text-4xl font-bold text-center mb-6">
          About Me
        </h2>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          I am a passionate beginner developer learning Full Stack Development.
          I enjoy building modern web applications using MERN Stack technologies
          and continuously improving my coding skills.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="p-10 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">

          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Programming Languages</h3>
            <p>C Language</p>
            <p>Python</p>
            <p>Java</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Frontend</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow">
            <h3 className="font-bold text-xl mb-2">Problem Solving</h3>
            <p>Working on DSA</p>
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="p-10 bg-white">
        <h2 className="text-4xl font-bold text-center mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-3">
              Portfolio Website
            </h3>

            <p className="text-gray-700">
              A responsive personal portfolio website built using React,
              Tailwind CSS, Node.js, Express, and MongoDB.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-bold mb-3">
              MERN Contact Form
            </h3>

            <p className="text-gray-700">
              A contact form connected with MongoDB database using Express and
              Node.js backend.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="p-10 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Me
        </h2>

        <form
          onSubmit={sendMessage}
          className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow"
        >

          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded"
            required
          />

          <textarea
            name="message"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-3 mb-4 rounded h-32"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full"
          >
            Send Message
          </button>

        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white text-center p-5">
        © 2026 My Portfolio
      </footer>

    </div>
  );
}

export default App;