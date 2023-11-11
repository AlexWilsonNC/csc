const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
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
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
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
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/piers.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-retrieval.png',
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
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Frank Percic',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/whimsicott.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/whimsicott-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/whimsicott-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
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
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crushing-hammer.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fan-of-waves.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/exp-share.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../../assets/flags/spain.png',
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
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/octillery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/remoraid.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v.png',
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
        cardImg: '../../assets/cards/2022-2023/eldegoss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gosiflour.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sonia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cynthias-ambition.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
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
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Mateusz Rusinek',
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
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
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
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
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
        "count": 2,
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
    firstName: 'Tord Reklev',
    flag: '../../../assets/flags/norway.png',
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
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/octillery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/remoraid.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v.png',
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
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sonia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cynthias-ambition.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Thai Nguyen',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/sylveon-vmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sylveon-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sylveon-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/moltres-v.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/korrinas-focus.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fan-of-waves.png',
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
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Isaiah Bradner',
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
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hoopa.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v.png',
        "count": 1,
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/passimian-rs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
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
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
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
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
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
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Justin Bokhari',
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
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hoopa.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v.png',
        "count": 1,
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/passimian-rs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
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
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
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
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
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
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Keito Arai',
    flag: '../../../assets/flags/japan.png',
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
        cardImg: '../../assets/cards/2022-2023/beedrill.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sss-mustard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/grass-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Ruben van der Sluis',
    flag: '../../../assets/flags/netherlands.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peony.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
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
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        "count": 3,
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
    firstName: 'Alexander Weber',
    flag: '../../../assets/flags/austria.png',
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
    firstName: 'Charlie Merryweather',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/malamar.png',
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
        cardImg: '../../assets/cards/2022-2023/malamar.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inkay.png',
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
        cardImg: '../../assets/cards/2022-2023/octillery.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/remoraid.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cynthias-ambition.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/korrinas-focus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/brawly.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
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
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rescue-carrier.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/spiral-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Edwyn Mesman',
    flag: '../../../assets/flags/netherlands.png',
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
        cardImg: '../../assets/cards/2022-2023/moltres.png',
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
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
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
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Tetsu Watanabe',
    flag: '../../../assets/flags/italy.png',
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
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
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
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
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Elias Stratmann',
    flag: '../../../assets/flags/germany.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
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
        "count": 4,
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-darkness.png',
        "count": 4,
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
    firstName: 'Kaiwen Cabbabe',
    flag: '../../../assets/flags/australia.png',
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
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
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
    firstName: 'Alberto Conti',
    flag: '../../../assets/flags/italy.png',
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
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/marnie.png',
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
        cardImg: '../../assets/cards/2022-2023/klara.png',
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
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
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
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Juho Kallama',
    flag: '../../../assets/flags/finland.png',
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
    firstName: 'Magnus Pedersen',
    flag: '../../../assets/flags/denmark.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/beedrill.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/meowth-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sss-mustard.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/pokegear.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/grass-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Joshua Huggard',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/lycanroc-dusk.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/lycanroc-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lycanroc-v.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/hoopa-v.png',
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
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
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
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Piotr Orleański',
    flag: '../../../assets/flags/poland.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/crobat-vmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/crobat-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hoopa-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 5,
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
    firstName: 'Zach Cooper',
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
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
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
        cardImg: '../../assets/cards/2022-2023/moltres-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hoopa.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rowlet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tapu-koko.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cynthias-ambition.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sonia.png',
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
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
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
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Jelle van Kampen',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/arceus.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
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
        cardImg: '../../assets/cards/2022-2023/avery.png',
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
        cardImg: '../../assets/cards/2022-2023/crushing-hammer.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Miloslav Poslední',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/moltres-galar.png',
    sprite2: '../../../assets/sprites/inteleon.png',
    list: '../../../assets/list-icon.png',
    type: '',
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
        cardImg: '../../assets/cards/2022-2023/zapdos-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eldegoss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/gosiflour.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rowlet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sonia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
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
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lucky-eg.png',
        "count": 1,
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
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../../assets/flags/mexico.png',
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
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
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
        cardImg: '../../assets/cards/2022-2023/marnie.png',
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
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/echoing-horn.png',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Elena Gómez',
    flag: '../../../assets/flags/spain.png',
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
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
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
        cardImg: '../../assets/cards/2022-2023/marnie.png',
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
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
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
    firstName: 'Connor Finton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/calyrex-shadow-rider.png',
    sprite2: '../../../assets/sprites/whimsicott.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/calyrex-v-shadow-rider.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/whimsicott-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/whimsicott-v.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/team-yell-grunt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crushing-hammer.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fan-of-waves.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 12,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Jake Mallender',
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
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
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
        cardImg: '../../assets/cards/2022-2023/switching-cups.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 2,
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/medicham-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
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
        cardImg: '../../assets/cards/2021-2022/passimian-rs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose.png',
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
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/telescopic-sight.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 1,
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
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Reiji Nishiguchi',
    flag: '../../../assets/flags/japan.png',
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
        cardImg: '../../assets/cards/2022-2023/beedrill.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sss-mustard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/grass-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Dominik Malicki',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peony.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
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
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-darkness.png',
        "count": 4,
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
    firstName: 'Arne Van Braeckel',
    flag: '../../../assets/flags/belgium.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/beedrill.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/flygon-v.png',
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
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sss-mustard.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/pokegear.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/grass-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Luuk den Toom',
    flag: '../../../assets/flags/netherlands.png',
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
        cardImg: '../../assets/cards/2022-2023/moltres.png',
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
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
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
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 2,
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
    firstName: 'Pedro Vicêncio',
    flag: '../../../assets/flags/portugal.png',
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
    firstName: 'Daniel Lynch',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/whimsicott.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/whimsicott-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/whimsicott-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
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
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peony.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crushing-hammer.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fan-of-waves.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/exp-share.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sai Fung Lau',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/urshifu-rapid-strike-gmax.png',
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
    firstName: 'Gabriel Smart',
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
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
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
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
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
    firstName: 'Patrick Landis',
    flag: '../../../assets/flags/switzerland.png',
    sprite1: '../../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/lumineon-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/piers.png',
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
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
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
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Sander Wojcik',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/umbreon-vmax.png',
    sprite2: '../../../assets/sprites/eldegoss.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/jolteon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eldegoss-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starly.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/jirachi.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pyukumuku.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flannery.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
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
        cardImg: '../../assets/cards/2022-2023/zinnia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bruno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
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
        cardImg: '../../assets/cards/2022-2023/moon-sun-badge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-darkness.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/shopping-center.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Rasmus Moller',
    flag: '../../../assets/flags/denmark.png',
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
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
        "count": 2,
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
    firstName: 'Bryan de Vries',
    flag: '../../../assets/flags/netherlands.png',
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
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/octillery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/remoraid.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v.png',
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
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/passimian-rs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sonia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cynthias-ambition.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/telescopic-sight.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Simon Obro',
    flag: '../../../assets/flags/denmark.png',
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
    firstName: 'Lucian Hargreaves',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
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
        cardImg: '../../assets/cards/2022-2023/tower-of-darkness.png',
        "count": 4,
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
    firstName: 'Jory Koot',
    flag: '../../../assets/flags/netherlands.png',
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
        cardImg: '../../assets/cards/2022-2023/moltres.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/klara.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
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
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
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
    firstName: 'Goncalo Pereira',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
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
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
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
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-darkness.png',
        "count": 4,
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
    firstName: 'Gino Pill',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/suicune.png',
    sprite2: '../../../assets/sprites/ludicolo.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/suicune-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
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
        cardImg: '../../assets/cards/2022-2023/ludicolo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lotad.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/melony.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/rare-candy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
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
    firstName: 'Luke Doran',
    flag: '../../../assets/flags/uk.png',
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
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 5,
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
    firstName: 'Steffen Eriksen',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/umbreon-vmax.png',
    sprite2: '../../../assets/sprites/eldegoss.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/umbreon-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/jolteon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eldegoss-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/starly.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/jirachi.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pyukumuku.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/flannery.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
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
        cardImg: '../../assets/cards/2022-2023/zinnia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bruno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
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
        cardImg: '../../assets/cards/2022-2023/moon-sun-badge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-darkness.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/shopping-center.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/single-strike-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Stephen Chan',
    flag: '../../../assets/flags/uk.png',
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
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/adventurers-discovery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose.png',
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
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alec White',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
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
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hoopa.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zapdos-v.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/marnie.png',
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
        cardImg: '../../assets/cards/2022-2023/klara.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
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
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
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
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
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
    firstName: 'Seb Symonds',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/malamar.png',
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
        cardImg: '../../assets/cards/2022-2023/malamar.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inkay.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/drizzile.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/skiploom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/oranguru.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cynthias-ambition.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/brawly.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/korrinas-focus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
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
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rescue-carrier.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/turfield-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/spiral-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Julius Brunfeldt',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
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
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/tower-of-darkness.png',
        "count": 4,
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
    firstName: 'Tobias Smutkowski',
    flag: '../../../assets/flags/germany.png',
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
    firstName: 'Nico Alabas',
    flag: '../../../assets/flags/germany.png',
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
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/octillery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/remoraid.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v.png',
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
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sonia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cynthias-ambition.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
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
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Rahul Reddy',
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
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/mew.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hoopa.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v.png',
        "count": 1,
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/passimian-rs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
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
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peonia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
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
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
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
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Paul Shail',
    flag: '../../../assets/flags/uk.png',
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
        cardImg: '../../assets/cards/2022-2023/moltres.png',
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
        cardImg: '../../assets/cards/2022-2023/klara.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Piper Lepine',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres-v.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/piers.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fan-of-waves.png',
        "count": 2,
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Vinnie Schelfhaut',
    flag: '../../../assets/flags/belgium.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/lycanroc-dusk.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/lycanroc-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lycanroc-v.png',
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
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fan-of-waves.png',
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
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alex Wilson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/crobat-vmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/escape-rope.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
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
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 6,
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
    firstName: 'Travis Beckwith',
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
        cardImg: '../../assets/cards/2022-2023/moltres.png',
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
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cynthias-ambition.png',
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
        cardImg: '../../assets/cards/2022-2023/klara.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-retrieval.png',
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
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
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
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Tijn Wens',
    flag: '../../../assets/flags/netherlands.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
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
        cardImg: '../../assets/cards/2022-2023/rotom-phone.png',
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
    firstName: 'Dan Coyne',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
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
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/switching-cups.png',
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
    firstName: 'André Chiasson',
    flag: '../../../assets/flags/canada.png',
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
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
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/old-cemetary.png',
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
    firstName: 'Francesco Caterino',
    flag: '../../../assets/flags/italy.png',
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
        cardImg: '../../assets/cards/2022-2023/oricorio.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/elesa-sparkle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
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
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-darkness.png',
        "count": 4,
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
]

let seniors = [
  {
    firstName: 'Caleb Rogerson',
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
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/medicham-v.png',
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
        cardImg: '../../assets/cards/2022-2023/hoopa.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tapu-koko.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rowlet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bird-keeper.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/cynthias-ambition.png',
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
        cardImg: '../../assets/cards/2022-2023/sonia.png',
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
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 4,
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
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Roberto Costanzo',
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
        cardImg: '../../assets/cards/2022-2023/moltres.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
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
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 1,
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
    firstName: 'Simon Belanyi',
    flag: '../../../assets/flags/slovakia.png',
    sprite1: '../../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
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
        cardImg: '../../assets/cards/2022-2023/crobat-vmax.png',
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
        cardImg: '../../assets/cards/2022-2023/moltres-v.png',
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
        cardImg: '../../assets/cards/2022-2023/pumpkaboo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Alexander Calder',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/whimsicott.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/whimsicott-vstar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/whimsicott-v.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/yveltal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crushing-hammer.png',
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
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fan-of-waves.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 2,
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Fabio Battistella',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/crobat-vmax.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/crobat-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/hoopa-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/moltres.png',
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
        cardImg: '../../assets/cards/2022-2023/dunsparce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/judge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
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
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 2,
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
    firstName: 'Lorenzo Fulco',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/arceus.png',
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
        cardImg: '../../assets/cards/2022-2023/arceus-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/arceus-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-vmax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rs-urshifu-v.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/hoopa-v.png',
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
        cardImg: '../../assets/cards/2022-2023/jolteon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/eevee.png',
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
        cardImg: '../../assets/cards/2022-2023/switch.png',
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
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/memory-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
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
        cardImg: '../../assets/cards/energy/rapid-strike-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Julio Rodríguez',
    flag: '../../../assets/flags/spain.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sobble-pound.png',
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
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
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
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Noah Brown',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/moltres-galar.png',
    list: '../../../assets/list-icon.png',
    type: '',
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
        cardImg: '../../assets/cards/2022-2023/moltres.png',
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
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
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
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
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
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
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
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/new-energy/water-energy-brs.png',
        "count": 1,
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
    firstName: 'Tobias S',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: 'Xander B',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: 'Nicholas C',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: 'Max B',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: 'Daniel M',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: 'Patrik P',
    flag: '../../../assets/flags/slovakia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: 'Elias Azagra N',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
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
    firstName: 'Antoni Liszyk',
    flag: '../../../assets/flags/poland.png',
    sprite1: '../../../assets/sprites/arceus.png',
    sprite2: '../../../assets/sprites/lycanroc-dusk.png',
    list: '../../../assets/list-icon.png',
    type: '',
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
        cardImg: '../../assets/cards/2022-2023/lycanroc-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/lycanroc-v.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rose.png',
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
        cardImg: '../../assets/cards/2022-2023/hyper-potion.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
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
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 1,
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Nathan Osterkatz',
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
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
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
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Luka Levain',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/malamar.png',
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
        cardImg: '../../assets/cards/2022-2023/malamar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inkay.png',
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
        cardImg: '../../assets/cards/2022-2023/octillery.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/remoraid.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/korrinas-focus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/brawly.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cynthias-ambition.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-giovanni.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/rescue-carrier.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tower-of-waters.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/spiral-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Nino Linnau',
    flag: '../../../assets/flags/austria.png',
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
        "count": 3,
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
        cardImg: '../../assets/cards/2022-2023/ditto-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/zapdos-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/piers.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/raihan.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/choice-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cape-of-toughness.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/double-turbo-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Kamil Bidzinski',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/whimsicott.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2022-2023/whimsicott-vstar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/whimsicott-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bibarel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bidoof.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/bosss-orders-cyrus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/peony.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/avery.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/crushing-hammer.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fog-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/fan-of-waves.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/exp-share.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/path-to-the-peak.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/psychic-energy-brs.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/double-turbo-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jan Jakubowski',
    flag: '../../../assets/flags/poland.png',
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
        cardImg: '../../assets/cards/2022-2023/professor-research-rowan.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cherens-care.png',
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
        cardImg: '../../assets/cards/2022-2023/pal-pad.png',
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
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Prince Williams',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/moltres-galar.png',
    sprite2: '../../../assets/sprites/hoopa-unbound.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        cardImg: '../../assets/cards/2022-2023/hoopa.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-quick-shooting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/inteleon-shady-dealings.png',
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
        cardImg: '../../assets/cards/2022-2023/zapdos-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/sableye-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/castform-snowy.png',
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
        cardImg: '../../assets/cards/2022-2023/level-ball.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2022-2023/evolution-incense.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/energy-search.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/training-court.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/new-energy/dark-energy-brs.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Alberto Zamuner',
    flag: '../../../assets/flags/italy.png',
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
        cardImg: '../../assets/cards/2022-2023/zapdos-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/latias.png',
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
        cardImg: '../../assets/cards/2022-2023/klara.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/quick-ball-fus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/power-tablet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2022-2023/ultra-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/battle-vip-pass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cram-o-matic.png',
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
        cardImg: '../../assets/cards/2022-2023/rose-tower.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/old-cemetary.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/fighting-energy-brs.png',
        "count": 2,
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
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Mathias Lamotte',
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
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/zigzagoon-galarian.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2022-2023/marnie.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/scoop-up-net.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2022-2023/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/capacious-bucket.png',
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
    ]
  },
  // {
  //   firstName: 'Emmett B',
  //   flag: '../../../assets/flags/usa.png',
  //   sprite1: '../../../assets/sprites/blank.png',
  //   sprite2: '../../../assets/hyphen.png',
  //   list: '../../../assets/sprites/blank.png',
  //   type: '',
  //   deck: [
  //     {
  //       cardImg: '../../assets/cards/2022-2023',
  //       "count": 4,
  //     },
  //   ]
  // },
  // {
  //   firstName: 'Kingsley C',
  //   flag: '../../../assets/flags/australia.png',
  //   sprite1: '../../../assets/sprites/blank.png',
  //   sprite2: '../../../assets/hyphen.png',
  //   list: '../../../assets/sprites/blank.png',
  //   type: '',
  //   deck: [
  //     {
  //       cardImg: '../../assets/cards/2022-2023',
  //       "count": 4,
  //     },
  //   ]
  // },
  // {
  //   firstName: 'Vojtěch B',
  //   flag: '../../../assets/flags/czech-republic.png',
  //   sprite1: '../../../assets/sprites/blank.png',
  //   sprite2: '../../../assets/hyphen.png',
  //   list: '../../../assets/sprites/blank.png',
  //   type: '',
  //   deck: [
  //     {
  //       cardImg: '../../assets/cards/2022-2023',
  //       "count": 4,
  //     },
  //   ]
  // },
  // {
  //   firstName: 'Théo M',
  //   flag: '../../../assets/flags/spain.png',
  //   sprite1: '../../../assets/sprites/blank.png',
  //   sprite2: '../../../assets/hyphen.png',
  //   list: '../../../assets/sprites/blank.png',
  //   type: '',
  //   deck: [
  //     {
  //       cardImg: '../../assets/cards/2022-2023',
  //       "count": 4,
  //     },
  //   ]
  // },
  // {
  //   firstName: 'Polaris A',
  //   flag: '../../../assets/flags/usa.png',
  //   sprite1: '../../../assets/sprites/blank.png',
  //   sprite2: '../../../assets/hyphen.png',
  //   list: '../../../assets/sprites/blank.png',
  //   type: '',
  //   deck: [
  //     {
  //       cardImg: '../../assets/cards/2022-2023',
  //       "count": 4,
  //     },
  //   ]
  // },
  // {
  //   firstName: 'Peter S',
  //   flag: '../../../assets/flags/uk.png',
  //   sprite1: '../../../assets/sprites/blank.png',
  //   sprite2: '../../../assets/hyphen.png',
  //   list: '../../../assets/sprites/blank.png',
  //   type: '',
  //   deck: [
  //     {
  //       cardImg: '../../assets/cards/2022-2023',
  //       "count": 4,
  //     },
  //   ]
  // },
  // {
  //   firstName: 'Thomas L',
  //   flag: '../../../assets/flags/uk.png',
  //   sprite1: '../../../assets/sprites/blank.png',
  //   sprite2: '../../../assets/hyphen.png',
  //   list: '../../../assets/sprites/blank.png',
  //   type: '',
  //   deck: [
  //     {
  //       cardImg: '../../assets/cards/2022-2023',
  //       "count": 4,
  //     },
  //   ]
  // },
  // {
  //   firstName: 'Misha S',
  //   flag: '../../../assets/flags/uk.png',
  //   sprite1: '../../../assets/sprites/blank.png',
  //   sprite2: '../../../assets/hyphen.png',
  //   list: '../../../assets/sprites/blank.png',
  //   type: '',
  //   deck: [
  //     {
  //       cardImg: '../../assets/cards/2022-2023',
  //       "count": 4,
  //     },
  //   ]
  // },
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2022 EUIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2022 EUIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2022 EUIC";

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
