import React, { useState, useEffect } from "react";

// Tailwind scroll animation utility
const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return scrollY;
};

export default function App() {
  const scrollY = useScrollAnimation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
          <div className="text-xl sm:text-2xl font-bold text-indigo-600">Prajakta Classes</div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
            <li><a href="#hero" className="hover:text-indigo-600 transition">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-600 transition">About</a></li>
            <li><a href="#services" className="hover:text-indigo-600 transition">Services</a></li>
            <li><a href="#contact" className="hover:text-indigo-600 transition">Contact</a></li>
          </ul>
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 text-2xl"
          >
            ☰
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col items-center gap-4 pb-4 text-gray-700 font-medium">
            <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white relative px-4"
      >
        <div
          className={`text-center max-w-2xl transition-transform duration-700 ${
            scrollY < 300 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-50"
          }`}
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Achieve Academic Excellence</h1>
          <p className="text-base sm:text-lg mb-6">
            Personalized tuition for every student. Improve your grades, understand concepts, and gain confidence!
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-indigo-600 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Book a Session
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">About Me</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              At Prajakta classes, we don’t just train skills — we build champions.Our philosophy is simple: Talent is nothing without hard work, focus, and the will to improve every single day.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              I focus on building strong fundamentals, practical problem-solving skills, and fostering a love for learning in every student.
            </p>
          </div>
          <div className="lg:w-1/2 w-full h-[400px] flex justify-center">
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.justdial.com%2FGhaziabad%2FSsc-Institutes-in-Govindpuram%2Fnct-11265823&psig=AOvVaw34RTXVN-U8Lstpw1wV2YON&ust=1760194203084000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPjY6b7wmZADFQAAAAAdAAAAABAf"
              alt="Teacher"
              className="rounded-2xl shadow-lg max-w-[300px] sm:max-w-[400px] w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-800">My Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {[
              { title: "Math Tutoring", desc: "From algebra to calculus, mastering concepts made easy.", icon: "∑" },
              { title: "Science Tutoring", desc: "Physics, chemistry, and biology explained with clarity.", icon: "🧪" },
              { title: "English & Writing", desc: "Improve grammar, comprehension, and essay writing.", icon: "✍️" },
              { title: "Exam Preparation", desc: "Targeted coaching for school and competitive exams.", icon: "📚" },
              { title: "Homework Help", desc: "Get personalized assistance for daily assignments.", icon: "📝" },
              { title: "Study Plans", desc: "Structured plans tailored to each student's needs.", icon: "📅" },
            ].map((s, i) => (
              <div
                key={i}
                className="p-6 border rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-2 hover:bg-indigo-50"
              >
                <div className="text-3xl sm:text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gray-50 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">Contact Me</h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">Have questions or want to book a session? Reach out!</p>
          <form className="grid gap-4">
            <input type="text" placeholder="Your Name" className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none" />
            <input type="email" placeholder="Email" className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none" />
            <textarea placeholder="Your Message" rows={5} className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
            <button type="submit" className="bg-indigo-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition">
              Send Message
            </button>
          </form>
          <div className="mt-10 text-gray-600 space-y-2 text-sm sm:text-base">
            <p>Email: prajakatasingh8777@gmail.com</p>
            <p>Phone: +91 8002507275</p>
            <p>Location: Vasant Kunj, Delhi</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-white border-t border-gray-200 text-center text-gray-500 text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Prajakta Classes • All rights reserved
      </footer>
    </div>
  );
}
