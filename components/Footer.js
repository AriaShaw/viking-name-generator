import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t-2 border-viking-gold border-opacity-30">
      <div className="absolute inset-0 bg-gradient-to-b from-viking-dark to-viking-stone opacity-50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* About Column */}
          <div>
            <h3 className="text-xl font-['Cinzel',serif] font-bold mb-6 text-viking-gold uppercase tracking-wider">
              Viking Name Forge
            </h3>
            <p className="text-viking-frost opacity-80 leading-relaxed">
              Generate authentic Norse warrior names based on historical Viking traditions. Free, instant, and historically accurate.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-xl font-['Cinzel',serif] font-bold mb-6 text-viking-gold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-viking-frost opacity-80 hover:text-viking-gold hover:opacity-100 transition-all duration-300">
                  Name Generator
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-viking-frost opacity-80 hover:text-viking-gold hover:opacity-100 transition-all duration-300">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-viking-frost opacity-80 hover:text-viking-gold hover:opacity-100 transition-all duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-viking-frost opacity-80 hover:text-viking-gold hover:opacity-100 transition-all duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h3 className="text-xl font-['Cinzel',serif] font-bold mb-6 text-viking-gold uppercase tracking-wider">
              Historical Accuracy
            </h3>
            <p className="text-viking-frost opacity-80 mb-4 leading-relaxed">
              Based on historical records from the Viking Age (793-1066 CE)
            </p>
            <p className="text-viking-frost opacity-80 leading-relaxed">
              All names are authentic Old Norse names documented in sagas and historical records.
            </p>
          </div>
        </div>

        {/* Runic Divider */}
        <div className="flex items-center justify-center gap-4 my-8 opacity-30">
          <div className="h-px w-20 bg-viking-gold"></div>
          <span className="text-viking-gold">᛭</span>
          <span className="text-viking-gold">᛭</span>
          <span className="text-viking-gold">᛭</span>
          <div className="h-px w-20 bg-viking-gold"></div>
        </div>

        <div className="text-center text-viking-frost opacity-60 text-sm">
          <p>&copy; 2025 vikingnameforge.online - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
