import React, { useState, useEffect } from 'react';
import { ChevronDown, Clock, MapPin, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToReservation = () => {
    const reservationSection = document.getElementById('reservation');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center transition-all duration-1000 ease-in-out"
      style={{ 
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6 opacity-0 animate-fade-in">
            Experience the Art of <span className="text-[#D4AF37]">Fine Dining</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90 opacity-0 animate-fade-in-delay leading-relaxed">
            Where culinary excellence meets elegant ambiance. Immerse yourself in an unforgettable dining experience crafted by our award-winning chefs.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 opacity-0 animate-fade-in-delay-2">
            <button 
              onClick={scrollToReservation}
              className="bg-[#D4AF37] hover:bg-[#B69121] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
            >
              Reserve Your Table
            </button>
            <button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold py-4 px-8 rounded-full transition-all duration-300 w-full md:w-auto"
            >
              Explore Our Menu
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center opacity-0 animate-fade-in-delay-2">
            <div className="flex flex-col items-center">
              <Clock className="w-6 h-6 text-[#D4AF37] mb-2" />
              <p className="font-semibold">Open Hours</p>
              <p className="text-sm text-white/80">Tue-Sun: 5:30 PM - 11:00 PM</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-[#D4AF37] mb-2" />
              <p className="font-semibold">Location</p>
              <p className="text-sm text-white/80">123 Gourmet Avenue, Culinary District</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-[#D4AF37] mb-2" />
              <p className="font-semibold">Reservations</p>
              <p className="text-sm text-white/80">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll down"
          className="text-white opacity-75 hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;