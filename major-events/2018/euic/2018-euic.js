const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Tord Reklev',
    flag: '../../../assets/flags/norway.png',
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
        "count": 2,
          "name": "Golisopod GX",
          "number": "17",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Wimpod",
          "number": "16",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 1,
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
      },
      {
        cardImg: '../../assets/cards/2018-17/mr-mime-fairy.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
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
        "count": 3,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
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
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
      },
      {
        "count": 4,
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
    firstName: 'Zakary Krekeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/silvally.png',
    sprite2: '../../../assets/sprites/registeel.png',
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
        cardImg: '../../assets/cards/2018-17/silvally-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/type-null.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/registeel.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/celesteela-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2014-2016/genesect-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Kartana GX",
          "number": "70",
          "set": "CIN"
      },
      {
        cardImg: '../../assets/cards/2018-17/dhelmise.png',
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
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
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
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/fighting-memory.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 10,
          "name": "Metal Energy",
          "number": "metal",
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
    firstName: 'Christopher Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2018-17/kirlia-psychic.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/ralts-nap.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
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
        "count": 1,
          "name": "Alolan Vulpix",
          "number": "21",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 3,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
        "count": 4,
          "name": "Max Potion",
          "number": "128",
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
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        "count": 7,
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
    firstName: 'Michael Long',
    flag: '../../../assets/flags/canada.png',
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
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2018-17/skyla.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Evosoda",
          "number": "116",
          "set": "XY"
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
        "count": 2,
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
    firstName: 'Teodor Skjæveland',
    flag: '../../../assets/flags/norway.png',
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
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/zygarde-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/zygarde.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
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
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
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
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
      },
    ]
  },
  {
    firstName: 'Fredrik Wold',
    flag: '../../../assets/flags/norway.png',
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
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Zygarde GX",
          "number": "73",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/zygarde.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
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
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
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
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
      },
    ]
  },
  {
    firstName: 'Eemeli Reijonen',
    flag: '../../../assets/flags/finland.png',
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
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/volcanion.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/turtonator-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ho-oh-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
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
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
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
        "count": 3,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
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
        cardImg: '../../assets/cards/2018-17/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
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
    firstName: 'Magnus Kalland',
    flag: '../../../assets/flags/norway.png',
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
        "count": 2,
          "name": "Golisopod GX",
          "number": "17",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Wimpod",
          "number": "16",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 1,
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
      },
      {
        cardImg: '../../assets/cards/2018-17/mr-mime-fairy.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
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
        "count": 3,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
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
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
      },
      {
        "count": 4,
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
          "name": "Golisopod GX",
          "number": "17",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Wimpod",
          "number": "16",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 1,
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
      },
      {
        cardImg: '../../assets/cards/2018-17/mr-mime-fairy.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
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
        "count": 3,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
      },
      {
        "count": 4,
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
        "count": 4,
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
    firstName: 'Joao Joaquim',
    flag: '../../../assets/flags/portugal.png',
    sprite1: '../../../assets/sprites/decidueye.png',
    sprite2: '../../../assets/sprites/zoroark.png',
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
    firstName: 'Grafton Roll',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/silvally.png',
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
        cardImg: '../../assets/cards/2018-17/silvally-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/type-null.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 2,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/registeel.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/magearna-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/drampa-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/turtonator-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Giratina",
            "number": "184",
            "set": "PR-XY"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
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
        "count": 1,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
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
        cardImg: '../../assets/cards/2018-17/fighting-memory.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/psychic-memory.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 8,
          "name": "Metal Energy",
          "number": "metal",
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
    firstName: 'Stéphane Ivanoff',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/decidueye.png',
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
        "count": 4,
          "name": "Decidueye GX",
          "number": "12",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/dartrix.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 3,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
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
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 1,
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
         "count": 2,
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Evosoda",
          "number": "116",
          "set": "XY"
      },
      {
        "count": 2,
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
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
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
    firstName: 'Yasin Balela',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/silvally.png',
    sprite2: '../../../assets/sprites/registeel.png',
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
        cardImg: '../../assets/cards/2018-17/silvally-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/type-null.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/registeel.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/celesteela-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2014-2016/genesect-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Kartana GX",
          "number": "70",
          "set": "CIN"
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Latios",
          "number": "41",
          "set": "SLG"
      },
      {
        "count": 1,
            "name": "Giratina",
            "number": "184",
            "set": "PR-XY"
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
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
        cardImg: '../../assets/cards/2018-17/fighting-memory.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 11,
          "name": "Metal Energy",
          "number": "metal",
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
    firstName: 'Damian Wincenciak',
    flag: '../../../assets/flags/poland.png',
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
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/kirlia-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
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
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
          "name": "Max Potion",
          "number": "128",
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
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
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
    firstName: 'Ian Robb',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/drampa.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
    firstName: 'Sander Wojcik',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/heatmor.png',
    sprite2: '../../../assets/sprites/raichu.png',
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
        cardImg: '../../assets/cards/2018-17/heatmor.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/riachu-ability.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/pikachu-promo.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/pikachu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/victini.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/durant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/jirachi.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/xurkitree-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 2,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/skyla.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 1,
          "name": "Lusamine",
          "number": "96",
          "set": "CIN"
      },
      {
        cardImg: '../../assets/cards/2018-17/ninja-boy.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Gladion",
          "number": "95",
          "set": "CIN"
      },
      {
        cardImg: '../../assets/cards/2018-17/team-rockets-handiwork.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2018-17/devolution-spray.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Counter Catcher",
          "number": "91",
          "set": "CIN"
      },
      {
        "count": 2,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        "count": 2,
            "name": "Rainbow Energy",
            "number": "137",
            "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Stephan Nørregård',
    flag: '../../../assets/flags/denmark.png',
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
    firstName: 'Michael Slutsky',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2018-17/kirlia-psychic.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Alolan Vulpix",
          "number": "21",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 3,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
        "count": 4,
          "name": "Max Potion",
          "number": "128",
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
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        "count": 7,
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
    firstName: 'Clifton Goh',
    flag: '../../../assets/flags/singapore.png',
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
    firstName: 'Robin Schulz',
    flag: '../../../assets/flags/germany.png',
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
        "count": 3,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/zorua-bkt.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Golisopod GX",
          "number": "17",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Wimpod",
          "number": "16",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 1,
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
      },
      {
        cardImg: '../../assets/cards/2018-17/mr-mime-fairy.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
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
        "count": 3,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
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
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
      },
      {
        "count": 4,
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
        "count": 4,
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
    firstName: 'Brent Tonisson',
    flag: '../../../assets/flags/australia.png',
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
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/kirlia-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ralts.png',
        numImg: '../../assets/04.png'
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
        "count": 3,
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
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
          "name": "Max Potion",
          "number": "128",
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
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 1,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
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
    firstName: 'Israel Sosa',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/silvally.png',
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
        cardImg: '../../assets/cards/2018-17/silvally-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/type-null.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 2,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/registeel.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Kartana GX",
          "number": "70",
          "set": "CIN"
      },
      {
        cardImg: '../../assets/cards/2014-2016/scizor-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Necrozma GX",
        "number": "63",
        "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/turtonator-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
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
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/fighting-memory.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/psychic-memory.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 8,
          "name": "Metal Energy",
          "number": "metal",
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
    firstName: 'Benjamin Behrens',
    flag: '../../../assets/flags/norway.png',
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
        "count": 2,
          "name": "Golisopod GX",
          "number": "17",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Wimpod",
          "number": "16",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 1,
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
      },
      {
        cardImg: '../../assets/cards/2018-17/mr-mime-fairy.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
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
        "count": 3,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
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
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
      },
      {
        "count": 4,
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
    firstName: 'Gabriel Semedo',
    flag: '../../../assets/flags/brazil.png',
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
        "count": 3,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/zoroark.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/zorua-bkt.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Golisopod GX",
          "number": "17",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Wimpod",
          "number": "16",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 1,
          "name": "Latios",
          "number": "41",
          "set": "SLG"
      },
      {
        "count": 1,
          "name": "Kartana GX",
          "number": "70",
          "set": "CIN"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
        cardImg: '../../assets/cards/2018-17/special-charge.png',
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
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
            "name": "Rainbow Energy",
            "number": "137",
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
    sprite1: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2018-17/kirlia-psychic.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Alolan Vulpix",
          "number": "21",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 3,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
        "count": 4,
          "name": "Max Potion",
          "number": "128",
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
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        "count": 7,
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
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/drampa.png',
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
        cardImg: '../../assets/cards/2018-17/zoroark.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/zoroark-break.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/zorua-bkt.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/drampa-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 1,
          "name": "Latios",
          "number": "41",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/shining-jirachi.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
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
        cardImg: '../../assets/cards/2018-17/special-charge.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/po-town.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Dark Energy",
          "number": "dark",
          "set": "SUM"
      },
      {
        "count": 4,
            "name": "Rainbow Energy",
            "number": "137",
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
    firstName: 'Simon Humphrey',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/silvally.png',
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
        cardImg: '../../assets/cards/2018-17/silvally-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/type-null.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/espeon-ex.png',
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
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "N",
          "number": "105",
          "set": "FCO"
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
        "count": 1,
          "name": "Gladion",
          "number": "95",
          "set": "CIN"
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
        "count": 2,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2018-17/po-town.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 5,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
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
    firstName: 'Michael Pramawat',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
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
         "count": 3,
          "name": "Gardevoir GX",
          "number": "93",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/gallade.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/kirlia.png',
        numImg: '../../assets/02.png'
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
        "count": 2,
          "name": "Alolan Vulpix",
          "number": "21",
          "set": "GRI"
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        "count": 1,
            "name": "Giratina",
            "number": "184",
            "set": "PR-XY"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
        "count": 4,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        "count": 7,
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
    firstName: 'Frank Percic',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
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
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/sylveon-gx.png',
        numImg: '../../assets/01.png'
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
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
        "count": 3,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
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
    firstName: 'Juho Kallama',
    flag: '../../../assets/flags/finland.png',
    sprite1: '../../../assets/sprites/silvally.png',
    sprite2: '../../../assets/sprites/zoroark.png',
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
    sprite1: '../../../assets/sprites/golisopod.png',
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
          "name": "Golisopod GX",
          "number": "17",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Wimpod",
          "number": "16",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        "count": 3,
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
        cardImg: '../../assets/cards/2018-17/celesteela-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
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
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/heavy-ball.png',
        numImg: '../../assets/02.png'
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
        "count": 4,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 3,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
            "name": "Rainbow Energy",
            "number": "137",
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
    sprite1: '../../../assets/sprites/golisopod.png',
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
          "name": "Golisopod GX",
          "number": "17",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Wimpod",
          "number": "16",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        "count": 3,
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
        cardImg: '../../assets/cards/2018-17/celesteela-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
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
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/heavy-ball.png',
        numImg: '../../assets/02.png'
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
        "count": 4,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 3,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
            "name": "Rainbow Energy",
            "number": "137",
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
    firstName: 'Raz Wolpe',
    flag: '../../../assets/flags/isreal.png',
    sprite1: '../../../assets/sprites/volcanion.png',
    sprite2: '../../../assets/sprites/silvally.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2018-17/volcanion-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/volcanion.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/silvally-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/type-null.png',
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
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
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
        cardImg: '../../assets/cards/2018-17/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 14,
          "name": "Fire Energy",
          "number": "fire",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Martin Kaninsky',
    flag: '../../../assets/flags/czech-republic.png',
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
    firstName: 'Heddi Brahmi',
    flag: '../../../assets/flags/france.png',
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
        "count": 3,
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
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 3,
          "name": "Rockruff",
          "number": "73",
          "set": "GRI"
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
            "name": "Giratina",
            "number": "184",
            "set": "PR-XY"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
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
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/special-charge.png',
        numImg: '../../assets/02.png'
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
        "count": 1,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
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
    firstName: 'Leon Goellner',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
    sprite1: '../../../assets/sprites/espeon.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
    firstName: 'Daniel Melrose',
    flag: '../../../assets/flags/uk.png',
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
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
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
        cardImg: '../../assets/cards/2018-17/exp-share.png',
        numImg: '../../assets/03.png'
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
    firstName: 'Otavio Gouveia',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/drampa.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
    firstName: 'Jose Marrero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/metagross.png',
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
        cardImg: '../../assets/cards/2018-17/metagross-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/metang.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/beldum.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 1,
        "name": "Solgaleo GX",
        "number": "89",
        "set": "SUM"
      },
      {
        "count": 1,
          "name": "Cosmog",
          "number": "64",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Alolan Vulpix",
          "number": "21",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/magearna-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
        "count": 4,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 3,
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
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 8,
          "name": "Metal Energy",
          "number": "metal",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/decidueye.png',
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
        "count": 4,
          "name": "Decidueye GX",
          "number": "12",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/dartrix.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 2,
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
        cardImg: '../../assets/cards/2018-17/espeon-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Evosoda",
          "number": "116",
          "set": "XY"
      },
      {
        "count": 2,
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
        cardImg: '../../assets/cards/2018-17/special-charge.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 2,
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
    firstName: 'Seb Symonds',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/bisharp.png',
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
    firstName: 'Steffen Eriksen',
    flag: '../../../assets/flags/denmark.png',
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
    firstName: 'Bartosz Bialik',
    flag: '../../../assets/flags/poland.png',
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
    firstName: 'Jordan Palmer',
    flag: '../../../assets/flags/australia.png',
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
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/kirlia-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ralts.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sylveon-gx.png',
        numImg: '../../assets/01.png'
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
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
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
    firstName: 'Noel Totomoch',
    flag: '../../../assets/flags/usa.png',
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
         "count": 4,
          "name": "Gardevoir GX",
          "number": "93",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/gallade.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/kirlia-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/ralts.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sylveon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Eevee",
        "number": "101",
        "set": "SUM"
      },
      {
        "count": 3,
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
        "count": 1,
          "name": "Alolan Vulpix",
          "number": "21",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
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
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 1,
          "name": "Lusamine",
          "number": "96",
          "set": "CIN"
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
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 1,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
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
    firstName: 'Paulo Mimoso',
    flag: '../../../assets/flags/portugal.png',
    sprite1: '../../../assets/sprites/golisopod.png',
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
          "name": "Golisopod GX",
          "number": "17",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Wimpod",
          "number": "16",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        "count": 3,
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
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
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
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/heavy-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        "count": 3,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
            "name": "Rainbow Energy",
            "number": "137",
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
    firstName: 'Igor Costa',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/decidueye.png',
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
        "count": 4,
          "name": "Decidueye GX",
          "number": "12",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/dartrix.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 3,
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
        cardImg: '../../assets/cards/2018-17/espeon-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
        "count": 3,
          "name": "Evosoda",
          "number": "116",
          "set": "XY"
      },
      {
        "count": 3,
          "name": "Max Potion",
          "number": "128",
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
        cardImg: '../../assets/cards/2018-17/special-charge.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 2,
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
    firstName: 'Steven Mao',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/golisopod.png',
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
          "name": "Golisopod GX",
          "number": "17",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Wimpod",
          "number": "16",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        "count": 3,
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
        cardImg: '../../assets/cards/2018-17/celesteela-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
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
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/heavy-ball.png',
        numImg: '../../assets/01.png'
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
        "count": 4,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 3,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
            "name": "Rainbow Energy",
            "number": "137",
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
    firstName: 'Jolien Winkler',
    flag: '../../../assets/flags/belgium.png',
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
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/decidueye.png',
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
        "count": 4,
          "name": "Decidueye GX",
          "number": "12",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/dartrix.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        "count": 2,
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
        cardImg: '../../assets/cards/2018-17/espeon-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 3,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
        "count": 3,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Evosoda",
          "number": "116",
          "set": "XY"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/special-charge.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 2,
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
    firstName: 'Benjamin Pavey',
    flag: '../../../assets/flags/uk.png',
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
    firstName: 'Andrew Tandianus',
    flag: '../../../assets/flags/australia.png',
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
        numImg: '../../assets/01.png'
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
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/sylveon-gx.png',
        numImg: '../../assets/01.png'
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
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
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
    firstName: 'Jason Yong',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/golisopod.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
    firstName: 'Goncalo Ferreira',
    flag: '../../../assets/flags/portugal.png',
    sprite1: '../../../assets/sprites/decidueye.png',
    sprite2: '../../../assets/sprites/zoroark.png',
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
    firstName: 'Pedro Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/buzzwole.png',
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
        cardImg: '../../assets/cards/2018-17/zoroark.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Zorua",
          "number": "52",
          "set": "SLG"
      },
      {
        "count": 3,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
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
        cardImg: '../../assets/cards/2018-17/espeon-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Latios",
          "number": "41",
          "set": "SLG"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/special-charge.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/po-town.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
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
    firstName: 'Rolf Paanakker',
    flag: '../../../assets/flags/netherlands.png',
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
    firstName: 'Yee Wei Chun',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/golisopod.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
    firstName: 'Tobias Smutkowski',
    flag: '../../../assets/flags/germany.png',
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
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2018-17/skyla.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Evosoda",
          "number": "116",
          "set": "XY"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
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
    firstName: 'Karl Blake',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/drampa.png',
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
        cardImg: '../../assets/cards/2018-17/drampa-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/celesteela-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/espeon-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/jirachi.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
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
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
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
        "count": 4,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/po-town.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 5,
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
      {
        "count": 3,
            "name": "Rainbow Energy",
            "number": "137",
            "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Robert Kinbrum',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/metagross.png',
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
    firstName: 'Javier De Blas',
    flag: '../../../assets/flags/spain.png',
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
    firstName: 'Ondřej Škubal',
    flag: '../../../assets/flags/czech-republic.png',
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
        cardImg: '../../assets/cards/2018-17/espeon-ex.png',
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
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2018-17/skyla.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Evosoda",
          "number": "116",
          "set": "XY"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
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
        "count": 2,
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
    firstName: 'Lyder Iversen',
    flag: '../../../assets/flags/norway.png',
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
]

let seniors = [
  {
    firstName: 'Owyn Kamerman',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/golisopod.png',
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
          "name": "Golisopod GX",
          "number": "17",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Wimpod",
          "number": "16",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-fini-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 3,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/heavy-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 3,
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
            "name": "Rainbow Energy",
            "number": "137",
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
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Evosoda",
          "number": "116",
          "set": "XY"
      },
      {
        "count": 3,
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
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Max Potion",
          "number": "128",
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
    firstName: 'Connor Pedersen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/genesect.png',
    sprite2: '../../../assets/sprites/registeel.png',
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
        cardImg: '../../assets/cards/2014-2016/genesect-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/registeel.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/zorua-bkt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/zorua-whiny-voice.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/celesteela-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Giratina",
            "number": "184",
            "set": "PR-XY"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
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
        "count": 4,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 13,
          "name": "Metal Energy",
          "number": "metal",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Raymond Long',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/metagross.png',
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
        cardImg: '../../assets/cards/2018-17/metagross-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/metang.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/beldum.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 1,
        "name": "Solgaleo GX",
        "number": "89",
        "set": "SUM"
      },
      {
        "count": 2,
          "name": "Cosmog",
          "number": "64",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/magearna-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Alolan Vulpix",
          "number": "21",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
        "count": 4,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 2,
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
        "count": 9,
          "name": "Metal Energy",
          "number": "metal",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'William Wallace',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/tapu-koko.png',
    sprite2: '../../../assets/sprites/meowstic.png',
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
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/meowstic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/espurr.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/espeon-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
        "name": "Eevee",
        "number": "101",
        "set": "SUM"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/espeon-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/drampa-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Necrozma GX",
        "number": "63",
        "set": "BUS"
      },
      {
        "count": 1,
          "name": "Alolan Muk",
          "number": "58",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Alolan Grimer",
          "number": "57",
          "set": "SUM"
      },
      {
        "count": 1,
            "name": "Giratina",
            "number": "184",
            "set": "PR-XY"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
       "count": 2,
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
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
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
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/po-town.png',
        numImg: '../../assets/04.png'
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
    firstName: 'Stan J-Leonard',
    flag: '../../../assets/flags/uk.png',
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
        "count": 2,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/zoroark.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/zorua-bkt.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Golisopod GX",
          "number": "17",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Wimpod",
          "number": "16",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
            {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
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
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
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
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 6,
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
    firstName: 'Brady Guy',
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
        "count": 3,
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 3,
          "name": "Rockruff",
          "number": "73",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/regirock-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/espeon-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
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
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 4,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
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
    firstName: 'Julius Mo Krag',
    flag: '../../../assets/flags/denmark.png',
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
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/volcanion.png',
        numImg: '../../assets/04.png'
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
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/skyla.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
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
        cardImg: '../../assets/cards/2018-17/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 15,
          "name": "Fire Energy",
          "number": "fire",
          "set": "SUM"
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Daniel Rosas',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
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
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Alolan Vulpix",
          "number": "21",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 3,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
        "count": 4,
          "name": "Max Potion",
          "number": "128",
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
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        "count": 7,
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
    firstName: 'Christopher Kaas',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/blank.png',
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
          "name": "Gardevoir GX",
          "number": "93",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/gallade.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/kirlia.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-wild-river.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/diancie.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Alolan Vulpix",
          "number": "21",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
       "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/energy/energy-fairy.png',
        numImg: '../../assets/09.png'
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
    firstName: 'Maxence Feuillard',
    flag: '../../../assets/flags/france.png',
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
        "count": 2,
          "name": "Zoroark GX",
          "number": "53",
          "set": "SLG"
      },
      {
        cardImg: '../../assets/cards/2018-17/zoroark.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/zorua-whiny-voice.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/zorua-bkt.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Golisopod GX",
          "number": "17",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Wimpod",
          "number": "16",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/espeon-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Giratina",
            "number": "184",
            "set": "PR-XY"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
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
        "count": 3,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
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
        "count": 3,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 7,
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
    firstName: 'Joao Penteado',
    flag: '../../../assets/flags/brazil.png',
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
         "count": 4,
          "name": "Gardevoir GX",
          "number": "93",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/gallade.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/kirlia-psychic.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/sylveon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Eevee",
        "number": "101",
        "set": "SUM"
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Max Potion",
          "number": "128",
          "set": "GRI"
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
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 1,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
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
    firstName: 'Kaya Lichtleitner',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/golisopod.png',
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
          "name": "Golisopod GX",
          "number": "17",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Wimpod",
          "number": "16",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        "count": 3,
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
        cardImg: '../../assets/cards/2018-17/celesteela-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
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
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/heavy-ball.png',
        numImg: '../../assets/02.png'
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
        "count": 4,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 3,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
            "name": "Rainbow Energy",
            "number": "137",
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
    firstName: 'Walker Halliburton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/registeel.png',
    sprite2: '../../../assets/sprites/scizor.png',
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
        cardImg: '../../assets/cards/2018-17/registeel.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/celesteela-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/scizor-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Kartana GX",
          "number": "70",
          "set": "CIN"
      },
      {
        cardImg: '../../assets/cards/2018-17/drampa-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/dhelmise.png',
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
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
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
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
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
        "count": 1,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 10,
          "name": "Metal Energy",
          "number": "metal",
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
    firstName: 'Mariano Franco',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
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
         "count": 3,
          "name": "Gardevoir GX",
          "number": "93",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/gallade.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/kirlia.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/xerneas-break.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerneas-sts.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-wild-river.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/espeon-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/fisherman.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rare-candy-sum.png',
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
          "name": "Evosoda",
          "number": "116",
          "set": "XY"
      },
      {
        "count": 2,
          "name": "Rescue Stretcher",
          "number": "130",
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
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/fairy-garden.png',
        numImg: '../../assets/02.png'
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
    firstName: 'Krystal Florendo',
    flag: '../../../assets/flags/canada.png',
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
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/kirlia.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
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
        "count": 4,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 3,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2018 EUIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2018 EUIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2018 EUIC";

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
