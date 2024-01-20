import BookAppointment from "../components/BookAppointment";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";


function Home(): JSX.Element {
  return (
    <div className="home-section">
        <Navbar/>
        <Hero/>
        <BookAppointment/>
        <Reviews/>
        <Footer/>
    </div>
  );
}

export default Home;
