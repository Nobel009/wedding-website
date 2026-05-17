import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection'
import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import CountdownTimer from './components/CountdownTimer/CountdownTimer'
import OurStory from './components/OurStory/OurStory'
import DressCode from './components/DressCode/DressCode'
import GiftGuide from './components/GiftGuide/GiftGuide'
import VenueSection from './components/VenueSection/VenueSection'
import FAQ from './components/FAQ/FAQ'
import PrenupPhotos from './components/PrenupPhotos/PrenupPhotos'
import RSVPForm from './components/RSVPForm/RSVPForm'
import Footer from './components/Footer/Footer'
import { weddingConfig } from './data/weddingConfig'

function Divider() {
  return <hr className="divider" aria-hidden="true" />
}

function App() {
  return (
    <>
      <NavBar config={weddingConfig} />
      <main>
        <HeroSection config={weddingConfig} />
        <WelcomeSection config={weddingConfig} />
        <Divider />
        <CountdownTimer weddingDate={weddingConfig.date} />
        <OurStory config={weddingConfig} />
        <Divider />
        <DressCode config={weddingConfig} />
        <GiftGuide config={weddingConfig} />
        <Divider />
        <VenueSection config={weddingConfig} />
        <FAQ items={weddingConfig.faq} />
        <PrenupPhotos config={weddingConfig} />
        <RSVPForm config={weddingConfig} />
      </main>
      <Footer config={weddingConfig} />
    </>
  )
}

export default App
