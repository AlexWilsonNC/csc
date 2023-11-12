const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Nick Robinson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
        cardImg: '../../assets/cards/2014-2016/vespiquen.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/unown.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
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
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Marcos Garcia',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
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
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
              cardImg: '../../assets/cards/2014-2016/latios-ex.png',
              "count": 1,,
          },
            {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
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
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/giovannis-scheme.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-aquas-secret-base.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Paul Johnston',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
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
        cardImg: '../../assets/cards/2014-2016/manaphy-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/glaceon-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/regice.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/articuno.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
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
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/energy-switch.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 11,,
            },
    ]
  },
  {
    firstName: 'Liam Williams',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
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
        cardImg: '../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hydreigon-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/latios-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-generations.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
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
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/dark-energy-generations.png',
        "count": 10,,
            },
            {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Chris Siakala',
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
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
        "count": 2,
            "name": "Mew",
            "number": "29",
            "set": "FCO",
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
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
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/metal-energy-generations.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Michael Bergerac',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2014-2016/trevenant-break.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trevenant.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/phantump-ascension.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2018-17/wally.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 2,,
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
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
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
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/red-card.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
        "count": 7,,
            },
    ]
  },
  {
    firstName: 'Jamie DePamphilis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2014-2016/trevenant-break.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trevenant.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/phantump-ascension.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/absol.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2018-17/wally.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 2,,
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
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/red-card.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/weakness-policy.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
        "count": 7,,
            },
    ]
  },
  {
    firstName: 'Fred Hoban',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vespiquen.png',
    sprite2: '../../../assets/sprites/vileplume.png',
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
        cardImg: '../../assets/cards/2014-2016/vespiquen.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vileplume.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/gloom.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/oddish.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/unown.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 2,,
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
        cardImg: '../../assets/cards/2014-2016/revitalizer.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/forest-of-giant-plants.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Kolton Day',
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
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/unown.png',
        "count": 2,,
            },
            {
        "count": 1,
            "name": "Mew",
            "number": "29",
            "set": "FCO",
            },
            {
        cardImg: '../../assets/cards/2014-2016/gallade.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/marowak.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/maxie-hidden-ball-trick.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/fighting-energy-generations.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Russell LaParre',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sorina Radu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
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
        cardImg: '../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hydreigon-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/latios-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-generations.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
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
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/dark-energy-generations.png',
        "count": 10,,
            },
            {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Jeremy Gibson',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Steven Singer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2014-2016/trevenant-break.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trevenant.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/phantump-ascension.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/wobbuffet.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
            },
            {
              cardImg: '../../assets/cards/2014-2016/n.png',
              "count": 3,,
          },
            {
        cardImg: '../../assets/cards/2018-17/wally.png',
        "count": 3,,
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
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
            },
            {
        "count": 4,
          "name": "Bursting Balloon",
          "number": "97",
          "set": "BKP",
            },
            {
              cardImg: '../../assets/cards/2014-2016/float-stone.png',
              "count": 2,,
          },
            {
              cardImg: '../../assets/cards/2014-2016/head-ringer.png',
              "count": 1,,
          },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
        "count": 5,,
            },
            {
        cardImg: '../../assets/cards/energy/mystery-energy.png',
        "count": 3,,
            },
    ]
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
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
        "count": 4,
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
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
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
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kian Amini',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Lance Bradshaw',
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
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/wobbuffet-generations.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        "count": 1,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN",
            },
            {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
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
        cardImg: '../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/lightning-energy-generations.png',
        "count": 5,,
            },
            {
        cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
        "count": 5,,
            },
    ]
  },
  {
    firstName: 'Andrew Krekeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2014-2016/trevenant-break.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trevenant.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/phantump-ascension.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/wobbuffet.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
              cardImg: '../../assets/cards/2014-2016/n.png',
              "count": 2,,
          },
            {
        cardImg: '../../assets/cards/2018-17/wally.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
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
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        "count": 4,
          "name": "Bursting Balloon",
          "number": "97",
          "set": "BKP",
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
        "count": 5,,
            },
            {
        cardImg: '../../assets/cards/energy/mystery-energy.png',
        "count": 3,,
            },
    ]
  },
  {
    firstName: 'Sam VerNooy',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ahmed Ali',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Justin Aaron',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tyler Ninomura',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zygarde-complete.png',
    sprite2: '../../../assets/sprites/vileplume.png',
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
         "count": 3,
          "name": "Zygarde-EX",
          "number": "54",
          "set": "FCO",
            },
            {
        "name": "Carbink BREAK",
            "number": "51",
            "set": "FCO",
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/carbink-safegaurd.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vileplume.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/gloom.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/oddish.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lucario-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/zygarde.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
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
        cardImg: '../../assets/cards/2014-2016/revitalizer.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/heavy-ball.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/forest-of-giant-plants.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/fighting-energy-generations.png',
        "count": 6,,
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
    firstName: 'Ryan Bruckner',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Elijah Covitz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/medicham.png',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Conner LaVelle',
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
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
        "count": 1,
            "name": "Mew",
            "number": "29",
            "set": "FCO",
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Jeremy Jallen',
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
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
        "count": 2,
            "name": "Mew",
            "number": "29",
            "set": "FCO",
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 3,,
            },
            {
              cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
              "count": 1,,
          },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/metal-energy-generations.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Drew Guritzky',
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
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
        "count": 1,
            "name": "Mew",
            "number": "29",
            "set": "FCO",
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/buddy-buddy-resuce.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Kevin Baxter',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/zoroark.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-generations.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/zoroark-break.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/zoroark-stand-in.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/zorua-confuse.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/gallade.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/druddigon.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/maxie-hidden-ball-trick.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/giovannis-scheme.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/reverse-valley.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/dark-energy-generations.png',
        "count": 5,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Taylor Duffin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jorge Garcia',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vespiquen.png',
    sprite2: '../../../assets/sprites/zoroark.png',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ryan Grant',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Grafton Roll',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zygarde-complete.png',
    sprite2: '../../../assets/sprites/carbink.png',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason Annichiarico',
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
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
        "count": 1,
            "name": "Mew",
            "number": "29",
            "set": "FCO",
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/buddy-buddy-resuce.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/lightning-energy-generations.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Aaron Clarke',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zygarde-complete.png',
    sprite2: '../../../assets/sprites/carbink.png',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andrew Wamboldt',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
        cardImg: '../../assets/cards/2014-2016/vespiquen.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/unown.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
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
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
              cardImg: '../../assets/cards/2014-2016/escape-rope.png',
              "count": 2,,
          },
            {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Edwin Lopez',
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
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
        "count": 2,
            "name": "Mew",
            "number": "29",
            "set": "FCO",
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
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
              cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
              "count": 1,,
          },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/buddy-buddy-resuce.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/metal-energy-generations.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Brad Curcio',
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
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
        "count": 2,
            "name": "Mew",
            "number": "29",
            "set": "FCO",
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
              cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
              "count": 2,,
          },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Mike Fouchet',
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
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
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
              cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
              "count": 1,,
          },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
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
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Damien Hardy',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Christian Ortiz',
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
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
        "count": 2,
            "name": "Mew",
            "number": "29",
            "set": "FCO",
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
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
              cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
              "count": 1,,
          },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/buddy-buddy-resuce.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/metal-energy-generations.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Dan Heilmeier',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'David Olivas',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'John Foster',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza-mega.png',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Aaron Tarbell',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Eddie Caumiant',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Michael Slutsky',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
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
        cardImg: '../../assets/cards/2014-2016/greninja-break.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/greninja.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/greninja-shuriken.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/frogadier-water-duplicates.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/froakie-bubble.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        "count": 4,
          "name": "Bursting Balloon",
          "number": "97",
          "set": "BKP",
            },
            {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 8,,
            },
    ]
  },
  {
    firstName: 'Stefan Tabaco',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/aromatisse.png',
    sprite2: '../../../assets/sprites/seismitoad.png',
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
        cardImg: '../../assets/cards/2014-2016/aromatisse.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/spritzee-beat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/spritzee-sweet-scent.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/m-rayquaza-ex-colorless.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-ex-dragon-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sylveon-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/malamar-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manaphy-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/n.png',
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
        cardImg: '../../assets/cards/2014-2016/pokemon-fan-club.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
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
        cardImg: '../../assets/cards/2014-2016/max-potion.png',
        "count": 2,
      },
      {
        "count": 1,
          "name": "Fairy Drop",
          "number": "99",
          "set": "FCO"
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
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fairy-garden.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-generations.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-rainbow.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Jeffrey Cheng',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/medicham.png',
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
        cardImg: '../../assets/cards/2014-2016/medicham.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/meditite.png',
        "count": 4,,
            },
            {
        "name": "Carbink BREAK",
            "number": "51",
            "set": "FCO",
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/carbink-safegaurd.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/regirock-ex.png',
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
        cardImg: '../../assets/cards/2014-2016/korrina.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
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
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
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
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
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
        cardImg: '../../assets/cards/2014-2016/focus-sash.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/fighting-energy-generations.png',
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
    firstName: 'JC Sharp',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jared Butler',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Travis Nunlist',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
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
        cardImg: '../../assets/cards/2014-2016/manaphy-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/aurorus-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/regice.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/articuno.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
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
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/energy-switch.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 12,,
            },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/zoroark.png',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Travis McKain',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ronald Marlow',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zygarde-complete.png',
    sprite2: '../../../assets/sprites/carbink.png',
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
        "count": 4,
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
        cardImg: '../../assets/cards/2014-2016/raikou.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
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
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/giovannis-scheme.png',
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
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/lightning-energy-generations.png',
        "count": 7,,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 3,,
            },
    ]
  },
  {
    firstName: 'Branden Jackson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zygarde-complete.png',
    sprite2: '../../../assets/sprites/carbink.png',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Darrell Moreno',
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
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
        "count": 2,
            "name": "Mew",
            "number": "29",
            "set": "FCO",
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
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
              cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
              "count": 1,,
          },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/buddy-buddy-resuce.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/metal-energy-generations.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Alex Koch',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 3,
      },
      {
        "count": 2,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN"
      },
      {
        "count": 2,
            "name": "Mew",
            "number": "29",
            "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2014-2016/trevenant-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/giovannis-scheme.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-generations.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/grass-energy-generations.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Kevin Murphy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vileplume.png',
    sprite2: '../../../assets/sprites/jolteon.png',
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
        cardImg: '../../assets/cards/2014-2016/vileplume.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/gloom.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/oddish.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
        "count": 2,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN",
            },
            {
        cardImg: '../../assets/cards/2014-2016/glaceon-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/manaphy-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vespiquen.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/unown.png',
        "count": 3,,
            },
            {
        "count": 1,
            "name": "Mew",
            "number": "29",
            "set": "FCO",
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
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/revitalizer.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/forest-of-giant-plants.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/lightning-energy-generations.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
            {
              cardImg: '../../assets/cards/energy/xy-energy-rainbow.png',
              "count": 3,,
          },
    ]
  },
  {
    firstName: 'Christian Velazquez',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Long Bui',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dalen Dockery',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/tyrantrum.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tyrantrum-ex.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/judge.png',
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
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-generations.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Samuel Hough',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vileplume.png',
    sprite2: '../../../assets/sprites/jolteon.png',
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
        cardImg: '../../assets/cards/2014-2016/vileplume.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/gloom.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/oddish.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 4,,
            },
            {
        "count": 2,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN",
            },
            {
        cardImg: '../../assets/cards/2014-2016/glaceon-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/manaphy-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/genesect-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/regice.png',
        "count": 1,,
            },
            {
        "count": 1,
            "name": "Mew",
            "number": "29",
            "set": "FCO",
            },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 3,,
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
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/forest-of-giant-plants.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/lightning-energy-generations.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-rainbow.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
]

let seniors = [
  {
    firstName: 'Brady Bourgeois',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
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
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
              cardImg: '../../assets/cards/2014-2016/n.png',
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
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
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
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Nolan Wilson',
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
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        "count": 1,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN",
            },
            {
              cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
              "count": 1,,
          },
          {
            cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
            "count": 1,,
        },
          {
            cardImg: '../../assets/cards/2014-2016/raikou.png',
            "count": 1,,
        },
        {
          cardImg: '../../assets/cards/2014-2016/mew.png',
          "count": 1,,
      },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
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
        cardImg: '../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/lightning-energy-generations.png',
        "count": 8,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 3,,
            },
    ]
  },
  {
    firstName: 'Patrick Martinez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
        cardImg: '../../assets/cards/2014-2016/vespiquen.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
              cardImg: '../../assets/cards/2014-2016/unown.png',
              "count": 2,,
          },
          {
            cardImg: '../../assets/cards/2014-2016/mew.png',
            "count": 1,,
        },
          {
            cardImg: '../../assets/cards/2014-2016/jirachi.png',
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
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/metal-energy-generations.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Joe Hebert',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
        cardImg: '../../assets/cards/2014-2016/vespiquen.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
              cardImg: '../../assets/cards/2014-2016/unown.png',
              "count": 3,,
          },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
            },
            {
              cardImg: '../../assets/cards/2014-2016/lysandre.png',
              "count": 1,,
          },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
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
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Ryan Billings',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vespiquen.png',
    sprite2: '../../../assets/sprites/vileplume.png',
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
        cardImg: '../../assets/cards/2014-2016/vespiquen.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vileplume.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/gloom.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/oddish.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/unown.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 4,,
            },
            {
        "count": 2,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN",
            },
            {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/forest-of-giant-plants.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/lightning-energy-generations.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Calvin Connor',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza-mega.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-ex-ros.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-ex-dragon-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 4,
      },
      {
        "count": 2,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN"
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 1,
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
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mega-turbo.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-spirit-link.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-generations.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alex Bobenrieth',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
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
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/manaphy-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/glaceon-ex.png',
        "count": 1,,
            },
            {
        "count": 1,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN",
            },
            {
        cardImg: '../../assets/cards/2014-2016/aurorus-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/regice.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/articuno.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/energy-switch.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 9,,
            },
            {
        cardImg: '../../assets/cards/energy/lightning-energy-generations.png',
        "count": 3,,
            },
    ]
  },
  {
    firstName: 'Ethan Colborn',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/joltik.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
        cardImg: '../../assets/cards/2014-2016/vespiquen.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
              cardImg: '../../assets/cards/2014-2016/unown.png',
              "count": 3,,
          },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
            },
            {
              cardImg: '../../assets/cards/2014-2016/lysandre.png',
              "count": 1,,
          },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
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
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
    ]
  },
]

let juniors = [
  {
    firstName: 'Liam Halliburton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
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
        cardImg: '../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/latios-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/tyrantrum-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-generations.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
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
        cardImg: '../../assets/cards/2014-2016/cassius.png',
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
              cardImg: '../../assets/cards/2014-2016/max-elixir.png',
              "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/dark-energy-generations.png',
        "count": 8,,
            },
            {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Travis Beckwith',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/genesect.png',
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
        cardImg: '../../assets/cards/2014-2016/genesect-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
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
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-generations.png',
        "count": 10,
      },
    ]
  },
  {
    firstName: 'Christian Moreno',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
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
        cardImg: '../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hydreigon-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-generations.png',
        "count": 1,,
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
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
            },
            {
              cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
              "count": 3,,
          },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
            },
            {
              cardImg: '../../assets/cards/2014-2016/muscle-band.png',
              "count": 1,,
          },
            {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/dark-energy-generations.png',
        "count": 9,,
            },
            {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Mikah Javier',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/genesect.png',
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
        cardImg: '../../assets/cards/2014-2016/bronzong-break.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
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
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-generations.png',
        "count": 10,
      },
    ]
  },
  {
    firstName: 'Alex Marmon',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/manectric-mega.png',
    sprite2: '../../../assets/sprites/ho-oh.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ho-oh-ex-purifying-fire.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
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
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-generations.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/grass-energy-generations.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-generations.png',
        "count": 2,
      },

    ]
  },
  {
    firstName: 'Ethan Moskowitz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/seismitoad.png',
    sprite2: '../../../assets/sprites/manaphy.png',
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
              cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
              "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/manaphy-ex.png',
        "count": 2,,
            },
            {
              cardImg: '../../assets/cards/2014-2016/articuno.png',
              "count": 2,,
          },
            {
        cardImg: '../../assets/cards/2014-2016/glaceon-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/regice.png',
        "count": 1,,
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
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/energy-switch.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 12,,
            },
    ]
  },
  {
    firstName: 'Kyle Inman',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/houndoom.png',
    sprite2: '../../../assets/sprites/bunnelby.png',
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
        cardImg: '../../assets/cards/2014-2016/houndoom-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
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
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-rockets-handiwork.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
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
        cardImg: '../../assets/cards/2014-2016/trick-shovel.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-aquas-secret-base.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-generations.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Isaac Petruski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/bronzong.png',
    sprite2: '../../../assets/sprites/genesect.png',
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
        cardImg: '../../assets/cards/2014-2016/genesect-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 1,
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-generations.png',
        "count": 10,
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 US Nats";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 US Nats";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 US Nats";

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
