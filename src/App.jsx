import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Pricing from './components/Pricing.jsx';
import Steps from './components/Steps.jsx';
import WhyUs from './components/WhyUs.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import WaFab from './components/WaFab.jsx';
import BookingModal from './components/BookingModal.jsx';

export default function App() {
  const [booking, setBooking] = useState(false);

  return (
    <div className="lp">
      <Header onBook={() => setBooking(true)} />
      <Hero onBook={() => setBooking(true)} />
      <Services />
      <Pricing />
      <Steps />
      <WhyUs />
      <CTA onBook={() => setBooking(true)} />
      <Footer />
      <WaFab />
      <BookingModal open={booking} onClose={() => setBooking(false)} />
    </div>
  );
}
