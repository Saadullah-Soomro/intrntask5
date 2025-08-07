import { Tv, Download, Globe, Baby } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      title: "Enjoy on your TV",
      description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      icon: Tv
    },
    {
      title: "Download your shows to watch offline",
      description: "Save your favourites easily and always have something to watch.",
      icon: Download
    },
    {
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      icon: Globe
    },
    {
      title: "Create profiles for kids", 
      description: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      icon: Baby
    }
  ]

  return (
    <section className="bg-black text-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">More Reasons to Join</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="bg-gradient-to-br from-purple-900/20 to-purple-600/20 p-6 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
                <div className="mb-4">
                  <IconComponent className="w-12 h-12 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
