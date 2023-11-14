const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
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
        "count": 4,
            "name": "Volcanion-EX",
            "number": "26",
            "set": "STS"
      },
      {
        "count": 3,
            "name": "Volcanion",
            "number": "25",
            "set": "STS"
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/salamence-ex.png',
        "count": 1,
      },
      {
        "name": "Hoopa-EX",
          "number": "36",
          "set": "AOR",
        "count": 1,
      },
      {
        "count": 4,
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
        "count": 1,
          "name": "Fisherman",
          "number": "136",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/olympia.png',
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 4,
      },
      {
        "count": 2,
          "name": "Energy Retrieval",
          "number": "116",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "name": "Sky Field",
          "number": "89",
          "set": "ROS",
        "count": 2,
      },
      {
        "count": 1,
              "name": "Scorched Earth",
              "number": "110",
              "set": "FCO"
      },
      {
        "count": 12,
          "name": "Fire Energy",
          "number": "fire",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Pablo Meza',
    flag: '../../../assets/flags/mexico.png',
    sprite1: '../../../assets/sprites/decidueye.png',
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
        "count": 4,
          "name": "Decidueye GX",
          "number": "12",
          "set": "SUM"
      },
      {
        "name": "Dartrix",
            "number": "10",
            "set": "SUM",
        "count": 4,
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vileplume.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/gloom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/oddish.png',
        "count": 2,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/meowth.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
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
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        "count": 2,
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Kian Amini',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/decidueye.png',
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
        "count": 4,
          "name": "Decidueye GX",
          "number": "12",
          "set": "SUM"
      },
      {
        "name": "Dartrix",
            "number": "10",
            "set": "SUM",
        "count": 4,
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vileplume.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/gloom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/oddish.png',
        "count": 2,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/beedrill-ex.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "name": "Lysandre",
          "number": "90",
          "set": "FLF",
        "count": 3,
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        "count": 2,
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        "count": 4,
      },
      {
        "count": 3,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Jesper Eriksen',
    flag: '../../../assets/flags/denmark.png',
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
        cardImg: '../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-sts.png',
        "count": 2,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 3,
      },
      {
        "name": "Hoopa-EX",
          "number": "36",
          "set": "AOR",
        "count": 1,
      },
      {
        "count": 4,
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
        "count": 1,
          "name": "Delinquent",
          "number": "98",
          "set": "BKP"
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 4,
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
         "count": 1,
          "name": "Switch",
          "number": "132",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "name": "Exp. Share",
            "number": "118",
            "set": "SUM",
        "count": 3,
      },
      {
        "count": 2,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 1,
      },
      {
        "count": 1,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        "count": 12,
          "name": "Dark Energy",
          "number": "dark",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Javier Gamboa',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/decidueye.png',
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
        "count": 4,
          "name": "Decidueye GX",
          "number": "12",
          "set": "SUM"
      },
      {
        "name": "Dartrix",
            "number": "10",
            "set": "SUM",
        "count": 4,
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vileplume.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/gloom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/oddish.png',
        "count": 2,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        "count": 1,
      },
      {
        "count": 1,
            "name": "Tauros GX",
            "number": "100",
            "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2014-2016/beedrill-ex.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
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
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        "count": 2,
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
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
        "count": 4,
            "name": "Volcanion-EX",
            "number": "26",
            "set": "STS"
      },
      {
        "count": 3,
            "name": "Volcanion",
            "number": "25",
            "set": "STS"
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 1,
      },
      {
        "name": "Hoopa-EX",
          "number": "36",
          "set": "AOR",
        "count": 1,
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "113",
            "set": "SUM"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "name": "Lysandre",
          "number": "90",
          "set": "FLF",
        "count": 2,
      },
      {
        "count": 1,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 1,
          "name": "Fisherman",
          "number": "136",
          "set": "BKT"
      },
      {
        "count": 1,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Pokémon Catcher",
          "number": "126",
          "set": "SUM"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 2,
      },
      {
        "count": 2,
          "name": "Energy Retrieval",
          "number": "116",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
         "count": 1,
          "name": "Switch",
          "number": "132",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 1,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 3,
              "name": "Scorched Earth",
              "number": "110",
              "set": "FCO"
      },
      {
        "count": 12,
          "name": "Fire Energy",
          "number": "fire",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/decidueye.png',
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
        "count": 4,
          "name": "Decidueye GX",
          "number": "12",
          "set": "SUM"
      },
      {
        "name": "Dartrix",
            "number": "10",
            "set": "SUM",
        "count": 4,
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trevenant-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/beedrill-ex.png',
        "count": 1,
      },
      {
        "count": 1,
            "name": "Espeon-EX",
            "number": "52",
            "set": "BKP"
      },
      {
        "count": 1,
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
      },
      {
        cardImg: '../../assets/cards/2018-17/hoothoot.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
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
        "count": 1,
          "name": "Team Flare Grunt",
          "number": "73",
          "set": "GEN"
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
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        "count": 2,
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        "count": 4,
      },
      {
        "count": 3,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Alexander Hill',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/decidueye.png',
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
        "count": 4,
          "name": "Decidueye GX",
          "number": "12",
          "set": "SUM"
      },
      {
        "name": "Dartrix",
            "number": "10",
            "set": "SUM",
        "count": 4,
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vileplume.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/gloom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/oddish.png',
        "count": 2,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        "count": 1,
      },
      {
        "count": 1,
            "name": "Tauros GX",
            "number": "100",
            "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2014-2016/beedrill-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/unown.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
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
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        "count": 2,
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        "count": 4,
      },
      {
        "count": 3,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Mees Brenninkmeijer',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/decidueye.png',
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
        "count": 4,
          "name": "Decidueye GX",
          "number": "12",
          "set": "SUM"
      },
      {
        "name": "Dartrix",
            "number": "10",
            "set": "SUM",
        "count": 4,
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vileplume.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/gloom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/oddish.png',
        "count": 2,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/beedrill-ex.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 4,
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
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        "count": 2,
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        "count": 4,
      },
      {
        "count": 3,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Choong Yewkidd',
    flag: '../../../assets/flags/liberia-malaysia.png',
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
    firstName: 'Andre Bortoni',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/jolteon.png',
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
    firstName: 'Benjamin Behrens',
    flag: '../../../assets/flags/norway.png',
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
        cardImg: '../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-sts.png',
        "count": 2,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 3,
      },
      {
        "name": "Hoopa-EX",
          "number": "36",
          "set": "AOR",
        "count": 1,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "name": "Lysandre",
          "number": "90",
          "set": "FLF",
        "count": 3,
      },
      {
        "count": 2,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 1,
          "name": "Delinquent",
          "number": "98",
          "set": "BKP"
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 4,
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
         "count": 2,
          "name": "Switch",
          "number": "132",
          "set": "SUM"
      },
      {
        "name": "Exp. Share",
            "number": "118",
            "set": "SUM",
        "count": 3,
      },
      {
        "count": 3,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 1,
      },
      {
        "count": 1,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        "count": 12,
          "name": "Dark Energy",
          "number": "dark",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Mohamad Razak',
    flag: '../../../assets/flags/liberia-malaysia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir-mega.png',
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
    sprite1: '../../../assets/sprites/decidueye.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yogie Surya',
    flag: '../../../assets/flags/indonesia.png',
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
    firstName: 'Ross Cawthon',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/decidueye.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jit Min Lim',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/decidueye.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sameer Sangwan',
    flag: '../../../assets/flags/australia.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Xander Pero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gardevoir-mega.png',
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
    firstName: 'Tito Santoso',
    flag: '../../../assets/flags/indonesia.png',
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
    firstName: 'Matthew Bray',
    flag: '../../../assets/flags/australia.png',
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
    firstName: 'Jonathan Lanciano',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/decidueye.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tobias Thesing',
    flag: '../../../assets/flags/germany.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,
      },
      {
        "name": "Zoroark BREAK",
            "number": "92",
            "set": "BKT",
        "count": 1,
      },
      {
        "count": 2,
              "name": "Zoroark",
              "number": "91",
              "set": "BKT"
      },
      {
        "name": "Zorua",
            "number": "89",
            "set": "BKT",
        "count": 2,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 2,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "name": "Lysandre",
          "number": "90",
          "set": "FLF",
        "count": 3,
      },
      {
        "name": "Hex Maniac",
            "number": "75",
            "set": "AOR",
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 3,
      },
      {
        "count": 1,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        "count": 1,
              "name": "Town Map",
              "number": "150",
              "set": "BKT"
      },
      {
        "count": 2,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Reverse Valley",
          "number": "110",
          "set": "BKP"
      },
      {
        "count": 9,
          "name": "Dark Energy",
          "number": "dark",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Jacob Lesage',
    flag: '../../../assets/flags/canada.png',
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
        cardImg: '../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-sts.png',
        "count": 2,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 2,
      },
      {
        "name": "Hoopa-EX",
          "number": "36",
          "set": "AOR",
        "count": 1,
      },
      {
        "count": 1,
              "name": "Wobbuffet",
              "number": "RC11",
              "set": "GEN"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
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
        cardImg: '../../assets/cards/2018-17/pokemon-center-lady.png',
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 3,
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
         "count": 1,
          "name": "Switch",
          "number": "132",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "name": "Exp. Share",
            "number": "118",
            "set": "SUM",
        "count": 2,
      },
      {
        "count": 2,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 1,
      },
      {
        "count": 12,
          "name": "Dark Energy",
          "number": "dark",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../../assets/flags/norway.png',
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
        cardImg: '../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-sts.png',
        "count": 2,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 3,
      },
      {
        "name": "Hoopa-EX",
          "number": "36",
          "set": "AOR",
        "count": 1,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "name": "Lysandre",
          "number": "90",
          "set": "FLF",
        "count": 3,
      },
      {
        "count": 2,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 1,
          "name": "Delinquent",
          "number": "98",
          "set": "BKP"
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 4,
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
         "count": 2,
          "name": "Switch",
          "number": "132",
          "set": "SUM"
      },
      {
        "name": "Exp. Share",
            "number": "118",
            "set": "SUM",
        "count": 3,
      },
      {
        "count": 3,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 1,
      },
      {
        "count": 1,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        "count": 12,
          "name": "Dark Energy",
          "number": "dark",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Isaac Chen',
    flag: '../../../assets/flags/liberia-malaysia.png',
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
    firstName: 'Vighnesh Murthy',
    flag: '../../../assets/flags/new-zealand.png',
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
        cardImg: '../../assets/cards/2018-17/gyarados.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2018-17/magikarp.png',
        "count": 4,
      },
      {
        "count": 1,
          "name": "Octillery",
          "number": "33",
          "set": "BKT"
      },
      {
        "count": 1,
          "name": "Remoraid",
          "number": "32",
          "set": "BKT"
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 1,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "name": "Teammates",
            "number": "141",
            "set": "PRC",
        "count": 2,
      },
      {
        "count": 1,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "name": "Lysandre",
          "number": "90",
          "set": "FLF",
        "count": 1,
      },
      {
        "count": 1,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        "name": "VS Seeker",
            "number": "109",
            "set": "PHF",
        "count": 4,
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 4,
      },
      {
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2014-2016/buddy-buddy-resuce.png',
        "count": 4,
      },
      {
        "name": "Dive Ball",
          "number": "125",
          "set": "PRC",
        "count": 4,
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        "count": 1,
      },
      {
        "count": 1,
              "name": "Special Charge",
              "number": "105",
              "set": "STS"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        "count": 1,
              "name": "Town Map",
              "number": "150",
              "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/lucky-helmet.png',
        "count": 3,
      },
      {
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-magmas-secret-base.png',
        "count": 4,
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Philip Schulz',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/darkrai.png',
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
        cardImg: '../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        "count": 4,
      },
      {
        "count": 2,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-sts.png',
        "count": 1,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 1,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "name": "Lysandre",
          "number": "90",
          "set": "FLF",
        "count": 3,
      },
      {
        "count": 3,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2018-17/olympia.png',
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 4,
      },
      {
        "count": 2,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "name": "Exp. Share",
            "number": "118",
            "set": "SUM",
        "count": 2,
      },
      {
        "count": 2,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        "count": 12,
          "name": "Dark Energy",
          "number": "dark",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Alfred Yang',
    flag: '../../../assets/flags/australia.png',
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
    firstName: 'James Goreing',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/yveltal.png',
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
    firstName: 'Athavan Akilan',
    flag: '../../../assets/flags/liberia-malaysia.png',
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
        cardImg: '../../assets/cards/2018-17',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Gregory May',
    flag: '../../../assets/flags/australia.png',
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
]


let seniors = [
  {
    firstName: 'Michael Long',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/gardevoir-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-gardevoir-ex-prc.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mega-gardevoir-ex-sts.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/gardevoir-ex-sts.png',
        "count": 3,
      },
      {
        "name": "Xerneas BREAK",
            "number": "82",
            "set": "STS",
        "count": 1,
      },
      {
        "name": "Xerneas",
            "number": "81",
            "set": "STS",
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/salamence-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        "count": 1,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 1,
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
        "count": 3,
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
        "count": 2,
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 3,
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/gardevoir-spirit-link.png',
        "count": 3,
      },
      {
        "name": "Fairy Garden",
            "number": "100",
            "set": "FCO",
        "count": 4,
      },
      {
        "count": 10,
          "name": "Fairy Energy",
          "number": "fairy",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/decidueye.png',
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
        "count": 4,
          "name": "Decidueye GX",
          "number": "12",
          "set": "SUM"
      },
      {
        "name": "Dartrix",
            "number": "10",
            "set": "SUM",
        "count": 4,
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vileplume.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/gloom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/oddish.png',
        "count": 2,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        "count": 1,
      },
      {
        "count": 1,
            "name": "Tauros GX",
            "number": "100",
            "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2014-2016/beedrill-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trevenant-ex.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
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
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        "count": 2,
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        "count": 4,
      },
      {
        "count": 3,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
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
        "count": 4,
            "name": "Volcanion-EX",
            "number": "26",
            "set": "STS"
      },
      {
        "count": 3,
            "name": "Volcanion",
            "number": "25",
            "set": "STS"
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 2,
      },
      {
        "name": "Hoopa-EX",
          "number": "36",
          "set": "AOR",
        "count": 1,
      },
      {
        "count": 4,
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
        "count": 1,
          "name": "Fisherman",
          "number": "136",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/olympia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 4,
      },
      {
        "count": 2,
          "name": "Energy Retrieval",
          "number": "116",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        "count": 2,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "name": "Sky Field",
          "number": "89",
          "set": "ROS",
        "count": 2,
      },
      {
        "count": 1,
              "name": "Scorched Earth",
              "number": "110",
              "set": "FCO"
      },
      {
        "count": 12,
          "name": "Fire Energy",
          "number": "fire",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Connor Pedersen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mega-y.png',
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
        cardImg: '../../assets/cards/2018-17/mega-mewtwo-y-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex-shatter-shot.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2018-17/wobbuffet.png',
        "count": 2,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 2,
      },
      {
        "name": "Hoopa-EX",
          "number": "36",
          "set": "AOR",
        "count": 1,
      },
      {
        "count": 1,
            "name": "Espeon GX",
            "number": "61",
            "set": "SUM"
      },
      {
        "count": 1,
        "name": "Eevee",
        "number": "101",
        "set": "SUM"
      },
      {
        "count": 4,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 1,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
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
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "name": "Mega Turbo",
          "number": "86",
          "set": "ROS",
        "count": 4,
      },
      {
        "name": "VS Seeker",
            "number": "109",
            "set": "PHF",
        "count": 3,
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 3,
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-spirit-link.png',
        "count": 4,
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/shrine-of-memories.png',
        "count": 2,
      },
      {
        "count": 1,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Tim Bartels',
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
        "count": 4,
      },
      {
        "count": 2,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 1,
      },
      {
        "count": 1,
            "name": "Mewtwo",
            "number": "51",
            "set": "EVO"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
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
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 3,
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        "count": 3,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 3,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        "count": 9,
          "name": "Dark Energy",
          "number": "dark",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Magnus Pedersen',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/mewtwo-mega-y.png',
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
        cardImg: '../../assets/cards/2018-17/mega-mewtwo-y-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex-shatter-shot.png',
        "count": 3,
      },
      {
        "count": 2,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 2,
      },
      {
        "name": "Hoopa-EX",
          "number": "36",
          "set": "AOR",
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 1,
      },
      {
        "count": 4,
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
        "name": "Mega Turbo",
          "number": "86",
          "set": "ROS",
        "count": 4,
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 4,
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-spirit-link.png',
        "count": 3,
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/shrine-of-memories.png',
        "count": 3,
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Joe Ruettiger',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/decidueye.png',
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
        "count": 4,
          "name": "Decidueye GX",
          "number": "12",
          "set": "SUM"
      },
      {
        "name": "Dartrix",
            "number": "10",
            "set": "SUM",
        "count": 4,
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vileplume.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/gloom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/oddish.png',
        "count": 2,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        "count": 1,
      },
      {
        "count": 1,
            "name": "Tauros GX",
            "number": "100",
            "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2014-2016/beedrill-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/trevenant-ex.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
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
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        "count": 2,
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        "count": 4,
      },
      {
        "count": 3,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Vincent Munk',
    flag: '../../../assets/flags/denmark.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        "count": 2,
      },
      {
        "count": 2,
          "name": "Garbodor",
          "number": "51",
          "set": "GRI"
      },
      {
        "count": 2,
          "name": "Trubbish",
          "number": "56",
          "set": "BKP"
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 2,
      },
      {
        "count": 1,
            "name": "Tauros GX",
            "number": "100",
            "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/snorlax-gx.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
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
        cardImg: '../../assets/cards/2014-2016/ninja-boy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
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
        "count": 3,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 3,
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
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        "count": 9,
          "name": "Dark Energy",
          "number": "dark",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Regan Retzloff',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-gardevoir-ex-prc.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mega-gardevoir-ex-sts.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/gardevoir-ex-sts.png',
        "count": 3,
      },
      {
        "name": "Xerneas BREAK",
            "number": "82",
            "set": "STS",
        "count": 1,
      },
      {
        "name": "Xerneas",
            "number": "81",
            "set": "STS",
        "count": 3,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/salamence-ex.png',
        "count": 1,
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 3,
      },
      {
         "count": 1,
          "name": "Switch",
          "number": "132",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/gardevoir-spirit-link.png',
        "count": 3,
      },
      {
        "name": "Fairy Garden",
            "number": "100",
            "set": "FCO",
        "count": 3,
      },
      {
        "count": 10,
          "name": "Fairy Energy",
          "number": "fairy",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'William Wallace',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/m-gardevoir-ex-prc.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/mega-gardevoir-ex-sts.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/garedvoir-ex-prc.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/gardevoir-ex-sts.png',
        "count": 1,
      },
      {
        "name": "Xerneas BREAK",
            "number": "82",
            "set": "STS",
        "count": 1,
      },
      {
        "name": "Xerneas",
            "number": "81",
            "set": "STS",
        "count": 2,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/xerneas-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/salamence-ex.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        "count": 1,
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
        "count": 3,
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 3,
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
        cardImg: '../../assets/cards/2014-2016/gardevoir-spirit-link.png',
        "count": 3,
      },
      {
        "name": "Fairy Garden",
            "number": "100",
            "set": "FCO",
        "count": 3,
      },
      {
        "count": 10,
          "name": "Fairy Energy",
          "number": "fairy",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Aiden Yeung',
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
        cardImg: '../../assets/cards/2014-2016/darkrai-ex-bkp.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-sts.png',
        "count": 2,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 2,
      },
      {
        "count": 1,
            "name": "Tauros GX",
            "number": "100",
            "set": "SUM"
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
        "count": 3,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "name": "Lillie",
            "number": "122",
            "set": "SUM",
        "count": 3,
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
        "count": 1,
              "name": "Ninja Boy",
              "number": "103",
              "set": "STS"
      },
      {
        "count": 1,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        "count": 1,
          "name": "Team Flare Grunt",
          "number": "73",
          "set": "GEN"
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        "name": "Exp. Share",
            "number": "118",
            "set": "SUM",
        "count": 2,
      },
      {
        "count": 2,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 3,
      },
      {
        "count": 1,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        "count": 12,
          "name": "Dark Energy",
          "number": "dark",
          "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Max Bartels',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/decidueye.png',
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
        "count": 4,
          "name": "Decidueye GX",
          "number": "12",
          "set": "SUM"
      },
      {
        "name": "Dartrix",
            "number": "10",
            "set": "SUM",
        "count": 4,
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vileplume.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/gloom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2018-17/oddish.png',
        "count": 2,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/beedrill-ex.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
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
        "name": "Lillie",
            "number": "122",
            "set": "SUM",
        "count": 1,
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        "count": 2,
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        "count": 4,
      },
      {
        "count": 3,
          "name": "Grass Energy",
          "number": "grass",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Tristan Sobkowiak',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/alakazam-mega.png',
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
        cardImg: '../../assets/cards/2014-2016/mega-alakazam-ex.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2014-2016/alakazam-ex.png',
        "count": 3,
      },
      {
        "count": 3,
            "name": "Espeon GX",
            "number": "61",
            "set": "SUM"
      },
      {
        "count": 4,
        "name": "Eevee",
        "number": "101",
        "set": "SUM"
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 2,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 3,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "name": "Lysandre",
          "number": "90",
          "set": "FLF",
        "count": 1,
      },
      {
        "count": 1,
          "name": "Skyla",
          "number": "148",
          "set": "BKT"
      },
      {
        "count": 1,
          "name": "Delinquent",
          "number": "98",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2018-17/pokemon-center-lady.png',
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
        "name": "Mega Turbo",
          "number": "86",
          "set": "ROS",
        "count": 3,
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 3,
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
        cardImg: '../../assets/cards/2014-2016/alakazam-spirit-link.png',
        "count": 3,
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 2,
          "name": "Parallel City",
          "number": "145",
          "set": "BKT"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'James Kowalski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/rayquaza-mega.png',
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
        "name": "M Rayquaza-EX",
          "number": "76",
          "set": "ROS",
        "count": 3,
      },
      {
        "name": "Rayquaza-EX",
          "number": "75",
          "set": "ROS",
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-ex-dragon-promo.png',
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
        "count": 1,
            "name": "Volcanion-EX",
            "number": "26",
            "set": "STS"
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "name": "Lysandre",
          "number": "90",
          "set": "FLF",
        "count": 1,
      },
      {
        "name": "Hex Maniac",
            "number": "75",
            "set": "AOR",
        "count": 1,
      },
      {
        "count": 1,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "count": 1,
          "name": "Skyla",
          "number": "148",
          "set": "BKT"
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
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
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
        "name": "Rayquaza Spirit Link",
          "number": "87",
          "set": "ROS",
        "count": 3,
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "name": "Sky Field",
          "number": "89",
          "set": "ROS",
        "count": 4,
      },
      {
        "count": 3,
          "name": "Fire Energy",
          "number": "fire",
          "set": "SUM"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Zi Ler Chiew',
    flag: '../../../assets/flags/liberia-malaysia.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        "count": 4,
      },
      {
        "name": "Unown",
          "number": "30",
          "set": "AOR",
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/klefki-sts.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2014-2016/zebstrika-bkp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/blitzle-bkp.png',
        "count": 2,
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 2,
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "113",
            "set": "SUM"
      },
      {
        "count": 4,
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
        "name": "Lillie",
            "number": "122",
            "set": "SUM",
        "count": 2,
      },
      {
        "name": "Lysandre",
          "number": "90",
          "set": "FLF",
        "count": 2,
      },
      {
        "count": 1,
          "name": "Delinquent",
          "number": "98",
          "set": "BKP"
      },
      {
        "name": "Hex Maniac",
            "number": "75",
            "set": "AOR",
        "count": 1,
      },
      {
        "count": 1,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
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
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 4,
      },
      {
        "count": 2,
              "name": "Special Charge",
              "number": "105",
              "set": "STS"
      },
      {
        "count": 1,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
         "count": 1,
          "name": "Switch",
          "number": "132",
          "set": "SUM"
      },
      {
        "count": 1,
          "name": "Super Rod",
          "number": "149",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/lucky-helmet.png',
        "count": 2,
      },
      {
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 4,
        "name": "Double Colorless Energy",
        "number": "136",
        "set": "SUM"
      },
    ]
  },
  {
    firstName: 'Zion Di Tizio',
    flag: '../../../assets/flags/brazil.png',
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
        "count": 4,
            "name": "Volcanion-EX",
            "number": "26",
            "set": "STS"
      },
      {
        "count": 3,
            "name": "Volcanion",
            "number": "25",
            "set": "STS"
      },
      {
        "name": "Shaymin-EX",
          "number": "77",
          "set": "ROS",
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2014-2016/salamence-ex.png',
        "count": 1,
      },
      {
        "name": "Hoopa-EX",
          "number": "36",
          "set": "AOR",
        "count": 1,
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        "count": 1,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        "name": "Lysandre",
          "number": "90",
          "set": "FLF",
        "count": 1,
      },
      {
        "count": 1,
          "name": "Fisherman",
          "number": "136",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/olympia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
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
        "count": 4,
          "name": "Max Elixir",
          "number": "102",
          "set": "BKP"
      },
      {
        "name": "Trainers' Mail",
          "number": "92",
          "set": "ROS",
        "count": 3,
      },
      {
        "count": 3,
          "name": "Pokémon Catcher",
          "number": "126",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Energy Retrieval",
          "number": "116",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
         "count": 1,
          "name": "Switch",
          "number": "132",
          "set": "SUM"
      },
      {
        "count": 2,
          "name": "Fighting Fury Belt",
          "number": "99",
          "set": "BKP"
      },
      {
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        "count": 2,
              "name": "Scorched Earth",
              "number": "110",
              "set": "FCO"
      },
      {
        "count": 12,
          "name": "Fire Energy",
          "number": "fire",
          "set": "SUM"
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2017 OCIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2017 OCIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2017 OCIC";

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
