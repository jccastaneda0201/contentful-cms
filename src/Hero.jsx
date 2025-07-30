import heroImg from './assets/hero.svg';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            A headless CMS is a back-end only content management system that provides content
            creators with an intuitive interface for creating and managing content, while leaving
            the front-end presentation layer to be handled by a separate system or platform.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
