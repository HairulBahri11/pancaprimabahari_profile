import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Transparency from "@/components/Transparency";
import Products from "@/components/Products";
import Coverage from "@/components/Coverage";
import Footer from "@/components/Footer";
import BestSellerDori from "@/components/BestSellerDori";
import QualityAndInfrastructure from "@/components/QualityAndInfrastructure";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Advantages />
      <Transparency />
      <BestSellerDori />
      <Products />
      <QualityAndInfrastructure />
      <Coverage />
      <Footer />
    </>
  );
}
