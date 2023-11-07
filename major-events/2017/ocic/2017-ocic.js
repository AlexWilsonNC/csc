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
        cardImg: '../../assets/cards/2018-17/volcanion-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/volcanion.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/salamence-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/fisherman.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/olympia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/energy-retrieval.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/sky-field.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/scorched-earth.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/dartrix.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vileplume.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/gloom.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/oddish.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/meowth.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2018-17/dartrix.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vileplume.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/gloom.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/oddish.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/beedrill-ex.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-sts.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/delinquent.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/exp-share.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/dartrix.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vileplume.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/gloom.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/oddish.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/tauros-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/beedrill-ex.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2018-17/volcanion-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/volcanion.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2018-17/fisherman.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Pokémon Catcher",
          "number": "126",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/energy-retrieval.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/scorched-earth.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2018-17/dartrix.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/trevenant-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/beedrill-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/espeon-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoothoot.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/team-flare-grunt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2018-17/dartrix.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vileplume.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/gloom.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/oddish.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/tauros-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/beedrill-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/unown.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2018-17/dartrix.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vileplume.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/gloom.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/oddish.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/beedrill-ex.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-sts.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2018-17/delinquent.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/exp-share.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../assets/01.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/zoroark-break.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/zoroark.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/zorua-bkt.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Nest Ball",
          "number": "123",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/town-map.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/reverse-valley.png',
        numImg: '../../assets/02.png'
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
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-sts.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/wobbuffet.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/pokemon-center-lady.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Enhanced Hammer",
          "number": "124",
          "set": "GRI"
      },
      {
        cardImg: '../../assets/cards/2018-17/exp-share.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/02.png'
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
        numImg: '../../assets/01.png'
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
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-sts.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2018-17/delinquent.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/switch.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/exp-share.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../assets/01.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/magikarp.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/octillery.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/remoraid-ion-pool.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2018-17/teammates.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Puzzle of Time",
          "number": "109",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2014-2016/buddy-buddy-resuce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/dive-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/special-charge.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/town-map.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lucky-helmet.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/team-magmas-secret-base.png',
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2018-17/olympia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2018-17/exp-share.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/02.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/mega-gardevoir-ex-sts.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/gardevoir-ex-sts.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/xerneas-break.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/xerneas.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/salamence-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/gardevoir-spirit-link.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/fairy-garden.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 10,
          "name": "Fairy Energy",
          "number": "fairy",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2018-17/dartrix.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vileplume.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/gloom.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/oddish.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/tauros-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/beedrill-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/trevenant-ex.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2018-17/volcanion-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/volcanion.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/fisherman.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/olympia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/energy-retrieval.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/sky-field.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/scorched-earth.png',
        numImg: '../../assets/01.png'
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
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex-shatter-shot.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/wobbuffet.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/espeon-gx.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/mega-turbo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-spirit-link.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/shrine-of-memories.png',
        numImg: '../../assets/02.png'
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
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mewtwo.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/03.png'
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
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex-shatter-shot.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/mega-turbo.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/mewtwo-spirit-link.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/shrine-of-memories.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2018-17/dartrix.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vileplume.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/gloom.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/oddish.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/tauros-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/beedrill-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/trevenant-ex.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-fright-night.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/tauros-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/snorlax-gx.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/ninja-boy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/delinquent.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/02.png'
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
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/mega-gardevoir-ex-sts.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/gardevoir-ex-sts.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/xerneas-break.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/xerneas.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/salamence-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/gardevoir-spirit-link.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/fairy-garden.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 10,
          "name": "Fairy Energy",
          "number": "fairy",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        numImg: '../../assets/03.png'
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
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/mega-gardevoir-ex-sts.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/garedvoir-ex-prc.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/gardevoir-ex-sts.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/xerneas-break.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/xerneas.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/xerneas-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/salamence-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/giratina-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/gardevoir-spirit-link.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/fairy-garden.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 10,
          "name": "Fairy Energy",
          "number": "fairy",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/energy/double-dragon-energy.png',
        numImg: '../../assets/03.png'
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
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/yveltal-sts.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/tauros-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ninja-boy.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/team-flare-grunt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2018-17/exp-share.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2018-17/dartrix.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Rowlet",
          "number": "9",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vileplume.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/gloom.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/oddish.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/lugia-ex-ces.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/beedrill-ex.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/level-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/revitalizer.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 3,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/forest-of-giant-plants.png',
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/alakazam-ex.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/espeon-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
        "name": "Eevee",
        "number": "101",
        "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/skyla.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/delinquent.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/pokemon-center-lady.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/mega-turbo.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/alakazam-spirit-link.png',
        numImg: '../../assets/03.png'
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
        cardImg: '../../assets/cards/2018-17/rayquaza-ex-mega.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rayquaza-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/rayquaza-ex-dragon-promo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/dragonite-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/volcanion-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/jirachi.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Professor Sycamore",
          "number": "107",
          "set": "BKP"
      },
      {
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "N",
          "number": "105",
          "set": "FCO"
      },
      {
        cardImg: '../../assets/cards/2018-17/skyla.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
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
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mega-turbo.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rayquaza-spirit-link.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/sky-field.png',
        numImg: '../../assets/04.png'
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
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/combee.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/unown.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/klefki-sts.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/zebstrika-bkp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/blitzle-bkp.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
            "name": "Oranguru",
            "number": "148",
            "set": "SSH"
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
        cardImg: '../../assets/cards/2018-17/lillie-sum.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/delinquent.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hex-maniac.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
            "name": "Professor Kukui",
            "number": "128",
            "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/special-charge.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/super-rod.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/lucky-helmet.png',
        numImg: '../../assets/02.png'
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
        cardImg: '../../assets/cards/2018-17/volcanion-ex.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/volcanion.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/shaymin-ex.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/salamence-ex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/hoopa-ex.png',
        numImg: '../../assets/01.png'
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
        cardImg: '../../assets/cards/2018-17/lysandre.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/fisherman.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/olympia.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2014-2016/pokemon-ranger.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vs-seeker.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Ultra Ball",
          "number": "135",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/max-elixir.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/trainers-mail.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Pokémon Catcher",
          "number": "126",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2018-17/energy-retrieval.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Escape Rope",
          "number": "114",
          "set": "BUS"
      },
      {
        cardImg: '../../assets/cards/2018-17/switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ffb.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Float Stone",
          "number": "137",
          "set": "BKT"
      },
      {
        cardImg: '../../assets/cards/2018-17/scorched-earth.png',
        numImg: '../../assets/02.png'
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
