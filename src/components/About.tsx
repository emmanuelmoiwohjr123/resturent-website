import React from 'react';
import { Award, Users, Utensils } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Since 1995, Saveur has been a beacon of culinary excellence, combining traditional techniques with modern innovation. Our passion for exceptional dining experiences drives us to create unforgettable moments for our guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7D2027] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Michelin Starred</h3>
              <p className="text-gray-600">Recognized for culinary excellence and innovative gastronomy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7D2027] rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Master Chefs</h3>
              <p className="text-gray-600">Led by internationally acclaimed chefs with decades of experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7D2027] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Private Events</h3>
              <p className="text-gray-600">Bespoke dining experiences for special occasions and celebrations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">A Commitment to Excellence</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Saveur, we believe that dining is not just about food—it's about creating memories. Our commitment to excellence extends beyond our kitchen to every aspect of your experience with us.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From our carefully sourced ingredients to our expertly crafted wine list, every detail is considered to ensure your visit is nothing short of extraordinary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;