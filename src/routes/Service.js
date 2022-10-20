import Hero from "../components/Hero";
import ServiceImg from "../assets/1.jpg";
import Showcase from "../components/Showcase/Showcase";

export default function Service() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Service"
        text="Choose Your Favorite Destination"
        btnClass="hide"
      />

      <Showcase />
      
    </>
  );
}
