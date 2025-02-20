import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      {/* <div className="page-wrapper"> */}
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      {/* </div> */}
    </main>
  );
};

export default Home; 