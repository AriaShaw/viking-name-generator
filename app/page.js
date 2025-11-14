import NameGenerator from '@/components/NameGenerator';
import AdSenseSlot from '@/components/AdSenseSlot';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <Navigation />

      {/* Epic Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Dramatic background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-viking-stone to-viking-dark opacity-40"></div>

        {/* Animated runic symbols background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-10 text-8xl text-viking-gold animate-pulse" style={{animationDuration: '4s'}}>ᚠ</div>
          <div className="absolute top-40 right-20 text-7xl text-viking-gold animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}}>ᚦ</div>
          <div className="absolute bottom-32 left-1/4 text-9xl text-viking-gold animate-pulse" style={{animationDuration: '6s', animationDelay: '2s'}}>ᚱ</div>
          <div className="absolute top-1/3 right-1/4 text-8xl text-viking-gold animate-pulse" style={{animationDuration: '5.5s', animationDelay: '0.5s'}}>ᚲ</div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-block mb-8 px-6 py-2 viking-border-light rounded">
            <span className="text-viking-gold font-['Cinzel',serif] tracking-[0.2em] uppercase text-sm">
              Authentic Norse Identity Generator
            </span>
          </div>

          {/* Main Heading - Epic Style */}
          <h1 className="heading-epic text-6xl md:text-8xl mb-8">
            Viking Name Generator
          </h1>

          {/* Runic Divider */}
          <div className="flex items-center justify-center gap-6 mb-8 opacity-50">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-viking-gold"></div>
            <span className="text-viking-gold text-3xl">᛭</span>
            <span className="text-viking-gold text-3xl">᛭</span>
            <span className="text-viking-gold text-3xl">᛭</span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-viking-gold"></div>
          </div>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-viking-frost mb-12 max-w-4xl mx-auto leading-relaxed font-['Cinzel',serif] opacity-90">
            Forge your legendary Norse warrior identity from the ancient traditions of the Viking Age
            <span className="block mt-2 text-lg text-viking-bronze opacity-75">(793-1066 CE)</span>
          </p>

          {/* Feature Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="viking-card px-6 py-4 min-w-[180px]">
              <div className="text-3xl font-bold text-viking-rune mb-1 font-['Cinzel',serif]">80+</div>
              <div className="text-viking-frost opacity-80 uppercase tracking-wider text-xs">Authentic Names</div>
            </div>
            <div className="viking-card px-6 py-4 min-w-[180px]">
              <div className="text-3xl font-bold text-viking-rune mb-1 font-['Cinzel',serif]">30+</div>
              <div className="text-viking-frost opacity-80 uppercase tracking-wider text-xs">Historic Epithets</div>
            </div>
            <div className="viking-card px-6 py-4 min-w-[180px]">
              <div className="text-3xl font-bold text-viking-rune mb-1 font-['Cinzel',serif]">793-1066</div>
              <div className="text-viking-frost opacity-80 uppercase tracking-wider text-xs">Viking Age Era</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Interface Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-5xl mx-auto">
          <NameGenerator />
        </div>
      </section>

      {/* About Section - Viking Style */}
      <section className="py-16 px-4 relative border-y border-viking-gold border-opacity-20">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Cinzel',serif] font-bold text-viking-gold mb-4 uppercase tracking-wide">
              The Viking Naming Tradition
            </h2>
            <div className="flex items-center justify-center gap-4 mt-6 opacity-40">
              <div className="h-px w-16 bg-viking-gold"></div>
              <span className="text-viking-gold text-xl">᛭</span>
              <span className="text-viking-gold text-xl">᛭</span>
              <span className="text-viking-gold text-xl">᛭</span>
              <div className="h-px w-16 bg-viking-gold"></div>
            </div>
          </div>

          <p className="text-viking-frost text-xl text-center mb-16 max-w-4xl mx-auto leading-relaxed opacity-90">
            Our generator draws from an extensive database of authentic Old Norse names and epithets used during the Viking Age. Each name is based on historical records, sagas, and archaeological findings, ensuring cultural and historical accuracy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="viking-card text-center group hover:border-viking-gold transition-all duration-300">
              <div className="mb-6">
                <div className="text-6xl font-['Cinzel',serif] font-black text-viking-gold mb-2">80</div>
                <div className="h-1 w-16 bg-viking-gold mx-auto opacity-50"></div>
              </div>
              <h3 className="font-['Cinzel',serif] font-bold text-xl mb-4 text-viking-gold uppercase tracking-wide">
                Authentic Names
              </h3>
              <p className="text-viking-frost opacity-80 leading-relaxed">
                40 male and 40 female Old Norse names with accurate transliterations from historical sources
              </p>
            </div>

            {/* Feature 2 */}
            <div className="viking-card text-center group hover:border-viking-gold transition-all duration-300">
              <div className="mb-6">
                <div className="text-6xl font-['Cinzel',serif] font-black text-viking-gold mb-2">30</div>
                <div className="h-1 w-16 bg-viking-gold mx-auto opacity-50"></div>
              </div>
              <h3 className="font-['Cinzel',serif] font-bold text-xl mb-4 text-viking-gold uppercase tracking-wide">
                Historic Epithets
              </h3>
              <p className="text-viking-frost opacity-80 leading-relaxed">
                Traditional Viking bynames with meanings and historical context from the sagas
              </p>
            </div>

            {/* Feature 3 */}
            <div className="viking-card text-center group hover:border-viking-gold transition-all duration-300">
              <div className="mb-6">
                <div className="text-6xl font-['Cinzel',serif] font-black text-viking-gold mb-2">Free</div>
                <div className="h-1 w-16 bg-viking-gold mx-auto opacity-50"></div>
              </div>
              <h3 className="font-['Cinzel',serif] font-bold text-xl mb-4 text-viking-gold uppercase tracking-wide">
                Always Free
              </h3>
              <p className="text-viking-frost opacity-80 leading-relaxed">
                No registration, no hidden costs. Generate unlimited Viking names forever
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg prose-invert">

          <h2>What is a Viking Name Generator?</h2>
          <p>
            A viking name generator is a specialized tool designed to create authentic Norse names based on historical Viking naming conventions. These generators draw from a rich database of Old Norse given names and epithets that were actually used during the Viking Age, spanning roughly from 793 to 1066 CE. Whether you are seeking a name for gaming, creative writing, role-playing, or simply exploring your Norse heritage, a viking name generator provides instant access to historically accurate Viking identities.
          </p>
          <p>
            The best norse name generator tools combine traditional Viking first names with characteristic epithets or bynames that Vikings earned through their deeds, physical characteristics, or personality traits. This two-part naming structure reflects how Vikings actually identified themselves in Norse society. Unlike modern surnames, Viking names told a story about the individual, describing their achievements, appearance, or lineage.
          </p>
          <p>
            Modern users find viking name generators valuable for numerous applications. Gamers playing Norse-themed video games or tabletop RPGs use these tools to create immersive character identities. Writers crafting historical fiction or fantasy novels set in Viking-inspired worlds rely on name generators to maintain authenticity. Even parents seeking unique baby names with Nordic heritage turn to these generators for inspiration.
          </p>

          <AdSenseSlot slot="1234567890" />

          <h2>How Viking Names Worked in Norse Society</h2>
          <p>
            Viking naming conventions were fundamentally different from modern Western naming systems. In Norse society, individuals typically had a given name followed by either a patronymic or matronymic identifier, plus often an epithet or byname. The given name was carefully chosen by parents and often had meanings related to gods, strength, beauty, or desired characteristics.
          </p>
          <p>
            The patronymic system formed a crucial part of Viking identity. A son would be known as his father's son, using the suffix -son, while a daughter would be her father's daughter, using -dottir. For example, if Erik had a son named Leif, the son would be known as Leif Erikson, literally "Leif, son of Erik."
          </p>
          <p>
            Epithets or bynames represented perhaps the most colorful aspect of Viking naming traditions. These descriptive additions were earned rather than given at birth, reflecting an individual's deeds, physical characteristics, personality, or circumstances. Historical records preserve fascinating examples such as Erik the Red, Ivar the Boneless, and Ragnar Lothbrok.
          </p>

          <h2>Famous Viking Names from History</h2>
          <p>
            Throughout the Viking Age, certain names became legendary, attached to warriors, explorers, and rulers whose deeds echoed through history. Ragnar Lothbrok stands as perhaps the most famous Viking name, immortalized in sagas and modern television. Leif Erikson earned fame as the first European to set foot in North America around 1000 CE, nearly five centuries before Columbus.
          </p>
          <p>
            Harald Bluetooth, a 10th-century Danish king, bore a name meaning "Army Ruler." His name achieved modern immortality when the wireless technology Bluetooth was named in his honor. Ivar the Boneless led the Great Heathen Army that invaded England in 865 CE, though his unusual epithet's meaning remains debated by scholars.
          </p>

          <AdSenseSlot slot="0987654321" />

          <h2>Norse Mythology Names</h2>
          <p>
            Norse mythology profoundly influenced Viking naming practices, with many parents choosing names that invoked gods, goddesses, and mythological concepts. Thor, the thunder god, appears in numerous compound names like Thorstein and Thorvald. Freya, the goddess of love, beauty, and fertility, became a popular name for girls.
          </p>
          <p>
            Understanding these mythological connections adds depth to the experience of using a viking name generator, transforming it from simple entertainment into an educational exploration of Norse culture and belief systems.
          </p>

          <h2>How to Use Viking Names Today</h2>
          <p>
            Modern applications for viking name generators extend far beyond simple curiosity. The gaming industry represents perhaps the largest user base, with players of video games like Assassin's Creed Valhalla, Valheim, and God of War using these tools to create authentic character names.
          </p>
          <p>
            Writers of historical fiction, fantasy novels, and screenplays rely on viking name generators to populate their Norse-inspired worlds with believable characters. The rise of online gaming and social media has created demand for unique, memorable usernames that connect to Norse heritage.
          </p>

          <h2>Frequently Asked Questions</h2>

          <div className="space-y-8 mt-8">
            <div className="viking-card">
              <h3 className="text-viking-gold">What would my viking name be?</h3>
              <p>
                Your Viking name would traditionally consist of a given name with Old Norse origins, followed by an epithet that describes your characteristics, deeds, or appearance. Use our viking name generator above to discover your unique Norse identity based on authentic historical naming conventions.
              </p>
            </div>

            <div className="viking-card">
              <h3 className="text-viking-gold">How accurate is this generator?</h3>
              <p>
                Our viking name generator uses authentic Old Norse names and epithets documented in historical records, sagas, and runestones from the Viking Age. Each element is historically accurate and reflects genuine Norse naming traditions from 793-1066 CE.
              </p>
            </div>

            <div className="viking-card">
              <h3 className="text-viking-gold">What is the difference between Viking and Norse names?</h3>
              <p>
                Viking and Norse names are essentially the same thing. Vikings were Norse people from Scandinavia, and their names came from Old Norse language and culture. The terms are often used interchangeably when discussing historical names from this period.
              </p>
            </div>

            <div className="viking-card">
              <h3 className="text-viking-gold">Were Viking women warriors?</h3>
              <p>
                Yes, though the extent is debated by historians. Historical records mention shield-maidens, and archaeological evidence has identified some female Viking Age burials with weapons. Famous examples from sagas include Lagertha and Freydis Eriksdottir.
              </p>
            </div>
          </div>

          <AdSenseSlot slot="1122334455" />

        </div>
      </section>

      {/* Footer - Viking Style */}
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
                  <a href="/" className="text-viking-frost opacity-80 hover:text-viking-gold hover:opacity-100 transition-all duration-300">
                    Name Generator
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-viking-frost opacity-80 hover:text-viking-gold hover:opacity-100 transition-all duration-300">
                    Blog & Articles
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-viking-frost opacity-80 hover:text-viking-gold hover:opacity-100 transition-all duration-300">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-viking-frost opacity-80 hover:text-viking-gold hover:opacity-100 transition-all duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-viking-frost opacity-80 hover:text-viking-gold hover:opacity-100 transition-all duration-300">
                    Terms of Service
                  </a>
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

    </div>
  );
}
