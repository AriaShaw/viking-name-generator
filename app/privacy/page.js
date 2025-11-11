import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - Viking Name Generator',
  description: 'Privacy policy for Viking Name Forge. Learn how we collect, use, and protect your information.',
  alternates: {
    canonical: 'https://vikingnameforge.online/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen relative">
      <Navigation />

      {/* Header */}
      <header className="relative py-16 px-4 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-viking-stone to-viking-dark opacity-40"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <Link href="/" className="text-viking-frost opacity-70 hover:text-viking-gold mb-4 inline-flex items-center gap-2 transition-colors font-['Cinzel',serif]">
            <span>←</span>
            <span>Back to Generator</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-['Cinzel',serif] font-black text-viking-gold mb-4 uppercase tracking-wide">
            Privacy Policy
          </h1>

          {/* Runic Divider */}
          <div className="flex items-center gap-4 mb-4 opacity-40">
            <div className="h-px w-20 bg-viking-gold"></div>
            <span className="text-viking-gold text-xl">᛭</span>
            <span className="text-viking-gold text-xl">᛭</span>
            <span className="text-viking-gold text-xl">᛭</span>
            <div className="h-px flex-1 bg-viking-gold"></div>
          </div>

          <p className="text-viking-frost opacity-70 font-['Cinzel',serif]">Last updated: November 2025</p>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto viking-card">

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Introduction</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              Welcome to Viking Name Forge (vikingnameforge.online). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Information We Collect</h2>

            <h3 className="text-xl font-['Cinzel',serif] font-semibold text-viking-bronze mb-3">Automatically Collected Information</h3>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 text-viking-frost opacity-90 mb-4 space-y-2">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address</li>
              <li>Time zone setting</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>

            <h3 className="text-xl font-['Cinzel',serif] font-semibold text-viking-bronze mb-3">User-Generated Content</h3>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              Our Viking name generator operates entirely in your browser. We do not collect, store, or transmit any names you generate. All name generation happens on your device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">How We Use Your Information</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">We use the automatically collected information to:</p>
            <ul className="list-disc pl-6 text-viking-frost opacity-90 mb-4 space-y-2">
              <li>Improve our website and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Detect and prevent technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Cookies and Tracking Technologies</h2>

            <h3 className="text-xl font-['Cinzel',serif] font-semibold text-viking-bronze mb-3">Google Analytics</h3>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              We use Google Analytics to understand how visitors interact with our website. Google Analytics uses cookies to collect anonymous information such as the number of visitors, pages viewed, and traffic sources. This data is aggregated and anonymous.
            </p>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              You can opt out of Google Analytics by installing the{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-viking-gold hover:text-viking-rune transition-colors underline">
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>

            <h3 className="text-xl font-['Cinzel',serif] font-semibold text-viking-bronze mb-3">Google AdSense</h3>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. Google may use data such as:
            </p>
            <ul className="list-disc pl-6 text-viking-frost opacity-90 mb-4 space-y-2">
              <li>Your browsing history</li>
              <li>Demographic information</li>
              <li>Interests and preferences</li>
            </ul>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              You can opt out of personalized advertising by visiting{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-viking-gold hover:text-viking-rune transition-colors underline">
                Google Ads Settings
              </a>{' '}
              or{' '}
              <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-viking-gold hover:text-viking-rune transition-colors underline">
                aboutads.info
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Third-Party Services</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              Our website uses the following third-party services:
            </p>
            <ul className="list-disc pl-6 text-viking-frost opacity-90 mb-4 space-y-2">
              <li><strong className="text-viking-gold">Vercel</strong>: Website hosting (see Vercel Privacy Policy)</li>
              <li><strong className="text-viking-gold">Google Analytics</strong>: Website analytics (see Google Privacy Policy)</li>
              <li><strong className="text-viking-gold">Google AdSense</strong>: Advertising services (see Google Privacy Policy)</li>
            </ul>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              These third parties have their own privacy policies and may collect, use, and share data as described in their respective policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Data Retention</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              We retain automatically collected data for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Your Rights</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 text-viking-frost opacity-90 mb-4 space-y-2">
              <li><strong className="text-viking-gold">Access</strong>: Request access to your personal data</li>
              <li><strong className="text-viking-gold">Correction</strong>: Request correction of inaccurate data</li>
              <li><strong className="text-viking-gold">Deletion</strong>: Request deletion of your data</li>
              <li><strong className="text-viking-gold">Objection</strong>: Object to processing of your data</li>
              <li><strong className="text-viking-gold">Portability</strong>: Request transfer of your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Children's Privacy</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              Our website is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Changes to This Policy</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Contact Us</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through our website.
            </p>
          </section>

          <div className="mt-8 pt-8 border-t border-viking-gold border-opacity-30">
            <Link href="/" className="text-viking-gold hover:text-viking-rune transition-colors font-['Cinzel',serif] font-semibold inline-flex items-center gap-2">
              <span>←</span>
              <span>Return to Viking Name Generator</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
