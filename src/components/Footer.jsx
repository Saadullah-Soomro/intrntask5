import { Globe } from 'lucide-react'

export default function Footer() {
  const footerLinks = [
    {
      title: "Questions? Contact us.",
      links: ["FAQ", "Help Center", "Account", "Media Center"]
    },
    {
      title: "",
      links: ["Investor Relations", "Jobs", "Ways to Watch", "Terms of Use"] 
    },
    {
      title: "",
      links: ["Privacy", "Cookie Preferences", "Corporate Information", "Contact Us"]
    },
    {
      title: "",
      links: ["Speed Test", "Legal Notices", "Only on Netflix", ""]
    }
  ]

  return (
    <footer className="bg-black text-gray-400 py-12 px-4 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-base underline hover:no-underline cursor-pointer">
            Questions? Contact us.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerLinks.map((column, colIndex) => (
            <div key={colIndex}>
              {column.links.map((link, linkIndex) => (
                link && (
                  <div key={linkIndex} className="mb-3">
                    <a href="#" className="text-sm underline hover:no-underline transition-colors">
                      {link}
                    </a>
                  </div>
                )
              ))}
            </div>
          ))}
        </div>
        
        <div className="flex items-center mb-8">
          <div className="relative flex items-center">
            <Globe className="w-4 h-4 text-gray-400 absolute left-2" />
            <select className="bg-transparent border border-gray-600 text-gray-400 pl-8 pr-3 py-2 rounded text-sm appearance-none">
              <option value="en" className="bg-black">English</option>
              <option value="hi" className="bg-black">हिन्दी</option>
            </select>
          </div>
        </div>
        
        <div className="text-sm text-gray-500">
          <p>Netflix Pakistan</p>
        </div>
      </div>
    </footer>
  )
}
