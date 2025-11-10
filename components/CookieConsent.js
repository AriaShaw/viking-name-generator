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
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-2xl z-50 border-t-4 border-blue-600">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base">
            We use cookies to improve your experience and display personalized ads. By using our site, you consent to cookies.{' '}
            <Link href="/privacy" className="underline hover:text-blue-300">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={declineCookies}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm font-medium transition-colors"
          >
            Decline
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
