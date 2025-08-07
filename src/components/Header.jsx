import { Globe } from 'lucide-react'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-12 py-4">
      <div className="flex items-center">
        <h1 className="text-red-600 text-2xl md:text-4xl font-bold tracking-wider">
          NETFLIX
        </h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative flex items-center">
          <Globe className="w-4 h-4 text-white absolute left-2" />
          <select className="bg-transparent border border-white/50 text-white pl-8 pr-3 py-1 rounded text-sm appearance-none">
            <option value="en" className="bg-black">English</option>
            <option value="hi" className="bg-black">हिन्दी</option>
          </select>
        </div>
        
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-medium transition-colors">
          Sign In
        </button>
      </div>
    </header>
  )
}
