# Viking Name Generator

Generate authentic Viking names based on historical Norse traditions.

## Live Site

- **Production**: https://vikingnameforge.online
- **Development**: http://localhost:3000

## Features

- Generate authentic Viking names with Old Norse transliterations
- Separate name pools for male and female names
- Historical context for each generated epithet
- 2000+ words of SEO-optimized content
- FAQ section with Schema.org markup
- Mobile-responsive design
- AdSense integration ready
- Google Analytics ready

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: JavaScript
- **Deployment**: Vercel

## Project Structure

```
viking-name-generator/
├── app/
│   ├── layout.js          # Root layout with SEO metadata & Schema markup
│   ├── page.js            # Main landing page
│   └── globals.css        # Global styles
├── components/
│   ├── NameGenerator.js   # Viking name generation logic
│   └── AdSenseSlot.js     # AdSense ad component
├── data/
│   └── vikingNames.js     # Viking names and epithets database
├── public/
│   └── ...                # Static assets
├── CLAUDE.md              # Project guidelines and strategy
└── DEPLOYMENT.md          # Detailed deployment instructions
```

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Data Structure

The Viking names database contains:
- 20 male names with Old Norse transliterations
- 20 female names with Old Norse transliterations
- 15 male epithets with historical context
- 15 female epithets with historical context

All names are historically accurate and based on documented Viking Age naming conventions.

## SEO Strategy

### Primary Keyword
- **viking name generator** (KD: 8, Volume: 4400/month)

### Secondary Keywords
- norse name generator
- viking names
- nordic name generator
- viking warrior name generator

### Content Sections
1. What is a Viking Name Generator? (350 words)
2. How Viking Names Worked in Norse Society (450 words)
3. Famous Viking Names from History (400 words)
4. Norse Mythology Names (300 words)
5. How to Use Viking Names Today (400 words)
6. FAQ Section (4 questions with Schema markup)

**Total**: ~2500 words of original SEO content

## AdSense Integration

The site is prepared for AdSense with:
- 3 ad slots (top, middle, bottom)
- Responsive ad units
- AdSenseSlot component ready to use

**To activate**:
1. Get AdSense approval
2. Update publisher ID in `components/AdSenseSlot.js`
3. Update ad slot IDs in `app/page.js`
4. Add AdSense script to `app/layout.js`

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## Schema.org Markup

Implemented schemas:
- **SoftwareApplication**: Describes the generator tool
- **FAQPage**: Structured data for FAQ section

Both schemas are properly formatted for Google rich snippets.

## Performance Targets

- Lighthouse Performance: >90
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- SEO Score: 100/100
- Accessibility: >90

## Revenue Expectations

Based on keyword difficulty and search volume:
- Month 1: $0-5
- Month 2: $5-20
- Month 3+: $20-50/month

Target: 2000-3000 monthly visitors for stable $30-50/month passive income.

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment instructions including:
- Git and GitHub setup
- Vercel deployment
- Custom domain configuration
- Google Search Console setup
- Google Analytics integration
- AdSense integration

## Post-Launch Monitoring

### Week 1
- Check Search Console for crawl errors
- Verify Analytics tracking
- Test on mobile devices and multiple browsers

### Month 1-2
- Monitor indexing status
- Track search impressions
- Check keyword rankings

### Month 3+
- Stable traffic monitoring
- AdSense revenue tracking
- Consider related tool development if successful

## License

This is a personal project for SEO and AdSense revenue generation.

## Strategy Notes

This is part of a portfolio approach to building 10-20 simple tool sites. The goal is NOT to create one perfect site, but to launch quickly and see what works. Some will succeed, most will fail. This site targets an easy keyword (KD=8) and should rank within 2-3 months if the strategy is sound.

**Time investment**: 2-3 hours total (development + deployment)
**Expected outcome**: $20-50/month passive income if ranking succeeds

For detailed strategy, see [CLAUDE.md](CLAUDE.md).
