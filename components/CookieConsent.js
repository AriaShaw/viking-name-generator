'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-viking-stone bg-opacity-98 backdrop-blur-sm p-4 shadow-2xl z-50 border-t-2 border-viking-gold border-opacity-60">
      {/* Runic decoration top border */}
      <div className="absolute top-0 left-0 right-0 flex justify-center gap-6 opacity-30 text-viking-gold text-xs -mt-2">
        <span>᛫</span>
        <span>᛫</span>
        <span>᛫</span>
        <span>᛫</span>
        <span>᛫</span>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base text-viking-frost opacity-90 leading-relaxed">
            We use cookies to improve your experience and display personalized ads. By using our site, you consent to cookies.{' '}
            <Link href="/privacy" className="text-viking-gold hover:text-viking-rune underline transition-colors font-['Cinzel',serif] font-semibold">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={declineCookies}
            className="px-4 py-2 bg-viking-wood border border-viking-gold border-opacity-50 text-viking-frost hover:border-viking-gold hover:border-opacity-100 rounded font-['Cinzel',serif] text-sm font-medium transition-all duration-300"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="btn-viking text-sm py-2 px-6"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
