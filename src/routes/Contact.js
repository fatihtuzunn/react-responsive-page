import ContactForum from "../components/ContactForm/ContactForm";
import Hero from "../components/Hero";
import contactImg from "../assets/2.jpg"

export default function Home() {
  return <>
  <Hero 
  cName="hero-mid"
  heroImg={contactImg}
  title="Contact"
  />
  <ContactForum />
  </>;
}
