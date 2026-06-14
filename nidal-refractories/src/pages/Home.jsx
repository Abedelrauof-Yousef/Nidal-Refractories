import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProductsSection from '../components/ProductsSection'
import WhyChooseUsSection from '../components/WhyChooseUs'
import WorksSection from '../components/WorksSection'
import ContactCTA from '../components/ContactCTA'

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <WorksSection />
      <ContactCTA />
    </div>
  )
}

export default Home