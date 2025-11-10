import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Viking Names Blog - Norse History & Name Meanings | Viking Name Forge',
  description: 'Explore the fascinating world of Viking names, Norse history, and Scandinavian naming traditions. Learn about famous Vikings, name meanings, and historical context.',
  openGraph: {
    title: 'Viking Names Blog - Norse History & Name Meanings',
    description: 'Discover the stories behind Viking names and Norse naming traditions',
    type: 'website',
  },
};

const blogPosts = [
  {
    slug: 'what-would-my-viking-name-be',
    title: 'What Would My Viking Name Be? Your Complete Guide',
    excerpt: 'Discover how Vikings chose names and what your Viking name would be based on historical Norse naming conventions.',
    date: 'November 2025',
    readTime: '6 min read',
    category: 'Guide',
  },
  {
    slug: 'famous-viking-names',
    title: 'Famous Viking Names and Their Meanings from History',
    excerpt: 'Explore the legendary names of history\'s most famous Vikings including Ragnar Lothbrok, Leif Erikson, and more.',
    date: 'November 2025',
    readTime: '8 min read',
    category: 'History',
  },
  {
    slug: 'female-viking-names',
    title: 'Female Viking Names: Shield-Maidens and Norse Women',
    excerpt: 'A comprehensive guide to authentic female Viking names, their meanings, and the powerful women who bore them.',
    date: 'November 2025',
    readTime: '7 min read',
    category: 'Names',
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen relative">
      <Navigation />

      {/* Epic Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Dramatic background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-viking-stone to-viking-dark opacity-40"></div>

        {/* Animated runic symbols background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 text-7xl text-viking-gold animate-pulse" style={{animationDuration: '4s'}}>ᚠ</div>
          <div className="absolute top-20 right-20 text-6xl text-viking-gold animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}>ᚦ</div>
          <div className="absolute bottom-20 left-1/4 text-8xl text-viking-gold animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}>ᚱ</div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-block mb-6 px-6 py-2 viking-border-light rounded">
            <span className="text-viking-gold font-['Cinzel',serif] tracking-[0.2em] uppercase text-sm">
              Norse History & Traditions
            </span>
          </div>

          <h1 className="heading-epic text-5xl md:text-6xl mb-6">
            Viking Names Blog
          </h1>

          {/* Runic Divider */}
          <div className="flex items-center justify-center gap-6 mb-6 opacity-50">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-viking-gold"></div>
            <span className="text-viking-gold text-2xl">᛭</span>
            <span className="text-viking-gold text-2xl">᛭</span>
            <span className="text-viking-gold text-2xl">᛭</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-viking-gold"></div>
          </div>

          <p className="text-xl text-viking-frost opacity-90 font-['Cinzel',serif] leading-relaxed">
            Explore Norse history, Viking naming traditions, and the stories behind legendary names
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="viking-card hover:border-viking-gold transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 border border-viking-gold border-opacity-50 text-viking-gold text-xs font-['Cinzel',serif] font-semibold rounded uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-sm text-viking-frost opacity-60 font-['Cinzel',serif]">{post.readTime}</span>
                </div>

                <h2 className="text-2xl font-['Cinzel',serif] font-bold text-viking-gold mb-3 group-hover:text-viking-rune transition-colors">
                  {post.title}
                </h2>

                <p className="text-viking-frost opacity-80 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-viking-frost opacity-60 font-['Cinzel',serif]">{post.date}</span>
                  <span className="text-viking-gold font-['Cinzel',serif] font-semibold group-hover:text-viking-rune transition-colors">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center viking-card border-viking-gold">
            <h3 className="text-3xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase tracking-wide">
              Generate Your Viking Name Now
            </h3>

            {/* Runic Divider */}
            <div className="flex items-center justify-center gap-4 mb-6 opacity-40">
              <div className="h-px w-16 bg-viking-gold"></div>
              <span className="text-viking-gold text-xl">᛭</span>
              <span className="text-viking-gold text-xl">᛭</span>
              <span className="text-viking-gold text-xl">᛭</span>
              <div className="h-px w-16 bg-viking-gold"></div>
            </div>

            <p className="text-viking-frost opacity-90 mb-6 font-['Cinzel',serif] text-lg">
              Try our free Viking name generator and discover your authentic Norse warrior identity
            </p>
            <Link
              href="/"
              className="btn-viking inline-block"
            >
              <span className="flex items-center gap-2">
                <span>Forge Your Name</span>
                <span>→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
