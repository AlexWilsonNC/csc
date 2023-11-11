const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Eric Brooks',
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
        cardImg: '../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.023.magby_.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.022.elekid.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.124.narrow_gym.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.104.the_rockets_training_gym.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        "count": 17,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.081.full_heal_energy.jpg',
        "count": 1,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Drew Holton',
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
        cardImg: '../../assets/cards/base-fossil/n3.027.suicune.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.022.elekid.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.086.focus_band.jpg',
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
        "count": 1,,
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
    firstName: 'Tom Liesegang',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/espeon.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/base-fossil/n3.019.kingdra.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.048.seadra.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.062.horsea.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n2.001.espeon.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.011.eevee_.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.023.magby_.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n2.030.smeargle.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.048.porygon.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
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
        cardImg: '../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.100.erika_.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.102.chaos_gym.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.109.resistance_gym.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
        "count": 7,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        "count": 6,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.081.full_heal_energy.jpg',
        "count": 2,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Colin Brown',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/crobat.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/base-fossil/n3.004.crobat.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n3.029.golbat.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n3.059.zubat_.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.024.murkrow.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.102.chaos_gym.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.109.resistance_gym.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.099.grass_energy.jpg',
        "count": 14,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        "count": 4,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Alex Turkawski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/crobat.png',
    sprite2: '../../../assets/sprites/piloswine.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/base-fossil/n3.004.crobat.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n3.029.golbat.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n3.059.zubat_.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.024.murkrow.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n4.026.light_piloswine.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n4.084.swinub.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n3.062.pokemon_breeder_fields.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.109.resistance_gym.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.099.grass_energy.jpg',
        "count": 8,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.105.recycle_energy.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.081.full_heal_energy.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n4.016.miracle_energy.jpg',
        "count": 1,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Brian O’Leary',
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
        cardImg: '../../assets/cards/base-fossil/n1.080.totodile.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n2.030.smeargle.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
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
        cardImg: '../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.116.recall.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.126.warp_point.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n3.061.healing_field.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        "count": 18,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Bryson Bonham ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/victreebel.png',
    sprite2: '../../../assets/sprites/umbreon.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
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
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.049.erikas_weepinbell.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.048.erikas_weepinbell.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.076.erikas_bellsprout.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.038.erikas_bellsprout.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n2.013.umbreon.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.011.eevee_.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.022.elekid.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n2.066.tyrogue.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.109.erikas_maids.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.076.imposter_oaks_revenge.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.126.warp_point.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.100.erika_.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.078.goop_gas_attack.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.124.narrow_gym.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.107.celadon_city_gym.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.099.grass_energy.jpg',
        "count": 11,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.080.rainbow_energy.jpg',
        "count": 1,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Brenden Ashton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
    sprite2: '../../../assets/sprites/scyther.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/base-fossil/g1.011.rockets_hitmonchan.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.013.rockets_scyther.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.018.team_rockets_meowth.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.059.gligar.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n3.054.smoochum.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.022.elekid.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.091.bills_teleporter.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.078.goop_gas_attack.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.116.master_ball.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.076.imposter_oaks_revenge.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.126.warp_point.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.109.resistance_gym.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.042.pokemon_tower.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
        "count": 11,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.099.grass_energy.jpg',
        "count": 9,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.081.full_heal_energy.jpg',
        "count": 2,,
        oldCard: true
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Jonathan Brooks',
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
        cardImg: '../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.023.magby_.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.022.elekid.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.126.trash_exchange.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.118.secret_mission.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.090.time_capsule.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.124.narrow_gym.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.104.the_rockets_training_gym.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        "count": 18,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Mike Reynolds',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/tyranitar.png',
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
        cardImg: '../../assets/cards/base-fossil/n4.011.dark_tyranitar.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n4.038.dark_pupitar.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n4.070.larvitar.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.014.slowking.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.067.slowpoke.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.073.slowpoke.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.022.elekid.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.100.erika_.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.126.warp_point.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n3.060.balloon_berry.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n3.063.rockets_hideout.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.109.resistance_gym.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
        "count": 12,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        "count": 3,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Thomas Donnegan',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/umbreon.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/base-fossil/n3.019.kingdra.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.008.kingdra.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.048.seadra.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.062.horsea.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n2.013.umbreon.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n2.001.espeon.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.035.dark_flareon.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.011.eevee_.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n2.038.eevee_.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.012.pichu_.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.024.murkrow.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.076.erikas_bellsprout.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.102.chaos_gym.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n3.061.healing_field.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.102.water_energy.jpg',
        "count": 8,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.080.rainbow_energy.jpg',
        "count": 1,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Brianna Bonham',
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
        cardImg: '../../assets/cards/base-fossil/n1.015.steelix.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.069.onix_.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/si.003.onix_.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.014.slowking.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.067.slowpoke.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.024.murkrow.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n3.024.sneasel.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.022.elekid.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n2.040.igglybuff.jpg',
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
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.100.erika_.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.126.warp_point.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.076.imposter_oaks_revenge.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.111.good_manners.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.017.lt_surge.jpg',
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
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n3.061.healing_field.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.102.chaos_gym.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.019.metal_energy.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.104.darkness_energy.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.105.recycle_energy.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.081.full_heal_energy.jpg',
        "count": 3,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Benjamin Sauk',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/espeon.png',
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
        cardImg: '../../assets/cards/base-fossil/n2.001.espeon.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n2.038.eevee_.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.014.slowking.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.073.slowpoke.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n3.003.celebi.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n2.040.igglybuff.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
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
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.101.moo_moo_milk.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.116.master_ball.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.109.resistance_gym.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
        "count": 20,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.081.full_heal_energy.jpg',
        "count": 2,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Daniel Mermelstein',
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
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.046.quilava.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.047.quilava.jpg',
        "count": 2,,
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
        cardImg: '../../assets/cards/base-fossil/n3.006.entei_.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.017.blaine.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.114.mistys_wrath.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.089.super_energy_retrieval.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.113.cinnabar_city_gym.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
        "count": 17,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Brandon Labar',
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
        "count": 3,,
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
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.033.blaines_rapidash.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g1.063.blaines_ponyta.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.017.blaine.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.116.master_ball.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.126.warp_point.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.093.gold_berry.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.113.cinnabar_city_gym.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
        "count": 17,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.019.metal_energy.jpg',
        "count": 1,,
        oldCard: true
      },
    ]
  },
  {
    firstName: 'Alayna Callana',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/golduck.png',
    list: '../../../assets/list-icon.png',
    deckid: "eee",
    event: "eeee",
    decklist: {
      "pokemon": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "trainer": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ],
      "energy": [
        {
          "count": 0,
          "name": "ee",
          "number": "ee",
          "set": "ee"
        },
      ]
    },
    deck: [
      {
        cardImg: '../../assets/cards/base-fossil/n4.006.dark_gengar.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n4.036.dark_haunter.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n4.065.gastly.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.012.mistys_golduck.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.090.mistys_psyduck.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.020.cleffa.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n2.040.igglybuff.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n3.011.misdreavus.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.096.professor_elm.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n3.062.pokemon_breeder_fields.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.100.double_gust.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/lc.106.challenge.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.086.focus_band.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/g2.102.chaos_gym.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n3.063.rockets_hideout.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
        "count": 14,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/ro.080.rainbow_energy.jpg',
        "count": 3,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/n1.019.metal_energy.jpg',
        "count": 2,,
        oldCard: true
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'eeeee',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites',
    sprite2: '../../../assets/sprites',
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2002 ECSC";

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

          if (meep.length > 0) {
            for (let i of meep) {
              i.onclick = () => {
                let clone = i.cloneNode();
                clone.className = "";
                zoombox.innerHTML = "";
                zoombox.appendChild(clone);
                zoombox.className = "show";
              };
            }
          }

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2002 ECSC";

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

          if (meep.length > 0) {
            for (let i of meep) {
              i.onclick = () => {
                let clone = i.cloneNode();
                clone.className = "";
                zoombox.innerHTML = "";
                zoombox.appendChild(clone);
                zoombox.className = "show";
              };
            }
          }

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2002 ECSC";

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

          if (meep.length > 0) {
            for (let i of meep) {
              i.onclick = () => {
                let clone = i.cloneNode();
                clone.className = "";
                zoombox.innerHTML = "";
                zoombox.appendChild(clone);
                zoombox.className = "show";
              };
            }
          }

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
