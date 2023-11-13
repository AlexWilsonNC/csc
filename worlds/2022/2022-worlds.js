const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Ondřej Škubal',
    flag: '../../assets/flags/czech-republic.png',
    record: '10-0-2',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/pikachu-gmax.png',  
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
        cardImg: '../../assets/cards/2022-2023/hisuian-decidueye-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-desidueye-v.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Daichi Shimada',
    flag: '../../assets/flags/japan.png',
    record: '10-1-1',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/pikachu-gmax.png',  
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-decidueye-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-desidueye-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/jolteon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee-ability.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Ryota Ishiyama',
    flag: '../../assets/flags/japan.png',
    record: '9-2-0',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/pikachu-gmax.png',  
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-decidueye-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-desidueye-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres-v.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
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
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
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
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'James Cox',
    flag: '../../assets/flags/australia.png',
    record: '8-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/inteleon.png',  
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
        cardImg: '../../assets/cards/2022-2023/crabonminal-v.png',
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
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
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
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
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
    firstName: 'Andrew Estrada',
    flag: '../../assets/flags/canada.png',
    record: '7-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/inteleon.png',  
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
        cardImg: '../../assets/cards/2022-2023/leon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
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
    firstName: 'André Chiasson',
    flag: '../../assets/flags/canada.png',
    record: '7-2-1',
    sprite1: '../../assets/sprites/mew-vmax.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 4,
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
    firstName: 'Kaiwen Cabbabe',
    flag: '../../assets/flags/australia.png',
    record: '7-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/inteleon.png',  
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
        cardImg: '../../assets/cards/2022-2023/crabonminal-v.png',
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
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
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
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
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
    firstName: 'Otavio Gouveia',
    flag: '../../assets/flags/brazil.png',
    record: '7-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/inteleon.png',  
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
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
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
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
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
    firstName: 'Calvin Connor',
    flag: '../../assets/flags/usa.png',
    record: '6-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/inteleon.png',  
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
        cardImg: '../../assets/cards/2022-2023/leon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
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
    firstName: 'Toyoaki Fujita',
    flag: '../../assets/flags/japan.png',
    record: '6-2-0',
    sprite1: '../../assets/sprites/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
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
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
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
        cardImg: '../../assets/cards/2022-2023/old-cemetary.png',
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
        cardImg: '../../assets/cards/energy/horror-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Grant Manley',
    flag: '../../assets/flags/usa.png',
    record: '6-2-0',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/calyrex-ice-rider.png',  
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
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
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
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/empoleon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pyukumuku.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
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
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 8,
      },
    ]
  },
  {
    firstName: 'Lucas Calzà',
    flag: '../../assets/flags/italy.png',
    record: '6-2-0',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/inteleon.png',  
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
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
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
        cardImg: '../../assets/cards/2022-2023/dyna-tree-hill.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Adam Hawkins',
    flag: '../../assets/flags/uk.png',
    record: '6-2-0',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/aggron-vmax.png',  
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aggron-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aggron-v.png',
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
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
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
        cardImg: '../../assets/cards/new-energy/metal-energy-brs.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Miloslav Poslední',
    flag: '../../assets/flags/czech-republic.png',
    record: '5-1-2',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/jolteon.png',  
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
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
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/empoleon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/shopping-center.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../assets/flags/usa.png',
    record: '5-1-2',
    sprite1: '../../assets/sprites/charizard-shiny.png',
    sprite2: '../../assets/sprites/inteleon.png',  
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
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
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
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
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
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rescue-carrier.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-go.png',
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
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/magma-basin.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Isaiah Bradner',
    flag: '../../assets/flags/usa.png',
    record: '5-1-2',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/inteleon.png',  
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
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
        cardImg: '../../assets/cards/2022-2023/marnie.png',
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
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
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
    firstName: 'Pablo Meza',
    flag: '../../assets/flags/mexico.png',
    record: '5-1-2',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/regigigas.png',  
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
        cardImg: '../../assets/cards/2022-2023/regigigas.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regidrago.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-evs.png',
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
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cynthias-ambition.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 3,
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 4,
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
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Cristian Sarnataro',
    flag: '../../assets/flags/italy.png',
    record: '5-1-2',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Haru Nishikawa',
    flag: '../../assets/flags/japan.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
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
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
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
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/rare-candy-go.png',
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
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Asaki Hasegawa',
    flag: '../../assets/flags/japan.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
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
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
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
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
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
    firstName: 'Tomoki Masuda',
    flag: '../../assets/flags/japan.png',
    record: '5-2-1',
    sprite2: '../../assets/sprites/regigigas.png',  
    sprite1: '../../assets/sprites/blank.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Caleb Patton',
    flag: '../../assets/flags/usa.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/mew-vmax.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-vmax.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
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
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
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
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
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
    firstName: 'Takuya Baba',
    flag: '../../assets/flags/japan.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Mehdi Hafi',
    flag: '../../assets/flags/france.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/jolteon.png',  
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
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
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/empoleon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/shopping-center.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Keito Yoshihara',
    flag: '../../assets/flags/japan.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../assets/flags/usa.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/calyrex-ice-rider.png',  
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
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
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
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/empoleon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pyukumuku.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
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
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 8,
      },
    ]
  },
  {
    firstName: 'Owyn Kamerman',
    flag: '../../assets/flags/netherlands.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/pikachu-gmax.png',  
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/hisuian-decidueye-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-desidueye-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/jolteon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee-ability.png',
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
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
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
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Gabriel Smart',
    flag: '../../assets/flags/usa.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/mew-vmax.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
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
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
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
    firstName: 'Steven Mao',
    flag: '../../assets/flags/germany.png',
    record: '5-2-1',
    sprite2: '../../assets/sprites/inteleon.png',  
    sprite1: '../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/avery.png',
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
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
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
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Kenki Tago',
    flag: '../../assets/flags/japan.png',
    record: '5-2-1',
    sprite2: '../../assets/sprites/inteleon.png',  
    sprite1: '../../assets/sprites/palkia-origin.png',
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
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
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
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-go.png',
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
        "count": 8,
      },
    ]
  },
  {
    firstName: 'Christian LaBella',
    flag: '../../assets/flags/canada.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/duraludon-gmax.png',  
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/karens-conviction.png',
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
        cardImg: '../../assets/cards/2022-2023/pokegear.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hyper-potion.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crystal-cave.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tim Bartels',
    flag: '../../assets/flags/germany.png',
    record: '5-2-1',
    sprite2: '../../assets/sprites/moltres-galar.png',  
    sprite1: '../../assets/sprites/vikavolt.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'João Zambrano',
    flag: '../../assets/flags/brazil.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/inteleon.png',  
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../assets/flags/spain.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/jolteon.png',  
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
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
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/empoleon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/shopping-center.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Tseng Hsiang',
    flag: '../../assets/flags/taiwan.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Piper Lepine',
    flag: '../../assets/flags/usa.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/charizard-shiny.png',  
    sprite2: '../../assets/sprites/inteleon.png',
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
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zapdos-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/galarian-moltres-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/magma-basin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Caleb Gedemer',
    flag: '../../assets/flags/usa.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/calyrex-ice-rider.png',  
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
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
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
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/empoleon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pyukumuku.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
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
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 8,
      },
    ]
  },
  {
    firstName: 'Brent Tonisson',
    flag: '../../assets/flags/australia.png',
    record: '5-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/inteleon.png',  
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
        cardImg: '../../assets/cards/2022-2023/crabonminal-v.png',
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
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
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
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
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
        cardImg: '../../assets/cards/2022-2023/training-court.png',
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
    firstName: 'Ryuki Okada',
    flag: '../../assets/flags/japan.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Boulay Antoine',
    flag: '../../assets/flags/japan.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/arceus.png',  
    sprite2: '../../assets/sprites/lucario.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lucario-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lucario-v-asr.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lucario-v-cpa.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/hisuian-desidueye-v.png',
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
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tomoya Tanaka',
    flag: '../../assets/flags/japan.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Fabien Pujol',
    flag: '../../assets/flags/france.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/palkia-origin.png',
    sprite2: '../../assets/sprites/jolteon.png', 
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
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
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/empoleon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/shopping-center.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Pedro Pertusi',
    flag: '../../assets/flags/brazil.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'JW Kriewall',
    flag: '../../assets/flags/usa.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/arceus.png',
    sprite2: '../../assets/sprites/pikachu-gmax.png',  
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-decidueye-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hisuian-desidueye-v.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
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
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Logan Madden',
    flag: '../../assets/flags/uk.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Angus Johnson',
    twitter: 'https://twitter.com/Flippy_Fan',
    flag: '../../assets/flags/australia.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
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
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
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
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
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
    firstName: 'Shoichi Saito',
    flag: '../../assets/flags/japan.png',
    record: '4-1-3',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Rui Sato',
    flag: '../../assets/flags/japan.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Rowan Stavenow',
    flag: '../../assets/flags/canada.png',
    record: '5-3-0',
    sprite1: '../../assets/sprites/arceus.png',  
    sprite2: '../../assets/sprites/pikachu-gmax.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tsai Yung-Ta',
    flag: '../../assets/flags/taiwan.png',
    record: '4-2-2',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Shinnosuke Sato',
    flag: '../../assets/flags/japan.png',
    record: '4-2-2',
    sprite1: '../../assets/sprites/mewtwo.png',  
    sprite2: '../../assets/sprites/miltank.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/perrserker-stealthy-claws.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meowth-galarian.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flannery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-center-lady.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokegear.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crushing-hammer.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/metal-energy-brs.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Dan Hugar',
    flag: '../../assets/flags/usa.png',
    record: '4-2-2',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/calyrex-ice-rider.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tu Cheng-Tai',
    flag: '../../assets/flags/taiwan.png',
    record: '4-2-2',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Cobi Kawasaki',
    flag: '../../assets/flags/usa.png',
    record: '4-2-2',
    sprite1: '../../assets/sprites/charizard-shiny.png',
    sprite2: '../../assets/sprites/inteleon.png',  
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
        cardImg: '../../assets/cards/2022-2023/radiant-charizard.png',
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
        cardImg: '../../assets/cards/2022-2023/zapdos-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hoopa.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zeraora.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rowlet.png',
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
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/leon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rescue-carrier.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-go.png',
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
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/magma-basin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Takuma Tominaga',
    flag: '../../assets/flags/japan.png',
    record: '4-2-2',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Fabrizio Silva',
    flag: '../../assets/flags/peru.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/mew-vmax.png',  
    sprite2: '../../assets/sprites/genesect.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Christian Fontenot',
    flag: '../../assets/flags/denmark.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/calyrex-ice-rider.png',  
    sprite2: '../../assets/sprites/inteleon.png',
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
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 1,
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
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Manuel Jorach',
    flag: '../../assets/flags/austria.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/sprites/stonjourner.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kaisei Takata',
    flag: '../../assets/flags/japan.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/calyrex-ice-rider.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tanner Hurley',
    flag: '../../assets/flags/usa.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Haruto Masubuchi',
    flag: '../../assets/flags/japan.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Takuya Hasegawa',
    flag: '../../assets/flags/japan.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/arceus.png',  
    sprite2: '../../assets/sprites/inteleon.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Syahmi Razak',
    flag: '../../assets/flags/liberia-malaysia.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Luca Clavadetscher',
    flag: '../../assets/flags/switzerland.png',
    record: '4-3-1',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Liam Halliburton',
    flag: '../../assets/flags/usa.png',
    record: '10-1-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crabonminal-v.png',
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
        cardImg: '../../assets/cards/2022-2023/marnie.png',
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
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
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
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
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
    firstName: 'Sebastian Lashmet',
    flag: '../../assets/flags/usa.png',
    record: '9-2-1',
    sprite2: '../../assets/sprites/inteleon.png',  
    sprite1: '../../assets/sprites/urshifu-rapid-strike-gmax.png',
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
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
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
        cardImg: '../../assets/cards/2022-2023/octillery.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/remoraid.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
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
        cardImg: '../../assets/cards/2022-2023/rescue-carrier.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Soma Yoshimura',
    flag: '../../assets/flags/japan.png',
    record: '8-1-2',
    sprite1: '../../assets/sprites/arceus.png',  
    sprite2: '../../assets/sprites/mewtwo.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
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
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/adventurers-discovery.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hyper-potion.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
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
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'João Penteado',
    flag: '../../assets/flags/brazil.png',
    record: '8-3-0',
    sprite1: '../../assets/sprites/arceus.png',  
    sprite2: '../../assets/sprites/beedrill.png',
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
        cardImg: '../../assets/cards/2022-2023/avery.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Owen Dalgard',
    flag: '../../assets/flags/usa.png',
    record: '7-1-2',
    sprite1: '../../assets/sprites/mew-vmax.png',  
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
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
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
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
    firstName: 'Justin Newdorf',
    flag: '../../assets/flags/usa.png',
    record: '7-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
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
        cardImg: '../../assets/cards/2022-2023/marnie.png',
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
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
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
    firstName: 'Roberto Costanzo',
    flag: '../../assets/flags/france.png',
    record: '7-2-1',
    sprite1: '../../assets/sprites/arceus.png',  
    sprite2: '../../assets/sprites/lucario.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lucario-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lucario-v-asr.png',
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
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/lightning-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Daniel Magda',
    flag: '../../assets/flags/czech-republic.png',
    record: '7-3-0',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/jolteon.png',
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
        cardImg: '../../assets/cards/2022-2023/palkia-vmax-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/palkia-v-origin-forme.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/jolteon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starmie-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/empoleon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
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
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/shopping-center.png',
        "count": 3,
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
    firstName: 'Rikuto Ohashi',
    flag: '../../assets/flags/japan.png',
    record: '10-0-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/calyrex-ice-rider.png',
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
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ice-rider-calyrex-v.png',
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
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
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
        cardImg: '../../assets/cards/2022-2023/leon.png',
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
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-go.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 8,
      },
    ]
  },
  {
    firstName: 'Tristan Tse',
    flag: '../../assets/flags/canada.png',
    record: '8-1-2',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
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
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-go.png',
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
    firstName: 'Chung Yen-Tso',
    flag: '../../assets/flags/taiwan.png',
    record: '7-1-2',
    sprite1: '../../assets/sprites/arceus.png',  
    sprite2: '../../assets/sprites/inteleon.png',
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
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flannery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
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
        cardImg: '../../assets/cards/2022-2023/raihan.png',
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
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
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
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Prince Williams',
    flag: '../../assets/flags/usa.png',
    record: '7-2-1',
    sprite1: '../../assets/sprites/arceus.png',  
    sprite2: '../../assets/sprites/mewtwo.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
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
        cardImg: '../../assets/cards/2022-2023/adventurers-discovery.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hyper-potion.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-jammer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Misha Shapkin',
    flag: '../../assets/flags/uk.png',
    record: '6-2-1',
    sprite1: '../../assets/sprites/mew-vmax.png',  
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
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
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
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
    firstName: 'Marcelo Rubio Turra',
    flag: '../../assets/flags/brazil.png',
    record: '6-2-1',
    sprite1: '../../assets/sprites/mew-vmax.png',  
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
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
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
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
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
        cardImg: '../../assets/cards/2022-2023/old-cemetary.png',
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
    firstName: 'Hatsuto Kogawa',
    flag: '../../assets/flags/japan.png',
    record: '6-2-1',
    sprite1: '../../assets/sprites/blank.png',  
    sprite2: '../../assets/sprites/regigigas.png',
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
        cardImg: '../../assets/cards/2022-2023/regigigas.png',
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
        cardImg: '../../assets/cards/2022-2023/regidrago-attacl.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-pogo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bruno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-loto.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stormy-mountain.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/fire-energy-brs.png',
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
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Kuto Kawamoto',
    flag: '../../assets/flags/japan.png',
    record: '6-2-1',
    sprite1: '../../assets/sprites/palkia-origin.png',  
    sprite2: '../../assets/sprites/inteleon.png',
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
        cardImg: '../../assets/cards/2022-2023/marnie.png',
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
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
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
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-go.png',
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
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
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

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " " + " - 2022 Worlds";
                // document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2022 Worlds";
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
                document.querySelector('.playerName').innerHTML = item.firstName + " " + " - 2022 Worlds";
                // document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2022 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " " + " - 2022 Worlds";
                    // document.querySelector('.playerName').innerHTML = item.firstName + " " + "(" + item.record + ")" + " - 2022 Worlds";

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
