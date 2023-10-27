const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');
// https://limitlesstcg.com/tournaments/150
let masters = [
  {
    firstName: 'Isaiah Williams',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/zapdos.png',
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
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
              "name": "Oranguru",
              "number": "113",
              "set": "SUM"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Professor Kukui",
          "number": "128",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 3,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 2,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 1,
        "name": "Energy Loto",
        "number": "122",
        "set": "GRI"
      },
      {
          "count": 3,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 8,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Stéphane Ivanoff',
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
        "name": "Lycanroc GX",
        "number": "74",
        "set": "GRI"
      },
      {
        "count": 2,
        "name": "Rockruff",
        "number": "75",
        "set": "FLI"
      },
      {
        "count": 2,
          "name": "Lucario GX",
          "number": "SM100",
          "set": "SMP"
      },
      {
        "count": 2,
          "name": "Riolu",
          "number": "66",
          "set": "UPR"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Alolan Muk",
          "number": "58",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/diancie-p.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
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
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
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
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
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
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
         "count": 2,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Wondrous Labyrinth ♢",
          "number": "158",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
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
    firstName: 'Kaiwen Cabbabe',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
       "count": 1,
        "name": "Jolteon GX",
        "number": "SM173",
        "set": "SMP"
      },
      {
        "count": 1,
        "name": "Eevee",
        "number": "101",
        "set": "SUM"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
          "name": "Wobbuffet",
          "number": "93",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Volkner",
          "number": "135",
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
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
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
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 10,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Jose Marrero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 1,
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
          "name": "Rayquaza GX",
          "number": "109",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2018-17/marshadow-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 2,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 1,
              "name": "Oranguru",
              "number": "113",
              "set": "SUM"
      },
      {
        "count": 3,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
        "count": 4,
            "name": "Acro Bike",
            "number": "123",
            "set": "CES"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
        "name": "Multi Switch",
        "number": "129",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Wondrous Labyrinth ♢",
          "number": "158",
          "set": "TEU"
      },
      {
        "count": 12,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Bert Wolters',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/zapdos.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        "count": 1,
        "name": "Blitzle",
        "number": "81",
        "set": "LOT"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
        "count": 1,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 3,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
          "count": 3,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 5,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Lucas Pereira',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
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
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 1,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Aether Paradise Conservation Area",
          "number": "116",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Henry Brand',
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
        "count": 1,
          "name": "Lycanroc GX",
          "number": "82",
          "set": "TEU"
      },
      {
        "count": 3,
          "name": "Rockruff",
          "number": "73",
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
          "name": "Alolan Muk",
          "number": "58",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Alolan Grimer",
          "number": "83",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
       "count": 1,
          "name": "Giratina",
          "number": "97",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Professor Elm's Lecture",
          "number": "188",
          "set": "LOT"
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
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Professor Kukui",
          "number": "128",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
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
        "count": 2,
          "name": "Timer Ball",
          "number": "134",
          "set": "SUM"
      },
      {
          "count": 1,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 1,
        "name": "Rescue Stretcher",
        "number": "130",
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
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 3,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Devoured Field",
          "number": "93",
          "set": "CIN"
      },
      {
        "count": 3,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        "count": 1,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
    ]
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/zapdos.png',
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
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
              "name": "Oranguru",
              "number": "113",
              "set": "SUM"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Professor Kukui",
          "number": "128",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 3,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 2,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 1,
        "name": "Energy Loto",
        "number": "122",
        "set": "GRI"
      },
      {
          "count": 3,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 8,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Christian Hasbani',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
          "name": "Malamar",
          "number": "51",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Inkay",
          "number": "50",
          "set": "FLI"
      },
      {
       "count": 2,
          "name": "Giratina",
          "number": "97",
          "set": "LOT"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Ultra Necrozma GX",
          "number": "95",
          "set": "FLI"
      },
      {
       "count": 1,
          "name": "Marshadow GX",
          "number": "80",
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
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
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
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
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
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 3,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Robin Schulz',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/zapdos.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        "count": 1,
        "name": "Blitzle",
        "number": "81",
        "set": "LOT"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
        "count": 1,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 3,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 5,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/zapdos.png',
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
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
              "name": "Oranguru",
              "number": "113",
              "set": "SUM"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Professor Kukui",
          "number": "128",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 3,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 2,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 1,
        "name": "Energy Loto",
        "number": "122",
        "set": "GRI"
      },
      {
          "count": 3,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 8,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Rahul Reddy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Sam Chen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Karl Peters',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/zapdos.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
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
        "number": "75",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Wobbuffet",
          "number": "93",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 2,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
          "count": 1,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 1,
          "name": "Beast Ring",
          "number": "102",
          "set": "FLI"
      },
      {
        "count": 1,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
          "count": 3,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 7,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Jordan Palmer',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
          "name": "Malamar",
          "number": "51",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Inkay",
          "number": "50",
          "set": "FLI"
      },
      {
       "count": 2,
          "name": "Giratina",
          "number": "97",
          "set": "LOT"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Ultra Necrozma GX",
          "number": "95",
          "set": "FLI"
      },
      {
       "count": 1,
          "name": "Marshadow GX",
          "number": "80",
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
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
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
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
          "name": "Nest Ball",
          "number": "123",
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
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 3,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Andrew Tandianus',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
          "name": "Malamar",
          "number": "51",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Inkay",
          "number": "50",
          "set": "FLI"
      },
      {
       "count": 2,
          "name": "Giratina",
          "number": "97",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Ultra Necrozma GX",
          "number": "95",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Gengar & Mimikyu GX",
          "number": "53",
          "set": "TEU"
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
          "number": "SM31",
          "set": "SMP"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 1,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
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
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Bastian Silva',
    flag: '../../../assets/flags/chile.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Bryan de Vries',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/zapdos.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        "count": 1,
        "name": "Blitzle",
        "number": "81",
        "set": "LOT"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
        "count": 1,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 3,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
          "count": 3,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 5,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Otavio Gouveia',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
          "name": "Malamar",
          "number": "51",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Inkay",
          "number": "50",
          "set": "FLI"
      },
      {
       "count": 2,
          "name": "Giratina",
          "number": "97",
          "set": "LOT"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Ultra Necrozma GX",
          "number": "95",
          "set": "FLI"
      },
      {
       "count": 1,
          "name": "Marshadow GX",
          "number": "80",
          "set": "BUS"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
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
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 3,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Alex Silva',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
          "name": "Malamar",
          "number": "51",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Inkay",
          "number": "50",
          "set": "FLI"
      },
      {
       "count": 2,
          "name": "Giratina",
          "number": "97",
          "set": "LOT"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Ultra Necrozma GX",
          "number": "95",
          "set": "FLI"
      },
      {
       "count": 1,
          "name": "Marshadow GX",
          "number": "80",
          "set": "BUS"
      },
      {
        "count": 1,
        "name": "Dawn Wings Necrozma GX",
        "number": "63",
        "set": "UPR"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
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
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 3,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: "Darin O'Meara",
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma.png',
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
          "name": "Malamar",
          "number": "51",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Inkay",
          "number": "50",
          "set": "FLI"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
       "count": 2,
          "name": "Marshadow GX",
          "number": "80",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Gengar & Mimikyu GX",
          "number": "53",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2018-17/necrozma-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Dawn Wings Necrozma GX",
        "number": "63",
        "set": "UPR"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
       "count": 1,
          "name": "Giratina",
          "number": "97",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/chimecho.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        "count": 2,
        "name": "Rescue Stretcher",
        "number": "130",
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
          "name": "Friend Ball",
          "number": "131",
          "set": "CES"
      },
      {
          "count": 4,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 10,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Max Prescott',
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
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
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
          "number": "83",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Professor Elm's Lecture",
          "number": "188",
          "set": "LOT"
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
        "count": 2,
          "name": "Professor Kukui",
          "number": "128",
          "set": "SUM"
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
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 1,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
          "count": 1,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Devoured Field",
          "number": "93",
          "set": "CIN"
      },
      {
        "count": 5,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
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
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Alolan Ninetales GX",
          "number": "132",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Alolan Vulpix",
          "number": "21",
          "set": "GRI"
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
          "number": "83",
          "set": "TEU"
      },
      {
         "count": 1,
          "name": "Weavile",
          "number": "74",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Sneasel",
          "number": "86",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Professor Elm's Lecture",
          "number": "188",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
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
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 1,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
          "count": 1,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
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
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Bodybuilding Dumbbells",
          "number": "113",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Black Market ♢",
          "number": "134",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        "count": 4,
        "name": "Unit Energy DFY",
        "number": "118",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'James Williams',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
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
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
        "count": 4,
            "name": "Acro Bike",
            "number": "123",
            "set": "CES"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 12,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Nicolas Galaz',
    flag: '../../../assets/flags/chile.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
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
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 1,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Aether Paradise Conservation Area",
          "number": "116",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Fabien Pujol',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Joshua Sparks',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/zapdos.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 4,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 2,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/diancie-p.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Professor Kukui",
          "number": "128",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 1,
        "name": "Energy Loto",
        "number": "122",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Adventure Bag",
          "number": "167",
          "set": "LOT"
      },
      {
        "count": 3,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
          "count": 3,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 3,
            "name": "Unit Energy LPM",
            "number": "138",
            "set": "UPR"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Raz Wolpe',
    flag: '../../../assets/flags/isreal.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
          "name": "Malamar",
          "number": "51",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Inkay",
          "number": "50",
          "set": "FLI"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Ultra Necrozma GX",
          "number": "95",
          "set": "FLI"
      },
      {
       "count": 1,
          "name": "Giratina",
          "number": "97",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
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
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 1,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
         "count": 4,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 6,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Daniel Ross-Brown',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jon Eng',
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
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Alolan Ninetales GX",
          "number": "132",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Alolan Vulpix",
          "number": "21",
          "set": "GRI"
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
          "number": "83",
          "set": "TEU"
      },
      {
         "count": 1,
          "name": "Weavile",
          "number": "74",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Sneasel",
          "number": "86",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Professor Elm's Lecture",
          "number": "188",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
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
        "name": "Mallow",
        "number": "127",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 1,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
          "count": 1,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
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
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Bodybuilding Dumbbells",
          "number": "113",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Black Market ♢",
          "number": "134",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        "count": 4,
        "name": "Unit Energy DFY",
        "number": "118",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Zach Lesage',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
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
          "name": "Blacephalon GX",
          "number": "52",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Naganadel",
          "number": "108",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Poipole",
          "number": "55",
          "set": "FLI"
      },
      {
        "count": 2,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 2,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Beast Ring",
          "number": "102",
          "set": "FLI"
      },
      {
        "count": 3,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 2,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Ultra Space",
          "number": "115",
          "set": "FLI"
      },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
          "count": 15,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Jarrod Taylor',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
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
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lisia.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
          "count": 3,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        "count": 2,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 12,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Layton Rumble',
    flag: '../../../assets/flags/new-zealand.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/jolteon.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 2,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
       "count": 1,
        "name": "Jolteon GX",
        "number": "SM173",
        "set": "SMP"
      },
      {
        "count": 1,
        "name": "Eevee",
        "number": "101",
        "set": "SUM"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 1,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Beast Ring",
          "number": "102",
          "set": "FLI"
      },
      {
          "count": 3,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 7,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 2,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Mohamad Razak',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Nathan Hanns',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/zapdos.png',
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
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
              "name": "Oranguru",
              "number": "113",
              "set": "SUM"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Professor Kukui",
          "number": "128",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 3,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 2,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 1,
        "name": "Energy Loto",
        "number": "122",
        "set": "GRI"
      },
      {
          "count": 3,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 8,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Bertrand Yan',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
          "name": "Malamar",
          "number": "51",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Inkay",
          "number": "50",
          "set": "FLI"
      },
      {
       "count": 2,
          "name": "Giratina",
          "number": "97",
          "set": "LOT"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Ultra Necrozma GX",
          "number": "95",
          "set": "FLI"
      },
      {
       "count": 1,
          "name": "Marshadow GX",
          "number": "80",
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
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
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
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 3,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
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
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 1,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Aether Paradise Conservation Area",
          "number": "116",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Joey Ruettiger',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/zapdos.png',
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
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
              "name": "Oranguru",
              "number": "113",
              "set": "SUM"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Professor Kukui",
          "number": "128",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 3,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 2,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 1,
        "name": "Energy Loto",
        "number": "122",
        "set": "GRI"
      },
      {
          "count": 3,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 8,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
          "name": "Malamar",
          "number": "51",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Inkay",
          "number": "50",
          "set": "FLI"
      },
      {
        "count": 2,
          "name": "Ultra Necrozma GX",
          "number": "95",
          "set": "FLI"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
       "count": 1,
          "name": "Giratina",
          "number": "97",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Gengar & Mimikyu GX",
          "number": "53",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2018-17/marshadow-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/necrozma-dawn-wings.png',
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
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 4,
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
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
          "name": "Beast Ring",
          "number": "102",
          "set": "FLI"
      },
      {
        "count": 2,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 2,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Joshua Bradley',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/jumpluff.png',
    sprite2: '../../../assets/sprites/weavile.png',
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
        cardImg: '../../assets/cards/2019-2020/jumpluff.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/skiploom.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoppip.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/trumbeak.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/natu.png',
        numImg: '../../assets/03.png'
      },
      {
         "count": 2,
          "name": "Weavile",
          "number": "86",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Sneasel",
          "number": "73",
          "set": "UPR"
      },
      {
        "count": 2,
              "name": "Oranguru",
              "number": "113",
              "set": "SUM"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 4,
        "name": "Great Ball",
        "number": "164",
        "set": "SSH"
      },
      {
        "count": 3,
        "name": "Net Ball",
        "number": "187",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lost-blender.png',
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
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 4,
        "name": "Grass Energy",
        "number": "grass",
        "set": "TEU"
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
    firstName: 'Blake Wightman',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Christopher Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
          "name": "Malamar",
          "number": "51",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Inkay",
          "number": "50",
          "set": "FLI"
      },
      {
        "count": 2,
          "name": "Ultra Necrozma GX",
          "number": "95",
          "set": "FLI"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
       "count": 1,
          "name": "Giratina",
          "number": "97",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Gengar & Mimikyu GX",
          "number": "53",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2018-17/marshadow-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/necrozma-dawn-wings.png',
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
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 4,
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
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
          "name": "Beast Ring",
          "number": "102",
          "set": "FLI"
      },
      {
        "count": 2,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 2,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Colin Tang',
    flag: '../../../assets/flags/liberia-malaysia.png',
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
        "count": 2,
          "name": "Buzzwole GX",
          "number": "57",
          "set": "CIN"
      },
      {
        "count": 2,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
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
        "number": "75",
        "set": "FLI"
      },
      {
        "count": 2,
          "name": "Alolan Ninetales GX",
          "number": "132",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Alolan Vulpix",
          "number": "21",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/diancie-p.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Alolan Muk",
          "number": "58",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Professor Kukui",
          "number": "128",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lisia.png',
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
          "name": "Beast Ring",
          "number": "102",
          "set": "FLI"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
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
        "count": 3,
        "name": "Brooklet Hill",
        "number": "120",
        "set": "GRI"
      },
      {
        "count": 7,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
      {
        "count": 4,
        "name": "Unit Energy DFY",
        "number": "118",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Benjamin Branch',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/passimian.png',
    sprite2: '../../../assets/sprites/tapu-koko.png',
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
        cardImg: '../../assets/cards/2018-17/passimian-team-play.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/passimian-huddle.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Tapu Koko",
          "number": "SM31",
          "set": "SMP"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Tapu Lele",
          "number": "SM45",
          "set": "SMP"
      },
      {
        cardImg: '../../assets/cards/2019-2020/victini-v-beatdown.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/diancie-p.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
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
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
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
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
        "count": 2,
        "name": "Energy Loto",
        "number": "122",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Counter Catcher",
          "number": "91",
          "set": "CIN"
      },
      {
          "count": 1,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 3,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
          "count": 3,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        "count": 4,
          "name": "Counter Energy",
          "number": "100",
          "set": "CIN"
      },
    ]
  },
  {
    firstName: 'Tommy Le',
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
        "count": 3,
          "name": "Rockruff",
          "number": "73",
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
          "name": "Weavile",
          "number": "74",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Sneasel",
          "number": "86",
          "set": "CES"
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
          "number": "83",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Professor Elm's Lecture",
          "number": "188",
          "set": "LOT"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
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
        "count": 2,
          "name": "Professor Kukui",
          "number": "128",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
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
        "count": 3,
          "name": "Timer Ball",
          "number": "134",
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
        "name": "Multi Switch",
        "number": "129",
        "set": "GRI"
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
        "count": 3,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Devoured Field",
          "number": "93",
          "set": "CIN"
      },
      {
        "count": 1,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        "count": 2,
        "name": "Unit Energy DFY",
        "number": "118",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
    ]
  },
  {
    firstName: 'Luca Serianni',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
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
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Raikou",
          "number": "32",
          "set": "SLG"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
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
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
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
        "count": 2,
          "name": "Aether Paradise Conservation Area",
          "number": "116",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Gabriel Massaroth',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Justin Kulas',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 1,
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
          "name": "Rayquaza GX",
          "number": "109",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2018-17/marshadow-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 2,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 1,
              "name": "Oranguru",
              "number": "113",
              "set": "SUM"
      },
      {
        "count": 3,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
        "count": 4,
            "name": "Acro Bike",
            "number": "123",
            "set": "CES"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 2,
        "name": "Multi Switch",
        "number": "129",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Wondrous Labyrinth ♢",
          "number": "158",
          "set": "TEU"
      },
      {
        "count": 12,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Louis Chi',
    flag: '../../../assets/flags/new-zealand.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/jolteon.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 2,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
       "count": 1,
        "name": "Jolteon GX",
        "number": "SM173",
        "set": "SMP"
      },
      {
        "count": 1,
        "name": "Eevee",
        "number": "101",
        "set": "SUM"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 1,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Beast Ring",
          "number": "102",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Field Blower",
          "number": "125",
          "set": "GRI"
      },
      {
          "count": 3,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 7,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 2,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Sameer Sangwan',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Aaron Van Der Kolk',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
          "name": "Malamar",
          "number": "51",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Inkay",
          "number": "50",
          "set": "FLI"
      },
      {
       "count": 2,
          "name": "Giratina",
          "number": "97",
          "set": "LOT"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Ultra Necrozma GX",
          "number": "95",
          "set": "FLI"
      },
      {
       "count": 1,
          "name": "Marshadow GX",
          "number": "80",
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
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
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
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
          "name": "Nest Ball",
          "number": "123",
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
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 3,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Abraham Morales',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Connor Finton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
          "name": "Malamar",
          "number": "51",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Inkay",
          "number": "50",
          "set": "FLI"
      },
      {
        "count": 2,
          "name": "Ultra Necrozma GX",
          "number": "95",
          "set": "FLI"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
       "count": 2,
          "name": "Giratina",
          "number": "97",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/marshadow-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/necrozma-dawn-wings.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 1,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 3,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 6,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 2,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Blake Davies',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/passimian.png',
    sprite2: '../../../assets/sprites/tapu-koko.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Brent Tonisson',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
          "name": "Malamar",
          "number": "51",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Inkay",
          "number": "50",
          "set": "FLI"
      },
      {
       "count": 2,
          "name": "Giratina",
          "number": "97",
          "set": "LOT"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Ultra Necrozma GX",
          "number": "95",
          "set": "FLI"
      },
      {
       "count": 1,
          "name": "Marshadow GX",
          "number": "80",
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
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
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
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
          "name": "Nest Ball",
          "number": "123",
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
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 3,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Joey Ho',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Mitch Knuckey',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Eujun Gan',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
       "count": 1,
        "name": "Jolteon GX",
        "number": "SM173",
        "set": "SMP"
      },
      {
        "count": 1,
        "name": "Eevee",
        "number": "101",
        "set": "SUM"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Volkner",
          "number": "135",
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
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
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
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 10,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Yu Xiang',
    flag: '../../../assets/flags/new-zealand.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
          "name": "Malamar",
          "number": "51",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Inkay",
          "number": "50",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/ultra-necrozma-gx.png',
        numImg: '../../assets/02.png'
      },
      {
       "count": 1,
          "name": "Giratina",
          "number": "97",
          "set": "LOT"
      },
      {
          "count": 1,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
       "count": 1,
          "name": "Marshadow GX",
          "number": "80",
          "set": "BUS"
      },
      {
        "count": 1,
        "name": "Dawn Wings Necrozma GX",
        "number": "63",
        "set": "UPR"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
        "name": "Mimikyu",
        "number": "58",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko",
          "number": "SM31",
          "set": "SMP"
      },
      {
        cardImg: '../../assets/cards/2019-2020/chimecho.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        "count": 2,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 1,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 2,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Nicholas Apostolou',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Raikou",
          "number": "32",
          "set": "SLG"
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
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Aether Paradise Conservation Area",
          "number": "116",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 12,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Joseph Tran',
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
        "count": 1,
          "name": "Lycanroc GX",
          "number": "82",
          "set": "TEU"
      },
      {
        "count": 3,
          "name": "Rockruff",
          "number": "73",
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
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        "count": 3,
          "name": "Professor Elm's Lecture",
          "number": "188",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Professor Kukui",
          "number": "128",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Timer Ball",
          "number": "134",
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
        "name": "Multi Switch",
        "number": "129",
        "set": "GRI"
      },
      {
          "count": 1,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
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
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Devoured Field",
          "number": "93",
          "set": "CIN"
      },
      {
        "count": 4,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
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
    firstName: 'Scott Langford',
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
        "count": 1,
          "name": "Lycanroc GX",
          "number": "82",
          "set": "TEU"
      },
      {
        "count": 3,
          "name": "Rockruff",
          "number": "73",
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
          "name": "Weavile",
          "number": "74",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Sneasel",
          "number": "86",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Alolan Muk",
          "number": "58",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Professor Elm's Lecture",
          "number": "188",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
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
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/plumeria.png',
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
          "name": "Timer Ball",
          "number": "134",
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
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
        "count": 3,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Devoured Field",
          "number": "93",
          "set": "CIN"
      },
      {
        "count": 1,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        "count": 4,
        "name": "Unit Energy DFY",
        "number": "118",
        "set": "FLI"
      },
    ]
  },
]
// www.pokemon.com/us/play-pokemon/internationals/2019/oceania/tcg-junior

let seniors = [
  {
    firstName: 'Alexandre Solé',
    flag: '../../../assets/flags/belgium.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/magcargo.png',
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
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
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
          "number": "83",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Rockruff",
          "number": "73",
          "set": "GRI"
      },
      {
         "count": 1,
          "name": "Magcargo",
          "number": "CES",
          "set": "24"
      },
      {
        "count": 1,
          "name": "Slugma",
          "number": "CES",
          "set": "23"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Girafarig",
          "number": "94",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/sableye-limitation.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 4,
          "name": "Professor Elm's Lecture",
          "number": "188",
          "set": "LOT"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Acerola",
          "number": "112",
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
          "name": "Gladion",
          "number": "95",
          "set": "CIN"
      },
      {
        "count": 1,
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
        "count": 1,
          "name": "Team Skull Grunt",
          "number": "133",
          "set": "SUM"
      },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
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
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
          "count": 1,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 1,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/mount-lanakila.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Wondrous Labyrinth ♢",
          "number": "158",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        "count": 3,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
    ]
  },
  {
    firstName: 'Asger Balle',
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
        "count": 3,
          "name": "Rockruff",
          "number": "73",
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
          "name": "Alolan Muk",
          "number": "58",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Alolan Grimer",
          "number": "83",
          "set": "BUS"
      },
      {
         "count": 1,
          "name": "Weavile",
          "number": "74",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Sneasel",
          "number": "73",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
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
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
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
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2018-17/palpad.png',
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
        "count": 2,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Devoured Field",
          "number": "93",
          "set": "CIN"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        "count": 4,
        "name": "Unit Energy DFY",
        "number": "118",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Lucas Xing',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/jolteon.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
       "count": 2,
        "name": "Jolteon GX",
        "number": "SM173",
        "set": "SMP"
      },
      {
        "count": 2,
        "name": "Eevee",
        "number": "101",
        "set": "SUM"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Professor Kukui",
          "number": "128",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 1,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
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
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 8,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Rowan Stavenow',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/jolteon.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
       "count": 1,
        "name": "Jolteon GX",
        "number": "SM173",
        "set": "SMP"
      },
      {
        "count": 1,
        "name": "Eevee",
        "number": "101",
        "set": "SUM"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        "count": 1,
        "name": "Blitzle",
        "number": "81",
        "set": "LOT"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Professor Kukui",
          "number": "128",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
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
          "count": 3,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 8,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Tanner Hurley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/zapdos.png',
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
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
              "name": "Oranguru",
              "number": "113",
              "set": "SUM"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Professor Kukui",
          "number": "128",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 3,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 2,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 1,
        "name": "Energy Loto",
        "number": "122",
        "set": "GRI"
      },
      {
          "count": 3,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 8,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Kaya Lichtleitner',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
          "name": "Malamar",
          "number": "51",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Inkay",
          "number": "50",
          "set": "FLI"
      },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
       "count": 2,
          "name": "Giratina",
          "number": "97",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Ultra Necrozma GX",
          "number": "95",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 1,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
         "count": 4,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Pedro Pertusi',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/zapdos.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 2,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/diancie-p.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 1,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
          "count": 3,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 3,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Rune Heiremans',
    flag: '../../../assets/flags/belgium.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
          "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
        "count": 1,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
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
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
]
// www.pokemon.com/us/play-pokemon/internationals/2019/oceania/tcg-junior
let juniors = [
  {
    firstName: 'Simon Belanyi',
    flag: '../../../assets/flags/slovakia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
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
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Raikou",
          "number": "32",
          "set": "SLG"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Wondrous Labyrinth ♢",
          "number": "158",
          "set": "TEU"
      },
      {
        "count": 12,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Jean Cardoso',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
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
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 3,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lisia.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
        "count": 2,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
          "count": 2,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        "count": 3,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 12,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Shannon Rochester',
    flag: '../../../assets/flags/new-zealand.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
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
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lisia.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Aether Paradise Conservation Area",
          "number": "116",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 12,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Roan Godfrey-Robbins',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
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
          "name": "Blacephalon GX",
          "number": "52",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Naganadel",
          "number": "108",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Poipole",
          "number": "55",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Poipole",
          "number": "107",
          "set": "LOT"
      },
      {
        "count": 2,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 1,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 2,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Beast Ring",
          "number": "102",
          "set": "FLI"
      },
      {
        "count": 3,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 2,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Ultra Space",
          "number": "115",
          "set": "FLI"
      },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
          "count": 15,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Benny Billinger',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/zapdos.png',
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
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Tapu Koko GX",
          "number": "47",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 1,
              "name": "Oranguru",
              "number": "113",
              "set": "SUM"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Professor Kukui",
          "number": "128",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 3,
            "name": "Escape Rope",
            "number": "114",
            "set": "BUS"
      },
      {
        "count": 2,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 1,
        "name": "Energy Loto",
        "number": "122",
        "set": "GRI"
      },
      {
          "count": 3,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 8,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Pedro Cavalcanti',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
          "name": "Malamar",
          "number": "51",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Inkay",
          "number": "50",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/ultra-necrozma-gx.png',
        numImg: '../../assets/02.png'
      },
      {
       "count": 2,
          "name": "Giratina",
          "number": "97",
          "set": "LOT"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
       "count": 1,
          "name": "Marshadow GX",
          "number": "80",
          "set": "BUS"
      },
      {
        "count": 1,
        "name": "Dawn Wings Necrozma GX",
        "number": "63",
        "set": "UPR"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 4,
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
          "name": "Switch",
          "number": "147",
          "set": "CES"
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
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 3,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Noah Donen',
    flag: '../../../assets/flags/canada.png',
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
        "count": 2,
          "name": "Tapu Lele GX",
          "number": "60",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Alolan Ninetales GX",
          "number": "132",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Alolan Vulpix",
          "number": "21",
          "set": "GRI"
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
          "number": "83",
          "set": "TEU"
      },
      {
         "count": 1,
          "name": "Weavile",
          "number": "74",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Sneasel",
          "number": "86",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
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
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
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
          "name": "Professor Elm's Lecture",
          "number": "188",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 4,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2018-17/palpad.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
          "count": 1,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
        "name": "Choice Band",
        "number": "121",
        "set": "GRI"
      },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Devoured Field",
          "number": "93",
          "set": "CIN"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        "count": 4,
        "name": "Unit Energy DFY",
        "number": "118",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Taylor Johnson',
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
        cardImg: '../../assets/cards/2018-17/rockruff-promo.png',
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
          "name": "Alolan Ninetales GX",
          "number": "132",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Alolan Vulpix",
          "number": "21",
          "set": "GRI"
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
          "number": "83",
          "set": "TEU"
      },
      {
         "count": 1,
          "name": "Weavile",
          "number": "74",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Sneasel",
          "number": "86",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 1,
        "name": "Marshadow",
        "number": "45",
        "set": "SLG"
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Guzma",
          "number": "115",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Acerola",
          "number": "112",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
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
          "name": "Professor Elm's Lecture",
          "number": "188",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2018-17/palpad.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Rescue Stretcher",
        "number": "130",
        "set": "GRI"
      },
      {
          "count": 1,
          "name": "Switch",
          "number": "147",
          "set": "CES"
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
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Bodybuilding Dumbbells",
          "number": "113",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Black Market ♢",
          "number": "134",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
      {
        "count": 4,
        "name": "Unit Energy DFY",
        "number": "118",
        "set": "FLI"
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2019 OCIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2019 OCIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2019 OCIC";

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
