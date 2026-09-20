/* ==========================================================================
   INDIAN ART THROUGH TIME - INTERACTIVE DIGITAL MUSEUM ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. HISTORICAL ERAS DATA
     ------------------------------------------------------------------------ */
  const ERAS = [
    {
      id: 'indus-valley',
      number: 'ERA 01',
      name: 'Indus Valley Civilization',
      dateRange: 'c. 2600 – 1900 BCE',
      intro: 'The Bronze Age urban civilization of the Indus River basin developed remarkable metallurgy, steatite seal carving, brick architecture, and stylized human/animal figurines characterized by naturalistic poise.',
      characteristics: 'Grid urban planning, micro-steatite seals, lost-wax bronze casting, unglazed terracotta craft',
      materialsTechniques: 'Bronze, Steatite (soapstone), Terracotta, Shell, Intaglio carving, Lost-wax casting',
      majorRegions: 'Mohenjo-daro, Harappa, Dholavira, Lothal (Gujarat & Indus Basin)'
    },
    {
      id: 'mauryan-buddhist',
      number: 'ERA 02',
      name: 'Mauryan & Early Buddhist Art',
      dateRange: 'c. 3rd Century BCE – 1st Century CE',
      intro: 'Under Emperor Ashoka and subsequent regional dynasties, stone architecture and monumental sculpture emerged. Ashokan pillars with lustrous mirror polish and Buddhist Stupa gateways (*Toranas*) set narrative art traditions.',
      characteristics: 'Glossy "Mauryan polish", aniconic Buddhist symbolism, continuous visual narrative reliefs',
      materialsTechniques: 'Chunar Sandstone, Monolithic rock carving, Masonry stupa domes',
      majorRegions: 'Sarnath, Sanchi, Bharhut, Bodh Gaya (Gangetic Plains & Central India)'
    },
    {
      id: 'gupta-classical',
      number: 'ERA 03',
      name: 'Gupta / Classical Art',
      dateRange: 'c. 4th – 6th Century CE',
      intro: 'Often hailed as the Classical Golden Age of Indian art, this era synthesized spiritual serenity with ideal human proportions. It established iconic visual canons for Buddhist and Hindu iconography across Asia.',
      characteristics: 'Smooth body drapery, spiritual introspective gazes, ornate halo designs, mural fresco painting',
      materialsTechniques: 'Chunar Sandstone, Mineral pigment wall frescos (Tempera), Red sandstone relief',
      majorRegions: 'Sarnath, Ajanta, Deogarh, Mathura, Udayagiri'
    },
    {
      id: 'early-medieval-south',
      number: 'ERA 04',
      name: 'Early Medieval & South Indian Art',
      dateRange: 'c. 6th – 10th Century CE',
      intro: 'A period of monumental rock-cut cave temples and early structural stone masonry. In South India, Pallava kings carved monolithic shrines and open-air bas-reliefs in granite, while Rashtrakutas excavated solid mountain cliffs.',
      characteristics: 'Monolithic rock excavation, Dravidian tiered towers (*Vimana*), high open-air reliefs',
      materialsTechniques: 'Granite boulders, Basalt cliff rock, Monolithic top-down carving',
      majorRegions: 'Mahabalipuram (Tamil Nadu), Ellora, Badami, Kanchipuram'
    },
    {
      id: 'medieval-temple',
      number: 'ERA 05',
      name: 'Medieval / Temple & Regional Art',
      dateRange: 'c. 10th – 14th Century CE',
      intro: 'The golden age of grand structural temple architecture. Imperial Cholas in Tamil Nadu raised towering granite Vimanas and perfected Panchaloha lost-wax bronzes, while Chandelas built intricately carved Nagara spires.',
      characteristics: 'Mortarless stone masonry, lost-wax bronze casting, soaring Nagara/Dravidian spires',
      materialsTechniques: 'Granite, Sandstone, Panchaloha Bronze alloy, Dry interlocking stone joints',
      majorRegions: 'Thanjavur (Tamil Nadu), Khajuraho, Konark, Chidambaram'
    },
    {
      id: 'mughal-regional',
      number: 'ERA 06',
      name: 'Mughal & Regional Painting',
      dateRange: 'c. 16th – 19th Century CE',
      intro: 'A dramatic flourish of court miniature painting and refined architecture. Royal workshops under Akbar synthesized Persian, Indian, and European influences, while Rajput and Thanjavur schools created vivid devotional icons.',
      characteristics: 'Miniature precision, naturalistic portraiture, gold foil embossing (*gesso*), epic manuscripts',
      materialsTechniques: 'Opaque gouache, Gold leaf, Wasli paper, Jackwood panels, Marble architecture',
      majorRegions: 'Agra, Delhi, Udaipur (Mewar), Thanjavur (Tamil Nadu), Kangra'
    },
    {
      id: 'colonial-modern',
      number: 'ERA 07',
      name: 'Colonial / 19th-Century Art',
      dateRange: 'c. 18th – 19th Century CE',
      intro: 'Cross-cultural encounters during British rule birthed Company School observational watercolors and Western academic realism. Pioneer Raja Ravi Varma brought oil canvas techniques and mass oleographs to Indian epic stories.',
      characteristics: 'European academic realism, linear perspective, mass oleographic printing, hybrid watercolor',
      materialsTechniques: 'Oil on canvas, Lithographic printing, Transparent watercolors on European paper',
      majorRegions: 'Travancore, Tanjore, Mumbai, Kolkata, Madras'
    },
    {
      id: 'modern-contemporary',
      number: 'ERA 08',
      name: 'Modern & Contemporary Indian Art',
      dateRange: 'c. 20th Century – Present',
      intro: 'Modernist painters broke away from Western academic canons to rediscover indigenous folk art traditions, Ajanta color schemes, and village scroll painting, forging a distinct national modern visual language.',
      characteristics: 'Folk revivalism, bold calligraphic outlines, earthy natural pigments, emotional expressionism',
      materialsTechniques: 'Tempera on cloth/panel, Natural mineral ochres, Oil & acrylic on canvas',
      majorRegions: 'Bengal (Kolkata), Shimla, Mumbai, Santiniketan'
    }
  ];

  /* ------------------------------------------------------------------------
     2. COMPLETE 22 EXHIBITS DATABASE
     ------------------------------------------------------------------------ */
  const EXHIBITS = [
    {
      id: 'dancing-girl',
      name: 'Dancing Girl of Mohenjo-daro',
      periodId: 'indus-valley',
      periodName: 'Indus Valley Civilization',
      dateRange: 'c. 2300 – 1750 BCE',
      region: 'West',
      location: 'National Museum, New Delhi',
      dynasty: 'Harappan / Indus Valley Civilization',
      artForm: 'Sculpture',
      material: 'Bronze',
      technique: 'Lost-wax metal casting (Cire perdue)',
      theme: 'Human Form',
      isTamilNadu: false,
      isMahabharata: false,
      image: 'assets/dancing_girl.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Dancing_Girl_of_Mohenjo-daro.jpg',
      historicalContext: 'Excavated by Ernest Mackay at Mohenjo-daro in 1926. Demonstrates that South Asian metal artisans had mastered sophisticated lost-wax bronze casting over 4,000 years ago.',
      description: 'A 10.5 cm bronze figurine of a young woman standing with her hand resting on her right hip, her head tilted back, and her left arm completely stacked with bangles.',
      features: [
        'Naturalistic poise exhibiting a relaxed, confident standing stance (*tribhanga* prelude)',
        'Left arm covered in 24 stacked bangles from wrist to shoulder',
        'Hair coiled into a neat stylish bun at the back of the head'
      ],
      significance: 'Reveals advanced Bronze Age metallurgy and proves that Harappan urban society valued music, dance, adornment, and female artistic representation.',
      lookCloser: [
        'Stacked bangles covering the entire left arm while the right arm wears only two.',
        'Hand resting on the hip in a casual, spirited gesture of youthful confidence.',
        'Cowrie shell necklace draped around the neck.'
      ],
      didYouKnow: 'This tiny 10.5 cm statue was created using lost-wax casting—the exact same technique used thousands of years later for imperial Chola bronzes in South India!',
      source: 'National Museum, New Delhi (Accession No. HR 5721)'
    },
    {
      id: 'indus-seal',
      name: 'Pashupati Seal (Indus Steatite Seal)',
      periodId: 'indus-valley',
      periodName: 'Indus Valley Civilization',
      dateRange: 'c. 2500 – 1900 BCE',
      region: 'West',
      location: 'National Museum, New Delhi',
      dynasty: 'Harappan Civilization',
      artForm: 'Decorative Art',
      material: 'Steatite (Soapstone)',
      technique: 'Intaglio micro-carving and high-heat glazing',
      theme: 'Religion',
      isTamilNadu: false,
      isMahabharata: false,
      image: 'assets/pashupati_seal.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Pashupati_seal.jpg',
      historicalContext: 'Found during excavations at Mohenjo-daro. Carved in reverse so pressing it into soft wet clay produced raised security stamps for long-distance trade packages.',
      description: 'A square steatite seal depicting a seated horned deity in a yogic posture surrounded by wild animals including an elephant, tiger, rhinoceros, and water buffalo.',
      features: [
        'Horned headdress topped with a central vertical fan-like motif',
        'Seated posture resembling *Mulabandhasana* yogic position',
        'Four wild animals symmetrically framing the divine figure'
      ],
      significance: 'Key historical evidence of early proto-Shiva (Pashupati, Lord of Animals) iconographic origins and standardized Harappan trade administration.',
      lookCloser: [
        'Horned crown with a central fan-shaped ornament.',
        'Seven undeciphered Indus script characters carved across the top edge.',
        'Two ibex or deer carved beneath the low platform throne.'
      ],
      didYouKnow: 'Over 2,000 steatite seals have been discovered across Harappan sites, and some have been found as far as Mesopotamia (modern Iraq), proving Bronze Age maritime trade!',
      source: 'Archaeological Survey of India / National Museum, New Delhi'
    },
    {
      id: 'priest-king',
      name: 'Priest-King Figure',
      periodId: 'indus-valley',
      periodName: 'Indus Valley Civilization',
      dateRange: 'c. 2200 – 1900 BCE',
      region: 'West',
      location: 'National Museum of Pakistan, Karachi',
      dynasty: 'Harappan Civilization',
      artForm: 'Sculpture',
      material: 'Steatite (Soapstone)',
      technique: 'Low-relief stone carving with incised patterns',
      theme: 'Power',
      isTamilNadu: false,
      isMahabharata: false,
      image: 'assets/priest_king.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Mohenjo-daro_Priesterk%C3%B6nig_crop.jpg',
      historicalContext: 'Discovered by Sir John Marshall at Mohenjo-daro in 1927. Represents formal civic or religious portraiture from the Mature Harappan period.',
      description: 'A 17.5 cm stone bust of a bearded man wearing a trefoil-patterned robe draped over his left shoulder, an engraved headband fillet, and armlets.',
      features: [
        'Half-closed meditative eyes once inlaid with shell or stone',
        'Neatly trimmed beard with shaved upper lip',
        'Trefoil motifs on the robe that originally held red pigment inlays'
      ],
      significance: 'Provides rare visual insight into Harappan elite leadership attire, personal grooming, and ritual symbolism.',
      lookCloser: [
        'Trefoil (three-leaf) carved patterns across the draped shawl.',
        'Circular forehead fillet with a central disc ornament.',
        'Carefully combed hair gathered into a fillet headband at the back.'
      ],
      didYouKnow: 'The trefoil pattern on his robe is also found in contemporary Sumerian and Akkadian sculptures in Mesopotamia, hinting at shared Bronze Age sacred motifs!',
      source: 'Archaeological Survey of India Archives'
    },
    {
      id: 'lion-capital',
      name: 'Lion Capital of Ashoka (Sarnath)',
      periodId: 'mauryan-buddhist',
      periodName: 'Mauryan & Early Buddhist Art',
      dateRange: 'c. 250 BCE',
      region: 'North',
      location: 'Sarnath Museum, Uttar Pradesh',
      dynasty: 'Mauryan Dynasty (Emperor Ashoka)',
      artForm: 'Sculpture',
      material: 'Chunar Sandstone',
      technique: 'Monolithic stone carving with glass-like "Mauryan polish"',
      theme: 'Power',
      isTamilNadu: false,
      isMahabharata: false,
      image: 'assets/lion_capital.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Sarnath_Lion_Capital_of_Ashoka.jpg',
      historicalContext: 'Commissioned by Emperor Ashoka atop a sandstone pillar at Sarnath to mark the site where Buddha delivered his First Sermon. Adopted in 1950 as India\'s official National Emblem.',
      description: 'Four back-to-back Asiatic lions standing upon a circular abacus decorated with four wheels of law (*dharmachakras*) and four animals, resting on an inverted bell lotus.',
      features: [
        'Miraculous mirror polish preserved intact for over 2,250 years',
        'Anatomical muscular realism of four roaring lions facing cardinal directions',
        'Abacus frieze featuring galloping horse, roaring lion, noble bull, and elephant'
      ],
      significance: 'Supreme monumental statement of imperial peace, Buddhist law (*dhamma*), and foundational origin of modern Indian national iconography.',
      lookCloser: [
        'Four back-to-back lions proclaiming Dhamma to the four quarters of the world.',
        '24-spoked wheel (*Ashoka Chakra*) carved on the abacus between the animals.',
        'Inverted bell-shaped lotus base showing Persian-Achaemenid stone influence fused with Indian spirit.'
      ],
      didYouKnow: 'The 24-spoked wheel carved at the base of this Mauryan capital is the exact wheel featured in blue on the center of the modern Indian National Flag!',
      source: 'Archaeological Survey of India / Sarnath Museum'
    },
    {
      id: 'sanchi-stupa',
      name: 'Great Stupa at Sanchi (Toranas)',
      periodId: 'mauryan-buddhist',
      periodName: 'Mauryan & Early Buddhist Art',
      dateRange: 'c. 3rd C. BCE – 1st C. CE',
      region: 'Central',
      location: 'Sanchi, Madhya Pradesh',
      dynasty: 'Mauryan to Satavahana Period',
      artForm: 'Architecture',
      material: 'Sandstone & Brick',
      technique: 'Masonry dome surrounded by stone gateways carved like wood',
      theme: 'Storytelling',
      isTamilNadu: false,
      isMahabharata: false,
      image: 'assets/sanchi_stupa.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Sanchi_Stupa_from_Eastern_Gate%2C_Madhya_Pradesh.jpg',
      historicalContext: 'Founded by Ashoka in 3rd century BCE and expanded under Satavahana rulers with four magnificent stone gateways (*Toranas*) covered in narrative stone reliefs.',
      description: 'A colossal stone dome encasing Buddhist relics, accessed through four intricately carved stone Torana gateways aligned to cardinal directions.',
      features: [
        'Continuous narrative reliefs depicting Buddha\'s past lives (*Jataka Tales*)',
        'Bracket figures of *Yakshis* (tree spirits) leaning gracefully from beams',
        'Aniconic symbols for Buddha (footprints, umbrella, empty throne, Bodhi tree)'
      ],
      significance: 'The oldest stone structure in India and an undisputed masterpiece of early Buddhist narrative relief architecture.',
      lookCloser: [
        'Yakshi figure clinging to a flowering Sal tree beam on the gateway bracket.',
        'Vessantara Jataka narrative carved in continuous horizontal friezes.',
        'Empty throne under a Bodhi tree representing the invisible presence of the Buddha.'
      ],
      didYouKnow: 'Donor inscriptions on the gateways record that the delicate stone reliefs were paid for and carved by Vidisha\'s guild of ivory carvers, explaining the wood-like carving detail!',
      source: 'UNESCO World Heritage / ASI Sanchi Site'
    },
    {
      id: 'sarnath-buddha',
      name: 'Seated Buddha in Dharmachakra Mudra',
      periodId: 'gupta-classical',
      periodName: 'Gupta / Classical Art',
      dateRange: 'c. 5th Century CE',
      region: 'North',
      location: 'Sarnath Museum, Uttar Pradesh',
      dynasty: 'Gupta Dynasty (Sarnath School)',
      artForm: 'Sculpture',
      material: 'Chunar Sandstone',
      technique: 'High relief carving with smooth body drapery',
      theme: 'Religion',
      isTamilNadu: false,
      isMahabharata: false,
      image: 'assets/sarnath_buddha.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Buddha_in_Sarnath_Museum_%28Dhammajak_Mutra%29.jpg',
      historicalContext: 'Sculpted at Sarnath during the peak of Gupta artistic golden age. Represents the ideal classical canon of Buddhist spiritual meditation.',
      description: 'The Buddha sits in lotus posture holding his hands near his chest in the gesture of turning the wheel of law, backed by a richly carved halo.',
      features: [
        'Translucent "clinging" drapery completely free of heavy fold lines',
        'Introspective downcast eyes expressing serene inner absorption',
        'Intricately carved circular halo with floral scrolls and flying celestial figures'
      ],
      significance: 'Established the supreme aesthetic standard for sacred Asian sculpture, directly inspiring Buddha images across Southeast Asia and China.',
      lookCloser: [
        'Hands held in *Dharmachakra Pravartana Mudra* (Turning the Wheel of Law).',
        'Base predella depicting five disciples, a woman, child, and the wheel flanked by two deer.',
        'Twin flying *Gandharvas* (celestial musicians) carved at the top of the halo.'
      ],
      didYouKnow: 'Unlike earlier Gandhara Buddha statues which copied heavy Roman toga folds, Gupta Sarnath sculptors created skin-tight robes that emphasize spiritual inner warmth!',
      source: 'Sarnath Museum / Archaeological Survey of India'
    },
    {
      id: 'ajanta-padmapani',
      name: 'Ajanta Cave Mural: Bodhisattva Padmapani',
      periodId: 'gupta-classical',
      periodName: 'Gupta / Classical Art',
      dateRange: 'c. 5th Century CE',
      region: 'West',
      location: 'Cave 1, Ajanta Caves, Maharashtra',
      dynasty: 'Vakataka Dynasty (Harishena reign)',
      artForm: 'Painting',
      material: 'Mineral Pigments on Clay Plaster',
      technique: 'Tempera wall painting (*tempera-fresco*) on rock surface',
      theme: 'Human Form',
      isTamilNadu: false,
      isMahabharata: false,
      image: 'assets/ajanta_padmapani.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Padmapani_Ajanta.jpg',
      historicalContext: 'Painted inside Cave 1 under Vakataka royal patronage. Ajanta preserves India\'s grandest surviving classical wall painting tradition.',
      description: 'A majestic mural of Bodhisattva Padmapani standing gracefully holding a blue lotus flower, adorned in a jewel crown and flanked by attendants.',
      features: [
        'Fluid calligraphic outlines and delicate 3D facial shading (*kshayavriddhi*)',
        'Gentle downward gaze expressing infinite compassion (*karuna*)',
        'Rich pigment palette of lapis lazuli blue, malachite green, and yellow ochre'
      ],
      significance: 'Masterpiece of ancient Asian painting, blending divine spiritual grace with opulent Vakataka courtly aesthetics.',
      lookCloser: [
        'Delicate blue lotus flower (*padma*) held softly in his right hand.',
        'Jewel-encrusted crown featuring sapphire and pearl strings.',
        'Subtle shading along the eyelids and nose creating a 3D sculptural impression on flat wall.'
      ],
      didYouKnow: 'The luminous blue pigment used for Padmapani\'s lotus was made from crushed Lapis Lazuli imported across thousands of miles from Badakhshan in modern Afghanistan!',
      source: 'Archaeological Survey of India / UNESCO World Heritage'
    },
    {
      id: 'deogarh-vishnu',
      name: 'Deogarh Relief: Vishnu Anantasayana & Pandavas',
      periodId: 'gupta-classical',
      periodName: 'Gupta / Classical Art',
      dateRange: 'c. 6th Century CE',
      region: 'Central',
      location: 'Deogarh, Lalitpur, Uttar Pradesh',
      dynasty: 'Gupta Dynasty',
      artForm: 'Sculpture',
      material: 'Red Sandstone',
      technique: 'High relief sandstone carved masonry panel',
      theme: 'Storytelling',
      isTamilNadu: false,
      isMahabharata: true,
      mbKey: 'pandavas',
      image: 'assets/deogarh_vishnu.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Vishnu_Anantasayana_Deogarh.jpg',
      historicalContext: 'Carved on the exterior wall of Dashavatara Temple at Deogarh—one of North India\'s earliest surviving structural stone temples.',
      description: 'Vishnu reclines on the serpent Shesha in the cosmic ocean. Lakshmi massages his feet. Above sit Brahma, Indra, and Shiva; below stand the five Pandava heroes and Draupadi.',
      features: [
        'Dynamic multi-tiered cosmic composition',
        'Five Pandava brothers carved in the bottom register preparing for epic battle',
        'Classic Gupta facial poise and rhythmic body contours'
      ],
      significance: 'Pivotal early stone carving directly linking Gupta classical iconography with Mahabharata epic narratives.',
      lookCloser: [
        'Bottom panel showing the 5 Pandava brothers (Arjuna with bow, Bhima with mace) and Draupadi.',
        'Goddess Lakshmi affectionately massaging Vishnu\'s foot.',
        'Four-headed Lord Brahma seated upon a lotus emerging from Vishnu\'s navel.'
      ],
      didYouKnow: 'This 6th-century panel is among the oldest securely dated stone carvings in India depicting all five Pandava brothers together in a unified composition!',
      source: 'Archaeological Survey of India / Deogarh Site'
    },
    {
      id: 'pancha-rathas',
      name: 'Pancha Rathas (Five Monolithic Temples)',
      periodId: 'early-medieval-south',
      periodName: 'Early Medieval & South Indian Art',
      dateRange: 'c. 7th Century CE',
      region: 'South',
      location: 'Mahabalipuram, Tamil Nadu',
      dynasty: 'Pallava Dynasty (Narasimhavarman I)',
      artForm: 'Architecture',
      material: 'Monolithic Granite Rock',
      technique: 'Cut-in rock architecture carved top-down from single boulders',
      theme: 'Power',
      isTamilNadu: true,
      isMahabharata: true,
      mbKey: 'pandavas',
      image: 'assets/pancha_rathas.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Pancha_Rathas_Mahabalipuram.jpg',
      historicalContext: 'Carved under Pallava King Narasimhavarman I (Mamalla). Each monolithic rock shrine replicates a distinct South Indian Dravidian architectural roof style.',
      description: 'Five monolithic stone temples carved to resemble processional wooden chariots (*rathas*), named by tradition after the Pandavas and Draupadi, accompanied by monolithic animal statues.',
      features: [
        'Monolithic top-down quarrying technique executed directly on granite outcrops',
        'Architectural prototypes for stepped Dravidian *Vimanas* and barrel-vault roofs',
        'Life-sized monolithic statues of an Elephant, Lion, and Nandi Bull'
      ],
      significance: 'Foundation stone of Tamil Nadu Dravidian temple architecture, demonstrating the transition from timber/cave shrines to built stone monuments.',
      lookCloser: [
        'Draupadi Ratha carved in the shape of a traditional thatched village hut.',
        'Bhima Ratha featuring a barrel-vaulted roof (precursor to Gopuram towers).',
        'Life-sized monolithic granite elephant beside Nakula-Sahadeva Ratha.'
      ],
      didYouKnow: 'Although local tradition named them after the Mahabharata\'s Pandavas and Draupadi, these shrines were actually experimental 7th-century architectural models for Pallava master builders!',
      source: 'UNESCO World Heritage / ASI Mahabalipuram'
    },
    {
      id: 'arjunas-penance',
      name: 'Arjuna\'s Penance / Descent of the Ganges',
      periodId: 'early-medieval-south',
      periodName: 'Early Medieval & South Indian Art',
      dateRange: 'c. 7th Century CE',
      region: 'South',
      location: 'Mahabalipuram, Tamil Nadu',
      dynasty: 'Pallava Dynasty',
      artForm: 'Narrative',
      material: 'Monolithic Granite Boulder',
      technique: 'Open-air bas-relief carved across two giant granite boulders (27m × 9m)',
      theme: 'Mythology',
      isTamilNadu: true,
      isMahabharata: true,
      mbKey: 'arjuna',
      image: 'assets/arjunas_penance.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Descent_of_the_Ganges_Mahabalipuram.jpg',
      historicalContext: 'Commissioned by Pallava Kings in Tamil Nadu to celebrate cosmic victory, divine blessing, and epic hero devotion.',
      description: 'A monumental open-air relief depicting over 145 figures of gods, ascetics, celestial nagas, and life-sized elephants descending toward a natural central cleft.',
      features: [
        'Use of natural vertical rock cleft to channel real water flow during rituals',
        'Arjuna depicted performing severe tapas on one leg to win Shiva\'s Pasupatastra',
        'Humorous relief details of a hypocritical cat copying the ascetic stance!'
      ],
      significance: 'One of the largest open-air rock reliefs in the world, combining epic Mahabharata narrative with Tamil Pallava court artistry.',
      lookCloser: [
        'Ascetic figure standing on one leg with arms raised—traditionally identified as Arjuna.',
        'Life-sized elephant family with baby elephants sheltered under their mother.',
        'Humorous cat doing penance while mice dance unbothered around his feet.'
      ],
      didYouKnow: 'During ancient rainstorms, water was collected in a hidden cistern at the top of the cliff and released down the central cleft, creating a real flowing waterfall over the stone serpents!',
      source: 'UNESCO World Heritage / ASI Mahabalipuram'
    },
    {
      id: 'shore-temple',
      name: 'Shore Temple of Mahabalipuram',
      periodId: 'early-medieval-south',
      periodName: 'Early Medieval & South Indian Art',
      dateRange: 'c. 700 – 728 CE',
      region: 'South',
      location: 'Mahabalipuram, Bay of Bengal Coast, Tamil Nadu',
      dynasty: 'Pallava Dynasty (Narasimhavarman II / Rajasimha)',
      artForm: 'Architecture',
      material: 'Cut Granite Blocks',
      technique: 'Early structural stone masonry facing the sea',
      theme: 'Religion',
      isTamilNadu: true,
      isMahabharata: false,
      image: 'assets/shore_temple.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Shore_Temple_Mahabalipuram.jpg',
      historicalContext: 'Built on the Coromandel coast by Pallava King Rajasimha. Marks Tamil Nadu\'s historical transition from rock-cut shrines to free-standing masonry temples.',
      description: 'A landmark structural stone complex of three shrines overlooking the Bay of Bengal, surrounded by an outer enclosure wall lined with carved Nandi bull statues.',
      features: [
        'Stepped tiered Dravidian spires (*Vimana*) built of salt-resistant granite blocks',
        'Perimeter wall lined with carved stone Nandi bulls gazing toward the ocean',
        'Reclining Vishnu (*Anantasayana*) shrine carved directly from bedrock inside'
      ],
      significance: 'The oldest major structural stone temple in South India, enduring over 1,300 years of coastal waves and maritime trade history.',
      lookCloser: [
        'Twin stepped granite towers standing directly against the ocean waves.',
        'Rows of carved granite Nandi bulls along the outer courtyard wall.',
        'Salt-weathered Pallava relief sculptures inside the main Shiva sanctum.'
      ],
      didYouKnow: '7th-century European sailors called Mahabalipuram the "Seven Pagodas," believing this Shore Temple was the last surviving of seven grand seaside stone temples!',
      source: 'UNESCO World Heritage / ASI Mahabalipuram Circle'
    },
    {
      id: 'ellora-kailasa',
      name: 'Kailasa Temple, Ellora (Cave 16)',
      periodId: 'early-medieval-south',
      periodName: 'Early Medieval & South Indian Art',
      dateRange: 'c. 756 – 773 CE',
      region: 'West',
      location: 'Ellora Caves, Maharashtra',
      dynasty: 'Rashtrakuta Dynasty (King Krishna I)',
      artForm: 'Architecture',
      material: 'Basalt Rock',
      technique: 'Monolithic top-down mountain excavation (200,000 tons of rock removed)',
      theme: 'Power',
      isTamilNadu: false,
      isMahabharata: true,
      mbKey: 'gita',
      image: 'assets/ellora_kailasa.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Ellora_cave16_001.jpg',
      historicalContext: 'Engineered under Rashtrakuta King Krishna I to replicate Lord Shiva\'s sacred Himalayan abode, Mount Kailash.',
      description: 'A multi-story monolithic temple carved out of a single basalt rock cliff, featuring entrance gateway, courtyard, victory pillars, elephant halls, and epic relief friezes.',
      features: [
        'Monolithic top-down carving without scaffolding or stone assembly',
        'Life-sized stone elephants supporting the lower main temple platform',
        'Extensive gallery relief panels depicting Mahabharata and Ramayana battle scenes'
      ],
      significance: 'Unrivaled peak of rock-cut architectural engineering in world history.',
      lookCloser: [
        'Southern gallery relief carving depicting epic battle scenes from Mahabharata.',
        'Colossal life-sized stone elephants carved around the temple plinth.',
        'Dramatic relief of Ravana attempting to shake Mount Kailash.'
      ],
      didYouKnow: 'Artisans excavated over 200,000 tons of solid volcanic basalt rock starting from the mountain top down to the floor, meaning a single carving mistake could never be undone!',
      source: 'Archaeological Survey of India / UNESCO World Heritage'
    },
    {
      id: 'brihadisvara-temple',
      name: 'Brihadisvara Temple, Thanjavur (Big Temple)',
      periodId: 'medieval-temple',
      periodName: 'Medieval / Temple & Regional Art',
      dateRange: 'c. 1010 CE',
      region: 'South',
      location: 'Thanjavur, Tamil Nadu',
      dynasty: 'Imperial Chola Dynasty (Rajaraja Chola I)',
      artForm: 'Architecture',
      material: 'Granite',
      technique: 'Interlocking dry granite stone masonry (66m Vimana spire, 80-ton capstone)',
      theme: 'Power',
      isTamilNadu: true,
      isMahabharata: false,
      image: 'assets/brihadisvara_temple.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Thanjavur_Brihadisvara_Temple.jpg',
      historicalContext: 'Completed in 1010 CE by Emperor Rajaraja Chola I to commemorate Chola imperial power, maritime expansion, and divine devotion.',
      description: 'A colossal granite temple featuring a 66-meter high 13-tiered *Vimana* spire, an 80-ton single-block granite capstone (*Kumbam*), a monolithic Nandi, and inner Chola wall frescoes.',
      features: [
        'Soaring 66m granite Vimana tower assembled completely without mortar',
        '80-ton octagonal granite capstone sitting atop the peak of the Vimana spire',
        'Inner ambulatory wall murals depicting Rajaraja Chola and Lord Shiva'
      ],
      significance: 'Apex masterpiece of South Indian Dravidian granite temple architecture and Chola imperial engineering.',
      lookCloser: [
        'The 80-ton granite capstone (*Kumbam*) resting atop the 216-foot spire.',
        'Monolithic Nandi bull carved from a single block of granite measuring 6m long.',
        '11th-century Chola fresco paintings hidden in the dark inner corridor.'
      ],
      didYouKnow: 'The 80-ton single granite capstone was raised to the top of the 216-foot tower using an inclined earth ramp extending over 6 kilometers from a neighboring village!',
      source: 'UNESCO World Heritage / Tamil Nadu State Dept of Archaeology'
    },
    {
      id: 'chola-nataraja',
      name: 'Chola Bronze Nataraja (Lord of the Dance)',
      periodId: 'medieval-temple',
      periodName: 'Medieval / Temple & Regional Art',
      dateRange: 'c. 10th – 11th Century CE',
      region: 'South',
      location: 'Government Museum, Chennai / Met Museum, NY',
      dynasty: 'Imperial Chola Dynasty (Queen Sembiyan Mahadevi era)',
      artForm: 'Sculpture',
      material: 'Panchaloha Bronze (Five-metal alloy)',
      technique: 'Cire perdue (Lost-wax metal casting)',
      theme: 'Human Form',
      isTamilNadu: true,
      isMahabharata: false,
      image: 'assets/chola_nataraja.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Chola_Nataraja_Met.jpg',
      historicalContext: 'Perfected in Chola bronze workshops in Tamil Nadu for mobile temple festival processions (*utsava murti*).',
      description: 'Shiva as Nataraja performs the cosmic dance of creation and destruction (*Anandatandava*) inside a ring of fire, trampling the dwarf of ignorance.',
      features: [
        'Balanced kinetic pose (*Bhujangatrasita*) surrounded by flaming halo (*Prabhamandala*)',
        'Four arms carrying drum (*Damaru*) and flame (*Agni*) while making reassurance mudra',
        'Dynamic flying matted locks of hair (*jata*) ensnaring Goddess Ganga'
      ],
      significance: 'Renowned worldwide as one of the ultimate supreme achievements of sacred metal sculpture in human history.',
      lookCloser: [
        'Hourglass *Damaru* drum held in upper right hand symbolizing creation rhythm.',
        'Right foot crushing the dwarf *Apasmara*, personifying spiritual delusion.',
        'Flowing locks of matted hair radiating horizontally during the cosmic spin.'
      ],
      didYouKnow: 'A large bronze statue of the Chola Nataraja stands outside CERN (European Organization for Nuclear Research) in Geneva, symbolizing the cosmic dance of subatomic particles!',
      source: 'Government Museum Chennai / Metropolitan Museum of Art'
    },
    {
      id: 'khajuraho-kandariya',
      name: 'Kandariya Mahadeva Temple & Carvings',
      periodId: 'medieval-temple',
      periodName: 'Medieval / Temple & Regional Art',
      dateRange: 'c. 1025 – 1050 CE',
      region: 'Central',
      location: 'Khajuraho, Madhya Pradesh',
      dynasty: 'Chandela Dynasty (King Vidyadhara)',
      artForm: 'Architecture',
      material: 'Sandstone',
      technique: 'Nagara style Panchayatana architecture with mountain-like spires',
      theme: 'Everyday Life',
      isTamilNadu: false,
      isMahabharata: false,
      image: 'assets/khajuraho_kandariya.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Kandariya_Mahadeva_Temple_Khajuraho.jpg',
      historicalContext: 'Built during the peak of Chandela rule in Central India. Features over 800 sandstone sculptures carved across exterior and interior temple walls.',
      description: 'A Nagara style sandstone temple designed to resemble Himalayan mountain peaks, adorned with complex friezes of celestial nymphs (*surasundaris*), musicians, warriors, and divine couples.',
      features: [
        'Rhythmically ascending *Shikhara* spires mirroring mountain ranges',
        'Slender *Surasundari* figures carved in graceful triple-flexed posture (*tribhanga*)',
        'Rich variety of secular courtly life, music, dance, and spiritual devotion'
      ],
      significance: 'Peak achievement of North Indian Nagara temple architecture and figurative sandstone sculpture.',
      lookCloser: [
        'Celestial maiden (*Surasundari*) removing a thorn from her foot.',
        'Ascending cluster of miniature spires (*Urushringas*) creating mountain rhythm.',
        'Intricate friezes of musicians playing flutes, drums, and stringed instruments.'
      ],
      didYouKnow: 'Contrary to popular belief, less than 10% of Khajuraho\'s exterior sculptures portray erotic scenes; the vast majority depict everyday life, music, dance, and divine beauty!',
      source: 'Archaeological Survey of India / UNESCO World Heritage'
    },
    {
      id: 'mughal-razmnama',
      name: 'Mughal Miniature: Krishna Lifting Mt. Govardhan',
      periodId: 'mughal-regional',
      periodName: 'Mughal & Regional Painting',
      dateRange: 'c. 1590 – 1598 CE',
      region: 'North',
      location: 'Metropolitan Museum of Art, New York',
      dynasty: 'Mughal Empire (Reign of Akbar)',
      artForm: 'Painting',
      material: 'Opaque Gouache & Gold on Paper',
      technique: 'Miniature painting with fine squirrel-brush detailing and gold leaf washes',
      theme: 'Storytelling',
      isTamilNadu: false,
      isMahabharata: true,
      mbKey: 'krishna',
      image: 'assets/mughal_razmnama.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Krishna_holding_Govardhan_hill_Mughal_miniature.jpg',
      historicalContext: 'Commissioned by Emperor Akbar, who ordered the Mahabharata translated into Persian as the *Razmnama* ("Book of War") and illustrated by top court artists to promote interfaith harmony.',
      description: 'A vibrant manuscript miniature depicting Lord Krishna effortlessly holding Mount Govardhan on his pinky finger to shelter villagers and cattle from torrential rainstorms.',
      features: [
        'High Persian horizon line fused with lively Indian narrative crowd scenes',
        'Intricate rendering of multi-colored rocky mountain crags and rain clouds',
        'Expressive portraiture of cowherds (*gopas*), women, and cattle seeking shelter'
      ],
      significance: 'Key milestone in Indian painting demonstrating royal Mughal patronage of Hindu epic literature and interfaith cultural synthesis.',
      lookCloser: [
        'Young Krishna lifting the giant mountain on his left hand while comforting villagers.',
        'Swirling Persian-style rocky crags painted in violet, pink, and ochre.',
        'Detailed cattle and villagers crowding together under the mountain canopy.'
      ],
      didYouKnow: 'Emperor Akbar commissioned the royal *Razmnama* manuscript at immense expense, keeping the master copy in his personal imperial library to educate royal princes!',
      source: 'Metropolitan Museum of Art / British Library Manuscripts'
    },
    {
      id: 'mewar-mahabharata',
      name: 'Rajput Miniature: Krishna & Arjuna in the Gita',
      periodId: 'mughal-regional',
      periodName: 'Mughal & Regional Painting',
      dateRange: 'c. 1680 – 1700 CE',
      region: 'West',
      location: 'National Museum, New Delhi',
      dynasty: 'Rajput Painting (Mewar School, Artist Allah Baksh)',
      artForm: 'Manuscript',
      material: 'Opaque Watercolor & Gold on Wasli Paper',
      technique: 'Miniature painting using bold primary pigments and flat color backgrounds',
      theme: 'Storytelling',
      isTamilNadu: false,
      isMahabharata: true,
      mbKey: 'krishna',
      image: 'assets/mewar_mahabharata.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Krishna_and_Arjuna_Kurukshetra.jpg',
      historicalContext: 'Created by court painter Allah Baksh under Maharana Jai Singh of Mewar, who produced an astounding 4,000-page illustrated folio set of the entire Mahabharata.',
      description: 'Saturated Rajput miniature scene depicting Lord Krishna acting as Arjuna\'s charioteer on the battlefield of Kurukshetra, delivering the sermon of the Bhagavad Gita.',
      features: [
        'Vibrant red and yellow background color fields creating intense emotional heat',
        'Stylized lotus eyes and bold black calligraphic contours',
        'Golden war chariot drawn by four white steeds facing battlefield banners'
      ],
      significance: 'Landmark example of Rajput court art preserving deep devotional epic literature through vibrant indigenous visual idioms.',
      lookCloser: [
        'Four white horses pulling the golden chariot of Arjuna amidst Kurukshetra armies.',
        'Krishna holding chariot reins while making the *Vyakhyana Mudra* (teaching gesture).',
        'Devedagari script text written along the top border frame.'
      ],
      didYouKnow: 'The master artist Allah Baksh spent nearly two decades in Udaipur painting over 4,000 manuscript folios covering all 18 Parvas (books) of the Mahabharata!',
      source: 'National Museum, New Delhi / City Palace Udaipur'
    },
    {
      id: 'thanjavur-painting',
      name: 'Thanjavur Gold Leaf Painting: Navaneetha Krishna',
      periodId: 'mughal-regional',
      periodName: 'Mughal & Regional Painting',
      dateRange: 'c. 18th – 19th Century CE',
      region: 'South',
      location: 'Government Museum, Chennai / Tanjore Palace',
      dynasty: 'Thanjavur School (Maratha Court of Tanjore)',
      artForm: 'Painting',
      material: '22-Karat Gold Foil, Gems, Gesso Paste on Wooden Board',
      technique: 'Embossed gesso relief work coated in pure gold leaf and tempera painting',
      theme: 'Religion',
      isTamilNadu: true,
      isMahabharata: true,
      mbKey: 'krishna',
      image: 'assets/thanjavur_painting.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Tanjore_painting_Krishna.jpg',
      historicalContext: 'Flourished under Maratha rulers of Thanjavur in Tamil Nadu (17th–19th centuries). Designed as glowing sacred icon panels for domestic shrines.',
      description: 'A radiant image of infant Krishna seated on an ornate throne holding a butter pot, embellished with raised 3D gold leaf gesso relief and sparkling glass gems.',
      features: [
        'Raised gesso relief work (*lime-paste relief*) coated in pure 22k gold foil',
        'Embedded semi-precious glass gems representing rubies, emeralds, and pearls',
        'Plump rounded child deity features framed by dark contrasting drapery'
      ],
      significance: 'Unique South Indian hybrid painting style fusing Tamil, Maratha, and Deccani artistic traditions into a jewel-like sacred icon.',
      lookCloser: [
        'Embossed gold gesso work that reflects glowing oil-lamp light in dark shrines.',
        'Sparkling embedded glass gems ornamenting Krishna\'s crown and necklace.',
        'Plump, almond-eyed depiction of Krishna clutching a pot of churned butter.'
      ],
      didYouKnow: 'Traditional Thanjavur paintings are crafted on unyielding jackwood boards wrapped in cotton cloth, ensuring the heavy gold foil and gesso never crack across centuries!',
      source: 'Government Museum Chennai / Thanjavur Royal Palace Collection'
    },
    {
      id: 'company-painting',
      name: 'Company School: Tanjore Artisans & Procession',
      periodId: 'colonial-modern',
      periodName: 'Colonial / 19th-Century Art',
      dateRange: 'c. 1820 – 1850 CE',
      region: 'South',
      location: 'Victoria and Albert Museum, London',
      dynasty: 'Company School (Anglo-Indian Style)',
      artForm: 'Painting',
      material: 'Watercolor on European Paper',
      technique: 'Linear perspective combined with detailed ethnographic recording',
      theme: 'Everyday Life',
      isTamilNadu: true,
      isMahabharata: false,
      image: 'assets/company_painting.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Company_School_Tanjore_artisans.jpg',
      historicalContext: 'Commissioned by East India Company officials and British travelers seeking documentary records of South Indian crafts, trades, and temple festivals.',
      description: 'An observational watercolor painting capturing South Indian stone sculptors, bronze casters, and weavers at work in Tanjore.',
      features: [
        'Soft watercolor washes combined with European shaded background perspective',
        'Meticulous documentary recording of tools, turbans, attire, and workshop methods',
        'Focus on daily artisan life rather than stylized royal court scenes'
      ],
      significance: 'Captures a historic cross-cultural encounter, documenting traditional Tamil craftsmanship on the brink of British industrial colonial impact.',
      lookCloser: [
        'Sculptor chiseling a granite temple figure using traditional iron tools.',
        'Subdued watercolor tones characteristic of 19th-century European documentation.',
        'Detailed rendering of traditional South Indian waist drapes (*veshti*) and turbans.'
      ],
      didYouKnow: 'Company school paintings served as the predecessor to modern documentary photography, recording Indian trades, flora, fauna, and monuments!',
      source: 'Victoria and Albert Museum, London (South Asia Dept)'
    },
    {
      id: 'raja-ravi-varma',
      name: 'Raja Ravi Varma: "Arjuna & Subhadra"',
      periodId: 'colonial-modern',
      periodName: 'Colonial / 19th-Century Art',
      dateRange: 'c. 1890 – 1896 CE',
      region: 'South',
      location: 'Laxmi Vilas Palace, Vadodara / NGMA, New Delhi',
      dynasty: 'Academic Realism / Travancore School',
      artForm: 'Painting',
      material: 'Oil on Canvas & Oleographic Print',
      technique: 'European academic oil painting applied to Indian Puranic/epic narrative',
      theme: 'Storytelling',
      isTamilNadu: true,
      isMahabharata: true,
      mbKey: 'arjuna',
      image: 'assets/raja_ravi_varma.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Raja_Ravi_Varma_-_Arjuna_and_Subhadra.jpg',
      historicalContext: 'Raja Ravi Varma (1848–1906), born in Kerala, South India, synthesized European oil painting techniques with Indian epic iconography, democratizing art via his oleograph press.',
      description: 'A dramatic oil painting capturing the Mahabharata moment of Arjuna disguised as an ascetic gazing bashfully upon Princess Subhadra in her royal garden.',
      features: [
        'Mastery of European oil realism, dramatic chiaroscuro lighting, and spatial depth',
        'Luminous rendering of South Indian silk sarees, gold lace borders, and jewelry',
        'Theatrical narrative poise capturing tender psychological romance'
      ],
      significance: 'Revolutionized modern Indian visual culture, establishing the enduring visual template for Indian epic gods and heroes.',
      lookCloser: [
        'Luminous folds on Subhadra\'s gold-bordered South Indian silk saree.',
        'Arjuna disguised as a hermit monk holding a wooden staff while casting a glance.',
        'Realistic garden foliage, stone fountain, and shaded background lighting.'
      ],
      didYouKnow: 'Raja Ravi Varma set up a lithographic printing press in Ghatkopar, Mumbai in 1894, making high-quality color prints of his epic paintings affordable for ordinary Indian homes!',
      source: 'National Gallery of Modern Art (NGMA) / Sri Chitra Art Gallery'
    },
    {
      id: 'jamini-roy',
      name: 'Jamini Roy: "Gopini" / "Krishna Folk Narrative"',
      periodId: 'modern-contemporary',
      periodName: 'Modern & Contemporary Art',
      dateRange: 'c. 1940s – 1950s',
      region: 'East',
      location: 'National Gallery of Modern Art, New Delhi',
      dynasty: 'Bengal Modernism / Indigenous Folk Revival',
      artForm: 'Painting',
      material: 'Tempera on Woven Cloth & Wood Panel',
      technique: 'Bold sweeping ink lines, flat unshaded organic earth color fields',
      theme: 'Human Form',
      isTamilNadu: false,
      isMahabharata: true,
      mbKey: 'krishna',
      image: 'assets/jamini_roy.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Jamini_Roy_Gopini.jpg',
      historicalContext: 'Rejecting Western academic oil painting, Jamini Roy (1887–1972) turned to Bengal village scroll painters (*patuas*) to forge a truly native modern Indian art.',
      description: 'A strikingly minimalist tempera painting of a Gopini or Krishna narrative figure rendered with bold sweeping black lines, almond eyes, and warm yellow ochre pigments.',
      features: [
        'Rhythmic calligraphic outlines defining simplified human forms',
        'Large expressive almond-shaped eyes extending beyond the face silhouette',
        'Use of natural earth pigments (yellow ochre, terracotta red, soot black)'
      ],
      significance: 'Pioneer of modern Indian art who demonstrated that modernism could spring directly from indigenous folk roots rather than Western abstraction.',
      lookCloser: [
        'Large, almond-shaped eyes that dominate the figure\'s face.',
        'Bold single-stroke black outline defining the head, limbs, and drapes.',
        'Flat unshaded background painted with natural yellow ochre clay pigment.'
      ],
      didYouKnow: 'Jamini Roy completely abandoned commercial oil paints, choosing to grind his own colors using mountain clay, turmeric, soot, and tamarind seed paste!',
      source: 'National Gallery of Modern Art (NGMA), New Delhi'
    },
    {
      id: 'amrita-shergil',
      name: 'Amrita Sher-Gil: "Three Girls" / "South Indian Villagers"',
      periodId: 'modern-contemporary',
      periodName: 'Modern & Contemporary Art',
      dateRange: 'c. 1935 – 1937',
      region: 'North',
      location: 'National Gallery of Modern Art, New Delhi',
      dynasty: 'Early Modern Indian Art',
      artForm: 'Painting',
      material: 'Oil on Canvas',
      technique: 'Post-Impressionist European technique fused with warm Indian color harmonies',
      theme: 'Human Form',
      isTamilNadu: true,
      isMahabharata: false,
      image: 'assets/amrita_shergil.jpg',
      fallbackOnline: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Amrita_Sher-Gil_Three_Girls.jpg',
      historicalContext: 'Amrita Sher-Gil (1913–1941), trained in Paris, returned to India in the 1930s. Her 1937 tour of South India (Madurai, Tanjore) profoundly inspired her quiet, empathetic portraits.',
      description: 'A hauntingly quiet portrait of three young Indian women seated together in contemplative repose, rendered in warm earthy reds, deep browns, and white drapes.',
      features: [
        'Melancholic emotional depth and dignified portrayal of rural Indian women',
        'Simplified sculptural body forms inspired by Ajanta murals and South Indian bronzes',
        'Warm color harmonies of red ochre, deep plum, and chalk white'
      ],
      significance: 'Pioneered modern Indian painting by bridging Western oil technique with intense emotional empathy for everyday Indian life.',
      lookCloser: [
        'Introspective, contemplative expressions on the young women\'s faces.',
        'Broad, flat color planes of red, white, and deep plum in their drapes.',
        'Simplified sculptural body forms inspired by classical South Indian bronzes.'
      ],
      didYouKnow: 'Amrita Sher-Gil won the Gold Medal at the Grand Salon in Paris at age 19, but returned to India declaring: "Europe belongs to Picasso; India belongs to me!"',
      source: 'National Gallery of Modern Art (NGMA), New Delhi'
    }
  ];

  /* ------------------------------------------------------------------------
     3. COMPARATIVE ANALYSIS PAIRS DATA
     ------------------------------------------------------------------------ */
  const COMPARISONS = {
    pair1: {
      leftId: 'arjunas-penance',
      rightId: 'mughal-razmnama',
      medium: 'Pallava sculpture utilizes massive public open-air granite boulders carved in high relief, whereas Mughal art uses intimate, portable paper folios painted with fine squirrel-hair brushes for royal library viewing.',
      style: 'The Pallava rock relief incorporates South Indian naturalism and ascetics, while the Mughal miniature combines Persian high-horizon landscape conventions with lively Indian narrative crowds.',
      purpose: 'Pallava kings carved monumentality to affirm divine royal cosmic duty, while Akbar commissioned the *Razmnama* to foster interfaith synthesis and Persian scholarly understanding.'
    },
    pair2: {
      leftId: 'thanjavur-painting',
      rightId: 'raja-ravi-varma',
      medium: 'Thanjavur art employs 3D embossed gesso paste, 22-karat gold foil, and embedded glass gems on wooden boards, whereas Raja Ravi Varma introduced European canvas oil painting and mass oleographic printing.',
      style: 'Thanjavur paintings present stylized, plump, sacred icons designed for dark temple shrines, while Ravi Varma used Victorian academic realism, dramatic lighting, and natural spatial perspective.',
      purpose: 'Thanjavur panels served as sacred ritual devotional icons (*Bhakti*), whereas Ravi Varma\'s prints brought epic Indian stories into millions of ordinary secular households.'
    },
    pair3: {
      leftId: 'deogarh-vishnu',
      rightId: 'jamini-roy',
      medium: 'The Gupta panel is carved in red sandstone high relief on a 6th-century stone temple wall, while Jamini Roy used organic tempera pigments on cloth and wood panels in the 20th century.',
      style: 'Gupta classical art embodies smooth idealism, balanced cosmic ordering, and ornate stone halo carving, whereas Jamini Roy embraced bold calligraphic folk lines inspired by Bengal scroll painters.',
      purpose: 'The Gupta relief articulated royal temple theology, whereas Jamini Roy sought a nationalist modern artistic identity by returning to indigenous village folk roots.'
    }
  };

  /* ------------------------------------------------------------------------
     4. STATE MANAGEMENT & DOM ELEMENTS
     ------------------------------------------------------------------------ */
  let currentFilteredExhibits = [...EXHIBITS];
  let activeFilters = {
    search: '',
    period: 'all',
    region: 'all',
    artForm: 'all',
    theme: 'all',
    tamilNadu: false,
    mahabharata: false,
    mbKey: null
  };

  let currentModalIndex = 0;

  // DOM Handles
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const tnQuickFilter = document.getElementById('tnQuickFilter');
  const mbQuickFilter = document.getElementById('mbQuickFilter');

  const periodFilter = document.getElementById('periodFilter');
  const regionFilter = document.getElementById('regionFilter');
  const artFormFilter = document.getElementById('artFormFilter');
  const themeFilter = document.getElementById('themeFilter');
  const resetAllFilters = document.getElementById('resetAllFilters');
  const filterStatusText = document.getElementById('filterStatusText');
  const activeFilterTags = document.getElementById('activeFilterTags');

  const timelineErasWrapper = document.getElementById('timelineErasWrapper');
  const timelineProgressBar = document.getElementById('timelineProgressBar');

  // Modal Handles
  const exhibitModalOverlay = document.getElementById('exhibitModalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalPrevBtn = document.getElementById('modalPrevBtn');
  const modalNextBtn = document.getElementById('modalNextBtn');
  const modalCounter = document.getElementById('modalCounter');

  /* ------------------------------------------------------------------------
     5. RENDER FUNCTIONS
     ------------------------------------------------------------------------ */

  function renderTimeline() {
    timelineErasWrapper.innerHTML = '';

    if (currentFilteredExhibits.length === 0) {
      timelineErasWrapper.innerHTML = `
        <div style="text-align: center; padding: 4rem 1.5rem; background: #FAF6EF; border-radius: 8px; border: 1px dashed #C69A38;">
          <h3 style="font-family: var(--font-title); font-size: 1.6rem; color: #A84524; margin-bottom: 0.5rem;">No Artwork Matches Active Catalog Filters</h3>
          <p style="color: #6E5D4F; margin-bottom: 1.5rem;">Try adjusting search keywords or clearing catalog dropdown selections.</p>
          <button onclick="document.getElementById('resetAllFilters').click()" class="btn-primary">Clear All Catalog Filters ↺</button>
        </div>
      `;
      return;
    }

    ERAS.forEach(era => {
      const eraExhibits = currentFilteredExhibits.filter(ex => ex.periodId === era.id);
      if (eraExhibits.length === 0) return;

      const eraBlock = document.createElement('div');
      eraBlock.className = 'timeline-era-block';
      eraBlock.id = `era-${era.id}`;

      eraBlock.innerHTML = `
        <div class="era-header-card">
          <div class="era-top-meta">
            <span class="era-number-badge">${era.number}</span>
            <span class="era-date-range">${era.dateRange}</span>
          </div>
          <h3 class="era-title">${era.name}</h3>
          <p class="era-intro">${era.intro}</p>
          <div class="era-characteristics-grid">
            <div class="char-item">
              <span class="char-label">CHARACTERISTICS</span>
              <span class="char-value">${era.characteristics}</span>
            </div>
            <div class="char-item">
              <span class="char-label">MATERIALS & TECHNIQUES</span>
              <span class="char-value">${era.materialsTechniques}</span>
            </div>
            <div class="char-item">
              <span class="char-label">MAJOR REGIONS</span>
              <span class="char-value">${era.majorRegions}</span>
            </div>
          </div>
        </div>

        <div class="exhibits-grid" id="grid-${era.id}"></div>
      `;

      timelineErasWrapper.appendChild(eraBlock);
      const gridContainer = eraBlock.querySelector(`#grid-${era.id}`);

      eraExhibits.forEach(exhibit => {
        const card = document.createElement('div');
        card.className = 'exhibit-card';
        card.dataset.exhibitId = exhibit.id;

        card.innerHTML = `
          <div class="card-img-wrapper">
            <img src="${exhibit.image}" alt="${exhibit.name}" loading="lazy" onerror="this.onerror=null; this.src='${exhibit.fallbackOnline}';"/>
            <div class="card-badges-overlay">
              ${exhibit.isTamilNadu ? `<span class="card-badge tn-badge">TAMIL NADU</span>` : ''}
              ${exhibit.isMahabharata ? `<span class="card-badge mb-badge">MAHABHARATA</span>` : ''}
            </div>
          </div>
          <div class="card-content">
            <span class="card-art-form">${exhibit.artForm.toUpperCase()} • ${exhibit.region.toUpperCase()} INDIA</span>
            <h4 class="card-title">${exhibit.name}</h4>
            <div class="card-region-date">${exhibit.dateRange}</div>
            <p class="card-snippet">${exhibit.description}</p>
            <div class="card-footer">
              <span class="card-material">${exhibit.material}</span>
              <span class="card-explore-btn">Inspect Panel →</span>
            </div>
          </div>
        `;

        card.addEventListener('click', () => {
          openModal(exhibit.id);
        });

        gridContainer.appendChild(card);
      });
    });
  }

  function applyFilters() {
    currentFilteredExhibits = EXHIBITS.filter(ex => {
      if (activeFilters.search) {
        const q = activeFilters.search.toLowerCase();
        const matchesSearch = 
          ex.name.toLowerCase().includes(q) ||
          ex.periodName.toLowerCase().includes(q) ||
          ex.region.toLowerCase().includes(q) ||
          ex.material.toLowerCase().includes(q) ||
          ex.dynasty.toLowerCase().includes(q) ||
          ex.description.toLowerCase().includes(q);
        if (!matchesSearch) return false;
      }

      if (activeFilters.period !== 'all' && ex.periodId !== activeFilters.period) {
        return false;
      }

      if (activeFilters.region !== 'all') {
        if (activeFilters.region === 'South' && !ex.region.includes('South')) return false;
        if (activeFilters.region !== 'South' && ex.region !== activeFilters.region) return false;
      }

      if (activeFilters.artForm !== 'all' && ex.artForm !== activeFilters.artForm) {
        return false;
      }

      if (activeFilters.theme !== 'all' && ex.theme !== activeFilters.theme) {
        return false;
      }

      if (activeFilters.tamilNadu && !ex.isTamilNadu) {
        return false;
      }

      if (activeFilters.mahabharata && !ex.isMahabharata) {
        return false;
      }
      if (activeFilters.mbKey && ex.mbKey !== activeFilters.mbKey) {
        return false;
      }

      return true;
    });

    updateFilterUI();
    renderTimeline();
  }

  function updateFilterUI() {
    filterStatusText.textContent = `Showing ${currentFilteredExhibits.length} of ${EXHIBITS.length} exhibits`;

    const isAnyActive = 
      activeFilters.search ||
      activeFilters.period !== 'all' ||
      activeFilters.region !== 'all' ||
      activeFilters.artForm !== 'all' ||
      activeFilters.theme !== 'all' ||
      activeFilters.tamilNadu ||
      activeFilters.mahabharata ||
      activeFilters.mbKey;

    resetAllFilters.style.display = isAnyActive ? 'inline-block' : 'none';
    activeFilterTags.innerHTML = '';

    if (activeFilters.search) {
      addTagChip(`Search: "${activeFilters.search}"`, () => {
        searchInput.value = '';
        activeFilters.search = '';
        applyFilters();
      });
    }

    if (activeFilters.period !== 'all') {
      const eraObj = ERAS.find(e => e.id === activeFilters.period);
      addTagChip(`Era: ${eraObj ? eraObj.name : activeFilters.period}`, () => {
        periodFilter.value = 'all';
        activeFilters.period = 'all';
        applyFilters();
      });
    }

    if (activeFilters.region !== 'all') {
      addTagChip(`Region: ${activeFilters.region}`, () => {
        regionFilter.value = 'all';
        activeFilters.region = 'all';
        applyFilters();
      });
    }

    if (activeFilters.artForm !== 'all') {
      addTagChip(`Art Form: ${activeFilters.artForm}`, () => {
        artFormFilter.value = 'all';
        activeFilters.artForm = 'all';
        applyFilters();
      });
    }

    if (activeFilters.theme !== 'all') {
      addTagChip(`Theme: ${activeFilters.theme}`, () => {
        themeFilter.value = 'all';
        activeFilters.theme = 'all';
        applyFilters();
      });
    }

    if (activeFilters.tamilNadu) {
      addTagChip(`Filter: Tamil Nadu`, () => {
        activeFilters.tamilNadu = false;
        tnQuickFilter.dataset.active = 'false';
        applyFilters();
      });
    }

    if (activeFilters.mahabharata) {
      addTagChip(`Filter: Mahabharata Thread`, () => {
        activeFilters.mahabharata = false;
        activeFilters.mbKey = null;
        mbQuickFilter.dataset.active = 'false';
        applyFilters();
      });
    }
  }

  function addTagChip(text, onRemove) {
    const chip = document.createElement('div');
    chip.className = 'filter-tag-chip';
    chip.innerHTML = `<span>${text}</span> <button aria-label="Remove filter">&times;</button>`;
    chip.querySelector('button').addEventListener('click', onRemove);
    activeFilterTags.appendChild(chip);
  }

  /* ------------------------------------------------------------------------
     6. EXHIBIT MODAL ENGINE
     ------------------------------------------------------------------------ */
  function openModal(exhibitId) {
    const exhibit = EXHIBITS.find(e => e.id === exhibitId);
    if (!exhibit) return;

    const filteredIndex = currentFilteredExhibits.findIndex(e => e.id === exhibitId);
    currentModalIndex = filteredIndex !== -1 ? filteredIndex : 0;

    populateModalData(exhibit);

    exhibitModalOverlay.classList.add('active');
    exhibitModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    exhibitModalOverlay.classList.remove('active');
    exhibitModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function populateModalData(exhibit) {
    document.getElementById('modalTitle').textContent = exhibit.name;
    document.getElementById('modalSubSpecs').textContent = `${exhibit.dateRange} • ${exhibit.location}`;

    document.getElementById('modalPeriodBadge').textContent = exhibit.periodName;
    document.getElementById('modalTnBadge').style.display = exhibit.isTamilNadu ? 'inline-block' : 'none';
    document.getElementById('modalMbBadge').style.display = exhibit.isMahabharata ? 'inline-block' : 'none';

    document.getElementById('modalArtForm').textContent = exhibit.artForm;
    document.getElementById('modalMaterial').textContent = exhibit.material;
    document.getElementById('modalTechnique').textContent = exhibit.technique;
    document.getElementById('modalDynasty').textContent = exhibit.dynasty;
    document.getElementById('modalLocation').textContent = exhibit.location;

    document.getElementById('modalHistoricalContext').textContent = exhibit.historicalContext;
    document.getElementById('modalDescription').textContent = exhibit.description;
    document.getElementById('modalSignificance').textContent = exhibit.significance;

    const featuresList = document.getElementById('modalFeaturesList');
    featuresList.innerHTML = '';
    exhibit.features.forEach(feat => {
      const li = document.createElement('li');
      li.textContent = feat;
      featuresList.appendChild(li);
    });

    const lookCloserGrid = document.getElementById('modalLookCloserGrid');
    lookCloserGrid.innerHTML = '';
    exhibit.lookCloser.forEach((item, idx) => {
      const div = document.createElement('div');
      div.className = 'look-item';
      div.innerHTML = `<strong>Detail ${idx + 1}:</strong> ${item}`;
      lookCloserGrid.appendChild(div);
    });

    document.getElementById('modalFactText').textContent = exhibit.didYouKnow;
    document.getElementById('modalSourceCredit').textContent = `Source Credit: ${exhibit.source}`;

    const imgContainer = document.getElementById('modalImgContainer');
    imgContainer.innerHTML = `
      <img src="${exhibit.image}" alt="${exhibit.name}" onerror="this.onerror=null; this.src='${exhibit.fallbackOnline}';"/>
    `;

    modalCounter.textContent = `Exhibit ${currentModalIndex + 1} of ${currentFilteredExhibits.length}`;
    modalPrevBtn.disabled = currentModalIndex === 0;
    modalNextBtn.disabled = currentModalIndex === currentFilteredExhibits.length - 1;
  }

  function navigateModal(direction) {
    const newIndex = currentModalIndex + direction;
    if (newIndex >= 0 && newIndex < currentFilteredExhibits.length) {
      currentModalIndex = newIndex;
      populateModalData(currentFilteredExhibits[currentModalIndex]);
    }
  }

  /* ------------------------------------------------------------------------
     7. COMPARATIVE FEATURE ENGINE
     ------------------------------------------------------------------------ */
  const compPairSelect = document.getElementById('compPairSelect');

  function renderComparison(pairKey) {
    const compData = COMPARISONS[pairKey];
    if (!compData) return;

    const leftExhibit = EXHIBITS.find(e => e.id === compData.leftId);
    const rightExhibit = EXHIBITS.find(e => e.id === compData.rightId);

    if (!leftExhibit || !rightExhibit) return;

    document.getElementById('compLeftTitle').textContent = leftExhibit.name;
    document.getElementById('compLeftPeriod').textContent = `${leftExhibit.periodName} (${leftExhibit.dateRange})`;
    document.getElementById('compLeftRegion').textContent = `${leftExhibit.region} India`;
    document.getElementById('compLeftMedium').textContent = leftExhibit.material;
    document.getElementById('compLeftPatron').textContent = leftExhibit.dynasty;
    document.getElementById('compLeftImg').innerHTML = `
      <img src="${leftExhibit.image}" alt="${leftExhibit.name}" onerror="this.onerror=null; this.src='${leftExhibit.fallbackOnline}';"/>
    `;

    document.getElementById('compRightTitle').textContent = rightExhibit.name;
    document.getElementById('compRightPeriod').textContent = `${rightExhibit.periodName} (${rightExhibit.dateRange})`;
    document.getElementById('compRightRegion').textContent = `${rightExhibit.region} India`;
    document.getElementById('compRightMedium').textContent = rightExhibit.material;
    document.getElementById('compRightPatron').textContent = rightExhibit.dynasty;
    document.getElementById('compRightImg').innerHTML = `
      <img src="${rightExhibit.image}" alt="${rightExhibit.name}" onerror="this.onerror=null; this.src='${rightExhibit.fallbackOnline}';"/>
    `;

    document.getElementById('compAnalysisMedium').textContent = compData.medium;
    document.getElementById('compAnalysisStyle').textContent = compData.style;
    document.getElementById('compAnalysisPurpose').textContent = compData.purpose;
  }

  /* ------------------------------------------------------------------------
     8. GEOGRAPHY INTERACTIVE REAL MAP ENGINE
     ------------------------------------------------------------------------ */
  const mapRegionGroups = document.querySelectorAll('.map-region-group');
  const mapChips = document.querySelectorAll('.map-chip-btn');
  const geoRegionName = document.getElementById('geoRegionName');
  const geoRegionDesc = document.getElementById('geoRegionDesc');
  const geoRegionMaterials = document.getElementById('geoRegionMaterials');
  const geoRegionCount = document.getElementById('geoRegionCount');
  const geoFilterBtn = document.getElementById('geoFilterBtn');
  const fallbackSvg = document.getElementById('fallbackSvgMap');
  const realMapEl = document.getElementById('realIndiaMap');

  const REGION_INFO = {
    South: {
      name: 'South India (Tamil Nadu, Karnataka, Kerala)',
      desc: 'Renowned for monolithic rock-cut shrines in Mahabalipuram, soaring Dravidian granite Vimana towers in Thanjavur, Panchaloha lost-wax Chola bronzes, and glittering gold leaf panels.',
      materials: 'Granite, Panchaloha Bronze, Teakwood, 22k Gold Foil, Mineral Murals',
      center: [11.1271, 78.6569],
      zoom: 6
    },
    North: {
      name: 'North India (Uttar Pradesh, Delhi, Kashmir)',
      desc: 'Cradle of Mauryan polished sandstone pillars, Sarnath Gupta classical Buddha sculptures, and opulent Mughal court miniature manuscript paintings.',
      materials: 'Chunar Sandstone, Marble, Opaque Gouache, Gold Leaf, Wasli Paper',
      center: [27.5, 78.5],
      zoom: 6
    },
    West: {
      name: 'West India (Indus Basin, Rajasthan, Maharashtra)',
      desc: 'Home to Indus Valley steatite seal carving, Ajanta cave wall murals, Ellora monolithic basalt excavations, and Mewar Rajput court miniatures.',
      materials: 'Steatite, Basalt Rock, Tempera Clay Plaster, Mineral Ochres',
      center: [21.5, 74.5],
      zoom: 6
    },
    Central: {
      name: 'Central India (Madhya Pradesh, Malwa)',
      desc: 'Famous for early Buddhist relief gateways at Sanchi, 6th-century Gupta epic stone carvings at Deogarh, and Nagara sandstone temples at Khajuraho.',
      materials: 'Sandstone, Brick, Monolithic Relief Masonry',
      center: [23.5, 78.0],
      zoom: 6
    },
    East: {
      name: 'East India (Bengal, Odisha, Assam)',
      desc: 'Characterized by indigenous folk scroll painting (*Patuas*), Terracotta temples of Bishnupur, Kalighat brushwork, and modern Bengal tempera revival.',
      materials: 'Terracotta Clay, Natural Mineral Earths, Tempera on Cloth',
      center: [23.5, 87.0],
      zoom: 6
    }
  };

  const MONUMENT_SITES = [
    {
      id: 'pancha-rathas',
      title: 'Pancha Rathas',
      region: 'South',
      coords: [12.6169, 80.1992],
      loc: 'Mamallapuram, Tamil Nadu',
      img: 'assets/pancha_rathas.jpg',
      period: 'c. 630 – 668 CE'
    },
    {
      id: 'chola-nataraja',
      title: 'Chola Bronze Nataraja',
      region: 'South',
      coords: [10.7828, 79.1318],
      loc: 'Thanjavur, Tamil Nadu',
      img: 'assets/chola_nataraja.jpg',
      period: 'c. 950 – 1100 CE'
    },
    {
      id: 'ajanta-padmapani',
      title: 'Ajanta Cave Murals',
      region: 'West',
      coords: [20.5523, 75.7004],
      loc: 'Aurangabad, Maharashtra',
      img: 'assets/ajanta_padmapani.jpg',
      period: 'c. 450 – 500 CE'
    },
    {
      id: 'ellora-kailasa',
      title: 'Kailasa Monolith',
      region: 'West',
      coords: [20.0268, 75.1777],
      loc: 'Ellora, Maharashtra',
      img: 'assets/ellora_kailasa.jpg',
      period: 'c. 756 – 773 CE'
    },
    {
      id: 'sanchi-stupa',
      title: 'Great Stupa & Toranas',
      region: 'Central',
      coords: [23.4792, 77.7397],
      loc: 'Sanchi, Madhya Pradesh',
      img: 'assets/sanchi_stupa.jpg',
      period: 'c. 3rd BCE – 1st CE'
    },
    {
      id: 'khajuraho-kandariya',
      title: 'Kandariya Mahadeva',
      region: 'Central',
      coords: [24.8518, 79.9197],
      loc: 'Khajuraho, Madhya Pradesh',
      img: 'assets/khajuraho_kandariya.jpg',
      period: 'c. 1025 – 1050 CE'
    },
    {
      id: 'sarnath-buddha',
      title: 'Sarnath Preaching Buddha',
      region: 'North',
      coords: [25.3811, 83.0214],
      loc: 'Sarnath, Uttar Pradesh',
      img: 'assets/sarnath_buddha.jpg',
      period: 'c. 475 CE'
    },
    {
      id: 'deogarh-vishnu',
      title: 'Dashavatara Temple',
      region: 'North',
      coords: [24.5400, 78.2500],
      loc: 'Deogarh, Uttar Pradesh',
      img: 'assets/deogarh_vishnu.jpg',
      period: 'c. 500 CE'
    },
    {
      id: 'jamini-roy',
      title: 'Jamini Roy Tempera',
      region: 'East',
      coords: [22.5726, 88.3639],
      loc: 'Kolkata, Bengal',
      img: 'assets/jamini_roy.jpg',
      period: 'c. 1940s – 1950s'
    },
    {
      id: 'mewar-mahabharata',
      title: 'Rajput Mahabharata Miniature',
      region: 'West',
      coords: [24.5854, 73.7125],
      loc: 'Udaipur, Rajasthan',
      img: 'assets/mewar_mahabharata.jpg',
      period: 'c. 1680 – 1698 CE'
    }
  ];

  let selectedMapRegion = 'South';
  let openStreetMap = null;
  const osmContainer = document.getElementById('openStreetMapContainer');
  const realGeoSvg = document.getElementById('realGeoSvgMap');

  function selectRegionOnMap(regionKey, panMap = true) {
    selectedMapRegion = regionKey;
    const info = REGION_INFO[regionKey] || REGION_INFO['South'];

    if (geoRegionName) geoRegionName.textContent = info.name;
    if (geoRegionDesc) geoRegionDesc.textContent = info.desc;
    if (geoRegionMaterials) geoRegionMaterials.textContent = info.materials;

    const count = EXHIBITS.filter(e => {
      if (regionKey === 'South') return e.region.includes('South');
      return e.region === regionKey;
    }).length;

    if (geoRegionCount) geoRegionCount.textContent = `Exhibits in this region: ${count}`;
    if (geoFilterBtn) geoFilterBtn.textContent = `Filter Timeline for ${regionKey} India`;

    mapChips.forEach(chip => {
      chip.classList.toggle('active', chip.dataset.region === regionKey);
    });

    mapRegionGroups.forEach(grp => {
      grp.classList.toggle('active-tn-highlight', grp.dataset.region === regionKey);
    });

    if (openStreetMap && panMap && info.center) {
      openStreetMap.flyTo(info.center, info.zoom, { duration: 1.2 });
    }
  }

  function initOpenStreetMap() {
    if (typeof L === 'undefined' || !osmContainer) {
      console.warn('Leaflet not loaded. Rendering vector map fallback.');
      if (realGeoSvg) realGeoSvg.style.display = 'block';
      if (osmContainer) osmContainer.style.display = 'none';
      return;
    }

    try {
      if (realGeoSvg) realGeoSvg.style.display = 'none';
      if (osmContainer) osmContainer.style.display = 'block';

      openStreetMap = L.map('openStreetMapContainer', {
        center: [21.5, 78.9],
        zoom: 5,
        minZoom: 4,
        maxZoom: 10,
        zoomControl: true
      });

      // Standard OpenStreetMap Tile Layer (100% Free, Zero API Key Required)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(openStreetMap);

      MONUMENT_SITES.forEach(site => {
        const marker = L.circleMarker(site.coords, {
          radius: site.region === 'South' ? 9 : 8,
          fillColor: site.region === 'South' ? '#1B4D3E' : '#C59B27',
          color: '#3D2712',
          weight: 2,
          opacity: 1,
          fillOpacity: 0.95
        }).addTo(openStreetMap);

        const popupContent = `
          <div class="map-popup-card">
            <img src="${site.img}" alt="${site.title}" />
            <div class="map-popup-title">${site.title}</div>
            <div class="map-popup-period">${site.period}</div>
            <button class="map-popup-btn" onclick="openExhibitFromMap('${site.id}')">Explore Masterpiece</button>
          </div>
        `;

        marker.bindPopup(popupContent, { className: 'museum-map-popup' });
      });

      setTimeout(() => {
        openStreetMap.invalidateSize();
      }, 400);
    } catch (err) {
      console.error('Error initializing OpenStreetMap:', err);
      if (realGeoSvg) realGeoSvg.style.display = 'block';
      if (osmContainer) osmContainer.style.display = 'none';
    }
  }

  window.openExhibitFromMap = function(exhibitId) {
    const exhibit = EXHIBITS.find(e => e.id === exhibitId);
    if (exhibit) {
      openModal(exhibit.id);
    }
  };

  // Site Monument Pin Click Handlers (Directly Opens Exhibit Modal)
  const sitePinGroups = document.querySelectorAll('.site-pin-group');
  sitePinGroups.forEach(pin => {
    pin.addEventListener('click', (e) => {
      e.stopPropagation();
      const exhibitId = pin.dataset.exhibit;
      if (exhibitId) {
        openModal(exhibitId);
      }
    });
  });

  mapRegionGroups.forEach(grp => {
    grp.addEventListener('click', () => {
      const reg = grp.dataset.region;
      selectRegionOnMap(reg);
    });
  });

  mapChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const reg = chip.dataset.region;
      selectRegionOnMap(reg);
    });
  });

  if (geoFilterBtn) {
    geoFilterBtn.addEventListener('click', () => {
      regionFilter.value = selectedMapRegion;
      activeFilters.region = selectedMapRegion;
      applyFilters();
      document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
    });
  }

  initOpenStreetMap();
  selectRegionOnMap('South', false);

  /* ------------------------------------------------------------------------
     9. EVENT LISTENERS & INITIALIZATION
     ------------------------------------------------------------------------ */

  searchInput.addEventListener('input', (e) => {
    activeFilters.search = e.target.value.trim();
    searchClearBtn.style.display = activeFilters.search ? 'block' : 'none';
    applyFilters();
  });

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    activeFilters.search = '';
    searchClearBtn.style.display = 'none';
    applyFilters();
  });

  tnQuickFilter.addEventListener('click', () => {
    const isCurrentlyActive = tnQuickFilter.dataset.active === 'true';
    activeFilters.tamilNadu = !isCurrentlyActive;
    tnQuickFilter.dataset.active = (!isCurrentlyActive).toString();
    applyFilters();
  });

  mbQuickFilter.addEventListener('click', () => {
    const isCurrentlyActive = mbQuickFilter.dataset.active === 'true';
    activeFilters.mahabharata = !isCurrentlyActive;
    activeFilters.mbKey = null;
    mbQuickFilter.dataset.active = (!isCurrentlyActive).toString();
    applyFilters();
  });

  periodFilter.addEventListener('change', (e) => {
    activeFilters.period = e.target.value;
    applyFilters();
  });

  regionFilter.addEventListener('change', (e) => {
    activeFilters.region = e.target.value;
    applyFilters();
  });

  artFormFilter.addEventListener('change', (e) => {
    activeFilters.artForm = e.target.value;
    applyFilters();
  });

  themeFilter.addEventListener('change', (e) => {
    activeFilters.theme = e.target.value;
    applyFilters();
  });

  resetAllFilters.addEventListener('click', () => {
    activeFilters = {
      search: '',
      period: 'all',
      region: 'all',
      artForm: 'all',
      theme: 'all',
      tamilNadu: false,
      mahabharata: false,
      mbKey: null
    };

    searchInput.value = '';
    periodFilter.value = 'all';
    regionFilter.value = 'all';
    artFormFilter.value = 'all';
    themeFilter.value = 'all';
    tnQuickFilter.dataset.active = 'false';
    mbQuickFilter.dataset.active = 'false';
    searchClearBtn.style.display = 'none';

    applyFilters();
  });

  document.querySelectorAll('.tn-flow-node').forEach(node => {
    node.addEventListener('click', () => {
      const exhibitId = node.dataset.exhibitId;
      openModal(exhibitId);
    });
  });

  document.getElementById('filterTNOnlyBtn').addEventListener('click', () => {
    activeFilters.tamilNadu = true;
    tnQuickFilter.dataset.active = 'true';
    applyFilters();
    document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelectorAll('.mb-card').forEach(card => {
    card.addEventListener('click', () => {
      const mbKey = card.dataset.mbKey;
      activeFilters.mahabharata = true;
      activeFilters.mbKey = mbKey;
      mbQuickFilter.dataset.active = 'true';
      applyFilters();
      document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.getElementById('filterMBOnlyBtn').addEventListener('click', () => {
    activeFilters.mahabharata = true;
    activeFilters.mbKey = null;
    mbQuickFilter.dataset.active = 'true';
    applyFilters();
    document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelectorAll('.theme-card').forEach(card => {
    card.addEventListener('click', () => {
      const themeName = card.dataset.themeName;
      themeFilter.value = themeName;
      activeFilters.theme = themeName;
      applyFilters();
      document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
    });
  });

  compPairSelect.addEventListener('change', (e) => {
    renderComparison(e.target.value);
  });

  modalCloseBtn.addEventListener('click', closeModal);
  modalPrevBtn.addEventListener('click', () => navigateModal(-1));
  modalNextBtn.addEventListener('click', () => navigateModal(1));

  exhibitModalOverlay.addEventListener('click', (e) => {
    if (e.target === exhibitModalOverlay) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (!exhibitModalOverlay.classList.contains('active')) return;

    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigateModal(-1);
    if (e.key === 'ArrowRight') navigateModal(1);
  });

  document.getElementById('replayTimelineBtn').addEventListener('click', () => {
    document.getElementById('resetAllFilters').click();
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    const timelineEl = document.getElementById('timeline');
    const rect = timelineEl.getBoundingClientRect();
    const totalHeight = timelineEl.offsetHeight;
    const scrollPos = window.innerHeight - rect.top;
    let progress = (scrollPos / totalHeight) * 100;
    progress = Math.max(0, Math.min(100, progress));
    timelineProgressBar.style.width = `${progress}%`;
  });

  /* ------------------------------------------------------------------------
     10. TIMELINE STORY SLIDER ENGINE (TIMELINEJS STYLE)
     ------------------------------------------------------------------------ */
  let currentTjsIndex = 0;

  const ERA_COLOR_MAP = {
    'indus-valley': '#8C3A1D',
    'mauryan-buddhist': '#7A1C1C',
    'gupta-classical': '#B8860B',
    'early-medieval-south': '#1B4D3E',
    'medieval-temple': '#A84524',
    'mughal-regional': '#1C3F60',
    'colonial-modern': '#4A2E19',
    'modern-contemporary': '#3B2D54'
  };

  const tjsSliderViewBtn = document.getElementById('tjsSliderViewBtn');
  const tjsGridViewBtn = document.getElementById('tjsGridViewBtn');
  const timelineSliderContainer = document.getElementById('timelineSliderContainer');
  const tjsSlideContent = document.getElementById('tjsSlideContent');
  const tjsCurrentIndex = document.getElementById('tjsCurrentIndex');
  const tjsTotalCount = document.getElementById('tjsTotalCount');
  const tjsPrevBtn = document.getElementById('tjsPrevBtn');
  const tjsNextBtn = document.getElementById('tjsNextBtn');
  const tjsAxisTrack = document.getElementById('tjsAxisTrack');

  function renderTjsSlide(index) {
    if (EXHIBITS.length === 0) return;
    if (index < 0) index = 0;
    if (index >= EXHIBITS.length) index = EXHIBITS.length - 1;

    currentTjsIndex = index;
    const exhibit = EXHIBITS[currentTjsIndex];
    const eraColor = ERA_COLOR_MAP[exhibit.periodId] || '#A84524';

    if (tjsCurrentIndex) tjsCurrentIndex.textContent = currentTjsIndex + 1;
    if (tjsTotalCount) tjsTotalCount.textContent = EXHIBITS.length;

    if (tjsSlideContent) {
      tjsSlideContent.innerHTML = `
        <div class="tjs-slide-layout">
          <div class="tjs-slide-media" onclick="openExhibitFromMap('${exhibit.id}')" title="Click to inspect museum exhibit panel">
            <img src="${exhibit.image}" alt="${exhibit.name}" onerror="this.onerror=null; this.src='${exhibit.fallbackOnline}';"/>
            <div class="tjs-slide-caption">
              <span>❖ ${exhibit.dynasty || exhibit.periodName}</span>
              <span style="margin-left: auto;">${exhibit.location}</span>
            </div>
          </div>
          <div class="tjs-slide-info">
            <div class="tjs-era-badge" style="background: ${eraColor};">
              <span>${exhibit.periodName.toUpperCase()}</span>
              <span style="font-weight: 400; opacity: 0.9;">• ${exhibit.region.toUpperCase()} INDIA</span>
            </div>
            <h3 class="tjs-slide-title">${exhibit.name}</h3>
            <div class="tjs-slide-date">${exhibit.dateRange} • ${exhibit.artForm}</div>
            <p class="tjs-slide-desc">${exhibit.description}</p>
            <div class="tjs-feature-bullets">
              ${exhibit.features.map(f => `
                <div class="tjs-bullet-item">
                  <span class="dot" style="background: ${eraColor};"></span>
                  <span>${f}</span>
                </div>
              `).join('')}
            </div>
            <div style="margin-top: 1.5rem; display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
              <button onclick="openExhibitFromMap('${exhibit.id}')" class="btn-primary" style="padding: 0.5rem 1.2rem; font-size: 0.85rem;">❖ View Masterpiece Details</button>
              ${exhibit.isTamilNadu ? '<span class="card-badge tn-badge" style="position:static;">TAMIL NADU</span>' : ''}
              ${exhibit.isMahabharata ? '<span class="card-badge mb-badge" style="position:static;">MAHABHARATA</span>' : ''}
            </div>
          </div>
        </div>
      `;
    }

    if (tjsPrevBtn) tjsPrevBtn.disabled = currentTjsIndex === 0;
    if (tjsNextBtn) tjsNextBtn.disabled = currentTjsIndex === EXHIBITS.length - 1;

    // Highlight active pin on timeline scrubber axis
    if (tjsAxisTrack) {
      const pins = tjsAxisTrack.querySelectorAll('.tjs-flag-pin');
      pins.forEach((pin, i) => {
        pin.classList.toggle('active', i === currentTjsIndex);
      });

      // Auto-scroll track to bring active pin into view
      const activePin = pins[currentTjsIndex];
      if (activePin) {
        activePin.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }

  function renderTjsAxis() {
    if (!tjsAxisTrack) return;
    tjsAxisTrack.innerHTML = '';

    let globalExhibitIndex = 0;

    ERAS.forEach(era => {
      const eraExhibits = EXHIBITS.filter(ex => ex.periodId === era.id);
      if (eraExhibits.length === 0) return;

      const eraColor = ERA_COLOR_MAP[era.id] || '#A84524';

      // Create Era Pill Shape
      const eraPill = document.createElement('div');
      eraPill.className = 'tjs-era-pill';
      eraPill.style.background = eraColor;
      eraPill.textContent = era.name;

      const firstExhibitIndexOfEra = globalExhibitIndex;
      eraPill.addEventListener('click', () => {
        renderTjsSlide(firstExhibitIndexOfEra);
      });

      tjsAxisTrack.appendChild(eraPill);

      // Create Flag Pins for each exhibit in this era
      eraExhibits.forEach(exhibit => {
        const pinIndex = globalExhibitIndex;
        const pin = document.createElement('div');
        pin.className = 'tjs-flag-pin';
        pin.title = `${exhibit.name} (${exhibit.dateRange})`;

        pin.addEventListener('click', () => {
          renderTjsSlide(pinIndex);
        });

        tjsAxisTrack.appendChild(pin);
        globalExhibitIndex++;
      });
    });
  }

  // View Switcher Event Handlers
  if (tjsSliderViewBtn && tjsGridViewBtn) {
    tjsSliderViewBtn.addEventListener('click', () => {
      tjsSliderViewBtn.classList.add('active');
      tjsGridViewBtn.classList.remove('active');
      if (timelineSliderContainer) timelineSliderContainer.style.display = 'block';
      if (timelineErasWrapper) timelineErasWrapper.style.display = 'none';
    });

    tjsGridViewBtn.addEventListener('click', () => {
      tjsGridViewBtn.classList.add('active');
      tjsSliderViewBtn.classList.remove('active');
      if (timelineErasWrapper) timelineErasWrapper.style.display = 'block';
      if (timelineSliderContainer) timelineSliderContainer.style.display = 'none';
    });
  }

  if (tjsPrevBtn) {
    tjsPrevBtn.addEventListener('click', () => renderTjsSlide(currentTjsIndex - 1));
  }
  if (tjsNextBtn) {
    tjsNextBtn.addEventListener('click', () => renderTjsSlide(currentTjsIndex + 1));
  }

  // Keyboard navigation for Timeline Slider when visible
  window.addEventListener('keydown', (e) => {
    // Only navigate if exhibit modal is NOT open
    if (exhibitModalOverlay && exhibitModalOverlay.classList.contains('active')) return;
    if (timelineSliderContainer && timelineSliderContainer.style.display === 'none') return;

    if (e.key === 'ArrowLeft') {
      renderTjsSlide(currentTjsIndex - 1);
    } else if (e.key === 'ArrowRight') {
      renderTjsSlide(currentTjsIndex + 1);
    }
  });

  // INITIAL RENDER
  renderTimeline();
  selectRegionOnMap('South');
  renderComparison('pair1');
  renderTjsAxis();
  renderTjsSlide(0);

});

