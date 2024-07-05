import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import MyStory from "./pages/MyStory";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <MyStory />
      <Footer />
    </div>
  );
}

export default App;
