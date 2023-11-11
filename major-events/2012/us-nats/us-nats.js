const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'John Roberts II',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/klinklang.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2014-2016/klinklang-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/klang-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/klink-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/groudon-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/kyogre-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex-nxd.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/cobalion-nvi.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/heavy-ball-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rare-candy-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-catcher.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/random-receiver.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-communication-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-metal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kevin Nance',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eelektross-nvi.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eelektrik.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tynamo-nvi.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tynamo-dex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/zekrom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/raikou-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/max-potion-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/super-rod-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Jay Hornung',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ultra-ball-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dark-patch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        "count": 10,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Chris Murray',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/celebi.png',
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
        cardImg: '../../assets/cards/2010-2012/celebi-prime.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tornadus-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/super-scoop-up.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-grass.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Ashon Haswell',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tom Dolezal',
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
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dark-patch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ultra-ball-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        "count": 10,
      },
      {
        cardImg: '../../assets/cards/energy/darkness-energy-hgss.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Breton Brander',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
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
         cardImg: '../../assets/cards/2014-2016',
         "count": 4,
       },
     ]
  },
  {
    firstName: 'Carl Scheu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tornadus-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dark-patch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ultra-ball-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/potion-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/super-scoop-up.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/super-rod-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Harrison Leven',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/chandelure.png',
    sprite2: '../../../assets/sprites/accelgor.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/mew-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/accelgor.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/chandelure.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/lampent.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/litwick.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/vileplume.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/oddish.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/relicanth.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pichu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-dark.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dylan Bryan',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mismagius.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/mismagius.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/misdreavus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/vileplume.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/gloom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/oddish.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/kyurem-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin-ex-nxd.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/virizion.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/unown-cure.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/seeker.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/black-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/opke-center.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Stephen Clark',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
    sprite2: '../../../assets/sprites/unown-a.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jeremy Jallen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eelektrik.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tynamo-nvi.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tynamo-dex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/zekrom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/raikou-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/max-potion-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/super-rod-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Dallan Fell',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/celebi.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'John Kettler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/chandelure.png',
    sprite2: '../../../assets/sprites/accelgor.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Toby Natale',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zekrom.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Simon Narode',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alan Schell',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alex Frezza',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason Klaczynski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/scizor.png',
    sprite2: '../../../assets/sprites/vileplume.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Edmund Kuras',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/vanilluxe.png',
    sprite2: '../../../assets/sprites/vileplume.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Erik Nance',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Stephon Robinson',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/celebi.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Nicholas Baker',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zekrom.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kevin Kobayashi',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zekrom.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jimmy Ballard',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/scizor.png',
    sprite2: '../../../assets/sprites/vileplume.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/scizor-prime.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/scyther-air-slash.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/vileplume.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/oddish.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/darkrai-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/virizion.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/terrakion-emp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin-ex-nxd.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/unown-cure.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/seeker.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cheren.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-metal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/special-metal-energy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/prism-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Bohdan Pelekh',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/kyurem.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012/kyurem.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/kyurem-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/kyogre-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/super-scoop-up.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/max-potion-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/super-rod-bw.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/exp-share.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/bw-energy-water.png',
        "count": 9,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-bw.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Jacob Rebescher',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Caleb Cline',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/celebi.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Christopher Nguyen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zekrom.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kennan Mell',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zekrom.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Zachary Mirman',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zekrom.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Ty Wheeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/terrakion.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason Martinez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sean Hipp',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Brandon Smiley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jeremy Gibson',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alan-luc Nguyen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/terrakion.png',
    sprite2: '../../../assets/sprites/eelektrik.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Seth Hanslik',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/landorus.png',
    sprite2: '../../../assets/sprites/terrakion.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kaitlyn Young',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Ian Robb',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jonathan Croxton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/celebi.png',
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
        cardImg: '../../assets/cards/2010-2012/celebi-prime.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/terrakion-nvi.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/mewtwo-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/n-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/random-receiver.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-catcher.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-search.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/super-rod-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/eviolite.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/skyarrow-bridge.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-grass.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        "count": 5,
      },
    ]
  },
  {
    firstName: 'Daniel Sargent',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Natalia Routhier',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Anthony Menchaca',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/celebi.png',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Morgan Davies',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Shane K-Burke',
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
        cardImg: '../../assets/cards/2014-2016',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Michael Catron',
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
        cardImg: '../../assets/cards/2014-2016',
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2012 US Nats";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2012 US Nats";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2012 US Nats";

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
