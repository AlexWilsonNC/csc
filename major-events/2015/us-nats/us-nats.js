const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Jason Klaczynski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Enrique Avila',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/wailord.png',
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
        cardImg: '../../assets/cards/2014-2016/wailord-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/suicune.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-fan-club.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/cassius.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hugh.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trick-shovel.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hard-charm.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,,
      },
    ]
  },
  {
    firstName: 'Grant Manley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/manectric-mega.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/m-manectric-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/empoleon.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 6,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 3,,
      },
    ]
  },
  {
    firstName: 'Ben Moskow',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
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
        cardImg: '../../assets/cards/2014-2016/heatran.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/steel-shelter.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dylan Bryan',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/klinklang.png',
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
        cardImg: '../../assets/cards/2014-2016/klinklang.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/klang.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/klink.png',
        "count": 3,
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
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
        cardImg: '../../assets/cards/2014-2016/repeat-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rare-candy.png',
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
    firstName: 'Eduardo Gonzalez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/hippowdon.png',
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
        cardImg: '../../assets/cards/2014-2016/hippowdon.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hippopotas.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/korrina.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-birch-observation.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hard-charm.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 4,,
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI",
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Kristy Britton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 1,
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
    firstName: 'Geoffrey Sauk',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-rayquaza-ex-colorless.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-ex-ros.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-ex-ros-dragon.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzong.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzor.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kecleon.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/heatran.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-fan-club.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-spirit-link.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 6,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Brandon Zettel',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/wailord.png',
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
        cardImg: '../../assets/cards/2014-2016/wailord-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/suicune.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-fan-club.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/cassius.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hugh.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trick-shovel.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hard-charm.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,,
      },
    ]
  },
  {
    firstName: 'Omar Reyhan',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/kyogre-primal.png',
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
        cardImg: '../../assets/cards/2014-2016/primal-kyogre-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kyogre-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/suicune.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-retrieval.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kyogre-spirit-link.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hard-charm.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 10,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 2,,
      },
    ]
  },
  {
    firstName: 'Dustin Zimmerman',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
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
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
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
    firstName: 'Stefan Tabaco',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon-primal.png',
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
        cardImg: '../../assets/cards/2014-2016/mega-turbo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
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
        cardImg: '../../assets/cards/2014-2016/switch.png',
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
    firstName: 'Jake Jensen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-pile-up.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/cassius.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Michael Lesky',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/kyogre-primal.png',
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
        cardImg: '../../assets/cards/2014-2016/primal-kyogre-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kyogre-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/suicune.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-retrieval.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kyogre-spirit-link.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hard-charm.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 10,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 2,,
      },
    ]
  },
  {
    firstName: 'Steve Guthrie',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../../assets/sprites/blastoise.png',
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
        cardImg: '../../assets/cards/2014-2016/blastoise.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
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
        cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 11,
      }
    ]
  },
  {
    firstName: 'Kolton Day',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Austin Baggs',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Dean Nezam',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Sam Chen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-manectric-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ninetales-prc.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vulpix-prc.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/articuno.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/suicune.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 5,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 2,,
      },
    ]
  },
  {
    firstName: 'Andrew Krekeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-manectric-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ninetales-prc.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vulpix-prc.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 6,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 2,,
      },
    ]
  },
  {
    firstName: 'Benjamin Sauk',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza-mega.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Omar Izaguirre',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Chris Derocher',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Steven Bates',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/raichu.png',
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
        cardImg: '../../assets/cards/2014-2016/hawlucha.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/raichu.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pikachu-nuzzle.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lucario-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 3,,
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI",
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 3,,
      },
    ]
  },
  {
    firstName: 'Brandon Salazar',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Jason Annichiarico',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flareon.png',
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
        cardImg: '../../assets/cards/2014-2016/flareon-plasma.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/leafeon.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/eevee.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/eevee-signs-of-evo.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/empoleon.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/audino.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/exeggcute.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ditto.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/winona.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silver-bangle.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Daniel Lynch',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/scoop-up-cyclone.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Ramon Miranda',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/raichu.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Alexander Hill',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-rayquaza-ex-colorless.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-ex-ros.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzong.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzor.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/heatran.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-spirit-link.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 5,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'David Vidal',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza-mega.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Brandon Cantu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Maximilian Armitage',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Chris Siakala',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Henry Ross-Clunis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Tristan Lackey',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-manectric-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/empoleon.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/black-kyurem-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/exeggcute.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 6,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Vance Kelley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manectric.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Jeremy Gibson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2014-2016/pumpkaboo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/joltik.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lampent.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mew-ex-ltr.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/empoleon.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/exeggcute.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/revive.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silver-bangle.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Zach Elliott',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-manectric-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/articuno.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/scoop-up-cyclone.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 7,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 3,,
      },
    ]
  },
  {
    firstName: 'Kevin Baxter',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/groudon-primal.png',
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
        cardImg: '../../assets/cards/2014-2016/groudon-ex-primal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/groudon-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hawlucha.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
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
        cardImg: '../../assets/cards/2014-2016/scramble-switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hard-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/focus-sash.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/groudon-spirit-link.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/wide-lens.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 1,
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
    firstName: 'Stephan Blake',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/donphan.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Ryan Sabelhaus',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Dane Schussler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Michael Lux',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/wailord.png',
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
        cardImg: '../../assets/cards/2014-2016/wailord-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/suicune.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-fan-club.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/cassius.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hugh.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trick-shovel.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hard-charm.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,,
      },
    ]
  },
  {
    firstName: 'Jason Martinez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manectric.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-rayquaza-ex-colorless.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-ex-ros.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzong.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzor.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kecleon.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/altaria-ros.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/swablu-ros2.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/exeggcute.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/winona.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mega-turbo.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-spirit-link.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Matt Marusik',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-pile-up.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 8,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'William Herrmann',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/klinklang.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Mark Garcia',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manectric.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Ryan Grant',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-pile-up.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Pearce Blend',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/trevenant.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Zack Martin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-manectric-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/drifblim.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/drifloon-creepy-wind.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 5,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Brit Pybas',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Aaron Wang',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Charles L-Leach',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2014-2016/pumpkaboo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/joltik.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lampent.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mew-ex-ltr.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/empoleon.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Jeff Garrison',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Toby Nelson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/aegislash.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Jimmy McClure',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'David Richard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/manectric-mega.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Orion Sutherland',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manectric.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/cassius.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Jacob Van Wagner',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-rayquaza-ex-colorless.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-ex-ros.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzong.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzor.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kecleon.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/altaria-ros.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/swablu-ros2.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/exeggcute.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/winona.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mega-turbo.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-spirit-link.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Harrison Leven',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bunnelby.png',
    sprite2: '../../../assets/sprites/slurpuff.png',
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
        cardImg: '../../assets/cards/2014-2016/diggersby.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/slurpuff.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/swirlix.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jellicent.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/frillish.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tierno.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trick-shovel.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/life-dew.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-aquas-secret-base.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 3,,
      },
    ]
  },
  {
    firstName: 'Andrew Jackson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Lance Bradshaw',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/kyogre-primal.png',
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
        cardImg: '../../assets/cards/2014-2016/primal-kyogre-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kyogre-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/suicune.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/articuno.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-retrieval.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kyogre-spirit-link.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shrine-of-memories.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 12,,
      },
    ]
  },
  {
    firstName: 'James Staszel',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-rayquaza-ex-colorless.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-ex-ros.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzong.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzor.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/heatran.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-spirit-link.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 5,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Patrick Martinez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/manectric-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-manectric-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ninetales-prc.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vulpix-prc.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/empoleon.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 5,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 5,,
      },
    ]
  },
  {
    firstName: 'Emiliano Rosales',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,
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
    firstName: 'Calvin Connor',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/manectric-mega.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/m-manectric-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/empoleon.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/exeggcute.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 5,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 5,,
      },
    ]
  },
  {
    firstName: 'Justin Poist',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hawlucha.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lucario-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/miltank.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/scoop-up-cyclone.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/repeat-ball.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/focus-sash.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 5,,
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI",
      },
    ]
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-rayquaza-ex-colorless.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-ex-ros.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzong.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzor.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/heatran.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-spirit-link.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 5,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Xander Pero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manectric.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jynx.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 6,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Evan Smith',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 3,
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol.png',
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
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-fan-club.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/scoop-up-cyclone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/repeat-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Ryan Chu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
    sprite2: '../../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hawlucha.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lucario-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/korrina.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/scoop-up-cyclone.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/repeat-ball.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/focus-sash.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 5,,
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI",
      },
    ]
  },
  {
    firstName: 'Reece Nighswander',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/trevenant.png',
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
        cardImg: '../../assets/cards/2014-2016/gengar-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trevenant.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/phantump-astonish.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sigilyph-ltr.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/wally.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-psychic.png',
        "count": 5,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/mystery-energy.png',
        "count": 3,,
      },
    ]
  },
  {
    firstName: 'Travis Beckwith',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/cassius.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 5,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Easton Ours',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/groudon-primal.png',
    sprite2: '../../../assets/sprites/lucario-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/groudon-ex-primal.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/groudon-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hawlucha.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mega-lucario-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lucario-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/korrina.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/maxie-hidden-ball-trick.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/scramble-switch.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mega-turbo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/groudon-spirit-link.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/wide-lens.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 8,,
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI",
      },
    ]
  },
  {
    firstName: 'Michael Minas',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/scoop-up-cyclone.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 5,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Isaac Bunker',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/snorlax.png',
    sprite2: '../../../assets/sprites/suicune.png',
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
        cardImg: '../../assets/cards/2014-2016/snorlax-block.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/suicune.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hugh.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,,
      },
    ]
  },
  {
    firstName: 'Asher Donham',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2014-2016/pumpkaboo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/joltik.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lampent.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mew-ex-ltr.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/empoleon.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/revive.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 US Nats";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 US Nats";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 US Nats";

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
