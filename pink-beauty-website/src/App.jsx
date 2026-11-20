
import './App.css';

function Header() {
  return (
    <header>
      <h2>♡ Pink Beauty</h2>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="small-title">WELCOME TO PINK BEAUTY</p>

        <h1>Beauty begins with you </h1>

        <p>
          Discover your beauty with us.
          Feel special, confident and beautiful
          every single day.
        </p>

        <a href="#services" className="button">
          Explore Services
        </a>
      </div>

     <div className="hero-image">
  <img src="/src/images/beauty.jpg" alt="Pink Beauty" />
</div>
    </section>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <p className="small-title">OUR STORY</p>
      <h2>About Us</h2>

      <p>
        Pink Beauty is a modern beauty studio
        created to make every woman feel special.
        We believe that beauty starts with self-care
        and confidence.
      </p>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <p className="small-title">WHAT WE OFFER</p>
      <h2>Our Services</h2>

     
<div className="cards">

  <div className="card">
    <img src="/manicure.jpg" alt="Manicure" />
    <h3>Manicure</h3>
    <p>Beautiful nails and professional care.</p>
    <h4>5,000 ₸</h4>
  </div>

  <div className="card">
    <img src="/makeup.jpg" alt="Makeup" />
    <h3>Makeup</h3>
    <p>Natural and glamorous makeup looks.</p>
    <h4>8,000 ₸</h4>
  </div>

  <div className="card">
    <img src="/skincare.jpg" alt="Skincare" />
    <h3>Facial Care</h3>
    <p>Relaxing treatments for glowing skin.</p>
    <h4>7,000 ₸</h4>
  </div>

</div>

    </section>
  );
}

function Footer() {
  return (
    <footer id="contact">
      <h2>Pink Beauty </h2>
      <p>Your beauty, our passion.</p>
      <p>Instagram: @pinkbeauty</p>
      <p>Email: pinkbeauty@gmail.com</p>
      <p>Phone: +7 700 000 00 00</p>
      <p className="copyright">
        © 2026 Pink Beauty. All rights reserved.
      </p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
