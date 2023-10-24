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
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
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
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
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
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/01.png'
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
        },,
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
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "SMP"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
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
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 8,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },,
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 8,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 7,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
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
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/poipole-spit.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-space.png',
        numImg: '../../assets/02.png'
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
        },,
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2021-2022/spiritomb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/bellelba-brycen-man.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillies-poke-doll.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
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
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
        "name": "Karate Belt",
        "number": "201",
        "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },,
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
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/channeler.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 5,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 5,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
      {
        cardImg: '../../assets/cards/energy/unit-energy-g.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../assets/01.png'
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
        },,
      {
        "count": 3,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/baby-blacephalon.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/lillies-poke-doll.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-space.png',
        numImg: '../../assets/03.png'
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
        },,
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
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hapu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/bellelba-brycen-man.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jessie-and-james.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/crushing-hammer.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/02.png'
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
        },,
      {
        cardImg: '../../assets/cards/energy/recycle-energy.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/baby-blacephalon.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-space.png',
        numImg: '../../assets/03.png'
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
        },,
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ns-resolve.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/misty-and-loraine.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 7,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 6,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
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
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Omastar",
        "number": "76",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Coach Trainer",
          "number": "192",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-teu.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/bills-analysis.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/beast-bringer.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
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
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
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
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
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
        },,
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
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/bellelba-brycen-man.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/lillies-poke-doll.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
        "name": "Rare Candy",
        "number": "142",
        "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/energy/recycle-energy.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "SMP"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 8,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },,
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ns-resolve.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/misty-and-loraine.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 7,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 6,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
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
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/poipole-spit.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/poipole-belt.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/oricorio-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/island-challenge-amulet.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-space.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 14,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },,
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/bills-analysis.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/beast-bringer.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/volcanion.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
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
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/03.png'
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
        },,
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
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
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
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 8,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },,
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
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
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/trevenant-dusknoir-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-psychic.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/spelltag.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/recycle-energy.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../assets/01.png'
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
        },,
      {
        "count": 3,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hapu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mars.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rosa.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/bellelba-brycen-man.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jessie-and-james.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/crushing-hammer.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 4,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        cardImg: '../../assets/cards/energy/recycle-energy.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/quagsire.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/wooper-ground.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/blastoise-piplup-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-oaks-setup.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/red-blue.png',
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
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 11,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
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
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Reshiram & Charizard GX",
          "number": "20",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Turtonator",
          "number": "50",
          "set": "DRM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/mewtwo.png',
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
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 9,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },,
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/baby-blacephalon.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
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
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
          "count": 14,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },,
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ns-resolve.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/misty-and-loraine.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 7,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 7,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
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
        cardImg: '../../assets/cards/2019-2020/baby-blacephalon.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
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
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-space.png',
        numImg: '../../assets/03.png'
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
        },,
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bills-analysis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
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
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 4,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
      {
        cardImg: '../../assets/cards/energy/unit-energy-g.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/trevenant-dusknoir-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Mimikyu",
        "number": "58",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
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
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/recycle-energy.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "SMP"
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
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
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
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
        },,
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
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
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-dragon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-teu.png',
        numImg: '../../assets/08.png'
      },
      {
        cardImg: '../../assets/cards/energy/draw-energy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/drampa.png',
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
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
      {
        cardImg: '../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-g.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../assets/01.png'
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
        },,
      {
        "count": 3,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 5,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 5,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
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
        cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zapdos.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volkner.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/electropower.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../assets/11.png'
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 5,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
      {
        cardImg: '../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-g.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/03.png'
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
          "count": 2,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 4,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
      {
        cardImg: '../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-g.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Heatran GX",
          "number": "25",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
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
        cardImg: '../../assets/cards/2019-2020/mew.png',
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
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
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
        },,
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-melmateal-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-potion.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 5,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 5,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bills-analysis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 7,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
      {
        cardImg: '../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-g.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
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
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 4,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
      {
        cardImg: '../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-g.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ns-resolve.png',
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
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 8,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 6,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pheromosa.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bills-analysis.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 5,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 5,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/quagsire.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/wooper.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/poipole-eye.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
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
        "name": "Volcanion ♢",
        "number": "31",
        "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
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
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/uturn-board.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 8,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
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
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../assets/01.png'
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
        },,
      {
        "count": 3,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
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
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
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
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/01.png'
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
        },,
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cyrus-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 4,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
      {
        cardImg: '../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-g.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/raichu-alolan-raichu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/marshadow.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/volkner.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electropower.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electromagnetic-radar.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stadiumnav.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
        numImg: '../../assets/11.png'
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
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mars.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bellelba-brycen-man.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jessie-and-james.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/crushing-hammer.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/02.png'
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
        },,
      {
        cardImg: '../../assets/cards/energy/recycle-energy.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
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
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/palpad-swsh.png',
        numImg: '../../assets/01.png'
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
        },,
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ns-resolve.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 8,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 7,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
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
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../assets/01.png'
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
        },,
      {
        "count": 3,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 4,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
      {
        cardImg: '../../assets/cards/energy/unit-energy-lm.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/unit-energy-g.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/absol.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bellelba-brycen-man.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mars.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rosa.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jessie-and-james.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hapu.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/crushing-hammer.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 3,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        cardImg: '../../assets/cards/energy/recycle-energy.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/braixen-charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/magcargo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "SMP"
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
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/stealthy-hood.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 3,
          "name": "Giant Hearth",
          "number": "197",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/viridian-forest.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 8,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },,
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/volcanion.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/braixen-charizard-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/fire-crystal.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Fiery Flint",
          "number": "60",
          "set": "DRM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/03.png'
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
        },,
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-evil-abomanatino.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tyrogue.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/bills-analysis.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lusamine.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bellelba-brycen-man.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillies-poke-doll.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/lanas-fishing-rod.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
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
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 8,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 6,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/drampa.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Hustle Belt",
        "number": "134",
        "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 5,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 5,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/cryogonal.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
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
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 8,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 6,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
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
        cardImg: '../../assets/cards/2019-2020/oranguru-resource-manag.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
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
        cardImg: '../../assets/cards/2019-2020/tate-n-liza.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lt-surge.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mars.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/bellelba-brycen-man.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rosa.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jessie-and-james.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Pokémon Fan Club",
        "number": "133",
        "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/crushing-hammer.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/02.png'
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
        },,
      {
        cardImg: '../../assets/cards/energy/recycle-energy.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/phione.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 7,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 6,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
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
        cardImg: '../../assets/cards/2019-2020/adp-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/keldeo-gx.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma-hala.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/counter-gain.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-helmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/island-challenge-amulet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 6,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },,
      {
        "count": 4,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },,
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
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Mimikyu",
        "number": "58",
        "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ditto-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/spelltag.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2019-2020/shrineofpunush.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/recycle-energy.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/greens-exploration.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia-caitlyn.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/faba.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/pokegear.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/custom-catcher.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-spinner.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tag-switch.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/island-challenge-amulet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-ub.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-psychic.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/fairy-charm-dragon.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/power-plant.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/chaotic-swell.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-teu.png',
        numImg: '../../assets/09.png'
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
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/trevenant-dusknoir-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/blacephalon-psychic.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mimikyu-shadow-box.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mew.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Espurr",
          "number": "79",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/cynthia.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lillie.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rosa.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Switch",
          "number": "147",
          "set": "CES"
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
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-teu.png',
        numImg: '../../assets/07.png'
      },
      {
        cardImg: '../../assets/cards/energy/recycle-energy.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2019-2020/mewtwo-mew.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Dedenne GX",
          "number": "57",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/solgaleo-gx.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Reshiram & Charizard GX",
          "number": "20",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/charizard-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/deoxys-espeon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/mega-lopunny-jigglypuff-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/latios-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/naganadel-gx-dragon.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "SMP"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Welder",
          "number": "189",
          "set": "UNB"
        },
      {
        cardImg: '../../assets/cards/2019-2020/hapu.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/mallow-lana.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Cherish Ball",
          "number": "191",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2019-2020/tag-call.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/reset-stamp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/great-catcher.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2019-2020/lysandre-lab.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 8,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },,
      {
        "count": 3,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        cardImg: '../../assets/cards/energy/weakness-gaurd-energy.png',
        numImg: '../../assets/03.png'
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
