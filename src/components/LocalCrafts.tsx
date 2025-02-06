"use client"

import { useState } from "react"

const products = [
  { id: 1, name: "Silver Berber Necklace", price: 150, image: "/placeholder.svg?height=300&width=300" },
  { id: 2, name: "Argan Oil (100ml)", price: 25, image: "/placeholder.svg?height=300&width=300" },
  { id: 3, name: "Handwoven Berber Rug", price: 300, image: "/placeholder.svg?height=300&width=300" },
  { id: 4, name: "Thuya Wood Box", price: 50, image: "/placeholder.svg?height=300&width=300" },
]

const LocalCrafts = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  return (
    <section className="py-16 bg-sand-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Local Crafts</h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`w-full flex-shrink-0 transition-all duration-300 ease-in-out transform ${
                  index === currentIndex ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ left: `${(index - currentIndex) * 100}%` }}
              >
                <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default LocalCrafts

