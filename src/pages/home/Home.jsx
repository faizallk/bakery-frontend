import FeaturedSection from "./components/FeaturedSection";
import HeroSection from "./components/HeroSection";
import ProductCategoriesSection from "./components/ProductCategoriesSection";
import BakingArtSection from "./components/BakingArtSection"
import WhySpecialSection from "./components/WhySpecialSection";


import ScrollReveal from "../../components/ScrollReveal";

function Home() {
  return (
    <main>
      <HeroSection />
          <ScrollReveal>
       
      <FeaturedSection />
          </ScrollReveal>
     
<ScrollReveal> 

      <ProductCategoriesSection />
</ScrollReveal>
     
<ScrollReveal>

      <BakingArtSection />
      <WhySpecialSection />
</ScrollReveal>
      
    </main>
  );
}

export default Home;