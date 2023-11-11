const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Igor Costa',
    flag: '../../assets/flags/portugal.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
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
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dark-patch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/super-scoop-up.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ultra-ball-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Harrison Leven',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
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
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dark-patch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ultra-ball-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/potion-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/max-potion-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/lost-remover.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Jay Hornung',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
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
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dark-patch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ultra-ball-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        "count": 10,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Michael Diaz',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
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
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dark-patch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ultra-ball-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/max-potion-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Sami Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/darkrai.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Stefan Tabaco',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/celebi.png',
    sprite2: '../../assets/sprites/mewtwo.png',
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
        cardImg: '../../assets/cards/2010-2012/celebi-prime.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tornadus-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tornadus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/virizion.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/bouffalant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/espeon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eevee.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/level-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/super-rod-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-grass.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Yuta Komatsuda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
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
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dark-patch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ultra-ball-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-switch-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/max-potion-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/lost-remover.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tropical-tidal-wave.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        "count": 10,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/darkrai.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Patricia Walsh',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Xavier Chua',
    flag: '../../assets/flags/singapore.png',
    sprite1: '../../assets/sprites/celebi.png',
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Adrian Loke',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Steven Mao',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/celebi.png',
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Aaron Curry',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mewtwo.png',
    sprite2: '../../assets/sprites/eelektrik.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Clifton Goh',
    flag: '../../assets/flags/singapore.png',
    sprite1: '../../assets/sprites/chandelure.png',
    sprite2: '../../assets/sprites/accelgor.png',
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
        cardImg: '../../assets/cards/2010-2012/mew-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/accelgor.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/chandelure.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/lampent.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/litwick.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/vileplume.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/oddish.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/relicanth.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pichu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tropical-beach.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Robert Shirasago',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dylan Bryan',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mewtwo.png',
    sprite2: '../../assets/sprites/terrakion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Mark Garcia',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/celebi.png',
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yacine Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/darkrai.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jak Stewart-Armstead',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason Klaczynski',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/darkrai.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Guillaume L',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/chandelure.png',
    sprite2: '../../assets/sprites/accelgor.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Curtis Lyon',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/magnezone.png',
    sprite2: '../../assets/sprites/emboar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Michael Lesky',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/darkrai.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Austin Baggs',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Samuel Liggett',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Matthew Koo',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/magnezone.png',
    sprite2: '../../assets/sprites/emboar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ole Stognief',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/zekrom.png',
    sprite2: '../../assets/sprites/eelektrik.png',
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
        cardImg: '../../assets/cards/2010-2012/zekrom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eelektrik.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tynamo-dex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tynamo-nvi.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/raikou-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tornadus-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/max-potion-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/super-rod-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Josue Palomino',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Fabrizio Bellucci',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ray Cipoletti',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mewtwo.png',
    sprite2: '../../assets/sprites/eelektrik.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Hampus Eriksson',
    flag: '../../assets/flags/sweden.png',
    sprite1: '../../assets/sprites/chandelure.png',
    sprite2: '../../assets/sprites/accelgor.png',
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
        cardImg: '../../assets/cards/2010-2012/mew-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/accelgor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/chandelure.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/lampent.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/litwick.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/vileplume.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/gloom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/oddish.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/relicanth.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pichu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tropical-beach.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/darkness-energy-hgss.png',
        "count": 2,
      }
    ]
  }
]

let seniors = [
  {
    firstName: 'Chase Moloney',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/mewtwo.png',
    sprite2: '../../assets/sprites/eelektrik.png',
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
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eelektrik.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tynamo-dex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/zekrom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/raikou-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/max-potion-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/super-rod-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ultra-ball-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Colter Decker',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dark-patch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ultra-ball-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/max-potion-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/enhanced-hammer-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/darkness-energy-hgss.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Dean Nezam',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
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
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dark-patch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ultra-ball-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/max-potion-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Jack Pitcher',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mewtwo.png',
    sprite2: '../../assets/sprites/eelektrik.png',
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
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eelektrik.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tynamo-dex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tynamo-nvi.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tornadus-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/raikou-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/larvitar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/zekrom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/max-potion-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/super-rod-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ultra-ball-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Koichi Nishida',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/celebi.png',
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alex Croxton',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/terrakion.png',
    sprite2: '../../assets/sprites/eelektrik.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Wo Pang Wong',
    flag: '../../assets/flags/hong-kong.png',
    sprite1: '../../assets/sprites/mewtwo.png',
    sprite2: '../../assets/sprites/terrakion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dario Ang',
    flag: '../../assets/flags/singapore.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Liam Williams',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/tornadus.png',
    sprite2: '../../assets/sprites/eelektrik.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Samu Saarinen',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Hayden Jacobus',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/celebi.png',
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Karuki Ishimaru',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Miloslav Poslední',
    flag: '../../assets/flags/czech-republic.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/darkrai.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kohei Takenaka',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/eelektrik.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Brandon Smiley',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/chandelure.png',
    sprite2: '../../assets/sprites/accelgor.png',
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
        cardImg: '../../assets/cards/2010-2012/mew-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/accelgor.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/chandelure.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/lampent.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/litwick.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/vileplume.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/oddish.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pichu.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/relicanth.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tropical-beach.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Henry Prior',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/chandelure.png',
    sprite2: '../../assets/sprites/accelgor.png',
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
        cardImg: '../../assets/cards/2010-2012/mew-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/accelgor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/chandelure.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/lampent.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/litwick.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/vileplume.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/oddish.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/relicanth.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/musharna.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/munna.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pichu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  }
]

let juniors = [
  {
    firstName: 'Shuto Itagaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/mewtwo.png',
    sprite2: '../../assets/sprites/terrakion.png',
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
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-switch-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/lost-remover.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/max-potion-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/exp-share.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ruins-of-alph.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Ian Robb',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
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
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dark-patch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ultra-ball-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/lost-remover.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/level-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/max-potion-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/super-scoop-up.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dark-claw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Itsuku Kito',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/mewtwo.png',
    sprite2: '../../assets/sprites/terrakion.png',
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
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/terrakion-emp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/landorus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/super-scoop-up.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-switch-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/exp-share.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Zachary Bokhari',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/celebi.png',
    sprite2: '../../assets/sprites/mewtwo.png',
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
        cardImg: '../../assets/cards/2010-2012/celebi-prime.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tornadus-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/potion-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-grass.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Wesley Hollenberg',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/darkrai.png',
    sprite2: '../../assets/sprites/mewtwo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Giacomo Forza',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Brandon Sharp',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/darkrai.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/terrakion.png',
    sprite2: '../../assets/sprites/eelektrik.png',
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
        cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/zekrom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eelektrik.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tynamo-nvi.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ultra-ball-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/super-rod-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 2,
      }
    ]
  }
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2012 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2012 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2012 Worlds";

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
