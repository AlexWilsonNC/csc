const masterList = document.querySelector('.uk-masters-ol');
const seniorList = document.querySelector('.uk-seniors-ol');
const juniorList = document.querySelector('.uk-juniors-ol');
const sevenList = document.querySelector('.seven-ol');
const fiveList = document.querySelector('.five-ol');
const sixList = document.querySelector('.six-ol');
const tenList = document.querySelector('.ten-ol');
const meepList = document.querySelector('.meep-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
    {
        firstName: 'Jordan Palmer',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-generations.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/zoroark-break.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/zoroark-stand-in.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/zorua-confuse.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/druddigon.png',
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
        "count": 2,,
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
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/reverse-valley.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/dark-energy-generations.png',
        "count": 7,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Shane Quinn',
        sprite1: '../../assets/sprites/bronzong.png',
        sprite2: '../../assets/sprites/genesect.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Michael Kan',
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
        "count": 4,,
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
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
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
        firstName: 'Blake Davies',
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
        cardImg: '../../assets/cards/2014-2016/gallade.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/unown.png',
        "count": 2,,
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
        "count": 4,,
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
        firstName: 'Sameer Sangwan',
        sprite1: '../../assets/sprites/bronzong.png',
        sprite2: '../../assets/sprites/genesect.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Matty Masefield',
        sprite1: '../../assets/sprites/zygarde-complete.png',
        sprite2: '../../assets/sprites/vileplume.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Brendan Vagg',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/giratina-origin.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Daniel Collins',
        sprite1: '../../assets/sprites/jolteon.png',
        sprite2: '../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,
            },
        ]
    },
]

let seniors = [
    {
        firstName: 'Stephane Ruffe',
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
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/judge.png',
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
        "count": 3,,
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
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,,
            },
            {
        "count": 2,
          "name": "Bursting Balloon",
          "number": "97",
          "set": "BKP",
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
        firstName: 'Sylvain de la Crompe',
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
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trevenant.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trevenant-nevrous-seed.png',
        "count": 2,,
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
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2018-17/wally.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/judge.png',
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
        cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
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
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 3,,
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
        "count": 3,
          "name": "Bursting Balloon",
          "number": "97",
          "set": "BKP",
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
        "count": 7,,
            },
    ]
    },
    {
        firstName: 'Alexis Peiffer',
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
        cardImg: '../../assets/cards/2014-2016/judge.png',
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
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/buddy-buddy-resuce.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
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
        firstName: 'Frederic Lesage',
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
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/dedenne.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2018-17/wally.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
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
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
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
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 8,
            },
        ]
    },
    {
        firstName: 'Fabien Pujol',
        sprite1: '../../assets/sprites/seismitoad.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 4,,
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
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/judge.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/cassius.png',
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
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/red-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 2,,
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
        firstName: 'Joel Nguyen',
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
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/judge.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
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
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
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
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Julien Dalle',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/mewtwo-mega-y.png',
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
        cardImg: '../../assets/cards/2014-2016/mega-mewtwo-ex.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex-shatter-shot.png',
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
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2014-2016/judge.png',
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
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mewtwo-spirit-link.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shrine-of-memories.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
        "count": 6,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
            },
        ]
    },
    {
        firstName: 'Cedric Gouin',
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
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 4,,
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
        cardImg: '../../assets/cards/2014-2016/raikou.png',
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
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/judge.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/giovannis-scheme.png',
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
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mega-turbo.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
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
        cardImg: '../../assets/cards/energy/lightning-energy-generations.png',
        "count": 7,,
            },
            {
        cardImg: '../../assets/cards/energy/flash-energy.png',
        "count": 3,,
            },
    ]
    },
]

let juniors = [
    {
        firstName: 'Chrisowalantis Amanatidis',
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
        "count": 3,
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
        cardImg: '../../assets/cards/2014-2016/articuno.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/regice.png',
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
        cardImg: '../../assets/cards/2014-2016/judge.png',
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
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 12,
            },
        ]
    },
    {
        firstName: 'Fatih Akdemir',
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
        cardImg: '../../assets/cards/2014-2016/judge.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
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
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 2,,
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
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
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
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
        "count": 8,,
            },
    ]
    },
    {
        firstName: 'Robin Schulz',
        sprite1: '../../assets/sprites/seismitoad.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 4,,
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
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/judge.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/cassius.png',
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
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/red-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 2,,
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
        firstName: 'Benedikt Hugo',
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
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/judge.png',
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
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
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
        firstName: 'Tobias Smutkowski',
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
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/judge.png',
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
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
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
        firstName: 'Jan Baumann',
        sprite1: '../../assets/sprites/latios.png',
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
        cardImg: '../../assets/cards/2014-2016/latios-ex.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/unown.png',
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
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/revitalizer.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/red-card.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/forest-of-giant-plants.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        "count": 4,
            },
        ]
    },
    {
        firstName: 'Marc Lutz',
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
        "count": 3,
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
        cardImg: '../../assets/cards/2014-2016/articuno.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/regice.png',
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
        cardImg: '../../assets/cards/2014-2016/judge.png',
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
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 12,
            },
        ]
    },
    {
        firstName: 'Marco Haeder',
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
        "count": 4,
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
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
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
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
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
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 12,
            },
        ]
    },
]

let sevenEvent = [
    {
        firstName: 'Kevin Ponthieux',
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
        cardImg: '../../assets/cards/2014-2016/wobbuffet.png',
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
        cardImg: '../../assets/cards/2018-17/wally.png',
        "count": 2,,
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
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 1,,
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
        cardImg: '../../assets/cards/2014-2016/eco-arm.png',
        "count": 1,,
            },
            {
        "count": 3,
          "name": "Bursting Balloon",
          "number": "97",
          "set": "BKP",
            },
            {
        cardImg: '../../assets/cards/2014-2016/weakness-policy.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
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
        firstName: 'Simone Zucchelli',
        sprite1: '../../assets/sprites/bronzong.png',
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
        cardImg: '../../assets/cards/2014-2016/bronzor-payback.png',
        "count": 4,
            },
            {
        "name": "Genesect-EX",
            "number": "64",
            "set": "FCO",
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
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
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/assault-vest.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/metal-energy-generations.png',
        "count": 11,
            },
        ]
    },
    {
        firstName: 'Nicolo Castignoli',
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
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
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
        cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2018-17/wally.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/evosoda.png',
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
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 8,
            },
        ]
    },
    {
        firstName: 'Simone Soldo',
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
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2018-17/wally.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rare-candy.png',
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
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hard-charm.png',
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
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 8,
            },
        ]
    },
    {
        firstName: 'Riccardo Maganza',
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
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2018-17/wally.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
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
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
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
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hard-charm.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 8,
            },
        ]
    },
    {
        firstName: 'Simone Canziani',
        sprite1: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/unown.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-generations.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
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
        cardImg: '../../assets/cards/2014-2016/judge.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
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
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/revitalizer.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/forest-of-giant-plants.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/energy/dark-energy-generations.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
            },
        ]
    },
    {
        firstName: 'Vincenzo Gerardi',
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
        cardImg: '../../assets/cards/2014-2016/regice.png',
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
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/articuno.png',
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
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
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
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 12,
            },
        ]
    },
    {
        firstName: 'Gianluca Cipriano',
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
        cardImg: '../../assets/cards/2014-2016/pumpkaboo.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/joltik.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lampent.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vespiquen.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/teammates.png',
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
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
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
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
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
            },
        ]
    },
]

let fiveEvent = [
    {
        firstName: 'Tamao Cameron',
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
                    "count": 4,,
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
                    "count": 1,,
                },
                {
                    cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
                    "count": 2,,
                },
                {
                    cardImg: '../../assets/cards/2014-2016/judge.png',
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
                    cardImg: '../../assets/cards/2014-2016/mistys-determination-bkp.png',
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
                    cardImg: '../../assets/cards/2014-2016/acro-bike.png',
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
                    cardImg: '../../assets/cards/energy/xy-dce.png',
                    "count": 4,,
                },
        ]
    },
    {
        firstName: 'Scott Burgess',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-generations.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/zoroark-stand-in.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/zorua-confuse.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/unown.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/gallade.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
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
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
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
        "count": 6,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Oliver Barnett',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-generations.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/zoroark-break.png',
        "count": 2,,
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
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/druddigon.png',
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
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/giovannis-scheme.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/judge.png',
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
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,,
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
        "count": 6,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Daniel Melrose',
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
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trevenant.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trevenant-nevrous-seed.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/phantump-ascension.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/wobbuffet.png',
        "count": 2,,
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
        cardImg: '../../assets/cards/2018-17/wally.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/judge.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
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
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
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
        cardImg: '../../assets/cards/2014-2016/weakness-policy.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
        "count": 6,,
            },
            {
        cardImg: '../../assets/cards/energy/mystery-energy.png',
        "count": 1,,
            },
    ]
    },
    {
        firstName: 'Charles Barton',
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
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/judge.png',
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
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
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
        firstName: 'Richard Cherry',
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
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/frogadier-water-duplicates.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/froakie-bubble.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/dedenne.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2018-17/wally.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
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
        cardImg: '../../assets/cards/2014-2016/evosoda.png',
        "count": 1,
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
        cardImg: '../../assets/cards/energy/water-energy-generations.png',
        "count": 8,
            },
        ]
    },
    {
        firstName: 'Joseph Phillip',
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
        cardImg: '../../assets/cards/2014-2016/unown.png',
        "count": 3,,
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
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/judge.png',
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
        cardImg: '../../assets/cards/2014-2016/target-whistle.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
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
        firstName: 'Thomas Stephenson',
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
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trevenant.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trevenant-nevrous-seed.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/phantump-ascension.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/wobbuffet.png',
        "count": 2,,
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
        cardImg: '../../assets/cards/2018-17/wally.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/judge.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
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
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/red-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
            },
            {
        "count": 3,
          "name": "Bursting Balloon",
          "number": "97",
          "set": "BKP",
            },
            {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/psychic-energy-generations.png',
        "count": 8,,
            },
            {
        cardImg: '../../assets/cards/energy/mystery-energy.png',
        "count": 2,,
            },
    ]
    },
]

let sixEvent = [
    {
        firstName: 'Rose Gregson',
        sprite1: '../../assets/sprites/bronzong.png',
        sprite2: '../../assets/sprites/aegislash.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Joshua Richards',
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
        cardImg: '../../assets/cards/2014-2016/gallade.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/judge.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
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
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'David Mathias',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Josh Toulmin',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/mewtwo-mega-y.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Yasin Balela',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Kyle Guest',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/rayquaza-mega.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Jack Culkin',
        sprite1: '../../assets/sprites/joltik.png',
        sprite2: '../../assets/sprites/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Lucinda Barton',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
]

let tenEvent = [
    {
        firstName: 'Günther K',
        sprite1: '../../assets/sprites/zoroark.png',
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
        cardImg: '../../assets/cards/2014-2016/zoroark-break.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/zoroark-stand-in.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/zorua-confuse.png',
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
        cardImg: '../../assets/cards/2014-2016/unown.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-generations.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
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
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
            }
        ]
    },
    {
        firstName: 'Simon F',
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
        "count": 3,
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
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
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
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
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
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 1,
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
            },
        ]
    },
    {
        firstName: 'Dominik W',
        sprite1: '../../assets/sprites/seismitoad.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/greninja-break.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/greninja-shuriken.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/frogadeir-xy40.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/froakie-bubble.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mistys-determination-bkp.png',
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
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rare-candy.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 2,
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
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/bent-spoon.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 6,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
            },
        ]
    },
    {
        firstName: 'Lukas P',
        sprite1: '../../assets/sprites/manectric-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-manectric-ex.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/manectric-ex.png',
        "count": 4,
            },
            {
        "count": 2,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN"
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
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
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
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/tool-retriever.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 10,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
            },
        ]
    },
    {
        firstName: 'Filipp L',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/serperior.png',
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
        cardImg: '../../assets/cards/2014-2016/serperior.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/servine.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/snivy.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2014-2016/miltank.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
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
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/forest-of-giant-plants.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 5,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 3,
            },
        ]
    },
    {
        firstName: 'Luca S',
        sprite1: '../../assets/sprites/rayquaza-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-rayquaza-ex-colorless.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rayquaza-ex-ros.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rayquaza-ex-ros-dragon.png',
        "count": 1,
            },
            {
        "count": 3,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN"
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
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
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mega-turbo.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/rayquaza-spirit-link.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/xy-dce.png',
        "count": 4,
            },
        ]
    },
    {
        firstName: 'Tom Z',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/wailord.png',
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
        cardImg: '../../assets/cards/2014-2016/wailord-ex.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lucario-ex.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/carbink-safegaurd.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/durant-chip-off.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/cassius.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-rockets-handiwork.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/pokemon-fan-club.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/max-potion.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2014-2016/trick-shovel.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hard-charm.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-aquas-secret-base.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 2,
            },
        ]
    },
    {
        firstName: 'Karl W',
        sprite1: '../../assets/sprites/manectric-mega.png',
        sprite2: '../../assets/sprites/ho-oh.png',
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
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ho-oh-ex.png',
        "count": 2,
            },
            {
        "count": 2,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN"
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
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
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
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
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
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mega-turbo.png',
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
        cardImg: '../../assets/cards/2014-2016/manectric-spirit-link.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-fire.png',
        "count": 2,
            },
        ]
    },
]

let meepEvent = [
    {
        firstName: 'Gawein Wagner',
        sprite1: '../../assets/sprites/bronzong.png',
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
        cardImg: '../../assets/cards/2014-2016/bronzong-break.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/bronzong.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/bronzong-metal-fortress.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/bronzor.png',
        "count": 4,,
            },
            {
        "name": "Genesect-EX",
            "number": "64",
            "set": "FCO",
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
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
        cardImg: '../../assets/cards/2014-2016/az.png',
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
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
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
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/assault-vest.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 11,,
            }
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/manaphy.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/manaphy.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: '--',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/giratina-origin.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/manaphy.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/joltik.png',
        sprite2: '../../assets/sprites/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/trevenant.png',
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
        cardImg: '../../assets/cards/2014-2016',
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

        if (item.list === '../../assets/list-icon.png') {
            console.log('hey')
            item_element.addEventListener('click', function () {
                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 Australia Nats";

                if (item.type == 'psychic') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
                } else if (item.type == 'fire') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
                } else if (item.type == 'fairy') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
                } else if (item.type == 'normal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
                } else if (item.type == '') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/-bg.png)";
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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 France Nats";

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 Germany Nats";

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

// seven
function displayList4(array = []) {
    sevenList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 Italy Nats";

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

        sevenList.appendChild(item_element);
    }
}

// five
function displayList5(array = []) {
    fiveList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 UK Nats";

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

        fiveList.appendChild(item_element);
    }
}

// six
function displayList6(array = []) {
    sixList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 UK Nats";

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

        sixList.appendChild(item_element);
    }
}

// ten
function displayList10(array = []) {
    tenList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 Austria Nats";

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

        tenList.appendChild(item_element);
    }
}

// meep
function displayListmeep(array = []) {
    meepList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2016 Netherlands Nats";

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

        meepList.appendChild(item_element);
    }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
displayList4(sevenEvent);
displayList5(fiveEvent);
displayList6(sixEvent);
displayList10(tenEvent);
displayListmeep(meepEvent);
