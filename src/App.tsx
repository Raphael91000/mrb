import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white">

      {/* HERO — PAS DE BACKGROUND MOBILE */}
      <section id="accueil">
        <Hero />
      </section>

      {/* WRAPPER BACKGROUND MOBILE */}
      <div
        className="
          bg-cover
          bg-center
          bg-no-repeat
          bg-[url('/bg.mobile.png')]
          md:bg-none
        "
      >
        <Services />
        <Gallery />
        <Reviews />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
