const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Chris Fulop',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/absol.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jay Hornung',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/scizor.png',
    sprite2: '../../../assets/sprites/metagross.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/metang-lightning.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/beldum-lightning.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scizor-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scyther-twin-play.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/nidoqueen-metal.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/nidorina.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/nidoran-metal.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2004-2006/latios-star.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castform.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holons-magnemite.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/elms-training-method.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-researcher.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2006.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pokemon-reversal.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pluspower.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        "count": 8,,
      },
      {
        cardImg: '../../assets/cards/old-energy/special-metal-energy-2006.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'John Silvestro',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flareon.png',
    sprite2: '../../../assets/sprites/ariados.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jolteon-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/umbreon-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/eevee-2007.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/ariados.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/spinarak.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-electrode.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/elms-training-method.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/marys-request.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holons-farmer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/super-scoop-up.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/giant-stump.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/old-energy/grass-energy-power-keepers.png',
        "count": 6,,
      },
      {
        cardImg: '../../assets/cards/old-energy/fire-energy-power-keepes.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/old-energy/2007-multi-energy.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Rob Downs',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/raqyuaza-ex-lightning.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/latios-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/latias.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lickitung.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mew-star.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/espeon.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/eevee-e-evolution.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2004-2006/lunatone.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/solrock-fighting.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/marys-request.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lanette-net-search.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/energy-removal-2.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pokemon-reversal.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point-2007.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/balloon-berry.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2004-2006/em.080.oran_berry.jpg',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cursed-stone.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/giant-stump.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-power-keepers.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-power-keepers.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/old-energy/fire-energy-power-keepes.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/old-energy/2007-multi-energy.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/old-energy/delta-rainbow-energy.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Shawn Gettys',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/electivire.png',
    sprite2: '../../../assets/sprites/dragonite.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ian Brander',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/machamp.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/machamp.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/machoke-karate-chop.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/machop.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/gligar.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/nidoqueen-metal.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/nidoran-metal.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/absol-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2006.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pluspower.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-shard-2007.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/old-energy/fighting-energy-power-keepers.png',
        "count": 11,,
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-energy.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Alex Brosseau',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/banette.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2007-2008/banette.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/shuppet.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/solrock-fighting.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lunatone-fighting.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/jolteon-star.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/tv-reporter.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/elms-training-method.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pokemon-reversal.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/buffer-peice.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-beach.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-power-keepers.png',
        "count": 11,,
      },
      {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-2006.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/old-energy/cyclone-energy.png',
        "count": 2,,
      },
    ]
  },
  {
    firstName: 'Eric Craig',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/absol.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Michael Chin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/marowak.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2007-2008/marowak-delta.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cubone.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roselia.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-magneton.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/wally-training.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/stevens-advice.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point-2007.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/strangth-charm.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/uf.080.curse_powder.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2007-2008/cursed-stone.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-power-keepers.png',
        "count": 11,,
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy-promo.png',
        "count": 3,,
      },
    ]
  },
  {
    firstName: 'Nick K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/lucario.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Adam Capriola',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/vaporeon.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Aaron Curry',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/marowak.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2007-2008/marowak-delta.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cubone.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roselia.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-magneton.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/wally-training.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point-2007.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/uf.080.curse_powder.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2007-2008/cursed-stone.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-power-keepers.png',
        "count": 11,,
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy-promo.png',
        "count": 3,,
      },
    ]
  },
  {
    firstName: 'Adam Vernola',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/infernape.png',
    sprite2: '../../../assets/sprites/delcatty.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [

      {
        cardImg: '../../assets/cards/2007-2008/diamond_pearl_promos.DP10.infernape_lv_x.jpg',
        "count": 1,,
        exCard: true
      },
      {
        cardImg: '../../assets/cards/2007-2008/infernape.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/monferno.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/chimchar.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cg.091.delcatty_ex.jpg',
        "count": 1,,
        exCard: true
      },
      {
        cardImg: '../../assets/cards/2007-2008/delcatty-power.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/skitty.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/budew.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lm.026.spinda.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-lass.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holons-farmer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2006.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/windstorm.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/old-energy/fire-energy-power-keepes.png',
        "count": 12,,
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-energy.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Jayson Harry',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/castform.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tom W ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/machamp.png',
    sprite2: '../../../assets/sprites/lucario.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Emmanuel Divens',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/machamp.png',
    sprite2: '../../../assets/sprites/lucario.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Brian J',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/lucario.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jey J',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/kingler.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Paul J',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/marowak.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jimmy Ballard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/marowak.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/prinplup.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/piplup.png',
        "count": 4,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2007-2008/marowak-delta.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cubone.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/roselia.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-magneton.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/celios-network.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/wally-training.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/copycat.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/scott.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/warp-point-2007.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cursed-stone.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-power-keepers.png',
        "count": 11,,
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy-promo.png',
        "count": 3,,
      },
    ]
  },
  {
    firstName: 'Peter Ortiz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/flygon.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alex W ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/marowak.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Gino Lombardi',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/lucario.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'James R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/latias.png',
    sprite2: '../../../assets/sprites/latios.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Pedro G',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rhyperior.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Michael B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/marowak.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Leo O',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rhyperior.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'David C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/absol.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Chris S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/infernape.png',
    sprite2: '../../../assets/sprites/delcatty.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Heidi Craig',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/banette.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/infernape.png',
    sprite2: '../../../assets/sprites/delcatty.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Glen Priest',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/banette.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Daniel Chin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/infernape.png',
    sprite2: '../../../assets/sprites/delcatty.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Garrett Farrington',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/marowak.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jeremy S-Kim',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/marowak.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jeffrey Vernola',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/exeggutor.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'James Ballard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/infernape.png',
    sprite2: '../../../assets/sprites/delcatty.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andy M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/metagross.png',
    sprite2: '../../../assets/sprites/dragonite.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Joe G ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/medicham.png',
    sprite2: '../../../assets/sprites/banette.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Justin C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/exeggutor.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Patrick T ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/machamp.png',
    sprite2: '../../../assets/sprites/lucario.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2007-2008/machamp.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/machamp-body.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/machoke-steady-punch.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/machop.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/lucario.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/riolu.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/castaway.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-adventurer.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-mentor.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-scientist.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-lass.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/mr-briney-compassion.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/holon-transceiver.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/pluspower.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/rare-candy-2006.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cessation-crystal.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/crystal-shard-2007.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2007-2008/cursed-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/old-energy/fighting-energy-power-keepers.png',
        "count": 13,,
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-energy.png',
        "count": 2,,
      },
    ]
  },
  {
    firstName: 'Christian L',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/flygon.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Forrest G',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/shiftry.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'John H ',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kevin White',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png', four corners?
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Nicholas K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/raichu.png',
    sprite2: '../../../assets/sprites/exeggutor.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Zane N',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/shiftry.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Wesley B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/shiftry.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Tristan Robinson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/castform.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason Peirce',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/castform.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Steven Roberto',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/shiftry.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Thomas Arena',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tim Hornung',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/castform.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'David S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/castform.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ty Wheeler',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ben D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/infernape.png',
    sprite2: '../../../assets/sprites/delcatty.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tad M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/empoleon.png',
    sprite2: '../../../assets/sprites/eevee-no-heart.png',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'David R',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Daniel A',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Mason C',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Brian H',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason D',
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
        cardImg: '../../assets/cards/2007-2008',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Miranda E',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/flygon.png',
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2007 US Nats";

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          if (deck.exCard === true) {
            pokeCard.classList.add('ex-era-card')
          }
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2007 US Nats";

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          if (deck.exCard === true) {
            pokeCard.classList.add('ex-era-card')
          }
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2007 US Nats";

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

          if (deck.oldCard === true) {
            pokeCard.classList.add('old-card')
          }
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          if (deck.exCard === true) {
            pokeCard.classList.add('ex-era-card')
          }
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
