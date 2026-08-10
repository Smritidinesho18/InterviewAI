import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features"
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Testimonials from "../../components/Testimonials/Testimonials";
import Pricing from "../../components/Pricing/Pricing";
import FAQ from "../../components/FAQ/FAQ";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";




function Home() {
  return (
    <>
      
      <Navbar />
      <Hero/>
      <Features/>
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ/>
      <CTA />
      <Footer />
      
      
      
      

    </>
  );
}

export default Home;