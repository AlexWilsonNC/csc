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
        firstName: 'Simone Soldo',
        sprite1: '../../assets/sprites/flygon.png',
        sprite2: '../../assets/sprites/castform.png',
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
        cardImg: '../../assets/cards/2007-2008/flygon-grass.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/flygon-ex-psychic.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/vibrava-psychic.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/trapinch-grass.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/nidoqueen-metal.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/nidorina.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/nidoran-metal.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/exeggutor-fighting.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/exeggcute-fighting.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/raqyuaza-ex-lightning.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/latios-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/mew-fire.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/chimecho-metal.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-researcher.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holons-farmer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/tv-reporter.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2006.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/switch.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/warp-point-2007.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/giant-stump.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/old-energy/delta-rainbow-energy.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Andrea Ceolin',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/grumpig.png',
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
        cardImg: '../../assets/cards/2007-2008/grumpig.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/grumpig-body.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/spoink.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/absol-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/celebi-ex-psychic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/latias-star.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/sudowoodo.png',
        "count": 1,,
            },
            {
               cardImg: '../../assets/cards/2004-2006/lm.031.dunsparce.jpg',
                "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/castform.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holons-magnemite.png',
        "count": 1,,
            },
            {
               cardImg: '../../assets/cards/2004-2006/lm.080.root_fossil.jpg',
                "count": 4,,
                oldCard: true
            },
            {
               cardImg: '../../assets/cards/2004-2006/lm.078.claw_fossil.jpg',
                "count": 4,,
                oldCard: true
            },
            {
            cardImg: '../../assets/cards/2004-2006/lm.079.mysterious_fossil.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2007-2008/marys-request.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/lanette-net-search.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/island-hermet.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holons-farmer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/cursed-stone.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/giant-stump.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/old-energy/water-energy-power-keepers.png',
        "count": 5,,
            },
            {
        cardImg: '../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/old-energy/holon-energy-wp.png',
        "count": 3,,
            },
        ]
    },
    {
        firstName: 'Alessio Parcianello',
        sprite1: '../../assets/sprites/raichu.png',
        sprite2: '../../assets/sprites/exeggutor.png',
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
        cardImg: '../../assets/cards/2007-2008',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Fabrizio Cremascoli',
        sprite1: '../../assets/sprites/exploud.png',
        sprite2: '../../assets/sprites/rayquaza.png',
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
        cardImg: '../../assets/cards/2007-2008',
                "count": 4,
            },
        ]
    },
]

let seniors = [
    {
        firstName: 'David Y',
        sprite1: '../../assets/sprites/metagross.png',
        sprite2: '../../assets/sprites/dragonite.png',
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
        cardImg: '../../assets/cards/2007-2008/metagross-deltaspecies.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/metagross-psychic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/metang-lightning.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/beldum-lightning.png',
        "count": 4,,
            },
            {
            cardImg: '../../assets/cards/2007-2008/ds.003.dragonite.jpg',
                "count": 3,,
                radiusCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/dragonair.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/dratini.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/dratini-hook.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/latios-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/latias-fire-body.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/raqyuaza-ex-lightning.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-researcher.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holons-farmer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2006.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/switch.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/warp-point-2007.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-ruins.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/giant-stump.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        "count": 7,,
            },
            {
        cardImg: '../../assets/cards/old-energy/special-metal-energy-2006.png',
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
        cardImg: '../../assets/cards/2007-2008',
                "count": 4,
            },
        ]
    },
]

let juniors = [
    {
        firstName: 'Adam Hawkins',
        sprite1: '../../assets/sprites/mew.png',
        sprite2: '../../assets/sprites/rayquaza.png',
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
        cardImg: '../../assets/cards/2007-2008/raqyuaza-ex-lightning.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/mew-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/exeggutor-fighting.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/exeggcute-fighting.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/lickitung.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/absol-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/latios-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/latias.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/stantler.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-voltorb.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-researcher.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/lanette-net-search.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/warp-point-2007.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/cursed-stone.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/giant-stump.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/old-energy/fighting-energy-power-keepers.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/old-energy/2007-multi-energy.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/old-energy/scramble-energy.png',
        "count": 2,,
            },
        ]
    },
    {
        firstName: 'Alex Bramham',
        sprite1: '../../assets/sprites/metagross.png',
        sprite2: '../../assets/sprites/dragonite.png',
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
        cardImg: '../../assets/cards/2007-2008/metagross-deltaspecies.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/metagross-psychic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/metang-lightning.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/beldum-lightning.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/ds.003.dragonite.jpg',
                "count": 3,,
                radiusCard: true
            },
            {
        cardImg: '../../assets/cards/2007-2008/dragonite-ex-grass.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2004-2006/dragonair.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/dratini.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/castform.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/latios-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/latios-star.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/mew-fire.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-voltorb.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-researcher.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holons-farmer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/mr-briney-compassion.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2006.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/warp-point-2007.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/giant-stump.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        "count": 7,,
            },
            {
        cardImg: '../../assets/cards/old-energy/special-metal-energy-2006.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Dan Dowling',
        sprite1: '../../assets/sprites/latias.png',
        sprite2: '../../assets/sprites/latios.png',
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
        cardImg: '../../assets/cards/2007-2008',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Ross Alexander',
        sprite1: '../../assets/sprites/flygon.png',
        sprite2: '../../assets/sprites/castform.png',
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
        cardImg: '../../assets/cards/2007-2008',
                "count": 4,
            },
        ]
    },
]

let tenEvent = [
    {
        firstName: 'Lars Lüdicke',
        sprite1: '../../assets/sprites/exeggutor.png',
        sprite2: '../../assets/sprites/ledian.png',
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
        cardImg: '../../assets/cards/2007-2008/exeggutor-fighting.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2007-2008/exeggcute-fighting.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2007-2008/ledian.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2007-2008/ledyba.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2007-2008/quagsire.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2007-2008/wooper.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2007-2008/marys-request.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2007-2008/lanette-net-search.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2007-2008/mr-briney-compassion.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2007-2008/cg.081.mysterious_shard.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2007-2008/energy-root.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2007-2008/crystal-shard-2007.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2007-2008/uf.080.curse_powder.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/protective-orb.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-ruins.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/old-energy/grass-energy-power-keepers.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/old-energy/fighting-energy-power-keepers.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/old-energy/delta-rainbow-energy.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/old-energy/double-rainbow-energy.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/scramble-energy.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        "count": 1,
            },
        ]
    },
    {
        firstName: 'Max Benczek',
        sprite1: '../../assets/sprites/mew.png',
        sprite2: '../../assets/sprites/rayquaza.png',
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
        cardImg: '../../assets/cards/2007-2008/raqyuaza-ex-lightning.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/lickitung.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/mew-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/exeggutor-fighting.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/exeggcute-fighting.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/skarmory-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/latios-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/latias.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/stantler.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/roselia.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-voltorb.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-researcher.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/marys-request.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holons-farmer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/switch.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/warp-point-2007.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/cursed-stone.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/giant-stump.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        "count": 5,,
            },
            {
        cardImg: '../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/old-energy/2007-multi-energy.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/old-energy/scramble-energy.png',
        "count": 1,,
            },
        ]
    },
    {
        firstName: 'Daniel Mummert',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/flygon.png',
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
        cardImg: '../../assets/cards/2007-2008',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Dennis Seebürger',
        sprite1: '../../assets/sprites/mew.png',
        sprite2: '../../assets/sprites/rayquaza.png',
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
        cardImg: '../../assets/cards/2007-2008',
                "count": 4,
            },
        ]
    },
]

let fiveEvent = [
    {
        firstName: 'Arco O',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/grumpig.png',
        list: '../../assets/list-icon.png',
        deck: [
            {
        cardImg: '../../assets/cards/2007-2008/grumpig.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/spoink.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/lm.031.dunsparce.jpg',
                 "count": 2,,
                 oldCard: true
             },
            {
        cardImg: '../../assets/cards/2004-2006/celebi-ex-psychic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/latias-star.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/cg.005.dugtrio.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/cg.050.diglett.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/castform.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holons-magnemite.png',
        "count": 1,,
            },
            {
               cardImg: '../../assets/cards/2004-2006/lm.080.root_fossil.jpg',
                "count": 4,,
                oldCard: true
            },
            {
               cardImg: '../../assets/cards/2004-2006/lm.078.claw_fossil.jpg',
                "count": 4,,
                oldCard: true
            },
            {
            cardImg: '../../assets/cards/2004-2006/lm.079.mysterious_fossil.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2007-2008/marys-request.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/lanette-net-search.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/holons-farmer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/cursed-stone.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/giant-stump.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/old-energy/water-energy-power-keepers.png',
        "count": 5,,
            },
            {
        cardImg: '../../assets/cards/old-energy/holon-energy-wp.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        "count": 2,,
            },
        ]
    },
    {
        firstName: 'Kevin de M',
        sprite1: '../../assets/sprites/raichu.png',
        sprite2: '../../assets/sprites/exeggutor.png',
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
        cardImg: '../../assets/cards/2008-2010',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Manuel B',
        sprite1: '../../assets/sprites/metagross.png',
        sprite2: '../../assets/sprites/dragonite.png',
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
        cardImg: '../../assets/cards/2008-2010',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Florens v H',
        sprite1: '../../assets/sprites/metagross.png',
        sprite2: '../../assets/sprites/dragonite.png',
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
        cardImg: '../../assets/cards/2008-2010',
                "count": 4,
            },
        ]
    },
]

let sixEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        // list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        // list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        // list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        // // list../../../assets/list-icon.png',
        list: '../../assets/sprites/blank.png',
        // list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2007 Italy Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2007 New Zealand Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2007 UK Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2007 Germany Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2007 Germany Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Germany Nats";

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