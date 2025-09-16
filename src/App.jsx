import './App.css'
import WipeLanding from './components/hero-section'
import { World } from './components/world'
import { CountryCards } from './components/country-cards'
import { WipeFlex } from './components/wipe-flex'
import { TravelCards } from './components/travel-cards'
import { WhyWipe } from './components/why-wipe'
import { Testimonials } from './components/testimonials'
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {

  return (
    <>

      <Navbar />
      <section id="home"><WipeLanding/></section>
      <section id="world"><World /></section>
      <section id="country-cards"><CountryCards /></section>
      <section id="wipe-flex"><WipeFlex /></section>
      <section id="travel-cards"><TravelCards /></section>
      <section id="why-wipe"><WhyWipe /></section>
      <section id="testimonials"><Testimonials /></section>
      <Footer/>
    </>
  )
}

export default App
