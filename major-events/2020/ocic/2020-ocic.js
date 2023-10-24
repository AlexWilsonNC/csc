const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Nico Alabas',
    flag: '../../../assets/flags/germany.png',
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
        cardImg: '../../assets/cards/2019-2020/charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Reshiram & Charizard GX",
          "number": "20",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-psychic.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/victini-v.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Zach Lesage',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/reshiram-charizard-tagteam.png',
    sprite2: '../../../assets/sprites/ninetales.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
          "count": 1,
          "name": "Heatran GX",
          "number": "25",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/victini-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 2,
          "name": "Ninetales",
          "number": "16",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/vulpix-flare.png',
        numImg: '../../assets/02.png'
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
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 2,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/lucky-egg.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/18.png'
      },
    ]
  },
  {
    firstName: 'Tim Bartels',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/obstagoon.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/obstagoon.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/linoone.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zigzagoon.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/sableye-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/yveltal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/virizion-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rosa.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bede.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rare-candy-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/evo-insence.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
    ]
  },
  {
    firstName: 'James Williams',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/cinccino.png',
    sprite2: '../../../assets/sprites/oranguru.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/cinccino.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/minccino.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bellelba-brycen-man.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillies-poke-doll.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/crushing-hammer-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ordinary-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/evo-insence.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/air-balloon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/recycle-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Bert Wolters',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/vitality-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-g.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Ian Robb',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/vitality-band.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/big-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/03.png'
      }
    ]
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../../assets/flags/norway.png',
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
        cardImg: '../../assets/cards/2019-2020/charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Reshiram & Charizard GX",
          "number": "20",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-psychic.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/victini-v.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Natalie Millar',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
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
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/vitality-band.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/big-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-g.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Clifton Goh',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
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
    firstName: 'Soma Arai',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/magcargo.png',
    sprite2: '../../../assets/sprites/oranguru.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/slugma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mareep.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
        "count": 1,
        "name": "Aerodactyl GX",
        "number": "106",
        "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/wobbufet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bellelba-brycen-man.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillies-poke-doll.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ordinary-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-ball.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/air-balloon.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/slumbering-forest.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-swsh.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Tan Yong Siang',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blacephalon.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/baby-blacephalon.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cramorant-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oricorio-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
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
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        "count": 4,
          "name": "Fire Crystal",
          "number": "173",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-retrieval-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/friend-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Stadium Nav",
          "number": "208",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/adventure-bag.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/lucky-egg.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-bringer.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-space.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/14.png'
      },
    ]
  },
  {
    firstName: 'Andrew Tandianus',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-copycat-fairy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/vitality-band.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/big-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-frying-pan.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/04.png'
      }
    ]
  },
  {
    firstName: 'Takuya Shomura',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Marshadow",
          "number": "81",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dragon-talon.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-g.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Daniel Altavilla',
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
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
        "name": "Mimikyu",
        "number": "58",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Espurr",
          "number": "79",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-lunala-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
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
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lanas-fishing-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/spelltag.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-swsh.png',
        numImg: '../../assets/08.png'
      },
    ]
  },
  {
    firstName: 'Jon Eng',
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
        "count": 2,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Raichu & Alolan Raichu GX",
          "number": "54",
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
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-v.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
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
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Electromagnetic Radar",
          "number": "169",
          "set": "UNB"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
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
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-swsh.png',
        numImg: '../../assets/11.png'
      },
    ]
  },
  {
    firstName: 'Man Tsung Wong',
    flag: '../../../assets/flags/hong-kong.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/slugma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-copycat-fairy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
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
        cardImg: '../../assets/cards/2019-2020/vitality-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-swsh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Chienwei Yu',
    flag: '../../../assets/flags/taiwan.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
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
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Fini",
          "number": "53",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-core-barrier.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/big-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-g.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Pedro Pertusi',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/malamar.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/trevenant-dusknoir-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Naganadel GX",
          "number": "160",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-swsh.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Yohei Takeda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/slugma-singe.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 1,
          "name": "Ninetales",
          "number": "16",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-ball.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/island-challenge-amulet.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/11.png'
      },
    ]
  },
  {
    firstName: 'Grant Manley',
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
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
        "name": "Mimikyu",
        "number": "58",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Espurr",
          "number": "79",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        "count": 1,
          "name": "Espeon & Deoxys GX",
          "number": "72",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
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
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lanas-fishing-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/spelltag.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-swsh.png',
        numImg: '../../assets/08.png'
      },
    ]
  },
  {
    firstName: 'André Chiasson',
    flag: '../../../assets/flags/canada.png',
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
        "count": 1,
          "name": "Raichu & Alolan Raichu GX",
          "number": "54",
          "set": "UNM"
      },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Electromagnetic Radar",
          "number": "169",
          "set": "UNB"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/big-charm.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
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
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-swsh.png',
        numImg: '../../assets/11.png'
      },
    ]
  },
  {
    firstName: 'Yuki Ishii',
    flag: '../../../assets/flags/taiwan.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
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
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Tapu Fini",
          "number": "53",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-core-barrier.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/big-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Peter Lo',
    flag: '../../../assets/flags/hong-kong.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
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
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-copycat-fairy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/vitality-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Colin Tang',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/malamar.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/trevenant-dusknoir-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Garchomp & Giratina GX",
        "number": "146",
        "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Naganadel GX",
          "number": "160",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/alolan-persian-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/erikas-hospitality.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
          "count": 2,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
          "count": 1,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/air-balloon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-swsh.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Logan Madden',
    flag: '../../../assets/flags/uk.png',
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
        "count": 1,
          "name": "Raichu & Alolan Raichu GX",
          "number": "54",
          "set": "UNM"
      },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-v.png',
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
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Electromagnetic Radar",
          "number": "169",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
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
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-swsh.png',
        numImg: '../../assets/11.png'
      },
    ]
  },
  {
    firstName: 'Fung Tsz Ping',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blacephalon.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/baby-blacephalon.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cramorant-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oricorio-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
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
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        "count": 4,
          "name": "Fire Crystal",
          "number": "173",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-retrieval-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Stadium Nav",
          "number": "208",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/adventure-bag.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/lucky-egg.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-bringer.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-space.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/14.png'
      },
    ]
  },
  {
    firstName: 'Christian Hasbani',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
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
    firstName: 'Benjamin Behrens',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
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
    firstName: 'Kenneth Tan',
    flag: '../../../assets/flags/singapore.png',
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
          "name": "Raichu & Alolan Raichu GX",
          "number": "54",
          "set": "UNM"
      },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-v.png',
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
          "number": "81",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Electromagnetic Radar",
          "number": "169",
          "set": "UNB"
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-swsh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
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
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-swsh.png',
        numImg: '../../assets/11.png'
      },
    ]
  },
  {
    firstName: 'Tadashi Maeda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
          "count": 2,
          "name": "Energy Spinner",
          "number": "170",
          "set": "UNB"
        },
      {
          "count": 1,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-core-barrier.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Otavio Gouveia',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/vitality-band.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/big-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-swsh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Robin Schulz',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 1,
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
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zigzagoon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/vitality-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Robert Spiller',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
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
    firstName: 'Raz Wolpe',
    flag: '../../../assets/flags/isreal.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 1,
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
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/vitality-band.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/03.png'
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
    firstName: 'Corey Munro',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/vitality-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/10.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/01.png'
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
    firstName: 'Louis Pozzacchio',
    flag: '../../../assets/flags/australia.png',
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
    firstName: 'Wong Wo Pan',
    flag: '../../../assets/flags/hong-kong.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/malamar.png',
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
    firstName: 'Ricki Madsen',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/zacian-crowned.png',
    sprite2: '../../../assets/sprites/lucario-melmetal-tagteam.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dusk-mane-necrozma.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bellelba-brycen-man.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/crushing-hammer-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-frying-pan.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/swsh-energy-metal.png',
        numImg: '../../assets/12.png'
      },
    ]
  },
  {
    firstName: 'Will Jenkins',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Marshadow",
          "number": "81",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Energy Spinner",
          "number": "170",
          "set": "UNB"
        },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/vitality-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/energy/swsh-energy-water.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Koyo Taniguchi',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/air-balloon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/big-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-core-barrier.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dragon-talon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/energy/swsh-energy-water.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-g.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Mehdi Hafi',
    flag: '../../../assets/flags/france.png',
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
        cardImg: '../../assets/cards/2019-2020/charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Reshiram & Charizard GX",
          "number": "20",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-psychic.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/victini-v.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Sean Takemoto',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/slugma-singe.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 1,
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
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 1,
          "name": "Turtonator",
          "number": "50",
          "set": "DRM"
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
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Fire Crystal",
          "number": "173",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/11.png'
      },
    ]
  },
  {
    firstName: 'Louis Chi',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
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
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/metal-core-barrier.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/big-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Akira Sato',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/malamar.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/trevenant-dusknoir-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Naganadel GX",
          "number": "160",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/air-balloon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-swsh.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Brennan Kamerman',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blacephalon.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/baby-blacephalon.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cramorant-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oricorio-gx.png',
        numImg: '../../assets/01.png'
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
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        "count": 4,
          "name": "Fire Crystal",
          "number": "173",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/energy-retrieval-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/adventure-bag.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/lucky-egg.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-bringer.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/14.png'
      },
    ]
  },
  {
    firstName: 'Matty Masefield',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
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
    firstName: 'Miloslav Poslední',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 1,
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
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/vitality-band.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/03.png'
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
    firstName: 'Aaron Stringfellow',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/cinccino.png',
    sprite2: '../../../assets/sprites/oranguru.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/cinccino.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/minccino.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/goomy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bellelba-brycen-man.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillies-poke-doll.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/crushing-hammer-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ordinary-rod.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/air-balloon.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/recycle-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Ethan Lee',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
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
    sprite2: '../../../assets/sprites/reshiram-charizard-tagteam.png',
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
    firstName: 'Jordan Palmer',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
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
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/clay.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Energy Spinner",
          "number": "170",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/vitality-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-swsh.png',
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Henry Brand',
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
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2018-17/solgaleo-gx-ultra-road.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/venusaur-snivy-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/vileplume-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Blastoise GX",
        "number": "35",
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
        "name": "Greninja GX",
        "number": "SM197",
        "set": "SMP"
      },
      {
        cardImg: '../../assets/cards/2019-2020/alolan-raticate-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/flygon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/indeedee-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/xerneas-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/wobbufet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/air-balloon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/big-charm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/aurora-energy.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-g.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Shawn Chan',
    flag: '../../../assets/flags/singapore.png',
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
    firstName: 'Benjamin Hall',
    flag: '../../../assets/flags/australia.png',
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
    firstName: 'Nicholas Apostolou',
    flag: '../../../assets/flags/australia.png',
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
    firstName: 'Sam Lao',
    flag: '../../../assets/flags/australia.png',
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
    firstName: 'Cheuk Fai Brian Lee',
    flag: '../../../assets/flags/hong-kong.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/malamar.png',
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
    firstName: 'Lucas Hamilton-Foster',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
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
    firstName: 'Henry Rasheed',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
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
    firstName: 'Pedro Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 1,
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
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zigzagoon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/vitality-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Blake Lobina',
    flag: '../../../assets/flags/australia.png',
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
    firstName: 'Alfred Yang',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/malamar.png',
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
    firstName: 'Tsubota Hokuto',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
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
    firstName: 'Matthew Taverna',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/malamar.png',
    list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Sobi Kwak',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/malamar.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/trevenant-dusknoir-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Naganadel GX",
          "number": "160",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/poipole-spit.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Mimikyu",
        "number": "58",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-swsh.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Christian Moreno',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/reshiram-charizard-tagteam.png',
    sprite2: '../../../assets/sprites/ninetales.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
          "count": 1,
          "name": "Heatran GX",
          "number": "25",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/victini-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 2,
          "name": "Ninetales",
          "number": "16",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/vulpix-flare.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
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
          "name": "Volcanion",
          "number": "25",
          "set": "UNB"
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/03.png'
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
          "count": 1,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/18.png'
      },
    ]
  },
  {
    firstName: 'Travis Beckwith',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/cinccino.png',
    sprite2: '../../../assets/sprites/oranguru.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/cinccino.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/minccino.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Aerodactyl GX",
        "number": "106",
        "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/wobbufet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bellelba-brycen-man.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillies-poke-doll.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/crushing-hammer-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ordinary-rod.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/evo-insence.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/air-balloon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-swsh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/recycle-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Renan Togashi',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/reshiram-charizard-tagteam.png',
    sprite2: '../../../assets/sprites/ninetales.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
          "count": 1,
          "name": "Heatran GX",
          "number": "25",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/victini-v.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 2,
          "name": "Ninetales",
          "number": "16",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/vulpix-flare.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Victini ♢",
          "number": "7",
          "set": "DRM"
        },
      {
        "count": 1,
          "name": "Volcanion",
          "number": "25",
          "set": "UNB"
      },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
          "count": 3,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/18.png'
      },
    ]
  },
  {
    firstName: 'Christian Labella',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
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
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zigzagoon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/vitality-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-swsh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Justin Tse',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
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
        cardImg: '../../assets/cards/2019-2020/oranguru-primate-wisdom.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/crushing-hammer-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-swsh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/03.png'
      },
    ]
  },
  {
    firstName: 'Marcus Dwyer',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
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
    firstName: 'Kaya Lichtleitner',
    flag: '../../../assets/flags/germany.png',
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
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgeotto.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pidgey.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 1,
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mareep.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/bellelba-brycen-man.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lusamine.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillies-poke-doll.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ordinary-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/air-balloon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/slumbering-forest.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Power Plant",
          "number": "183",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        cardImg: '../../assets/cards/energy/recycle-energy.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Lucas Oldale',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
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
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/vitality-band.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/10.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Pedro Cavalcanti',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/malamar.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/trevenant-dusknoir-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Naganadel GX",
          "number": "160",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-swsh.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Connor Chabie',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/galarian-perrserker.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/galarian-meowth.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokemon-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/judge-whistle.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-swsh.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Carson Washer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/cinccino.png',
    sprite2: '../../../assets/sprites/oranguru.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/cinccino.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/minccino.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Mewtwo & Mew GX",
          "number": "71",
          "set": "UNM"
      },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/wobbufet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bellelba-brycen-man.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillies-poke-doll.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/crushing-hammer-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ordinary-rod.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/evo-insence.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/air-balloon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/recycle-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Alvin Lim',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Mew",
          "number": "76",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Reset Stamp",
          "number": "206",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/09.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
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
    firstName: 'Mia Sun',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 1,
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
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professors-research.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marnie.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/metal-saucer.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-swsh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/metal-frying-pan.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-swsh.png',
        numImg: '../../assets/10.png'
      },
      {
        cardImg: '../../assets/cards/new-energy/aurora-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Li Bartels',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blacephalon.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/baby-blacephalon.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cramorant-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zacian-v.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oricorio-gx.png',
        numImg: '../../assets/01.png'
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
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        "count": 4,
          "name": "Fire Crystal",
          "number": "173",
          "set": "UNB"
      },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-retrieval-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/adventure-bag.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/lucky-egg.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-bringer.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-space.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/14.png'
      },
    ]
  },
  {
    firstName: 'Elijah Maclean',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/blacephalon.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020/baby-blacephalon.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oricorio-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
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
          "name": "Custom Catcher",
          "number": "171",
          "set": "LOT"
        },
      {
        "count": 4,
          "name": "Fire Crystal",
          "number": "173",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2019-2020/quick-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-retrieval-swsh.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/switch-swsh.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ordinary-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/adventure-bag.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/lucky-egg.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/island-challenge-amulet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-space.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-swsh.png',
        numImg: '../../assets/14.png'
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2020 OCIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2020 OCIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2020 OCIC";

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
