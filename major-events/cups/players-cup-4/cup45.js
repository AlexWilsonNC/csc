const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');
const extrasList2 = document.querySelector('.extras-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Hampus Eriksson',
    flag: '../../../assets/flags/sweden.png',
    sprite1: '../../../assets/sprites/altaria.png',
    sprite2: '../../../assets/sprites/munchlax.png',
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
        cardImg: '../../assets/cards/2021-2022/altaria.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/swablu.png',
        "count": 3,
      },
      {
        "count": 2,
        "name": "Munchlax",
        "number": "173",
        "set": "UNM"
      },
      {
        "count": 2,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2021-2022/aipom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bunnelby.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/giratina.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mew-bench-barrier.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/zacian-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cynthia-caitlin.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bird-keeper.png',
        "count": 2,
      },
      {
        "count": 1,
          "name": "Lt. Surge's Strategy",
          "number": "178",
          "set": "UNB"
      },
      {
          "count": 1,
          "name": "Bill's Analysis",
          "number": "133",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2022-2023/bruno.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/will.png',
        "count": 1,
      },
      {
        "count": 4,
          "name": "Lillie's Poké Doll",
          "number": "197",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Crushing Hammer",
          "number": "159",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2021-2022/poke-communication.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/scoop-up-net.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/tool-scrapper.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/yell-horn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/camping-gear.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/galar-mine.png',
        "count": 3,
      },
      {
        "count": 1,
          "name": "Wondrous Labyrinth ♢",
          "number": "158",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/powerful-energy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 1,
      },
      {
        "count": 1,
          "name": "Recycle Energy",
          "number": "212",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Leonardo Martins',
    flag: '../../../assets/flags/portugal.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/rillaboom.png',
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
        cardImg: '../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/rillaboom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/thwachy-taunt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/grookey.png',
        "count": 2,
      },
      {
        "count": 2,
        "name": "Rowlet & Alolan Exeggutor GX",
        "number": "1",
        "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 2,
      },
      {
         "count": 1,
          "name": "Pheromosa & Buzzwole GX",
          "number": "1",
          "set": "UNB"
      },
      {
         "count": 1,
        "name": "Vileplume GX",
        "number": "4",
        "set": "CEC"
      },
      {
        "count": 1,
          "name": "Dragonite GX",
          "number": "152",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/incineroar-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/eldegoss-v.png',
        "count": 1,
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "148",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/guzma-hala.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mallow-lana.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cynthia-caitlin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/tag-call.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cherish-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/chaotic-swell.png',
        "count": 1,
      },
      {
        "count": 1,
          "name": "Wondrous Labyrinth ♢",
          "number": "158",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 10,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        "count": 2,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Pascal Lohrer',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/rillaboom.png',
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
        cardImg: '../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/rillaboom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/thwackey-ability.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/grookey-fury-swipes.png',
        "count": 2,
      },
      {
        "count": 2,
        "name": "Rowlet & Alolan Exeggutor GX",
        "number": "1",
        "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 2,
      },
      {
         "count": 1,
          "name": "Pheromosa & Buzzwole GX",
          "number": "1",
          "set": "UNB"
      },
      {
         "count": 1,
        "name": "Vileplume GX",
        "number": "4",
        "set": "CEC"
      },
      {
        "count": 1,
          "name": "Dragonite GX",
          "number": "152",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/incineroar-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/kricketune-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/eldegoss-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/guzma-hala.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cynthia-caitlin.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mallow-lana.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/tag-call.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cherish-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/ordinary-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/chaotic-swell.png',
        "count": 1,
      },
      {
        "count": 1,
          "name": "Wondrous Labyrinth ♢",
          "number": "158",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        "count": 1,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Pedro Eugenio Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/urshifu-rapid-strike-gmax.png',
    sprite2: '../../../assets/sprites/cinccino.png',
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
        cardImg: '../../assets/cards/2021-2022/rs-urshifu-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/rs-urshifu-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2019-2020/cinccino.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2019-2020/minccino.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2022-2023/snorlax.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/jirachi-stellar-wish.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/farfetchd.png',
        "count": 1,
      },
      {
        "count": 1,
        "name": "Galarian Zigzagoon",
        "number": "117",
        "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2021-2022/mewtwo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mew-bench-barrier.png',
        "count": 1,
      },
      {
         "count": 1,
          "name": "Mimikyu",
          "number": "97",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bird-keeper.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/cheryl.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/phoebe.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/poke-communication.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/level-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/ordinary-rod.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 3,
      },
      {
        "count": 2,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/rapid-strike-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 3,
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Angel Aranibar Huamaní',
    flag: '../../../assets/flags/peru.png',
    sprite1: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2021-2022/boltund-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 2,
      },
      {
        "count": 1,
          "name": "Raichu & Alolan Raichu GX",
          "number": "54",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2021-2022/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/eldegoss-v.png',
        "count": 1,
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Crushing Hammer",
          "number": "159",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cherish-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
        "count": 2,
      },
      {
        "count": 1,
          "name": "Electromagnetic Radar",
          "number": "169",
          "set": "UNB"
      },
      {
          "count": 1,
          "name": "Tag Switch",
          "number": "209",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 2,
      },
      {
         "count": 1,
        "name": "Big Charm",
        "number": "158",
        "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2021-2022/chaotic-swell.png',
        "count": 1,
      },
      {
        "count": 10,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Bruno Sermann',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/polteageist.png',
    sprite2: '../../../assets/sprites/bunnelby.png',
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
        cardImg: '../../assets/cards/2021-2022/polteageist-mad-party.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/sinistea-furtuve-drop.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bunnelby-mad-party.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mr-rime-mad-party.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-mad-party.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mew-bench-barrier.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2019-2020/giovannis-exile.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/level-ball.png',
        "count": 4,
      },
      {
        "count": 4,
        "name": "Great Ball",
        "number": "164",
        "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2021-2022/great-catcher.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/poke-communication.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/ordinary-rod.png',
        "count": 1,
      },
      {
         "count": 2,
          "name": "U-Turn Board",
          "number": "211",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2021-2022/chaotic-swell.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 4,
      },
      {
        "count": 3,
        "name": "Triple Acceleration Energy",
        "number": "190",
        "set": "UNB"
      },
    ]
  },
  {
    firstName: 'Dalton Acchetta',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/eternatus-eternamax.png',
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
        cardImg: '../../assets/cards/2021-2022/eternatus-vmax.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/eternatus-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/crobat-v.png',
        "count": 4,
      },
      {
        "count": 3,
        "name": "Galarian Zigzagoon",
        "number": "117",
        "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2021-2022/spiritomb.png',
        "count": 2,
      },
      {
        "count": 1,
        "name": "Yveltal",
        "number": "95",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/phoebe.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        "count": 4,
        "name": "Great Ball",
        "number": "164",
        "set": "SSH"
      },
      {
        "count": 4,
          "name": "Crushing Hammer",
          "number": "159",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2021-2022/poke-communication.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/escape-rope.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/tool-jammer.png',
        "count": 1,
      },
      {
        "count": 8,
        "name": "Dark Energy",
        "number": "dark",
        "set": "SSH"
      },
      {
        "count": 2,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'João Pedro Medeiros Zambrano',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2021-2022/boltund-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        "count": 1,
      },
      {
        "count": 1,
          "name": "Raichu & Alolan Raichu GX",
          "number": "54",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2021-2022/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/eldegoss-v.png',
        "count": 1,
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/team-yell-grunt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Crushing Hammer",
          "number": "159",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cherish-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/chaotic-swell.png',
        "count": 1,
      },
      {
        "count": 10,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 3,
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Aaron Friedman',
    flag: '../../../assets/flags/usa.png',
    sprite2: '../../../assets/sprites/urshifu-rapid-strike-gmax.png',
    sprite1: '../../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2021-2022/rs-urshifu-vmax.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/rs-urshifu-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/jirachi-stellar-wish.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/jirachi-gx.png',
        "count": 1,
      },
      {
        "count": 1,
        "name": "Galarian Zigzagoon",
        "number": "117",
        "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2021-2022/mewtwo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mew-bench-barrier.png',
        "count": 1,
      },
      {
         "count": 1,
          "name": "Mimikyu",
          "number": "97",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/phoebe.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/poke-communication.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/scoop-up-net.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/great-catcher.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 2,
      },
      {
        "count": 2,
        "name": "Martial Arts Dojo",
        "number": "179",
        "set": "UNB"
      },
      {
        "count": 5,
          "name": "Fighting Energy",
          "number": "fighting",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/rapid-strike-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alex Schemanske',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/polteageist.png',
    sprite2: '../../../assets/sprites/bunnelby.png',
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
        cardImg: '../../assets/cards/2021-2022/polteageist-mad-party.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/sinistea-furtuve-drop.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bunnelby-mad-party.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mr-rime-mad-party.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-mad-party.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mew-bench-barrier.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2019-2020/giovannis-exile.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/level-ball.png',
        "count": 4,
      },
      {
        "count": 4,
        "name": "Great Ball",
        "number": "164",
        "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2021-2022/great-catcher.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/evolution-incense.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/pal-pad.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/ordinary-rod.png',
        "count": 1,
      },
      {
         "count": 2,
          "name": "U-Turn Board",
          "number": "211",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2021-2022/chaotic-swell.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/new-energy/twin-energy.png',
        "count": 4,
      },
      {
        "count": 3,
        "name": "Triple Acceleration Energy",
        "number": "190",
        "set": "UNB"
      },
    ]
  },
  {
    firstName: 'Dan Hugar',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2021-2022/boltund-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 2,
      },
      {
        "count": 1,
          "name": "Raichu & Alolan Raichu GX",
          "number": "54",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2021-2022/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/eldegoss-v.png',
        "count": 1,
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/team-yell-grunt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Crushing Hammer",
          "number": "159",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cherish-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
        "count": 2,
      },
      {
          "count": 1,
          "name": "Tag Switch",
          "number": "209",
          "set": "UNM"
        },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 2,
      },
      {
         "count": 1,
        "name": "Big Charm",
        "number": "158",
        "set": "SSH"
      },
      {
        "count": 1,
          "name": "Stealthy Hood",
          "number": "186",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2021-2022/chaotic-swell.png',
        "count": 1,
      },
      {
        "count": 10,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Isaac Troan',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
        cardImg: '../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/jirachi-gx.png',
        "count": 2,
      },
      {
        "count": 1,
        "name": "Garchomp & Giratina GX",
        "number": "146",
        "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2021-2022/gengar-and-mimikyu-gx.png',
        "count": 1,
      },
      {
          "count": 1,
          "name": "Reshiram & Charizard GX",
          "number": "20",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Trevenant & Dusknoir GX",
          "number": "SM217",
          "set": "PR-SM"
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "PR-SM"
      },
      {
         "count": 1,
        "name": "Vileplume GX",
        "number": "4",
        "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2019-2020/incineroar-gx.png',
        "count": 1,
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2021-2022/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/eldegoss-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/guzma-hala.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mallow-lana.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cherish-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/tag-call.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
        "count": 1,
      },
      {
        "count": 2,
          "name": "Stealthy Hood",
          "number": "186",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/chaotic-swell.png',
        "count": 2,
      },
      {
        "count": 2,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "SSH"
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/energy/horror-energy.png',
        "count": 4,
      },
    ]
  },
]

let extras = [
  {
    firstName: 'Christian Hasbani',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
    sprite2: '../../../assets/sprites/mewtwo-mew-tagteam.png',
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
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2021-2022/boltund-v.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 2,
      },
      {
        "count": 1,
          "name": "Raichu & Alolan Raichu GX",
          "number": "54",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2021-2022/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/eldegoss-v.png',
        "count": 1,
      },
      {
        "count": 1,
          "name": "Tapu Koko ♢",
          "number": "51",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        "count": 4,
          "name": "Crushing Hammer",
          "number": "159",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cherish-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/reset-stamp.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/chaotic-swell.png',
        "count": 1,
      },
      {
        "count": 10,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/new-energy/speed-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Peter Lo',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/rillaboom.png',
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
        cardImg: '../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/rillaboom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/thwackey-ability.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/grookey.png',
        "count": 2,
      },
      {
        "count": 2,
        "name": "Rowlet & Alolan Exeggutor GX",
        "number": "1",
        "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 2,
      },
      {
         "count": 1,
          "name": "Pheromosa & Buzzwole GX",
          "number": "1",
          "set": "UNB"
      },
      {
         "count": 1,
        "name": "Vileplume GX",
        "number": "4",
        "set": "CEC"
      },
      {
        "count": 1,
          "name": "Dragonite GX",
          "number": "152",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/incineroar-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/kricketune-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/eldegoss-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/guzma-hala.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mallow-lana.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cynthia-caitlin.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/tag-call.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cherish-ball.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/ordinary-rod.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/chaotic-swell.png',
        "count": 1,
      },
      {
        "count": 1,
          "name": "Wondrous Labyrinth ♢",
          "number": "158",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/new-energy/scvi-grass-energy.jpg',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/new-energy/capture-energy.png',
        "count": 2,
      },
      {
        "count": 1,
          "name": "Weakness Guard Energy",
          "number": "213",
          "set": "UNM"
      },
    ]
  },
  {
    firstName: 'Ting Chan',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/adp.png',
    sprite2: '../../../assets/sprites/zacian-crowned.png',
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
        cardImg: '../../assets/cards/2021-2022/adp-gx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/zacian-v.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2019-2020/mawile-gx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/eldegoss-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mew-bench-barrier.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cherish-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        "count": 4,
        "name": "Metal Saucer",
        "number": "170",
        "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/energy-switch-ssh.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/energy-spinner.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/great-catcher.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/rusted-sword.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/chaotic-swell.png',
        "count": 1,
      },
      {
        "count": 8,
          "name": "Metal Energy",
          "number": "metal",
          "set": "SSH"
      },
      {
        "count": 3,
          "name": "Water Energy",
          "number": "water",
          "set": "SSH"
      },
    ]
  },
  {
    firstName: 'Zyad Afiza',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/mewtwo-mew-tagteam.png',
    sprite2: '../../../assets/sprites/urshifu-rapid-strike-gmax.png',
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
        cardImg: '../../assets/cards/2021-2022/mewtwo-mew-tagteam.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/rs-urshifu-vmax.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/rs-urshifu-v.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/dedenne-gx.png',
        "count": 2,
      },
      {
        "count": 1,
        "name": "Garchomp & Giratina GX",
        "number": "146",
        "set": "UNM"
      },
      {
        "count": 1,
          "name": "Gengar & Mimikyu GX",
          "number": "53",
          "set": "TEU"
      },
      {
          "count": 1,
          "name": "Reshiram & Charizard GX",
          "number": "20",
          "set": "UNB"
        },
      {
        "count": 1,
          "name": "Trevenant & Dusknoir GX",
          "number": "SM217",
          "set": "PR-SM"
      },
      {
        "count": 1,
        "name": "Greninja GX",
        "number": "SM197",
        "set": "PR-SM"
      },
      {
         "count": 1,
        "name": "Vileplume GX",
        "number": "4",
        "set": "CEC"
      },
      {
        "count": 1,
          "name": "Latios GX",
          "number": "78",
          "set": "UNM"
      },
      {
        cardImg: '../../assets/cards/2021-2022/jirachi-gx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/eldegoss-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/crobat-v.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/marnie.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/professors-research-magnolia.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/bosss-orders.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2021-2022/guzma-hala.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/mallow-lana.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/quick-ball.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/switch.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2021-2022/cherish-ball.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2021-2022/tag-call.png',
        "count": 2,
      },
      {
        "count": 1,
          "name": "Lana's Fishing Rod",
          "number": "195",
          "set": "CEC"
      },
      {
        cardImg: '../../assets/cards/2021-2022/poke-communication.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2021-2022/air-balloon.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2022-2023/big-charm.png',
        "count": 1,
      },
      {
        "count": 1,
          "name": "Stealthy Hood",
          "number": "186",
          "set": "UNB"
      },
      {
        cardImg: '../../assets/cards/2021-2022/chaotic-swell.png',
        "count": 2,
      },
            {
        "count": 1,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "SSH"
      },
      {
        "count": 4,
          "name": "Aurora Energy",
          "number": "186",
          "set": "SSH"
      },
      {
        cardImg: '../../assets/cards/energy/horror-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/new-energy/rapid-strike-energy.png',
        "count": 3,
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - Players Cup IV";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - Players Cup IV";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - Players Cup IV";

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

// extras
function displayList4(array = []) {
  extrasList2.innerHTML = '';

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - Players Cup IV";

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
    extrasList2.appendChild(item_element);
  }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
displayList4(extras);
