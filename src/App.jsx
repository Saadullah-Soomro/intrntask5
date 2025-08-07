import Header from './components/Header'
import Hero from './components/Hero'
import TrendingSection from './components/TrendingSection'
import FeaturesSection from './components/FeaturesSection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <TrendingSection />
      <FeaturesSection />
      <FAQ />
      <Footer />
    </div>
  )
}