import "../App.css";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Research", href: "#research" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Leadership", href: "#leadershipAndAcrtivites" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-opacity-10 border-amber-600">
      {/* Glass backdrop effect */}
      <div className="absolute inset-0 bg-gray-950 bg-opacity-80 backdrop-blur-md border-b border-amber-600 border-opacity-10"></div>
      
      <div className="relative flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#banner" className="group">
          <p className="text-2xl md:text-3xl font-bold font-serif text-amber-500 hover:text-amber-400 transition-colors">
            Sany
          </p>
          <p className="text-xs tracking-widest text-amber-600 uppercase group-hover:text-amber-400 transition-colors">
            Structural Engineer
          </p>
        </a>

        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:accent-gold transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Desktop CV Button - Right */}
        <div className="hidden lg:block">
          <a href="/CV.pdf" download>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-gray-950 font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/30">
              <Download size={18} />
              CV
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-amber-500 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-950 bg-opacity-95 backdrop-blur-lg border-b border-amber-600 border-opacity-10 lg:hidden">
          <div className="flex flex-col px-6 py-4 space-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-300 hover:text-amber-500 hover:bg-gray-900 rounded transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-700">
              <a href="/CV.pdf" download className="block">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-gray-950 font-semibold rounded-lg transition-colors">
                  <Download size={18} />
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
