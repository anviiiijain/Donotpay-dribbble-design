import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Perks from './components/Perks'
import Location from './components/Location'
import Investors from './components/Investors'
import JoinUs from './components/JoinUs'
import Cta from './components/Cta'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar/>
      {/* HERO */}
      <Hero/>
      {/* PERKS */}
      <Perks/>
      {/* LOCATION */}
      <Location/>
      {/* INVESTOR */}
      <Investors/>
      {/* JOIN US */}
      <JoinUs/>
      {/* CTA */}
      <Cta/>
      {/* FOOTER */}
      <Footer/>
    </div>
  )
}
