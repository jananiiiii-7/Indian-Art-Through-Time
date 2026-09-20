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
  let activeFilters = { search: '' };
  let currentModalIndex = 0;

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

  // DOM Handles
  const searchInput = document.getElementById('searchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const filterStatusText = document.getElementById('filterStatusText');
  const factsGridContainer = document.getElementById('factsGridContainer');

  // Modal Handles
  const exhibitModalOverlay = document.getElementById('exhibitModalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalPrevBtn = document.getElementById('modalPrevBtn');
  const modalNextBtn = document.getElementById('modalNextBtn');
  const modalCounter = document.getElementById('modalCounter');

  /* ------------------------------------------------------------------------
     5. RENDER FACTS GRID FUNCTION
     ------------------------------------------------------------------------ */
  function renderFactsGrid(filteredList = currentFilteredExhibits) {
    if (!factsGridContainer) return;
    factsGridContainer.innerHTML = '';

    if (filteredList.length === 0) {
      factsGridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; background: #FAF6EF; border-radius: 8px; border: 1px dashed #C69A38;">
          <h3 style="font-family: var(--font-title); font-size: 1.4rem; color: #A84524; margin-bottom: 0.5rem;">No Fact Cards Match Your Search</h3>
          <p style="color: #6E5D4F;">Try typing keywords like "bronze", "ashoka", "tamil nadu", "mahabharata", "gold", or "sandstone".</p>
        </div>
      `;
      return;
    }

    filteredList.forEach(exhibit => {
      const card = document.createElement('div');
      card.className = 'exhibit-card';
      card.dataset.exhibitId = exhibit.id;

      card.innerHTML = `
        <div class="card-img-wrapper" style="height: 220px;">
          <img src="${exhibit.image}" alt="${exhibit.name}" loading="lazy" onerror="this.onerror=null; this.src='${exhibit.fallbackOnline}';"/>
          <div class="card-badges-overlay">
            <span class="card-badge period-badge" style="background: ${ERA_COLOR_MAP[exhibit.periodId] || '#A84524'}; position:static;">${exhibit.periodName}</span>
          </div>
        </div>
        <div class="card-content">
          <span class="card-art-form">${exhibit.artForm.toUpperCase()} • ${exhibit.region.toUpperCase()} INDIA</span>
          <h4 class="card-title" style="font-size: 1.15rem; margin: 0.3rem 0; color: #3D2712;">${exhibit.name}</h4>
          <div class="card-region-date" style="color: var(--color-terracotta); font-weight: 600; font-size: 0.85rem;">${exhibit.dateRange}</div>
          <p class="card-snippet" style="font-size: 0.85rem; line-height: 1.45; margin: 0.5rem 0; color: #5A4839;">${exhibit.historicalContext || exhibit.description}</p>
          <div class="card-footer" style="margin-top: auto; padding-top: 0.5rem; border-top: 1px solid var(--border-light); display: flex; justify-content: space-between; align-items: center;">
            <span class="card-material" style="font-size: 0.8rem; color: var(--color-ink-light);">${exhibit.material}</span>
            <span class="card-explore-btn" style="font-size: 0.8rem; font-weight: 700; color: var(--color-gold-dark);">Inspect Facts →</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openModal(exhibit.id);
      });

      factsGridContainer.appendChild(card);
    });
  }

  function applyFilters() {
    const q = activeFilters.search.toLowerCase();
    currentFilteredExhibits = EXHIBITS.filter(ex => {
      if (!q) return true;
      return (
        ex.name.toLowerCase().includes(q) ||
        ex.periodName.toLowerCase().includes(q) ||
        ex.region.toLowerCase().includes(q) ||
        ex.material.toLowerCase().includes(q) ||
        ex.dynasty.toLowerCase().includes(q) ||
        ex.description.toLowerCase().includes(q) ||
        ex.historicalContext.toLowerCase().includes(q) ||
        ex.didYouKnow.toLowerCase().includes(q)
      );
    });

    if (filterStatusText) {
      filterStatusText.textContent = `Showing ${currentFilteredExhibits.length} of ${EXHIBITS.length} masterpiece fact cards`;
    }

    renderFactsGrid(currentFilteredExhibits);

    if (currentFilteredExhibits.length > 0) {
      const firstId = currentFilteredExhibits[0].id;
      const matchIdx = EXHIBITS.findIndex(e => e.id === firstId);
      if (matchIdx !== -1) renderTjsSlide(matchIdx);
    }
  }

  /* ------------------------------------------------------------------------
     6. EXHIBIT MODAL ENGINE (DETAILED HISTORICAL FACTS)
     ------------------------------------------------------------------------ */
  function openModal(exhibitId) {
    const exhibit = EXHIBITS.find(e => e.id === exhibitId);
    if (!exhibit) return;

    const filteredIndex = currentFilteredExhibits.findIndex(e => e.id === exhibitId);
    currentModalIndex = filteredIndex !== -1 ? filteredIndex : 0;

    populateModalData(exhibit);

    if (exhibitModalOverlay) {
      exhibitModalOverlay.classList.add('active');
      exhibitModalOverlay.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (exhibitModalOverlay) {
      exhibitModalOverlay.classList.remove('active');
      exhibitModalOverlay.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
  }

  function populateModalData(exhibit) {
    const el = id => document.getElementById(id);

    if (el('modalTitle')) el('modalTitle').textContent = exhibit.name;
    if (el('modalSubSpecs')) el('modalSubSpecs').textContent = `${exhibit.dateRange} • ${exhibit.location}`;

    if (el('modalPeriodBadge')) el('modalPeriodBadge').textContent = exhibit.periodName;
    if (el('modalTnBadge')) el('modalTnBadge').style.display = exhibit.isTamilNadu ? 'inline-block' : 'none';
    if (el('modalMbBadge')) el('modalMbBadge').style.display = exhibit.isMahabharata ? 'inline-block' : 'none';

    if (el('modalArtForm')) el('modalArtForm').textContent = exhibit.artForm;
    if (el('modalMaterial')) el('modalMaterial').textContent = exhibit.material;
    if (el('modalTechnique')) el('modalTechnique').textContent = exhibit.technique;
    if (el('modalDynasty')) el('modalDynasty').textContent = exhibit.dynasty;
    if (el('modalLocation')) el('modalLocation').textContent = exhibit.location;

    if (el('modalHistoricalContext')) el('modalHistoricalContext').textContent = exhibit.historicalContext;
    if (el('modalDescription')) el('modalDescription').textContent = exhibit.description;
    if (el('modalSignificance')) el('modalSignificance').textContent = exhibit.significance;

    const featuresList = el('modalFeaturesList');
    if (featuresList) {
      featuresList.innerHTML = '';
      exhibit.features.forEach(feat => {
        const li = document.createElement('li');
        li.textContent = feat;
        featuresList.appendChild(li);
      });
    }

    const lookCloserGrid = el('modalLookCloserGrid');
    if (lookCloserGrid) {
      lookCloserGrid.innerHTML = '';
      exhibit.lookCloser.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'look-item';
        div.innerHTML = `<strong>Detail ${idx + 1}:</strong> ${item}`;
        lookCloserGrid.appendChild(div);
      });
    }

    if (el('modalFactText')) el('modalFactText').textContent = exhibit.didYouKnow;
    if (el('modalSourceCredit')) el('modalSourceCredit').textContent = `Source Credit: ${exhibit.source}`;

    const imgContainer = el('modalImgContainer');
    if (imgContainer) {
      imgContainer.innerHTML = `
        <img src="${exhibit.image}" alt="${exhibit.name}" onerror="this.onerror=null; this.src='${exhibit.fallbackOnline}';"/>
      `;
    }

    if (modalCounter) modalCounter.textContent = `Exhibit ${currentModalIndex + 1} of ${currentFilteredExhibits.length}`;
    if (modalPrevBtn) modalPrevBtn.disabled = currentModalIndex === 0;
    if (modalNextBtn) modalNextBtn.disabled = currentModalIndex === currentFilteredExhibits.length - 1;
  }

  function navigateModal(direction) {
    const newIndex = currentModalIndex + direction;
    if (newIndex >= 0 && newIndex < currentFilteredExhibits.length) {
      currentModalIndex = newIndex;
      populateModalData(currentFilteredExhibits[currentModalIndex]);
    }
  }

  // Expose openModal and closeModal globally to window scope for inline onclick handlers
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.openExhibitFromMap = function(exhibitId) {
    openModal(exhibitId);
  };

  // Delegated click handler for TimelineJS inspect buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button, .btn-primary, .tjs-inspect-btn');
    if (!btn) return;

    const onClickAttr = btn.getAttribute('onclick');
    if (onClickAttr && onClickAttr.includes('openModal')) {
      const match = onClickAttr.match(/openModal\(['"]([^'"]+)['"]\)/);
      if (match && match[1]) {
        e.preventDefault();
        openModal(match[1]);
      }
    }
  });


  const ERA_BG_MAP = {
    'indus-valley': '#4A2616',         // Warm Terracotta Earth
    'mauryan-buddhist': '#4D1818',     // Ashokan Crimson Red
    'gupta-classical': '#593E0E',      // Classical Gold Ochre
    'early-medieval-south': '#123829', // Granite Emerald Green
    'medieval-temple': '#5C2814',      // Chola Temple Sandstone
    'mughal-regional': '#122942',      // Lapis Lazuli Royal Blue
    'colonial-modern': '#382314',      // Mahogany Sepia
    'modern-contemporary': '#261838'   // Indigo Violet
  };

  const timelineData = {
    title: {
      media: {
        url: "assets/dancing_girl.jpg",
        caption: "Mohenjo-daro Bronze Figurine (c. 2300 BCE)",
        credit: "National Museum, New Delhi"
      },
      text: {
        headline: "INDIAN ART THROUGH TIME",
        text: "5,000 Years of Masterpieces, Civilizations, and Historical Facts across 8 Eras in TimelineJS."
      },
      background: {
        color: "#2E1C11"
      }
    },
    events: EXHIBITS.map(exhibit => {
      let year = 2000;
      if (exhibit.id === 'dancing-girl') year = -2300;
      else if (exhibit.id === 'indus-seal') year = -2500;
      else if (exhibit.id === 'priest-king') year = -2200;
      else if (exhibit.id === 'lion-capital') year = -250;
      else if (exhibit.id === 'sanchi-stupa') year = -200;
      else if (exhibit.id === 'sarnath-buddha') year = 475;
      else if (exhibit.id === 'ajanta-padmapani') year = 480;
      else if (exhibit.id === 'deogarh-vishnu') year = 525;
      else if (exhibit.id === 'pancha-rathas') year = 640;
      else if (exhibit.id === 'arjunas-penance') year = 650;
      else if (exhibit.id === 'shore-temple') year = 710;
      else if (exhibit.id === 'ellora-kailasa') year = 760;
      else if (exhibit.id === 'brihadisvara-temple') year = 1010;
      else if (exhibit.id === 'chola-nataraja') year = 1025;
      else if (exhibit.id === 'khajuraho-kandariya') year = 1040;
      else if (exhibit.id === 'mughal-razmnama') year = 1595;
      else if (exhibit.id === 'mewar-mahabharata') year = 1690;
      else if (exhibit.id === 'thanjavur-painting') year = 1820;
      else if (exhibit.id === 'company-painting') year = 1835;
      else if (exhibit.id === 'raja-ravi-varma') year = 1900;
      else if (exhibit.id === 'amrita-shergil') year = 1937;
      else if (exhibit.id === 'jamini-roy') year = 1945;

      const bgColor = ERA_BG_MAP[exhibit.periodId] || '#3D2712';

      return {
        media: {
          url: exhibit.image,
          caption: `${exhibit.name} (${exhibit.dateRange})`,
          credit: exhibit.source || exhibit.location
        },
        start_date: {
          year: String(year)
        },
        text: {
          headline: exhibit.name,
          text: `
            <div style="font-family: var(--font-body); color: #F7EFE2; line-height: 1.5;">
              <p style="color: #F7D070; font-weight: 700; margin-bottom: 0.3rem;">${exhibit.periodName} • ${exhibit.dateRange}</p>
              <p style="font-size: 0.9rem; color: #EADBC3; margin-bottom: 0.8rem;"><strong>Location & Medium:</strong> ${exhibit.location} | ${exhibit.material}</p>
              
              <p><strong>Historical Context:</strong> ${exhibit.historicalContext}</p>
              <p><strong>Description:</strong> ${exhibit.description}</p>
              
              <ul style="padding-left: 1.2rem; margin: 0.6rem 0; font-size: 0.9rem;">
                ${exhibit.features.map(f => `<li>${f}</li>`).join('')}
              </ul>
              
              <div style="background: rgba(255, 255, 255, 0.12); padding: 0.6rem 0.8rem; border-left: 3px solid #F7D070; margin-top: 0.8rem; border-radius: 4px;">
                <strong style="color: #F7D070; font-size: 0.85rem;">DID YOU KNOW FACT?</strong>
                <p style="margin: 0.2rem 0 0 0; font-size: 0.88rem; color: #FFF;">${exhibit.didYouKnow}</p>
              </div>

              <div style="margin-top: 0.85rem;">
                <button onclick="openModal('${exhibit.id}')" class="tjs-inspect-btn" style="background: #C59B27; color: #FFF; border: none; padding: 0.45rem 1rem; font-size: 0.82rem; font-family: var(--font-title); font-weight: 700; border-radius: 4px; cursor: pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.3);">❖ Inspect All Facts</button>
              </div>
            </div>
          `
        },
        group: exhibit.periodName,
        background: {
          color: bgColor
        }
      };
    })
  };


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
          <div class="tjs-slide-media" onclick="openModal('${exhibit.id}')" title="Click to view full historical facts panel">
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
            <div class="tjs-slide-date">${exhibit.dateRange} • ${exhibit.artForm} (${exhibit.material})</div>
            
            <p class="tjs-slide-desc" style="font-size: 0.95rem; line-height: 1.5; color: #3D2712;"><strong>Historical Context:</strong> ${exhibit.historicalContext || exhibit.description}</p>
            
            <div class="tjs-feature-bullets">
              ${exhibit.features.map(f => `
                <div class="tjs-bullet-item">
                  <span class="dot" style="background: ${eraColor};"></span>
                  <span>${f}</span>
                </div>
              `).join('')}
            </div>

            ${exhibit.didYouKnow ? `
              <div class="modal-fact-box" style="margin-top: 1rem; padding: 0.75rem 1rem;">
                <div class="fact-content" style="font-size: 0.85rem;">
                  <strong style="color: #A84524; font-size: 0.8rem;">DID YOU KNOW FACT?</strong>
                  <p style="margin: 0.2rem 0 0 0; color: #3D2712;">${exhibit.didYouKnow}</p>
                </div>
              </div>
            ` : ''}

            <div style="margin-top: 1.25rem; display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
              <button onclick="openModal('${exhibit.id}')" class="btn-primary" style="padding: 0.45rem 1.1rem; font-size: 0.82rem;">❖ Inspect All Facts</button>
              ${exhibit.isTamilNadu ? '<span class="card-badge tn-badge" style="position:static;">TAMIL NADU</span>' : ''}
              ${exhibit.isMahabharata ? '<span class="card-badge mb-badge" style="position:static;">MAHABHARATA</span>' : ''}
            </div>
          </div>
        </div>
      `;
    }

    if (tjsPrevBtn) tjsPrevBtn.disabled = currentTjsIndex === 0;
    if (tjsNextBtn) tjsNextBtn.disabled = currentTjsIndex === EXHIBITS.length - 1;

    if (tjsAxisTrack) {
      const pins = tjsAxisTrack.querySelectorAll('.tjs-flag-pin');
      pins.forEach((pin, i) => {
        pin.classList.toggle('active', i === currentTjsIndex);
      });

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

      const eraPill = document.createElement('div');
      eraPill.className = 'tjs-era-pill';
      eraPill.style.background = eraColor;
      eraPill.textContent = era.name;

      const firstExhibitIndexOfEra = globalExhibitIndex;
      eraPill.addEventListener('click', () => {
        renderTjsSlide(firstExhibitIndexOfEra);
      });

      tjsAxisTrack.appendChild(eraPill);

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

  function initTimelineJS() {
    const embedEl = document.getElementById('timeline-embed');

    if (typeof TL !== 'undefined' && embedEl) {
      try {
        window.timeline = new TL.Timeline('timeline-embed', timelineData, {
          hash_bookmark: true,
          initial_zoom: 2,
          scale_factor: 2
        });
      } catch (err) {
        console.error('TimelineJS Init Error:', err);
        if (timelineSliderContainer) timelineSliderContainer.style.display = 'block';
        renderTjsAxis();
        renderTjsSlide(0);
      }
    } else {
      if (timelineSliderContainer) timelineSliderContainer.style.display = 'block';
      renderTjsAxis();
      renderTjsSlide(0);
    }
  }

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeFilters.search = e.target.value.trim();
      if (searchClearBtn) searchClearBtn.style.display = activeFilters.search ? 'block' : 'none';
      applyFilters();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      activeFilters.search = '';
      searchClearBtn.style.display = 'none';
      applyFilters();
    });
  }

  if (tjsPrevBtn) {
    tjsPrevBtn.addEventListener('click', () => renderTjsSlide(currentTjsIndex - 1));
  }
  if (tjsNextBtn) {
    tjsNextBtn.addEventListener('click', () => renderTjsSlide(currentTjsIndex + 1));
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalPrevBtn) modalPrevBtn.addEventListener('click', () => navigateModal(-1));
  if (modalNextBtn) modalNextBtn.addEventListener('click', () => navigateModal(1));

  if (exhibitModalOverlay) {
    exhibitModalOverlay.addEventListener('click', (e) => {
      if (e.target === exhibitModalOverlay) closeModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (exhibitModalOverlay && exhibitModalOverlay.classList.contains('active')) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') navigateModal(-1);
      if (e.key === 'ArrowRight') navigateModal(1);
      return;
    }

    if (e.key === 'ArrowLeft') {
      renderTjsSlide(currentTjsIndex - 1);
    } else if (e.key === 'ArrowRight') {
      renderTjsSlide(currentTjsIndex + 1);
    }
  });

  // INITIAL RENDER
  initTimelineJS();
  renderFactsGrid();

});



