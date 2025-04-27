import React, { useState } from 'react';
import { menuItems, menuCategories } from '../data/menuItems';

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = menuItems.filter(
    item => selectedCategory === 'all' || item.category === selectedCategory
  );

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, crafted with passion and the finest ingredients
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {menuCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#7D2027] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <span className="text-[#7D2027] font-bold">${item.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;