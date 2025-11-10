'use client';

import { useState } from 'react';
import vikingData from '@/data/vikingNames';

export default function NameGenerator() {
  const [gender, setGender] = useState('male');
  const [generatedName, setGeneratedName] = useState(null);

  const generateVikingName = () => {
    const { names, epithets } = vikingData[gender];

    const firstName = names[Math.floor(Math.random() * names.length)];
    const epithet = epithets[Math.floor(Math.random() * epithets.length)];

    setGeneratedName({
      fullName: `${firstName.name} ${epithet.name}`,
      oldNorse: `${firstName.norse} ${epithet.name}`,
      meaning: `${firstName.meaning} - ${epithet.meaning}`,
      context: epithet.context
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
            <h2 className="text-5xl md:text-6xl font-['Cinzel',serif] font-black text-viking-rune mb-4 tracking-wide">
              {generatedName.fullName}
            </h2>
            <p className="text-2xl md:text-3xl text-viking-bronze italic opacity-90 font-['Cinzel',serif]">
              {generatedName.oldNorse}
            </p>
          </div>

          {/* Name Details */}
          <div className="space-y-6">
            {/* Meaning Section */}
            <div className="viking-card bg-opacity-50">
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-1 flex-shrink-0">📜</span>
                <div>
                  <h3 className="text-lg font-['Cinzel',serif] font-bold text-viking-gold mb-2 uppercase tracking-wide">
                    Meaning
                  </h3>
                  <p className="text-viking-frost leading-relaxed">
                    {generatedName.meaning}
                  </p>
                </div>
              </div>
            </div>

            {/* Historical Context Section */}
            <div className="viking-card bg-opacity-50">
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-1 flex-shrink-0">⚔️</span>
                <div>
                  <h3 className="text-lg font-['Cinzel',serif] font-bold text-viking-gold mb-2 uppercase tracking-wide">
                    Historical Context
                  </h3>
                  <p className="text-viking-frost leading-relaxed">
                    {generatedName.context}
                  </p>
                </div>
              </div>
            </div>
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
