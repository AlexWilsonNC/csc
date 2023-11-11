const masterList = document.querySelector('.masters-ol');
const bossList = document.querySelector('.boss-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Alex Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/urshifu-rapid-strike-gmax.png',
    sprite2: '../../../assets/sprites/inteleon.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2021-2022/rs-urshifu-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/rs-urshifu-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/inteleon-quick-shooting.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/drizzile.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/jirachi-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/passimian-rs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mew-bench-barrier.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/poke-communication.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/karate-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/tower-of-waters.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/calyrex-shadow-rider.png',
    sprite2: '../../../assets/sprites/alcremie-vmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2021-2022/calyrex-vmax-shadow-rider.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/calyrex-v-shadow-rider.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/alcramie-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/alcramie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marshadow-resetting-hole.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marshadow-attack.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/gengar-and-mimikyu-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/trevenant-and-dusknoir-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/fog-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/poke-communication.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-swsh.png',
        "count": 13,
      },
    ]
  },
  {
    firstName: 'Natalie Millar',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/urshifu-rapid-strike-gmax.png',
    sprite2: '../../../assets/sprites/moltres-galar.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2021-2022/rs-urshifu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/rs-urshifu-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/inteleon-quick-shooting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/drizzile.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/galarian-moltres-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cobalion-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/poke-communication.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/energy-spinner.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/viridian-forest.png',
        "count": 2,
      },
      {
        "count": 6,
        "name": "Dark Energy",
        "number": "dark",
        "set": "SSH"
      },
      {
        "count": 1,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Diego Cassiraga',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/calyrex-shadow-rider.png',
    sprite2: '../../../assets/sprites/alcremie-vmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2021-2022/calyrex-vmax-shadow-rider.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/calyrex-v-shadow-rider.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/alcramie-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/alcramie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marshadow-resetting-hole.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/gengar-and-mimikyu-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/solgaleo-lunala-tagteam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/fog-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/ordinary-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-swsh.png',
        "count": 13,
      },
    ]
  },
  {
    firstName: 'Henry Brand',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/calyrex-ice-rider.png',
    sprite2: '../../../assets/sprites/inteleon.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2021-2022/calyrex-vmax-ice-rider.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/ice-rider-calyrex-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/inteleon-quick-shooting.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/drizzile.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/articuno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cobalion-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mew-bench-barrier.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/melony.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/poke-communication.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/scoop-up-net.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 2,
      },
      {
        "count": 7,
          "name": "Water Energy",
          "number": "water",
          "set": "SSH"
      },
    ]
  },
  {
    firstName: 'Zach Lesage',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/calyrex-ice-rider.png',
    sprite2: '../../../assets/sprites/inteleon.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2021-2022/calyrex-vmax-ice-rider.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/ice-rider-calyrex-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/drizzile.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/melony.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/leon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/great-catcher.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/scoop-up-net.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/path-to-the-peak.png',
        "count": 4,
      },
      {
        "count": 8,
          "name": "Water Energy",
          "number": "water",
          "set": "SSH"
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/victini-vmax.png',
    sprite2: '../../../assets/sprites/moltres-galar.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2021-2022/victini-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/victini-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/galarian-moltres-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/crobat-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/ditto-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/galarian-zapdos-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/eldegoss-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marshadow-resetting-hole.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/welder.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/poke-communication.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/energy-switch-ssh.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/viridian-forest.png',
        "count": 3,
      },
      {
        "count": 7,
          "name": "Fire Energy",
          "number": "fire",
          "set": "SSH"
      },
      {
        "count": 4,
        "name": "Dark Energy",
        "number": "dark",
        "set": "SSH"
      },
      {
        "count": 2,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SSH"
      },
    ]
  },
  {
    firstName: 'Robin Schulz',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
        cardImg: '../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/weavile-gx.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/sneasel-water.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/galarian-moltres-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/silvally-gx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/type-null.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/umbreon-darkrai-tagteam.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/greninja-zoroark-tagteam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/sableye-tyranitar-tagteam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mew-bench-barrier.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/red-blue.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mallow-lana.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/guzma-hala.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/poke-communication.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/tag-call.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/great-catcher.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/viridian-forest.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-swsh.png',
        "count": 10,
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
]

let boss = [
  {
    firstName: 'Tsuguyoshi Yamato',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/calyrex-shadow-rider.png',
    sprite2: '../../../assets/sprites/alcremie-vmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2021-2022/calyrex-vmax-shadow-rider.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/calyrex-v-shadow-rider.png',
        "count": 4,
      },
      {
        cardName: 'Alcramie VMAX',
        cardImg: '../../assets/cards/2021-2022/alcramie-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/alcramie-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marshadow-resetting-hole.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/gengar-and-mimikyu-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/trevenant-and-dusknoir-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/erikas-hospitality.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/fog-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/poke-communication.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-swsh.png',
        "count": 13,
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - PC Invitational";

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

// boss
function displayList2(array = []) {
  bossList.innerHTML = '';

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
                  document.querySelector('.playerName').innerHTML = item.firstName + " - PC Invitational";
      
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
      }
    })
  }

  bossList.appendChild(item_element);
}
}

const modal = document.querySelector('.modal');
const switcher = document.querySelector('.modal-switcher');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(boss);