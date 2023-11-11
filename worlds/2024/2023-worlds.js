const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Vance Kelley',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/box-of-disaster.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crystal-cave.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia-mirage-step.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 10,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/giratina-origin.png',
    sprite2: '../../assets/sprites/comfey.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dionsius Lee',
    flag: '../../assets/flags/singapore.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Victor Garcia Montes',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Shoichi Saito',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Pang Kai Hing',
    flag: '../../assets/flags/hong-kong.png',
    sprite1: '../../assets/sprites/giratina-origin.png',
    sprite2: '../../assets/sprites/comfey.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Cyrus Davis',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/chien-pao.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/articuno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 10,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Brent Tonisson',
    flag: '../../assets/flags/australia.png',
    sprite2: '../../assets/sprites/gardevoir.png',
    sprite1: '../../assets/sprites/blank.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 12,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/inteleon-vmax.png',
    sprite2: '../../assets/sprites/urshifu-rapid-strike-gmax.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/octillery.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/remoraid.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/korrinas-focus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giacomo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-retrieval-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 6,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/rapid-strike-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Karel Maertens',
    flag: '../../assets/flags/belgium.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Hui Yuan Huang',
    flag: '../../assets/flags/taiwan.png',
    sprite1: '../../assets/sprites/chien-pao.png',
    sprite2: '../../assets/sprites/baxcalibur.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Shinnosuke Sato',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Akira Sato',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Konsta Kallama',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Raz Wolpe',
    flag: '../../assets/flags/isreal.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Masataka Hirano',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yerco Valencia',
    flag: '../../assets/flags/chile.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Jamie Frankland',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/giratina-origin.png',
    sprite2: '../../assets/sprites/comfey.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andrew Mahone',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/miraidon.png',
    sprite2: '../../assets/sprites/flaaffy.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/miraidon-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flaaffy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mareep60.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raichu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zeraora-battle-claw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arven.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elctric-generator.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bravery-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 14,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Daichi Shimada',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Bastian Silva',
    flag: '../../assets/flags/chile.png',
    sprite1: '../../assets/sprites/chien-pao.png',
    sprite2: '../../assets/sprites/baxcalibur.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Miłosz Dyrlica',
    flag: '../../assets/flags/poland.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bravery-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Cameron Shenoy',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/feather-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cleansing-gloves.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Fabio Spanò',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/goodra-hisui.png',
    sprite2: '../../assets/sprites/comfey.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zamazenta.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokegear30-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Pedro Pertusi',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Alex Krekeler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/inteleon-vmax.png',
    sprite2: '../../assets/sprites/urshifu-rapid-strike-gmax.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/octillery.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/remoraid.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/korrinas-focus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giacomo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-retrieval-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 6,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/rapid-strike-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sejun Park',
    flag: '../../assets/flags/korea.png',
    sprite1: '../../assets/sprites/miraidon.png',
    sprite2: '../../assets/sprites/flaaffy.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ciaran Farah',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/chien-pao.png',
    sprite2: '../../assets/sprites/baxcalibur.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/baxcalibur.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/frigibax57.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/frigibax-chilly.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/superior-energy-retrieval.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 9,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Shuto Kogawa',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/chien-pao.png',
    sprite2: '../../assets/sprites/baxcalibur.png',
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jack Moore',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Akihiro Urata',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/giratina-origin.png',
    sprite2: '../../assets/sprites/comfey.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Xander Pero',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cleansing-gloves.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Tomu Mizutani',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/arceus.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Namhyeok Koo',
    flag: '../../assets/flags/korea.png',
    sprite1: '../../assets/sprites/giratina-origin.png',
    sprite2: '../../assets/sprites/comfey.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Piotr Orleański',
    flag: '../../assets/flags/poland.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Gabor Van Meenen',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/miraidon.png',
    sprite2: '../../assets/sprites/regieliki-vmax.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/miraidon-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-vmax.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elctric-generator.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switching-cups.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/beach-court.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 14,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Isaiah Bradner',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yuta Mori',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Hiroaki Isono',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Su Chia-Hsing',
    flag: '../../assets/flags/taiwan.png',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/aggron-vmax.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yu Shirokuma',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Matthew Burris',
    flag: '../../assets/flags/australia.png',
    sprite2: '../../assets/sprites/gardevoir.png',
    sprite1: '../../assets/sprites/blank.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 12,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Javier Chelmes',
    flag: '../../assets/flags/chile.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Mateusz Łaszkiewicz',
    flag: '../../assets/flags/poland.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bravery-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Ghe Nawon',
    flag: '../../assets/flags/korea.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Jeremy Evans',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/great-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Nicholas Moffitt',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Lucas Matheus',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Fabrizio Inga Silva',
    flag: '../../assets/flags/peru.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kaito Kimura',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sander Wojcik',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/vulpix-alola.png',
    sprite2: '../../assets/sprites/yveltal.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/vulpix-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/vulpix-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/espeon-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/espeon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-astr.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/diancie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/luxray-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bouffalant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mimikyu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/penny.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flannery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crushing-hammer.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bravery-charm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moon-sun-badge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stormy-mountain.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Bryan de Vries',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/giratina-origin.png',
    sprite2: '../../assets/sprites/comfey.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jonathan Lanciano',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Moeen Mungalee',
    flag: '../../assets/flags/south-africa.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dyatmika Paramaanindya',
    flag: '../../assets/flags/indonesia.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jory Koot',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/chien-pao.png',
    sprite2: '../../assets/sprites/baxcalibur.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Trevore Read',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tim Franklin',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Owyn Kamerman',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/umbreon-vmax.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/slaking-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hawlucha.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/adventurers-discovery.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/volo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Julian Luvara',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Fabien Pujol',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/palkia-origin.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zinnia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 9,,
        radiusCard: true
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Gabriel Fernandez',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/wyrdeer-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/slaking-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/theraputic-energ.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Sydney De Bruijn',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/giratina-origin.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yuya T.',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sechan O',
    flag: '../../assets/flags/korea.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hawlucha.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Akinori A',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Rune Heiremans',
    flag: '../../assets/flags/belgium.png',
    sprite1: '../../assets/sprites/chien-pao.png',
    sprite2: '../../assets/sprites/baxcalibur.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/baxcalibur.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/frigibax57.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/frigibax-chilly.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/superior-energy-retrieval.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokegear30-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 9,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Lucas J',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Polaris Altares',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/chien-pao.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/suicune-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 9,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Vini Fernandez',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/mew-vmax.png',
    sprite2: '../../assets/sprites/genesect.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/deoxys-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/penny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Pedro Augusto C',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'João Gabriel P',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/archeops.png',  
    list: '../../assets/list-icon.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 2,
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Shao Tong Y',
    flag: '../../assets/flags/taiwan.png',
    sprite1: '../../assets/sprites/comfey.png',
    sprite2: '../../assets/sprites/sableye.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Gabriel T',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/duraludon-gmax.png',  
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-vmax-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-v-ss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/adventurers-discovery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Hayashi Y',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Hatsuto K',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kazusa Y.',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kingsley C',
    flag: '../../assets/flags/australia.png',
    sprite2: '../../assets/sprites/gardevoir.png',
    sprite1: '../../assets/sprites/blank.png',
    list: '../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 11,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Junwon C',
    flag: '../../assets/flags/korea.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Haruku U',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',  
    // list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
]

//masters
function displayList(array = []) {
    masterList.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    // let zoomBox = document.createElement('div');
    // zoomBox.classList.add('zoom-card-box');
    // console.log(zoomBox)

    let item_element = document.createElement('li');
    item_element.classList.add('player-list-hover');
    let title = document.createElement('li');
    title.classList.add('results-list-item');

    let playerName = document.createElement('div');
    playerName.classList.add('name-n-flag');

    let flagImg = document.createElement('img');
    flagImg.classList.add('flag-size');
    flagImg.setAttribute('src', item.flag);
    
    let deck = document.createElement('div');
    deck.classList.add('player-deck-icons');

    let firstSprite = document.createElement('img');
    firstSprite.classList.add('sprite');
    firstSprite.setAttribute('src', item.sprite1);
    let secondSprite = document.createElement('img');
    secondSprite.classList.add('sprite');
    secondSprite.classList.add('second-sprite');
    secondSprite.setAttribute('src', item.sprite2);
    let listIcon = document.createElement('img');
    listIcon.classList.add('list-icon');
    listIcon.setAttribute('src', item.list);
    
    item_element.appendChild(title);
    title.appendChild(playerName);
    playerName.appendChild(flagImg);
    playerName.append(item.firstName);
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " " + " - 2023 Worlds";
                // document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2023 Worlds";
        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
        }

        for (let i = 0; i < item.deck.length; i++) {
          let deck = item.deck[i];

          let cardSpace = document.createElement('div');
          cardSpace.classList.add('pokemon-card');

          let pokeCard = document.createElement('img');
          pokeCard.classList.add('pok-card-small')
          pokeCard.setAttribute('src', deck.cardImg);
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
        }


          let numberCounter = document.createElement('img');
          numberCounter.classList.add('num-1')
          numberCounter.setAttribute('src', deck.numImg);

          cardSpace.appendChild(pokeCard);
          cardSpace.appendChild(numberCounter);
          modalBottom.appendChild(cardSpace);

          modalX.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
          behind.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
        }
        document.querySelectorAll('.pokemon-card').forEach(card => {
          let meep = document.getElementsByClassName("pok-card-small"),
          zoombox = document.getElementById("zoom-card-box");
         
          if (meep.length > 0) { for (let i of meep) {
            i.onclick = () => {
              let clone = i.cloneNode();
              clone.className = "";
              zoombox.innerHTML = "";
              zoombox.appendChild(clone);
              zoombox.className = "show";
            };
          }}
         
          zoombox.onclick = () => {
            zoombox.className = "";
          };
        });
      })
    }

    masterList.appendChild(item_element);
  }
}

// seniors
function displayList2(array = []) {
    seniorList.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    let item_element = document.createElement('li');
    item_element.classList.add('player-list-hover');
    let title = document.createElement('li');
    title.classList.add('results-list-item');

    let playerName = document.createElement('div');
    playerName.classList.add('name-n-flag');

    let flagImg = document.createElement('img');
    flagImg.classList.add('flag-size');
    flagImg.setAttribute('src', item.flag);
    
    let deck = document.createElement('div');
    deck.classList.add('player-deck-icons');

    let firstSprite = document.createElement('img');
    firstSprite.classList.add('sprite');
    firstSprite.setAttribute('src', item.sprite1);
    let secondSprite = document.createElement('img');
    secondSprite.classList.add('sprite');
    secondSprite.classList.add('second-sprite');
    secondSprite.setAttribute('src', item.sprite2);
    let listIcon = document.createElement('img');
    listIcon.classList.add('list-icon');
    listIcon.setAttribute('src', item.list);
    
    item_element.appendChild(title);
    title.appendChild(playerName);
    playerName.appendChild(flagImg);
    playerName.append(item.firstName);
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " " + " - 2023 Worlds";
                // document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2023 Worlds";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
        }

        for (let i = 0; i < item.deck.length; i++) {
          let deck = item.deck[i];

          let cardSpace = document.createElement('div');
          cardSpace.classList.add('pokemon-card');

          let pokeCard = document.createElement('img');
          pokeCard.classList.add('pok-card-small')
          pokeCard.setAttribute('src', deck.cardImg);
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
        }


          let numberCounter = document.createElement('img');
          numberCounter.classList.add('num-1')
          numberCounter.setAttribute('src', deck.numImg);

          cardSpace.appendChild(pokeCard);
          cardSpace.appendChild(numberCounter);
          modalBottom.appendChild(cardSpace);

          modalX.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
          behind.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
        }
        document.querySelectorAll('.pokemon-card').forEach(card => {
          let meep = document.getElementsByClassName("pok-card-small"),
          zoombox = document.getElementById("zoom-card-box");
         
          if (meep.length > 0) { for (let i of meep) {
            i.onclick = () => {
              let clone = i.cloneNode();
              clone.className = "";
              zoombox.innerHTML = "";
              zoombox.appendChild(clone);
              zoombox.className = "show";
            };
          }}
         
          zoombox.onclick = () => {
            zoombox.className = "";
          };
        });
      })
    }
    seniorList.appendChild(item_element);
  }
}

// juniors
function displayList3(array = []) {
    juniorList.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    let item_element = document.createElement('li');
    item_element.classList.add('player-list-hover');
    let title = document.createElement('li');
    title.classList.add('results-list-item');

    let playerName = document.createElement('div');
    playerName.classList.add('name-n-flag');

    let flagImg = document.createElement('img');
    flagImg.classList.add('flag-size');
    flagImg.setAttribute('src', item.flag);
    
    let deck = document.createElement('div');
    deck.classList.add('player-deck-icons');

    let firstSprite = document.createElement('img');
    firstSprite.classList.add('sprite');
    firstSprite.setAttribute('src', item.sprite1);
    let secondSprite = document.createElement('img');
    secondSprite.classList.add('sprite');
    secondSprite.classList.add('second-sprite');
    secondSprite.setAttribute('src', item.sprite2);
    let listIcon = document.createElement('img');
    listIcon.classList.add('list-icon');
    listIcon.setAttribute('src', item.list);
    
    item_element.appendChild(title);
    title.appendChild(playerName);
    playerName.appendChild(flagImg);
    playerName.append(item.firstName);
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " " + " - 2023 Worlds";
                    // document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2023 Worlds";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../assets/dark-bg.png)";
        }

        for (let i = 0; i < item.deck.length; i++) {
          let deck = item.deck[i];

          let cardSpace = document.createElement('div');
          cardSpace.classList.add('pokemon-card');

          let pokeCard = document.createElement('img');
          pokeCard.classList.add('pok-card-small')
          pokeCard.setAttribute('src', deck.cardImg);
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
        }


          let numberCounter = document.createElement('img');
          numberCounter.classList.add('num-1')
          numberCounter.setAttribute('src', deck.numImg);

          cardSpace.appendChild(pokeCard);
          cardSpace.appendChild(numberCounter);
          modalBottom.appendChild(cardSpace);

          modalX.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
          behind.addEventListener('click', () => {
            modal.style.display = 'none';
            behind.style.display = 'none';
            cardSpace.remove();
          })
        }
        document.querySelectorAll('.pokemon-card').forEach(card => {
          let meep = document.getElementsByClassName("pok-card-small"),
          zoombox = document.getElementById("zoom-card-box");
         
          if (meep.length > 0) { for (let i of meep) {
            i.onclick = () => {
              let clone = i.cloneNode();
              clone.className = "";
              zoombox.innerHTML = "";
              zoombox.appendChild(clone);
              zoombox.className = "show";
            };
          }}
         
          zoombox.onclick = () => {
            zoombox.className = "";
          };
        });
      })
    }
    juniorList.appendChild(item_element);
  }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
