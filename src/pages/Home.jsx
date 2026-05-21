import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const loggedInUser =
      localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  const courses = [
    {
      name: "FULL-STACK",
      path: "/fullstack",
    },

    {
      name: "MACHINE LEARNING",
      path: "/machine-learning",
    },

    {
      name: "DATA SCIENCE",
      path: "/data-science",
    },

    {
      name: "DATA ANALYTICS",
      path: "/data-analytics",
    },

    {
      name: "ARTIFICIAL INTELLIGENCE",
      path: "/artificial-intelligence",
    },

    {
      name: "GENERATIVE AI",
      path: "/generative-ai",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>

      <nav className="navbar">

        <div className="logo">
          <h2>CAMPUS CODER HUB</h2>
        </div>

        <ul className="nav-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

          <li>
            <button
              onClick={handleLogout}
              className="logout-btn"
            >
              Logout
            </button>
          </li>

        </ul>

      </nav>

      <section className="welcome" id="home">

        <div className="welcome-text">

          <h1>
            Welcome to CAMPUS CODER HUB
          </h1>

          <p>
            Your journey to success starts here
          </p>

        </div>

      </section>

      <section className="about" id="about">

        <h1>About Us</h1>

        <br />

        <p>
          We are a team of professionals dedicated
          to helping students build a better future.

          <br /><br />

          Our goal is to make learning easy,
          well-organized, and accessible for everyone.

          <br /><br />

          We provide roadmaps, learning resources,
          and YouTube links to help students start
          their journey with clarity and confidence.
        </p>

      </section>

      <section className="services" id="services">

        <h2>Services We Offer</h2>

        <input
          className="search-input"
          type="text"
          placeholder="Search courses..."
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <div className="service-boxes">

          {filteredCourses.map((course, index) => (

            <div
              className="service-box"
              key={index}
              onClick={() => navigate(course.path)}
            >

              <h3>{course.name}</h3>

            </div>

          ))}

        </div>

      </section>

      <section className="contact" id="contact">

        <h2>Contact Us</h2>

        <p>
          If you have any questions,
          feel free to reach out to us!
        </p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
        >

          <input
            type="hidden"
            name="access_key"
            value="a7e26296-3f93-45ba-9b6b-a83844a652e6"
          />

          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />

          <textarea
            placeholder="Your Message"
            name="message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

      <footer>

        <p>
          © 2026 Campus Coder Hub |
          Designed by Vinay Kanuganti
        </p>

      </footer>

    </div>
  );
}

export default Home;