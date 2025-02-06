import React from "react";

const HomePage = () => {
  const products = [
    { id: 1, name: "Bracelet en argent", price: "150 MAD", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Huile d'argan bio", price: "200 MAD", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Tapis berbère", price: "1200 MAD", image: "https://via.placeholder.com/150" }
  ];

  const events = [
    { id: 1, title: "Concert Gnawa", date: "15 Février 2025", location: "Place Moulay Hassan" },
    { id: 2, title: "Festival des Alizés", date: "20 Mars 2025", location: "Scène centrale" }
  ];

  const places = [
    { id: 1, name: "Plage de Sidi Kaouki", description: "Spot idéal pour le surf et la détente." },
    { id: 2, name: "La Sqala", description: "Forteresse offrant une vue magnifique sur l'océan." }
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Section Artisanat */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Artisanat Local</h2>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="p-4 border rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Événements */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Événements à Venir</h2>
        <ul className="space-y-2">
          {events.map((event) => (
            <li key={event.id} className="p-4 border rounded-lg shadow-md">
              <h3 className="font-semibold">{event.title}</h3>
              <p className="text-gray-600">📅 {event.date} - 📍 {event.location}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Section Tourisme */}
      <section>
        <h2 className="text-2xl font-bold mb-4">À Découvrir à Essaouira</h2>
        <div className="space-y-2">
          {places.map((place) => (
            <div key={place.id} className="p-4 border rounded-lg shadow-md">
              <h3 className="font-semibold">{place.name}</h3>
              <p className="text-gray-600">{place.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
