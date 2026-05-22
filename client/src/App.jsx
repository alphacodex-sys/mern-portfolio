import { useState } from "react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      alert(data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Error sending message");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* NAVBAR */}
      <nav className="bg-blue-500 text-white p-5 flex justify-between items-center sticky top-0">

        <h1 className="text-3xl font-bold">
          My Portfolio
        </h1>

        <div className="flex gap-6 text-lg">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>

      {/* HOME SECTION */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-5"
      >

        <h1 className="text-7xl font-bold text-blue-500 mb-6">
          Full Stack Developer
        </h1>

        <p className="text-2xl text-gray-600 mb-8">
          Building modern MERN stack applications
        </p>

        <button className="bg-blue-500 text-white px-8 py-4 rounded-xl text-xl hover:bg-blue-600 transition">
          View Projects
        </button>

      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="py-24 px-8 text-center bg-white"
      >

        <h2 className="text-5xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Passionate about learning Full Stack Web Development
          and building modern web applications using MERN stack.
        </p>

      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="py-24 px-8"
      >

        <h2 className="text-5xl font-bold text-center mb-14">
          Skills
        </h2>

        <div className="max-w-5xl mx-auto space-y-10">

          {/* Programming Languages */}
          <div>

            <h3 className="text-3xl font-semibold mb-6 text-blue-500">
              Programming Languages
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {[
                "C Language",
                "Python",
                "Java",
                "JavaScript",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white p-6 rounded-2xl shadow-md text-center text-lg font-semibold hover:scale-105 transition"
                >
                  {skill}
                </div>
              ))}

            </div>

          </div>

          {/* Web Development */}
          <div>

            <h3 className="text-3xl font-semibold mb-6 text-blue-500">
              Web Development
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {[
                "HTML",
                "CSS",
                "Frontend Development",
                "Backend Development",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white p-6 rounded-2xl shadow-md text-center text-lg font-semibold hover:scale-105 transition"
                >
                  {skill}
                </div>
              ))}

            </div>

          </div>

          {/* Problem Solving */}
          <div>

            <h3 className="text-3xl font-semibold mb-6 text-blue-500">
              Problem Solving
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

              {[
                "Data Structures & Algorithms (DSA)",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white p-6 rounded-2xl shadow-md text-center text-lg font-semibold hover:scale-105 transition"
                >
                  {skill}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="py-24 px-8 bg-white"
      >

        <h2 className="text-5xl font-bold text-center mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-gray-100 p-8 rounded-2xl shadow-md">

            <h3 className="text-3xl font-bold mb-4">
              Portfolio Website
            </h3>

            <p className="text-gray-600 text-lg">
              Built using React, Node.js, Express, and MongoDB.
            </p>

          </div>

          <div className="bg-gray-100 p-8 rounded-2xl shadow-md">

            <h3 className="text-3xl font-bold mb-4">
              MERN Contact App
            </h3>

            <p className="text-gray-600 text-lg">
              Full stack contact form with MongoDB database.
            </p>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-24 px-8"
      >

        <h2 className="text-5xl font-bold text-center mb-14">
          Contact
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-lg"
        >

          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 mb-6 border rounded-xl"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 mb-6 border rounded-xl"
            required
          />

          <textarea
            name="message"
            placeholder="Enter Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 mb-6 border rounded-xl h-40"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 text-white px-8 py-4 rounded-xl w-full text-xl hover:bg-blue-600 transition"
          >
            Send Message
          </button>

        </form>

      </section>

      {/* FOOTER */}
      <footer className="bg-blue-500 text-white text-center p-5">
        © 2026 My Portfolio
      </footer>

    </div>
  );
}

export default App;