const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Michael Pramawat',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Jacob Lesage',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/olympia.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Philip Schulz',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-break.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/yveltal-sts.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
            },
    ]
  },
  {
    firstName: 'Yee Wei Chun',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/darkrai.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Grafton Roll',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
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
        cardImg: '../../assets/cards/2014-2016/greninja-break.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/greninja.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/frogadier-water-duplicates.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/froakie-bubble.png',
        "count": 3,,
      },
      {
         "count": 4,
          "name": "Talonflame",
          "number": "96",
          "set": "STS",
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        "count": 2,
          "name": "Bursting Balloon",
          "number": "97",
          "set": "BKP",
      },
      {
        cardImg: '../../assets/cards/2014-2016/faded-town.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-evo.png',
        "count": 7,,
      },
      {
         "count": 3,
          "name": "Splash Energy",
          "number": "113",
          "set": "BKP",
      },
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/volcanion.png',
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
        cardImg: '../../assets/cards/2014-2016/volcanion-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/volcanion.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/salamence-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-retrieval-evo.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/scortched-earth.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-evo.png',
        "count": 12,,
      },
    ]
  },
  {
    firstName: 'Attar Ricco',
    flag: '../../../assets/flags/indonesia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/volcanion.png',
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
        cardImg: '../../assets/cards/2014-2016/volcanion-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/volcanion.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-retrieval-evo.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-evo.png',
        "count": 12,,
      },
    ]
  },
  {
    firstName: 'Alexander Hill',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
        cardImg: '../../assets/cards/2014-2016/vespiquen.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zebstrika-bkp.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/blitzle-bkp.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/klefki-sts.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/unown.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/special-charge.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/revitalizer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/forest-of-giant-plants.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Martin Janouš',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/houndoom.png',
    sprite2: '../../../assets/sprites/raticate.png',
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
        cardImg: '../../assets/cards/2014-2016/houndoom-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/raticate.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rattata-evo.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/bunnelby.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/olympia.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-evo.png',
        "count": 8,,
      },
    ]
  },
  {
    firstName: 'Jonathan Lanciano',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/volcanion.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Drew Kennett',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Nicklas Danielsen',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mega-y.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Mikael Jacobs',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/gardevoir-mega.png',
    sprite2: '../../../assets/sprites/xerneas-active.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Javier Gamboa',
    flag: '../../../assets/flags/chile.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Israel Sosa',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-sts.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/steven.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Tyler Ninomura',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/jolteon.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        "count": 2,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN",
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/magearna-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/giovannis-scheme.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-evo.png',
        "count": 7,,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-evo.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Jordan Palmer',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Brent Tonisson',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Mees Brenninkmeijer',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
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
        cardImg: '../../assets/cards/2014-2016/greninja-break.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/greninja.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/frogadier-water-duplicates.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/froakie-bubble.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 2,,
      },
      {
        "count": 4,
          "name": "Bursting Balloon",
          "number": "97",
          "set": "BKP",
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-evo.png',
        "count": 6,,
      },
      {
         "count": 4,
          "name": "Splash Energy",
          "number": "113",
          "set": "BKP",
      },
    ]
  },
  {
    firstName: 'Sameer Sangwan',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mega-y.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Felipe Ponce',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/mewtwo-mega-y.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Steven Mao',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Laurens Van Brecht',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/vespiquen.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Justin Bokhari',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Krzysztof Lesik',
    flag: '../../../assets/flags/poland.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza-mega.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jesper Eriksen',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/xerneas-active.png',
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
        cardImg: '../../assets/cards/2014-2016/xerneas-break.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerneas-rainbow-force.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/galvantula.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/joltik-attach.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/volcanion-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/umbreon-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch-evo.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Miguel Aml',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/volcanion.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Scot Symonds',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gyarados.png',
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
        cardImg: '../../assets/cards/2014-2016/gyarados.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/magikarp.png',
        "count": 4,,
      },
      {
        "count": 1,
            "name": "Octillery",
            "number": "33",
            "set": "BKT",
      },
      {
        "count": 1,
            "name": "Remoraid",
            "number": "32",
            "set": "BKT",
      },
      {
        cardImg: '../../assets/cards/2014-2016/mr-mime-fairy.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/puzzle-of-time.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/buddy-buddy-resuce.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/reserved-ticket.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/special-charge.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/town-map.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-magmas-secret-base.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Tristan Wagner',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/zygarde-complete.png',
    sprite2: '../../../assets/sprites/carbink.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Martin Belohlavek',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/xerneas-active.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Nicolas Galaz',
    flag: '../../../assets/flags/chile.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Pedro Medina',
    flag: '../../../assets/flags/brazil.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Juan Bravo',
    flag: '../../../assets/flags/argentina.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Stephan Nørregård',
    flag: '../../../assets/flags/denmark.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Michael Crosby',
    flag: '../../../assets/flags/uk.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jose Marrero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza-mega.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Mehdi Hafi',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
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
        cardImg: '../../assets/cards/2014-2016/greninja-break.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/greninja.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/frogadier-water-duplicates.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/froakie-bubble.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/starmie-evo.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/staryu-bkp.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/level-ball.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
      },
      {
        "count": 4,
          "name": "Bursting Balloon",
          "number": "97",
          "set": "BKP",
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-evo.png',
        "count": 5,,
      },
      {
         "count": 4,
          "name": "Splash Energy",
          "number": "113",
          "set": "BKP",
      },
    ]
  },
  {
    firstName: 'Benjamin Behrens',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Damian Riquel',
    flag: '../../../assets/flags/argentina.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Gabriel Semedo',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        "count": 1,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN",
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 7,,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-evo.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Nicolo Castignoli',
    flag: '../../../assets/flags/italy.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Adrian Kastelik',
    flag: '../../../assets/flags/poland.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jack Culkin',
    flag: '../../../assets/flags/uk.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Martin Guilbert',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sammy Sosa',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Connor Finton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/mega-gardevoir-ex-sts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/gardevoir-ex-sts.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garedvoir-ex-prc.png',
        "count": 1,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 4,
      },
      {
        "name": "Hoopa-EX",
          "number": "36",
          "set": "AOR",
        "count": 2,
      },
      {
        "name": "Dragonite-EX",
          "number": "72",
          "set": "EVO",
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hawlucha-sts.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rattata-evo.png',
        "count": 1,
      },
      {
        "count": 3,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "name": "Lysandre",
          "number": "90",
          "set": "FLF",
        "count": 2,
      },
      {
        "name": "Hex Maniac",
            "number": "75",
            "set": "AOR",
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/brocks-grit.png',
        "count": 1,
      },
      {
        "name": "VS Seeker",
            "number": "109",
            "set": "PHF",
        "count": 4,
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 3,
      },
      {
        "name": "Mega Turbo",
          "number": "86",
          "set": "ROS",
        "count": 3,
      },
      {
        "count": 2,
          "name": "Fairy Drop",
          "number": "99",
          "set": "FCO"
      },
      {
         "count": 2,
          "name": "Switch",
          "number": "132",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/buddy-buddy-resuce.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/gardevoir-spirit-link.png',
        "count": 3,
      },
      {
        "name": "Sky Field",
          "number": "89",
          "set": "ROS",
        "count": 3,
      },
      {
        "count": 1,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-evo.png',
        "count": 7,
      },
    ]
  },
  {
    firstName: 'Gianluca Cipriano',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mega-y.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Mateusz Legierski',
    flag: '../../../assets/flags/poland.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andre Bortoni',
    flag: '../../../assets/flags/brazil.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/xerneas-active.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Nathalia Fernandes',
    flag: '../../../assets/flags/brazil.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Samuel Hough',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kim Pobega',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/xerneas-active.png',
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
        cardImg: '../../assets/cards/2014-2016/xerneas-rainbow-force.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/volcanion-ex.png',
        "count": 1,,
      },
      {
        "count": 1,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN",
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
      },
      {
        "name": "Genesect-EX",
            "number": "64",
            "set": "FCO",
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex-grass.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/flygon-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/exp-share-prc.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-evo.png',
        "count": 8,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Gawein Wagner',
    flag: '../../../assets/flags/netherlands.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jodie Gledhill',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Bartosz Bialik',
    flag: '../../../assets/flags/poland.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Hanzell Gutierrez',
    flag: '../../../assets/flags/mexico.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/mewtwo-mega-y.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Joe Yeates',
    flag: '../../../assets/flags/ireland.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Heddi Brahmi',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-sts.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Tanner Hurley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/olympia.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Jason Lai',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/greninja.png',
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
        cardImg: '../../assets/cards/2014-2016/greninja-break.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/greninja.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/frogadier-water-duplicates.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/froakie-bubble.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ace-trainer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/dive-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-potion.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        "count": 4,
          "name": "Bursting Balloon",
          "number": "97",
          "set": "BKP",
      },
      {
        cardImg: '../../assets/cards/2014-2016/rough-seas.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/faded-town.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/water-energy-evo.png',
        "count": 6,,
      },
      {
         "count": 4,
          "name": "Splash Energy",
          "number": "113",
          "set": "BKP",
      },
    ]
  },
  {
    firstName: 'Michael Long',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 8,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Kyle Guest',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/olympia.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/faded-town.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Adam Balela',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Christian Moreno',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-sts.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Ángel Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/volcanion.png',
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
        cardImg: '../../assets/cards/2014-2016/volcanion-ex.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/volcanion.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/fisherman.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/olympia.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/energy-retrieval-evo.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/faded-town.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/fire-energy-evo.png',
        "count": 12,,
      },
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Kaya Lichtleitner',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-sts.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/giovannis-scheme.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-center-lady.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/reverse-valley.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Regan Retzloff',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-break.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Maxence Feuillard',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/xerneas-active.png',
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
        cardImg: '../../assets/cards/2014-2016/xerneas-break.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerneas-rainbow-force.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/volcanion-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/umbreon-ex.png',
        "count": 1,,
      },
      {
        "count": 1,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN",
      },
      {
        cardImg: '../../assets/cards/2014-2016/flygon-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/skyla-bkp.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/brocks-grit.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch-evo.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-evo.png',
        "count": 7,,
      },
      {
        cardImg: '../../assets/cards/energy/lightning-energy-evo.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Sönke Ringel',
    flag: '../../../assets/flags/unknown.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/xerneas-active.png',
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
        cardImg: '../../assets/cards/2014-2016/xerneas-break.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerneas-rainbow-force.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/volcanion-ex.png',
        "count": 1,,
      },
      {
        "count": 1,
              "name": "Jolteon-EX",
              "number": "28",
              "set": "GEN",
      },
      {
        cardImg: '../../assets/cards/2014-2016/flygon-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
      },
      {
        "name": "Carbink",
            "number": "49",
            "set": "FCO",
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/teammates.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/olympia.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-evo.png',
        "count": 8,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Joao Penteado',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/xerneas-active.png',
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
        cardImg: '../../assets/cards/2014-2016/xerneas-break.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/xerneas-rainbow-force.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/galvantula.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/joltik-attach.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/volcanion-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/umbreon-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/flygon-ex.png',
        "count": 1,,
      },
      {
        "name": "Genesect-EX",
            "number": "64",
            "set": "FCO",
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hoopa-ex.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/switch-evo.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/sky-field.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-evo.png',
        "count": 8,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Roan Godfrey-Robbins',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garbodor-garbotoxin.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trubbish-acid-spray.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/reverse-valley.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
      },
    ]
  },
  {
    firstName: 'Tobias Strømdahl',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/mega-gardevoir-ex-sts.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/gardevoir-ex-sts.png',
        "count": 4,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 4,
      },
      {
        "name": "Dragonite-EX",
          "number": "72",
          "set": "EVO",
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rattata-evo.png',
        "count": 2,
      },
      {
        "name": "Hoopa-EX",
          "number": "36",
          "set": "AOR",
        "count": 1,
      },
      {
        "count": 3,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "name": "Hex Maniac",
            "number": "75",
            "set": "AOR",
        "count": 2,
      },
      {
        "name": "Lysandre",
          "number": "90",
          "set": "FLF",
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2018-17/karen.png',
        "count": 1,
      },
      {
        "name": "VS Seeker",
            "number": "109",
            "set": "PHF",
        "count": 4,
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 3,
      },
      {
        "name": "Mega Turbo",
          "number": "86",
          "set": "ROS",
        "count": 3,
      },
      {
        "count": 2,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2014-2016/gardevoir-spirit-link.png',
        "count": 4,
      },
      {
        "name": "Sky Field",
          "number": "89",
          "set": "ROS",
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/fairy-energy-evo.png',
        "count": 9,
      },
    ]
  },
  {
    firstName: 'William Wallace',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/yveltal.png',
    sprite2: '../../../assets/sprites/zoroark.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal-ex-shiny.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zoroark-stand-in.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zorua-confuse.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/n.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/hex-maniac.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/max-elixir.png',
        "count": 4,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/super-rod.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/float-stone.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/ffb.png',
        "count": 2,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/parallel-city.png',
        "count": 3,,
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 1,,
      },
      {
        cardImg: '../../assets/cards/energy/dark-energy-evo.png',
        "count": 9,,
      },
      {
        cardImg: '../../assets/cards/energy/dce-evo.png',
        "count": 4,,
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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2017 EUIC";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2017 EUIC";

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
        document.querySelector('.playerName').innerHTML = item.firstName + " - 2017 EUIC";

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
