'use client';

import { useState } from 'react';
import vikingData from '@/data/vikingNames';

export default function NameGenerator() {
  const [gender, setGender] = useState('male');
  const [generatedName, setGeneratedName] = useState(null);
  const [showAboutNames, setShowAboutNames] = useState(false);

  const generateVikingName = () => {
    const { names, epithets } = vikingData[gender];

    const firstName = names[Math.floor(Math.random() * names.length)];
    const epithet = epithets[Math.floor(Math.random() * epithets.length)];

    setGeneratedName({
      oldNorse: `${firstName.norse} ${epithet.name}`,
      modernName: firstName.name,
      nameMeaning: firstName.meaning,
      epithetName: epithet.name,
      epithetMeaning: epithet.meaning,
      epithetContext: epithet.context
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      {/* Gender Selection - Viking Style */}
      <div className="mb-10">
        <h3 className="text-center text-viking-gold text-lg mb-6 font-['Cinzel',serif] tracking-wider uppercase">
          Choose Your Path
        </h3>

        <div className="flex gap-6 justify-center">
          {/* Male Option */}
          <label className="viking-card cursor-pointer flex-1 max-w-xs hover:border-viking-gold transition-all duration-300 group">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
              className="sr-only"
            />
            <div className={`text-center p-6 transition-all duration-300 ${
              gender === 'male'
                ? 'border-2 border-viking-gold shadow-[0_0_30px_rgba(212,175,55,0.3)]'
                : 'border-2 border-transparent'
            }`}>
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                ⚔️
              </div>
              <div className={`text-xl font-['Cinzel',serif] font-bold tracking-wider ${
                gender === 'male' ? 'text-viking-gold' : 'text-viking-frost'
              }`}>
                WARRIOR
              </div>
              <div className="text-sm text-viking-frost opacity-60 mt-2">Male Names</div>
            </div>
          </label>

          {/* Female Option */}
          <label className="viking-card cursor-pointer flex-1 max-w-xs hover:border-viking-gold transition-all duration-300 group">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
              className="sr-only"
            />
            <div className={`text-center p-6 transition-all duration-300 ${
              gender === 'female'
                ? 'border-2 border-viking-gold shadow-[0_0_30px_rgba(212,175,55,0.3)]'
                : 'border-2 border-transparent'
            }`}>
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                🛡️
              </div>
              <div className={`text-xl font-['Cinzel',serif] font-bold tracking-wider ${
                gender === 'female' ? 'text-viking-gold' : 'text-viking-frost'
              }`}>
                SHIELD-MAIDEN
              </div>
              <div className="text-sm text-viking-frost opacity-60 mt-2">Female Names</div>
            </div>
          </label>
        </div>
      </div>

      {/* Runic Divider */}
      <div className="flex items-center justify-center gap-4 my-10 opacity-40">
        <div className="h-px w-20 bg-gradient-to-r from-transparent to-viking-gold"></div>
        <span className="text-viking-gold text-2xl">᛭</span>
        <span className="text-viking-gold text-2xl">᛭</span>
        <span className="text-viking-gold text-2xl">᛭</span>
        <div className="h-px w-20 bg-gradient-to-l from-transparent to-viking-gold"></div>
      </div>

      {/* Generate Button - Epic Viking Style */}
      <div className="mb-14 text-center">
        <button
          onClick={generateVikingName}
          className="btn-viking relative group overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">⚡</span>
            <span>Forge My Name</span>
            <span className="text-2xl group-hover:-rotate-12 transition-transform duration-300">⚡</span>
          </span>
        </button>

        {/* Sub text */}
        {!generatedName && (
          <p className="mt-4 text-viking-frost opacity-60 text-sm font-['Cinzel',serif]">
            Summon your Norse identity from the ancient sagas
          </p>
        )}
      </div>

      {/* Generated Name Display - Epic Result Card */}
      {generatedName && (
        <div className="name-result-viking relative">
          {/* Runic corner decorations */}
          <div className="absolute -top-3 -left-3 text-viking-gold text-3xl opacity-50">᛭</div>
          <div className="absolute -top-3 -right-3 text-viking-gold text-3xl opacity-50">᛭</div>
          <div className="absolute -bottom-3 -left-3 text-viking-gold text-3xl opacity-50">᛭</div>
          <div className="absolute -bottom-3 -right-3 text-viking-gold text-3xl opacity-50">᛭</div>

          {/* Header Banner */}
          <div className="mb-8 pb-6 border-b border-viking-gold border-opacity-30">
            <p className="text-viking-gold text-sm tracking-[0.3em] uppercase mb-2 opacity-75 font-['Cinzel',serif]">
              Your Viking Identity
            </p>
            <h2 className="text-5xl md:text-6xl font-['Cinzel',serif] font-black text-viking-rune mb-3 tracking-wide">
              {generatedName.oldNorse}
            </h2>
            <p className="text-lg text-viking-frost opacity-70 mb-6">
              Modern form: <span className="text-viking-bronze font-['Cinzel',serif]">{generatedName.modernName} {generatedName.epithetName}</span>
            </p>

            {/* Name Meaning - Combined Display */}
            <div className="text-viking-frost space-y-3">
              <p className="text-xl leading-relaxed">
                <span className="text-viking-gold font-['Cinzel',serif]">"{generatedName.nameMeaning}"</span> - from Old Norse origins
              </p>
              <p className="text-lg leading-relaxed border-l-2 border-viking-gold pl-4 py-2 bg-viking-wood bg-opacity-30">
                <span className="text-viking-gold font-['Cinzel',serif] uppercase tracking-wide">{generatedName.epithetName}</span>
                <br />
                <span className="text-base opacity-90">{generatedName.epithetMeaning} - {generatedName.epithetContext}</span>
              </p>
            </div>
          </div>

          {/* About These Names - Collapsible Info */}
          <div className="mb-6">
            <button
              onClick={() => setShowAboutNames(!showAboutNames)}
              className="w-full text-left px-4 py-3 bg-viking-wood bg-opacity-30 border border-viking-gold border-opacity-20 hover:border-opacity-40 transition-all duration-300 flex items-center justify-between group"
            >
              <span className="text-viking-gold font-['Cinzel',serif] text-sm tracking-wide uppercase flex items-center gap-2">
                <span className="text-lg">ℹ️</span>
                About These Names
              </span>
              <span className={`text-viking-gold transform transition-transform duration-300 ${showAboutNames ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            {showAboutNames && (
              <div className="px-4 py-4 bg-viking-stone bg-opacity-40 border-x border-b border-viking-gold border-opacity-20 text-viking-frost text-sm leading-relaxed space-y-2">
                <p>
                  <strong className="text-viking-gold">Old Norse forms</strong> (like {generatedName.oldNorse.split(' ')[0]}) are historically accurate for the Viking Age (793-1066 CE) and include authentic Old Norse spellings with special characters.
                </p>
                <p>
                  <strong className="text-viking-gold">Modern forms</strong> (like {generatedName.modernName}) are simplified adaptations used in contemporary contexts, games, and fiction. They're easier to pronounce but less historically authentic.
                </p>
                <p className="text-viking-bronze italic">
                  Tip: Use Old Norse forms for historical accuracy; use modern forms for ease of pronunciation.
                </p>
              </div>
            )}
          </div>

          {/* Runic Divider */}
          <div className="flex items-center justify-center gap-3 my-8 opacity-30">
            <div className="h-px w-16 bg-viking-gold"></div>
            <span className="text-viking-gold">᛭</span>
            <span className="text-viking-gold">᛭</span>
            <span className="text-viking-gold">᛭</span>
            <div className="h-px w-16 bg-viking-gold"></div>
          </div>

          {/* Generate Another Button */}
          <div className="text-center">
            <button
              onClick={generateVikingName}
              className="btn-viking text-base py-3 px-8"
            >
              <span className="flex items-center gap-2">
                <span>⚡</span>
                <span>Forge Another Name</span>
                <span>⚡</span>
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Trust Signals - Viking Style */}
      {!generatedName && (
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-8 text-viking-frost opacity-60 text-sm font-['Cinzel',serif]">
            <div className="flex items-center gap-2">
              <span className="text-viking-gold">✓</span>
              <span>Free Forever</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-viking-gold">✓</span>
              <span>Historically Accurate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-viking-gold">✓</span>
              <span>Instant Results</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
