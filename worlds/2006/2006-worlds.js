const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Jason Klaczynski',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mew.png',
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
        cardImg: '../../assets/cards/2004-2006/mew-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/manectric-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/electrike.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/deoxys-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/regirock-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/roselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/girafarig.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-magneton.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/elms-training-method.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/tv-reporter.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/marys-request.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dual-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/battle-fronteir.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/cursed-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-holon-phantoms.png',
        "count": 11,
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Jimmy Ballard',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/eevee-no-heart.png',
    sprite2: '../../assets/sprites/pidgeot.png',
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
        cardImg: '../../assets/cards/2004-2006/flareon-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/umbreon-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/espeon-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/vaporeon-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jolteon-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/eevee-2007.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-electrode.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/elms-training-method.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/bills-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/surprise-time-machine.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/strength-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/giant-stump.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/full-flame.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-holon-phantoms.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/fire-energy-holon-phantoms.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/holon-energy-wp.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/holon-energy-ff.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Jeremy Maron',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/nidoqueen.png',
    sprite2: '../../assets/sprites/houndoom.png',
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
        cardImg: '../../assets/cards/2004-2006/nidoqueen-fighting.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/nidorina-grass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/nidoran-f-grass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot-delta.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/houndoom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/houndour.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-electrode.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/spcae-center.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/grass-energy-holon-phantoms.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/holon-energy-gl.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/warp-energy.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Yuta Komatsuda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/metagross.png',
    sprite2: '../../assets/sprites/dragonite.png',
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
        cardImg: '../../assets/cards/2004-2006/metagross-delta.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/metagross-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/metang.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/beldum.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dragonite-delta.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dragonair.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dratini.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-reversal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/warp-point.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-ruins.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-holon-phantoms.png',
        "count": 10,
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-holon-phantoms.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/special-metal-energy-2006.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Alex Brosseau',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/dragonite.png',
    sprite2: '../../assets/sprites/electrode.png',
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
        cardImg: '../../assets/cards/2004-2006/dark-dragonite.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-dragonair.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dratini-dragon-song.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-electrode.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/voltorb.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/sneasel-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/scyther-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/solrock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/lunatone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/mr-briney-compassion.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/tr.089.rockets_poke_ball.jpg',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-hideout.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/2007-darkness-energy-special.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/r-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/dark-metal-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-2006.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Eric Craig',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mew.png',
    sprite2: '../../assets/sprites/manectric.png',
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
    firstName: 'Takuya Yoneda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/metagross.png',
    sprite2: '../../assets/sprites/dragonite.png',
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
        cardImg: '../../assets/cards/2004-2006/metagross-delta.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/metang-lightning.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/beldum-lightning.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dragonite-delta.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dragonair.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dratini.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/castform.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-researcher.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-farmer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-reversal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/island-cave.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-holon-phantoms.png',
        "count": 10,
      },
      {
        cardImg: '../../assets/cards/old-energy/special-metal-energy-2006.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/ludicolo.png',
    sprite2: '../../assets/sprites/magcargo.png',
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
    firstName: 'Jaime Guerrero',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/tyranitar.png',
    sprite2: '../../assets/sprites/ampharos.png',
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
    firstName: 'Stephen Silvestro',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flareon.png',
    sprite2: '../../assets/sprites/ariados.png',
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
    firstName: 'Tomohisa Kanda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/tyranitar.png',
    sprite2: '../../assets/sprites/electrode.png',
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
        cardImg: '../../assets/cards/2004-2006/dark-tyranitar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-tyranitar-body.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-pupitar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/larvitar.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/electrode-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/voltorb-thunder-wave.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/cursed-stone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/fighting-energy-holon-phantoms.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/2007-darkness-energy-special.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/warp-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-2006.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Erik Nance',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/metagross.png',
    sprite2: '../../assets/sprites/dragonite.png',
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
        cardImg: '../../assets/cards/2004-2006/metagross-delta.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/metagross-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/metang-lightning.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/metang-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/beldum-lightning.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dragonite-delta.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dragonair.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dratini.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/castform.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rayquaza-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/mewtwo-delta.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-adventurer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-researcher.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-farmer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/fluffy-berry.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-holon-phantoms.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/old-energy/special-metal-energy-2006.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Yohei Takeda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
    firstName: 'Yacine Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2004-2006/arcanine-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/growlith.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/lunatone.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/solrock.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-electrode.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/elms-training-method.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/marys-request.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-reversal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/energy-removal-2.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/cursed-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/battle-fronteir.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/fire-energy-holon-phantoms.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/old-energy/react-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Aurelien Delambre',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/arcanine.png',
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
    firstName: 'Ian Ryave',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
    firstName: 'Sebastian Crema',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/tyranitar.png',
    sprite2: '../../assets/sprites/electrode.png',
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
        cardImg: '../../assets/cards/2004-2006/dark-tyranitar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-pupitar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/larvitar-fire.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/electrode-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/voltorb-thunder-wave.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/lunatone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/solrock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/castform.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rayquaza-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/elms-training-method.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-lass.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/tr.089.rockets_poke_ball.jpg',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/protective-orb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/fire-energy-holon-phantoms.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-holon-phantoms.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/2007-darkness-energy-special.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/holon-energy-ff.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Chris Fulop',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
        cardImg: '../../assets/cards/2004-2006/lugia-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/blastoise-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/wartortle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/squirtle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/steelix-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/onix.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi-dual.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/mew-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/celebi-ex-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/latias-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/latias-fire-body.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/latios-water.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/castform.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-electrode.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/elms-training-method.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-farmer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/vs-seeker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/spcae-center.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/giant-stump.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/power-tree.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-holon-phantoms.png',
        "count": 7,
      }
    ]
  },
  {
    firstName: 'Kyle Sabelhaus',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
    firstName: 'Gordon Coates',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/dragonite.png',
    sprite2: '../../assets/sprites/electrode.png',
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
        cardImg: '../../assets/cards/2004-2006/dark-dragonite.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-dragonair.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dratini-dragon-song.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-electrode.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/voltorb.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/sneasel-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/scyther-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/lunatone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/solrock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/regirock-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/mew-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/castform.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-lass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/tr.089.rockets_poke_ball.jpg',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/2007-darkness-energy-special.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/dark-metal-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/r-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-2006.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/banette.png',
    sprite2: '../../assets/sprites/medicham.png',
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
        cardImg: '../../assets/cards/2004-2006/banette-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/shuppet.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/medicham-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/meditite.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/lunatone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/solrock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/roselia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-magneton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-magnemite.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/castform.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/elms-training-method.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/tv-reporter.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-adventurer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/battle-fronteir.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-holon-phantoms.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/warp-energy.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Kevin Nance',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/metagross.png',
    sprite2: '../../assets/sprites/dragonite.png',
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
        cardImg: '../../assets/cards/2004-2006/metagross-delta.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/metagross-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/metang-lightning.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/metang-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/beldum-lightning.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dragonite-delta.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dragonair.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dratini.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/castform.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rayquaza-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/mewtwo-delta.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-adventurer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-researcher.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-farmer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/fluffy-berry.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/lightning-energy-holon-phantoms.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/old-energy/special-metal-energy-2006.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Bin Xiu',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
    firstName: 'Mike Fouchet',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/tyranitar.png',
    sprite2: '../../assets/sprites/electrode.png',
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
        cardImg: '../../assets/cards/2004-2006/dark-tyranitar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-pupitar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-pupitar-explosive.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/larvitar-fire.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/electrode-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/voltorb-thunder-wave.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/lunatone.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/solrock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/magmar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/castform.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rayquaza-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/elms-training-method.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-lass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/tr.089.rockets_poke_ball.jpg',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/fire-energy-holon-phantoms.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/2007-darkness-energy-special.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/holon-energy-ff.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Gino Lombardi',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/machoke.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/machop.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-hypno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/drowzee.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/lanette-net-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/warp-point.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/fighting-energy-holon-phantoms.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/boost-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Evens Cheung',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/metagross.png',
    sprite2: '../../assets/sprites/dragonite.png',
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
    firstName: 'Yuichiro Kataoka',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/tyranitar.png',
    sprite2: '../../assets/sprites/electrode.png',
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
    firstName: 'Drew Gruitzky',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
        cardImg: '../../assets/cards/2004-2006/lugia-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/blastoise-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/wartortle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/squirtle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/steelix-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/onix-tunneling.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi-dual.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/porygon2.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/porygon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/mew-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/celebi-ex-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/castform.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-magnemite.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/power-tree.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/giant-stump.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/island-cave.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-holon-phantoms.png',
        "count": 8,
      }
    ]
  },
  {
    firstName: 'Ivan Zaldivar',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
    firstName: 'Alex Wooton',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/nidoqueen.png',
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
        cardImg: '../../assets/cards/2004-2006/nidoqueen-fighting.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/nidorina-grass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/nidoran-f-grass.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot-delta.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey-lightning.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/milotic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/feebas.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-electrode.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/lanette-net-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/mr-briney-compassion.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/vs-seeker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/magnetic-storm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/grass-energy-holon-phantoms.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/holon-energy-gl.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/rainbow-energy-2006.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'John Kettler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/ludicolo.png',
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
        cardImg: '../../assets/cards/2004-2006/ludicolo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/lombre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/lotad.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/plusle.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/magcargo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/slugma.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/aipom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/mr-briney-compassion.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/warp-point.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/strength-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/solid-rage.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/battle-fronteir.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-holon-phantoms.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy-promo.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/holon-energy-wp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Ken Yukuhiro',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/eevee-no-heart.png',
    sprite2: '../../assets/sprites/pidgeot.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2004-2006',
        "count": 4,
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Miska Saari',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/lunatone.png',
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
        cardImg: '../../assets/cards/2004-2006/lunatone-fighting.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/lunatone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/solrock-psychic.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/solrock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/girafarig.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/marys-request.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-farmer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/energy-removal-2.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/great-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/warp-point.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/energy-root.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/cursed-stone.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/fighting-energy-holon-phantoms.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/old-energy/psychic-energy-holon-phantoms.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/holon-energy-ff.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'David Booij',
    flag: '../../assets/flags/netherlands.png',
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
        cardImg: '../../assets/cards/2004-2006/flareon-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/espeon-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/eevee-2007.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ariados.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/spinarak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-electrode.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/marys-request.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/elms-training-method.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/energy-removal-2.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/super-scoop-up.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/great-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/battle-fronteir.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/giant-stump.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/grass-energy-holon-phantoms.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/old-energy/fire-energy-holon-phantoms.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Tad Wheeler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
        cardImg: '../../assets/cards/2004-2006/lugia-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/blastoise-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/wartortle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/squirtle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/steelix-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/onix.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi-dual.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/latias-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/blissey-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/chansey.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/castform.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-magneton.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-magnemite.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-adventurer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/elms-training-method.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-lass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/power-tree.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/island-cave.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-holon-phantoms.png',
        "count": 9,
      }
    ]
  },
  {
    firstName: 'Austin Reed',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/ludicolo.png',
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
        cardImg: '../../assets/cards/2004-2006/ludicolo.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/lombre.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/lotad.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/magcargo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/magcargo-body.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/slugma.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/castform.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/warp-point.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/switch.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/surprise-time-machine.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/battle-fronteir.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-holon-phantoms.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy-promo.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Matthew Lambou',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
    firstName: 'Kit Wai Lim',
    flag: '../../assets/flags/liberia-malaysia.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/nidoqueen.png',
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
    firstName: 'Wesley Bartlett',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/banette.png',
    sprite2: '../../assets/sprites/medicham.png',
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
    firstName: 'Elissa Hill',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
    firstName: 'Joe Getsy',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/banette.png',
    sprite2: '../../assets/sprites/medicham.png',
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
    firstName: 'Bobby Malec',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
        cardImg: '../../assets/cards/2004-2006/lugia-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/blastoise-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/wartortle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/squirtle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/steelix-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/onix.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi-dual.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/mew-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/latias-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/latias-fire-body.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/latios-lightning.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/castform.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-electrode.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-voltorb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/elms-training-method.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/swoop-teleporter.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/power-tree.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/giant-stump.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/island-cave.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-holon-phantoms.png',
        "count": 7,
      }
    ]
  },
  {
    firstName: 'Jeff Sharp',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/tyranitar.png',
    sprite2: '../../assets/sprites/ampharos.png',
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
        cardImg: '../../assets/cards/2004-2006/dx.009.jirachi.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-tyranitar-body.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-tyranitar.png',
        "count": 1,
      },
      // {
      //   cardImg: '../../assets/cards/2004-2006/dark-pupitar-explosive.png',
      //   "count": 1,
      // },
      {
        cardImg: '../../assets/cards/2004-2006/larvitar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-ampharos.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/dark-flaaffy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/mareep-tackle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-adventurer.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/mr-briney-compassion-e-reader.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/desert-ruins.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-tricky-gym.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/darkness-energy-e-reader.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/old-energy/double-rainbow-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/scramble-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/old-energy/heal-energy.png',
        "count": 2,
      },
       {
        cardImg: '../../assets/cards/energy/question-mark.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Keaton Gill',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/raichu.png',
    sprite2: '../../assets/sprites/exeggutor.png',
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
    firstName: 'Antoine Nicolle',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/mew.png',
    sprite2: '../../assets/sprites/manectric.png',
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
    firstName: 'Will Berry',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/nidoqueen.png',
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
    firstName: 'Matt Sbaa',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/raichu.png',
    sprite2: '../../assets/sprites/exeggutor.png',
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
    firstName: 'Jesus Fernandez',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mew.png',
    sprite2: '../../assets/sprites/manectric.png',
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
    firstName: 'Hiroki Yano',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
        cardImg: '../../assets/cards/2004-2006/lugia-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/blastoise-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/wartortle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/squirtle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/steelix-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/onix-horn-rush.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/latias-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/plusle.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-magneton.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-electrode.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/celios-network.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/elms-training-method.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/warp-point.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/power-tree.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-holon-phantoms.png',
        "count": 11,
      }
    ]
  },
  {
    firstName: 'Spencer Duncan',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
        cardImg: '../../assets/cards/2004-2006/lugia-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/blastoise-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/wartortle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/squirtle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/steelix-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/onix-tunneling.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi-dual.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/porygon2.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/porygon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ditto-mr-mime.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-electrode.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/castform.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/elms-training-method.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-adventurer.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pow-hand-extension.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/power-tree.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/island-cave.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-holon-phantoms.png',
        "count": 8,
      }
    ]
  },
  {
    firstName: 'Arnoud Van Bemmelen',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
        cardImg: '../../assets/cards/2004-2006/lugia-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/blastoise-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/wartortle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/squirtle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/steelix-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/onix.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeot.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgeotto.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pidgey.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/jirachi-dual.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/latias-star.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/castform.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-magneton.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/elms-training-method.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-mentor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-scientist.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/stevens-advice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rare-candy-2006.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/holon-transeiver.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/pokemon-retriever.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/switch.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ancient-tech-machine-rock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2004-2006/power-tree.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/giant-stump.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/water-energy-holon-phantoms.png',
        "count": 8,
      }
    ]
  },
  {
    firstName: 'Fares Sekkoum',
    flag: '../../assets/flags/uk.png',
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
        cardImg: '../../assets/cards/2004-2006/flareon-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/eevee-2007.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/ariados.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/spinarak.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/marys-request.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/elms-training-method.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/rockets-admin.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2004-2006/scott.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2004-2006/energy-removal-2.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/super-scoop-up.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/great-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/battle-fronteir.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2004-2006/full-flame.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/old-energy/grass-energy-holon-phantoms.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/old-energy/fire-energy-holon-phantoms.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/old-energy/multi-energy-e-reader.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Henry Leaming',
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
    firstName: 'James Ballard',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
    firstName: 'Matthew Kimmerer',
    flag: '../../assets/flags/canada.png',
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
    firstName: 'Troy Officer',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/raichu.png',
    sprite2: '../../assets/sprites/exeggutor.png',
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
    firstName: 'Kazuho Mizuta',
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
    firstName: 'Tad Miller',
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
    firstName: 'Shakil Bhuiyan',
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
    firstName: 'Spencer Brown',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/exeggutor.png',
    sprite2: '../../assets/sprites/electrode.png',
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
    firstName: 'Joona Kuusrainen',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/arcanine.png',
    sprite2: '../../assets/sprites/eevee-no-heart.png',
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
    firstName: 'Sanne Van der Vis',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/flygon.png',
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
    firstName: 'Phillip Yarbrough',
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
    firstName: 'Jon Siu',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/lugia.png',
    sprite2: '../../assets/sprites/blastoise.png',
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
            document.querySelector('.playerName').innerHTML = item.firstName + " - 2006 Worlds";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2006 Worlds";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2006 Worlds";

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
