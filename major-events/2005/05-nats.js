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
        firstName: 'Alexander Farrugia',
        sprite1: '../../assets/sprites/zapdos.png',
        sprite2: '../../assets/sprites/electrike.png',
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
        cardImg: '../../assets/cards/2004-2006/zapdos-ex.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/manectric.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/electrike.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/electrode-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/voltorb-recharge.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/lanette-net-search-e-reader.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/tr.086.rockets_admin.jpg',
                "count": 2,,
                radiusCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/super-scoop-up-2004.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/dual-ball.png',
        "count": 3,,
            },
                {
                    cardImg: '../../assets/cards/2004-2006/rg.097.pokemon_reversal.jpg',
                "count": 3,,
                radiusCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/ma.074.strength_charm.jpg',
                "count": 2,,
                radiusCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/battle-fronteir.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/old-energy/lightning-energy-emerald.png',
        "count": 17,,
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
        cardImg: '../../assets/cards/2004-2006',
                "count": 4,
            },
        ]
    },
]

let seniors = [
    {
        firstName: 'Chris McGiven',
        sprite1: '../../assets/sprites/moltres.png',
        sprite2: '../../assets/sprites/zapdos.png',
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
        cardImg: '../../assets/cards/2004-2006/zapdos-ex.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2004-2006/moltres-ex.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2004-2006/rg.006.kangaskhan.jpg',
                "count": 4,,
                radiusCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/wobbuffet-safegaurd.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2004-2006/rayquaza-star.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2004-2006/lanette-net-search-e-reader.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2004-2006/scott.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2004-2006/mr-stones-project.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2004-2006/exp-all.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2004-2006/battle-fronteir.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/old-energy/fire-energy-emerald.png',
        "count": 11,
            },
            {
        cardImg: '../../assets/cards/old-energy/lightning-energy-emerald.png',
        "count": 11,
            },
            {
        cardImg: '../../assets/cards/old-energy/psychic-energy-emerald.png',
        "count": 2,
            },
        ]
    },
    {
        firstName: 'Faisal Khan',
        sprite1: '../../assets/sprites/tyranitar.png',
        sprite2: '../../assets/sprites/ampharos.png',
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
        cardImg: '../../assets/cards/2004-2006',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Sami Sekkoum',
        sprite1: '../../assets/sprites/lanturn.png',
        sprite2: '../../assets/sprites/hypno.png',
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
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
            "count": 4,,
            oldCard: true
        },
        {
            cardImg: '../../assets/cards/2004-2006/hl.038.lanturn.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/2004-2006/chinchou-random.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/2004-2006/dark-hypno.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/2004-2006/drowzee.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/2004-2006/magcargo.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/2004-2006/slugma-old.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/2004-2006/rhydon.png',
            "count": 1,,
        },
        {
            cardImg: '../../assets/cards/2004-2006/rhyhorn.png',
            "count": 1,,
        },
        {
            cardImg: '../../assets/cards/2004-2006/dx.009.jirachi.png',
            "count": 1,,
        },
        {
            cardImg: '../../assets/cards/2004-2006/dr.088.tv_reporter.jpg',
            "count": 3,,
            radiusCard: true
        },
            {
        cardImg: '../../assets/cards/2004-2006/rg.088.celios_network.jpg',
            "count": 3,,
            radiusCard: true
        },
            {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
            "count": 3,,
        },
        {
            cardImg: '../../assets/cards/2004-2006/tr.086.rockets_admin.jpg',
            "count": 1,,
            radiusCard: true
        },
        {
            cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
            "count": 3,,
        },
        {
            cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
            "count": 1,,
        },
        {
            cardImg: '../../assets/cards/2004-2006/switch-e-reader.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/2004-2006/crystal-shard.png',
            "count": 2,,
        },
            {
        cardImg: '../../assets/cards/2004-2006/ma.074.strength_charm.jpg',
            "count": 1,,
            radiusCard: true
        },
            {
        cardImg: '../../assets/cards/2004-2006/hl.085.ancient_technical_machine_rock.jpg',
            "count": 1,,
            radiusCard: true
        },
        {
            cardImg: '../../assets/cards/2004-2006/battle-fronteir.png',
            "count": 3,,
        },
        {
            cardImg: '../../assets/cards/old-energy/lightning-energy-emerald.png',
            "count": 3,,
        },
        {
            cardImg: '../../assets/cards/old-energy/psychic-energy-emerald.png',
            "count": 3,,
        },
        {
            cardImg: '../../assets/cards/old-energy/fighting-energy-emerald.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
            "count": 3,,
        },
        {
            cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
            "count": 3,,
        },
        {
            cardImg: '../../assets/cards/old-energy/scramble-energy.png',
            "count": 2,,
        },
        ]
    },
    {
        firstName: 'John Hawkins',
        sprite1: '../../assets/sprites/tyranitar.png',
        sprite2: '../../assets/sprites/pidgeot.png',
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
        cardImg: '../../assets/cards/2004-2006',
                "count": 4,
            },
        ]
    },
]

let juniors = [
    {
        firstName: 'Nicholas Fotheringham',
        sprite1: '../../assets/sprites/dragonite.png',
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
        cardImg: '../../assets/cards/2004-2006/dark-dragonite.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/dark-dragonair.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/dratini-dragon-song.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/sneasel-ex.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/dark-electrode.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/voltorb-recharge.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/scyther-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/lanette-net-search.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/scott-old.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/tr.089.rockets_poke_ball.jpg',
                "count": 4,,
                radiusCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/dual-ball-old.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/switch.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/sk.122.crystal_shard.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/rockets-hideout.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
                "count": 2,,
            },
            {
        cardImg: '../../assets/cards/old-energy/darkness-energy-e-reader.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/old-energy/dark-metal-energy-rocket.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-e-reader.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/old-energy/r-energy.png',
        "count": 3,,
            },
        ]
    },
    {
        firstName: 'Yacine Sekkoum',
        sprite1: '../../assets/sprites/dragonite.png',
        sprite2: '../../assets/sprites/electrode.png',
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
        cardImg: '../../assets/cards/2004-2006',
                "count": 4,
            },
        ]
    },
]

let tenEvent = [
    {
        firstName: 'Adam Hawkins',
        sprite1: '../../assets/sprites/dragonite.png',
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
        cardImg: '../../assets/cards/2004-2006/dark-dragonite.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/dark-dragonair.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/dratini-dragon-song.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/dark-electrode.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/voltorb-recharge.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/ss.089.wallys_training.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/mr-briney-compassion.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/warp-point.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/ma.074.strength_charm.jpg',
                "count": 1,,
                radiusCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/sk.122.crystal_shard.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/rockets-hideout.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
                "count": 2,,
            },
            {
        cardImg: '../../assets/cards/old-energy/darkness-energy-e-reader.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/old-energy/dark-metal-energy-rocket.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-e-reader.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/old-energy/r-energy.png',
        "count": 2,,
            },
        ]
    },
    {
        firstName: 'Peter C',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/gardevoir.png',
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
        cardImg: '../../assets/cards/2004-2006',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Ross M ',
        sprite1: '../../assets/sprites/dragonite.png',
        sprite2: '../../assets/sprites/electrode.png',
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
        cardImg: '../../assets/cards/2004-2006',
                "count": 4,
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
        cardImg: '../../assets/cards/2004-2006',
                "count": 4,
            },
        ]
    },
]

let fiveEvent = [
    {
        firstName: 'Daniel C',
        sprite1: '../../assets/sprites/ludicolo.png',
        sprite2: '../../assets/sprites/lanturn.png',
        // // list../../../assets/list-icon.png',
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
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // // list../../../assets/list-icon.png',
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
        firstName: 'Anna Schipper',
        sprite1: '../../assets/sprites/tyranitar.png',
        sprite2: '../../assets/sprites/electrode.png',
        // // list../../../assets/list-icon.png',
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
        firstName: 'Eric',
        sprite1: '../../assets/sprites/dragonite.png',
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
        cardImg: '../../assets/cards/2004-2006/dark-dragonite.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2004-2006/dark-dragonair.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2004-2006/dratini.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2004-2006/dark-electrode.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2004-2006/voltorb.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2004-2006/voltorb-ram.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2004-2006/tr.012.kingdra.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/tr.048.seadra.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/tr.058.horsea.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/em.096.milotic_ex.jpg',
                "count": 1,,
                exCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/feebas-ascension.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2004-2006/regirock-ex.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2004-2006/rockets-mission.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2004-2006/mr-briney-compassion.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2004-2006/scott.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2004-2006/great-ball.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2004-2006/tr.089.rockets_poke_ball.jpg',
                "count": 2,,
                radiusCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2004-2006/rockets-hideout.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2004-2006/rockets-tricky-gym.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/old-energy/darkness-energy-e-reader.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/old-energy/dark-metal-energy-rocket.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-e-reader.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/old-energy/double-rainbow-energy.png',
        "count": 2,
            },
        ]
    },
]

let sixEvent = [
    {
        firstName: 'Anna Schipper',
        sprite1: '../../assets/sprites/ludicolo.png',
        sprite2: '../../assets/sprites/lanturn.png',
        // // list../../../assets/list-icon.png',
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
        sprite1: '../../assets/sprites/blastoise.png',
        sprite2: '../../assets/sprites/articuno.png',
        // // list../../../assets/list-icon.png',
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
        firstName: 'Jeroen R',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/groudon.png',
        // // list../../../assets/list-icon.png',
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
        firstName: 'John',
        sprite1: '../../assets/sprites/exploud.png',
        sprite2: '../../assets/sprites/metagross.png',
        // // list../../../assets/list-icon.png',
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
        firstName: 'Eric',
        sprite1: '../../assets/sprites/tyranitar.png',
        sprite2: '../../assets/sprites/kingdra.png',
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
        cardImg: '../../assets/cards/2004-2006/dark-tyranitar.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2004-2006/dark-tyranitar-body.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2004-2006/dark-pupitar-explosive.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2004-2006/larvitar.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2004-2006/tr.012.kingdra.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/tr.048.seadra.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/tr.058.horsea.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/dx.009.jirachi.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2004-2006/tv-reporter.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2004-2006/mr-briney-compassion.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2004-2006/tr.089.rockets_poke_ball.jpg',
                "count": 2,,
                radiusCard: true
            },
            {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2004-2006/switch.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2004-2006/hl.085.ancient_technical_machine_rock.jpg',
                "count": 3,,
                radiusCard: true
            },
            {
        cardImg: '../../assets/cards/old-energy/darkness-energy-e-reader.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/old-energy/r-energy.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/old-energy/dark-metal-energy.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/old-energy/scramble-energy.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-e-reader.png',
        "count": 1,
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2005 Malta Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2005 UK Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2005 UK Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2005 UK Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2005 Austria Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2005 Netherlands Nats";

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