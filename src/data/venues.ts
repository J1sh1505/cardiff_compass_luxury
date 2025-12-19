// src/data/venues.ts

export interface Venue {
  id: string;
  name: string;
  category: string;
  tagline: string;
  heroImage: string;
  description: {
    dropCap: string;
    lead: string;
    body: string;
  };
  curatorNote: string;
  gallery: string[];
  details: {
    address: string;
    hours: string;
    phone: string;
    website: string;
  };
}

export const venues: Venue[] = [
  
  // ==========================================
  // GASTRONOMY (Fine Dining & Casual Heroes)
  // ==========================================
  {
    id: 'pasture',
    name: 'Pasture',
    category: 'gastronomy',
    tagline: '"Fire, Passion, and Welsh Provenance."',
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76690b67f14?q=80&w=2574&auto=format&fit=crop',
    description: {
      dropCap: 'S',
      lead: 'tepping into Pasture is an exercise in theatre. The scent of charcoal and dry-aged beef greets you before the host does.',
      body: 'The philosophy here is simple but exacting: fire and time. The beef is sourced from hand-picked Welsh farms, aged in-house for a minimum of 35 days, and cooked over glowing charcoal.'
    },
    curatorNote: '"The Short Rib Pie is non-negotiable. It is richness personified."',
    gallery: [
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=1970&auto=format&fit=crop'
    ],
    details: {
      address: '8-10 High Street, Cardiff',
      hours: 'Daily: 12pm - Late',
      phone: '029 2055 5555',
      website: 'pasturerestaurant.com'
    }
  },
  {
    id: 'thomas-simmonds',
    name: 'Thomas by Tom Simmons',
    category: 'gastronomy',
    tagline: '"French Technique, Welsh Soul."',
    heroImage: 'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop',
    description: {
      dropCap: 'P',
      lead: 'ontcanna’s crown jewel. Tom Simmons brings a level of refinement that feels effortless yet precise. It is casual fine dining at its absolute peak.',
      body: 'Simmons respects his Pembrokeshire roots, elevating humble ingredients like cockles and leeks into dishes of startling complexity.'
    },
    curatorNote: '"The Mushroom Tea is legendary. It defies logic in its depth of flavour."',
    gallery: [
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511690656952-34342d5c2895?q=80&w=2070&auto=format&fit=crop'
    ],
    details: {
      address: '3 & 5 Pontcanna St, Cardiff',
      hours: 'Tue-Sat: 12pm - 10pm',
      phone: '029 2116 7800',
      website: 'thomas-pontcanna.co.uk'
    }
  },
  {
    id: 'grazing-shed',
    name: 'The Grazing Shed',
    category: 'gastronomy',
    tagline: '"Super Tidy Burgers."',
    heroImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2598&auto=format&fit=crop',
    description: {
      dropCap: 'V',
      lead: 'oted Wales’ best burger year after year, The Grazing Shed is a local institution that champions the "Super Tidy" philosophy.',
      body: 'This is fast food done right. Everything is locally sourced, the bread is baked daily, and the sauces are made in-house. It is casual, rapid, and consistently delicious.'
    },
    curatorNote: '"The John Wayne burger is a classic. Grab plenty of napkins."',
    gallery: [
      'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2671&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2665&auto=format&fit=crop'
    ],
    details: {
      address: '1 Barrack Ln, Cardiff',
      hours: 'Daily: 11am - 9pm',
      phone: '07594 656345',
      website: 'thegrazingshed.com'
    }
  },
  {
    id: 'asador-44',
    name: 'Asador 44',
    category: 'gastronomy',
    tagline: '"Spanish Heritage, Welsh Fire."',
    heroImage: 'https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=1970&auto=format&fit=crop',
    description: {
      dropCap: 'A',
      lead: 'sador 44 brings the heat of northern Spain to the streets of Cardiff. It is a sanctuary of slow-cooked perfection.',
      body: 'Specializing in "Rubia Gallega" beef and pristine seafood, the grill is the heart of the room. The wine list is an education in Spanish viticulture.'
    },
    curatorNote: '"The slow-roasted suckling pig. Pair it with a bold Rioja."',
    gallery: [
      'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2669&auto=format&fit=crop'
    ],
    details: {
      address: '14-15 Quay St, Cardiff',
      hours: 'Tue-Sat: 12pm - 11pm',
      phone: '029 2002 0039',
      website: 'asador44.co.uk'
    }
  },
  {
    id: 'cardiff-market',
    name: 'Cardiff Market',
    category: 'gastronomy',
    tagline: '"The Culinary Heart of the City."',
    heroImage: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'U',
      lead: 'nder the great glass roof of this Victorian icon lies a bustling maze of food stalls that cater to every taste and budget.',
      body: 'From the legendary fresh Welsh cakes at Bakestones to authentic Thai street food and artisanal coffee, this is where the locals eat. It is loud, vibrant, and smells incredible.'
    },
    curatorNote: '"Join the queue at Ffwrnes for wood-fired pizza slices. It moves fast and is worth the wait."',
    gallery: [
      'https://images.unsplash.com/photo-1519690889869-e705e59f72e1?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555554317-7669d543383d?q=80&w=2574&auto=format&fit=crop'
    ],
    details: {
      address: 'St Mary St, Cardiff',
      hours: 'Mon-Sat: 8am - 5pm',
      phone: 'No Phone',
      website: 'cardiffcouncil.gov.uk'
    }
  },
  {
    id: 'heaneys',
    name: 'Heaneys',
    category: 'gastronomy',
    tagline: '"Unpretentious Tasting Menus."',
    heroImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2557&auto=format&fit=crop',
    description: {
      dropCap: 'T',
      lead: 'ommy Heaney has created a space where the food is serious, but the atmosphere is not. It is social, vibrant, and incredibly inventive.',
      body: 'The tasting menu changes with the micro-seasons. Expect combinations you have never thought of, executed with a confidence that only comes from true mastery.'
    },
    curatorNote: '"Sit at the counter if you can. Watching the kitchen operate is half the fun."',
    gallery: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop'
    ],
    details: {
      address: '6-10 Romilly Cres, Cardiff',
      hours: 'Tue-Sat: 12pm - 10pm',
      phone: '029 2034 1264',
      website: 'heaneyscardiff.co.uk'
    }
  },
  {
    id: 'calabrisella',
    name: 'Calabrisella',
    category: 'gastronomy',
    tagline: '"Authentic Italian Family Dining."',
    heroImage: 'https://images.unsplash.com/photo-1574484284008-86d47dc6b674?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'C',
      lead: 'anton’s favourite Italian. Calabrisella is loud, friendly, and serves portions that challenge even the hungriest diners.',
      body: 'Run by three friends from Calabria, this is not about foams and gels; it is about pizza, pasta, and passion. It is incredibly popular with families and students alike for its value and warmth.'
    },
    curatorNote: '"The \'Calabrisella\' pizza with spicy Nduja sausage is the house signature."',
    gallery: [
      'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2680&auto=format&fit=crop'
    ],
    details: {
      address: '154 Cowbridge Rd E, Canton',
      hours: 'Daily: 9am - 10pm',
      phone: '029 2022 5839',
      website: 'calabrisellacardiff.com'
    }
  },
  {
    id: 'potted-pig',
    name: 'The Potted Pig',
    category: 'gastronomy',
    tagline: '"Subterranean British Feasting."',
    heroImage: 'https://images.unsplash.com/photo-1505253758473-96b701d2cd03?q=80&w=2669&auto=format&fit=crop',
    description: {
      dropCap: 'L',
      lead: 'ocated in a former bank vault beneath the city, The Potted Pig is moody, industrial, and deeply satisfying.',
      body: 'The menu is an ode to the pig, utilising nose-to-tail philosophy. It is hearty, flavour-first British cooking accompanied by one of the finest gin lists in the city.'
    },
    curatorNote: '"The pork belly is iconic. Do not overlook the seasonal game dishes."',
    gallery: [
      'https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=1970&auto=format&fit=crop'
    ],
    details: {
      address: '27 High St, Cardiff',
      hours: 'Tue-Sun: 12pm - Late',
      phone: '029 2022 4817',
      website: 'thepottedpig.com'
    }
  },
  {
    id: 'fowl-and-fury',
    name: 'Fowl and Fury',
    category: 'gastronomy',
    tagline: '"Nashville Heat in Cathays."',
    heroImage: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'O',
      lead: 'bsessive about spice? Fowl and Fury brought authentic Nashville hot chicken to Cardiff and became an instant cult classic.',
      body: 'The menu is short: tenders, wings, or sando. You choose your heat level, from "Country" (Mild) to "Fury" (Reaper peppers). It is casual, messy, and incredibly addictive.'
    },
    curatorNote: '"Start with the \'Hot\' level. The \'Fury\' is for serious chilli-heads only."',
    gallery: [
      'https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?q=80&w=2666&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=2670&auto=format&fit=crop'
    ],
    details: {
      address: '99 Wyeverne Rd, Cathays',
      hours: 'Tue-Sun: 12pm - 9pm',
      phone: 'No Phone',
      website: 'fowlandfury.co.uk'
    }
  },

  // ==========================================
  // NOCTURNAL (Bars, Pubs & Speakeasies)
  // ==========================================
  {
    id: 'lab-22',
    name: 'Lab 22',
    category: 'nocturnal',
    tagline: '"Science, Sorcery, and Mixology."',
    heroImage: 'https://images.unsplash.com/photo-1536935338788-84327507d421?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'H',
      lead: 'idden away on Caroline Street, Lab 22 pushes the boundaries of what a cocktail can be. Regularly voted among the world’s best bars.',
      body: 'The menu is thematic and scientific, exploring states of matter and sensory experiences. The interior is dark, intimate, and sophisticated.'
    },
    curatorNote: '"The tasting menu is a journey through molecular mixology."',
    gallery: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2557&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=1974&auto=format&fit=crop'
    ],
    details: {
      address: '22 Caroline St, Cardiff',
      hours: 'Tue-Sun: 5pm - Late',
      phone: '029 2039 9997',
      website: 'lab22cardiff.com'
    }
  },
  {
    id: 'city-arms',
    name: 'The City Arms',
    category: 'nocturnal',
    tagline: '"The Ale Drinker’s Church."',
    heroImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2574&auto=format&fit=crop',
    description: {
      dropCap: 'S',
      lead: 'ituated directly opposite the Principality Stadium, The City Arms is a Cardiff institution. It is a traditional pub in the best sense of the word.',
      body: 'With a dizzying array of guest ales and craft beers on tap, it is the perfect spot for a pre-match pint. The atmosphere on game days is electric, yet it remains cosy during the week.'
    },
    curatorNote: '"Order a pint of Brains SA for the quintessential Cardiff experience."',
    gallery: [
      'https://images.unsplash.com/photo-1585507567300-47cb23223382?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?q=80&w=2670&auto=format&fit=crop'
    ],
    details: {
      address: '10-12 Quay St, Cardiff',
      hours: 'Daily: 11am - 12am',
      phone: '029 2064 1213',
      website: 'cityarmscardiff.com'
    }
  },
  {
    id: 'dead-canary',
    name: 'The Dead Canary',
    category: 'nocturnal',
    tagline: '"A Secret Steeped in Folklore."',
    heroImage: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1740&auto=format&fit=crop',
    description: {
      dropCap: 'T',
      lead: 'o find The Dead Canary, you must first look for the bird cage. This speakeasy-style bar feels like stepping into a different era.',
      body: 'The cocktail list is inspired by Welsh heroes and folklore. It is a place of velvet, candlelight, and hushed conversations.'
    },
    curatorNote: '"The entrance is obscure, but the welcome is warm."',
    gallery: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2669&auto=format&fit=crop'
    ],
    details: {
      address: 'Barrack Lane, Cardiff',
      hours: 'Wed-Sun: 5pm - Late',
      phone: 'No Phone',
      website: 'thedeadcanary.co.uk'
    }
  },
  {
    id: 'tiny-rebel',
    name: 'Tiny Rebel',
    category: 'nocturnal',
    tagline: '"Craft Beer and Good Times."',
    heroImage: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'B',
      lead: 'orn in Newport, bred for the world. Tiny Rebel’s Cardiff outpost is loud, colourful, and obsessed with fun.',
      body: 'Known for beers like "Cwtch" and "Clwb Tropica," the bar is a haven for craft beer lovers. The food menu matches the vibe—burgers, wings, and loaded fries.'
    },
    curatorNote: '"Try a flight of beers to sample the full range of their wild flavours."',
    gallery: [
      'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505075135834-bfbf6e6628c6?q=80&w=2656&auto=format&fit=crop'
    ],
    details: {
      address: '25 Westgate St, Cardiff',
      hours: 'Daily: 11am - Late',
      phone: '029 2039 9557',
      website: 'tinyrebel.co.uk'
    }
  },
  {
    id: 'pennyroyal',
    name: 'Pennyroyal',
    category: 'nocturnal',
    tagline: '"Bold Flavours, Dark Decor."',
    heroImage: 'https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=1970&auto=format&fit=crop',
    description: {
      dropCap: 'P',
      lead: 'ennyroyal is unashamedly bold. The soundtrack is hip-hop, the lighting is low, and the drinks are serious.',
      body: 'Known for their extensive rum collection and house-made infusions, this is a bar for those who appreciate the craft of bartending without the pretence.'
    },
    curatorNote: '"Their Old Fashioned variations are consistently the best in the city."',
    gallery: [
      'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?q=80&w=1974&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605218427368-35b861216d64?q=80&w=1974&auto=format&fit=crop'
    ],
    details: {
      address: '22 High St, Cardiff',
      hours: 'Tue-Sat: 4pm - Late',
      phone: '029 2034 5220',
      website: 'pennyroyal.co.uk'
    }
  },
  {
    id: 'nighthawks',
    name: 'Nighthawks',
    category: 'nocturnal',
    tagline: '"Wine, Charcuterie, and Good Vibes."',
    heroImage: 'https://images.unsplash.com/photo-1563509930848-123d8c1a8bac?q=80&w=1974&auto=format&fit=crop',
    description: {
      dropCap: 'L',
      lead: 'ocated inside the Castle Arcade, Nighthawks is a wine bar with soul. It feels like a continental escape in the heart of Wales.',
      body: 'The focus is on natural wines, incredible grilled cheese sandwiches, and high-quality charcuterie. The standing-room-only vibe on weekends is electric.'
    },
    curatorNote: '"A glass of Pet Nat and a toastie here is the perfect lunch."',
    gallery: [
      'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop'
    ],
    details: {
      address: '47-49 Castle Arcade, Cardiff',
      hours: 'Tue-Sun: 12pm - Late',
      phone: 'No Phone',
      website: 'nighthawkscardiff.co.uk'
    }
  },

  // ==========================================
  // HERITAGE (History)
  // ==========================================
  {
    id: 'cardiff-castle',
    name: 'Cardiff Castle',
    category: 'heritage',
    tagline: '"Two Thousand Years of History."',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1740&auto=format&fit=crop',
    description: {
      dropCap: 'A',
      lead: 'rchitectural fantasy meets Roman might. Cardiff Castle is unique in its juxtaposition of a Roman fort, a Norman keep, and a Victorian Gothic palace.',
      body: 'The Arab Room is a particular highlight, featuring a ceiling of gold leaf worth millions. Walking the battlements offers a commanding view of the modern city.'
    },
    curatorNote: '"Locals with a Castle Key get in free—ask if you are eligible."',
    gallery: [
      'https://images.unsplash.com/photo-1626102078696-6d6540d9b43d?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590664216212-62e7637d1665?q=80&w=1740&auto=format&fit=crop'
    ],
    details: {
      address: 'Castle St, Cardiff',
      hours: 'Daily: 10am - 4pm',
      phone: '029 2087 8100',
      website: 'cardiffcastle.com'
    }
  },
  {
    id: 'st-fagans',
    name: 'St Fagans',
    category: 'heritage',
    tagline: '"The Soul of the Nation."',
    heroImage: 'https://images.unsplash.com/photo-1460533893735-45cea2212645?q=80&w=2628&auto=format&fit=crop',
    description: {
      dropCap: 'V',
      lead: 'oted Art Fund Museum of the Year, St Fagans is an open-air museum chronicling the lifestyle, culture, and architecture of the Welsh people.',
      body: 'Historic buildings from across Wales have been dismantled and re-erected here stone by stone. It is a hauntingly beautiful walk through time.'
    },
    curatorNote: '"The bread made at the historic bakery is delicious. Buy a loaf early."',
    gallery: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2664&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop'
    ],
    details: {
      address: 'St Fagans, Cardiff',
      hours: 'Daily: 10am - 5pm',
      phone: '0300 111 2333',
      website: 'museum.wales/stfagans'
    }
  },
  {
    id: 'castell-coch',
    name: 'Castell Coch',
    category: 'heritage',
    tagline: '"The Fairytale in the Forest."',
    heroImage: 'https://images.unsplash.com/photo-1544211181-432d52723df7?q=80&w=2574&auto=format&fit=crop',
    description: {
      dropCap: 'R',
      lead: 'ising from the ancient beech woods of Fforest Fawr like something from a Disney movie, Castell Coch is the ultimate Victorian folly.',
      body: 'Designed by William Burges for the Marquess of Bute, it was built not for defense, but for pure aesthetic pleasure. The interior is dazzlingly ornate.'
    },
    curatorNote: '"The Drawing Room is a masterpiece of Victorian design."',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1740&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590664216212-62e7637d1665?q=80&w=1740&auto=format&fit=crop'
    ],
    details: {
      address: 'Tongwynlais, Cardiff',
      hours: 'Daily: 9:30am - 6pm',
      phone: '0300 025 2239',
      website: 'cadw.gov.wales/castell-coch'
    }
  },
  {
    id: 'national-museum',
    name: 'National Museum',
    category: 'heritage',
    tagline: '"Art, Evolution, and Geology."',
    heroImage: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'H',
      lead: 'ousing one of the finest art collections in Europe, the National Museum is a grand civic building in the heart of the civic centre.',
      body: 'The Impressionist collection is world-class, featuring Renoir, Monet, and Rodin, bequeathed by the Davies sisters. The Evolution of Wales gallery is equally impressive.'
    },
    curatorNote: '"The Monet lilies are mesmerizing in person."',
    gallery: [
      'https://images.unsplash.com/photo-1580136608260-4eb11f4b64fe?q=80&w=2676&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2673&auto=format&fit=crop'
    ],
    details: {
      address: 'Cathays Park, Cardiff',
      hours: 'Tue-Sun: 10am - 5pm',
      phone: '0300 111 2333',
      website: 'museum.wales/cardiff'
    }
  },
  {
    id: 'llandaff-cathedral',
    name: 'Llandaff Cathedral',
    category: 'heritage',
    tagline: '"A Site of Worship Since 560AD."',
    heroImage: 'https://images.unsplash.com/photo-1548625361-bd8769f98726?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'S',
      lead: 'itutated in the "city within a city" of Llandaff, this cathedral has survived war, lightning, and neglect to stand as a spiritual icon.',
      body: 'The interior is notable for the concrete Jacob Epstein sculpture "Christ in Majesty," which divides the nave. It is a quiet, contemplative space.'
    },
    curatorNote: '"Walk down through the graveyard to the river Taff afterwards."',
    gallery: [
      'https://images.unsplash.com/photo-1590664216212-62e7637d1665?q=80&w=1740&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2670&auto=format&fit=crop'
    ],
    details: {
      address: 'Cathedral Cl, Cardiff',
      hours: 'Daily: 9am - 6pm',
      phone: '029 2056 4554',
      website: 'llandaffcathedral.org.uk'
    }
  },

  // ==========================================
  // LANDMARKS (Icons)
  // ==========================================
  {
    id: 'principality-stadium',
    name: 'Principality Stadium',
    category: 'landmarks',
    tagline: '"The Cathedral of Welsh Sport."',
    heroImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'D',
      lead: 'ominating the city skyline, this is one of the world’s greatest sporting arenas. With its retractable roof and steep stands, the atmosphere is legendary.',
      body: 'Whether it is a rugby international or a global superstar concert, the noise here is deafening. Situated right in the city centre, it is the beating heart of Cardiff on match days.'
    },
    curatorNote: '"Take the stadium tour to see the dressing rooms and walk down the tunnel."',
    gallery: [
      'https://images.unsplash.com/photo-1533561052604-c3beb6d55760?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522778119026-d647f0565c6d?q=80&w=2670&auto=format&fit=crop'
    ],
    details: {
      address: 'Westgate St, Cardiff',
      hours: 'Tours Daily',
      phone: '0844 249 1999',
      website: 'principalitystadium.wales'
    }
  },
  {
    id: 'wmc',
    name: 'Wales Millennium Centre',
    category: 'landmarks',
    tagline: '"In These Stones Horizons Sing."',
    heroImage: 'https://images.unsplash.com/photo-1566041510394-cf7c8fe21836?q=80&w=1974&auto=format&fit=crop',
    description: {
      dropCap: 'T',
      lead: 'he Armadillo of Cardiff Bay. This masterpiece of slate, steel, and glass is the cultural engine of the nation.',
      body: 'Inside, the theatre hosts everything from West End giants like Hamilton to community events. The foyer is a great public space to sit and soak in the atmosphere.'
    },
    curatorNote: '"Visit at dusk when the letters on the front facade are backlit."',
    gallery: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop'
    ],
    details: {
      address: 'Bute Pl, Cardiff',
      hours: 'Daily',
      phone: '029 2063 6464',
      website: 'wmc.org.uk'
    }
  },
  {
    id: 'senedd',
    name: 'The Senedd',
    category: 'landmarks',
    tagline: '"Transparency in Democracy."',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'D',
      lead: 'esigned by Richard Rogers, the Senedd building is the home of the Welsh Parliament. It is a building defined by openness and light.',
      body: 'The roof moves with the wind, the walls are glass, and the wood is Welsh oak. It represents a modern, forward-looking Wales.'
    },
    curatorNote: '"Have a coffee in the public cafe area. The view over the bay is calming."',
    gallery: [
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2510&auto=format&fit=crop'
    ],
    details: {
      address: 'Pierhead St, Cardiff',
      hours: 'Mon-Fri: 9am - 4:30pm',
      phone: '0300 200 6565',
      website: 'senedd.wales'
    }
  },
  {
    id: 'pierhead',
    name: 'Pierhead Building',
    category: 'landmarks',
    tagline: '"The Red Brick Jewel."',
    heroImage: 'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=2528&auto=format&fit=crop',
    description: {
      dropCap: 'S',
      lead: 'tanding in stark contrast to the modern slate of the WMC, the Pierhead is a terracotta masterpiece from 1897.',
      body: 'Once the HQ of the Bute Dock Company, it is now a museum of Cardiff history. Its clock is affectionately known as "Baby Big Ben".'
    },
    curatorNote: '"The deep red terracotta glows beautifully in the sunset."',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1740&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop'
    ],
    details: {
      address: 'Cardiff Bay, Cardiff',
      hours: 'Daily: 10:30am - 4:30pm',
      phone: '0300 200 6565',
      website: 'senedd.wales/visit/pierhead'
    }
  },
  {
    id: 'norwegian-church',
    name: 'Norwegian Church',
    category: 'landmarks',
    tagline: '"Roald Dahl’s Spiritual Home."',
    heroImage: 'https://images.unsplash.com/photo-1518133860565-d6215886eb29?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'T',
      lead: 'his iconic white wooden church dates back to the industrial revolution when Norwegian sailors docked in Cardiff to transport coal.',
      body: 'It is famous as the place where Roald Dahl was christened. Today it serves as an arts centre and cafe with panoramic views of the bay.'
    },
    curatorNote: '"A perfect spot for afternoon tea on the terrace."',
    gallery: [
      'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=2528&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566041510394-cf7c8fe21836?q=80&w=1974&auto=format&fit=crop'
    ],
    details: {
      address: 'Harbour Dr, Cardiff',
      hours: 'Daily: 10am - 4pm',
      phone: '029 2047 7780',
      website: 'norwegianchurchcardiff.com'
    }
  },

  // ==========================================
  // BOUTIQUES (Shopping - High St to Vintage)
  // ==========================================
  {
    id: 'st-davids',
    name: 'St David’s Dewi Sant',
    category: 'boutiques',
    tagline: '"The Modern Heart of Retail."',
    heroImage: 'https://images.unsplash.com/photo-1555529733-0e670560f7e1?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'T',
      lead: 'he pulse of the city’s retail. St David’s anchors the town centre, offering a comprehensive collection of favourites under one roof.',
      body: 'From flagship high-street stores like John Lewis and Zara to tech giants and beauty halls, this is the premier destination for serious shopping. Spacious, modern, and light-filled.'
    },
    curatorNote: '"Park in the St David’s car park for the easiest access to the city centre."',
    gallery: [
      'https://images.unsplash.com/photo-1519567241046-7f570eee3d9f?q=80&w=2574&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2670&auto=format&fit=crop'
    ],
    details: {
      address: 'Bridge St, Cardiff',
      hours: 'Daily: 9:30am - 8pm',
      phone: '029 2036 7600',
      website: 'stdavidscardiff.com'
    }
  },
  {
    id: 'morgan-quarter',
    name: 'The Morgan Quarter',
    category: 'boutiques',
    tagline: '"Victorian Elegance, Modern Style."',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'T',
      lead: 'he city of Arcades finds its zenith here. The Morgan and Royal Arcades are sweeping curves of glass and iron housing independent spirit.',
      body: 'Home to Spillers Records, bespoke tailors, and artisan jewellers. It is shopping at a slower, more refined pace.'
    },
    curatorNote: '"Look up. The architecture of the arcade roof is stunning."',
    gallery: [
      'https://images.unsplash.com/photo-1472851294608-415105094e3f?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop'
    ],
    details: {
      address: 'The Hayes, Cardiff',
      hours: 'Mon-Sat: 9:30am - 5:30pm',
      phone: '029 2022 6456',
      website: 'morganquarter.co.uk'
    }
  },
  {
    id: 'spillers',
    name: 'Spillers Records',
    category: 'boutiques',
    tagline: '"The Oldest Record Shop in the World."',
    heroImage: 'https://images.unsplash.com/photo-1500057116853-22fda5cd6239?q=80&w=2666&auto=format&fit=crop',
    description: {
      dropCap: 'E',
      lead: 'stablished in 1894, Spillers is a pilgrimage site for music lovers. It has survived wars, format changes, and relocations.',
      body: 'Located now in the Morgan Arcade, it offers a curated selection of vinyl and CDs across all genres. The staff’s knowledge is encyclopedic, and the support for local Welsh bands is unwavering.'
    },
    curatorNote: '"Buy a branded Spillers T-shirt. It is a badge of honour."',
    gallery: [
      'https://images.unsplash.com/photo-1532452119098-a3650b3c46d3?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603048588665-791ca8aea616?q=80&w=2670&auto=format&fit=crop'
    ],
    details: {
      address: 'Morgan Arcade, Cardiff',
      hours: 'Tue-Sat: 10am - 5pm',
      phone: '029 2022 4905',
      website: 'spillersrecords.com'
    }
  },
  {
    id: 'castle-arcade',
    name: 'Castle Arcade',
    category: 'boutiques',
    tagline: '"The Independent Heart."',
    heroImage: 'https://images.unsplash.com/photo-1561584873-10023a887a0c?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'R',
      lead: 'unning opposite the Castle, this arcade is a labyrinth of split levels and hidden galleries.',
      body: 'It is home to the city’s best delis, vintage clothing stores, and tiny coffee shops. The balcony level offers a unique perspective on the hustle below.'
    },
    curatorNote: '"Visit Troutmark Books for second-hand gems."',
    gallery: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop'
    ],
    details: {
      address: 'Castle St, Cardiff',
      hours: 'Daily',
      phone: 'No Phone',
      website: 'cardiffarcades.com'
    }
  },
  {
    id: 'jacobs-market',
    name: 'Jacobs Market',
    category: 'boutiques',
    tagline: '"Antiques and Curiosities."',
    heroImage: 'https://images.unsplash.com/photo-1556740772-1a741367b93e?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'A',
      lead: 'red-brick warehouse by the train tracks that houses three floors of vintage treasures.',
      body: 'From military memorabilia to mid-century furniture and comic books, Jacobs is a treasure hunter’s paradise. The roof terrace offers a gritty, industrial view of the city.'
    },
    curatorNote: '"The basement furniture section often has incredible mid-century finds."',
    gallery: [
      'https://images.unsplash.com/photo-1531326264903-51828f73f91f?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=2528&auto=format&fit=crop'
    ],
    details: {
      address: 'West Canal Wharf, Cardiff',
      hours: 'Thu-Sat: 9:30am - 5pm',
      phone: '029 2039 0939',
      website: 'jacobsmarket.co.uk'
    }
  },
  {
    id: 'high-street-arcade',
    name: 'High Street Arcade',
    category: 'boutiques',
    tagline: '"Fashion and Lifestyle."',
    heroImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'C',
      lead: 'onnecting the high street to the markets, this arcade has a more fashion-forward focus.',
      body: 'Home to Hobos Vintage and several independent streetwear boutiques, it attracts a younger, style-conscious crowd. The architecture remains strictly Victorian.'
    },
    curatorNote: '"Barker Tea House is a lovely pit-stop."',
    gallery: [
      'https://images.unsplash.com/photo-1561584873-10023a887a0c?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1472851294608-415105094e3f?q=80&w=2670&auto=format&fit=crop'
    ],
    details: {
      address: 'High St, Cardiff',
      hours: 'Daily',
      phone: 'No Phone',
      website: 'cardiffarcades.com'
    }
  },

  // ==========================================
  // SANCTUARIES (Nature)
  // ==========================================
  {
    id: 'bute-park',
    name: 'Bute Park',
    category: 'sanctuaries',
    tagline: '"The Green Heart of the City."',
    heroImage: 'https://images.unsplash.com/photo-1448375240586-dfd8f3793306?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'O',
      lead: 'nce the private pleasure grounds of the Marquess of Bute, this vast park is now open to everyone. It stretches along the River Taff.',
      body: 'Perfect for a lunchtime run, a family picnic, or just a quiet walk. It connects the castle directly to the river and feels miles away from the city centre.'
    },
    curatorNote: '"The Education Centre often has free activities for kids."',
    gallery: [
      'https://images.unsplash.com/photo-1519331379826-f96a80190521?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=2678&auto=format&fit=crop'
    ],
    details: {
      address: 'North Rd, Cardiff',
      hours: 'Dawn to Dusk',
      phone: 'No Phone',
      website: 'bute-park.com'
    }
  },
  {
    id: 'insole-court',
    name: 'Insole Court',
    category: 'sanctuaries',
    tagline: '"A Victorian Gothic Revival Hidden Gem."',
    heroImage: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop',
    description: {
      dropCap: 'T',
      lead: 'ucked away in Llandaff, Insole Court is a mansion saved by the community. It offers a glimpse into the life of the coal barons.',
      body: 'The gardens are meticulously maintained, and the Potting Shed Cafe serves locally sourced cakes. It feels like a secret garden known only to locals.'
    },
    curatorNote: '"The reading room inside the mansion is open to the public."',
    gallery: [
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2664&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460533893735-45cea2212645?q=80&w=2628&auto=format&fit=crop'
    ],
    details: {
      address: 'Fairwater Rd, Llandaff',
      hours: 'Daily: 10am - 5pm',
      phone: '029 2116 7920',
      website: 'insolecourt.org'
    }
  },
  {
    id: 'roath-park',
    name: 'Roath Park Lake',
    category: 'sanctuaries',
    tagline: '"Edwardian Elegance for Everyone."',
    heroImage: 'https://images.unsplash.com/photo-1548625361-bd8769f98726?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'A',
      lead: 'classic Victorian park featuring a large lake and a famous lighthouse memorial to Captain Scott.',
      body: 'Hugely popular with families. You can feed the ducks (seeds only!), play in the large playground, or walk around the lake. The conservatory is a tropical escape for a small fee.'
    },
    curatorNote: '"Rent a row boat in the summer for the full experience."',
    gallery: [
      'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=2678&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1448375240586-dfd8f3793306?q=80&w=2670&auto=format&fit=crop'
    ],
    details: {
      address: 'Lake Rd West, Cardiff',
      hours: 'Dawn to Dusk',
      phone: 'No Phone',
      website: 'outdoorcardiff.com'
    }
  },
  {
    id: 'dyffryn-gardens',
    name: 'Dyffryn Gardens',
    category: 'sanctuaries',
    tagline: '"A Masterpiece of Garden Design."',
    heroImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2664&auto=format&fit=crop',
    description: {
      dropCap: 'L',
      lead: 'ocated just outside the city, Dyffryn is a Grade I listed garden of exceptional beauty.',
      body: 'Featuring intimate garden rooms, an arboretum, and a glasshouse, it is a place of endless discovery. The Pompeian Garden is a surprising highlight.'
    },
    curatorNote: '"Visit in Wisteria season (May) for the most spectacular display."',
    gallery: [
      'https://images.unsplash.com/photo-1460533893735-45cea2212645?q=80&w=2628&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519331379826-f96a80190521?q=80&w=2070&auto=format&fit=crop'
    ],
    details: {
      address: 'St Nicholas, Cardiff',
      hours: 'Daily: 10am - 6pm',
      phone: '029 2059 3328',
      website: 'nationaltrust.org.uk/dyffryn-gardens'
    }
  },

  // ==========================================
  // EXPERIENCES & AGENDA
  // ==========================================
  {
    id: 'ciww',
    name: 'CIWW',
    category: 'experiences',
    tagline: '"Adrenaline on Demand."',
    heroImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop',
    description: {
      dropCap: 'F',
      lead: 'or those who prefer their luxury with a pulse, Cardiff International White Water offers olympic-standard rapids.',
      body: 'It is a clean, controlled environment suitable for beginners and pros. Beyond rafting, they offer indoor surfing and paddleboarding on the calmer waters.'
    },
    curatorNote: '"Great for groups and team building."',
    gallery: [
      'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=2669&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540910419868-474947cebacb?q=80&w=2674&auto=format&fit=crop'
    ],
    details: {
      address: 'Watkiss Way, Cardiff Bay',
      hours: 'Variable',
      phone: '029 2082 9970',
      website: 'ciww.com'
    }
  },
  {
    id: 'techniquest',
    name: 'Techniquest',
    category: 'experiences',
    tagline: '"Science for the Curious."',
    heroImage: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop',
    description: {
      dropCap: 'R',
      lead: 'ecently redeveloped, Techniquest is a science discovery centre on the bay. Perfect for curious minds of all ages.',
      body: 'Hands-on exhibits explore physics, space, and biology. It makes science accessible and fun. The planetarium shows are a highlight.'
    },
    curatorNote: '"Check the schedule for their adult-only cocktail nights."',
    gallery: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop'
    ],
    details: {
      address: 'Stuart St, Cardiff',
      hours: 'Daily: 10am - 5pm',
      phone: '029 2047 5475',
      website: 'techniquest.org'
    }
  },
  {
    id: 'hensol-distillery',
    name: 'Hensol Castle Distillery',
    category: 'experiences',
    tagline: '"Gin Making in a Castle."',
    heroImage: 'https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=1970&auto=format&fit=crop',
    description: {
      dropCap: 'L',
      lead: 'ocated in the cellars of a 17th-century castle, this is a gin experience with serious pedigree.',
      body: 'Distill your own bottle of gin using a range of botanicals under the guidance of a master distiller. It is educational, boozy, and set in stunning surroundings.'
    },
    curatorNote: '"You get to keep your custom bottle. Name it wisely."',
    gallery: [
      'https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544025162-d76690b67f14?q=80&w=2574&auto=format&fit=crop'
    ],
    details: {
      address: 'Hensol, Pontyclun',
      hours: 'Bookings Only',
      phone: '01443 667999',
      website: 'hensolcastledistillery.com'
    }
  },
  {
    id: 'taff-trail',
    name: 'The Taff Trail',
    category: 'experiences',
    tagline: '"From Bay to Brecon."',
    heroImage: 'https://images.unsplash.com/photo-1448375240586-dfd8f3793306?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'F',
      lead: 'ollowing the river Taff, this cycle and walking route connects the industrial heritage of the valleys with the modern bay.',
      body: 'Rent a bike and ride from the Castle up to Castell Coch. It is a flat, scenic route that passes weirs, parks, and industrial relics.'
    },
    curatorNote: '"Stop at the Blackweir bridge for a photo."',
    gallery: [
      'https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=2678&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519331379826-f96a80190521?q=80&w=2070&auto=format&fit=crop'
    ],
    details: {
      address: 'Cardiff',
      hours: 'Always Open',
      phone: 'No Phone',
      website: 'outdoorcardiff.com'
    }
  },
  {
    id: 'arcade-vaults',
    name: 'The Arcade Vaults',
    category: 'experiences',
    tagline: '"Retro Gaming Haven."',
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'H',
      lead: 'idden in the High Street Arcade, this is a community hub for video game culture.',
      body: 'Play classic consoles, arcade machines, and modern indie games. It is affordable, inclusive, and incredibly nostalgic for anyone who grew up with a controller in their hand.'
    },
    curatorNote: '"The Mario Kart tournaments are fierce but friendly."',
    gallery: [
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2671&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=2670&auto=format&fit=crop'
    ],
    details: {
      address: 'High Street Arcade, Cardiff',
      hours: 'Tue-Sun: 12pm - Late',
      phone: 'No Phone',
      website: 'thearcadevaults.org.uk'
    }
  },
  {
    id: 'sherman-theatre',
    name: 'Sherman Theatre',
    category: 'agenda',
    tagline: '"New Welsh Writing."',
    heroImage: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1740&auto=format&fit=crop',
    description: {
      dropCap: 'T',
      lead: 'he Sherman is the home of new storytelling in Cardiff. It focuses on developing Welsh talent and producing work that is relevant and gripping.',
      body: 'Unlike the touring houses, the work here feels intimate and urgent. The cafe bar is also a great spot for pre-show drinks.'
    },
    curatorNote: '"Look out for their Christmas productions; they are consistently magical."',
    gallery: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2670&auto=format&fit=crop'
    ],
    details: {
      address: 'Senghennydd Rd, Cardiff',
      hours: 'Show Dependent',
      phone: '029 2064 6900',
      website: 'shermantheatre.co.uk'
    }
  },
  {
    id: 'chapter-arts',
    name: 'Chapter Arts',
    category: 'agenda',
    tagline: '"Cinema, Art, and Cafe Bar."',
    heroImage: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'C',
      lead: 'anton’s cultural hub. Chapter is a multi-artform venue that screens independent films, hosts experimental theatre, and gallery exhibitions.',
      body: 'The large cafe bar is the beating heart of the local creative community. It is the place to see the films that the multiplexes ignore.'
    },
    curatorNote: '"The cinema seats are arguably the most comfortable in the city."',
    gallery: [
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517604931442-71053e6e788c?q=80&w=2666&auto=format&fit=crop'
    ],
    details: {
      address: 'Market Rd, Cardiff',
      hours: 'Daily: 8:30am - 11pm',
      phone: '029 2030 4400',
      website: 'chapter.org'
    }
  },
  {
    id: 'rwcmd',
    name: 'RWCMD',
    category: 'agenda',
    tagline: '"The Royal Welsh College."',
    heroImage: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2670&auto=format&fit=crop',
    description: {
      dropCap: 'S',
      lead: 'ituated on the edge of Bute Park, the college hosts regular lunchtime concerts, jazz evenings, and student productions of incredibly high standard.',
      body: 'The Dora Stoutzker Hall is a world-class recital space. It is a fantastic way to see the stars of tomorrow in a stunning setting.'
    },
    curatorNote: '"The Friday jazz club in the foyer is a local favourite."',
    gallery: [
      'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2664&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1465847899078-b29edd5a7107?q=80&w=2670&auto=format&fit=crop'
    ],
    details: {
      address: 'North Rd, Cardiff',
      hours: 'Term Time',
      phone: '029 2039 1391',
      website: 'rwcmd.ac.uk'
    }
  }
];