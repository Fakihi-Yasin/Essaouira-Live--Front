const Hero = () => {
    return (
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/placeholder.svg?height=1080&width=1920" alt="Essaouira" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Discover Essaouira Differently</h1>
          <p className="text-xl md:text-2xl mb-8">Experience the magic of Morocco's coastal gem</p>
          <button className="bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300">
            Explore
          </button>
        </div>
      </div>
    )
  }
  
  export default Hero
  
  