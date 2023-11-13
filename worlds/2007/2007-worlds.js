const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Tom Roos',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/absol.png',
    sprite2: '../../assets/sprites/eevee-no-heart.png',
    list: '../../assets/list-icon.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/absol-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/raqyuaza-ex-lightning.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mew-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jolteon-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/espeon-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/vaporeon-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/eevee-2007.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jolteon-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lickitung.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-voltorb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/elms-training-method.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/marys-request.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/super-scoop-up.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/giant-stump.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/2007-darkness-energy-special.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/2007-multi-energy.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Steffen From',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/magcargo.png',
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
        cardImg: '../../assets/cards/2007-2008/flygon-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/vibrava-grass.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/trapinch-grass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/magcargo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/slugma.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/nidoqueen-metal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/nidoran-metal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holons-magnemite.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/tv-reporter.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holons-farmer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-researcher.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point-2007.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/giant-stump.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/boost-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/react-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-2006.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Tsuguyoshi Yamato',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/empoleon.png',
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
        cardImg: '../../assets/cards/2007-2008/empoleon-ice-blade.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/corsola.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/infernape.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chimchar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-electrode.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holons-farmer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mr-briney-compassion.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2006.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cursed-stone.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-power-keepers.png',
        "count": 11,
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy-promo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-energy.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Yuki Akimura',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/scizor.png',
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
        cardImg: '../../assets/cards/2007-2008/scizor-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scyther-twin-play.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/elms-training-method.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/oaks-research.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pokedex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pluspower.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-removal-2.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pokemon-reversal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-shard-2007.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cursed-stone.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/special-metal-energy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/boost-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/cyclone-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Go Miyamoto',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/empoleon.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Austin Reed',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/castform.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Diego Cassiraga',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/banette.png',
    sprite2: '../../assets/sprites/vaporeon.png',
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
        cardImg: '../../assets/cards/2007-2008/banette-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/banette.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/shuppet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/vaporeon-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/umbreon-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/eevee-pop3.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jolteon-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/elms-training-method.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/tv-reporter.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-shard-2007.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/buffer-peice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/battle-fronteir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-power-keepers.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/2007-multi-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Sami Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/absol.png',
    sprite2: '../../assets/sprites/eevee-no-heart.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/lucario.png',
    sprite2: '../../assets/sprites/eevee-no-heart.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jeroen Robert',
    flag: '../../assets/flags/belgium.png',
    sprite1: '../../assets/sprites/electivire.png',
    sprite2: '../../assets/sprites/dragonite.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Cristian Vidal',
    flag: '../../assets/flags/chile.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/castform.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Steffen Eriksen',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/magcargo.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/castform.png',
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
        cardImg: '../../assets/cards/2007-2008/flygon-ex-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/flygon-grass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/vibrava-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/trapinch-grass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/exeggutor-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/exeggcute-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/sceptile-ex-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/treecko-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mew-fire.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mew-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/raqyuaza-ex-lightning.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chimecho-metal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holons-magnemite.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lanette-net-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-researcher.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holons-farmer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mr-briney-compassion.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/giant-stump.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/grass-energy-power-keepers.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/fire-energy-power-keepes.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/delta-rainbow-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Alex Brosseau',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/banette.png',
    sprite2: '../../assets/sprites/lucario.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Eric Craig',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/absol.png',
    sprite2: '../../assets/sprites/eevee-no-heart.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yee Wei Chun',
    flag: '../../assets/flags/liberia-malaysia.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/raichu.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jeffrey Young',
    flag: '../../assets/flags/new-zealand.png',
    sprite1: '../../assets/sprites/lucario.png',
    sprite2: '../../assets/sprites/eevee-no-heart.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Miguel Bernal',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/banette.png',
    sprite2: '../../assets/sprites/vaporeon.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/banette.png',
    sprite2: '../../assets/sprites/vaporeon.png',
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
        cardImg: '../../assets/cards/2007-2008/banette-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/banette.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/shuppet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/vaporeon-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/umbreon-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/eevee-pop3.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jolteon-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/elms-training-method.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/tv-reporter.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-shard-2007.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/buffer-peice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/battle-fronteir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-power-keepers.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/2007-multi-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Tatsuya Kadowaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/empoleon.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Gino Lombardi',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2007-2008/lucario.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/riolu.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gligar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/latios-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jirachi-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mew-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pluspower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point-2007.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/buffer-peice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-shard-2007.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cursed-stone.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/fighting-energy-power-keepers.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/2007-multi-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Simone Soldo',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/delcatty.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'John Kettler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/delcatty.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Gerardo Ángeles',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/raichu.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yuta Komatsuda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/banette.png',
    sprite2: '../../assets/sprites/solrock.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason Windham',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/castform.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Liz Reed',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/infernape.png',
    sprite2: '../../assets/sprites/delcatty.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Daniel Cohen',
    flag: '../../assets/flags/austria.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/rhyperior.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Evens Cheung',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/kingdra.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason Klaczynski',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/banette.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jeremy Maron',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/metagross.png',
    sprite2: '../../assets/sprites/dragonite.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Max Benczek',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/absol.png',
    sprite2: '../../assets/sprites/eevee-no-heart.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  }
]

let seniors = [
  {
    firstName: 'Jeremy Scharff-Kim',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/banette.png',
    sprite2: '../../assets/sprites/solrock.png',
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
        cardImg: '../../assets/cards/2007-2008/banette-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/banette.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/shuppet.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/solrock-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/solrock-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lunatone-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-electrode.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/elms-training-method.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/tv-reporter.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pokemon-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point-2007.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/buffer-peice.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-shard-2007.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/phoebes-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/old-energy/fighting-energy-power-keepers.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/cyclone-energy.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Akira Miyazaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/empoleon.png',
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
        cardImg: '../../assets/cards/2007-2008/empoleon-ice-blade.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/corsola.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-electrode.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holons-farmer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mr-briney-compassion.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2006.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cursed-stone.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-power-keepers.png',
        "count": 11,
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy-promo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-energy.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Wataru Hasegawa',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/empoleon.png',
    sprite2: '../../assets/sprites/marowak.png',
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
        cardImg: '../../assets/cards/2007-2008/empoleon-ice-blade.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/marowak-delta.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cubone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roselia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-electrode.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/absol-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/wally-training.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point-2007.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cursed-stone.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-power-keepers.png',
        "count": 11,
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy-promo.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Alexander DaCosta',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/castform.png',
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
        cardImg: '../../assets/cards/2007-2008/flygon-ex-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/flygon-grass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/vibrava-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/trapinch-grass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/exeggutor-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/exeggcute-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/sceptile-ex-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/treecko-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mew-fire.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mew-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/raqyuaza-ex-lightning.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/fearow-lightning.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/spearow.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chimecho-metal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-voltorb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-researcher.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/grass-energy-power-keepers.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/delta-rainbow-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Tomas Beltrame',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/delcatty.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Miska Saari',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/absol.png',
    sprite2: '../../assets/sprites/eevee-no-heart.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jeffrey Vernola',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/absol.png',
    sprite2: '../../assets/sprites/eevee-no-heart.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Geoffrey Sauk',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flareon.png',
    sprite2: '../../assets/sprites/ariados.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Bobby Malec',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/metagross.png',
    sprite2: '../../assets/sprites/meganium.png',
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
        cardImg: '../../assets/cards/2007-2008/metagross-psychic.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/metang-lightning.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/beldum-lightning.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/meganium-fightning.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/meganium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/bayleef-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chikorita-fighting.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/sceptile-ex-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/treecko-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mew-fire.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mew-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holons-magnemite.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-researcher.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holons-farmer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pluspower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Riona Doi',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/eevee-no-heart.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Peter Lind',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/magcargo.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tais Andersen',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/sceptile.png',
    sprite2: '../../assets/sprites/metagross.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Breton Bradner',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/machamp.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Keaton Gill',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lucario.png',
    sprite2: '../../assets/sprites/eevee-no-heart.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Benjamin Sauk',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/medicham.png',
    sprite2: '../../assets/sprites/banette.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Garrett Farrington',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flareon.png',
    sprite2: '../../assets/sprites/ariados.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  }
]

let juniors = [
  {
    firstName: 'Jun Hasebe',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/eevee-no-heart.png',
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
        cardImg: '../../assets/cards/2007-2008/flygon-ex-psychic.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/flygon-grass.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/vibrava-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/trapinch-grass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jolteon-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/vaporeon-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/eevee-metal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/absol-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/fearow-lightning.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/spearow.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/budew.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-voltorb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/elms-training-method.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-researcher.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/fieldworker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point-2007.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-shard-2007.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/power-tree.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Hiroki Yano',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/scizor.png',
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
        cardImg: '../../assets/cards/2007-2008/scizor-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scyther-twin-play.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-magneton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/marys-request.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/wally-training.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/elms-training-method.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/poke-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pluspower.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pokemon-reversal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-removal-2.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-shard-2007.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cursed-stone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/special-metal-energy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/boost-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/cyclone-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Andrew Lin Sun Choong',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/lucario.png',
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
        cardImg: '../../assets/cards/2007-2008/lucario.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/riolu.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/machamp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/machamp-body.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/machoke-karate-chop.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/machoke-steady-punch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/machop.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holons-farmer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-lass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mr-briney-compassion.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pluspower.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2006.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-root.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cursed-stone.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/fighting-energy-power-keepers.png',
        "count": 12,
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Paul Atanassov',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/flareon.png',
    sprite2: '../../assets/sprites/ariados.png',
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
        cardImg: '../../assets/cards/2007-2008/flareon-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/umbreon-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/espeon-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/eevee.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ariados.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/spinarak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/elms-training-method.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/marys-request.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/super-scoop-up.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/great-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2007-2008/master-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-removal-2.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pokemon-reversal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point-2007.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-shard-2007.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2007-2008/full-flame.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/grass-energy-power-keepers.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/old-energy/2007-multi-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Arnoud Van Bemmelen',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Vy Le',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/scizor.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Anna Reimer',
    flag: '../../assets/flags/sweden.png',
    sprite1: '../../assets/sprites/machamp.png',
    sprite2: '../../assets/sprites/lucario.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Maito Nakai',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Fares Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/flareon.png',
    sprite2: '../../assets/sprites/ariados.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Gunter VanRoey',
    flag: '../../assets/flags/belarus.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Boyce Forrest',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Henry Leaming',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Thomas Arena',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'David Shoyket',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alejo Salvador',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tony Anderson',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
        deckid: "eee",
    event: "eeee",
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008',
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
            document.querySelector('.playerName').innerHTML = item.firstName + " - 2007 Worlds";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2007 Worlds";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2007 Worlds";

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
