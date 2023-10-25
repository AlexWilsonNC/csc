const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Robin Schulz',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/reshiram-charizard-tagteam.png',
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
          "count": 1,
          "name": "Reshiram & Charizard GX",
          "number": "20",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 1,
          "name": "Heatran GX",
          "number": "25",
          "set": "UNM"
        },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
          "count": 1,
          "name": "Turtonator",
          "number": "50",
          "set": "DRM"
        },
      {
          "count": 1,
          "name": "Victini ♢",
          "number": "7",
          "set": "DRM"
        },
      {
          "count": 2,
          "name": "Ninetales",
          "number": "16",
          "set": "TEU"
        },
      {
          "count": 2,
          "name": "Vulpix",
          "number": "15",
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
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 1,
          "name": "Pal Pad",
          "number": "172",
          "set": "SSH"
      },
      {
          "count": 1,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
          "count": 18,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
    ]
  },
  {
    firstName: 'Bryan de Vries',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 1,
          "name": "Reshiram & Charizard GX",
          "number": "20",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Charizard GX",
          "number": "SM211",
          "set": "SMP"
      },
      {
        "count": 1,
          "name": "Espeon & Deoxys GX",
          "number": "72",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Magcargo GX",
          "number": "44",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Naganadel GX",
          "number": "160",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Solgaleo GX",
          "number": "SM104",
          "set": "SMP"
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "SMP"
      },
      {
        "count": 1,
          "name": "Marshadow",
          "number": "81",
          "set": "UNB"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
       "count": 1,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
         "count": 1,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        "count": 3,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Stealthy Hood",
          "number": "186",
          "set": "UNB"
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
          "count": 8,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
          "count": 1,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
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
    firstName: 'Giovanni Peragallo',
    flag: '../../../assets/flags/chile.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/drampa.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Phione",
          "number": "57",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 1,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 8,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 7,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Lucas Gusso',
    flag: '../../../assets/flags/brazil.png',
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
         "count": 3,
          "name": "Blacephalon GX",
          "number": "52",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Naganadel",
          "number": "108",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Naganadel GX",
          "number": "160",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Naganadel GX",
          "number": "56",
          "set": "FLI"
      },
      {
        "count": 4,
          "name": "Poipole",
          "number": "55",
          "set": "FLI"
      },
      {
          "count": 1,
          "name": "Heatran GX",
          "number": "25",
          "set": "UNM"
        },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Blacephalon",
          "number": "104",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 1,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
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
          "count": 14,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Psychic Energy",
          "number": "psychic",
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
    firstName: 'Ondřej Škubal',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/florges-red.png',
    sprite2: '../../../assets/sprites/clefairy.png',
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
        cardImg: '../../assets/cards/2019-2020/florges.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/flabebe.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png ',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
        "name": "Munchlax",
        "number": "173",
        "set": "UNM"
      },
      {
        "count": 2,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2021-2022/spiritomb.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/steven-resolve.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lusamine.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Bellelba & Brycen-Man",
          "number": "186",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Tate & Liza",
          "number": "148",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lillie's Poké Doll",
          "number": "197",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 3,
        "name": "Rare Candy",
        "number": "142",
        "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/sky-pillar.png',
        numImg: '../../assets/02.png'
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
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/giratina-garchomp-tagteam.png',
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
        "name": "Garchomp & Giratina GX",
        "number": "146",
        "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-guzzlord-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 3,
          "name": "Mismagius",
          "number": "78",
          "set": "UNB"
        },
       {
          "count": 4,
          "name": "Misdreavus",
          "number": "77",
          "set": "UNB"
        },
      {
        "count": 1,
        "name": "Mimikyu",
        "number": "58",
        "set": "GRI"
      },
      {
        "count": 1,
        "name": "Omastar",
        "number": "76",
        "set": "TEU"
      },
      {
          "count": 4,
          "name": "Green's Exploration",
          "number": "175",
          "set": "UNB"
        },
      {
       "count": 2,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
         "count": 1,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
          "count": 3,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 3,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
        "count": 2,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
        "count": 2,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
          "count": 2,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        "count": 1,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
        "count": 1,
        "name": "Dusk Stone",
        "number": "167",
        "set": "UNB"
      },
      {
          "count": 1,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 1,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 1,
          "name": "Energy Spinner",
          "number": "170",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Rare Candy",
        "number": "142",
        "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2019-2020/unidentified-fossil.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 1,
        "name": "Karate Belt",
        "number": "201",
        "set": "UNM"
      },
      {
        "count": 4,
          "name": "Power Plant",
          "number": "183",
          "set": "UNB"
      },
      {
        "count": 3,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 2,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-teu.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Unit Energy DFY",
        "number": "118",
        "set": "FLI"
      },
      {
        "count": 2,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
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
    firstName: 'Victor Vieira',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/adp.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/drampa.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Green's Exploration",
          "number": "175",
          "set": "UNB"
        },
      {
        "count": 4,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
       "count": 1,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/channeler.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
        "count": 4,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
          "count": 3,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 2,
          "name": "Great Potion",
          "number": "198",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Energy Spinner",
          "number": "170",
          "set": "UNB"
        },
      {
          "count": 1,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Power Plant",
          "number": "183",
          "set": "UNB"
      },
      {
        "count": 2,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 5,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 5,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
          "name": "Unit Energy GRW",
          "number": "137",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Matthew Burris',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/braixen-charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Charizard GX",
          "number": "SM211",
          "set": "SMP"
      },
      {
        "count": 1,
          "name": "Espeon & Deoxys GX",
          "number": "72",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Solgaleo GX",
          "number": "SM104",
          "set": "SMP"
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "SMP"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
       "count": 2,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        "count": 3,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
        "count": 3,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
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
          "name": "Stealthy Hood",
          "number": "186",
          "set": "UNB"
      },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
          "count": 8,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 3,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Manuel Jorach',
    flag: '../../../assets/flags/austria.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
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
          "name": "Blacephalon",
          "number": "32",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgeotto.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey-quick-attack.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
          "count": 1,
          "name": "Victini ♢",
          "number": "7",
          "set": "DRM"
        },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
        "count": 4,
          "name": "Fire Crystal",
          "number": "173",
          "set": "UNB"
      },
      {
          "count": 3,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        "count": 3,
          "name": "Lillie's Poké Doll",
          "number": "197",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
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
          "count": 14,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
    ]
  },
  {
    firstName: 'Alessandro Cremascoli',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/oranguru.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
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
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgeotto.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/articuno-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/slowking.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
        "name": "Pokémon Fan Club",
        "number": "133",
        "set": "UPR"
      },
      {
        "count": 2,
          "name": "Tate & Liza",
          "number": "148",
          "set": "CES"
      },
      {
         "count": 2,
          "name": "Hapu",
          "number": "200",
          "set": "UNM"
      },
      {
        "count": 2,
          "name": "Lt. Surge's Strategy",
          "number": "178",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/mars.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/misty-and-loraine.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Bellelba & Brycen-Man",
          "number": "186",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/jessie-and-james.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 3,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        "count": 3,
          "name": "Crushing Hammer",
          "number": "115",
          "set": "SUM"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/chipchip-ice-axe.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Power Plant",
          "number": "183",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/champions-festival-19.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Recycle Energy",
          "number": "212",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Owyn Kamerman',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
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
          "name": "Blacephalon",
          "number": "32",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgeotto.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey-quick-attack.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey-collect.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
         "count": 1,
          "name": "Blacephalon GX",
          "number": "52",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
          "count": 1,
          "name": "Victini ♢",
          "number": "7",
          "set": "DRM"
        },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
        "count": 4,
          "name": "Fire Crystal",
          "number": "173",
          "set": "UNB"
      },
      {
          "count": 4,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
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
          "count": 14,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/drampa.png',
        numImg: '../../assets/01.png'
      },
      {
         "count": 1,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Phione",
          "number": "57",
          "set": "CEC"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
         "count": 3,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ns-resolve.png',
        numImg: '../../assets/02.png'
      },
      {
       "count": 1,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/misty-and-loraine.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 2,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 7,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 6,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
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
    firstName: 'Claudio Ferla',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/gardevoir-sylveon-tagteam.png',
    sprite2: '../../../assets/sprites/omastar.png',
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
          "name": "Gardevoir & Sylveon GX",
          "number": "130",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        "count": 1,
        "name": "Omastar",
        "number": "76",
        "set": "TEU"
      },
      {
          "count": 4,
          "name": "Green's Exploration",
          "number": "175",
          "set": "UNB"
        },
      {
          "count": 3,
          "name": "Coach Trainer",
          "number": "192",
          "set": "UNM"
        },
      {
        "count": 3,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
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
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 2,
          "name": "Tag Switch",
          "number": "209",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Energy Spinner",
          "number": "170",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
        "count": 1,
        "name": "Rare Candy",
        "number": "142",
        "set": "CES"
      },
      {
          "count": 1,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/unidentified-fossil.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/island-challenge-amulet.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Power Plant",
          "number": "183",
          "set": "UNB"
      },
      {
        "count": 8,
          "name": "Fairy Energy",
          "number": "fairy",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Igor Costa',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/guzzlord-naganadel-tagteam.png',
    sprite2: '../../../assets/sprites/mismagius.png',
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
        cardImg: '../../assets/cards/2019-2020/naganadel-guzzlord-gx.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 4,
          "name": "Mismagius",
          "number": "78",
          "set": "UNB"
        },
       {
          "count": 4,
          "name": "Misdreavus",
          "number": "77",
          "set": "UNB"
        },
      {
          "count": 3,
          "name": "Bill's Analysis",
          "number": "133",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Lt. Surge's Strategy",
          "number": "178",
          "set": "UNB"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-forest-kartenvoy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/order-pad.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
        "name": "Dusk Stone",
        "number": "167",
        "set": "UNB"
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
        "count": 3,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        "count": 1,
        "name": "Energy Recycler",
        "number": "123",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Beast Bringer",
          "number": "164",
          "set": "UNB"
      },
      {
        "count": 4,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-teu.png',
        numImg: '../../assets/03.png'
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
    firstName: 'Eder Soto',
    flag: '../../../assets/flags/mexico.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/reshiram-charizard-tagteam.png',
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
          "name": "Reshiram & Charizard GX",
          "number": "20",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 1,
          "name": "Heatran GX",
          "number": "25",
          "set": "UNM"
        },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
          "count": 1,
          "name": "Turtonator",
          "number": "50",
          "set": "DRM"
        },
      {
          "count": 1,
          "name": "Victini ♢",
          "number": "7",
          "set": "DRM"
        },
      {
          "count": 2,
          "name": "Ninetales",
          "number": "16",
          "set": "TEU"
        },
      {
          "count": 1,
          "name": "Vulpix",
          "number": "15",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/luxio.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 1,
          "name": "Pal Pad",
          "number": "172",
          "set": "SSH"
      },
      {
          "count": 1,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 1,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
          "count": 18,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
    ]
  },
  {
    firstName: 'Tommi Lahtela',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/florges-red.png',
    sprite2: '../../../assets/sprites/clefairy.png',
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
        cardImg: '../../assets/cards/2019-2020/florges.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/flabebe.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/sawsbuck.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deerling.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/steven-resolve.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-oaks-setup.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lusamine.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Bellelba & Brycen-Man",
          "number": "186",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/brocks-grit.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/channeler.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie's Poké Doll",
          "number": "197",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
        "count": 3,
        "name": "Rare Candy",
        "number": "142",
        "set": "CES"
      },
      {
          "count": 1,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
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
        "count": 3,
          "name": "Stealthy Hood",
          "number": "186",
          "set": "UNB"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/sky-pillar.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
        "name": "Grass Energy",
        "number": "grass",
        "set": "TEU"
      },
      {
        "count": 1,
          "name": "Recycle Energy",
          "number": "212",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Rafael Yuiti',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/braixen-charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Charizard GX",
          "number": "SM211",
          "set": "SMP"
      },
      {
        "count": 1,
          "name": "Espeon & Deoxys GX",
          "number": "72",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Magcargo GX",
          "number": "44",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Naganadel GX",
          "number": "160",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Solgaleo GX",
          "number": "SM104",
          "set": "SMP"
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "SMP"
      },
      {
        "count": 1,
          "name": "Marshadow",
          "number": "81",
          "set": "UNB"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
       "count": 1,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 1,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-recycle-system.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Stealthy Hood",
          "number": "186",
          "set": "UNB"
      },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
          "count": 8,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
          "count": 1,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
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
    firstName: 'Douglas Castro',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/oranguru.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
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
    firstName: 'Vitor Lugon',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/oranguru.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
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
    firstName: 'Fabien Pujol',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/drampa.png',
        numImg: '../../assets/01.png'
      },
      {
         "count": 1,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Phione",
          "number": "57",
          "set": "CEC"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
         "count": 3,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ns-resolve.png',
        numImg: '../../assets/02.png'
      },
      {
       "count": 1,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/misty-and-loraine.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 2,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 7,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 6,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
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
    firstName: 'Joao Santos',
    flag: '../../../assets/flags/brazil.png',
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
        "count": 2,
          "name": "Naganadel GX",
          "number": "160",
          "set": "UNM"
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
          "number": "102",
          "set": "UNM"
      },
      {
          "count": 1,
          "name": "Heatran GX",
          "number": "25",
          "set": "UNM"
        },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Oricorio GX",
          "number": "95",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/island-challenge-amulet.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Ultra Space",
          "number": "115",
          "set": "FLI"
      },
      {
          "count": 14,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Psychic Energy",
          "number": "psychic",
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
    firstName: 'Jimmy Pendarvis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/guzzlord-naganadel-tagteam.png',
    sprite2: '../../../assets/sprites/mismagius.png',
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
        cardImg: '../../assets/cards/2019-2020/naganadel-guzzlord-gx.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 4,
          "name": "Mismagius",
          "number": "78",
          "set": "UNB"
        },
       {
          "count": 4,
          "name": "Misdreavus",
          "number": "77",
          "set": "UNB"
        },
      {
          "count": 3,
          "name": "Bill's Analysis",
          "number": "133",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Lt. Surge's Strategy",
          "number": "178",
          "set": "UNB"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-forest-kartenvoy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/order-pad.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
        "name": "Dusk Stone",
        "number": "167",
        "set": "UNB"
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
        "count": 3,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        "count": 1,
        "name": "Energy Recycler",
        "number": "123",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Beast Bringer",
          "number": "164",
          "set": "UNB"
      },
      {
        "count": 4,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-teu.png',
        numImg: '../../assets/03.png'
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
    firstName: 'Daniel Abramovici',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/charizard-braixen-tagteam.png',
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
        "count": 4,
          "name": "Volcanion",
          "number": "25",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/braixen-charizard-gx.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Reshiram & Charizard GX",
          "number": "20",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        "count": 1,
        "name": "Omastar",
        "number": "76",
        "set": "TEU"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Green's Exploration",
          "number": "175",
          "set": "UNB"
        },
      {
        "count": 2,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
         "count": 1,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
          "count": 3,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
          "name": "Fire Crystal",
          "number": "173",
          "set": "UNB"
      },
      {
          "count": 1,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        "count": 1,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 1,
          "name": "Energy Spinner",
          "number": "170",
          "set": "UNB"
        },
      {
        "count": 1,
        "name": "Rare Candy",
        "number": "142",
        "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2019-2020/unidentified-fossil.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Power Plant",
          "number": "183",
          "set": "UNB"
      },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
          "count": 12,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
    ]
  },
  {
    firstName: 'Lucas Fabiano Maiola',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Charizard GX",
          "number": "SM211",
          "set": "SMP"
      },
      {
        "count": 1,
          "name": "Espeon & Deoxys GX",
          "number": "72",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Magcargo GX",
          "number": "44",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Naganadel GX",
          "number": "160",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Solgaleo GX",
          "number": "SM104",
          "set": "SMP"
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "SMP"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
         "count": 1,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
       "count": 1,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 3,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 3,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 2,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        "count": 2,
          "name": "Stealthy Hood",
          "number": "186",
          "set": "UNB"
      },
      {
        "count": 1,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 8,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
          "count": 1,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
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
    firstName: 'Dyego Rathje',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/giratina.png',
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
        cardImg: '../../assets/cards/2019-2020/trevenant-dusknoir-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Blacephalon",
          "number": "104",
          "set": "CEC"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        "count": 1,
        "name": "Mimikyu",
        "number": "58",
        "set": "GRI"
      },
      {
         "count": 1,
          "name": "Mimikyu",
          "number": "97",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
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
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 1,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
         "count": 3,
          "name": "Spell Tag",
          "number": "190",
          "set": "LOT"
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
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Recycle Energy",
          "number": "212",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Brent Tonisson',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/braixen-charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Charizard GX",
          "number": "SM211",
          "set": "SMP"
      },
      {
        "count": 1,
          "name": "Espeon & Deoxys GX",
          "number": "72",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Solgaleo GX",
          "number": "SM104",
          "set": "SMP"
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "SMP"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
       "count": 2,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        "count": 3,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
        "count": 3,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
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
          "name": "Stealthy Hood",
          "number": "186",
          "set": "UNB"
      },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
          "count": 8,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 3,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Patricia Walsh',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/oranguru.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
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
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgeotto.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey-quick-attack.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey-collect.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/articuno-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/slowking.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Tate & Liza",
          "number": "148",
          "set": "CES"
      },
      {
         "count": 2,
          "name": "Hapu",
          "number": "200",
          "set": "UNM"
      },
      {
        "count": 2,
          "name": "Lt. Surge's Strategy",
          "number": "178",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/mars.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Rosa",
          "number": "204",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/misty-and-loraine.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Pokémon Fan Club",
        "number": "133",
        "set": "UPR"
      },
      {
        "count": 1,
          "name": "Bellelba & Brycen-Man",
          "number": "186",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/jessie-and-james.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 3,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        "count": 3,
          "name": "Crushing Hammer",
          "number": "115",
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
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/chipchip-ice-axe.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Power Plant",
          "number": "183",
          "set": "UNB"
      },
      {
          "count": 4,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Recycle Energy",
          "number": "212",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Stéphane Ivanoff',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/silvally.png',
    sprite2: '../../../assets/sprites/quagsire.png',
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
        cardImg: '../../assets/cards/2019-2020/silvally-gx-disk-reload.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/silvally-gx-unit.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/type-null.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
        "name": "Quagsire",
        "number": "26",
        "set": "DRM"
      },
      {
        "count": 2,
          "name": "Wooper",
          "number": "96",
          "set": "UNB"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blastoise-piplup-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        "count": 1,
          "name": "Marshadow",
          "number": "81",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-oaks-setup.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/red-blue.png',
        numImg: '../../assets/03.png'
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
        "count": 4,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 2,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
        "count": 3,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 11,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
    ]
  },
  {
    firstName: 'Otavio Gouveia',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
    firstName: 'Rahul Reddy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        "count": 2,
          "name": "Marshadow",
          "number": "81",
          "set": "UNB"
      },
      {
          "count": 1,
          "name": "Reshiram & Charizard GX",
          "number": "20",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Charizard GX",
          "number": "SM211",
          "set": "SMP"
      },
      {
        "count": 1,
          "name": "Espeon & Deoxys GX",
          "number": "72",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Magcargo GX",
          "number": "44",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Naganadel GX",
          "number": "160",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Solgaleo GX",
          "number": "SM104",
          "set": "SMP"
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
          "count": 1,
          "name": "Turtonator",
          "number": "50",
          "set": "DRM"
        },
      {
        "count": 1,
        "name": "Mewtwo",
        "number": "75",
        "set": "UNB"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        "count": 3,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
          "count": 3,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 3,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        "count": 3,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/energy-recycle-system.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
          "count": 9,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Emildo Andrade',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blacephalon.png',
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
    firstName: 'Pedro Ricardo',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
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
          "name": "Blacephalon",
          "number": "32",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgeotto.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey-quick-attack.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
          "count": 1,
          "name": "Heatran GX",
          "number": "25",
          "set": "UNM"
        },
      {
          "count": 1,
          "name": "Victini ♢",
          "number": "7",
          "set": "DRM"
        },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
        "count": 4,
          "name": "Fire Crystal",
          "number": "173",
          "set": "UNB"
      },
      {
          "count": 3,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
          "count": 14,
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
    firstName: 'Diego Cassiraga',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
    firstName: 'Francesco Caterino',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/drampa.png',
        numImg: '../../assets/01.png'
      },
      {
         "count": 1,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Phione",
          "number": "57",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
         "count": 3,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ns-resolve.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/misty-and-loraine.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 2,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 2,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 7,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 7,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Rafael Santos',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
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
          "name": "Blacephalon",
          "number": "32",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgeotto.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey-quick-attack.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
          "count": 1,
          "name": "Heatran GX",
          "number": "25",
          "set": "UNM"
        },
      {
          "count": 1,
          "name": "Victini ♢",
          "number": "7",
          "set": "DRM"
        },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
        "count": 4,
          "name": "Fire Crystal",
          "number": "173",
          "set": "UNB"
      },
      {
          "count": 3,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
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
          "count": 14,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
    ]
  },
  {
    firstName: 'Fabio Andrade',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Froslass",
        "number": "38",
        "set": "UNM"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
         "count": 1,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
       "count": 1,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
          "count": 1,
          "name": "Bill's Analysis",
          "number": "133",
          "set": "TEU"
        },
      {
        "count": 4,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 1,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 4,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 2,
          "name": "Unit Energy GRW",
          "number": "137",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Renato Christian',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/giratina.png',
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
        cardImg: '../../assets/cards/2019-2020/trevenant-dusknoir-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Blacephalon",
          "number": "104",
          "set": "CEC"
      },
      {
        "count": 1,
        "name": "Mimikyu",
        "number": "58",
        "set": "GRI"
      },
      {
         "count": 1,
          "name": "Mimikyu",
          "number": "97",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
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
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 1,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Lana's Fishing Rod",
          "number": "195",
          "set": "CEC"
      },
      {
         "count": 3,
          "name": "Spell Tag",
          "number": "190",
          "set": "LOT"
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
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Recycle Energy",
          "number": "212",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Gabriel Semedo',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 1,
          "name": "Reshiram & Charizard GX",
          "number": "20",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/braixen-charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Charizard GX",
          "number": "SM211",
          "set": "SMP"
      },
      {
        "count": 1,
          "name": "Espeon & Deoxys GX",
          "number": "72",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Naganadel GX",
          "number": "160",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Solgaleo GX",
          "number": "SM104",
          "set": "SMP"
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "SMP"
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Marshadow",
          "number": "81",
          "set": "UNB"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
          "count": 3,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
        "count": 2,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/energy-recycle-system.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
          "count": 4,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
          "count": 8,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
          "count": 1,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
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
    firstName: 'Bruno Sermann',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/gardevoir-sylveon-tagteam.png',
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
          "count": 4,
          "name": "Gardevoir & Sylveon GX",
          "number": "130",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/xerneas-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
          "count": 4,
          "name": "Green's Exploration",
          "number": "175",
          "set": "UNB"
        },
      {
        "count": 3,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
       "count": 1,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
        "count": 4,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
          "count": 3,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 2,
          "name": "Energy Spinner",
          "number": "170",
          "set": "UNB"
        },
      {
          "count": 2,
          "name": "Tag Switch",
          "number": "209",
          "set": "UNM"
        },
      {
          "count": 1,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Fairy Charm Dragon",
          "number": "177",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Power Plant",
          "number": "183",
          "set": "UNB"
      },
      {
        "count": 2,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
        "count": 8,
          "name": "Fairy Energy",
          "number": "fairy",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/draw-energy.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Mateus Penido',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/drampa.png',
        numImg: '../../assets/01.png'
      },
      {
         "count": 1,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Phione",
          "number": "57",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
       "count": 2,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 4,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 3,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 3,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 1,
          "name": "Energy Spinner",
          "number": "170",
          "set": "UNB"
        },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Unit Energy GRW",
          "number": "137",
          "set": "UPR"
      },
    ]
  },
  {
    firstName: 'James Cox',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/braixen-charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Charizard GX",
          "number": "SM211",
          "set": "SMP"
      },
      {
        "count": 1,
          "name": "Espeon & Deoxys GX",
          "number": "72",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Solgaleo GX",
          "number": "SM104",
          "set": "SMP"
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "SMP"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
       "count": 2,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        "count": 3,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
        "count": 3,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
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
          "name": "Stealthy Hood",
          "number": "186",
          "set": "UNB"
      },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
          "count": 8,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 3,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Vinicius Moschen',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/adp.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Hoopa",
          "number": "140",
          "set": "UNM"
      },
      {
         "count": 2,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Green's Exploration",
          "number": "175",
          "set": "UNB"
        },
      {
        "count": 4,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
        "count": 4,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
          "count": 4,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 3,
          "name": "Energy Spinner",
          "number": "170",
          "set": "UNB"
        },
      {
          "count": 3,
          "name": "Great Potion",
          "number": "198",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 1,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 5,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 5,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Fabian Huerta',
    flag: '../../../assets/flags/chile.png',
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
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Raichu & Alolan Raichu GX",
          "number": "54",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Hoopa",
          "number": "140",
          "set": "UNM"
      },
      {
        "count": 4,
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
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Electromagnetic Radar",
          "number": "169",
          "set": "UNB"
      },
      {
          "count": 2,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      "count": 2,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      {
          "count": 1,
          "name": "Tag Switch",
          "number": "209",
          "set": "UNM"
        },
      {
        "count": 1,
          "name": "Stadium Nav",
          "number": "208",
          "set": "UNM"
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
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
    firstName: 'Romulo de Oliveira',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
       "count": 2,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
        "count": 4,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 4,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 5,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Unit Energy GRW",
          "number": "137",
          "set": "UPR"
      },
    ]
  },
  {
    firstName: 'Tiago Marins',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
         "count": 1,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
       "count": 2,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
        "count": 4,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 3,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 3,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 1,
          "name": "Energy Spinner",
          "number": "170",
          "set": "UNB"
        },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 4,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Unit Energy GRW",
          "number": "137",
          "set": "UPR"
      },
    ]
  },
  {
    firstName: 'Alejo Iturbe',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/oranguru.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
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
    firstName: 'Andressa Medrado',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
    firstName: 'Giovani Rossato',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/victini.png',
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
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        "count": 2,
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
          "count": 1,
          "name": "Reshiram & Charizard GX",
          "number": "20",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/braixen-charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Charizard GX",
          "number": "SM211",
          "set": "SMP"
      },
      {
          "count": 1,
          "name": "Heatran GX",
          "number": "25",
          "set": "UNM"
        },
      {
        "count": 1,
          "name": "Magcargo GX",
          "number": "44",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
          "count": 1,
          "name": "Victini ♢",
          "number": "7",
          "set": "DRM"
        },
      {
          "count": 1,
          "name": "Turtonator",
          "number": "50",
          "set": "DRM"
        },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
          "count": 16,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
    firstName: 'William Azevedo',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/adp.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Hoopa",
          "number": "140",
          "set": "UNM"
      },
      {
         "count": 2,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Green's Exploration",
          "number": "175",
          "set": "UNB"
        },
      {
        "count": 4,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
        "count": 4,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
          "count": 4,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 3,
          "name": "Energy Spinner",
          "number": "170",
          "set": "UNB"
        },
      {
          "count": 3,
          "name": "Great Potion",
          "number": "198",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 1,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 5,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 5,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Matias Matricardi',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
    firstName: 'Jimmy Munk',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 3,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
         "count": 1,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
       "count": 2,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
          "count": 1,
          "name": "Bill's Analysis",
          "number": "133",
          "set": "TEU"
        },
      {
        "count": 4,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 3,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 7,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Unit Energy GRW",
          "number": "137",
          "set": "UPR"
      },
    ]
  },
  {
    firstName: 'Samuel Alves',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
         "count": 1,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
       "count": 2,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
        "count": 4,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 4,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 3,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 1,
          "name": "Energy Spinner",
          "number": "170",
          "set": "UNB"
        },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 4,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Unit Energy GRW",
          "number": "137",
          "set": "UPR"
      },
    ]
  },
  {
    firstName: 'Vinicius Lopes',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
         "count": 1,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ns-resolve.png',
        numImg: '../../assets/03.png'
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
          "count": 3,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
        "count": 1,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 8,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 6,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Guilherme da Mata Pinho',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/adp.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Hoopa",
          "number": "140",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/blastoise-piplup-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/pheromosa.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Green's Exploration",
          "number": "175",
          "set": "UNB"
        },
      {
        "count": 3,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
       "count": 1,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
          "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
          "count": 1,
          "name": "Bill's Analysis",
          "number": "133",
          "set": "TEU"
        },
      {
        "count": 4,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 3,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 3,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Tag Switch",
          "number": "209",
          "set": "UNM"
        },
      {
        "count": 1,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 1,
          "name": "Energy Spinner",
          "number": "170",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Power Plant",
          "number": "183",
          "set": "UNB"
      },
      {
         "count": 2,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
          "count": 5,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 5,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 2,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Leonardo Braga',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
    firstName: 'Lucas Freitas',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/quagsire.png',
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
        "count": 3,
        "name": "Quagsire",
        "number": "26",
        "set": "DRM"
      },
      {
        "count": 3,
          "name": "Wooper",
          "number": "25",
          "set": "DRM"
      },
      {
        "count": 3,
          "name": "Naganadel",
          "number": "108",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Poipole",
          "number": "107",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        "count": 1,
        "name": "Volcanion ♢",
        "number": "31",
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
          "name": "Mew",
          "number": "76",
          "set": "UNB"
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
        "count": 1,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
         "count": 1,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
          "count": 3,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 1,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 1,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/uturn-board.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
          "count": 8,
          "name": "Water Energy",
          "number": "water",
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
    firstName: 'Natalie Millar',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/braixen-charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Charizard GX",
          "number": "SM211",
          "set": "SMP"
      },
      {
        "count": 1,
          "name": "Espeon & Deoxys GX",
          "number": "72",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Solgaleo GX",
          "number": "SM104",
          "set": "SMP"
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "SMP"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
       "count": 2,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        "count": 3,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
        "count": 3,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
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
          "name": "Stealthy Hood",
          "number": "186",
          "set": "UNB"
      },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
          "count": 8,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 3,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Mehdi Hafi',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/reshiram-charizard-tagteam.png',
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
          "count": 1,
          "name": "Reshiram & Charizard GX",
          "number": "20",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 1,
          "name": "Heatran GX",
          "number": "25",
          "set": "UNM"
        },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
          "count": 1,
          "name": "Turtonator",
          "number": "50",
          "set": "DRM"
        },
      {
          "count": 1,
          "name": "Victini ♢",
          "number": "7",
          "set": "DRM"
        },
      {
          "count": 2,
          "name": "Ninetales",
          "number": "16",
          "set": "TEU"
        },
      {
          "count": 2,
          "name": "Vulpix",
          "number": "15",
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
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 1,
          "name": "Pal Pad",
          "number": "172",
          "set": "SSH"
      },
      {
          "count": 1,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
          "count": 4,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
          "count": 18,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
    ]
  },
  {
    firstName: 'Jelle van Kampen',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
         "count": 2,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
        "count": 2,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Phione",
          "number": "57",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
         "count": 1,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
       "count": 1,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/cyrus-p.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 3,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 3,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 3,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
          "count": 1,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 1,
          "name": "Tag Switch",
          "number": "209",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 4,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Unit Energy GRW",
          "number": "137",
          "set": "UPR"
      },
    ]
  },
  {
    firstName: 'Rodrigo Nuñez',
    flag: '../../../assets/flags/argentina.png',
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
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Raichu & Alolan Raichu GX",
          "number": "54",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/eelektross.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Marshadow",
          "number": "81",
          "set": "UNB"
      },
      {
        "count": 4,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
         "count": 1,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Electromagnetic Radar",
          "number": "169",
          "set": "UNB"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      "count": 2,
          "name": "Energy Switch",
          "number": "129",
          "set": "CES"
      {
          "count": 1,
          "name": "Tag Switch",
          "number": "209",
          "set": "UNM"
        },
      {
        "count": 1,
          "name": "Stadium Nav",
          "number": "208",
          "set": "UNM"
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Power Plant",
          "number": "183",
          "set": "UNB"
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
    firstName: 'Antonio Jardim',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/oranguru.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
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
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgeotto.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey-quick-attack.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey-collect.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/articuno-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tyrogue.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Tate & Liza",
          "number": "148",
          "set": "CES"
      },
      {
        "count": 2,
          "name": "Lt. Surge's Strategy",
          "number": "178",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/mars.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Bellelba & Brycen-Man",
          "number": "186",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/jessie-and-james.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
          "count": 3,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        "count": 3,
          "name": "Crushing Hammer",
          "number": "115",
          "set": "SUM"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/chipchip-ice-axe.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Power Plant",
          "number": "183",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/sky-pillar.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Recycle Energy",
          "number": "212",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/reshiram-charizard-tagteam.png',
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
          "count": 1,
          "name": "Reshiram & Charizard GX",
          "number": "20",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 1,
          "name": "Heatran GX",
          "number": "25",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/flareon-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/eevee.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Turtonator",
          "number": "50",
          "set": "DRM"
        },
      {
          "count": 1,
          "name": "Victini ♢",
          "number": "7",
          "set": "DRM"
        },
      {
        "count": 1,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 3,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 3,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Pal Pad",
          "number": "172",
          "set": "SSH"
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
          "count": 2,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
          "count": 18,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
    ]
  },
  {
    firstName: 'Maximiliano Lofredo',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        "count": 2,
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/drampa.png',
        numImg: '../../assets/01.png'
      },
      {
         "count": 1,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ns-resolve.png',
        numImg: '../../assets/04.png'
      },
      {
         "count": 3,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
        "count": 1,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 8,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 7,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
    ]
  },
]
// https://www.pokemon.com/us/play-pokemon/internationals/2020/latin-america/tcg-senior/
let seniors = [
  {
    firstName: 'Lochie McKeefry',
    flag: '../../../assets/flags/new-zealand.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/braixen-charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Charizard GX",
          "number": "SM211",
          "set": "SMP"
      },
      {
        "count": 1,
          "name": "Espeon & Deoxys GX",
          "number": "72",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Naganadel GX",
          "number": "160",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Solgaleo GX",
          "number": "SM104",
          "set": "SMP"
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "SMP"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
       "count": 2,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        "count": 3,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
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
          "name": "Stealthy Hood",
          "number": "186",
          "set": "UNB"
      },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
          "count": 8,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 3,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Renan Takeo Togashi',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
         "count": 2,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
        "count": 2,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
       "count": 1,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
        "count": 4,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 3,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 3,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 3,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
          "count": 2,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 4,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Unit Energy GRW",
          "number": "137",
          "set": "UPR"
      },
    ]
  },
  {
    firstName: 'Mateus Rocha',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/oranguru.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
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
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgeotto.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey-quick-attack.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey-collect.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/articuno-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
        "name": "Froslass",
        "number": "38",
        "set": "UNM"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Tate & Liza",
          "number": "148",
          "set": "CES"
      },
      {
        "count": 2,
          "name": "Lt. Surge's Strategy",
          "number": "178",
          "set": "UNB"
      },
      {
        "count": 2,
          "name": "Bellelba & Brycen-Man",
          "number": "186",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/mars.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Rosa",
          "number": "204",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/jessie-and-james.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
         "count": 1,
          "name": "Hapu",
          "number": "200",
          "set": "UNM"
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 3,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        "count": 2,
          "name": "Crushing Hammer",
          "number": "115",
          "set": "SUM"
      },
      {
          "count": 2,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/chipchip-ice-axe.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/lillies-poke-doll.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Power Plant",
          "number": "183",
          "set": "UNB"
      },
      {
          "count": 3,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Recycle Energy",
          "number": "212",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Lucas Jordão',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        "count": 2,
          "name": "Marshadow",
          "number": "81",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/braixen-charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Charizard GX",
          "number": "SM211",
          "set": "SMP"
      },
      {
        "count": 1,
          "name": "Espeon & Deoxys GX",
          "number": "72",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Magcargo GX",
          "number": "44",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Naganadel GX",
          "number": "160",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Solgaleo GX",
          "number": "SM104",
          "set": "SMP"
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "SMP"
      },
      {
        "count": 1,
          "name": "Phione",
          "number": "57",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
       "count": 1,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 3,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
        "count": 2,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 1,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Stealthy Hood",
          "number": "186",
          "set": "UNB"
      },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
          "count": 8,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
          "count": 1,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Matheus Kanaan',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/charizard-braixen-tagteam.png',
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
          "name": "Volcanion",
          "number": "25",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/braixen-charizard-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/pheromosa.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Green's Exploration",
          "number": "175",
          "set": "UNB"
        },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Lt. Surge's Strategy",
          "number": "178",
          "set": "UNB"
      },
      {
       "count": 1,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
          "count": 3,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 3,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
          "name": "Fire Crystal",
          "number": "173",
          "set": "UNB"
      },
      {
          "count": 1,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        "count": 1,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 1,
          "name": "Energy Spinner",
          "number": "170",
          "set": "UNB"
        },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
        "count": 1,
        "name": "Giant Bomb",
        "number": "196",
        "set": "UNM"
      },
      {
        "count": 3,
          "name": "Power Plant",
          "number": "183",
          "set": "UNB"
      },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
          "count": 11,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Vinicius Fernandez',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/florges-red.png',
    sprite2: '../../../assets/sprites/clefairy.png',
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
        cardImg: '../../assets/cards/2019-2020/florges.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/flabebe-blizard.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/flabebe.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/flabebe-floral-invitation.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgeotto.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey-quick-attack.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
        "name": "Munchlax",
        "number": "173",
        "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Hoopa",
          "number": "140",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/tyrogue.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/steven-resolve.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Bill's Analysis",
          "number": "133",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/lusamine.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Bellelba & Brycen-Man",
          "number": "186",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Tate & Liza",
          "number": "148",
          "set": "CES"
      },
      {
        "count": 4,
          "name": "Lillie's Poké Doll",
          "number": "197",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 3,
        "name": "Rare Candy",
        "number": "142",
        "set": "CES"
      },
      {
        "count": 1,
          "name": "Lana's Fishing Rod",
          "number": "195",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/uturn-board.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/sky-pillar.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Joao Antonio',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
         "count": 1,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/drampa.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ns-resolve.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 3,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 3,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 2,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 8,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 6,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Simon Belanyi',
    flag: '../../../assets/flags/slovakia.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
         "count": 1,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/drampa.png',
        numImg: '../../assets/01.png'
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
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
       "count": 1,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
          "count": 3,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 3,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
        "count": 1,
        "name": "Hustle Belt",
        "number": "134",
        "set": "CES"
      },
      {
        "count": 3,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 5,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 5,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Pedro Augusto Buto',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
         "count": 1,
          "name": "Cryogonal",
          "number": "46",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/drampa.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ns-resolve.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
          "count": 3,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 3,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 8,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 6,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Marley Skyum',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/oranguru.png',
    sprite2: '../../../assets/sprites/pidgeotto.png',
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
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgeotto.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey-quick-attack.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/articuno-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
          "count": 1,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Tate & Liza",
          "number": "148",
          "set": "CES"
      },
      {
        "count": 2,
          "name": "Lt. Surge's Strategy",
          "number": "178",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/mars.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Bellelba & Brycen-Man",
          "number": "186",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Rosa",
          "number": "204",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/jessie-and-james.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
        "count": 1,
        "name": "Pokémon Fan Club",
        "number": "133",
        "set": "UPR"
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
          "count": 3,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        "count": 3,
          "name": "Crushing Hammer",
          "number": "115",
          "set": "SUM"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/chipchip-ice-axe.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Power Plant",
          "number": "183",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/champions-festival-19.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 3,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Recycle Energy",
          "number": "212",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Patrik Polak',
    flag: '../../../assets/flags/slovakia.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/drampa.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Phione",
          "number": "57",
          "set": "CEC"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
         "count": 3,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ns-resolve.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/misty-and-loraine.png',
        numImg: '../../assets/01.png'
      },
      {
       "count": 1,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
        "count": 4,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 7,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 6,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
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
    firstName: 'Yuri Lohan',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/keldeo.png',
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
        cardImg: '../../assets/cards/2019-2020/victini.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Arceus & Dialga & Palkia GX",
          "number": "156",
          "set": "CEC"
      },
      {
        "count": 2,
          "name": "Keldeo GX",
          "number": "47",
          "set": "UNM"
      },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/blastoise-piplup-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/drampa.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 3,
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
        "count": 2,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
       "count": 2,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 3,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
        "count": 3,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 2,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/island-challenge-amulet.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
          "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        "count": 4,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
    ]
  },
  {
    firstName: 'Gabriel Fernandez',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/giratina.png',
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
        "count": 1,
          "name": "Espeon & Deoxys GX",
          "number": "72",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Blacephalon",
          "number": "104",
          "set": "CEC"
      },
      {
        "count": 1,
        "name": "Mimikyu",
        "number": "58",
        "set": "GRI"
      },
      {
         "count": 1,
          "name": "Mimikyu",
          "number": "97",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
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
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
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
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
         "count": 3,
          "name": "Spell Tag",
          "number": "190",
          "set": "LOT"
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
        "count": 1,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Recycle Energy",
          "number": "212",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Samuel Castillo',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/gardevoir-sylveon-tagteam.png',
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
          "count": 4,
          "name": "Gardevoir & Sylveon GX",
          "number": "130",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/xerneas-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Green's Exploration",
          "number": "175",
          "set": "UNB"
        },
      {
        "count": 3,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
         "count": 2,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Pokégear 3.0",
          "number": "182",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        "count": 3,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 3,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 2,
          "name": "Energy Spinner",
          "number": "170",
          "set": "UNB"
        },
      {
          "count": 2,
          "name": "Tag Switch",
          "number": "209",
          "set": "UNM"
        },
      {
          "count": 1,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        "count": 1,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/island-challenge-amulet.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Fairy Charm Lightning",
          "number": "172",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Fairy Charm Dragon",
          "number": "177",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Power Plant",
          "number": "183",
          "set": "UNB"
      },
      {
        "count": 2,
          "name": "Chaotic Swell",
          "number": "187",
          "set": "CEC"
      },
      {
        "count": 9,
          "name": "Fairy Energy",
          "number": "fairy",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Mia Sun',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/giratina.png',
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
          "count": 4,
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
        cardImg: '../../assets/cards/2019-2020/trevenant-dusknoir-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Blacephalon",
          "number": "104",
          "set": "CEC"
      },
      {
         "count": 1,
          "name": "Mimikyu",
          "number": "97",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
          "count": 1,
          "name": "Espurr",
          "number": "79",
          "set": "UNB"
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
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Rosa",
          "number": "204",
          "set": "CEC"
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 3,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
          "count": 1,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 1,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
         "count": 4,
          "name": "Spell Tag",
          "number": "190",
          "set": "LOT"
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
        "count": 1,
          "name": "Recycle Energy",
          "number": "212",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Megan Jacques',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
          "count": 4,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        "count": 2,
          "name": "Solgaleo GX",
          "number": "SM104",
          "set": "SMP"
      },
      {
          "count": 1,
          "name": "Reshiram & Charizard GX",
          "number": "20",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Charizard GX",
          "number": "SM211",
          "set": "SMP"
      },
      {
        "count": 1,
          "name": "Espeon & Deoxys GX",
          "number": "72",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mega Lopunny & Jigglypuff GX",
          "number": "165",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Naganadel GX",
          "number": "160",
          "set": "UNM"
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "SMP"
      },
      {
        "count": 1,
          "name": "Marshadow",
          "number": "81",
          "set": "UNB"
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
         "count": 2,
          "name": "Hapu",
          "number": "200",
          "set": "UNM"
      },
      {
       "count": 1,
          "name": "Guzma & Hala",
          "number": "193",
          "set": "CEC"
      },
      {
        "count": 1,
          "name": "Cynthia & Caitlin",
          "number": "189",
          "set": "CEC"
      },
      {
         "count": 1,
          "name": "Mallow & Lana",
          "number": "198",
          "set": "CEC"
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        "count": 2,
        "name": "Tag Call",
        "number": "206",
        "set": "CEC"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Great Catcher",
          "number": "192",
          "set": "CEC"
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
        "count": 2,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
          "count": 8,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 3,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 3,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2020 LAIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2020 LAIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2020 LAIC";

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
