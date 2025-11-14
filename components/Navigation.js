import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="nav-viking py-4 px-4 sticky top-0 z-50 relative">
      {/* Runic decoration top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        {/* Logo with runic accent */}
        <Link href="/" className="text-2xl font-bold text-viking-gold hover:text-viking-rune transition-all duration-300 flex items-center gap-2 group">
          <span className="text-3xl opacity-60 group-hover:opacity-100 transition-opacity">⚔</span>
          <span className="font-['Cinzel',serif] tracking-wider uppercase">
            Viking Name Forge
          </span>
          <span className="text-3xl opacity-60 group-hover:opacity-100 transition-opacity">⚔</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 text-base">
          <Link
            href="/"
            className="text-viking-frost hover:text-viking-gold transition-all duration-300 font-['Cinzel',serif] tracking-wide relative group"
          >
            <span className="relative z-10">Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-viking-gold group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link
            href="/blog"
            className="text-viking-frost hover:text-viking-gold transition-all duration-300 font-['Cinzel',serif] tracking-wide relative group"
          >
            <span className="relative z-10">Blog</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-viking-gold group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link
            href="/contact"
            className="text-viking-frost hover:text-viking-gold transition-all duration-300 font-['Cinzel',serif] tracking-wide relative group"
          >
            <span className="relative z-10">Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-viking-gold group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link
            href="/privacy"
            className="text-viking-frost hover:text-viking-gold transition-all duration-300 font-['Cinzel',serif] tracking-wide relative group opacity-75"
          >
            <span className="relative z-10">Privacy</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-viking-gold group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link
            href="/terms"
            className="text-viking-frost hover:text-viking-gold transition-all duration-300 font-['Cinzel',serif] tracking-wide relative group opacity-75"
          >
            <span className="relative z-10">Terms</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-viking-gold group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>
      </div>

      {/* Bottom runic decoration */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 opacity-30 text-viking-gold text-xs">
        <span>᛫</span>
        <span>᛫</span>
        <span>᛫</span>
        <span>᛫</span>
        <span>᛫</span>
      </div>
    </nav>
  );
}
