const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Andrew Estrada',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/virizion.png',
    sprite2: '../../assets/sprites/genesect.png',
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
        cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
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
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/g-booster.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyarrow-bridge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Igor Costa',
    flag: '../../assets/flags/portugal.png',
    sprite1: '../../assets/sprites/virizion.png',
    sprite2: '../../assets/sprites/genesect.png',
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
        cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex-nxd.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/drifblim.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/drifloon-beat.png',
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
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/g-booster.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyarrow-bridge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Michikazu Tsuda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/kangaskhan.png',
    sprite2: '../../assets/sprites/aromatisse.png',
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
        cardImg: '../../assets/cards/2014-2016/aromatisse.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/spritzee-sweet-scent.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/m-kangaskhan-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kangaskhan-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerneas-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerneas.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/suicune.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bianca.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/heavy-ball-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fairy-garden.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fairy.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-rainbow.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Paulo Silva',
    flag: '../../assets/flags/portugal.png',
    sprite1: '../../assets/sprites/virizion.png',
    sprite2: '../../assets/sprites/genesect.png',
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
        cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/drifblim.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/drifloon-beat.png',
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
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/g-booster.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyarrow-bridge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Tomoya Watanabe',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/virizion.png',
    sprite2: '../../assets/sprites/genesect.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Chase Moloney',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-tool-drop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sawk.png',
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
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/random-receiver.png',
        "count": 1,
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Vincent Azzolin',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/deoxys.png',
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
        cardImg: '../../assets/cards/2014-2016/lugia-ex-plasma.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/roller-skates.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-plasma-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Goncalo Pereira',
    flag: '../../assets/flags/portugal.png',
    sprite1: '../../assets/sprites/virizion.png',
    sprite2: '../../assets/sprites/genesect.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
        cardImg: '../../assets/cards/2014-2016/blastoise.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/wartotle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/squirtle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/black-kyurem-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/black-kyurem.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/electrode.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/voltorb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/superior-energy-retreival.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/heavy-ball-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Stian Nilsson',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/yveltal.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Mia Violet',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yveltal.png',
    sprite2: '../../assets/sprites/dusknoir.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dusknoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dusclops.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/duskull.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 9,
      }
    ]
  },
  {
    firstName: 'Haedon Jeong',
    flag: '../../assets/flags/korea.png',
    sprite1: '../../assets/sprites/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-tool-drop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/dark-patch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/random-receiver.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        "count": 1,
      },      
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
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
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Ryan Moorhouse',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-tool-drop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
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
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/random-receiver.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        "count": 1,
      },  
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },    
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Tristan Wagner',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/virizion.png',
    sprite2: '../../assets/sprites/genesect.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Brandon Cantu',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../assets/sprites/blastoise.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/raichu.png',
    sprite2: '../../assets/sprites/landorus-therian.png',
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
        cardImg: '../../assets/cards/2014-2016/raichu.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pikachu-nuzzle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/palkia-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/drifblim-derail.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/drifloon-creepy-wind.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/electrode.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/voltorb-burst.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Isaac Salazar',
    flag: '../../assets/flags/chile.png',
    sprite1: '../../assets/sprites/yveltal.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Matthieu Cornillon',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/virizion.png',
    sprite2: '../../assets/sprites/genesect.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-pound.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-pile-up.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bouffalant.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/scramble-switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-patch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 1,
      }, 
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },    
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hard-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Fabio Lona de Danielli',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
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
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },    
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
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
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        "count": 1,
      },   
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
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
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Edward Kuang',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/yveltal.png',
    sprite2: '../../assets/sprites/darkrai.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Christopher Schemanske',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
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
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },    
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2014-2016/roller-skates.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,
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
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Christopher Venier',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/virizion.png',
    sprite2: '../../assets/sprites/genesect.png',
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
        cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
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
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/g-booster.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyarrow-bridge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Kaiwen Cabbabe',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
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
        cardImg: '../../assets/cards/2014-2016/sawk.png',
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
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Sam Chen',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/deoxys.png',
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
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-plasma-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/roller-skates.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,
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
        cardImg: '../../assets/cards/energy/blend-wlmf.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Israel Sosa',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yveltal.png',
    sprite2: '../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 9,
      }
    ]
  },
  {
    firstName: 'Trevore Read',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/yveltal.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Marcelo Colque',
    flag: '../../assets/flags/chile.png',
    sprite1: '../../assets/sprites/yveltal.png',
    sprite2: '../../assets/sprites/garbodor.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Oscar Knowles',
    flag: '../../assets/flags/sweden.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/dusknoir.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Clifton Goh',
    flag: '../../assets/flags/singapore.png',
    sprite1: '../../assets/sprites/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
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
        cardImg: '../../assets/cards/2014-2016/sawk.png',
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
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Adler Pierce',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/virizion.png',
    sprite2: '../../assets/sprites/genesect.png',
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
        cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/g-booster.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-switch-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-plasma-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyarrow-bridge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Jordan Palmer',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
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
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/latias-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
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
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bianca.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-rainbow.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        "count": 4,
      },
    ]
  }
]

let seniors = [
  {
    firstName: 'Trent Orndorff',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/accelgor.png',
    sprite2: '../../assets/sprites/trevenant.png',
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
        cardImg: '../../assets/cards/2014-2016/accelgor.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shelmet-plb.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trevenant.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/phantump-astonish.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dusknoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dusclops.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/duskull.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mew-ex-ltr.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/evosoda.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alex Croxton',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/keldeo-resolute.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
        cardImg: '../../assets/cards/2014-2016/blastoise.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/wartotle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/squirtle.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/black-kyurem-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/electrode.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/voltorb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/superior-energy-retreival.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-lightning.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Grant Manley',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/landorus-therian.png',
    sprite2: '../../assets/sprites/toxicroak.png',
    list: '../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/toxicroak-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/reshiram.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/druddigon.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/random-receiver.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-rainbow.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Calvin Connor',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
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
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
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
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
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
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher-flip.png',
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
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Cote Strike',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/deoxys.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ishaan Jagiasi',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/dusknoir.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jeffrey Cheng',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/pyroar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Xander Pero',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/virizion.png',
    sprite2: '../../assets/sprites/genesect.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  }
]

let juniors = [
  {
    firstName: 'Haruto Kobayashi',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/kyurem.png',
    sprite2: '../../assets/sprites/deoxys.png',
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
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/latias-ex.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
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
        cardImg: '../../assets/cards/2014-2016/scramble-switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-plasma-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tropical-beach-2012.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-rainbow.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/blend-wlmf.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Takashi Onugi',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/yveltal.png',
    sprite2: '../../assets/sprites/garbodor.png  ',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bianca.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-patch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/hard-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 1,
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
    firstName: 'Hitoshi Omura',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/aromatisse.png',
    sprite2: '../../assets/sprites/deoxys.png',
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
        cardImg: '../../assets/cards/2014-2016/aromatisse.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/spritzee-sweet-scent.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/thundurus-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/giratina-ex-shred.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/kyurem.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/scoop-up-cyclone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/tool-scrapper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress-machine.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fairy-garden.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-rainbow.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Yui Kaizaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-drx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2014-2016/bouffalant.png',
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
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shauna.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/scramble-switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dark-patch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope-bw.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/energy/dce-2015.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Rafael Lazari',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Brady Guy',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yveltal.png',
    sprite2: '../../assets/sprites/raichu.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/raichu.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pikachu-nuzzle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sableye-junk-hunt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-juniper.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bicycle.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball-bw.png',
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
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Mizuki Yanagida',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yugo Sato',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Worlds";

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

          // pokeCard.onclick = function() {
          //   document.querySelector('.pok-card-small').style.width = '500px';
          // }

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
