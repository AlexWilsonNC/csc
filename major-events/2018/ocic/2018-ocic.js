const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');
// https://limitlesstcg.com/tournaments/150
let masters = [
  {
    firstName: 'Tord Reklev',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
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
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
         "count": 2,
          "name": "Gardevoir GX",
          "number": "93",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/gallade.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mew-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/giratina.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
         "count": 2,
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rare-candy-sum.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Fairy Energy",
          "number": "fairy",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Joe Ruettiger',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rockruff",
          "number": "73",
          "set": "GRI"
      },
      {
          "count": 1,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-break.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-bad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 9,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Philip Schulz',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
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
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
         "count": 2,
          "name": "Gardevoir GX",
          "number": "93",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/gallade.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mew-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/giratina.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
         "count": 2,
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rare-candy-sum.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Fairy Energy",
          "number": "fairy",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'William Azevedo',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/lycanroc.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 1,
        "name": "Multi Switch",
        "number": "129",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 9,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "73",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 9,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "73",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 9,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Corey Godfrey',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2018-17/ho-oh-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/turtonator-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/volcanion-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Kiawe",
          "number": "116",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 15,
          "name": "Fire Energy",
          "number": "fire",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Frank Percic',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
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
        "count": 3,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-break.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-bad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/espeon-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Roland Allen',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/hoopa-unbound.png',
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
        cardImg: '../../assets/cards/2018-17/hoopa-guard.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/giratina.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/special-charge.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/reverse-valley.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 9,
          "name": "Dark Energy",
          "number": "dark",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/zoroark.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
        "count": 1,
          "name": "Rockruff",
          "number": "73",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        "count": 2,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Greg Chin',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/golisopod.png',
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
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/zoroark.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/golisopod-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/wimpod.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mew-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
         "count": 1,
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "73",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 9,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tait Tran',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/zoroark.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 3,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
         "count": 1,
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
        "name": "Multi Switch",
        "number": "129",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Benjamin Pham',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/golisopod.png',
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
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/golisopod-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/wimpod.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 3,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Nico Alabas',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
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
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
         "count": 2,
          "name": "Gardevoir GX",
          "number": "93",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/gallade.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mew-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/giratina.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
         "count": 2,
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rare-candy-sum.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Fairy Energy",
          "number": "fairy",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Ben Anderson',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/lycanroc.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 10,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Huy Nguyen',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Magnus Kalland',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
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
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
         "count": 2,
          "name": "Gardevoir GX",
          "number": "93",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/gallade.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mew-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/giratina.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
         "count": 2,
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rare-candy-sum.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Fairy Energy",
          "number": "fairy",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Matthew Burris',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/golisopod.png',
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
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/golisopod-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/wimpod.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/01.png'
      },
      {
         "count": 1,
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Yong Liang Yap',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Malik Zaihan',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
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
        "count": 4,
          "name": "Tapu Bulu GX",
          "number": "32",
          "set": "PR-SM"
      },
      {
        "count": 3,
          "name": "Vikavolt",
          "number": "52",
          "set": "SUM"
      },
      {
       "count": 3,
          "name": "Grubbin",
          "number": "13",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2014-2016/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/skyla.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/rare-candy-sum.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Energy Recycler",
          "number": "123",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/heavy-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 7,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Perry Lim',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Keng Fai Lee',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brent Tonisson',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Gawein Wagner',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
        "count": 4,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 9,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Naomi Murn',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/lycanroc.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 10,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Yee Wei Chun',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jesper Eriksen',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
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
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
         "count": 2,
          "name": "Gardevoir GX",
          "number": "93",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/gallade.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mew-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/giratina.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
         "count": 2,
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rare-candy-sum.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Fairy Energy",
          "number": "fairy",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Bodhi Cutler',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/zoroark.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/lycanroc.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        cardImg: '../../assets/cards/2018-17/mew-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/giratina.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        "count": 2,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Multi Switch",
        "number": "129",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Zach Lesage',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
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
        "count": 4,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-break.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-bad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/scorched-earth.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 11,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shane Quinn',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Reuben Fong',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/volcanion.png',
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
        cardImg: '../../assets/cards/2018-17/volcanion-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/volcanion.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/turtonator-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professors-letter.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/energy-retrieval.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 13,
          "name": "Fire Energy",
          "number": "fire",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Rahul Reddy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
        "count": 4,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 9,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Keith Yong',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tomas Just',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "73",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-break.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-bad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 9,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Clifton Goh',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/golisopod.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Eric Si',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mitch Knuckey',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christopher Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "73",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 9,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Aaron Van Der Kolk',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Myles Blasonato',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
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
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/special-charge.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/red-card.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
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
        "count": 4,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-break.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-bad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/scorched-earth.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 11,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ryan Bielak',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Marc Lutz',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/zoroark.png',
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
        "count": 3,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        "count": 2,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
        "name": "Necrozma GX",
        "number": "63",
        "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Nicholas Hong',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Ryan Sabelhaus',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "73",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 9,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Luke McMahon',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Corey Munro',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Dominic Chow',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/golisopod.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Robin Schulz',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
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
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
         "count": 2,
          "name": "Gardevoir GX",
          "number": "93",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/gallade.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mew-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/giratina.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
         "count": 2,
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rare-candy-sum.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Fairy Energy",
          "number": "fairy",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Otavio Gouveia',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shane Chee',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/golisopod.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Joshua Bradley',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Igor Costa',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "73",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 9,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shaun Leong',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Sam Chen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brendon Schofield',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Paul Coletta',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/golisopod.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Henry Brand',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Shaun Murphy',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/volcanion.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jing Jun Wong',
    flag: '../../../assets/flags/hong-kong.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
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
          "name": "Gardevoir GX",
          "number": "93",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/gallade.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/kirlia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/kirlia-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/ralts.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sylveon-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
        "name": "Eevee",
        "number": "101",
        "set": "SUM"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mr-mime-fairy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/rare-candy-sum.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Counter Catcher",
          "number": "91",
          "set": "CIN"
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 8,
          "name": "Fairy Energy",
          "number": "fairy",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Sameer Sangwan',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Angus Johnson',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/golisopod.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",,
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        numImg: '../../assets/04.png'
      },
    ]
  },
]

// www.pokemon.com/us/play-pokemon/internationals/2019/oceania/tcg-junior

let seniors = [
  {
    firstName: 'Connor Pedersen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/espeon.png',
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
        cardImg: '../../assets/cards/2018-17/espeon-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 3,
        "name": "Eevee",
        "number": "101",
        "set": "SUM"
      },
      {
        "count": 2,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/drampa-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/espeon-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 8,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Magnus Pedersen',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/xerneas-active.png',
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
        cardImg: '../../assets/cards/2018-17/xerneas-break.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/xerneas.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mr-mime-fairy.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/energy-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/fairy-garden.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 12,
          "name": "Fairy Energy",
          "number": "fairy",
          "set": "SUM"
      },
      {
        "count": 3,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Brennan Kamerman',
    flag: '../../../assets/flags/netherlands.png',
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
        cardImg: '../../assets/cards/2018-17/greninja-break.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/greninja.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/frogadier-water-duplicates.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/froakie-bubble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/starmie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/staryu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-fini-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/energy-splash.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nicholas Apostolov',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/golisopod.png',
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
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/zoroark.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/golisopod-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/wimpod.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Zi Xing Chiew',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
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
        "count": 4,
          "name": "Tapu Bulu GX",
          "number": "32",
          "set": "PR-SM"
      },
      {
        "count": 3,
          "name": "Vikavolt",
          "number": "52",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/grubbin.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2014-2016/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/skyla.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/rare-candy-sum.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Energy Recycler",
          "number": "123",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/heavy-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 7,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 5,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Preston Ellis',
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
        cardImg: '../../assets/cards/2018-17/greninja-break.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/greninja.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/frogadier-water-duplicates.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/froakie-bubble.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/starmie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/staryu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/evosoda.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/energy-splash.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Piper Lepine',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
        "count": 4,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "73",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 9,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Cohen Grimshaw',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/wishiwashi-school.png',
    sprite2: '../../../assets/sprites/hoopa-unbound.png',
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
        cardImg: '../../assets/cards/2018-17/wishiwashi-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-guard.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/xurkitree-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/giratina.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/team-flare-grunt.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/team-rockets-handiwork.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Lusamine",
          "number": "96",
          "set": "CIN"
      },
      {
        cardImg: '../../assets/cards/2018-17/skyla.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Plumeria",
          "number": "120",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/01.png'
      },
      {
       "count": 1,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Team Skull Grunt",
          "number": "133",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Gladion",
          "number": "95",
          "set": "CIN"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Counter Catcher",
          "number": "91",
          "set": "CIN"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Crushing Hammer",
          "number": "115",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "SUM"
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Sebastian Enriquez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 3,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
        "count": 1,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
         "count": 1,
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 1,
        "name": "Multi Switch",
        "number": "129",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/reverse-valley.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Bodhi Robinson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
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
        "count": 4,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-break.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-bad.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/scorched-earth.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 11,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Kevin Sun',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/lycanroc.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
        "name": "Multi Switch",
        "number": "129",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 9,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mia Sun',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
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
        "count": 3,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/garbodor-garbotoxin.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trubbish-acid-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/espeon-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/parallel-city.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 3,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/energy-rainbow.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Max Kunde',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/golisopod.png',
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
        "count": 4,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/zoroark.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/golisopod-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/wimpod.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/mr-mime-fairy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
         "count": 1,
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/puzzle-of-time.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Soenke Ringel',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/lycanroc.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2014-2016/zygarde-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 1,
        "name": "Multi Switch",
        "number": "129",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 9,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Alex Blong',
    flag: '../../../assets/flags/new-zealand.png',
    sprite1: '../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
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
          "name": "Tapu Bulu GX",
          "number": "32",
          "set": "PR-SM"
      },
      {
        "count": 3,
          "name": "Vikavolt",
          "number": "52",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/charjabug.png',
        numImg: '../../assets/01.png'
      },
      {
       "count": 3,
          "name": "Grubbin",
          "number": "13",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/xurkitree-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/skyla.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/brigette.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/rare-candy-sum.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/heavy-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Energy Recycler",
          "number": "123",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 7,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 5,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Daniel Rosas',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sudowoodo-watch-n-learn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-sycamore.png',
        numImg: '../../assets/04.png'
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/n.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/float-stone.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 9,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/strong-energy.png',
        numImg: '../../assets/04.png'
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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2018 OCIC";

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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2018 OCIC";

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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2018 OCIC";

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
