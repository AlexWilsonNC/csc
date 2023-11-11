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
         "count": 1,
          "name": "Gallade",
          "number": "84",
          "set": "BKT"
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
        "count": 1,
            "name": "Mew-EX",
            "number": "126",
            "set": "PR-XY"
      },
      {
        "count": 1,
            "name": "Giratina",
            "number": "184",
            "set": "PR-XY"
      },
      {
        "count": 3,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 3,
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
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Rare Candy",
          "number": "129",
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
        "count": 2,
          "name": "Regirock-EX",
          "number": "43",
          "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-break.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-bad.png',
        "count": 1,
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
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
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
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
         "count": 1,
          "name": "Gallade",
          "number": "84",
          "set": "BKT"
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
        "count": 1,
            "name": "Mew-EX",
            "number": "126",
            "set": "PR-XY"
      },
      {
        "count": 1,
            "name": "Giratina",
            "number": "184",
            "set": "PR-XY"
      },
      {
        "count": 3,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 3,
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
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Rare Candy",
          "number": "129",
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
        "count": 1,
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
        "count": 2,
          "name": "Regirock-EX",
          "number": "43",
          "set": "FCO"
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "count": 1,
        "name": "Multi Switch",
        "number": "129",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
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
        "count": 1,
          "name": "Regirock-EX",
          "number": "43",
          "set": "FCO"
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
      },
      {
        "count": 1,
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
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
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        "count": 1,
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
          "name": "Energy Switch",
          "number": "117",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
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
        "count": 1,
          "name": "Regirock-EX",
          "number": "43",
          "set": "FCO"
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
      },
      {
        "count": 1,
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
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
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        "count": 1,
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
          "name": "Energy Switch",
          "number": "117",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
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
        "count": 3,
      },
      {
        "count": 3,
              "name": "Turtonator GX",
              "number": "18",
              "set": "GRI"
      },
      {
        "count": 2,
            "name": "Volcanion-EX",
            "number": "26",
            "set": "STS"
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
         "count": 2,
          "name": "Switch",
          "number": "132",
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
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
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
        "count": 2,
          "name": "Garbodor",
          "number": "57",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-break.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-bad.png',
        "count": 1,
      },
      {
        "count": 1,
            "name": "Espeon-EX",
            "number": "52",
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
        "count": 3,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        "count": 1,
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
        "count": 4,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 4,
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
            "name": "Rainbow Energy",
            "number": "137",
            "set": "SUM"
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
        "count": 4,
          "name": "Hoopa",
          "number": "55",
          "set": "SLG"
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
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
        "count": 2,
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
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
        "count": 2,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        "count": 1,
              "name": "Special Charge",
              "number": "105",
              "set": "STS"
      },
      {
        "count": 4,
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
        "count": 1,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        "count": 1,
          "name": "Reverse Valley",
          "number": "110",
          "set": "BKP"
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
        "count": 1,
              "name": "Zoroark",
              "number": "91",
              "set": "BKT"
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
        "count": 3,
          "name": "Guzma",
          "number": "115",
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
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
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
        "count": 2,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
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
        "count": 1,
              "name": "Zoroark",
              "number": "91",
              "set": "BKT"
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
            "name": "Mew-EX",
            "number": "126",
            "set": "PR-XY"
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
          "name": "Evosoda",
          "number": "116",
          "set": "XY"
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
        "count": 1,
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
        "count": 1,
          "name": "Regirock-EX",
          "number": "43",
          "set": "FCO"
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
      },
      {
        "count": 1,
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
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
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "N",
          "number": "105",
          "set": "FCO"
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
         "count": 2,
          "name": "Energy Switch",
          "number": "117",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
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
        "count": 1,
              "name": "Zoroark",
              "number": "91",
              "set": "BKT"
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
        "count": 3,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
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
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
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
        "count": 3,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
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
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
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
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
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
        "count": 1,
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
          "name": "Evosoda",
          "number": "116",
          "set": "XY"
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
         "count": 1,
          "name": "Gallade",
          "number": "84",
          "set": "BKT"
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
        "count": 1,
            "name": "Mew-EX",
            "number": "126",
            "set": "PR-XY"
      },
      {
        "count": 1,
            "name": "Giratina",
            "number": "184",
            "set": "PR-XY"
      },
      {
        "count": 3,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 3,
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
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Rare Candy",
          "number": "129",
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
        "count": 1,
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
        "count": 1,
          "name": "Regirock-EX",
          "number": "43",
          "set": "FCO"
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
      },
      {
        "count": 2,
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
          "name": "Super Rod",
          "number": "149",
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
        "count": 10,
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
    firstName: 'Huy Nguyen',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
         "count": 1,
          "name": "Gallade",
          "number": "84",
          "set": "BKT"
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
        "count": 1,
            "name": "Mew-EX",
            "number": "126",
            "set": "PR-XY"
      },
      {
        "count": 1,
            "name": "Giratina",
            "number": "184",
            "set": "PR-XY"
      },
      {
        "count": 3,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 3,
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
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Rare Candy",
          "number": "129",
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
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
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
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 3,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 1,
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
          "name": "Evosoda",
          "number": "116",
          "set": "XY"
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
        "count": 1,
            "name": "Mew",
            "number": "29",
            "set": "FCO"
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        "count": 1,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 1,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
      },
      {
        "count": 3,
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
          "name": "Skyla",
          "number": "148",
          "set": "BKT"
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
          "name": "Rare Candy",
          "number": "129",
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
          "name": "Energy Recycler",
          "number": "123",
          "set": "GRI"
      },
      {
        "count": 1,
            "name": "Heavy Ball",
            "number": "140",
            "set": "BKT"
      },
      {
         "count": 1,
          "name": "Switch",
          "number": "132",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
        "count": 1,
          "name": "Regirock-EX",
          "number": "43",
          "set": "FCO"
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
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
         "count": 2,
          "name": "Energy Switch",
          "number": "117",
          "set": "SUM"
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
        "count": 1,
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
        "count": 1,
          "name": "Regirock-EX",
          "number": "43",
          "set": "FCO"
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
      },
      {
        "count": 2,
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
          "name": "Super Rod",
          "number": "149",
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
        "count": 10,
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
    firstName: 'Yee Wei Chun',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
         "count": 1,
          "name": "Gallade",
          "number": "84",
          "set": "BKT"
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
        "count": 1,
            "name": "Mew-EX",
            "number": "126",
            "set": "PR-XY"
      },
      {
        "count": 1,
            "name": "Giratina",
            "number": "184",
            "set": "PR-XY"
      },
      {
        "count": 3,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 3,
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
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Rare Candy",
          "number": "129",
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
        "count": 1,
              "name": "Zoroark",
              "number": "91",
              "set": "BKT"
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
        "count": 1,
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
        "count": 1,
            "name": "Mew-EX",
            "number": "126",
            "set": "PR-XY"
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
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Evosoda",
          "number": "116",
          "set": "XY"
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
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
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
        "count": 3,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
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
        "count": 2,
          "name": "Garbodor",
          "number": "57",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-break.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-bad.png',
        "count": 1,
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
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
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        "count": 1,
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
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 3,
              "name": "Scorched Earth",
              "number": "110",
              "set": "FCO"
      },
      {
        "count": 11,
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
    firstName: 'Shane Quinn',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
        "count": 3,
            "name": "Volcanion-EX",
            "number": "26",
            "set": "STS"
      },
      {
        "count": 2,
            "name": "Volcanion",
            "number": "25",
            "set": "STS"
      },
      {
        "count": 2,
              "name": "Turtonator GX",
              "number": "18",
              "set": "GRI"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
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
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Professor's Letter",
          "number": "146",
          "set": "BKT"
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
         "count": 1,
          "name": "Switch",
          "number": "132",
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
          "name": "Energy Retrieval",
          "number": "116",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
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
        "count": 1,
          "name": "Regirock-EX",
          "number": "43",
          "set": "FCO"
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
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
         "count": 2,
          "name": "Energy Switch",
          "number": "117",
          "set": "SUM"
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
    firstName: 'Keith Yong',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
        "count": 1,
          "name": "Regirock-EX",
          "number": "43",
          "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-break.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-bad.png',
        "count": 1,
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
      },
      {
        "count": 2,
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
        "count": 3,
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
    firstName: 'Clifton Goh',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/golisopod.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
        "count": 1,
          "name": "Regirock-EX",
          "number": "43",
          "set": "FCO"
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
      },
      {
        "count": 1,
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
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
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "N",
          "number": "105",
          "set": "FCO"
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
         "count": 2,
          "name": "Energy Switch",
          "number": "117",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
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
    firstName: 'Aaron Van Der Kolk',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/tapu-bulu.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
        "count": 2,
          "name": "Garbodor",
          "number": "57",
          "set": "BKP"
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
        "count": 2,
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
        "count": 3,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
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
        "count": 1,
              "name": "Special Charge",
              "number": "105",
              "set": "STS"
      },
      {
        cardImg: '../../assets/cards/2018-17/red-card.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
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
        "count": 2,
          "name": "Garbodor",
          "number": "57",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-break.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-bad.png',
        "count": 1,
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
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
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        "count": 1,
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
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 3,
              "name": "Scorched Earth",
              "number": "110",
              "set": "FCO"
      },
      {
        "count": 11,
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
    firstName: 'Ryan Bielak',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
        "count": 2,
          "name": "Garbodor",
          "number": "57",
          "set": "BKP"
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
        "count": 1,
        "name": "Necrozma GX",
        "number": "63",
        "set": "BUS"
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
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
        "count": 2,
          "name": "Evosoda",
          "number": "116",
          "set": "XY"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
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
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
        "count": 1,
          "name": "Regirock-EX",
          "number": "43",
          "set": "FCO"
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
      },
      {
        "count": 1,
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
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
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        "count": 1,
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
          "name": "Energy Switch",
          "number": "117",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
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
    firstName: 'Luke McMahon',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
         "count": 1,
          "name": "Gallade",
          "number": "84",
          "set": "BKT"
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
        "count": 1,
            "name": "Mew-EX",
            "number": "126",
            "set": "PR-XY"
      },
      {
        "count": 1,
            "name": "Giratina",
            "number": "184",
            "set": "PR-XY"
      },
      {
        "count": 3,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 3,
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
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Rare Candy",
          "number": "129",
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
        "count": 1,
          "name": "Regirock-EX",
          "number": "43",
          "set": "FCO"
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
      },
      {
        "count": 1,
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
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
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        "count": 1,
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
          "name": "Energy Switch",
          "number": "117",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
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
    firstName: 'Shaun Leong',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
         "count": 2,
          "name": "Gallade",
          "number": "84",
          "set": "BKT"
      },
      {
         "count": 1,
          "name": "Kirlia",
          "number": "92",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/kirlia-psychic.png',
        "count": 1,
      },
      {
        "count": 3,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
         "count": 1,
          "name": "Ralts",
          "number": "52",
          "set": "AOR"
      },
      {
        "count": 2,
          "name": "Sylveon GX",
          "number": "92",
          "set": "GRI"
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
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 1,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/mr-mime-fairy.png',
        "count": 1,
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
        "count": 4,
          "name": "Rare Candy",
          "number": "129",
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
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
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
    firstName: 'Sameer Sangwan',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/sylveon.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
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
        "count": 2,
            "name": "Espeon GX",
            "number": "61",
            "set": "SUM"
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
        "count": 2,
          "name": "Garbodor",
          "number": "57",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
            "name": "Drampa GX",
            "number": "115",
            "set": "GRI"
      },
      {
        "count": 1,
            "name": "Espeon-EX",
            "number": "52",
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
        "count": 1,
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
        "count": 4,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 3,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2018-17/xerneas.png',
        "count": 4,
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mr-mime-fairy.png',
        "count": 1,
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
        "count": 3,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
         "count": 1,
          "name": "Energy Switch",
          "number": "117",
          "set": "SUM"
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
        "count": 3,
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
         "count": 3,
          "name": "Greninja BREAK",
          "number": "41",
          "set": "BKP"
      },
      {
         "count": 4,
          "name": "Greninja",
          "number": "40",
          "set": "BKP"
      },
      {
         "count": 4,
          "name": "Frogadier",
          "number": "39",
          "set": "BKP"
      },
      {
         "count": 4,
          "name": "Froakie",
          "number": "38",
          "set": "BKP"
      },
      {
         "count": 1,
          "name": "Starmie",
          "number": "31",
          "set": "EVO"
      },
      {
         "count": 1,
          "name": "Staryu",
          "number": "25",
          "set": "BKP"
      },
      {
         "count": 1,
          "name": "Tapu Fini GX",
          "number": "39",
          "set": "BUS"
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
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        "count": 2,
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
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
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
         "count": 4,
          "name": "Splash Energy",
          "number": "113",
          "set": "BKP"
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
        "count": 1,
              "name": "Zoroark",
              "number": "91",
              "set": "BKT"
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
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
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
        "count": 1,
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
          "name": "Evosoda",
          "number": "116",
          "set": "XY"
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
         "count": 4,
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
        "count": 1,
            "name": "Mew",
            "number": "29",
            "set": "FCO"
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
        "count": 3,
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
          "name": "Skyla",
          "number": "148",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        "count": 2,
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
        "count": 4,
          "name": "Rare Candy",
          "number": "129",
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
          "name": "Energy Recycler",
          "number": "123",
          "set": "GRI"
      },
      {
        "count": 2,
            "name": "Heavy Ball",
            "number": "140",
            "set": "BKT"
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
         "count": 3,
          "name": "Greninja BREAK",
          "number": "41",
          "set": "BKP"
      },
      {
         "count": 4,
          "name": "Greninja",
          "number": "40",
          "set": "BKP"
      },
      {
         "count": 4,
          "name": "Frogadier",
          "number": "39",
          "set": "BKP"
      },
      {
         "count": 4,
          "name": "Froakie",
          "number": "38",
          "set": "BKP"
      },
      {
         "count": 1,
          "name": "Starmie",
          "number": "31",
          "set": "EVO"
      },
      {
         "count": 1,
          "name": "Staryu",
          "number": "25",
          "set": "BKP"
      },
      {
        "count": 1,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
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
          "name": "Super Rod",
          "number": "149",
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
         "count": 4,
          "name": "Splash Energy",
          "number": "113",
          "set": "BKP"
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
        "count": 1,
          "name": "Regirock-EX",
          "number": "43",
          "set": "FCO"
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
      },
      {
        "count": 1,
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
      },
      {
        "count": 2,
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
          "name": "Super Rod",
          "number": "149",
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
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 2,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
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
        "count": 3,
      },
      {
        "count": 4,
          "name": "Hoopa",
          "number": "55",
          "set": "SLG"
      },
      {
        "count": 1,
              "name": "Xurkitree GX",
              "number": "68",
              "set": "PR-SM"
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
        "count": 4,
          "name": "Team Flare Grunt",
          "number": "73",
          "set": "GEN"
      },
      {
        cardImg: '../../assets/cards/2018-17/team-rockets-handiwork.png',
        "count": 4,
      },
      {
        "count": 3,
          "name": "Lusamine",
          "number": "96",
          "set": "CIN"
      },
      {
        "count": 3,
          "name": "Skyla",
          "number": "148",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Plumeria",
          "number": "120",
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
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
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
        "count": 2,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
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
        "count": 3,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
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
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 1,
          "name": "Reverse Valley",
          "number": "110",
          "set": "BKP"
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
        "count": 2,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
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
        "count": 2,
          "name": "Garbodor",
          "number": "57",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-break.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/carbink-bad.png',
        "count": 1,
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
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
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 3,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 3,
              "name": "Scorched Earth",
              "number": "110",
              "set": "FCO"
      },
      {
        "count": 11,
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
        "count": 1,
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
        "count": 2,
          "name": "Regirock-EX",
          "number": "43",
          "set": "FCO"
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
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
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
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
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI"
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
        "count": 2,
          "name": "Garbodor",
          "number": "57",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
            "name": "Espeon-EX",
            "number": "52",
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
        "count": 3,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        "count": 1,
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
        "count": 4,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 4,
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
        "count": 3,
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
            "name": "Rainbow Energy",
            "number": "137",
            "set": "SUM"
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
        "count": 1,
              "name": "Zoroark",
              "number": "91",
              "set": "BKT"
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
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/mr-mime-fairy.png',
        "count": 1,
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
        "count": 1,
      },
      {
        "count": 2,
          "name": "Rockruff",
          "number": "06",
          "set": "PR-SM"
      },
      {
         "count": 1,
          "name": "Zygarde-EX",
          "number": "54",
          "set": "FCO"
      },
      {
        "count": 1,
          "name": "Regirock-EX",
          "number": "43",
          "set": "FCO"
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
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
        "count": 1,
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
        "count": 1,
              "name": "Xurkitree GX",
              "number": "68",
              "set": "PR-SM"
      },
      {
        "count": 1,
            "name": "Mew",
            "number": "29",
            "set": "FCO"
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
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
        "count": 3,
          "name": "Skyla",
          "number": "148",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        "count": 2,
      },
      {
        "count": 2,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
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
          "name": "Rare Candy",
          "number": "129",
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
            "name": "Heavy Ball",
            "number": "140",
            "set": "BKT"
      },
      {
        "count": 2,
          "name": "Energy Recycler",
          "number": "123",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        "count": 4,
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
        "count": 1,
          "name": "Regirock-EX",
          "number": "43",
          "set": "FCO"
      },
      {
        "count": 1,
            "name": "Sudowoodo",
            "number": "67",
            "set": "BKP"
      },
      {
        "count": 1,
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
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
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        "count": 1,
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
          "name": "Energy Switch",
          "number": "117",
          "set": "SUM"
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
