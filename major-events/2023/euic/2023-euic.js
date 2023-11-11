const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Alex Schemanske',
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
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-gardevoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
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
        cardImg: '../../assets/cards/scvi-2024/switch.png',
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
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        "count": 3,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 2,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../../assets/flags/norway.png',
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
        cardImg: '../../assets/cards/scvi-2024/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
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
        cardImg: '../../assets/cards/scvi-2024/miriam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/penny.png',
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
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/rare-candy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
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
        "count": 12,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../../assets/flags/mexico.png',
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
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/feather-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fan-of-waves.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/charizard-shiny.png',
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
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pidgeot-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mawile.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/miltank.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/hawlucha.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
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
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fire-energy.jpg',
        "count": 2,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Aiden Khus',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
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
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crystal-cave.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 6,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Trevore Read',
    flag: '../../../assets/flags/canada.png',
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
        cardImg: '../../assets/cards/2022-2023/duraludon-vmax-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-v-ss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/thorton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/mesagoza.png',
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
        cardImg: '../../assets/cards/new-energy/impact-energy.png',
        "count": 3,
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
    ]
  },
  {
    firstName: 'Eric Rodriguez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
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
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
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
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-darkness.png',
        "count": 3,
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
        cardImg: '../../assets/cards/new-energy/impact-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/regenerative-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Robert Kinbrum',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/miraidon.png',
    sprite2: '../../../assets/sprites/regieliki-vmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/scvi-2024/miraidon-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/elctric-generator.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 15,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Hermanni Hietalahti',
    flag: '../../../assets/flags/finland.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/articuno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 7,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Michael Bergerac',
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
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-gardevoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
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
        cardImg: '../../assets/cards/scvi-2024/switch.png',
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
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        "count": 3,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 2,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tobias Strømdahl',
    flag: '../../../assets/flags/norway.png',
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
        cardImg: '../../assets/cards/2022-2023/drapion-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/irida.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/korrinas-focus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/energy-retrieval.png',
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
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 6,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Braiden Elfert',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/vulpix-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/vulpix-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/espeon-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/espeon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-gardevoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/leafy-camo-poncho.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 3,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 3,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 2,,
        radiusCard:true
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
    firstName: 'Paulo Mimoso',
    flag: '../../../assets/flags/portugal.png',
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
        cardImg: '../../assets/cards/2022-2023/aerodactyl-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/aerodactyl-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/arven.png',
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
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/feather-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Pedro Pertusi',
    flag: '../../../assets/flags/brazil.png',
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
        cardImg: '../../assets/cards/scvi-2024/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
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
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
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
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
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
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rescue-carrier-crv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/defiance-band.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 11,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Tyler Mathews',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
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
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
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
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/hawlucha.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
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
        cardImg: '../../assets/cards/2022-2023/pokestop.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
        "count": 4,,
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
    firstName: 'Phillip de Sousa',
    flag: '../../../assets/flags/uk.png',
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
        cardImg: '../../assets/cards/scvi-2024/gardevoir-ex.png',
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
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
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
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
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
        cardImg: '../../assets/cards/scvi-2024/miriam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
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
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/rare-candy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 11,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Yoann Barszezak',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 2,
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
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Nathaniel Kaplan',
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
        cardImg: '../../assets/cards/2022-2023/duraludon-vmax-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/duraludon-v-ss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/thorton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/mesagoza.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/impact-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Ole Stognief',
    flag: '../../../assets/flags/germany.png',
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
        cardImg: '../../assets/cards/scvi-2024/hawlucha.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
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
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
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
        "count": 2,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Sami Sekkoum',
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
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof-carefree.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/skwovet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
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
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard:true
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
    firstName: 'Haru Nishikawa',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mawile.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
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
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Piper Lepine',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/articuno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
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
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Andrew Martin',
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
        cardImg: '../../assets/cards/scvi-2024/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gallade.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
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
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/peonia.png',
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
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/collapsed-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 11,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Ryan Pang',
    flag: '../../../assets/flags/uk.png',
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
        cardImg: '../../assets/cards/2022-2023/pidgeot-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dreepy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/penny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/feather-ball.png',
        "count": 1,
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
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/full-face-helmet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
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
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Robin Schulz',
    flag: '../../../assets/flags/germany.png',
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
        cardImg: '../../assets/cards/scvi-2024/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
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
        cardImg: '../../assets/cards/scvi-2024/miriam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/penny.png',
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
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/rare-candy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
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
        "count": 12,,
        radiusCard:true
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
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-gardevoir.png',
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
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 2,
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
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard:true
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
    firstName: 'Nofoume Ben Ahmed',
    flag: '../../../assets/flags/france.png',
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
        cardImg: '../../assets/cards/2022-2023/pidgeot-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dreepy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/feather-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
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
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
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
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alessandro Cremascoli',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
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
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 6,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Jonathan Lanciano',
    flag: '../../../assets/flags/argentina.png',
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
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/penny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/great-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/mesagoza.png',
        "count": 3,
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
        cardImg: '../../assets/cards/new-energy/impact-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Sander Wojcik',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/ursaluna.png',
    sprite2: '../../../assets/sprites/mimikyu.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/rotom-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mimikyu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ursaluna-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crabonminal-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/calyrex-v-shadow-rider.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/kirlia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ralts-memory-skip.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mawile.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-astr.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/miltank.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ditto-go.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy-pulling-currents.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pyukumuku.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/penny.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/acerola-premonition.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zinnia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flannery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/team-yell-cheer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/crushing-hammer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/trekking-shoes-crz.png',
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
        cardImg: '../../assets/cards/2022-2023/pot-helmet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stormy-mountain.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
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
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Cain Greene',
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
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 2,
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Gilbert McLaughlin',
    flag: '../../../assets/flags/uk.png',
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
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
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
        cardImg: '../../assets/cards/scvi-2024/hawlucha.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
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
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
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
        "count": 3,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Murilo Mercadante',
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
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/mesagoza.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/regenerative-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Nathan Brower',
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
        cardImg: '../../assets/cards/2022-2023/articuno-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
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
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/mesagoza.png',
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
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: "Vaughn O'Brien",
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
        cardImg: '../../assets/cards/scvi-2024/hawlucha.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
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
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
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
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
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
    firstName: 'Mauro Wandoloh',
    flag: '../../../assets/flags/belgium.png',
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
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
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
        cardImg: '../../assets/cards/scvi-2024/hawlucha.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
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
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
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
    firstName: 'Sackett Brehmer',
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
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/penny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
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
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
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
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
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
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
        "count": 1,
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 1,
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
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
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
    firstName: 'Calvin Connor',
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
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/penny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/mesagoza.png',
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
      {
        cardImg: '../../assets/cards/new-energy/regenerative-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Jacob Kendrick',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zamazenta.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/thorton.png',
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
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Fabio Spanò',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
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
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Thomas Happel',
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
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/penny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/great-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/mesagoza.png',
        "count": 3,
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
    firstName: 'Piotr Orleański',
    flag: '../../../assets/flags/poland.png',
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
        cardImg: '../../assets/cards/2022-2023/kyogre.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zamazenta.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/hawlucha.png',
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
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
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
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 4,,
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
    firstName: 'Angelo Falchi',
    flag: '../../../assets/flags/italy.png',
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
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/thorton.png',
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
        cardImg: '../../assets/cards/scvi-2024/switch.png',
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
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
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
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 5,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Connor Bird',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/serena.png',
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
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
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 7,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Joshua Frink',
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
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-gardevoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
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
        cardImg: '../../assets/cards/scvi-2024/switch.png',
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
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        "count": 3,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 2,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andres Torres',
    flag: '../../../assets/flags/colombia.png',
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
        cardImg: '../../assets/cards/scvi-2024/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 3,
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
        cardImg: '../../assets/cards/scvi-2024/klefki.png',
        "count": 2,
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
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/miriam.png',
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
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/rare-candy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 11,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Oscar Rivas',
    flag: '../../../assets/flags/spain.png',
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
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/hawlucha.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/raihan.png',
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
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
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
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
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
    firstName: 'Hiroki Nakashima',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/charizard-shiny.png',
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
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mawile.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
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
        cardImg: '../../assets/cards/scvi-2024/defiance-band.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fire-energy.jpg',
        "count": 2,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Julius Brunfeldt',
    flag: '../../../assets/flags/finland.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/articuno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 7,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Carlo del Vescovo',
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
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flying-pikachu-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/radiant-gardevoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 3,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 3,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 2,,
        radiusCard:true
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
    firstName: 'Tony Yates',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 6,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Andreas Møller',
    flag: '../../../assets/flags/denmark.png',
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
        cardImg: '../../assets/cards/scvi-2024/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 3,
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
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/miriam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/arven.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/rare-candy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/emergency-jelly.png',
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
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Brandon Salazar',
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
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/great-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/urn-of-vitality.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
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
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/regenerative-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Antonio Distefano',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/defiance-band.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 6,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Grant Hays',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crystal-cave.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 6,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Ian Buck',
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
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/penny.png',
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
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/trekking-shoes-crz.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/feather-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pokemon-catcher.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-city.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jose Marrero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
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
        cardImg: '../../assets/cards/2022-2023/lugia-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lugia-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/archeops.png',
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
        cardImg: '../../assets/cards/2022-2023/tyranitar-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
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
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-darkness.png',
        "count": 3,
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
        cardImg: '../../assets/cards/new-energy/impact-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/regenerative-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Frank Mintmire',
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
        cardImg: '../../assets/cards/scvi-2024/gardevoir-ex.png',
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
        cardImg: '../../assets/cards/scvi-2024/klefki.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
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
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
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
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rescue-carrier-crv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 11,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Alex Lonnecker',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
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
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
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
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 6,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Bolly Olufon',
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
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-gardevoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/thorton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/mesagoza.png',
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
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Andrew Mahone',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
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
        cardImg: '../../assets/cards/scvi-2024/switch.png',
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
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 6,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
    ]
  },
  // {
  //   firstName: '65 leonel orozco', @lorozco04 on twitter
  //   flag: '../../../assets/flags',
  //   sprite1: '../../../assets/sprites',
  //   sprite2: '../../../assets/sprites',
  //   list: '../../../assets/list-icon.png',
  //   deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
  //   deck: [
  //     {
  //       cardImg: '../../assets/cards/2022-2023',
  //       "count": 4,
  //     },
  //   ]
  // },
]

let seniors = [
  {
    firstName: 'Rune Heiremans',
    flag: '../../../assets/flags/belgium.png',
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
        cardImg: '../../assets/cards/scvi-2024/gardevoir-ex.png',
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
        cardImg: '../../assets/cards/scvi-2024/klefki.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
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
        cardImg: '../../assets/cards/2022-2023/peonia.png',
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
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rescue-carrier-crv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 11,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Drew Stephenson',
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
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/hawlucha.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
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
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 3,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Eli Maclean',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/goodra-hisui.png',
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
        cardImg: '../../assets/cards/2022-2023/goodra-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/goodra-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 2,
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
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 6,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-metal-energy.jpg',
        "count": 5,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Nicholas Calder',
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
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 2,
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 5,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Xander Brown',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/miraidon.png',
    sprite2: '../../../assets/sprites/regieliki-vmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/scvi-2024/miraidon-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/regieliki-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/magnezone-vstar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/magnezone-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pachirisu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/arven.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/elctric-generator.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/exp-share.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 13,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Evan Pavelski',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/vulpix-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/vulpix-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/espeon-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/espeon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-gardevoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/capturing-aroma.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/leafy-camo-poncho.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 3,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 3,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 2,,
        radiusCard:true
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
    firstName: 'Nathan Osterkatz',
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
        cardImg: '../../assets/cards/2022-2023/articuno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/hawlucha.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
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
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 5,,
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
    firstName: 'Riccardo Corino',
    flag: '../../../assets/flags/italy.png',
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
        cardImg: '../../assets/cards/2022-2023/pidgeot-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tropius.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/hawlucha.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/energy-retrieval.png',
        "count": 1,
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
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-dark-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 1,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Joah Wiegner',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/charizard-shiny.png',
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
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-charizard-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pidgeot-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/hawlucha.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mawile.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/colress-experiment.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mirage-gate.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
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
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-fire-energy.jpg',
        "count": 2,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Théo Melo Pacca',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Daniel Magda',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tristan Tse',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kamil Bidzinski',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Elias Næss',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ziyao Qu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lugia.png',
    sprite2: '../../../assets/sprites/duraludon-gmax.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Arthur De Nardi',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Lucas Oldale',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/inteleon-gmax.png',
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
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-alakazam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mawile.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/korrinas-focus.png',
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
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/energy-retrieval.png',
        "count": 2,
      },
            {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 7,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Cerys Jones',
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
        cardImg: '../../assets/cards/scvi-2024/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
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
        cardImg: '../../assets/cards/scvi-2024/miriam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/penny.png',
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
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/rare-candy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
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
        "count": 12,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Noah Brown',
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
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
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
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/thorton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/mesagoza.png',
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
        cardImg: '../../assets/cards/new-energy/regenerative-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Alessandro Vezzoni',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Justin Templer',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/comfey.png',
    sprite2: '../../../assets/sprites/sableye.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Benny Billinger',
    flag: '../../../assets/flags/canada.png',
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
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
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
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/thorton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/mesagoza.png',
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
        cardImg: '../../assets/cards/new-energy/regenerative-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Aarni Karjala',
    flag: '../../../assets/flags/finland.png',
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
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cyllene.png',
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
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Simon Belanyi',
    flag: '../../../assets/flags/slovakia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Damian Gregorczuk',
    flag: '../../../assets/flags/poland.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sebastian Lashmet',
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
        cardImg: '../../assets/cards/scvi-2024/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gardevoir.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v-promo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/worker.png',
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
        cardImg: '../../assets/cards/scvi-2024/miriam.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/penny.png',
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
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/rare-candy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
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
        "count": 12,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Sönke Ringel',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Daniele Rosati',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'João Penteado',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/mewtwo.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Luka Levain',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Daniel Rosas',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
        cardImg: '../../assets/cards/2022-2023',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Owen Dalgard',
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
        cardImg: '../../assets/cards/scvi-2024/gardevoir-ex.png',
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
        cardImg: '../../assets/cards/scvi-2024/klefki.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/zacian-v-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-turo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
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
        cardImg: '../../assets/cards/2022-2023/peonia.png',
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
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rescue-carrier-crv.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 11,,
        radiusCard:true
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Remi Lorenz',
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
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/penny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/roxanne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/mesagoza.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/regenerative-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Drake Zhu',
    flag: '../../../assets/flags/new-zealand.png',
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
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
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
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/mesagoza.png',
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
        cardImg: '../../assets/cards/new-energy/gift-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Yohann C',
    flag: '../../../assets/flags/canada.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/comfey.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-greninja.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drapion-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tropius.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 3,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Gregory V',
    flag: '../../../assets/flags/france.png',
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
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/canceling-cologne.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-lightning-energy.jpg',
        "count": 1,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Naël E',
    flag: '../../../assets/flags/spain.png',
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
        cardImg: '../../assets/cards/2022-2023/cramorant.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 2,
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
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch-cart.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-psychic-energy.jpg',
        "count": 5,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 4,,
        radiusCard:true
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-water-energy.jpg',
        "count": 3,,
        radiusCard:true
      },
    ]
  },
  {
    firstName: 'Prince W',
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
        cardImg: '../../assets/cards/2022-2023/stonjourner.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/radiant-tsareena.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/professors-research-sada.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/prof-burnet.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/penny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/scvi-2024/nest-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/mesagoza.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/v-guard-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/regenerative-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Aiden F',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax-unfazed-fat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raikou-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zapdos-v.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/scvi-2024/pokegear30.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-recycler.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/heavy-ball-hisuian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sky-seal-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/beach-court.png',
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
      {
        cardImg: '../../assets/cards/new-energy/scvi-fighting-energy.jpg',
        "count": 1,,
        radiusCard: true
      },
    ]
  },
  {
    firstName: 'Jan J',
    flag: '../../../assets/flags/poland.png',
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
        cardImg: '../../assets/cards/scvi-2024/judge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/serena.png',
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
        cardImg: '../../assets/cards/scvi-2024/ultra-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/cross-switcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lost-vacuum-crz.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/feather-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/scvi-2024/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/forest-seal-stone.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/temple-of-sinnoh.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2023 EUIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2023 EUIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2023 EUIC";

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
