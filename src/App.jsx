import Header from "./header";
import Homepage from "./homepage";
import Footer from "./footer";
import Projects from "./project";
import Contact from "./contact";
import About from "./About";
import Skills from "./skill";

function App() {
  return (
    <div
      className={`scroll-smooth bg-secondary-0 ease-linear duration-300 transition font-san text-secondary-0 min-h-screen  sm:px-0 w-screen flex flex-col`}
    >
      <Header />
      <Homepage />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
