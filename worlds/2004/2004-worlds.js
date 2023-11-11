const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Tsuguyoshi Yamato',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/groudon.png',
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
        cardImg: '../../assets/cards/2004-2006/ma.009.team_magmas_groudon.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmas-zangoose.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.008.team_magmas_claydol.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmas-baltoy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.019.team_magmas_camerupt.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmas-numel.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.082.team_magma_conspirator.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.088.tv_reporter.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/underground-expedition.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.073.maxie_.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.087.mr_brineys_compassion.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rg.097.pokemon_reversal.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.080.team_magma_ball.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/switch.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/fighting-energy.jpg',
        "count": 6,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/psychic-energy.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/darkness-energy.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.087.magma_energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/rainbow-energy.jpg',
        "count": 2,,
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Chris Fulop',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blaziken.png',
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
        cardImg: '../../assets/cards/2004-2006/blaziken.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/blaziken-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/combusken.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/torchic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/delcatty.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/skitty.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.004.team_aquas_manectric.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/aquas-electrike.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/bellossom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/oddish.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rayquaza-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oracle.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/nurse.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/elm-training-method.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/town-volunteers.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/e-reader/friend-ball.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/switch.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/fire-energy.jpg',
        "count": 10,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/lightning-energy.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/e-reader/warp-energy.jpg',
        "count": 1,,
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Go Miyamoto',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/groudon.png',
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
        cardImg: '../../assets/cards/2004-2006/ma.009.team_magmas_groudon.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmas-zangoose.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.008.team_magmas_claydol.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmas-baltoy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.019.team_magmas_camerupt.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmas-numel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.082.team_magma_conspirator.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.088.tv_reporter.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/underground-expedition.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.073.maxie_.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.070.team_magma_schemer.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.087.mr_brineys_compassion.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.080.team_magma_ball.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rg.097.pokemon_reversal.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/ex.150.strength_charm.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/fighting-energy.jpg',
        "count": 6,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/psychic-energy.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/darkness-energy.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.087.magma_energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/rainbow-energy.jpg',
        "count": 2,,
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Yuki Fujimori',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/groudon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yuichi Murakami',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/groudon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Drew Holton',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blaziken.png',
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
        cardImg: '../../assets/cards/2004-2006/blaziken.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/blaziken-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/combusken-flare.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/combusken.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/torchic-e-reader.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/delcatty.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/skitty.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/bellossom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/oddish.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.017.magneton.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magnemite.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rayquaza-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/e-reader/oracle.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/elm-training-method.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/desert-shaman.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/e-reader/switch.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/friend-ball.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/fire-energy.jpg',
        "count": 12,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/lightning-energy.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/e-reader/warp-energy.jpg',
        "count": 1,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Kenneth Wong',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/shiftry.png',
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
        cardImg: '../../assets/cards/2004-2006/shiftry-dark.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/nuzleaf-dark.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/seedot.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/e-reader/furret.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/sentret.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/delcatty.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/skitty.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi-dual.png',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/desert-shaman.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oracle.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/town-volunteers.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/warp-point.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/grass-energy.jpg',
        "count": 6,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/darkness-energy.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/e-reader/boost-energy.jpg',
        "count": 4,,
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Colin Moll',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/wailord.png',
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
        cardImg: '../../assets/cards/2004-2006/wailord-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/wailmer.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/bellossom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/e-reader/vileplume.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/gloom.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/gloom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/oddish.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oracle.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oaks-research.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/elm-training-method.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/desert-shaman.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/root-fossil.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/claw-fossil.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/mysterious-fossil.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/e-reader/switch.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/e-reader/mystery-zone.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/island-cave.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/e-reader/water-energy.jpg',
        "count": 12,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'J.R. Palumbo',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blaziken.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Evens Cheung',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Koji Kanno',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/groudon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kyle Sucevich',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/walrein.png',
    sprite2: '../../assets/sprites/milotic.png',
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
        cardImg: '../../assets/cards/2004-2006/walrein.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/sealeo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/spheal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/milotic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/feebas-ascension.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oracle.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.088.tv_reporter.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.087.mr_brineys_compassion.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/town-volunteers.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/e-reader/fast-ball.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/warp-point.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/crystal-shard.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/water-energy.jpg',
        "count": 14,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Kevin Jackson',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',
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
        cardImg: '../../assets/cards/2004-2006/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/kirlia.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ralts.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/delcatty.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/skitty.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.017.magneton.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magnemite.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/wobbuffet-safegaurd.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oracle.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/elm-training-method.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/e-reader/warp-point.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/switch.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rg.097.pokemon_reversal.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/crystal-shard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/magnetic-storm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/e-reader/psychic-energy.jpg',
        "count": 12,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/lightning-energy.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/boost-energy.jpg',
        "count": 3,,
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Eric Craig',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/shiftry.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Nick Caporelli',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/crobat.png',
    sprite2: '../../assets/sprites/gorebyss.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Charles Collinsworth',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Levi Canfield',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blaziken.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andrew Newman',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/groudon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jacob Burt',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/kyogre.png',
    sprite2: '../../assets/sprites/manectric.png',
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
        cardImg: '../../assets/cards/2004-2006/ma.003.team_aquas_kyogre.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.004.team_aquas_manectric.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/aquas-electrike.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/aquas-seviper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/e-reader/ditto.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/team-aqua-conspirator.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.087.mr_brineys_compassion.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/town-volunteers.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/fast-ball.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/warp-point.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/water-energy.jpg',
        "count": 8,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/lightning-energy.jpg',
        "count": 6,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/grass-energy.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/darkness-energy.jpg',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Alexis Diaz',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blaziken.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Che Keen Yau',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/groudon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Matt Gillespie',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/jumpluff.png',
    sprite2: '../../assets/sprites/gorebyss.png',
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
        cardImg: '../../assets/cards/e-reader/jumpluff.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/skiploom.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/hoppip.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/gorebyss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/clamperl.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.088.tv_reporter.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oaks-research.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/nurse.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/e-reader/warp-point.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/e-reader/crystal-shard.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/psychic-energy.jpg',
        "count": 5,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/rainbow-energy.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Evan Bennett',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Koujiro Tsuruta',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blaziken.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Oliver Dürr',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/sceptile.png',
    sprite2: '../../assets/sprites/muk.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kevin De Mooij',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/crobat.png',
    sprite2: '../../assets/sprites/gorebyss.png',
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
        cardImg: '../../assets/cards/2004-2006/crobat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/golbat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/zubat.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/gorebyss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/clamperl.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/igglybuff.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi-dual.png',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/ditto.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oaks-research.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/wallys-training-e-reader.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/e-reader/desert-shaman.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/underground-expedition.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/lanette-net-search-e-reader.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/e-reader/warp-point.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/life-herb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rg.097.pokemon_reversal.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/lure-ball.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/fast-ball.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/e-reader/psychic-energy.jpg',
        "count": 7,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/grass-energy.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/e-reader/rainbow-energy.jpg',
        "count": 1,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Adam Capriola',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/medicham.png',
    sprite2: '../../assets/sprites/lanturn.png',
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
        cardImg: '../../assets/cards/2004-2006/medicham.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/meditite-e-reader.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.038.lanturn.png',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/chinchou-pounf.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/chinchou-random.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.088.tv_reporter.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oracle.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rg.097.pokemon_reversal.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/ex.150.strength_charm.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/lightning-energy.jpg',
        "count": 7,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/fighting-energy.jpg',
        "count": 6,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Eric Richard',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gorebyss.png',
    sprite2: '../../assets/sprites/banette.png',
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
        cardImg: '../../assets/cards/2004-2006/gorebyss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/clamperl.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.001.banette.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/shuppet-selfie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/medicham.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/meditite-jab.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oracle.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.088.tv_reporter.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.087.mr_brineys_compassion.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/elm-training-method.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oaks-research.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/psychic-energy.jpg',
        "count": 6,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/fighting-energy.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Shigeru Kanda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/groudon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Te Awhi Woon',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/claydol.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jimmy Ballard',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mewtwo.png',
    sprite2: '../../assets/sprites/gorebyss.png',
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
        cardImg: '../../assets/cards/2004-2006/mewtwo-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/gorebyss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/clamperl.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.017.magneton.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magnemite.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/delcatty.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/skitty.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/e-reader/juggler.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.088.tv_reporter.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oracle.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/elm-training-method.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/town-volunteers.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/warp-point.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dual-ball-old.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/e-reader/crystal-shard.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/ex.150.strength_charm.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/mystery-zone.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/psychic-energy.jpg',
        "count": 9,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blaziken.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: '--',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/medicham.png',
    sprite2: '../../assets/sprites/lanturn.png',
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
        cardImg: '../../assets/cards/2004-2006/medicham.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/meditite-jab.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.038.lanturn.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/chinchou-pounf.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.001.banette.jpg',
        "count": 2,,
        semiRadiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/shuppet-selfie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/tv-reporter-e-reader.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/elms-training-method.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/e-reader/oracle.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/e-reader/ex.150.strength_charm.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.085.ancient_technical_machine_rock.jpg',
        "count": 1,,
        semiRadiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
        "count": 2,,
        semiRadiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magnetic-storm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/e-reader/lightning-energy.jpg',
        "count": 7,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/psychic-energy.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/fighting-energy.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        "count": 4,
      },
    ]
  }
]

let seniors = [
  {
    firstName: 'Takuya Yoneda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/groudon.png',
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
        cardImg: '../../assets/cards/2004-2006/ma.009.team_magmas_groudon.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmas-zangoose.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.008.team_magmas_claydol.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmas-baltoy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.019.team_magmas_camerupt.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmas-numel.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.082.team_magma_conspirator.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/underground-expedition.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.088.tv_reporter.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.073.maxie_.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.087.mr_brineys_compassion.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.080.team_magma_ball.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/warp-point.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/ex.150.strength_charm.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/fighting-energy.jpg',
        "count": 7,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/psychic-energy.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/darkness-energy.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.087.magma_energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/rainbow-energy.jpg',
        "count": 2,,
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Kevin Nguyen',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',
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
        cardImg: '../../assets/cards/2004-2006/gardevoir-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/kirlia.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ralts.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/delcatty.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/skitty.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.017.magneton.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magnemite.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oracle.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/elm-training-method.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/desert-shaman.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/town-volunteers.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rg.097.pokemon_reversal.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/e-reader/warp-point.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/switch.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/weakness-guard.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magnetic-storm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/e-reader/psychic-energy.jpg',
        "count": 10,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/lightning-energy.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/boost-energy.jpg',
        "count": 4,,
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Takayuke Nishide',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/gorebyss.png',
    sprite2: '../../assets/sprites/gardevoir.png',
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
        cardImg: '../../assets/cards/2004-2006/gorebyss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/clamperl.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/gardevoir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/gardevoir-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/kirlia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ralts.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ralts-e-reader.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/bellossom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/oddish.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/underground-expedition.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/elm-training-method.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/bills-maintenance.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/e-reader/warp-point.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/e-reader/psychic-energy.jpg',
        "count": 8,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/e-reader/boost-energy.jpg',
        "count": 2,,
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Sebastian Crema',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blaziken.png',
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
        cardImg: '../../assets/cards/2004-2006/blaziken.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/blaziken-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/combusken.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/torchic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/delcatty.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/skitty.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rayquaza-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/e-reader/oracle.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/nurse.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/town-volunteers.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oaks-research.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.088.tv_reporter.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/e-reader/switch.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/warp-point.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/high-pressure-system.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/e-reader/fire-energy.jpg',
        "count": 11,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/lightning-energy.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Jeroen Robert',
    flag: '../../assets/flags/belgium.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blaziken.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andrew Knaack',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/swampert.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Patrick Kewley',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/walrein.png',
    sprite2: '../../assets/sprites/arcanine.png',
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
        cardImg: '../../assets/cards/2004-2006/walrein.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/sealeo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/spheal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/arcanine.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/growlith-body.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi-dual.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oracle.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/town-volunteers.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/switch.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/water-energy.jpg',
        "count": 14,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/fire-energy.jpg',
        "count": 6,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Daniel Mermelstein',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gorebyss.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yutaka Sato',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/groudon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Heather Lynch',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Miyuki Fukuda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Steve Davis',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blaziken.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason Chen',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/medicham.png',
    sprite2: '../../assets/sprites/lanturn.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/groudon.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Daniel Richard',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/shiftry.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Taylor Davis',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jesse Poms',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/metagross.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sami Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blaziken.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'William Chen',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Aaron Curry',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/blaziken.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Matthew Leblanc',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Paris Garavaglia',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/jumpluff.png',
    sprite2: '../../assets/sprites/gorebyss.png',
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
        cardImg: '../../assets/cards/e-reader/jumpluff.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/skiploom.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/hoppip.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/gorebyss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/clamperl.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.088.tv_reporter.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oaks-research.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/nurse.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/e-reader/warp-point.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/e-reader/crystal-shard.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/psychic-energy.jpg',
        "count": 5,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/rainbow-energy.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Behrad Hosseini',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/swampert.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dylan Langenstein',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alex Macri',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/machamp.png',
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
        cardImg: '../../assets/cards/2004-2006/machamp.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/machoke-body.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/machop-knuckle-punch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/delcatty.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/skitty.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.017.magneton.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magnemite-rollout.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oracle.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oaks-research.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.088.tv_reporter.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/wallys-training-e-reader.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/e-reader/switch.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.085.ancient_technical_machine_rock.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tomb.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/fighting-energy.jpg',
        "count": 8,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/boost-energy.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-old.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Stuart Benson',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Cristian Vidal',
    flag: '../../assets/flags/chile.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Michael Stevens',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'David Anderson',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Spencer Barth',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/machamp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Atsushi Katsumata',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Christopher Roberts',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  }
]

let juniors = [
  {
    firstName: 'Hayato Sato',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/groudon.png',
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
        cardImg: '../../assets/cards/2004-2006/ma.009.team_magmas_groudon.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmas-zangoose.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.008.team_magmas_claydol.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmas-baltoy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.019.team_magmas_camerupt.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmas-numel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/e-reader/underground-expedition.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.082.team_magma_conspirator.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.088.tv_reporter.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.070.team_magma_schemer.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.087.mr_brineys_compassion.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.073.maxie_.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.080.team_magma_ball.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/switch.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/warp-point.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/fighting-energy.jpg',
        "count": 6,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/psychic-energy.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.087.magma_energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/darkness-energy.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/rainbow-energy.jpg',
        "count": 2,,
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Reed Weichler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/swampert.png',
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
        cardImg: '../../assets/cards/2004-2006/swampert-water.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/swampert-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/marshtomp.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/mudkip.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/delcatty.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/skitty.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.017.magneton.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magnemite.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/wobbuffet-safegaurd.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/suicune-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/e-reader/oracle.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/elm-training-method.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/underground-expedition.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/wallys-training-e-reader.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/e-reader/fan-club.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oaks-research.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/e-reader/switch.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/potion.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/e-reader/water-energy.jpg',
        "count": 13,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Akira Miyazaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/groudon.png',
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
        cardImg: '../../assets/cards/2004-2006/ma.009.team_magmas_groudon.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmas-zangoose.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.008.team_magmas_claydol.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmas-baltoy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.019.team_magmas_camerupt.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmas-numel.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.088.tv_reporter.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/underground-expedition.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.082.team_magma_conspirator.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.073.maxie_.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/bills-maintenance.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.070.team_magma_schemer.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.087.mr_brineys_compassion.jpg',
        "count": 1,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rg.097.pokemon_reversal.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.080.team_magma_ball.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/switch.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/warp-point.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.088.desert_ruins.jpg',
        "count": 2,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/fighting-energy.jpg',
        "count": 7,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/psychic-energy.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/ma.087.magma_energy.jpg',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/darkness-energy.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/rainbow-energy.jpg',
        "count": 1,,
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Taylor Mitchell',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/swampert.png',
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
        cardImg: '../../assets/cards/2004-2006/swampert-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/swampert-water.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/marshtomp.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/mudkip.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ss.060.dunsparce.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oracle.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/hl.092.stevens_advice.png',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/dr.088.tv_reporter.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/oaks-research.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/copycat-e-reader.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/fisherman.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-e-reader.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/e-reader/fast-ball.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/master-ball.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/e-reader/warp-point.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2004-2006/island-cave.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/e-reader/water-energy.jpg',
        "count": 16,,
        oldCard: true
      }
    ]
  },
  {
    firstName: 'Takashi Yoneda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ukyo Kurashita',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'José Steven Eguia',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kyle Lathem',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Curran Hill',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andrew Krekeler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gardevoir.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kevin White',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jasper Van Bemmelen',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gorebyss.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tim Hornung',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/kyogre.png',
    sprite2: '../../assets/sprites/walrein.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jake Arnold',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jacob Burnside',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jasa Goonjov',
    flag: '../../assets/flags/slovakia.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dale Lynch',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'David Correale',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Arnoud Van Bemmelen',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/metagross.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jeffrey Wang',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Martina Canto',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Donovan Roybal-Archuleta',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Enrique Cross',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Nathan Crawford',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jefre Robert',
    flag: '../../assets/flags/belgium.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Michael Diaz',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Nathan Dalton',
    flag: '../../assets/flags/unknown.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Austin Cook',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Orion Craig',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Arron Sanyer',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ben Capriola',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jeremy Scharff-Kim',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
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
            document.querySelector('.playerName').innerHTML = item.firstName + " - 2004 Worlds";

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

              if (deck.oldCard === true) {
                pokeCard.classList.add('old-card')
              } 
              if (deck.radiusCard === true) {
                pokeCard.classList.add('radius-card')
              }
              if (deck.semiRadiusCard === true) {
                pokeCard.classList.add('semi-radius-card')
              }

              // cardSpace.forEach(card => {
              //   card.addEventListener('click', () => {
              //     pokeCard.classList.add('large-card')
              //   })
              // })

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2004 Worlds";

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          } 
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
          }
          // if (deck.semiRadiusCard === true) {
          //   pokeCard.classList.add('semi-radius-card')

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2004 Worlds";

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          } 
          if (deck.radiusCard === true) {
            pokeCard.classList.add('radius-card')
          }
          // if (deck.semiRadiusCard === true) {
          //   pokeCard.classList.add('semi-radius-card')

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
