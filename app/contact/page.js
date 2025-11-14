import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'Contact Us - Viking Name Generator',
  description: 'Get in touch with Viking Name Forge. We welcome your questions, feedback, and suggestions about our Norse name generator.',
  alternates: {
    canonical: 'https://vikingnameforge.online/contact',
  },
  openGraph: {
    title: 'Contact Us - Viking Name Generator',
    description: 'Get in touch with Viking Name Forge for questions and feedback.',
    url: 'https://vikingnameforge.online/contact',
    siteName: 'Viking Name Forge',
    images: [
      {
        url: 'https://vikingnameforge.online/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Viking Name Generator - Contact Us',
      },
    ],
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen relative">
      <Navigation />

      <section className="relative py-32 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-viking-stone to-viking-dark opacity-40"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-6 py-2 viking-border-light rounded">
              <span className="text-viking-gold font-['Cinzel',serif] tracking-[0.2em] uppercase text-sm">
                Get In Touch
              </span>
            </div>

            <h1 className="heading-epic text-5xl md:text-7xl mb-8">
              Contact Us
            </h1>

            <div className="flex items-center justify-center gap-6 mb-8 opacity-50">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-viking-gold"></div>
              <span className="text-viking-gold text-3xl">᛭</span>
              <span className="text-viking-gold text-3xl">᛭</span>
              <span className="text-viking-gold text-3xl">᛭</span>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-viking-gold"></div>
            </div>

            <p className="text-xl text-viking-frost opacity-90 leading-relaxed max-w-2xl mx-auto">
              Have questions, feedback, or suggestions? We would love to hear from you.
            </p>
          </div>

          {/* Contact Information */}
          <div className="viking-card mb-12">
            <div className="text-center py-8">
              <div className="mb-6">
                <span className="text-6xl">📧</span>
              </div>

              <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase tracking-wide">
                Email Us
              </h2>

              <a
                href="mailto:contact@vikingnameforge.online"
                className="text-xl text-viking-rune hover:text-viking-gold transition-colors duration-300 inline-block mb-2"
              >
                contact@vikingnameforge.online
              </a>

              <p className="text-viking-frost opacity-80 mt-6 leading-relaxed">
                We typically respond within 24-48 hours
              </p>
            </div>
          </div>

          {/* What You Can Contact Us About */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl font-['Cinzel',serif] font-bold text-viking-gold text-center mb-8 uppercase tracking-wide">
              How We Can Help
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="viking-card bg-opacity-50">
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-1">💡</span>
                  <div>
                    <h3 className="text-lg font-['Cinzel',serif] font-bold text-viking-gold mb-2">
                      Suggestions
                    </h3>
                    <p className="text-viking-frost opacity-90 text-sm">
                      Share your ideas for new features or improvements
                    </p>
                  </div>
                </div>
              </div>

              <div className="viking-card bg-opacity-50">
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-1">🐛</span>
                  <div>
                    <h3 className="text-lg font-['Cinzel',serif] font-bold text-viking-gold mb-2">
                      Bug Reports
                    </h3>
                    <p className="text-viking-frost opacity-90 text-sm">
                      Let us know if something is not working properly
                    </p>
                  </div>
                </div>
              </div>

              <div className="viking-card bg-opacity-50">
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-1">📚</span>
                  <div>
                    <h3 className="text-lg font-['Cinzel',serif] font-bold text-viking-gold mb-2">
                      Historical Questions
                    </h3>
                    <p className="text-viking-frost opacity-90 text-sm">
                      Ask about Viking naming traditions and Norse culture
                    </p>
                  </div>
                </div>
              </div>

              <div className="viking-card bg-opacity-50">
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-1">🤝</span>
                  <div>
                    <h3 className="text-lg font-['Cinzel',serif] font-bold text-viking-gold mb-2">
                      Partnerships
                    </h3>
                    <p className="text-viking-frost opacity-90 text-sm">
                      Inquiries about collaboration or content partnerships
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="viking-card text-center bg-opacity-30">
            <h3 className="text-xl font-['Cinzel',serif] font-bold text-viking-gold mb-6 uppercase tracking-wide">
              Before You Contact Us
            </h3>
            <p className="text-viking-frost opacity-90 mb-6">
              You might find your answer in these resources:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/blog"
                className="px-6 py-3 bg-viking-wood bg-opacity-50 border border-viking-gold border-opacity-30 hover:border-opacity-60 transition-all duration-300 text-viking-frost font-['Cinzel',serif]"
              >
                Blog & Guides
              </a>
              <a
                href="/privacy"
                className="px-6 py-3 bg-viking-wood bg-opacity-50 border border-viking-gold border-opacity-30 hover:border-opacity-60 transition-all duration-300 text-viking-frost font-['Cinzel',serif]"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="px-6 py-3 bg-viking-wood bg-opacity-50 border border-viking-gold border-opacity-30 hover:border-opacity-60 transition-all duration-300 text-viking-frost font-['Cinzel',serif]"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 my-12 opacity-30">
            <div className="h-px w-16 bg-viking-gold"></div>
            <span className="text-viking-gold">᛭</span>
            <span className="text-viking-gold">᛭</span>
            <span className="text-viking-gold">᛭</span>
            <div className="h-px w-16 bg-viking-gold"></div>
          </div>

          {/* Back to Generator */}
          <div className="text-center">
            <a
              href="/"
              className="btn-viking inline-block"
            >
              <span className="flex items-center gap-2">
                <span>⚡</span>
                <span>Back to Name Generator</span>
                <span>⚡</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
