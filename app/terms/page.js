import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - Viking Name Generator',
  description: 'Terms of service for Viking Name Forge. Read our terms and conditions for using our free Viking name generator.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfService() {
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
            Terms of Service
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
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Agreement to Terms</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              By accessing and using Viking Name Forge (vikingnameforge.online), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Use License</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              Permission is granted to use the Viking Name Generator for personal, non-commercial purposes. This license includes the right to:
            </p>
            <ul className="list-disc pl-6 text-viking-frost opacity-90 mb-4 space-y-2">
              <li>Generate Viking names for personal use</li>
              <li>Use generated names in gaming, writing, or creative projects</li>
              <li>Share generated names on social media</li>
            </ul>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              This license does NOT allow you to:
            </p>
            <ul className="list-disc pl-6 text-viking-frost opacity-90 mb-4 space-y-2">
              <li>Copy or reproduce the website code or design</li>
              <li>Modify or create derivative works based on this website</li>
              <li>Use this website for commercial purposes without permission</li>
              <li>Remove copyright or proprietary notices</li>
              <li>Transfer the website materials to another person</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Free Service</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              Viking Name Forge is provided as a free service. We reserve the right to modify, suspend, or discontinue the service at any time without notice or liability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Disclaimer</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              The materials and information on Viking Name Forge are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              While we strive for historical accuracy in our Viking names database, we do not guarantee that all names and epithets are 100% historically accurate or properly translated from Old Norse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Content Ownership</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              The Viking names generated by our tool are based on historical records and are not subject to copyright. However, the website design, code, database structure, and original content are protected by copyright and owned by Viking Name Forge.
            </p>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              You are free to use any Viking names generated for your personal or commercial projects without attribution, as these names are part of historical public domain.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Limitations of Liability</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              In no event shall Viking Name Forge or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Accuracy of Materials</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              The materials appearing on Viking Name Forge could include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate, complete, or current. We may make changes to the materials at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Third-Party Links</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              Viking Name Forge may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Advertising</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              This website displays advertisements provided by Google AdSense. These ads may be targeted based on the content of the page or information about you. By using this website, you consent to the use of cookies for advertising purposes as described in our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">User Conduct</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-viking-frost opacity-90 mb-4 space-y-2">
              <li>Use the website in any way that violates any applicable laws or regulations</li>
              <li>Attempt to interfere with the proper functioning of the website</li>
              <li>Use automated systems (bots, scrapers) to access the website without permission</li>
              <li>Engage in any activity that could damage or overload our servers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Modifications to Terms</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              We may revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound by the current version of these Terms of Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Governing Law</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase">Contact Information</h2>
            <p className="text-viking-frost opacity-90 mb-4 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through our website.
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
