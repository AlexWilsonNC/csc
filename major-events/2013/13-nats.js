const masterList = document.querySelector('.uk-masters-ol');
const seniorList = document.querySelector('.uk-seniors-ol');
const juniorList = document.querySelector('.uk-juniors-ol');
const tenList = document.querySelector('.ten-ol');
const fiveList = document.querySelector('.five-ol');
const sixList = document.querySelector('.six-ol');
const sevenList = document.querySelector('.seven-ol');
const eightList = document.querySelector('.eight-ol');
const nineList = document.querySelector('.nine-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
    {
        firstName: 'Anna Schipper',
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
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/zekrom-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/eelektrik.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/tynamo-nvi.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/bouffalant.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 7,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Mees Brenninkmeijer',
        sprite1: '../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Elmer Stouten',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'David Booij',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
]

let seniors = [
    {
        firstName: 'Kerwin Lee',
        sprite1: '../../assets/sprites/rayquaza.png',
        sprite2: '../../assets/sprites/eelektrik.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Shane Quinn',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Myles O’Neill',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
              cardImg: '../../assets/cards/2014-2016/kyurem.png',
              "count": 3,
            },
            {
              cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2014-2016/n-dex.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2014-2016/colress.png',
              "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 2,
              },
            {
              cardImg: '../../assets/cards/2014-2016/computer-search.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
              "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        "count": 4,
              },
            {
              cardImg: '../../assets/cards/2014-2016/colress-machine.png',
              "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        "count": 3,
              },
            {
              cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
              "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 1,
              },
            {
              cardImg: '../../assets/cards/energy/energy-plasma.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/energy/prism-energy.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/energy/blend-wlmf.png',
              "count": 4,
            },
          ]
    },
    {
        firstName: 'Thomas Winkelman',
        sprite1: '../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Michael Kan',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Jennifer Wilson',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Andrew Tan',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Joey Forster',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
]

let juniors = [
    {
        firstName: 'Janik Reimers',
        sprite1: '../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/dark-patch.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/random-receiver.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/dark-claw.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        "count": 10,
            },
            
        ]
    },
    {
        firstName: 'Joshua Galys',
        sprite1: '../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Paul Student',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Steven Mao',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Merlin Quittek',
        sprite1: '../../assets/sprites/landorus-therian.png',
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
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trubbish-drx.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trubbish-garbage-collec.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rescue-scarf.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        "count": 7,
            },
            {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
            },
        ]
    },
    {
        firstName: 'Markus Jakob',
        sprite1: '../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Thomas Werth',
        sprite1: '../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Tobias Thesing',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
              cardImg: '../../assets/cards/2014-2016/kyurem.png',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
              "count": 3,
            },
            {
              cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
              "count": 3,
            },
            {
              cardImg: '../../assets/cards/2014-2016/lugia-ex-plasma.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2014-2016/snorlax-block.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2014-2016/n-dex.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2014-2016/colress.png',
              "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 2,
              },
            {
        cardImg: '../../assets/cards/2014-2016/bianca.png',
        "count": 2,
              },
            {
              cardImg: '../../assets/cards/2014-2016/scramble-switch.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
              "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 3,
              },
            {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        "count": 3,
              },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        "count": 2,
              },
            {
              cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2010-2012/revive.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2014-2016/frozen-city.png',
              "count": 3,
            },
            {
        cardImg: '../../assets/cards/energy/bw-energy-water.png',
        "count": 1,
              },
            {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 1,
              },
            {
              cardImg: '../../assets/cards/energy/energy-plasma.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/energy/prism-energy.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/energy/blend-wlmf.png',
              "count": 3,
            },
            {
              cardImg: '../../assets/cards/energy/dce-bw.png',
              "count": 2,
            },
          ]
    },
    {
        firstName: 'Denny Falls Rodriguez',
        sprite1: '../../assets/sprites/accelgor.png',
        sprite2: '../../assets/sprites/gothitelle.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Finn Looft',
        sprite1: '../../assets/sprites/accelgor.png',
        sprite2: '../../assets/sprites/gothitelle.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Dennis Seebürger',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Daniel Hetzel',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Marcel Lung',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Ole Stognief',
        sprite1: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2014-2016/klinklang-bw.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/klinklang.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/klang-bw.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/klink-bw.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/cobalion-ex.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/cobalion-nvi.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/heavy-ball-bw.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/bw-energy-metal.png',
        "count": 10,
            },
        ]
    },
    {
        firstName: 'Marc Lutz',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Benjamin Cheynubrata',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
              cardImg: '../../assets/cards/2014-2016/kyurem.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
              "count": 3,
            },
            {
              cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
              "count": 3,
            },
            {
              cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2014-2016/n-dex.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2014-2016/colress.png',
              "count": 3,
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
              cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
              "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
        "count": 4,
              },
            {
              cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
              "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 4,
              },
            {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        "count": 3,
              },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 3,
              },
            {
              cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2010-2012/enhanced-hammer-bw.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2014-2016/frozen-city.png',
              "count": 1,
            },
            {
        cardImg: '../../assets/cards/energy/bw-energy-water.png',
        "count": 2,
              },
            {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 1,
              },
            {
              cardImg: '../../assets/cards/energy/energy-plasma.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/energy/prism-energy.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/energy/blend-wlmf.png',
              "count": 1,
            },
          ]
    },
]

let tenEvent = [
    {
        firstName: 'Mehdi Hafi',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/tornadus.png',
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
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2010-2012/tornadus-ex.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/terrakion-nvi.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/bianca.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/pluspower.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/energy-search.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        "count": 8,
            },
            {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
            },
        ]
    },
    {
        firstName: 'Antoine Avenard',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Herve Guillemet',
        sprite1: '../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Stéphane Ivanoff',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/tornadus.png',
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
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2010-2012/tornadus-ex.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/terrakion-nvi.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/bianca.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/pluspower.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/energy-search.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        "count": 8,
            },
            {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
            },
        ]
    },
    {
        firstName: 'Anthony Coutinho',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/garbodor.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Tony Nguyen',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/tornadus.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Caroline Gianasso',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Corentin Gaudfrain',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Thomas Badell',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/tornadus.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Christophe Caron',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Adrien Thiry',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/tornadus.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Matthieu Cornillon',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Boris Gisselere',
        sprite1: '../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Justine Woitrain',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Kenny Amari',
        sprite1: '../../assets/sprites/empoleon.png',
        sprite2: '../../assets/sprites/dusknoir.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Yann Rivière',
        sprite1: '../../assets/sprites/tornadus.png',
        sprite2: '../../assets/sprites/bouffalant.png',
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
                "count": 4,
            },
        ]
    },
]

let fiveEvent = [
    {
        firstName: 'Robert Kinbrum',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
              cardImg: '../../assets/cards/2014-2016/kyurem.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2014-2016/n-dex.png',
              "count": 3,
            },
            {
              cardImg: '../../assets/cards/2014-2016/colress.png',
              "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 2,
              },
            {
        cardImg: '../../assets/cards/2014-2016/bianca.png',
        "count": 2,
              },
            {
              cardImg: '../../assets/cards/2014-2016/computer-search.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
              "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        "count": 3,
              },
            {
              cardImg: '../../assets/cards/2014-2016/colress-machine.png',
              "count": 3,
            },
            {
              cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
              "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        "count": 1,
              },
              {
        cardImg: '../../assets/cards/2014-2016/random-receiver.png',
        "count": 1,
              },
              {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 1,
              },
            {
              cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
              "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/bw-energy-water.png',
        "count": 2,
              },
            {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 1,
              },
            {
              cardImg: '../../assets/cards/energy/energy-plasma.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/energy/prism-energy.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/energy/blend-wlmf.png',
              "count": 2,
            },
          ]
    },
    {
        firstName: 'Sami Sekkoum',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Ben Armstead',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Jake Walvin',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
              cardImg: '../../assets/cards/2014-2016/kyurem.png',
              "count": 3,
            },
            {
              cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2014-2016/n-dex.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2014-2016/colress.png',
              "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 3,
              },
            {
              cardImg: '../../assets/cards/2014-2016/scramble-switch.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
              "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 4,
              },
            {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        "count": 3,
              },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        "count": 3,
              },
              {
        cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
        "count": 2,
              },
            {
              cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/energy/energy-plasma.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/energy/prism-energy.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/energy/blend-wlmf.png',
              "count": 4,
            },
          ]
    },
    {
        firstName: 'Adam Hawkins',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Kai Coolston',
        sprite1: '../../assets/sprites/landorus-therian.png',
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
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trubbish-tool-drop.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/cobalion-nvi.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/cobalion-ex.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/bianca.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/scramble-switch.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/heavy-ball-bw.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch-bw.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/blend-wlmf.png',
        "count": 4,
            },
        ]
    },
    {
        firstName: 'Oliver Barnett',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Duncan Sugrue',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Alex Dao',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys-attack.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Darren Conlon',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/klinklang.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Michael Cornwall',
        sprite1: '../../assets/sprites/keldeo-resolute.png',
        sprite2: '../../assets/sprites/blastoise.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Karl Blake',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Alex Holdway',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Scott Burgess',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Vlad Jelizarov',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Oliver Elwick',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
]

let sixEvent = [
    {
        firstName: 'Stephan N',
        sprite1: '../../assets/sprites/lugia.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
        cardImg: '../../assets/cards/2014-2016/lugia-ex-plasma.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-dex.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/bianca.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch-bcr.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/blend-wlmf.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 3,
            },
        ]
    },
    {
        firstName: 'Patrick C',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Peter H',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Jonas E',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Simon E',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Nikolai R',
        sprite1: '../../assets/sprites/kyurem.png',
        sprite2: '../../assets/sprites/deoxys.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Lars A',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
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
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Niels P',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/darkrai.png',
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
                "count": 4,
            },
        ]
    },
]

let sevenEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
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
                "count": 4,
            },
        ]
    },
]

let eightEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
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
                "count": 4,
            },
        ]
    },
]

let nineEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2013 Netherlands Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2013 Australia Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2013 Germany Nats";

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

// ten
function displayList4(array = []) {
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2013 France Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2013 UK Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2013 Denmark Nats";

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

// seven
function displayList7(array = []) {
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Denmark Nats";

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

// eight
function displayList8(array = []) {
    eightList.innerHTML = '';

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Denmark Nats";

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

        eightList.appendChild(item_element);
    }
}

// nine
function displayList9(array = []) {
    nineList.innerHTML = '';

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Brazil Nats";

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

        nineList.appendChild(item_element);
    }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
displayList4(tenEvent);
displayList5(fiveEvent);
displayList6(sixEvent);
displayList7(sevenEvent);
displayList8(eightEvent);
displayList9(nineEvent);