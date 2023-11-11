const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Stephen Silvestro',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/beedrill.png',
    sprite2: '../../assets/sprites/luxray.png',
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
        cardImg: '../../assets/cards/2008-2010/beedrill-power.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/beedrill-band-atk.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/kakuna.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/weedle.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/grass-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/multi-energy-dp.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Sami Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/flygon.png',
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
        cardImg: '../../assets/cards/2008-2010/flygon-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch-power.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/machamp-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/machamp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/machoke.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/machop-kick.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ditto-dna.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucians-assignment.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/upper-energy.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Jay Hornung',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flygon.png',
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
        cardImg: '../../assets/cards/2008-2010/flygon-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rr.084.trapinch.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/machamp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/machoke.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/machop-kick.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/memory-berry-2009.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/upper-energy.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Koujiro Tsuruta',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/honchkrow.png',
    sprite2: '../../assets/sprites/toxicroak.png',
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
        cardImg: '../../assets/cards/2008-2010/honchkrow-sp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak-sp-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/skuntank-sp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/houndoom-sp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/galactic-hq.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/dp-darkness-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Fabien Garnier',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gyarados.png',
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
        cardImg: '../../assets/cards/2008-2010/gyarados.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/magikarp.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pachirisu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/registeel.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bucks-training.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-rescue.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-2007.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/switch-2007.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Tia Toppari',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/weavile.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sebastian Crema',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/palkia.png',
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
        cardImg: '../../assets/cards/2008-2010/flygon-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-orb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/switch-2007.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/memory-berry-2009.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bubble-coat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Diego Cassiraga ',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
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
        cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-downer-aterial.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mismagius.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/misdreavus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/raichu-sp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Karl Blake',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/weavile.png',
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
        cardImg: '../../assets/cards/2008-2010/flygon-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/weavile.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sneasel.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull-sillouette.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucians-assignment.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/dp-darkness-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Lars Andersen',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/gengar.png',
    sprite2: '../../assets/sprites/dusknoir.png',
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
        cardImg: '../../assets/cards/2008-2010/gengar-fainting-spell.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/haunter-hypnosis.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gastly.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sf.096.dusknoir_lv_x.jpg',
        "count": 1,,
        exCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/sf.001.dusknoir.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sf.034.dusclops.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucians-assignment.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-platinum.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Jayson Harry',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/palkia.png',
    sprite2: '../../assets/sprites/luxray.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alessio Parcianello ',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Nicolas Harle',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gyarados.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sho Sasaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/infernape.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Takuya Yamanaka',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/palkia.png',
    sprite2: '../../assets/sprites/luxray.png',
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
        cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-downer-aterial.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mismagius.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/misdreavus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Filipe Cardoso',
    flag: '../../assets/flags/portugal.png',
    sprite1: '../../assets/sprites/dialga.png',
    sprite2: '../../assets/sprites/palkia.png',
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
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/sp-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Tsuguyoshi Yamato',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/weavile.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Chris Fulop',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/machamp.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Khan Le',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/machamp.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andrew Vincze',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/machamp.png',
    sprite2: '../../assets/sprites/lumineon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Benjamin Angee',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/manectric.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Michael Chin',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/palkia.png',
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
        cardImg: '../../assets/cards/2008-2010/flygon-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/switch-2007.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/memory-berry-2009.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Anna Schipper',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Helga Helskens',
    flag: '../../assets/flags/belgium.png',
    sprite1: '../../assets/sprites/honchkrow.png',
    sprite2: '../../assets/sprites/toxicroak.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
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
        cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-downer-aterial.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mismagius.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/misdreavus.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/raichu-sp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/honchkrow-sp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Dante Lenell',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Drew Holton',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/machamp.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yuta Komatsuda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
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
        cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-downer-aterial.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/underground-expedition.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-capsule.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Kevin de Mooij',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Esa Juntunen',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Takuto Itagaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/honchkrow.png',
    sprite2: '../../assets/sprites/toxicroak.png',
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
        cardImg: '../../assets/cards/2008-2010/honchkrow-sp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak-sp-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/skuntank-sp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ditto-dna.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pachirisu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/galactic-hq.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/sp-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/multi-energy-dp.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'David Cohen',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/palkia.png',
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
        cardImg: '../../assets/cards/2008-2010/flygon-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-drawer-plus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/memory-berry-2009.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/upper-energy.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Nicholas Fotheringham',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/palkia.png',
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
        cardImg: '../../assets/cards/2008-2010/flygon-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/switch-2007.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/memory-berry-2009.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/fighting-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/upper-energy.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Miska Saari',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/infernape.png',
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
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/infernape-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/infernape-sp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ninetales.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vulpix-shiny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-capsule.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yuki Sogabe',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Edmund Kuras',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/palkia.png',
    sprite2: '../../assets/sprites/luxray.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dennis Mischitz',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/infernape.png',
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
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/infernape-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/infernape-sp.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ninetales.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vulpix-shiny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-capsule.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Zachary Mirman',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Hayato Takaoka',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Nathaniel Lawson',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/flygon.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Wataru Hasegawa',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alex Mairman',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/palkia.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Taylor Mitchell',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/infernape.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Lloyd Wenger',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/manectric.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jakob Droste',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/gengar.png',
    sprite2: '../../assets/sprites/machamp.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Steven Roberto',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  }
]

let juniors = [
  {
    firstName: 'Tsubasa Nakamura',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/honchkrow.png',
    sprite2: '../../assets/sprites/toxicroak.png',
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
        cardImg: '../../assets/cards/2008-2010/honchkrow-sp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak-sp-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/skuntank-sp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ditto-dna.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/galactic-hq.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/sp-energy.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Jason Martinez',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gengar.png',
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
        cardImg: '../../assets/cards/2008-2010/gengar-fainting-spell.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/haunter-smog.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gastly.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidorina-2008.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/zangoose.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-2008.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokedex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'William Shand',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/palkia.png',
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
        cardImg: '../../assets/cards/2008-2010/palkia-lvx-lost-cyclone.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palkia-sp.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-downer-aterial.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/honchkrow-sp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/banette.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/shuppet.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-radar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-capsule.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-capsule.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/psychic-energy-capsule.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/sp-energy.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Heikki Kettunen',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/infernape.png',
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
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/infernape-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/infernape-sp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ninetales.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vulpix-shiny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-capsule.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-capsule.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Takumi Kiyota',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/infernape.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Aaron Clarke',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jun Hasebe',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Isac Calmroth',
    flag: '../../assets/flags/sweden.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
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
            document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 Worlds";

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
              if (deck.oldCard === true) {
                pokeCard.classList.add('radius-card')
              }
              if (deck.exCard === true) {
                pokeCard.classList.add('ex-era-card')
              }
              if (deck.exCard === true) {
                pokeCard.classList.add('radius-card')
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 Worlds";

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
          if (deck.oldCard === true) {
            pokeCard.classList.add('radius-card')
          }
          if (deck.exCard === true) {
            pokeCard.classList.add('ex-era-card')
          }
          if (deck.exCard === true) {
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

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2009 Worlds";

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
