import Head from "next/head";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import Footer from "../components/Footer";
import Header from "../components/Header";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Home() {
  const Hero = () => {
    return (
      <div className="hero section">
        <PrimaryButton>Rent a car now!</PrimaryButton>
      </div>
    );
  };

  const About = () => {
    return (
      <div className="about section">
        <h2>About Us</h2>
        <p>
          We have the Car keys for you to enjoy journey as you drive away with
          your Family & Friends . Choice Of more than 20+ car models and rent by
          the day, week or month. Enjoy Drive to the roads in the Cars you Enjoy
          from "Drift Rentals", India's leading self drive cars rental service.
          Get us in your neighborhood with our fleet spread over in multi
          cities. So whenever you Travel, "Drift Rentals" will always be near
          with 100+ pick-up locations. Now Be Ready to drive yourself to your
          next adventure journey in anywhere in India.
        </p>
      </div>
    );
  };

  const Features = () => {
    return (
      <div className="features section">
        <div className="box">
          <h2>Any Locations Rent</h2>
          <p>We provide car rental for any location all over India.</p>
        </div>
        <div className="box">
          <h2>Secure and Safer Rides</h2>
          <p>Know exactly what you’re paying us for</p>
        </div>
        <div className="box">
          <h2>Price Match Guarantee</h2>
          <p>Found the same deal for less? We’ll match the price.</p>
        </div>
        <div className="box">
          <h2>Flexible Rentals</h2>
          <p>
            Cancel or change bookings for free up to 48 hours before pick-up.
          </p>
        </div>
        <div className="box">
          <h2>No Hidden Cost</h2>
          <p> Free to book with no other extra charges and costs.</p>
        </div>
        <div className="box">
          <h2>Online 24 / 7 Support</h2>
          <p>We provide 24 /7 online support for own rental customers.</p>
        </div>
      </div>
    );
  };

  const Reviews = () => {
    return (
      <div className="reviews section">
        <h2>Reviews by our Clients</h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          <div className="container">
            <p className="review">
              It was incredibly delightful to use Drift Rentals rental system,
              As all procedure being online it was truly bother free
              understanding. great help please prop it up.
            </p>
            <p className="name">~ Pawan</p>
          </div>
          <div className="container">
            <p className="review">
              It was unimaginable joy using the services of Drift Rentals, As
              all method being on the web it was really trouble free. Amazing
              experience
            </p>
            <p className="name">~ Shubham</p>
          </div>
          <div className="container">
            <p className="review">
              I have hired a vehicle from Drift Rentals in Delhi and got great
              quality vehicle at a sensible value! Served our excursion plans
              well and very comforatble for the whole family!
            </p>
            <p className="name">~ Paras</p>
          </div>
          <div className="container">
            <p className="review">
              I hired an i20 from Drift Rentals to go to jaipur. The car was
              pretty good in condition and we enjoyed the ride.
            </p>
            <p className="name">~ Nisha</p>
          </div>
        </Carousel>
      </div>
    );
  };

  return (
    <div className="container">
      <Head>
        <title>Drift Rental</title>
      </Head>

      <Header />

      <main id="home">
        <Hero />
        <About />
        <Features />
        <Reviews />
      </main>

      <Footer />
    </div>
  );
}
