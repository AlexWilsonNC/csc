const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Jacob Van Wagner',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
        cardImg: '../../assets/cards/2014-2016/blastoise.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/exeggcute.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/articuno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/wailord-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/superior-energy-retreival.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 11,
      }
    ]
  },
  {
    firstName: 'Mees Brenninkmeijer',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/seismitoad.png',
    sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Igor Costa',
    flag: '../../assets/flags/portugal.png',
    sprite1: '../../assets/sprites/seismitoad.png',
    sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Merlin Quittek',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/joltik.png',
    sprite2: '../../assets/sprites/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2014-2016/joltik.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pumpkaboo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lampent.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mew-ex-ltr.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silver-bangle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hard-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Sean Foisy',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/trevenant.png',
    sprite2: '../../assets/sprites/gengar.png',
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
        cardImg: '../../assets/cards/2014-2016/gengar-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trevenant.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/phantump-astonish.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/wally.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/mystery-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Martin Janouš',
    flag: '../../assets/flags/czech-republic.png',
    sprite1: '../../assets/sprites/joltik.png',
    sprite2: '../../assets/sprites/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2014-2016/joltik.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pumpkaboo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lampent.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mew-ex-ltr.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/revive.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Simon Narode',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/donphan.png',
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
        cardImg: '../../assets/cards/2014-2016/donphan.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/phanpy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hawlucha.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/korrina.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/robo-sub.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/repeat-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/revive.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/focus-sash.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silver-bangle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Tito Santoso',
    flag: '../../assets/flags/indonesia.png',
    sprite1: '../../assets/sprites/aromatisse.png',
    sprite2: '../../assets/sprites/seismitoad.png',
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
        cardImg: '../../assets/cards/2014-2016/aromatisse.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/spritzee-fairy-wind.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/spritzee-sweet-scent.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/charizard-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/malamar-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trevenant-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/m-manectric-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-fan-club.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fairy-garden.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fairy.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-rainbow.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Andrew Mahone',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/joltik.png',
    sprite2: '../../assets/sprites/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2014-2016/joltik.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pumpkaboo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lampent.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mew-ex-ltr.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/revive.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Jason Martinez',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/seismitoad.png',
    sprite2: '../../assets/sprites/manectric.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Simone Zucchelli',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/joltik.png',
    sprite2: '../../assets/sprites/pumpkaboo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/groudon-primal.png',
    sprite2: '../../assets/sprites/wobbuffet.png',
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
        cardImg: '../../assets/cards/2014-2016/groudon-ex-primal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/groudon-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/wobbuffet.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/korrina.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/robo-sub.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mega-turbo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hard-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/focus-sash.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 7,
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
      }
    ]
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/manectric-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-manectric-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/g-booster.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Dylan Dreyer',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/joltik.png',
    sprite2: '../../assets/sprites/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2014-2016/joltik.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pumpkaboo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lampent.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mew-ex-ltr.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/revive.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Michikazu Tsuda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/raichu.png',
    sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/raichu.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pikachu-nuzzle.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzong.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzor.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/repeat-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silver-bangle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Nicolas Galaz',
    flag: '../../assets/flags/chile.png',
    sprite1: '../../assets/sprites/landorus-therian.png',
    sprite2: '../../assets/sprites/crobat.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Junichi Kakinoki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/manectric-mega.png',
    sprite2: '../../assets/sprites/yanmega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-manectric-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yanmega-windfall.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yanma.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/iris.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Henry Ross-Clunis',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/joltik.png',
    sprite2: '../../assets/sprites/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2014-2016/joltik.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pumpkaboo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lampent.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mew-ex-ltr.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/revive.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Adrian Velasco',
    flag: '../../assets/flags/philippines.png',
    sprite1: '../../assets/sprites/trevenant.png',
    sprite2: '../../assets/sprites/gengar.png',
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
        cardImg: '../../assets/cards/2014-2016/gengar-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trevenant.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/phantump-astonish.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/wally.png',
        "count": 3,
      },      
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/mystery-energy.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/joltik.png',
    sprite2: '../../assets/sprites/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2014-2016/joltik.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pumpkaboo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lampent.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mew-ex-ltr.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/revive.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Sam Chen',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
        cardImg: '../../assets/cards/2014-2016/blastoise.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/exeggcute.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/articuno.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/superior-energy-retreival.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 11,
      }
    ]
  },
  {
    firstName: 'Aaron Tarbell',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
        cardImg: '../../assets/cards/2014-2016/blastoise.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/exeggcute.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/wailord-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/articuno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/superior-energy-retreival.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 11,
      }
    ]
  },
  {
    firstName: 'Ciaran Farah',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/raichu.png',
    sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/raichu.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pikachu-nuzzle.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/leafeon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/eevee.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/exeggcute.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/repeat-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silver-bangle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Daniel Lynch',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/donphan.png',
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
        cardImg: '../../assets/cards/2014-2016/donphan.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/phanpy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hawlucha.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/korrina.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/robo-sub.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/focus-sash.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silver-bangle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 5,
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Kian Amini',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/seismitoad.png',
    sprite2: '../../assets/sprites/manectric.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rock-guard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Jason Klaczynski',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/seismitoad.png',
    sprite2: '../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-pile-up.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hippowdon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hippopotas.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Alexander Hill',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/trevenant.png',
    sprite2: '../../assets/sprites/gengar.png',
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
        cardImg: '../../assets/cards/2014-2016/trevenant.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/phantump-astonish.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/gengar-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },    
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/wally.png',
        "count": 3,
      },  
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/mystery-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Tobias Thesing',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/raichu.png',
    sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/raichu.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pikachu-nuzzle.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hawlucha.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silver-bangle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Brit Pybas',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/aegislash.png',
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
        cardImg: '../../assets/cards/2014-2016/bronzong.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/heatran.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dialga-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kecleon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/steel-shelter.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Patrik Räty',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/groudon-primal.png',
    list: '../../assets/sprites/blank.png',
     type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dustin Zimmerman',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/aegislash.png',
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
        cardImg: '../../assets/cards/2014-2016/bronzong.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/heatran.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dialga-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kecleon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/steel-shelter.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Michael Diaz',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/seismitoad.png',
    sprite2: '../../assets/sprites/manectric.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  }
]

let seniors = [
  {
    firstName: 'Patrick Martinez',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/seismitoad.png',
    sprite2: '../../assets/sprites/manectric.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rock-guard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Jeffrey Cheng',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/donphan.png',
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
        cardImg: '../../assets/cards/2014-2016/donphan.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/phanpy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hawlucha.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/korrina.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/robo-sub.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/focus-sash.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silver-bangle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 5,
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Brent Tonisson',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/manectric-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-manectric-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zapdos.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Colter Decker',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/donphan.png',
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
        cardImg: '../../assets/cards/2014-2016/donphan.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/phanpy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hawlucha.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/korrina.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/robo-sub.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/focus-sash.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silver-bangle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 5,
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Calvin Connor',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/bronzong.png',
    sprite2: '../../assets/sprites/klinklang.png',
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
        cardImg: '../../assets/cards/2014-2016/klinklang.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/klang.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/klink.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzong.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzor.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/heatran.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rare-candy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/repeat-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Jesper Eriksen',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/seismitoad.png',
    sprite2: '../../assets/sprites/manectric.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/seismitoad.png',
    sprite2: '../../assets/sprites/manectric.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Josh Fernando',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/manectric-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-manectric-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/terrakion.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/leafeon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/eevee-plf.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 5,
      }
    ]
  }
]

let juniors = [
  {
    firstName: 'Rowan Stavenow',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/landorus-therian.png',
    sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hawlucha.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lucario-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/korrina.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/scoop-up-cyclone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 5,
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
      }
    ]
  },
  {
    firstName: 'Alejandro Ng-Guzman',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/groudon-primal.png',
    sprite2: '../../assets/sprites/wobbuffet.png',
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
        cardImg: '../../assets/cards/2014-2016/groudon-ex-primal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/groudon-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/wobbuffet.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/korrina.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/robo-sub.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mega-turbo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hard-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/focus-sash.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shrine-of-memories.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 8,
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
      }
    ]
  },
  {
    firstName: 'Jackson Davies',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/seismitoad.png',
    sprite2: '../../assets/sprites/manectric.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rock-guard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Enrico Marini',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/landorus-therian.png',
    sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hawlucha.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lucario-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/korrina.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/scoop-up-cyclone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/repeat-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/focus-sash.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 5,
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
      }
    ]
  },
  {
    firstName: 'Everett Rutter-Ferris',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/landorus-therian.png',
    sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hawlucha.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lucario-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/korrina.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },      
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/scoop-up-cyclone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/repeat-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/focus-sash.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 5,
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
      }
    ]
  },
  {
    firstName: 'Asaki Hasegawa',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/donphan.png',
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
        cardImg: '../../assets/cards/2014-2016/donphan.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/phanpy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hawlucha.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/wobbuffet.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/regirock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/korrina.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/robo-sub.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/focus-sash.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silver-bangle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 5,
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Keita Saubaigne',
    flag: '../../assets/flags/belgium.png',
    sprite1: '../../assets/sprites/landorus-therian.png',
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
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/leafeon.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/eevee.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hawlucha.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lucario-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },      
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/focus-sash.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 6,
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
      }
    ]
  },
  {
    firstName: 'Yuto Omura',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
        cardImg: '../../assets/cards/2014-2016/blastoise.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/exeggcute.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/superior-energy-retreival.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 11,
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 Worlds";

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
