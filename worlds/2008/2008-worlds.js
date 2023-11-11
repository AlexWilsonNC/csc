const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Jason Klaczynski',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
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
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/duskull.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jolteon-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/cyclone-energy-old.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Khan Le',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blissey.png',
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
        cardImg: '../../assets/cards/2007-2008/blissey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chansey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/tv-reporter.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-removal-2.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pluspower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pokedex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/time-space-distortion.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-capsule.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/holon-energy-ff.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Gino Lombardi',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
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
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts-hypnosis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cresselia-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/muk.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/grimer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/phione.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pachirisu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/phoebes-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: "Jimmy O’Brien",
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
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
        cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzong.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzor.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/unown-quick.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/moonlight-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Yacine Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Takae Suzuki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/banette.png',
    sprite2: '../../assets/sprites/blissey.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
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
        cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzong.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzor.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/unown-quick.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/moonlight-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Esa Juntunen',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/glaceon.png',
    sprite2: '../../assets/sprites/absol.png',
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
        cardImg: '../../assets/cards/2007-2008/glaceon-lvx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/glaceon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/eevee.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/absol.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/island-hermet.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-removal-2.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/multi-energy-dp.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Matthew Koo',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sami Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Agustin Pugliese',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'David Atanassov',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blissey.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kyle Sabelhaus',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
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
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/duskull.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/cyclone-energy-old.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Morten Gundesen',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/omastar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'John Silvestro',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alex Brosseau',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
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
        cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzong.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzor.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/absol-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-removal-2.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Drew Guritzky',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/ampharos.png',
    sprite2: '../../assets/sprites/bronzong.png',
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
        cardImg: '../../assets/cards/2007-2008/ampharos.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/flaaffy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mareep.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzong.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/absol-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Tsuguyoshi Yamato',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Karl Peters',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/magmortar.png',
    sprite2: '../../assets/sprites/leafeon.png',
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
        cardImg: '../../assets/cards/2007-2008/magmortar-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/magmortar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/magmar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/leafeon-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/leafeon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/eevee.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rotom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mawile.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-removal-2.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/premier-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-capsule.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/grass-energy-capsule.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/multi-energy-dp.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Chris Fulop',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Simone Soldo',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tomi Sjöblom',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/honchkrow.png',
    sprite2: '../../assets/sprites/absol.png',
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
        cardImg: '../../assets/cards/2007-2008/honchkrow-lvx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/honchkrow.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/murkrow.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/murkrow-dusk-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/absol.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/palkia-lvx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/palkia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mars.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/premier-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/time-space-distortion.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dp-darkness-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Clay Carney',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Drew Holton',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ian Brander',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/scizor.png',
    sprite2: '../../assets/sprites/toxicroak.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Evens Cheung',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/ampharos.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Emmanuel Divens',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kevin Bennett',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/eevee.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Finn Looft',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
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
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts-hypnosis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/absol.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/omastar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/helix-fossil.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Lars Andersen',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/omastar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Anna Schipper',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Dylan Lefavour',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/empoleon.png',
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
        cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup-ice-blade.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup-berry.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/duskull.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/tauros.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mew-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Paul Atanassov',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blissey.png',
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
        cardImg: '../../assets/cards/2007-2008/blissey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chansey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/tv-reporter.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-removal-2.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pluspower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pokedex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/time-space-distortion.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-capsule.png',
        "count": 10,
      },
      {
        cardImg: '../../assets/cards/energy/holon-energy-ff.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Nicholas Kolibas',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/empoleon.png',
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
        cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup-ice-blade.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/duskull.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pachirisu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mew-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/professor-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/master-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Curran Hill',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
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
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Aziz Al-Yami',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
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
        cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzong.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bronzor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/absol-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Andy Meier',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/bronzong.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dylan Bryan',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/scizor.png',
    sprite2: '../../assets/sprites/electrode.png',
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
        cardImg: '../../assets/cards/2007-2008/scizor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scyther.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/electrode.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/voltorb.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/sableye.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-removal-2.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pokedex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/time-space-distortion.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-special-dp.png',
        "count": 5,
      }
    ]
  },
  {
    firstName: 'Garrett Farrington',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/leafeon.png',
    sprite2: '../../assets/sprites/magmortar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jonathan Bristow',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Justin Bokhari',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Malik Zaihan',
    flag: '../../assets/flags/liberia-malaysia.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
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
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts-hypnosis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/duskull.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Christian Miller',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/scizor.png',
    sprite2: '../../assets/sprites/toxicroak.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Takashi Yoneda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/magnezone.png',
    sprite2: '../../assets/sprites/leafeon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/omastar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tim Hornung',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Keegan Cox',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/eevee.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  }
]

let juniors = [
  {
    firstName: 'Tristan Robinson',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/scizor.png',
    sprite2: '../../assets/sprites/toxicroak.png',
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
        cardImg: '../../assets/cards/2007-2008/scizor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scyther.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/toxicroak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/croagunk.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/electrode.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/voltorb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/sableye.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/multi-energy-dp.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-special-dp.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Takuto Itagaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
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
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/furret.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/sentret.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/muk.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/grimer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/omastar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/oaks-visit.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/helix-fossil.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Simone Zucchelli',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
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
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts-hypnosis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pachirisu.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/weavile.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/sneasel.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/breloom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/shroomish.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/oaks-visit.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/moonlight-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dp-darkness-energy.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Noah Lawson',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
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
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts-hypnosis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/duskull.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pachirisu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/tauros.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/team-galactic-wager.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/oaks-visit.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Sean Goh',
    flag: '../../assets/flags/liberia-malaysia.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jun Hasebe',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jacob Tamm',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
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
        cardImg: '../../assets/cards/2007-2008/gardevoir-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gardevoir-psychic-lock.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gallade.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia-psyshock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts-hypnosis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/duskull.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pachirisu.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/cyclone-energy-old.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Kazuho Mizuta',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Joey Gaffney',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Emily Chan',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/empoleon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ty Wheeler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Olliver Barr',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andrew Choong',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Olivier Marcant',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Joshua Simon',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Heikki Kettunen',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
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

        let item_element = document.createElement('li');
        item_element.classList.add('player-list-hover');
        let title = document.createElement('li');
        title.classList.add('results-list-item');

        let playerName = document.createElement('div');
        playerName.classList.add('name-n-flag');
        if (item.banned === true) {
          playerName.classList.add('crossed-out');
        }

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
            document.querySelector('.playerName').innerHTML = item.firstName + " - 2008 Worlds";

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

              // cardSpace.forEach(card => {
              //   card.addEventListener('click', () => {
              //     pokeCard.classList.add('large-card')
              //   })
              // })

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2008 Worlds";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2008 Worlds";

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

          // pokeCard.onclick = function() {
          //   document.querySelector('.pok-card-small').style.width = '500px';
          // }

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
