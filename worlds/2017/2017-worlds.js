const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Diego Cassiraga',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',
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
         "count": 3,
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
         "count": 3,
          "name": "Kirlia",
          "number": "92",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-wild-river.png',
        numImg: '../../assets/02.png'
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
        "count": 3,
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
        "count": 3,
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
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
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
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
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
      {
        cardImg: '../../assets/cards/energy/wonder-energy.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Naoto Suzuki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/golisopod.png',
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
        "count": 3,
          "name": "Golisopod GX",
          "number": "17",
          "set": "BUS"
      },
      {
        "count": 4,
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
        "count": 3,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 2,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
       "count": 2,
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
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
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
        "count": 1,
            "name": "Heavy Ball",
            "number": "140",
            "set": "BKT"
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
        "count": 3,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Xander Pero',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/espeon.png',
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
        "count": 3,
            "name": "Espeon GX",
            "number": "61",
            "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/flareon.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
        "name": "Eevee",
        "number": "101",
        "set": "SUM"
      },
      {
        "count": 3,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 1,
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
       "count": 2,
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
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
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
      }
    ]
  },
  {
    firstName: 'Sho Sasaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/golisopod.png',
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
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 1,
            "name": "Drampa GX",
            "number": "115",
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
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
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
        "count": 1,
        "name": "Energy Loto",
        "number": "122",
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
      }
    ]
  },
  {
    firstName: 'Reiji Nishiguchi',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/garbodor.png',
    sprite2: '../../assets/sprites/necrozma.png',
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
        "count": 3,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 1,
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
        "count": 1,
            "name": "Espeon-EX",
            "number": "52",
            "set": "BKP"
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
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ninja-boy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
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
        "count": 2,
          "name": "Enhanced Hammer",
          "number": "124",
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
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/espeon.png',
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
        "count": 2,
            "name": "Espeon GX",
            "number": "61",
            "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/flareon.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
        "name": "Eevee",
        "number": "101",
        "set": "SUM"
      },
      {
        "count": 3,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 1,
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
        "count": 4,
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
        "count": 3,
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
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/03.png'
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
      }
    ]
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',
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
         "count": 3,
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
         "count": 3,
          "name": "Kirlia",
          "number": "92",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
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
        "count": 3,
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
        "count": 3,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
       "count": 1,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Fisherman",
          "number": "136",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
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
      {
        cardImg: '../../assets/cards/energy/wonder-energy.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Sam Chen',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/drampa.png',
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
        "count": 3,
            "name": "Drampa GX",
            "number": "115",
            "set": "GRI"
      },
      {
        "count": 3,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 1,
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
        "count": 4,
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
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Plumeria",
          "number": "120",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
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
        "count": 4,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Psychic Energy",
          "number": "psychic",
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
      }
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/ho-oh.png',
    sprite2: '../../assets/sprites/salazzle.png',
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
        cardImg: '../../assets/cards/2018-17/ho-oh-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/salazzle-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/salandit.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
            "name": "Volcanion-EX",
            "number": "26",
            "set": "STS"
      },
      {
        "count": 1,
              "name": "Turtonator GX",
              "number": "18",
              "set": "GRI"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Volcanion",
            "number": "25",
            "set": "STS"
      },
      {
        "count": 1,
          "name": "Sudowoodo",
          "number": "66",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Kiawe",
          "number": "116",
          "set": "BUS"
      },
      {
        "count": 3,
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
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
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
        "count": 14,
          "name": "Fire Energy",
          "number": "fire",
          "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Jimmy Wuyts',
    flag: '../../assets/flags/belgium.png',
    sprite1: '../../assets/sprites/volcanion.png',
    sprite2: '../../assets/sprites/turtonator.png',
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
        "count": 3,
            "name": "Volcanion",
            "number": "25",
            "set": "STS"
      },
      {
        "count": 3,
            "name": "Volcanion-EX",
            "number": "26",
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
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },      {
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/03.png'
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
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 14,
          "name": "Fire Energy",
          "number": "fire",
          "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Alex Silva',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/drampa.png',
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
        "count": 2,
            "name": "Drampa GX",
            "number": "115",
            "set": "GRI"
      },
      {
        "count": 3,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 1,
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
            "name": "Espeon-EX",
            "number": "52",
            "set": "BKP"
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
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/01.png'
      },
      {
       "count": 1,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
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
        "count": 4,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/po-town.png',
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
            "name": "Rainbow Energy",
            "number": "137",
            "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/decidueye.png',
    sprite2: '../../assets/sprites/vileplume.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/drampa.png',
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
        "count": 3,
            "name": "Drampa GX",
            "number": "115",
            "set": "GRI"
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
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
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
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
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
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 7,
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
        "count": 2,
            "name": "Rainbow Energy",
            "number": "137",
            "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Joey Ho',
    flag: '../../assets/flags/singapore.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/rayquaza-mega.png',
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
        cardImg: '../../assets/cards/2018-17/rayquaza-ex-mega.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rayquaza-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
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
          "name": "Tapu Koko GX",
          "number": "47",
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
          "name": "Sudowoodo",
          "number": "66",
          "set": "GRI"
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
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 1,
          "name": "Skyla",
          "number": "148",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/pokemon-fan-club.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mega-turbo.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2018-17/rayquaza-spirit-link.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/sky-field.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 5,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Freya Pearce',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/rayquaza-mega.png',
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
        cardImg: '../../assets/cards/2018-17/rayquaza-ex-mega.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rayquaza-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/dragonite-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/magearna-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/unown.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 2,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/02.png'
      },
      {
       "count": 1,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 1,
          "name": "Skyla",
          "number": "148",
          "set": "BKT"
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
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mega-turbo.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2018-17/rayquaza-spirit-link.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/sky-field.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Metal Energy",
          "number": "metal",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Kian Amini',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/drampa.png',
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
        "count": 2,
            "name": "Drampa GX",
            "number": "115",
            "set": "GRI"
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
            "name": "Espeon-EX",
            "number": "52",
            "set": "BKP"
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
       "count": 2,
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
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Plumeria",
          "number": "120",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
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
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/po-town.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Takeshi Tosa',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/ho-oh.png',
    sprite2: '../../assets/sprites/salazzle.png',
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
        cardImg: '../../assets/cards/2018-17/ho-oh-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/salazzle-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/salandit.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
            "name": "Volcanion-EX",
            "number": "26",
            "set": "STS"
      },
      {
        "count": 1,
              "name": "Turtonator GX",
              "number": "18",
              "set": "GRI"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Volcanion",
            "number": "25",
            "set": "STS"
      },
      {
        "count": 1,
          "name": "Sudowoodo",
          "number": "66",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Kiawe",
          "number": "116",
          "set": "BUS"
      },
      {
        "count": 3,
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
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
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
        "count": 14,
          "name": "Fire Energy",
          "number": "fire",
          "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Samuel Hough',
    flag: '../../assets/flags/usa.png',
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
       "count": 1,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Fisherman",
          "number": "136",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/dive-ball.png',
        numImg: '../../assets/04.png'
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
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
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
         "count": 3,
          "name": "Splash Energy",
          "number": "113",
          "set": "BKP"
      }
    ]
  },
  {
    firstName: 'Masataka Hirano',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Shun Ito',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/sylveon.png',
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
         "count": 3,
          "name": "Gardevoir GX",
          "number": "93",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/kirlia-calm-mind.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Sylveon GX",
          "number": "92",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/flareon.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
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
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/02.png'
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
          "name": "Delinquent",
          "number": "98",
          "set": "BKP"
      },
      {
       "count": 1,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
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
        "count": 3,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/wonder-energy.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Kazuki Kasahara',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/golisopod.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Jit Min Lim',
    flag: '../../assets/flags/singapore.png',
    sprite1: '../../assets/sprites/decidueye.png',
    sprite2: '../../assets/sprites/golisopod.png',
    list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/drampa.png',
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
        "count": 3,
            "name": "Drampa GX",
            "number": "115",
            "set": "GRI"
      },
      {
        "count": 3,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 1,
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
        "count": 4,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/wobbuffet.png',
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
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
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Psychic Energy",
          "number": "psychic",
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
      }
    ]
  },
  {
    firstName: 'Igor Costa',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/espeon.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../assets/flags/spain.png',
    sprite1: '../../assets/sprites/volcanion.png',
    sprite2: '../../assets/sprites/turtonator.png',
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
        "count": 3,
            "name": "Volcanion",
            "number": "25",
            "set": "STS"
      },
      {
        "count": 4,
            "name": "Volcanion-EX",
            "number": "26",
            "set": "STS"
      },
      {
        "count": 1,
              "name": "Turtonator GX",
              "number": "18",
              "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/ho-oh-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/01.png'
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
        "count": 3,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2018-17/sky-field.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 13,
          "name": "Fire Energy",
          "number": "fire",
          "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Jindrich Nepevny',
    flag: '../../assets/flags/czech-republic.png',
    sprite1: '../../assets/sprites/volcanion.png',
    sprite2: '../../assets/sprites/turtonator.png',
    list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Brad Curcio',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/espeon.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Brent Tonisson',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/drampa.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: []
  },
  {
    firstName: 'Connor Finton',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/rayquaza-mega.png',
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
        cardImg: '../../assets/cards/2018-17/rayquaza-ex-mega.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rayquaza-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/dragonite-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/magearna-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Sudowoodo",
          "number": "66",
          "set": "GRI"
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        "count": 3,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
       "count": 1,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Skyla",
          "number": "148",
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
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mega-turbo.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2018-17/special-charge.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rayquaza-spirit-link.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/sky-field.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 5,
          "name": "Metal Energy",
          "number": "metal",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/drampa.png',
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
        "count": 2,
            "name": "Drampa GX",
            "number": "115",
            "set": "GRI"
      },
      {
        "count": 3,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 1,
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
          "name": "Tapu Fini GX",
          "number": "39",
          "set": "BUS"
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
       "count": 2,
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
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        "count": 1,
          "name": "Team Flare Grunt",
          "number": "73",
          "set": "GEN"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2018-17/po-town.png',
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
            "name": "Rainbow Energy",
            "number": "137",
            "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Jordan Palmer',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/drampa.png',
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
        "count": 2,
            "name": "Drampa GX",
            "number": "115",
            "set": "GRI"
      },
      {
        "count": 3,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 1,
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
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        cardImg: '../../assets/cards/2018-17/magearna.png',
        numImg: '../../assets/01.png'
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
       "count": 2,
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
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/ace-trainer.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Team Flare Grunt",
          "number": "73",
          "set": "GEN"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
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
        "count": 4,
          "name": "Psychic Energy",
          "number": "psychic",
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
      }
    ]
  },
  {
    firstName: 'Haruki Satoyama',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/decidueye.png',
    sprite2: '../../assets/sprites/ninetales-alola.png',
    list: '../../assets/list-icon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: []
  }
]

let seniors = [
    {
        firstName: 'Zachary Bokhari',
        flag: '../../assets/flags/usa.png',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/ninetales-alola.png',
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
        "count": 3,
          "name": "Alolan Ninetales GX",
          "number": "22",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Alolan Vulpix",
          "number": "21",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-wild-river.png',
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
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 1,
          "name": "Sudowoodo",
          "number": "66",
          "set": "GRI"
      },
      {
        "count": 1,
            "name": "Giratina",
            "number": "184",
            "set": "PR-XY"
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
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/pokemon-center-lady.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/karen.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
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
          "name": "Aqua Patch",
          "number": "119",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/03.png'
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
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/rough-seas.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 7,
          "name": "Water Energy",
          "number": "water",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
    },
    {
      firstName: 'Michael Long',
      flag: '../../assets/flags/canada.png',
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
          cardImg: '../../assets/cards/2018-17/jirachi.png',
          numImg: '../../assets/01.png'
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
          cardImg: '../../assets/cards/2018-17/teammates.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2018-17/guzma.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2018-17/ace-trainer.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2018-17/dive-ball.png',
          numImg: '../../assets/04.png'
        },
        {
          cardImg: '../../assets/cards/2018-17/vs-seeker.png',
          numImg: '../../assets/03.png'
        },
        {
          cardImg: '../../assets/cards/2018-17/field-blower.png',
          numImg: '../../assets/03.png'
        },
        {
          cardImg: '../../assets/cards/2018-17/ultra-ball.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2018-17/level-ball.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2018-17/rescue-stretcher.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/2018-17/super-rod.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2018-17/enhanced-hammer.png',
          numImg: '../../assets/01.png'
        },
        {
          cardImg: '../../assets/cards/2018-17/choice-band.png',
          numImg: '../../assets/02.png'
        },
        {
          cardImg: '../../assets/cards/energy/energy-water.png',
          numImg: '../../assets/07.png'
        },
        {
          cardImg: '../../assets/cards/energy/energy-splash.png',
          numImg: '../../assets/03.png'
        }
      ]
  },
  {
    firstName: 'Takumi Kaji',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/sylveon.png',
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
         "count": 3,
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
         "count": 3,
          "name": "Kirlia",
          "number": "92",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Sylveon GX",
          "number": "92",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/flareon.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
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
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 2,
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
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
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
          "name": "Rescue Stretcher",
          "number": "130",
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
        "count": 3,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/wonder-energy.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Yuu Ito',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/drampa.png',
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
        "count": 3,
            "name": "Drampa GX",
            "number": "115",
            "set": "GRI"
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
        "count": 1,
          "name": "Trubbish",
          "number": "50",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
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
        "count": 3,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
       "count": 1,
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
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
        "name": "Multi Switch",
        "number": "129",
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
        cardImg: '../../assets/cards/2018-17/po-town.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 3,
          "name": "Psychic Energy",
          "number": "psychic",
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
      }
    ]
  },
  {
    firstName: 'Nick Conocenti',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/ninetales-alola.png',
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
        "count": 3,
          "name": "Alolan Ninetales GX",
          "number": "22",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Alolan Vulpix",
          "number": "21",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-wild-river.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 1,
          "name": "Sudowoodo",
          "number": "66",
          "set": "GRI"
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
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
         "count": 1,
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
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
          "name": "Aqua Patch",
          "number": "119",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
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
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/rough-seas.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 8,
          "name": "Water Energy",
          "number": "water",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Justin Lambert',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',
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
         "count": 3,
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
         "count": 3,
          "name": "Kirlia",
          "number": "92",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
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
          "name": "Sudowoodo",
          "number": "66",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
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
        "count": 2,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/01.png'
      },
      {
       "count": 1,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
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
        "count": 4,
          "name": "Rare Candy",
          "number": "129",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/03.png'
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
      {
        cardImg: '../../assets/cards/energy/wonder-energy.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Connor Pedersen',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/drampa.png',
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
        "count": 2,
            "name": "Drampa GX",
            "number": "115",
            "set": "GRI"
      },
      {
        "count": 3,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 1,
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
          "name": "Tapu Fini GX",
          "number": "39",
          "set": "BUS"
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
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
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
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Team Flare Grunt",
          "number": "73",
          "set": "GEN"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/03.png'
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
        "count": 4,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 4,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/po-town.png',
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
            "name": "Rainbow Energy",
            "number": "137",
            "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Tanner Hurley',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/decidueye.png',
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
        "count": 4,
          "name": "Decidueye GX",
          "number": "12",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/dartrix.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vileplume.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/gloom.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/oddish-poison-powder.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
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
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
       "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        numImg: '../../assets/04.png'
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
      }
    ]
  }
]

let juniors = [
  {
    firstName: 'Tobias Strømdahl',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',
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
         "count": 4,
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
         "count": 3,
          "name": "Kirlia",
          "number": "92",
          "set": "BUS"
      },
      {
         "count": 4,
          "name": "Ralts",
          "number": "52",
          "set": "AOR"
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
        "count": 3,
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        "count": 1,
          "name": "Fisherman",
          "number": "136",
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
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
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
        "count": 2,
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
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
      }
    ]
  },
  {
    firstName: 'Minaki Hasegawa',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',
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
         "count": 4,
          "name": "Gardevoir GX",
          "number": "93",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/kirlia-calm-mind.png',
        numImg: '../../assets/03.png'
      },
      {
         "count": 1,
          "name": "Kirlia",
          "number": "92",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Ralts",
          "number": "91",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Alolan Vulpix",
          "number": "21",
          "set": "GRI"
      },
      {
        "count": 3,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
            "name": "Giratina",
            "number": "184",
            "set": "PR-XY"
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
       "count": 2,
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
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
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
          "name": "Rare Candy",
          "number": "129",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
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
        "count": 2,
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
      {
        cardImg: '../../assets/cards/energy/wonder-energy.png',
        numImg: '../../assets/02.png'
      }
    ]
  },
  {
    firstName: 'Kabu Fukase',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/golisopod.png',
    sprite2: '../../assets/sprites/decidueye.png',
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
          "name": "Decidueye GX",
          "number": "12",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/dartrix.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Tapu Koko",
          "number": "31",
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
            "name": "Espeon-EX",
            "number": "52",
            "set": "BKP"
      },
      {
        "count": 1,
          "name": "Sudowoodo",
          "number": "66",
          "set": "GRI"
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
       "count": 2,
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
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
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
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 5,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 3,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'William Wallace',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/xerneas-active.png',
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
         "count": 3,
          "name": "Gardevoir GX",
          "number": "93",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/kirlia-calm-mind.png',
        numImg: '../../assets/02.png'
      },
      {
         "count": 3,
          "name": "Ralts",
          "number": "52",
          "set": "AOR"
      },
      {
        cardImg: '../../assets/cards/2018-17/xerneas-break.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/xerneas.png',
        numImg: '../../assets/04.png'
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
          "number": "66",
          "set": "GRI"
      },
      {
        "count": 1,
            "name": "Giratina",
            "number": "184",
            "set": "PR-XY"
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Rare Candy",
          "number": "129",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/fairy-garden.png',
        numImg: '../../assets/03.png'
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
      {
        cardImg: '../../assets/cards/energy/wonder-energy.png',
        numImg: '../../assets/01.png'
      }
    ]
  },
  {
    firstName: 'Lucas Mancuso',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/drampa.png',
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
        "count": 2,
            "name": "Drampa GX",
            "number": "115",
            "set": "GRI"
      },
      {
        "count": 3,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 1,
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
        cardImg: '../../assets/cards/2018-17/magearna-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Espeon-EX",
            "number": "52",
            "set": "BKP"
      },
      {
        "count": 1,
        "name": "Necrozma GX",
        "number": "63",
        "set": "BUS"
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
         "count": 1,
          "name": "Oricorio",
          "number": "56",
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
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/03.png'
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
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
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
          "name": "Choice Band",
          "number": "121",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2018-17/po-town.png',
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
            "name": "Rainbow Energy",
            "number": "137",
            "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      }
    ]
  },
  {
    firstName: 'Tsubasa Watanabe',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/golisopod.png',
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
        "count": 3,
          "name": "Golisopod GX",
          "number": "17",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Wimpod",
          "number": "16",
          "set": "BUS"
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
        "count": 2,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 3,
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
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
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
      }
    ]
  },
  {
    firstName: 'Niko Ishida',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/xerneas-active.png',
    sprite2: '../../assets/sprites/bisharp.png',
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
        cardImg: '../../assets/cards/2014-2016/xerneas-rainbow-force.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/bisharp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/pawniard.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Tapu Koko",
          "number": "31",
          "set": "PR-SM"
      },
      {
        "count": 1,
            "name": "Volcanion-EX",
            "number": "26",
            "set": "STS"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        "count": 1,
          "name": "Sudowoodo",
          "number": "66",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 2,
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
        "count": 1,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2018-17/special-charge.png',
        numImg: '../../assets/01.png'
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
        "count": 1,
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
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/sky-field.png',
        numImg: '../../assets/03.png'
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
      }
    ]
  },
  {
    firstName: 'Regan Retzloff',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/xerneas-active.png',
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
         "count": 3,
          "name": "Gardevoir GX",
          "number": "93",
          "set": "BUS"
      },
      {
         "count": 2,
          "name": "Kirlia",
          "number": "92",
          "set": "BUS"
      },
      {
         "count": 3,
          "name": "Ralts",
          "number": "52",
          "set": "AOR"
      },
      {
        cardImg: '../../assets/cards/2018-17/xerneas-break.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/xerneas.png',
        numImg: '../../assets/04.png'
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
          "number": "66",
          "set": "GRI"
      },
      {
        "count": 1,
            "name": "Giratina",
            "number": "184",
            "set": "PR-XY"
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Brigette",
          "number": "134",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Rare Candy",
          "number": "129",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Rescue Stretcher",
          "number": "130",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/fairy-garden.png',
        numImg: '../../assets/03.png'
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
      {
        cardImg: '../../assets/cards/energy/wonder-energy.png',
        numImg: '../../assets/01.png'
      }
    ]
  }
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
    if (item.banned === true) {
      playerName.classList.add('crossed-out');
    }

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

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2017 Worlds";

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

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2017 Worlds";

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

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2017 Worlds";

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
