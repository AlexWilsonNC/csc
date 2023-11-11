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
        firstName: 'Sami Sekkoum',
        sprite1: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010/la.007.kingdra.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/la.070.seadra.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/la.102.horsea.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/skuntank-sp.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-2007.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 8,,
            },
        ]
    },
    {
        firstName: 'Andy Stone',
        sprite1: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010/gengar-fainting-spell.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/haunter-smog.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/gastly.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/ge.103.cresselia_lv_x.jpg',
                "count": 1,,
                exCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/cresselia.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/pachirisu.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/pl.111.miasma_valley.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 9,
            },
            {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 3,
            }
        ]
    },
    {
        firstName: 'Yacine Sekkoum',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/kingdra.png',
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
        firstName: 'Johvan ',
        sprite1: '../../assets/sprites/dialga.png',
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
        firstName: 'Nitish Doolub',
        sprite1: '../../assets/sprites/gardevoir.png',
        sprite2: '../../assets/sprites/weavile.png',
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
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/kingdra.png',
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
        firstName: 'Ian Elliot',
        sprite1: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010/gengar-fainting-spell.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/haunter-smog.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/gastly.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/ge.103.cresselia_lv_x.jpg',
                "count": 1,,
                exCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/cresselia.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/pachirisu.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/pl.111.miasma_valley.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 9,
            },
            {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 3,
            }
        ]
    },
    {
        firstName: 'Aydenn ',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/kingdra.png',
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
        firstName: 'Nicholas Fotheringham',
        sprite1: '../../assets/sprites/dialga.png',
        sprite2: '../../assets/sprites/palkia.png',
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
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
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
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/metal-energy-special-dp.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 3,
            },
        ]
    },
    {
        firstName: 'Samuel McLewee',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/gengar.png',
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
        firstName: 'Adam Hawkins',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/magnezone.png',
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
            cardImg: '../../assets/cards/2008-2010/la.142.magnezone_lv_x.jpg',
            "count": 1,,
            exCard: true
        },
        {
            cardImg: '../../assets/cards/2008-2010/sf.006.magnezone.jpg',
            "count": 2,,
            oldCard: true
        },
        {
            cardImg: '../../assets/cards/2008-2010/sf.005.magnezone.jpg',
            "count": 1,,
            oldCard: true
        },
        {
            cardImg: '../../assets/cards/2008-2010/sf.042.magneton.jpg',
            "count": 2,,
            oldCard: true
        },
        {
            cardImg: '../../assets/cards/2008-2010/sf.066.magnemite.jpg',
            "count": 2,,
            oldCard: true
        },
        {
            cardImg: '../../assets/cards/2008-2010/sf.067.magnemite.jpg',
            "count": 2,,
            oldCard: true
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
            cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
            "count": 1,
        },
        {
            cardImg: '../../assets/cards/2008-2010/uxie.png',
            "count": 2,
        },
        {
            cardImg: '../../assets/cards/2008-2010/la.031.jirachi.jpg',
            "count": 3,,
            oldCard: true
        },
        {
            cardImg: '../../assets/cards/2008-2010/azelf.png',
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
            cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
            "count": 2,
        },
        {
            cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
            "count": 2,
        },
        {
            cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
            "count": 3,
        },
        {
            cardImg: '../../assets/cards/2008-2010/warp-point.png',
            "count": 3,
        },
        {
            cardImg: '../../assets/cards/2008-2010/premier-ball.png',
            "count": 2,
        },
        {
            cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
            "count": 2,
        },
        {
            cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
            "count": 2,
        },
        {
            cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
            "count": 2,
        },
        {
            cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
            "count": 7,
        },
        {
            cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
            "count": 4,
        },
        {
            cardImg: '../../assets/cards/energy/metal-energy-special-dp.png',
            "count": 4,
        },
        ]
    },
    {
        firstName: 'Luke P',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/kingdra.png',
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
        firstName: 'Luke Burke',
        sprite1: '../../assets/sprites/honchkrow.png',
        sprite2: '../../assets/sprites/toxicroak.png',
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
        firstName: 'Alex N',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/magnezone.png',
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
        firstName: 'Robert O',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/kingdra.png',
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
        firstName: 'Fares Sekkoum',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/tyranitar.png',
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
        firstName: 'Cameron Dilley',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/dialga.png',
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
        firstName: 'Christopher Fotheringham',
        sprite1: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010/la.007.kingdra.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/la.070.seadra.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/la.102.horsea.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bucks-training.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/poke-drawer-plus.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/pluspower.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/pokedex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/md.079.dawn_stadium.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 11,,
            },
            {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 2,,
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

let tenEvent = [
    {
        firstName: 'Tom Zhan',
        sprite1: '../../assets/sprites/azelf.png',
        sprite2: '../../assets/sprites/mesprit.png',
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
        firstName: 'Jonas Prohaska',
        sprite1: '../../assets/sprites/dialga.png',
        sprite2: '../../assets/sprites/mewtwo.png',
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
        firstName: 'Luca Schuster',
        sprite1: '../../assets/sprites/leafeon.png',
        sprite2: '../../assets/sprites/glaceon.png',
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
        cardImg: '../../assets/cards/2007-2008/leafeon-lvx.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/rr.045.leafeon.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2007-2008/glaceon-lvx.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2007-2008/glaceon.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/md.020.glaceon.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/md.034.vaporeon.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2007-2008/eevee-flowers.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/sf.032.bibarel.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/sf.054.bidoof.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/sw.073.venomoth.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/sw.116.venonat.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/md.013.rotom_.jpg',
                "count": 1,,
                oldCard: true
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
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/ar.090.professor_oaks_visit.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/bucks-training.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/switch-2007.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/pl.107.level_max.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/md.079.dawn_stadium.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/energy/grass-energy-capsule.png',
        "count": 7,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 7,
            },
            {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
                "count": 1,
            },
        ]
    },
    {
        firstName: 'Fillip Lausch',
        sprite1: '../../assets/sprites/darkrai.png',
        sprite2: '../../assets/sprites/venomoth.png',
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
        firstName: 'Samuel ',
        sprite1: '../../assets/sprites/gliscor.png',
        sprite2: '../../assets/sprites/rampardos.png',
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
        firstName: 'Patrick Li',
        sprite1: '../../assets/sprites/giratina-origin.png',
        sprite2: '../../assets/sprites/leafeon.png',
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

let fiveEvent = [
    {
        firstName: 'Dennis Mischitz',
        sprite1: '../../assets/sprites/dialga.png',
        sprite2: '../../assets/sprites/toxicroak.png',
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
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/toxicroak-sp-psychic.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/houndoom-sp.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/skuntank-sp.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/honchkrow-sp.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
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
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2008-2010/bucks-training.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/time-space-distortion.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/galactic-hq.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/lake-boundary.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/sp-energy.png',
        "count": 4,
            },
        ]
    },
    {
        firstName: 'Tobias J',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/porygon-z.png',
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
        firstName: 'Rudolf H',
        sprite1: '../../assets/sprites/blank.png',
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
        firstName: 'Bartholomew Kuma',
        sprite2: '../../assets/sprites/dialga.png',
        sprite1: '../../assets/sprites/palkia.png',
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
        cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
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
        "count": 3,
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
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/lake-boundary.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 5,
            },
            {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
            },
        ]
    },
    {
        firstName: 'Björn R',
        sprite2: '../../assets/sprites/dialga.png',
        sprite1: '../../assets/sprites/palkia.png',
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
        cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/metal-energy-special-dp.png',
        "count": 3,
            },
        ]
    },
]

let sixEvent = [
    {
        firstName: 'Sandro A',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/kingdra.png',
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
        firstName: 'Tobias Thesing',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/blaziken.png',
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
        cardImg: '../../assets/cards/2008-2010/ge.001.blaziken.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/pl.003.blaziken.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/ge.035.combusken.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/pl.099.torchic.jpg',
                "count": 4,,
                oldCard: true
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
        cardImg: '../../assets/cards/2008-2010/sf.097.heatran_lv_x.jpg',
                "count": 1,,
                exCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/la.006.heatran.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/la.014.rayquaza.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/sf.014.cherrim.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/sf.056.cherubi.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/duskull-shiny.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/pachirisu.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/switch-2007.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2008-2010/stark-mountain.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/energy/fire-energy-capsule.png',
        "count": 8,
            },
            {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
            },
        ]
    },
    {
        firstName: 'Kevin B',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/tyranitar.png',
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
        cardImg: '../../assets/cards/2008-2010/tyranitar.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/sf.047.pupitar.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/larvitar-fall.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/weavile.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/la.120.sneasel.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
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
        cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/sf.060.duskull.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/pachirisu.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/switch-2007.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        "count": 10,
            },
            {
        cardImg: '../../assets/cards/energy/dp-darkness-energy.png',
        "count": 4,
            },
        ]
    },
    {
        firstName: 'Dennis S',
        sprite1: '../../assets/sprites/dialga.png',
        sprite2: '../../assets/sprites/palkia.png',
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
        cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/metal-energy-special-dp.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2008-2010',
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
        cardImg: '../../assets/cards/2008-2010',
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 UK Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 Sweden Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 UK Nats";

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

// four
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 Austria Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 Germany Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 Germany Nats";

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