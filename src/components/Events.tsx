const events = [
    { id: 1, name: "Gnaoua World Music Festival", date: "June 20-23, 2024" },
    { id: 2, name: "Essaouira Atlantic Andalusia Festival", date: "October 24-27, 2024" },
    { id: 3, name: "Essaouira Beach Rugby Tournament", date: "July 15-16, 2024" },
  ]
  
  const Events = () => {
    return (
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Events & Gnawa Music</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div key={event.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
                <p className="text-gray-600">{event.date}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-900 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-800 transition duration-300">
              View All Events
            </button>
          </div>
        </div>
      </section>
    )
  }
  
  export default Events
  
  