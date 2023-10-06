import Header from "./component/header"
import Homepage from "./component/homepage"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Footer from "./component/footer"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"


function App() {
 
  return (
    <div className={`scroll-smooth bg-secondary-0 ease-linear duration-500 transition font-san text-secondary-0 min-h-screen  sm:px-0 w-screen flex flex-col`}>
      <Header />
      <Homepage />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
