const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Gino Lombardi',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2007-2008/breloom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/shroomish.png',
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
      },
    ]
  },
  {
    firstName: 'Drew Holton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Colin Moll',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/torterra.png',
    sprite2: '../../../assets/sprites/sceptile.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2007-2008/torterra-lvx.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/torterra-dp.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/torterra-md.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/grotle.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/turtwig-free-atk.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/turtwig.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/sceptile.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/grovyle.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/treecko.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2008.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/super-scoop-up.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/grass-energy-capsule.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Mike Fouchet',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alex F',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jorel Ker',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2007-2008/dp.120.empoleon_lv_x.jpg',
        "count": 1,,
        exCard: true
      },
      {
        cardImg: '../../assets/cards/2007-2008/empoleon-dual-splash.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        "count": 3,,
        radiusCard: true
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
        cardImg: '../../assets/cards/2007-2008/absol-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/phione.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
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
        cardImg: '../../assets/cards/2007-2008/premier-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Benjamin Sauk',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Eric C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/leafeon.png',
    sprite2: '../../../assets/sprites/magmortar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ian Brander',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/absol.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason Klaczynski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jimmy Ballard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/blissey.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2007-2008/sw.023.banette.jpg',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/shuppet.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/blissey.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chansey.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mew-star.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lunatone-power.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/tv-reporter.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 10,,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/multi-energy-dp.png',
        "count": 1,,
      },
    ]
  },
  {
    firstName: 'John Silvestro',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tyson Stephan',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    list: '../../../assets/list-icon.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ralts-hypnosis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/furret.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/sentret.png',
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
        cardImg: '../../assets/cards/2007-2008/absol-ex.png',
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
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/moonlight-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy-promo.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Christian Ortiz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'David C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blissey.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kyle S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/leafeon.png',
    sprite2: '../../../assets/sprites/magmortar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andrew K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Chris F',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/leafeon.png',
    sprite2: '../../../assets/sprites/magmortar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dylan Lefavour',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/empoleon.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2007-2008/piplup-berry.png',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup-promo.png',
        "count": 2,,
        oldCard: true
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
        cardImg: '../../assets/cards/2007-2008/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/duskull.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/sw.019.suicune.jpg',
        "count": 1,,
        oldCard: true
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
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/oaks-visit.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
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
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-shard-2007.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 7,
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
    firstName: 'Eric C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason F',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Matthew C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Matthew E',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Nancy L',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Omar Izaguirre',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/blissey.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Peter O',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andrew C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Frankie D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/blissey.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jake S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Stephen McGaffney',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/blissey.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Orion Craig',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
    list: '../../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2007-2008/leafeon-lvx.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/leafeon.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/espeon-body.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jolteon.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/umbreon.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/vaporeon.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/eevee-flowers.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/claydol.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/baltoy-fighting.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chatot.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roseannes-research.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bebes-search.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/night-maintenance.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lake-boundary.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/grass-energy-capsule.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/double-rainbow-energy.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/scramble-energy.png',
        "count": 3,,
      },
    ]
  },
  {
    firstName: 'Steven Roberto',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Aziz Al-Yami',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Luke Sherman', // tad w?
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alex M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/bronzong.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'David S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Garrett F',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Steven R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Henry Leaming',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tristan Robinson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Brandon Cross',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason Cross',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010',
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
    playerName.append(item.firstName);
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2008 US Nats";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        }

        for (let i = 0; i < item.deck.length; i++) {
          let deck = item.deck[i];

          let cardSpace = document.createElement('div');
          cardSpace.classList.add('pokemon-card');

          let pokeCard = document.createElement('img');
          pokeCard.classList.add('pok-card-small')
          pokeCard.setAttribute('src', deck.cardImg);

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          if (deck.exCard === true) {
            pokeCard.classList.add('ex-era-card')
          }
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
    playerName.append(item.firstName);
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2008 US Nats";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        }

        for (let i = 0; i < item.deck.length; i++) {
          let deck = item.deck[i];

          let cardSpace = document.createElement('div');
          cardSpace.classList.add('pokemon-card');

          let pokeCard = document.createElement('img');
          pokeCard.classList.add('pok-card-small')
          pokeCard.setAttribute('src', deck.cardImg);

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          if (deck.exCard === true) {
            pokeCard.classList.add('ex-era-card')
          }
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
    playerName.append(item.firstName);
    title.appendChild(deck);
    deck.appendChild(firstSprite);
    deck.appendChild(secondSprite);
    deck.appendChild(listIcon);

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2008 US Nats";

        if (item.type == 'psychic') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/psychic-bg.png)";
        } else if (item.type == 'fire') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fire-bg.png)";
        } else if (item.type == 'fairy') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fairy-bg.png)";
        } else if (item.type == 'normal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/normal-bg.png)";
        } else if (item.type == 'lightning') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/lightning-bg.png)";
        } else if (item.type == 'dark') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        } else if (item.type == 'dragon') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dragon-bg.png)";
        } else if (item.type == 'fighting') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/fighting-bg.png)";
        } else if (item.type == 'grass') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/grass-bg.png)";
        } else if (item.type == 'metal') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/metal-bg.png)";
        } else if (item.type == 'water') {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/water-bg.png)";
        } else {
          document.querySelector('.modal').style.backgroundImage = "url(../../../../assets/dark-bg.png)";
        }

        for (let i = 0; i < item.deck.length; i++) {
          let deck = item.deck[i];

          let cardSpace = document.createElement('div');
          cardSpace.classList.add('pokemon-card');

          let pokeCard = document.createElement('img');
          pokeCard.classList.add('pok-card-small')
          pokeCard.setAttribute('src', deck.cardImg);

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          if (deck.exCard === true) {
            pokeCard.classList.add('ex-era-card')
          }
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
