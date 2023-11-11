const masterList = document.querySelector('.masters-ol');

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
    firstName: 'Bruno Sermann',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/spiritomb.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2021-2022/spiritomb.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/jirachi-stellar-wish.png',
        "count": 3,
      },
      {
        "count": 1,
        "name": "Jynx",
        "number": "76",
        "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2021-2022/hoopa-evil-abomanation.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mewtwo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mew-bench-barrier.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marshadow-resetting-hole.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/oricorio-gx.png',
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
        cardImg: '../../assets/cards/2021-2022/bird-keeper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/ordinary-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cape-of-toughness.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/spikemuth.png',
        "count": 4,
      },
      {
        "count": 3,
        "name": "Dark Energy",
        "number": "dark",
        "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/hiding-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'João Pedro Medeiros Zambrano',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/adp.png',
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
        cardImg: '../../assets/cards/2021-2022/adp-gx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/galarian-moltres-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/galarian-zapdos-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cobalion-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/crobat-v.png',
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
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cherish-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/energy-switch-ssh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/great-catcher.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/viridian-forest.png',
        "count": 4,
      },
      {
        "count": 7,
        "name": "Dark Energy",
        "number": "dark",
        "set": "SSH"
      },
      {
        "count": 1,
          "name": "Water Energy",
          "number": "water",
          "set": "SSH"
      },
      {
        "count": 1,
          "name": "Metal Energy",
          "number": "metal",
          "set": "SSH"
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
    ]
  },
  {
    firstName: 'Angel Aranibar Huamaní',
    flag: '../../../assets/flags/peru.png',
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
        cardImg: '../../assets/cards/2021-2022/gengar-and-mimikyu-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cresselia.png',
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
    firstName: 'Aaron Friedman',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/adp.png',
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
        cardImg: '../../assets/cards/2021-2022/adp-gx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/galarian-moltres-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/galarian-zapdos-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cobalion-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/crobat-v.png',
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
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cherish-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/energy-switch-ssh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/great-catcher.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/viridian-forest.png',
        "count": 4,
      },
      {
        "count": 7,
        "name": "Dark Energy",
        "number": "dark",
        "set": "SSH"
      },
      {
        "count": 1,
          "name": "Water Energy",
          "number": "water",
          "set": "SSH"
      },
      {
        "count": 1,
          "name": "Metal Energy",
          "number": "metal",
          "set": "SSH"
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
    ]
  },
  {
    firstName: 'Isaac Troan',
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
        cardImg: '../../assets/cards/2021-2022/gengar-and-mimikyu-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cresselia.png',
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
        cardImg: '../../assets/cards/2021-2022/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-swsh.png',
        "count": 13,
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
    firstName: 'Dalton Acchetta',
    flag: '../../../assets/flags/brazil.png',
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
        cardImg: '../../assets/cards/2021-2022/gengar-and-mimikyu-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/trevenant-and-dusknoir-gx.png',
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
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 4,
      },
            {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-swsh.png',
        "count": 14,
      },
    ]
  },
  {
    firstName: 'Leonardo Martins',
    flag: '../../../assets/flags/portugal.png',
    sprite1: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2021-2022/weavile-gx.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2021-2022/malamar-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/malamar-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/umbreon-darkrai-tagteam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/sableye-tyranitar-tagteam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/eldegoss-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/guzzlord.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mew-bench-barrier.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marshadow-resetting-hole.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2021-2022/red-blue.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cynthia-caitlin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mallow-lana.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/phoebe.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/poke-communication.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/tag-call.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/chaotic-swell.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/viridian-forest.png',
        "count": 1,
      },
      {
        "count": 8,
        "name": "Dark Energy",
        "number": "dark",
        "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Christian Hasbani',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/poke-communication.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/path-to-the-peak.png',
        "count": 3,
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
    firstName: 'Peter Lo',
    flag: '../../../assets/flags/australia.png',
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
        cardImg: '../../assets/cards/2021-2022/gengar-and-mimikyu-gx.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2021-2022/sonia.png',
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
        cardImg: '../../assets/cards/2021-2022/escape-rope.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/pal-pad.png',
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
        "count": 14,
      },
    ]
  },
  {
    firstName: 'Hampus Eriksson',
    flag: '../../../assets/flags/sweden.png',
    sprite1: '../../../assets/sprites/excadrill.png',
    sprite2: '../../../assets/sprites/cinccino.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2021-2022/excadrill.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/drilbur.png',
        "count": 3,
      },
      {
        "count": 4,
          "name": "Cinccino",
          "number": "147",
          "set": "SSH"
      },
      {
        "count": 4,
        "name": "Minccino",
        "number": "145",
        "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2021-2022/jirachi-stellar-wish.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 1,
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2021-2022/giratina.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2019-2020/weezing-surrender.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mew-bench-barrier.png',
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
        "count": 2,
          "name": "Lt. Surge's Strategy",
          "number": "178",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/banned/jessie-james.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bird-keeper.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Crushing Hammer",
          "number": "159",
          "set": "SSH"
      },
            {
        cardImg: '../../assets/cards/2021-2022/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
        "count": 3,
      },
      {
        "count": 2,
          "name": "Chip-Chip Ice Axe",
          "number": "165",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/path-to-the-peak.png',
        "count": 3,
      },
      {
        "count": 3,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SSH"
      },
    ]
  },
  {
    firstName: 'Dan Hugar',
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
        cardImg: '../../assets/cards/2021-2022/gengar-and-mimikyu-gx.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2021-2022/marshadow-attack.png',
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
        cardImg: '../../assets/cards/2021-2022/phoebe.png',
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
        "count": 3,
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
        cardImg: '../../assets/cards/2021-2022/pal-pad.png',
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
        "count": 14,
      },
    ]
  },
  {
    firstName: 'Ting Chan',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/adp.png',
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
        cardImg: '../../assets/cards/2021-2022/adp-gx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/galarian-moltres-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/zacian-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/galarian-zapdos-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2019-2020/mawile-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/eldegoss-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/hoopa-evil-abomanation.png',
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
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/skyla.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        "count": 4,
        "name": "Metal Saucer",
        "number": "170",
        "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2021-2022/energy-switch-ssh.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cherish-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/great-catcher.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/viridian-forest.png',
        "count": 3,
      },
      {
        "count": 5,
          "name": "Metal Energy",
          "number": "metal",
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
          "name": "Water Energy",
          "number": "water",
          "set": "SSH"
      },
      {
        "count": 3,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
    ]
  },
  {
    firstName: 'Pascal Lohrer',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2021-2022/weavile-gx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/sneasel-water.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/umbreon-darkrai-tagteam.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/galarian-moltres-v.png',
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
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/sableye-tyranitar-tagteam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/hoopa-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/galarian-zapdos-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/heatmor.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marshadow-resetting-hole.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/guzma-hala.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/red-blue.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mallow-lana.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cynthia-caitlin.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2021-2022/poke-communication.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2021-2022/viridian-forest.png',
        "count": 3,
      },
      {
        "count": 9,
        "name": "Dark Energy",
        "number": "dark",
        "set": "SSH"
      },
      {
        "count": 2,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Pedro Eugenio Torres',
    flag: '../../../assets/flags/spain.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/galarian-moltres-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2019-2020/cinccino.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/minccino-tail-whip60.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/jirachi-stellar-wish.png',
        "count": 1,
      },
      {
        "count": 1,
        "name": "Galarian Zigzagoon",
        "number": "117",
        "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2021-2022/mewtwo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marshadow-resetting-hole.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mimikyu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bird-keeper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/phoebe.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/poke-communication.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
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
        "count": 4,
        "name": "Dark Energy",
        "number": "dark",
        "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/rapid-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Zyad Afiza (no show)',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
        cardImg: '../../assets/cards/2021-2022',
        "count": 4,
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - Players Cup IV";

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



const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
