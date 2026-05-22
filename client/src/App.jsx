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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const API =
        "https://mern-portfolio-backend-1qso.onrender.com/contact";

      const response = await axios.post(API, formData);

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error sending message");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* HERO SECTION */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">My Portfolio</h1>
        <p className="text-xl">
          MERN Stack Developer | React | Node.js | MongoDB
        </p>
      </section>

      {/* ABOUT */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto">
          I am a passionate MERN Stack Developer who loves building modern web
          applications and learning new technologies.
        </p>
      </section>

      {/* SKILLS */}
      <section className="bg-white p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-blue-500 text-white px-4 py-2 rounded">
            HTML
          </span>

          <span className="bg-blue-500 text-white px-4 py-2 rounded">
            CSS
          </span>

          <span className="bg-blue-500 text-white px-4 py-2 rounded">
            JavaScript
          </span>

          <span className="bg-blue-500 text-white px-4 py-2 rounded">
            React
          </span>

          <span className="bg-blue-500 text-white px-4 py-2 rounded">
            Node.js
          </span>

          <span className="bg-blue-500 text-white px-4 py-2 rounded">
            MongoDB
          </span>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">Portfolio Website</h3>

            <p>
              A full MERN stack portfolio project with contact form and MongoDB
              integration.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">Chat Application</h3>

            <p>
              Real-time chat application using Socket.IO and MERN stack.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-white p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border rounded h-32"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
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