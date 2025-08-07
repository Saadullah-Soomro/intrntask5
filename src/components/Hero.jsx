import { ChevronRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gradient-to-br from-purple-900 via-blue-900 to-black"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/background-hero-image.jpg")'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Unlimited movies, TV shows, and more
        </h1>
        
        <p className="text-lg md:text-xl mb-4">
          Starts at Rs 250. Cancel anytime.
        </p>
        
        <p className="text-base md:text-lg mb-8">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Email address"
            className="w-full md:flex-1 px-4 py-3 bg-black/50 border border-gray-500 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white"
          />
          <button className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-medium text-lg transition-colors flex items-center justify-center gap-2">
            Get Started
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
