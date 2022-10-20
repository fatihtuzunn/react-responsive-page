import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Your Journey Starts Here"
        text="Choose Your Favorite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
    </>
  );
}
