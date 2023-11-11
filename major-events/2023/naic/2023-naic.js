const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
   {
    firstName: 'Cyrus Davis',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/inteleon-vmax.png',
    sprite2: '../../../assets/sprites/urshifu-rapid-strike-gmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
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
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/korrinas-focus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-retrieval-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search-sv.png',
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
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 6,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/rapid-strike-energy.png',
        "count": 4,
      },
    ]
  },
   {
    firstName: 'Ian Robb',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/duraludon-gmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/duraludon-vmax-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-v-ss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/adventurers-discovery.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
   {
    firstName: 'Calvin Connor',
    flag: '../../../assets/flags/usa.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    sprite1: '../../../assets/sprites/blank.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/penny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 10,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        "count": 1,
      },
    ]
  },
   {
    firstName: 'Rowan Stavenow',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
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
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 10,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        "count": 1,
      },
    ]
  },
   {
    firstName: 'Victor Aung',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
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
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Michael Catron',
    flag: '../../../assets/flags/usa.png',
    sprite2: '../../../assets/sprites/umbreon-vmax.png',
    sprite1: '../../../assets/sprites/arceus.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/umbreon-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/slaking-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hawlucha.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 3,
      },
    ]
  },
   {
    firstName: 'Christian LaBella',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/duraludon-gmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/duraludon-vmax-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-v-ss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/adventurers-discovery.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/volo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/panic-mask.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/luminous-energy.png',
        "count": 1,
      },
    ]
  },
   {
    firstName: 'Justin Brothers',
    flag: '../../../assets/flags/usa.png',
    sprite2: '../../../assets/sprites/archeops.png',
    sprite1: '../../../assets/sprites/lugia.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 2,
      },
    ]
  },
   {
    firstName: 'Kian Amini',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/penny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 11,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        "count": 1,
      },
    ]
  },
   {
    firstName: 'Nate Doyle',
    flag: '../../../assets/flags/ireland.png',
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
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eiscue-fs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/feather-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cleansing-gloves.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
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
    firstName: 'David Hendrickson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/luxray.png',
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
        cardImg: '../../assets/cards/2022-2023/hawlucha.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Owen Rhoads',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/chien-pao.png',
    sprite2: '../../../assets/sprites/baxcalibur.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/baxcalibur.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/frigibax57.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
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
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
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
        cardImg: '../../assets/cards/2022-2023/superior-energy-retrieval.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 10,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Shoichi Saito',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokegear30-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/beach-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Stephen Kent',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/skwovet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cleansing-gloves.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
  },
   {
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/penny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 11,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        "count": 1,
      },
    ]
  },
   {
    firstName: 'William Azevedo',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/penny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 11,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        "count": 1,
      },
    ]
  },
   {
    firstName: 'Kristopher Kemp',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/aerodactyl.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/aerodactyl-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aerodactyl-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/skwovet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mawile.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hawlucha.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/box-of-disaster.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        "count": 6,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 3,
      },
    ]
  },
   {
    firstName: 'Pedro Pertusi',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/penny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 11,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        "count": 1,
      },
    ]
  },
   {
    firstName: 'Gabriel Smart',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 1,
      },
    ]
  },
   {
    firstName: 'Alex Hamilton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/skwovet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mawile.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cleansing-gloves.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
  },
   {
    firstName: 'Ithiel Arki',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
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
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bravery-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/beach-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Andrew Hedrick',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Jared Grimes',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/chien-pao.png',
    sprite2: '../../../assets/sprites/baxcalibur.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/baxcalibur.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/frigibax57.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
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
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/superior-energy-retrieval.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-retrieval-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 10,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Lucas Xing',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
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
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 10,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        "count": 1,
      },
    ]
  },
   {
    firstName: 'Brent Tonisson',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 12,,
        radiusCard: true
      }
    ]
  },
   {
    firstName: 'Justin Bokhari',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/penny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 11,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        "count": 1,
      },
    ]
  },
   {
    firstName: 'James Coyle',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/duraludon-gmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/duraludon-vmax-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-v-ss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hawlucha.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/adventurers-discovery.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arven.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        "count": 1,
      }
    ]
  },
   {
    firstName: 'Daniel Rao',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Alex LeBlanc',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/skwovet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cleansing-gloves.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
  },
   {
    firstName: 'Andrew Nisen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/skwovet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cleansing-gloves.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
  },
   {
    firstName: 'Caleb Rogerson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Anthony Perez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/chien-pao.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 11,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Ross Cawthon',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2022-2023/darkrai-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/darkra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/galarian-moltres-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dark-patch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/box-of-disaster.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
        "count": 14,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Charlie Lockyer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/duraludon-gmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/duraludon-vmax-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-v-ss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/adventurers-discovery.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
   {
    firstName: 'Jackson Rowley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Jeremy Gibson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/chien-pao.png',
    sprite2: '../../../assets/sprites/baxcalibur.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/baxcalibur.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/frigibax57.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/frigibax-chilly.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre-wave-splash.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
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
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
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
        cardImg: '../../assets/cards/2022-2023/superior-energy-retrieval.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 9,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Hunter Smith',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/duraludon-gmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/duraludon-vmax-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-v-ss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hawlucha.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
   {
    firstName: 'Caleb Fernelius',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/penny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 3,
      },
    ]
  },
   {
    firstName: 'Justin Young',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/giratina-origin.png',
    sprite2: '../../../assets/sprites/comfey.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
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
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cleansing-gloves.png',
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
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 2,
      },
    ]
  },
   {
    firstName: 'Piper Lepine',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/duraludon-gmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/duraludon-vmax-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-v-ss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hawlucha.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/adventurers-discovery.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/volo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
   {
    firstName: 'Jose Marzan',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/giratina-origin.png',
    sprite2: '../../../assets/sprites/comfey.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
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
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 3,
      },
    ]
  },
   {
    firstName: 'Nicholas Legg',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Connor Pedersen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 12,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Vance Kelley',
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
        cardImg: '../../assets/cards/2022-2023/mew-v-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/genesct-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meloetta.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eiscue-fs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cleansing-gloves.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
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
    firstName: 'James Thiel',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/skwovet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cleansing-gloves.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
  },
   {
    firstName: 'Caroline Ferino',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
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
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bravery-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/beach-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Daniel Sheikh',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia-origin.png',
    sprite2: '../../../assets/sprites/chien-pao.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/articuno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 10,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Miloslav Poslední',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/penny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Rahul Reddy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 11,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        "count": 1,
      },
    ]
  },
   {
    firstName: 'Lucas Thiele',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Natalie Millar',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 12,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Adam Hawkins',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/giratina-origin.png',
    sprite2: '../../../assets/sprites/comfey.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
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
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 4,
      },
    ]
  },
   {
    firstName: 'Vincent Owen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/goodra-hisui.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/panic-mask.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
  },
   {
    firstName: 'Dylan Lefavour',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/theraputic-energ.png',
        "count": 1,
      },
    ]
  },
   {
    firstName: 'Ray Chen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/aerodactyl.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/aerodactyl-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aerodactyl-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/klefki.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mawile.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/shauna.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/panic-mask.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        "count": 7,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
  },
   {
    firstName: 'Jeremy Gumila',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 11,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        "count": 1,
      },
    ]
  },
   {
    firstName: 'Aidan Khus',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aerodactyl-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aerodactyl-v.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/beach-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        "count": 1,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Kevin Nguyen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/chien-pao.png',
    sprite2: '../../../assets/sprites/baxcalibur.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/chien-pao-ex.png',
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
        cardImg: '../../assets/cards/2022-2023/baxcalibur.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/frigibax57.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
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
        cardImg: '../../assets/cards/2022-2023/superior-energy-retrieval.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 10,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Nicholas Moffitt',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
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
        cardImg: '../../assets/cards/2022-2023/hawlucha.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Joe Bates',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ss-urshifu-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 2,
      },
    ]
  },
   {
    firstName: 'Simone Fiorito',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/skwovet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cleansing-gloves.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
  },
   {
    firstName: 'Brian Kim',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 11,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        "count": 1,
      },
    ]
  },
   {
    firstName: 'Jamie Frankland',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
   {
    firstName: 'Alex Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite2: '../../../assets/sprites/flamigo.png',
    sprite1: '../../../assets/sprites/murkrow.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/murkrow.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flamigo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/wattrel.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gallade.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gallade-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ditto-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zinnia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rescue-carrier-crv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Bodhi Robinson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/duraludon-gmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/duraludon-vmax-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-v-ss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hawlucha.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/adventurers-discovery.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/volo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
   },
  {
    firstName: 'Nathan F',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/hawlucha.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/penny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
   },
  {
    firstName: 'Ethan Y',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/aerodactyl.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/aerodactyl-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aerodactyl-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/vulpix-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/vulpix-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/klefki.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 3,
      },
    ]
   },
  {
    firstName: 'João Requena',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/wyrdeer-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/luxray.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/theraputic-energ.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/luminous-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        "count": 1,
      },
    ]
   },
  {
    firstName: 'Drew S',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/giratina-origin.png',
    sprite2: '../../../assets/sprites/comfey.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
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
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hawlucha.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokegear30-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/beach-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 1,
      },
    ]
   },
  {
    firstName: 'Atomos B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/aerodactyl.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/aerodactyl-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aerodactyl-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/skwovet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hawlucha.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mawile.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/box-of-disaster.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        "count": 6,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 3,
      },
    ]
   },
  {
    firstName: 'Michael Davidson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
   },
  {
    firstName: 'Evan P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/giratina-origin.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/klefki.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/box-of-disaster.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
    ]
   },
]

let juniors = [
  {
    firstName: 'Drake Zhu',
    flag: '../../../assets/flags/new-zealand.png',
    sprite2: '../../../assets/sprites/regidrago.png',
    sprite1: '../../../assets/sprites/arceus.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/regidrago-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regidrago-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-vmax-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/giratina-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/noivern-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/garchomp-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gallade.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge-sv.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fire-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
   },
  {
    firstName: 'Prince Williams',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gallade.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia-mirage-step.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/luxray.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 6,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        "count": 4,
      },
    ]
   },
  {
    firstName: 'William S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/luxray.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zinnia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 10,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        "count": 2,
      },
    ]
   },
  {
    firstName: 'Victor P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cresselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
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
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-turo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rare-candy-sv.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 11,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/reversal-energy.png',
        "count": 1,
      },
    ]
   },
  {
    firstName: 'Omar C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/archeops.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal-ss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/squakabilly-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball-sv.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mesagoza.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
        "count": 1,
      },
    ]
   },
  {
    firstName: 'Dylan R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/iono.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
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
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/beach-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/artazon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
   },
  {
    firstName: 'Tyler L',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/beach-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
   },
  {
    firstName: 'Elijah L',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dragonite-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-ghetsis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/super-rod.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt-sv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/beach-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/jet-energy.png',
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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2023 NAIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2023 NAIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2023 NAIC";

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
    juniorList.appendChild(item_element);
  }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
