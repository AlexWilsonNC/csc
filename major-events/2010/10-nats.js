const masterList = document.querySelector('.uk-masters-ol');
const seniorList = document.querySelector('.uk-seniors-ol');
const juniorList = document.querySelector('.uk-juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
    {
        firstName: 'Sami Sekkoum',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
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
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
                "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/garchomp-lvx.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/garchomp-c.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/ambipom.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
            },
        ]
    },
    {
        firstName: 'Ian Elliot',
        sprite1: '../../assets/sprites/gardevoir.png',
        sprite2: '../../assets/sprites/entei-raikou.png',
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
        cardImg: '../../assets/cards/2008-2010',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Andy Stone',
        sprite1: '../../assets/sprites/kingdra.png',
        sprite2: '../../assets/sprites/machamp.png',
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
        cardImg: '../../assets/cards/2008-2010',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Karl Blake',
        sprite1: '../../assets/sprites/kingdra.png',
        sprite2: '../../assets/sprites/machamp.png',
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
        cardImg: '../../assets/cards/2008-2010',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Ryan Tur',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
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
        cardImg: '../../assets/cards/2008-2010',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Tom Hall',
        sprite1: '../../assets/sprites/kingdra.png',
        sprite2: '../../assets/sprites/machamp.png',
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
        cardImg: '../../assets/cards/2008-2010',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Charlie Holmes',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/palkia.png',
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
        cardImg: '../../assets/cards/2008-2010',
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
        cardImg: '../../assets/cards/2008-2010',
                "count": 4,
            },
        ]
    },
]

let seniors = [
    {
        firstName: 'Jak S-Armstead',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/jumpluff.png',
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
        cardImg: '../../assets/cards/2008-2010/jumpluff.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/skiploom.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/hoppip-bounce.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
                "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/regice.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/ditto-dna.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-grass.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/multi-energy-dp.png',
        "count": 2,
            },
        ]
    },
    {
        firstName: 'Adam Hawkins',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
        //   list: '../../assets/list-icon.png',
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
        firstName: 'Jonathan Cowley',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
        //   list: '../../assets/list-icon.png',
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
        firstName: 'Fares Sekkoum',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        //   list: '../../assets/list-icon.png',
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
        firstName: 'Ross Alexander',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
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
              cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/2008-2010/luxray.jpg',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/2008-2010/garchomp-lvx.png',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/2008-2010/garchomp-c.png',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2008-2010/uxie.png',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/2008-2010/azelf.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2008-2010/banette.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2008-2010/shuppet.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2008-2010/ambipom.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2008-2010/bronzong.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2008-2010/lucario.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
              "count": 1,,
              oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 1,
            },
            {
              cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2008-2010/poke-collector.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2008-2010/bebes-search.png',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2008-2010/poke-turn.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2008-2010/power-spray.png',
              "count": 4,
            },
            {
              cardImg: '../../assets/cards/2008-2010/sp-radar.png',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
              "count": 1,
            },
            {
              cardImg: '../../assets/cards/2008-2010/energy-gain.png',
              "count": 3,
            },
            {
              cardImg: '../../assets/cards/2008-2010/expert-belt.png',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
              "count": 5,
            },
            {
              cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
              "count": 2,
            },
            {
              cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
              "count": 4,
            },
          ]
    },
    {
        firstName: 'David Swan',
        sprite1: '../../assets/sprites/blaziken.png',
        sprite2: '../../assets/sprites/honchkrow.png',
        //   list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2008-2010',
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
        cardImg: '../../assets/cards/2008-2010',
                "count": 4,
            },
        ]
    },
]

let juniors = [
    {
        firstName: 'Danny Martin',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/kingdra.png',
        //   list: '../../assets/list-icon.png',
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
        firstName: 'Daniel Cowley',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        //   list: '../../assets/list-icon.png',
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
        firstName: 'Liam Wagstaff',
        sprite1: '../../assets/sprites/flygon.png',
        sprite2: '../../assets/sprites/nidoqueen.png',
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
        cardImg: '../../assets/cards/2008-2010/flygon-lvx.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/flygon.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/vibrava.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/trapinch-power.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/nidorina-2008.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/relicanth.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-hgss.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-fighting.png',
        "count": 5,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 1,
            },
        ]
    },
    {
        firstName: 'Luke C-Lowe',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        //   list: '../../assets/list-icon.png',
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 UK Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 UK Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 UK Nats";

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

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);