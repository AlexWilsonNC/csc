const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Brandon Salazar',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus-therian.png',
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
        cardImg: '../../assets/cards/2014-2016/raichu.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pikachu-nuzzle.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/druddigon.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-drx.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 7,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pyroar.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/pyroar.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/litleo-xy.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/charizard-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/blacksmith.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/roller-skates.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fire.png',
        "count": 8,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Isaiah Williams',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-patch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Calvin Nordberg',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kyurem.png',
    sprite2: '../../../assets/sprites/deoxys.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/blend-wlmf.png',
        "count": 2,,
      },
    ]
  },
  {
    firstName: 'Adler Pierce',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/virizion.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/sigilyph-ltr.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/g-booster.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/plasma-ball.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyarrow-bridge.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 9,,
            },
            {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Oscar Morales',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pyroar.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Tristan Macek',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pyroar.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/pyroar.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/litleo-xy.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/charizard-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/blacksmith.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/roller-skates.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fire.png',
        "count": 8,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Henry Prior',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/dusknoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/flygon.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vibrava.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trapinch.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/accelgor.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shelmet-plb.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dusknoir.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dusclops.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/duskull.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Darrell Moreno',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/druddigon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-patch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Jon Bristow',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pyroar.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/pyroar.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/litleo-xy.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/charizard-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/blacksmith.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/roller-skates.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fire.png',
        "count": 8,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Mike Newey',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/deoxys.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Ryan Sabelhaus',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/deoxys.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-plasma.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-plasma-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-rainbow.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Brad Curcio',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pyroar.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/pyroar.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/litleo-xy.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/electrode.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/voltorb-burst.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/charizard-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/blacksmith.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fiery-torch.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fire.png',
        "count": 8,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Russell LaParre',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/dusknoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/flygon.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vibrava.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trapinch.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/accelgor.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shelmet-plb.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dusknoir.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dusclops.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/duskull.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ghetsis.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/dusknoir.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Christopher Nguyen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,,
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Ishaan Jagiasi',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/dusknoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/empoleon.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2010-2012/prinplup.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2010-2012/piplup.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dusknoir.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dusclops.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/duskull.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/miltank.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/exeggcute.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod-drv.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 6,,
      },
    ]
  },
  {
    firstName: 'Jeremiah Williams',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/darkrai.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bouffalant.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-patch.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/random-receiver.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 8,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Seth Hanslik',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pyroar.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/pyroar.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/litleo-xy.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/electrode.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/voltorb.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/druddigon.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/blacksmith.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pal-pad.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fire.png',
        "count": 8,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pyroar.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/pyroar.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/litleo-xy.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/charizard-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/electrode.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/voltorb-burst.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/blacksmith.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fire.png',
        "count": 8,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Andy Younger',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/virizion.png',
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
        cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/raichu.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/pikachu-nuzzle.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/g-booster.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyarrow-bridge.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 10,,
            },
            {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Jon-Luke Modory',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/virizion.png',
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
        cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/raichu.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/pikachu-nuzzle.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/g-booster.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyarrow-bridge.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 10,,
            },
            {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 1,,
            },
    ]
  },
  {
    firstName: 'Rachel Schmaus',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/raichu.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pikachu-nuzzle.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/druddigon.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-patch.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shadow-circle.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 3,,
      },
    ]
  },
  {
    firstName: 'Hatch Cunningham',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/raichu.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pikachu-nuzzle.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/druddigon.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/scramble-switch.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-patch.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 7,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 US Nats";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 US Nats";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 US Nats";

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
