const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Shintaro Ito',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/audino-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-audino-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/audino-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/magearna-ex.png',
        "count": 1,
      },
      {
         "count": 1,
          "name": "Cobalion",
          "number": "74",
          "set": "STS"
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mega-turbo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/audino-spirit-link.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Cody Walinski',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/greninja.png',
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
        cardImg: '../../assets/cards/2014-2016/greninja-break.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/greninja.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/greninja-shuriken.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/frogadier-water-duplicates.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/froakie-bubble.png',
        "count": 3,
      },
      {
         "count": 4,
          "name": "Talonflame",
          "number": "96",
          "set": "STS"
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Bursting Balloon",
          "number": "97",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 8,
      },
      {
         "count": 2,
          "name": "Splash Energy",
          "number": "113",
          "set": "BKP"
      }
    ]
  },
  {
    firstName: 'Samuel Hough',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/vileplume.png',
    sprite2: '../../assets/sprites/jolteon.png',
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
        cardImg: '../../assets/cards/2014-2016/vileplume.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/gloom.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/oddish.png',
        "count": 3,
      },
      {
        "count": 2,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN"
      },
      {
        cardImg: '../../assets/cards/2014-2016/glaceon-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trevenant-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/magearna-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2014-2016/ninja-boy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/forest-of-giant-plants.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 1,
      },
      {
        "count": 4,
            "name": "Rainbow Energy",
            "number": "137",
            "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yveltal.png',
    sprite2: '../../assets/sprites/vespiquen.png',
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
        cardImg: '../../assets/cards/2014-2016/vespiquen.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal.png',
        "count": 3,
      },
      {
        "count": 2,
            "name": "Octillery",
            "number": "33",
            "set": "BKT"
      },
      {
        "count": 2,
            "name": "Remoraid",
            "number": "32",
            "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/unown.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/druddigon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/malamar-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
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
        cardImg: '../../assets/cards/2014-2016/brigette.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/revitalizer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/special-charge.png',
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
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Bert Wolters',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/greninja.png',
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
        cardImg: '../../assets/cards/2014-2016/greninja-break.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/greninja.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/greninja-shuriken.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/frogadier-water-duplicates.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/froakie-bubble.png',
        "count": 3,
      },
      {
         "count": 3,
          "name": "Talonflame",
          "number": "96",
          "set": "STS"
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
        cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/wally.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,
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
        "count": 3,
          "name": "Bursting Balloon",
          "number": "97",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 8,
      }
    ]
  },
  {
    firstName: 'Brad Curcio',
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
        "count": 2,
            "name": "Mew",
            "number": "29",
            "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
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
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/special-charge.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Luca Schuster',
    flag: '../../assets/flags/austria.png',
    sprite1: '../../assets/sprites/joltik.png',
    sprite2: '../../assets/sprites/vespiquen.png',
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
        cardImg: '../../assets/cards/2014-2016/vespiquen.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/special-charge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/bronzong.png',
    sprite2: '../../assets/sprites/aegislash.png',
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
        cardImg: '../../assets/cards/2014-2016/bronzong-break.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzong.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzor.png',
        "count": 4,
      },
      {
         "count": 2,
          "name": "Cobalion",
          "number": "74",
          "set": "STS"
      },
      {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/genesect-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/magearna-ex.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 10,
      },
    ]
  },
  {
    firstName: 'Freya Pearce',
    flag: '../../assets/flags/uk.png',
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
        "count": 3,
            "name": "Mew",
            "number": "29",
            "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/latios-ex.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ninja-boy.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-psychic.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Kojiro Tsuruta',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/volcanion.png',
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
        cardImg: '../../assets/cards/2014-2016/volcanion-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/volcanion.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/blacksmith.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-retrieval.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fire.png',
        "count": 13,
      }
    ]
  },
  {
    firstName: 'Kazuki Kasahara',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/volcanion.png',
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
        cardImg: '../../assets/cards/2014-2016/volcanion-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/volcanion.png',
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
        cardImg: '../../assets/cards/2014-2016/blacksmith.png',
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
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/energy-retrieval.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/scortched-earth.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fire.png',
        "count": 13,
      }
    ]
  },
  {
    firstName: 'Brandon Flowers',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/vespiquen.png',
    sprite2: '../../assets/sprites/vileplume.png',
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
        cardImg: '../../assets/cards/2014-2016/vespiquen.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vileplume.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/gloom.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/oddish.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/unown.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/toxicroak-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/revitalizer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/special-charge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/forest-of-giant-plants.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Hiroki Yano',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/greninja.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Yee Wei Chun',
    flag: '../../assets/flags/liberia-malaysia.png',
    sprite1: '../../assets/sprites/joltik.png',
    sprite2: '../../assets/sprites/pumpkaboo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Eric Gansman',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/joltik.png',
    sprite2: '../../assets/sprites/pumpkaboo.png',
    list: '../../assets/list-icon.png',
    type: 'purple',
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
        "count": 1,
            "name": "Mew",
            "number": "29",
            "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/captivating-pokepuff.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Jacob Lesage',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/bronzong.png',
    sprite2: '../../assets/sprites/aegislash.png',
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
        cardImg: '../../assets/cards/2014-2016/bronzong-break.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzong.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzong-metal-fortress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzor-defense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/genesect-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
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
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 10,
      },
    ]
  },
  {
    firstName: 'Kian Amini',
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
        cardImg: '../../assets/cards/2014-2016/galvantula.png',
        "count": 1,
      },
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
        "count": 1,
            "name": "Mew",
            "number": "29",
            "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
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
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/special-charge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Brit Pybas',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/seismitoad.png',
    sprite2: '../../assets/sprites/manaphy.png',
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
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manaphy-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex-grass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/glaceon-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/articuno.png',
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
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
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
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
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
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 12,
      }
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/seismitoad.png',
    sprite2: '../../assets/sprites/manaphy.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Simone Zucchelli',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/bronzong.png',
    sprite2: '../../assets/sprites/genesect.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'TJ Traquair',
    flag: '../../assets/flags/canada.png',
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
        "count": 2,
            "name": "Mew",
            "number": "29",
            "set": "FCO"
      },
      {
        "count": 2,
            "name": "Octillery",
            "number": "33",
            "set": "BKT"
      },
      {
        "count": 2,
            "name": "Remoraid",
            "number": "32",
            "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/special-charge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Shin Akiyama',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/audino-mega.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Patrick Landis',
    flag: '../../assets/flags/switzerland.png',
    sprite1: '../../assets/sprites/joltik.png',
    sprite2: '../../assets/sprites/pumpkaboo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Ciaran Farah',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/vespiquen.png',
    sprite2: '../../assets/sprites/vileplume.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/joltik.png',
    sprite2: '../../assets/sprites/pumpkaboo.png',
    list: '../../assets/sprites/blank.png',
    type: '', // galvantula
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Jit Min Lim',
    flag: '../../assets/flags/singapore.png',
    sprite1: '../../assets/sprites/vespiquen.png',
    sprite2: '../../assets/sprites/excadrill.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Gawein Wagner',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/bronzong.png',
    sprite2: '../../assets/sprites/aegislash.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/joltik.png',
    sprite2: '../../assets/sprites/pumpkaboo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Se Jun Park',
    flag: '../../assets/flags/korea.png',
    sprite1: '../../assets/sprites/zygarde-complete.png',
    sprite2: '../../assets/sprites/vileplume.png',
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
         "count": 2,
          "name": "Zygarde-EX",
          "number": "54",
          "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2014-2016/lucario-ex.png',
        "count": 1,
      },
      {
        "name": "Carbink BREAK",
            "number": "51",
            "set": "FCO",
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-safegaurd.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vileplume.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/gloom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/oddish.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zygarde.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/korrina.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/heavy-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/revitalizer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/forest-of-giant-plants.png',
        "count": 4,
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
    firstName: 'Paul Johnston',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/seismitoad.png',
    sprite2: '../../assets/sprites/manaphy.png',
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
        cardImg: '../../assets/cards/2014-2016/manaphy-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/glaceon-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/aurorus-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/articuno.png',
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
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
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
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 11,
      }
    ]
  },
  {
    firstName: 'Ryo Yamamotot',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/joltik.png',
    sprite2: '../../assets/sprites/pumpkaboo.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Fabien Pujol',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/sceptile-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-sceptile-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sceptile-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/steven.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/giovannis-scheme.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mega-turbo.png',
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
        cardImg: '../../assets/cards/2014-2016/energy-retrieval.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sceptile-spirit-link.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 10,
      }
    ]
  }
]

let seniors = [
  {
    firstName: 'Jesper Eriksen',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/vespiquen.png',
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
        cardImg: '../../assets/cards/2014-2016/yanmega-break.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yanmega.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yanma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vespiquen.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ariados.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/spinarak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/revitalizer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/special-charge.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Bursting Balloon",
          "number": "97",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2014-2016/forest-of-giant-plants.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Connor Pedersen',
    flag: '../../assets/flags/usa.png',
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
        cardImg: '../../assets/cards/2014-2016/zubat-phantom-forces.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
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
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Raphael Souto',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/trevenant.png',
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
        cardImg: '../../assets/cards/2014-2016/trevenant-break.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trevenant.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/phantump-ascension.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/steven.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/wally.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-psychic.png',
        "count": 8,
      }
    ]
  },
  {
    firstName: 'Calvin Connor',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/joltik.png',
    sprite2: '../../assets/sprites/vespiquen.png',
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
        cardImg: '../../assets/cards/2014-2016/vespiquen.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/unown.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
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
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Attar Ricco',
    flag: '../../assets/flags/indonesia.png',
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
        cardImg: '../../assets/cards/2014-2016/galvantula.png',
        "count": 1,
      },
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
        "count": 1,
            "name": "Mew",
            "number": "29",
            "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Spencer Perez-Dormitzer',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/manectric-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-manectric-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/raikou.png',
        "count": 1,
      },
      {
        "count": 1,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN"
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 3,
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
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Tanner Hurley',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/greninja.png',
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
        cardImg: '../../assets/cards/2014-2016/greninja-break.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/greninja.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/greninja-shuriken.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/frogadier-water-duplicates.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/froakie-bubble.png',
        "count": 3,
      },
      {
         "count": 4,
          "name": "Talonflame",
          "number": "96",
          "set": "STS"
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
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
        cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-retrieval.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/question-mark.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Kim Hyeok',
    flag: '../../assets/flags/korea.png',
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
        "count": 2,
            "name": "Mew",
            "number": "29",
            "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
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
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/special-charge.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/greninja.png',
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
    firstName: 'Alex Bobenrieth',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yveltal.png',
    sprite2: '../../assets/sprites/zoroark.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-sts.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zoroark-stand-in.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zorua-confuse.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zorua-hand.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/gallade.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
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
        cardImg: '../../assets/cards/2014-2016/maxie-hidden-ball-trick.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
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
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
      },
      {
        "count": 2,
          "name": "Bursting Balloon",
          "number": "97",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/reverse-valley.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      },
    ]
  }
]

let juniors = [
  {
    firstName: 'Shunto Sadahiro',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
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
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016//float-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/reverse-valley.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 10,
      },
      {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Riku Ushirosaka',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/trevenant.png',
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
        cardImg: '../../assets/cards/2014-2016/trevenant-break.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trevenant.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/phantump-ascension.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/wally.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/red-card.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-psychic.png',
        "count": 7,
      }
    ]
  },
  {
    firstName: 'Roan Godfrey-Robbins',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/trevenant.png',
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
        cardImg: '../../assets/cards/2014-2016/trevenant-break.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trevenant.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/phantump-ascension.png',
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
        cardImg: '../../assets/cards/2014-2016/wally.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/red-card.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Bursting Balloon",
          "number": "97",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-psychic.png',
        "count": 7,
      }
    ]
  },
  {
    firstName: 'Yuta Ozawa',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hydreigon-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016//float-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Kai Abe',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hydreigon-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016//float-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Enrico Marini',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/bronzong.png',
    sprite2: '../../assets/sprites/aegislash.png',
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
        cardImg: '../../assets/cards/2014-2016/bronzong-break.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzong.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzong-metal-fortress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bronzor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/genesect-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
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
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
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
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/assault-vest.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 11,
      },
    ]
  },
  {
    firstName: 'Asaki Hasegawa',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hydreigon-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016//float-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 10,
      },
      {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Christian Moreno',
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
        "count": 1,
            "name": "Mew",
            "number": "29",
            "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
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
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/special-charge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 Worlds";

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

    juniorList.appendChild(item_element);
  }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
