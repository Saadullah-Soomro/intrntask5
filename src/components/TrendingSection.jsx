import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function TrendingSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const trendingShows = [
    {
      id: 1,
      title: "Wednesday",
      rank: "1",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop&crop=faces"
    },
    {
      id: 2,
      title: "Squid Game",
      rank: "2", 
      image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=300&h=400&fit=crop&crop=faces"
    },
    {
      id: 3,
      title: "RRR",
      rank: "3",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop&crop=faces"
    },
    {
      id: 4,
      title: "The Great Indian Kapil Show", 
      rank: "4",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=400&fit=crop&crop=faces"
    },
    {
      id: 5,
      title: "Khufiya",
      rank: "5",
      image: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=300&h=400&fit=crop&crop=faces"
    },
    {
      id: 6,
      title: "Stranger Things",
      rank: "6",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop&crop=faces"
    },
    {
      id: 7,
      title: "Money Heist",
      rank: "7",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=400&fit=crop&crop=faces"
    },
    {
      id: 8,
      title: "The Crown",
      rank: "8",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=faces"
    },
    {
      id: 9,
      title: "Breaking Bad",
      rank: "9",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=400&fit=crop&crop=faces"
    },
    {
      id: 10,
      title: "The Witcher",
      rank: "10",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop&crop=faces"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === trendingShows.length - 5 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? trendingShows.length - 5 : prevIndex - 1
    )
  }

  return (
    <section className="bg-black text-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Trending Now</h2>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 20}%)` }}
          >
            {trendingShows.map((show) => (
              <div key={show.id} className="relative flex-shrink-0 group cursor-pointer w-1/5 px-2">
                <div className="relative w-full h-36 bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src={show.image} 
                    alt={show.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Netflix logo badge */}
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    N
                  </div>
                  
                  {/* Rank number */}
                  <div className="absolute bottom-2 left-2">
                    <span className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                      {show.rank}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
