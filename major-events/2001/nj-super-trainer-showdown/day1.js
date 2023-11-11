const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Jeremy Borchardt',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/steelix.png',
    sprite2: '../../../assets/sprites/slowking.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/base-fossil/g2.015.rockets_zapdos.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.014.slowking.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.073.slowpoke.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.015.steelix.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.069.onix_.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.024.murkrow.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.082.wooper.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.067.brocks_mankey.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.126.warp_point.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.085.energy_charge.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.102.chaos_gym.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.084.ecogym.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
        "count": 9,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.019.metal_energy.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.080.rainbow_energy.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.105.recycle_energy.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        "count": 1,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Chris Fulop',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Ben Zoz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/steelix.png',
    sprite2: '../../../assets/sprites/zapdos.png',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Jason Klaczynski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/typhlosion.png',
    sprite2: '../../../assets/sprites/arcanine.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/base-fossil/n1.017.typhlosion.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.046.quilava.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.057.cyndaquil.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.001.blaines_arcanine.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.062.blaines_growlithe.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.030.clefairy.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.075.giovannis_nidoran_female.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.116.master_ball.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.017.blaine.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.113.cinnabar_city_gym.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
        "count": 15,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.019.metal_energy.jpg',
        "count": 2,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Andrés Rodriquez',
    flag: '../../../assets/flags/usa.png', // https://www.pojo.com/Features/ECSTS2001/ECSTS-Feraligatr-A.Rodriquez.htm
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/base-fossil/n1.005.feraligatr.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.032.croconaw.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.081.totodile.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.022.elekid.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.023.magby_.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.104.the_rockets_training_gym.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.124.narrow_gym.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        "count": 15,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        "count": 1,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Alvin Leu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Bruce Long',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/victreebel.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/base-fossil/g1.026.erikas_victreebel.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.049.erikas_weepinbell.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.038.erikas_bellsprout.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.024.murkrow.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.036.igglybuff.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.109.erikas_maids.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.110.erikas_perfume.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.102.chaos_gym.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.099.grass_energy.jpg',
        "count": 14,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.080.rainbow_energy.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.105.recycle_energy.jpg',
        "count": 1,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Thian Hoang',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Josh Goldstein',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/base-fossil/n1.005.feraligatr.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.032.croconaw.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.081.totodile.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.082.wooper.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.067.brocks_mankey.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.030.clefairy.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.023.magby_.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.104.the_rockets_training_gym.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        "count": 17,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Phil Mondiello',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/steelix.png',
    sprite2: '../../../assets/sprites/slowking.png',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Chris Peditto',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Jared Passanante',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Daniel Deardoff',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arcanine.png',
    sprite2: '../../../assets/sprites/slowking.png',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Matt Toeniskoetter',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Chris Vilches',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Jimmy O’Brien',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/steelix.png',
    sprite2: '../../../assets/sprites/slowking.png',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Maccy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/steelix.png',
    sprite2: '../../../assets/sprites/zapdos.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/base-fossil/n1.015.steelix.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.069.onix_.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.015.rockets_zapdos.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.023.magby_.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.082.wooper.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.100.erika_.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.125.sabrinas_gaze.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.098.brock_.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.084.ecogym.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
        "count": 9,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.019.metal_energy.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.080.rainbow_energy.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.081.full_heal_energy.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.105.recycle_energy.jpg',
        "count": 1,,
        oldCard: true
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Paul Lamancusa',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/arcanine.png',
    sprite2: '../../../assets/sprites/rapidash.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/base-fossil/g2.001.blaines_arcanine.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.062.blaines_growlithe.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.033.blaines_rapidash.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.063.blaines_ponyta.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/blaines-kangaskhan.png',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.017.blaine.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.089.super_energy_retrieval.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
        "count": 20,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Mindy Lambkee',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/feraligatr.png',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Kevin Yauy',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Ryan Lucero',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Kevin Hossain',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Jonathan Brooks',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blastoise.png',
    sprite2: '../../../assets/sprites/steelix.png',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Jacob Vilches',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Nathaniel Allen',
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
        cardImg: '../../assets/cards/base-fossil',
        "count": 4,,
        oldCard: true
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2001 NJ STS";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2001 NJ STS";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2001 NJ STS";

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
