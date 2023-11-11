const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Justin Sanchez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
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
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tyrogue.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pachirisu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/elm-training-method.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/flower-shop-lady.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/super-scoop-up.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-circulator.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 10,
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Kyle Sucevich',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/donphan.png',
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
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/zoroark.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/zorua.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/donphan-prime.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/phanpy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/bouffalant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tyrogue-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jayson Harry',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dylan Lefavour',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/yanmega.png',
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
                 cardImg: '../../assets/cards/2010-2012/kingdra.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/seadra.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/horsea.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/yanmega.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/yanma.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/jirachi.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/blissey-prime.png',
        "count": 1,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/chansey.png',
        "count": 1,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/cleffa-hgss.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/tyrogue.png',
        "count": 1,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/pokemon-communication-hgss.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 3,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/energy/bw-energy-psychic.png',
        "count": 3,,
            },
            {
                 cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 3,,
            },
            {
                 cardImg: '../../assets/cards/energy/rescue-energy.png',
        "count": 2,,
            },
    ]
  },
  {
    firstName: 'Karl Kitchin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alex Frezza',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'James Arnold',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
    sprite2: '../../../assets/sprites/serperior.png',
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
        cardImg: '../../assets/cards/2010-2012/tyranitar-prime.webp',
                "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/ul.038.pupitar.jpg',
                "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/ul.051.larvitar.jpg',
                "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/serperior.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/servine.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/snivy.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/cleffa-hgss.png',
        "count": 3,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/tyrogue.png',
        "count": 1,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/jirachi.png',
        "count": 1,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/ud.040.unown_.jpg',
                "count": 1,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 3,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/elm-training-method.png',
        "count": 3,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/typhlosion.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Evan Mitchell',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Christopher Orr',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew.png',
    sprite2: '../../../assets/sprites/vileplume.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Evan Baker',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/emboar.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andrew Spencer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/yanmega.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Austin Zettel',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew.png',
    sprite2: '../../../assets/sprites/yanmega.png',
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
        cardImg: '../../assets/cards/2010-2012/mew-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/zoroark.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/zorua.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/crobat-prime.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/jirachi.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tyrogue-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/black-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/defender.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-exchanger.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-psychic.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Jason Schelin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/magnezone.png',
    sprite2: '../../../assets/sprites/emboar.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Curran Hill',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/yanmega.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Paarth Shah',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/donphan.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'David Richard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/donphan.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jimmy McClure',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'David S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Grafton Roll',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason M ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/vileplume.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Daniel A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/yanmega.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Anthony O',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/zekrom.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Adler Pierce',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ty Wheeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Eli M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/yanmega.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ryan M ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/magnezone.png',
    sprite2: '../../../assets/sprites/emboar.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Robbie W',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/donphan.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Noah Y',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yanmega.png',
    sprite2: '../../../assets/sprites/magnezone.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Simon B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/donphan.png',
    sprite2: '../../../assets/sprites/machamp.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Summer P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/donphan.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Toby N ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/yanmega.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Xander Pero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/ursaring.png',
    sprite2: '../../../assets/sprites/yanmega.png',
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
                 cardImg: '../../assets/cards/2010-2012/ursaring-prime.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/teddiursa.png',
        "count": 3,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/yanmega.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/yanma.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/sunflora.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/sunkern.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/vileplume.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/bellossom.png',
        "count": 1,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/gloom.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/oddish.png',
        "count": 3,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/roserade.png',
        "count": 1,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/roselia.png',
        "count": 1,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/jirachi.png',
        "count": 1,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/energy/bw-energy-grass.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Sydney Morisoli',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/typhlosion.png',
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
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ninetales.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/vulpix.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tyrogue-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/flower-shop-lady.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        "count": 13,
      },
    ]
  },
  {
    firstName: 'Juan Arenas',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/magnezone.png',
    sprite2: '../../../assets/sprites/emboar.png',
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
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Luke Sherman',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/reshiram.png',
    sprite2: '../../../assets/sprites/typhlosion.png',
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
        cardImg: '../../assets/cards/2010-2012',
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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 US Nats";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 US Nats";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 US Nats";

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
