import type { CampsiteConfig } from "../types";

const IMG = "/campsites/campingburgau";

const campingburgau: CampsiteConfig = {
  name: "Camping Schloss Burgau",
  shortName: "Schloss Burgau",
  slug: "campingburgau",
  ort: "Burgau",
  region: "Steiermark",
  brandKind: "Camping",
  regionLong: "Burgau · Oststeiermark · Österreich",

  heroVariant: "center",

  claim: "Familiäres Camping neben Schloss und Schlossbad",
  claimEmphasis: "Schloss und Schlossbad",
  emailDetail: "eure Lage direkt neben dem Wasserschloss Burgau",
  intro:
    "Direkt im Ortszentrum von Burgau, gleich neben dem Wasserschloss, findest du einen kleinen, familiären Campingplatz — mit Park, Spielplatz und dem Schlossbad, das für dich als Gast gratis ist.",

  statement: {
    text: "Bei uns stehst du mitten in Burgau — das Schloss im Blick, das Schlossbad gleich um die Ecke.",
    emphasis: "mitten in Burgau",
  },

  pillars: [
    {
      title: "Gratis ins Schlossbad",
      text: "Das bekannte Schlossbad liegt in unmittelbarer Nähe — für dich als Campinggast ist der Eintritt frei.",
      image: { src: `${IMG}/gallery-2625692d3c.webp`, alt: "Naturbadesee Schlossbad Burgau mit Blick auf das Wasserschloss" },
    },
    {
      title: "Neben dem Wasserschloss",
      text: "Der Campingplatz liegt direkt im Ortszentrum, gleich neben dem historischen Wasserschloss Burgau.",
      image: { src: `${IMG}/gallery-c051c7a2fa.webp`, alt: "Wasserschloss Burgau direkt neben dem Campingplatz" },
    },
    {
      title: "Familiär & überschaubar",
      text: "Ein kleiner, familiär geführter Platz mit kurzen Wegen — mitten im Grünen und trotzdem zentral im Ort.",
      image: { src: `${IMG}/gallery-12a9b9d7a7.webp`, alt: "Sonniger Blick über die Stellplätze und Terrasse am Campingplatz Schloss Burgau" },
    },
  ],

  usps: [
    "Schlossbad gratis",
    "Neben dem Wasserschloss",
    "Hunde frei",
    "Kinder bis 5 frei",
    "Rad- & Wanderwege",
    "Zentral im Ort",
  ],

  trust: {
    heading: "Klein, zentral, mittendrin in Burgau",
    headingEmphasis: "mittendrin",
    intro:
      "Kein großer Ferienpark, sondern ein familiärer Platz mitten im Raddorf Burgau: das Schloss vor der Tür, das Schlossbad gratis und Rad- wie Wanderwege direkt ab dem Stellplatz.",
  },

  awards: [],

  saison: { von: "März", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-e3579dee5c.webp`, alt: "Schlossbad Burgau mit grünem Tretboot und Kirchturm im Spiegel des Sees" },
  },

  camping: {
    heading: "Alles fußläufig in Burgau",
    intro:
      "Der Platz liegt mittendrin: ein Park mit Tennisplatz und Kinderspielplatz gleich nebenan, das Schlossbad ein paar Schritte weiter und das Ortszentrum direkt vor der Tür.",
    features: [
      {
        title: "Park & Tennisplatz",
        text: "In unmittelbarer Nähe liegen ein Park und ein Tennisplatz — viel Grün und Platz zum Durchatmen, gleich neben dem Stellplatz.",
        image: { src: `${IMG}/gallery-6861b50203.webp`, alt: "Parkanlage mit blühenden Sträuchern in Burgau" },
      },
      {
        title: "Kinderspielplatz",
        text: "Ein Kinderspielplatz direkt nebenan sorgt dafür, dass die Kleinen beschäftigt sind, während du den Tag in Ruhe genießt.",
        image: { src: `${IMG}/gallery-c84f54d0c6.webp`, alt: "Bunter Kinderspielplatz beim Campingplatz Burgau" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Burgau",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A2 Abfahrt Bad Waltersdorf, dann über Sebersdorf, Limbach und Neudau nach Burgau — der Platz liegt mitten im Ortszentrum.",
      },
      {
        title: "Mit der Bahn",
        text: "Die Oststeiermark ist über die Bahnhöfe Fürstenfeld und Hartberg erreichbar — die letzte Etappe nach Burgau am besten mit Auto oder Taxi.",
      },
    ],
  },

  galerie: {
    heading: "Ein Streifzug durch Burgau",
    headingEmphasis: "Burgau",
    intro: "Schloss, Schlossbad und das Raddorf Burgau — ein paar Eindrücke aus der Umgebung des Platzes.",
    tag: "März bis Oktober",
    images: [
      { src: `${IMG}/gallery-7dc96ecb2e.webp`, alt: "Kunstvolles Fahrrad-Objekt im Raddorf Burgau" },
      { src: `${IMG}/gallery-d09ce581f7.webp`, alt: "Sonniger Blick durch ein Sonnen-Tor auf die Stellplätze des Campingplatzes" },
      { src: `${IMG}/gallery-e86103444d.webp`, alt: "Tasse mit Camping-Schloss-Burgau-Logo vor einem Wohnmobil am Stellplatz" },
      { src: `${IMG}/gallery-562831ae34.webp`, alt: "Lageplan Camping Schloss Burgau mit Stell- und Zeltplätzen sowie Schlossbad" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz in Burgau",
    headingEmphasis: "in Burgau",
    intro: "Sag uns Zeitraum und Personen — Manuela Lewisch meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise pro Nacht für 2 Erwachsene inkl. Stellplatz — zzgl. Ortstaxe € 2 pro Person, Strom € 1 pro kWh. Kinder 6–14 € 5, bis 5 Jahre und Hund frei.",
    highlight: {
      title: "Schlossbad inklusive",
      text: "Als Campinggast ist der Eintritt ins Schlossbad gratis.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz (Wohnwagen/Wohnmobil)", perNight: 28.9, perExtraGuest: 9.5 },
      { id: "zelt", label: "Zeltplatz", perNight: 27, perExtraGuest: 9.5 },
    ],
  },

  kontakt: {
    tel: "+43 664 2833524",
    telHref: "tel:+436642833524",
    mail: "office@campingburgau.at",
    adresse: "Schloßweg 296 · 8291 Burgau · Steiermark",
    coords: { lat: 47.1462959, lng: 16.0986199 },
  },

  languages: ["DE"],

  nav: [
    { label: "Der Platz", href: "#camping" },
    { label: "Umgebung", href: "#galerie" },
    { label: "Preise", href: "#booking" },
    { label: "Anreise", href: "#anreise" },
  ],
};

export default campingburgau;
