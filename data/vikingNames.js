const vikingData = {
  male: {
    names: [
      { name: "Bjorn", meaning: "Bear", norse: "Bjǫrn" },
      { name: "Erik", meaning: "Eternal ruler", norse: "Eiríkr" },
      { name: "Ragnar", meaning: "Army of judgment", norse: "Ragnarr" },
      { name: "Leif", meaning: "Heir, descendant", norse: "Leifr" },
      { name: "Ivar", meaning: "Bow warrior", norse: "Ívarr" },
      { name: "Harald", meaning: "Army ruler", norse: "Haraldr" },
      { name: "Olaf", meaning: "Ancestor's relic", norse: "Óláfr" },
      { name: "Sven", meaning: "Young warrior", norse: "Sveinn" },
      { name: "Thorstein", meaning: "Thor's stone", norse: "Þorsteinn" },
      { name: "Gunnar", meaning: "Bold warrior", norse: "Gunnarr" },
      { name: "Magnus", meaning: "Great", norse: "Magnús" },
      { name: "Halfdan", meaning: "Half Danish", norse: "Halfdan" },
      { name: "Knut", meaning: "Knot", norse: "Knútr" },
      { name: "Sigurd", meaning: "Victory guard", norse: "Sigurðr" },
      { name: "Rollo", meaning: "Famous wolf", norse: "Hrólfr" },
      { name: "Torsten", meaning: "Thor's stone", norse: "Þórsteinn" },
      { name: "Ulf", meaning: "Wolf", norse: "Úlfr" },
      { name: "Vidar", meaning: "Wide warrior", norse: "Víðarr" },
      { name: "Haakon", meaning: "High son", norse: "Hákon" },
      { name: "Asger", meaning: "Spear of the gods", norse: "Ásgeir" },
      { name: "Einar", meaning: "One warrior", norse: "Einarr" },
      { name: "Hrafn", meaning: "Raven", norse: "Hrafn" },
      { name: "Snorri", meaning: "Attack", norse: "Snorri" },
      { name: "Brandr", meaning: "Fire, sword", norse: "Brandr" },
      { name: "Arne", meaning: "Eagle", norse: "Ǫrn" },
      { name: "Sigmund", meaning: "Victory protection", norse: "Sigmundr" },
      { name: "Thorvald", meaning: "Thor's power", norse: "Þórvaldr" },
      { name: "Birger", meaning: "Keeper, protector", norse: "Birgir" },
      { name: "Trygve", meaning: "Trustworthy", norse: "Tryggvi" },
      { name: "Frode", meaning: "Wise", norse: "Fróði" },
      { name: "Orm", meaning: "Serpent", norse: "Ormr" },
      { name: "Karl", meaning: "Free man", norse: "Karl" },
      { name: "Balder", meaning: "Prince, brave", norse: "Baldr" },
      { name: "Asbjorn", meaning: "Divine bear", norse: "Ásbjǫrn" },
      { name: "Toke", meaning: "Thor's weapon", norse: "Tóki" },
      { name: "Eskil", meaning: "Divine cauldron", norse: "Ásketill" },
      { name: "Finn", meaning: "From Finland", norse: "Finnr" },
      { name: "Njal", meaning: "Champion", norse: "Njáll" },
      { name: "Steinar", meaning: "Stone warrior", norse: "Steinarr" },
      { name: "Bjarni", meaning: "Bear-like", norse: "Bjarni" }
    ],
    epithets: [
      {
        name: "the Boneless",
        meaning: "Flexible warrior",
        context: "Given to warriors known for their agility and strategic thinking rather than brute strength."
      },
      {
        name: "Ironside",
        meaning: "Iron-flanked",
        context: "Bestowed upon warriors whose sides seemed impervious to weapons in battle."
      },
      {
        name: "the Red",
        meaning: "Red-haired",
        context: "A common epithet for Vikings with distinctive red hair or ruddy complexions."
      },
      {
        name: "the Bold",
        meaning: "Courageous one",
        context: "Awarded to warriors who displayed exceptional bravery in combat and exploration."
      },
      {
        name: "the Fierce",
        meaning: "Savage warrior",
        context: "Given to those known for their ferocity and intensity in battle."
      },
      {
        name: "Bloodaxe",
        meaning: "Blood-stained axe",
        context: "Reserved for legendary warriors whose axes were perpetually stained with enemy blood."
      },
      {
        name: "the Seafarer",
        meaning: "Master of seas",
        context: "Honored title for Vikings who excelled in navigation and sea voyages."
      },
      {
        name: "the Fearless",
        meaning: "Without fear",
        context: "Bestowed on warriors who faced death without hesitation or concern."
      },
      {
        name: "the Great",
        meaning: "Mighty leader",
        context: "Reserved for kings and jarls who achieved legendary status through conquest."
      },
      {
        name: "Bluetooth",
        meaning: "Dark chieftain",
        context: "Historical epithet possibly referring to a dead tooth or dark complexion."
      },
      {
        name: "the Crow",
        meaning: "Raven warrior",
        context: "Given to warriors associated with Odin's ravens, symbols of wisdom and battle."
      },
      {
        name: "the Strong",
        meaning: "Powerful one",
        context: "Awarded to those who displayed exceptional physical strength in combat."
      },
      {
        name: "the Wanderer",
        meaning: "Far traveler",
        context: "Honored title for Vikings who journeyed to distant lands."
      },
      {
        name: "the Silent",
        meaning: "Quiet strategist",
        context: "Given to warriors known for their stealth and strategic silence."
      },
      {
        name: "the Black",
        meaning: "Dark one",
        context: "Epithet for Vikings with dark hair or those who wore black in battle."
      }
    ]
  },
  female: {
    names: [
      { name: "Freya", meaning: "Noble lady", norse: "Freyja" },
      { name: "Astrid", meaning: "Divine strength", norse: "Ástríðr" },
      { name: "Sigrid", meaning: "Victory wisdom", norse: "Sigríðr" },
      { name: "Ingrid", meaning: "Beautiful goddess", norse: "Ingríðr" },
      { name: "Helga", meaning: "Holy", norse: "Helga" },
      { name: "Brynhild", meaning: "Armored battle maiden", norse: "Brynhildr" },
      { name: "Gudrun", meaning: "God's secret lore", norse: "Guðrún" },
      { name: "Hilda", meaning: "Battle", norse: "Hildr" },
      { name: "Ragnhild", meaning: "Battle counselor", norse: "Ragnhildr" },
      { name: "Thora", meaning: "Thunder goddess", norse: "Þóra" },
      { name: "Yrsa", meaning: "She-bear", norse: "Yrsa" },
      { name: "Sif", meaning: "Bride, wife", norse: "Sif" },
      { name: "Signe", meaning: "New victory", norse: "Signý" },
      { name: "Revna", meaning: "Raven", norse: "Hrafn" },
      { name: "Liv", meaning: "Life", norse: "Hlíf" },
      { name: "Gunnhild", meaning: "Battle war", norse: "Gunnhildr" },
      { name: "Asa", meaning: "Goddess", norse: "Ása" },
      { name: "Thyra", meaning: "Thor's battle", norse: "Þýri" },
      { name: "Bodil", meaning: "Compensation battle", norse: "Bóthildr" },
      { name: "Else", meaning: "God's promise", norse: "Ælísif" },
      { name: "Frida", meaning: "Peace", norse: "Fríða" },
      { name: "Solveig", meaning: "Strength of the sun", norse: "Sólveig" },
      { name: "Dagny", meaning: "New day", norse: "Dagný" },
      { name: "Gerda", meaning: "Garden protector", norse: "Gerðr" },
      { name: "Audhild", meaning: "Wealth battle", norse: "Auðhildr" },
      { name: "Tove", meaning: "Beautiful Thor", norse: "Tófa" },
      { name: "Bergthora", meaning: "Mountain Thor", norse: "Bergþóra" },
      { name: "Jorunn", meaning: "Chief love", norse: "Jórunn" },
      { name: "Aud", meaning: "Wealth", norse: "Auðr" },
      { name: "Runa", meaning: "Secret lore", norse: "Rúna" },
      { name: "Svanhild", meaning: "Swan battle", norse: "Svanhildr" },
      { name: "Thurid", meaning: "Thor's beauty", norse: "Þuríðr" },
      { name: "Ingibjorg", meaning: "Protected by Ing", norse: "Ingibjǫrg" },
      { name: "Gro", meaning: "To grow", norse: "Gróa" },
      { name: "Bera", meaning: "Bear", norse: "Bera" },
      { name: "Freydis", meaning: "Lady goddess", norse: "Freydís" },
      { name: "Vigdis", meaning: "War goddess", norse: "Vigdís" },
      { name: "Jorunn", meaning: "Horse lover", norse: "Jórunn" },
      { name: "Unn", meaning: "To love", norse: "Unnr" },
      { name: "Gyda", meaning: "God's gift", norse: "Gyða" }
    ],
    epithets: [
      {
        name: "the Shieldmaiden",
        meaning: "Female warrior",
        context: "Honored title for women who fought alongside men in Viking battles."
      },
      {
        name: "the Wise",
        meaning: "Sage woman",
        context: "Given to women known for their counsel and knowledge of ancient lore."
      },
      {
        name: "the Fair",
        meaning: "Beautiful one",
        context: "Bestowed upon women of exceptional beauty and grace."
      },
      {
        name: "the Brave",
        meaning: "Courageous woman",
        context: "Awarded to women who displayed exceptional courage in defense of their people."
      },
      {
        name: "the Deep-Minded",
        meaning: "Thoughtful strategist",
        context: "Given to women known for their intelligence and strategic thinking."
      },
      {
        name: "the Red",
        meaning: "Red-haired",
        context: "Common epithet for women with distinctive red hair."
      },
      {
        name: "the Proud",
        meaning: "Noble bearing",
        context: "Bestowed on women of high status who carried themselves with dignity."
      },
      {
        name: "the Blessed",
        meaning: "Favored by gods",
        context: "Given to women believed to have divine protection or favor."
      },
      {
        name: "Silkenhair",
        meaning: "Beautiful hair",
        context: "Epithet for women renowned for their long, beautiful hair."
      },
      {
        name: "the Swift",
        meaning: "Quick one",
        context: "Awarded to women known for their speed and agility."
      },
      {
        name: "the Healer",
        meaning: "Medicine woman",
        context: "Given to women skilled in herbs and healing arts."
      },
      {
        name: "the Seer",
        meaning: "Prophet woman",
        context: "Honored title for women with abilities to see the future."
      },
      {
        name: "the Strong",
        meaning: "Powerful woman",
        context: "Bestowed on women who displayed exceptional physical or mental strength."
      },
      {
        name: "the Golden",
        meaning: "Blonde beauty",
        context: "Given to women with golden or blonde hair."
      },
      {
        name: "the Fierce",
        meaning: "Intense warrior",
        context: "Awarded to female warriors known for their ferocity in battle."
      }
    ]
  }
};

export default vikingData;
