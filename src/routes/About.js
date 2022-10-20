import Hero from "../components/Hero";
import AboutImg from "../assets/1.jpg";

export default function About() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        text="Choose Your Favorite Destination"
        btnClass="hide"
      />
    </>
  );
}
