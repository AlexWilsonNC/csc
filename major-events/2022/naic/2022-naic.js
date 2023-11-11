const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/pikachu-gmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/phoebe.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Isaiah Bradner',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Sander Wojcik',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/miltank.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/mewtwo-v-unvion-topleft.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mewtwo-v-unvion-topright.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mewtwo-v-unvion-bottomleft.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mewtwo-v-unvion-bottomright.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/miltank.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meowth-galarian.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pyukumuku.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flannery.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/team-yell-cheer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cook.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sidney.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crushing-hammer.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-parasoul.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/twin-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Brian Kim',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Noah Yoshida',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Yerco Valencia',
    flag: '../../../assets/flags/chile.png',
    sprite1: '../../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Steven Varesko',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Kaiwen Cabbabe',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 8,
      },
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Ryan Antonucci',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Michael Perez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Aidan Khus',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/pikachu-gmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/shauna.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Nick Flores',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nessa.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Justin Bokhari',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Harrison Dye',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Grant Manley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'James Gillespie',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Piper Lepine',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Tanner Hurley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'William Azevedo',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/palkia-origin.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'João Zambrano',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Adam Reinhardt',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/pikachu-gmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-desidueye-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-desidueye-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jonathan Luciano',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/inteleon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Bryan de Vries',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nessa.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Ethan Perez-Dormitzer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vikavolt.png',
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
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/vikavolt-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zapdos-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Dan Irish',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nessa.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Dean Nezam',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/miltank.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Michael Laundrie',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/malamar-vmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/malamar-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/malamar-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/jolteon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/inteleon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jake Santiago',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Spencer Perez-Dormitzer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vikavolt.png',
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
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/vikavolt-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zapdos-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Tyler Matthews',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/ditto.png',
    sprite2: '../../../assets/sprites/palkia-origin.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/vikavolt-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ditto-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eiscue.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Devin Ardissono',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Scotty Chesser',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Cyrus McCane',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/malamar-vmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/malamar-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/malamar-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/jolteon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Nathaniel Kaplan',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Aaron Tarbell',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blissey.png',
    sprite2: '../../../assets/sprites/miltank.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/blissey-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/miltank.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tornadus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zinnia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hyper-potion.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/team-yell-towel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/lucky-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'John Wanggaard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/inteleon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Franco Takahashi',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Calvin Connor',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Dominic Balagna',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/inteleon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Diego Varea',
    flag: '../../../assets/flags/peru.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/inteleon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andrew Martin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nessa.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      }
    ]
  },
  {
    firstName: 'Brandon Salazar',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Ian Robb',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/beedrill.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/beedrill.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sss-mustard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/grass-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Adam Hawkins',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/miltank.png',
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
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cinccino.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/minccino.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/miltank.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eldegoss-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/blissey-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/altaria.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/swablu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gorebyss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/clamperl.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rayquaza.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roseannes-backup.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/team-yell-cheer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flannery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bruno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rescue-carrier.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/galar-mine.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Matthew Browning',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/inteleon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Zach Lesage',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: "Jimmy O'Brien",
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/palkia-origin.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ethan Hegyi',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/beedrill.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/beedrill.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sss-mustard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/grass-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Natalie Miller',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 8,
      },
    ]
  },
  {
    firstName: 'Andrew Hendrick',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
            {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Andrew Wisniewsky',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blissey.png',
    sprite2: '../../../assets/sprites/miltank.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/blissey-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/miltank.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tornadus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zinnia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hyper-potion.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/team-yell-towel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lucky-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Noah Sakadjian',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Sawyer Melban',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/pikachu-gmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/malamar-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/malamar-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/phoebe.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Dillon DiAngelo',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Jeremy Castro',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/regigigas.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/regigigas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-evs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-astr.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regidrago.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regirock.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/registeel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cynthias-ambition.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Seth Wagner',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'James Hart',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Zach Laska',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Samuel Weyers',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
    sprite2: '../../../assets/sprites/genesect.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jake Gearhart',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Tanner Caplinger',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 1,
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Rune Heiremans',
    flag: '../../../assets/flags/belgium.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Regan Retzloff',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/beedrill.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/beedrill.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sss-mustard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/grass-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: ' Justin Templer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crystal-cave.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/old-cemetary.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'João Penteado',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/raikou.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Michael Davidson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crystal-cave.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/old-cemetary.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Sebastian Enriquez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Cameron Ross',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blissey.png',
    sprite2: '../../../assets/sprites/miltank.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/blissey-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/miltank.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tornadus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zinnia.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hyper-potion.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokegear.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lucky-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kaya Lichtleitner',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nessa.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Nathan Osterkatz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nessa.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Luka Levain',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Edison Chein',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/calyrex-ice-rider.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Remi Lorenz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mew-vmax.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/fusion-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Spencer Pavelski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Zahid Munoz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Theodore Esten',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/moltres-galar.png',
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
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hoopa.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zeraora.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cynthias-ambition.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-retrieval.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/supereffective-glasses.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Henrique Guarita',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/regigigas.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/regigigas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-evs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regidrago.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regirock.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/registeel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bruno.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zinnia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-loto.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stormy-mountain.png',
        "count": 3,
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 2,
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2022 NAIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2022 NAIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2022 NAIC";

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
