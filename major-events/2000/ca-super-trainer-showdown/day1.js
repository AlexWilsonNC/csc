const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Andrew Marshall',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
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
        cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/ju.038.lickitung.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/fo.018.ditto_.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.008.mew_.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.095.switch.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.075.lass_.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
                "count": 7,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
                "count": 6,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
                "count": 4,,
                oldCard: true
            },
    ]
  },
  {
    firstName: 'William Lieu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
    sprite2: '../../../assets/sprites/hitmonchan.png',
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
        cardImg: '../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.075.lass_.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
                "count": 12,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
                "count": 4,,
                oldCard: true
            },
    ]
  },
  {
    firstName: 'Chris Neathery',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
    sprite2: '../../../assets/sprites/magmar.png',
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
        cardImg: '../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/fo.039.magmar.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/ju.038.lickitung.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.075.lass_.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
                "count": 7,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
                "count": 6,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
                "count": 3,,
                oldCard: true
            },
    ]
  },
  {
    firstName: 'Alvin Osborn',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
    sprite2: '../../../assets/sprites/electabuzz.png',
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
        cardImg: '../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/fo.018.ditto_.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.003.chansey.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.027.farfetchd.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.075.lass_.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/ro.076.imposter_oaks_revenge.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.095.switch.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
                "count": 8,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
                "count": 6,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
                "count": 4,,
                oldCard: true
            },
    ]
  },
  {
    firstName: 'Marcus Abreu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
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
          cardImg: '../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.022.mr_mime.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.074.challenge.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
          "count": 8,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          "count": 7,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 4,,
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Darren Guiao',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
    sprite2: '../../../assets/sprites/magmar.png',
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
          cardImg: '../../assets/cards/base-fossil/fo.039.magmar.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.003.chansey.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
          "count": 10,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          "count": 8,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 2,,
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Jarod Stein',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
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
          cardImg: '../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.033.gastly.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.078.goop_gas_attack.jpg',
          "count": 1,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
          "count": 6,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.080.rainbow_energy.jpg',
          "count": 2,,
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Jay Yu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
    sprite2: '../../../assets/sprites/electabuzz.png',
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
          cardImg: '../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
          "count": 9,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.081.full_heal_energy.jpg',
          "count": 4,,
          oldCard: true
      },
    ]
  },
  {
    firstName: '--',
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
    firstName: '--',
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
    firstName: '--',
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
    firstName: '--',
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
    firstName: '--',
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
    firstName: 'Scott Gerhardt',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
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
          cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.011.eevee_.jpg',
          "count": 1,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.075.lass_.jpg',
          "count": 1,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
          "count": 1,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
          "count": 1,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.080.rainbow_energy.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 3,,
          oldCard: true
      },
    ]
  },
  {
    firstName: '--',
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
    firstName: '--',
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
    firstName: 'Jack Savage',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/electabuzz.png',
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
          cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.003.chansey.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
          "count": 6,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
          "count": 6,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 4,,
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Kody Barret',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
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
          cardImg: '../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.003.chansey.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.075.lass_.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.099.grass_energy.jpg',
          "count": 6,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.081.full_heal_energy.jpg',
          "count": 4,,
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Daniel Nino',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
    sprite2: '../../../assets/sprites/electabuzz.png',
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
        cardImg: '../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
        "count": 3,,
        oldCard: true
    },
      {
          cardImg: '../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.095.switch.jpg',
          "count": 1,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
          "count": 7,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          "count": 7,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 4,,
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Zach Froelich',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
    sprite2: '../../../assets/sprites/electabuzz.png',
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
          cardImg: '../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          "count": 3,,
          oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
        "count": 3,,
        oldCard: true
    },
      {
          cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
          "count": 2,,
          oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.095.switch.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.075.lass_.jpg',
        "count": 2,,
        oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
          "count": 9,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.080.rainbow_energy.jpg',
          "count": 2,,
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Derek Bowling',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
    sprite2: '../../../assets/sprites/electabuzz.png',
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
          cardImg: '../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.059.energy_search.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.095.switch.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
          "count": 6,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          "count": 6,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 4,,
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Ben Ferguson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
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
          cardImg: '../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.078.goop_gas_attack.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.075.lass_.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
          "count": 12,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 4,,
          oldCard: true
      },
    ]
  },
  {
    firstName: 'John Pratt',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
    sprite2: '../../../assets/sprites/hitmonchan.png',
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
          cardImg: '../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          "count": 3,,
          oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
        "count": 3,,
        oldCard: true
    },
      {
          cardImg: '../../assets/cards/base-fossil/fo.039.magmar.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          "count": 1,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.095.switch.jpg',
          "count": 1,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
          "count": 10,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          "count": 10,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.099.grass_energy.jpg',
          "count": 1,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 4,,
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Matt Townend',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
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
          cardImg: '../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
          "count": 4,,
          oldCard: true
      },
      {
        cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
        "count": 4,,
        oldCard: true
    },
      {
          cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.075.lass_.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
          "count": 12,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 4,,
          oldCard: true
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Joseph Viray',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blastoise.png',
    sprite2: '../../../assets/sprites/articuno.png',
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
          cardImg: '../../assets/cards/base-fossil/bs.002.blastoise.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.063.squirtle.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.002.articuno.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.025.lapras.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.076.pokemon_breeder.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.077.pokemon_trader.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.080.defender.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.102.water_energy.jpg',
          "count": 19,,
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Dean Bartlett',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mewtwo.png',
    sprite2: '../../../assets/sprites/electabuzz.png',
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
        cardImg: '../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/fo.039.magmar.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.095.switch.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.085.pokemon_center.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
                "count": 8,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
                "count": 7,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
                "count": 5,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/ro.080.rainbow_energy.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
                "count": 1,,
                oldCard: true
            },
    ]
  },
  {
    firstName: 'Brock Christianson',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
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
          cardImg: '../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/wizards_black_star_promos.014.mewtwo.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.003.chansey.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.077.nightly_garbage_run.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.090.super_potion.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.071.here_comes_team_rocket.jpg',
          "count": 1,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
          "count": 7,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          "count": 5,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ro.080.rainbow_energy.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 4,,
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
    firstName: 'Mitch Morris',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/mr-mime.png',
    sprite2: '../../../assets/sprites/electabuzz.png',
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
            cardImg: '../../assets/cards/base-fossil/ju.022.mr_mime.jpg',
            "count": 3,,
            oldCard: true
        },
      {
          cardImg: '../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.039.magmar.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          "count": 1,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.075.lass_.jpg',
          "count": 1,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.060.gambler.jpg',
          "count": 1,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
          "count": 6,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.101.psychic_energy.jpg',
          "count": 6,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
          "count": 5,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 3,,
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Gilbert Manquez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/wigglytuff.png',
    sprite2: '../../../assets/sprites/hitmonchan.png',
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
          cardImg: '../../assets/cards/base-fossil/ju.032.wigglytuff.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.054.jigglypuff.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.039.magmar.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.074.item_finder.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          "count": 9,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.098.fire_energy.jpg',
          "count": 8,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 4,,
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Chris Graham',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/hitmonchan.png',
    sprite2: '../../../assets/sprites/electabuzz.png',
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
          cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.018.ditto_.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          "count": 4,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.078.scoop_up.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
          "count": 9,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          "count": 9,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 4,,
          oldCard: true
      },
    ]
  },
  {
    firstName: 'Ken Knight',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/clefable.png',
    sprite2: '../../../assets/sprites/hitmonchan.png',
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
        cardImg: '../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.020.electabuzz.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/ju.017.clefable.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.005.clefairy.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
                "count": 3,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/ro.072.rockets_sneak_attack.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
                "count": 12,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.100.lightning_energy.jpg',
                "count": 8,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
                "count": 1,,
                oldCard: true
            },
    ]
  },
  {
    firstName: 'Devin Diamond',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/articuno.png',
    sprite2: '../../../assets/sprites/hitmonchan.png',
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
          cardImg: '../../assets/cards/base-fossil/fo.002.articuno.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.007.hitmonchan.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/ju.026.scyther.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.052.machop.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.003.chansey.jpg',
          "count": 1,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.091.bill_.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/fo.059.energy_search.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.081.energy_retrieval.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.095.switch.jpg',
          "count": 3,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.071.computer_search.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.088.professor_oak.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.093.gust_of_wind.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.092.energy_removal.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.079.super_energy_removal.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.084.pluspower.jpg',
          "count": 2,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.102.water_energy.jpg',
          "count": 13,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.097.fighting_energy.jpg',
          "count": 9,,
          oldCard: true
      },
      {
          cardImg: '../../assets/cards/base-fossil/bs.096.double_colorless_energy.jpg',
          "count": 2,,
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2000 CA STS";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2000 CA STS";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2000 CA STS";

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
