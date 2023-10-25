const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Gustavo Wada',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Wobbuffet",
          "number": "93",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/acerola.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Philipp Leciejewski',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
            cardImg: '../../assets/cards/2019-2020/jirachi-stellar-wish.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/pikachu-zekrom-gx.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/zeraora-gx.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/zapdos.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/wobbufet.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2018-17/oricorio-energy.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/lillie.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/guzma.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/cynthia.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/nest-ball.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/electropower.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
            numImg: '../../assets/04.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/switch.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/mysterious-treasure.png',
            numImg: '../../assets/03.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/choice-band.png',
            numImg: '../../assets/02.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/escapeboard.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/aether-paradise.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/2019-2020/thunder-mtn.png',
            numImg: '../../assets/01.png'
          },
          {
            cardImg: '../../assets/cards/energy/lightning-energy-teu.png',
            numImg: '../../assets/11.png'
          },
        ]
  },
  {
    firstName: 'Alex Silva',
    flag: '../../../assets/flags/brazil.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
        cardImg: '../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zorua.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lycanroc-gx-dusk.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rockruff.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/grimer-alolan-dark.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acerola.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Tate & Liza",
          "number": "148",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2019-2020/kukui.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mallow.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/devoured-field.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 3,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/dce.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 1,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
    ]
  },
  {
    firstName: 'Ondřej Škubal',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/blank.png',
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
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Brent Tonisson',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
        cardImg: '../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zorua.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lycanroc-gx-dusk.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rockruff.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rockruff-corner.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-flying-flip.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/grimer-alolan.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acerola.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mallow.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/field-blower.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/brooklet-hill.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 3,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/dce.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 1,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
    ]
  },
  {
    firstName: 'Arjan Nagel',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
        cardImg: '../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zorua.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rockruff.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/riolu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/alolan-grimer-division.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acerola.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mallow.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/judge-whistle.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        "count": 3,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/dce.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 1,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
    ]
  },
  {
    firstName: 'Philip Schulz',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
        "count": 3,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Wobbuffet",
          "number": "93",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 2,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 12,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Rahul Reddy',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/eevee.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Sen Caubergh',
    flag: '../../../assets/flags/belgium.png',
    sprite1: '../../../assets/sprites/blank.png',
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
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Kaiwen Cabbabe',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/tapu-koko.png',
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
        cardImg: '../../assets/cards/2018-17/tapu-koko-flying-flip.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-fairy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/larvitar.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-instruct.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/electrocharger.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/dce.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/energy/counter-energy.png',
        numImg: '../../assets/02.png'
      },
    ]
  },
  {
    firstName: 'Rosa Klint',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Steven Mao',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
        cardImg: '../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zorua.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rockruff.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rockruff-corner.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/riolu.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/grimer-alolan-dark.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/weavile.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/sneasel-2nd-turn.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acerola.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/mallow.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/professor-kukui.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/devoured-field.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/dce.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
        "name": "Unit Energy DFY",
        "number": "118",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
    ]
  },
  {
    firstName: 'Scot Symonds',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Tord Reklev',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/eevee.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Wobbuffet",
          "number": "93",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
          "count": 3,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/01.png'
      },
      {
         "count": 2,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 12,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Bryan de Vries',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/jolteon.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/eevee.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/max-potion.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 8,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Mike de Goed',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/naganadel.png',
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
        cardImg: '../../assets/cards/2018-17/stakataka-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/buzzwole-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
          "name": "Naganadel GX",
          "number": "56",
          "set": "FLI"
      },
      {
        "count": 2,
          "name": "Poipole",
          "number": "55",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Poipole",
          "number": "107",
          "set": "LOT"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Bill's Analysis",
          "number": "133",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Tate & Liza",
          "number": "148",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2019-2020/copycat.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/acerola.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/max-potion.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/energy-recycle-system.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Ultra Space",
          "number": "115",
          "set": "FLI"
      },
      {
        "count": 7,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Christian Hasbani',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rockruff.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 3,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 6,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Mees Brenninkmeijer',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/zapdos.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Simon Humphrey',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/quagsire.png',
    sprite2: '../../../assets/sprites/naganadel.png',
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
        "count": 3,
        "name": "Quagsire",
        "number": "26",
        "set": "DRM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/wooper.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Naganadel",
          "number": "108",
          "set": "LOT"
      },
      {
        "count": 2,
          "name": "Poipole",
          "number": "55",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/magikarp-wailord-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Volcanion ♢",
        "number": "31",
        "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/onix.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/oranguru-instruct.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/aqua-patch.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/counter-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/wishful-baton.png',
        numImg: '../../assets/04.png'
      },
      {
         "count": 2,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
          "count": 10,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Wobbuffet",
          "number": "93",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/field-blower.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Daniel Altavilla',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Wobbuffet",
          "number": "93",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/field-blower.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Jit Min Lim',
    flag: '../../../assets/flags/singapore.png',
    sprite1: '../../../assets/sprites/tapu-koko.png',
    sprite2: '../../../assets/sprites/greninja.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Michael Bergerac',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
        "count": 3,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rayquaza-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/oricorio-energy.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/order-pad.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/multi-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 12,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Connor Finton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
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
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/kartana-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Phong Nguyen',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/blank.png',
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
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Joshua Vanoverschelde',
    flag: '../../../assets/flags/belgium.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/lucario.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lucario-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/riolu.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Wobbuffet",
          "number": "93",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 2,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 6,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Jimmy Pendarvis',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Wobbuffet",
          "number": "93",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/field-blower.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Cristian Sarnataro',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/blank.png',
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
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Martin Janouš',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-flying-flip.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 3,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acerola.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 3,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 6,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Zakary Krekeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/jolteon.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Diego Cassiraga',
    flag: '../../../assets/flags/argentina.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Siddequr Rahman',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Julius Brunfeldt',
    flag: '../../../assets/flags/finland.png',
    sprite1: '../../../assets/sprites/blank.png',
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
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Jose Marrero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
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
        cardImg: '../../assets/cards/2018-17/rayquaza-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vikavolt.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/grubbin.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dhelmise.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/shaymin-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
        "name": "Rare Candy",
        "number": "142",
        "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
        "name": "Energy Recycler",
        "number": "123",
        "set": "GRI"
      },
      {
        "count": 3,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        "count": 7,
        "name": "Grass Energy",
        "number": "grass",
        "set": "TEU"
      },
      {
        "count": 6,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Andreas Dombrowski',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
        "count": 3,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/order-pad.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
          "count": 1,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/rotom-dex.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/wishful-baton.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Kim Pobega',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/blank.png',
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
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Wobbuffet",
          "number": "93",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/field-blower.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Xander Pero',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/eevee.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Isaiah Williams',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Wobbuffet",
          "number": "93",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/field-blower.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Yosefi Gad',
    flag: '../../../assets/flags/isreal.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
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
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Naganadel",
          "number": "108",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Poipole",
          "number": "55",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/grimer-alolan.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/kukui.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Ultra Space",
          "number": "115",
          "set": "FLI"
      },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
          "count": 15,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Martin Bender',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/jolteon.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Jon Eng',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/eevee.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/weakness-policy.png',
        numImg: '../../assets/01.png'
      },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Michael Catron',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/rayquaza.png',
    sprite2: '../../../assets/sprites/vikavolt.png',
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
        cardImg: '../../assets/cards/2018-17/rayquaza-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vikavolt.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/grubbin.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/dhelmise.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/shaymin-p.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 1,
        "name": "Pokémon Fan Club",
        "number": "133",
        "set": "UPR"
      },
      {
        "count": 4,
        "name": "Rare Candy",
        "number": "142",
        "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
        "name": "Energy Recycler",
        "number": "123",
        "set": "GRI"
      },
      {
        "count": 2,
          "name": "Lysandre Labs",
          "number": "111",
          "set": "FLI"
      },
      {
        "count": 7,
        "name": "Grass Energy",
        "number": "grass",
        "set": "TEU"
      },
      {
        "count": 6,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Jamin Kauf',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/eevee.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/acerola.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/aether-paradise.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Rasmus Moller',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Lyder Iversen',
    flag: '../../../assets/flags/norway.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
        cardImg: '../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zorua.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lycanroc-gx-dusk.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rockruff.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rockruff-corner.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/magcargo.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/slugma.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/grimer-alolan-dark.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/weavile.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/persian.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acerola.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
      },
      {
          "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Tate & Liza",
          "number": "148",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2019-2020/kukui.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/devoured-field.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/dce.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
        "name": "Unit Energy DFY",
        "number": "118",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
    ]
  },
  {
    firstName: 'Bartosz Bialik',
    flag: '../../../assets/flags/poland.png',
    sprite1: '../../../assets/sprites/blank.png',
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
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/kartana-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../../assets/flags/japan.png',
    sprite1: '../../../assets/sprites/buzzwole.png',
    sprite2: '../../../assets/sprites/weavile.png',
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
        cardImg: '../../assets/cards/2018-17/buzzwole-gx.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/weavile.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/sneasel-2nd-turn.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2018-17/diancie-p.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acerola.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/max-potion.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/field-blower.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2018-17/brooklet-hill.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 10,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Max Schlehaider',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
        "count": 3,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rayquaza-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Wobbuffet",
          "number": "93",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/acro-bike.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2018-17/multi-switch.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/weakness-policy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/aether-paradise.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Tristan Wagner',
    flag: '../../../assets/flags/netherlands.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/jolteon.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Isaac Salazar',
    flag: '../../../assets/flags/chile.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Santiago Mesquida',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 3,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Jason Young',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/jolteon.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 2,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/eevee.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 7,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 2,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Adrian Kastelik',
    flag: '../../../assets/flags/poland.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
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
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Naganadel",
          "number": "108",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Naganadel GX",
          "number": "56",
          "set": "FLI"
      },
      {
        "count": 2,
          "name": "Poipole",
          "number": "55",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Poipole",
          "number": "107",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/grimer-alolan.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Ultra Space",
          "number": "115",
          "set": "FLI"
      },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
          "count": 15,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Angelo Falchi',
    flag: '../../../assets/flags/italy.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/venusaur.png',
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
        cardImg: '../../assets/cards/2019-2020/celebi-venusaur-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
        "name": "Shaymin",
        "number": "33",
        "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Bill's Analysis",
          "number": "133",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
      },
      {
        "count": 2,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/gardenia.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
        "name": "Net Ball",
        "number": "187",
        "set": "LOT"
      },
      {
          "count": 4,
          "name": "Acro Bike",
          "number": "123",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/judge-whistle.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
        "name": "Mixed Herbs",
        "number": "184",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/potion-sm.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/adventure-bag.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Choice Helmet",
          "number": "169",
          "set": "LOT"
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/aether-paradise.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
        "name": "Life Forest ♢",
        "number": "180",
        "set": "LOT"
      },
      {
        "count": 7,
        "name": "Grass Energy",
        "number": "grass",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/dce.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Stéphane Ivanoff',
    flag: '../../../assets/flags/france.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/jolteon.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/eevee.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/max-potion.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 8,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Benjamin Ferrel',
    flag: '../../../assets/flags/chile.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
    // list: '../../../assets/list-icon.png',
        list: '../../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2019-2020',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Oscar Perez',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/blank.png',
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
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/kartana-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-loto.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'James Williams',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
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
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Pedro Torres',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/shedinja.png',
    sprite2: '../../../assets/sprites/oranguru.png',
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
        cardImg: '../../assets/cards/2019-2020/shedinja.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nincada.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zebstrika.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle-delivery.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/slowking.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/slowpoke.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/durant.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/brocks-grit.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/gladion.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Tate & Liza",
          "number": "148",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ingo-emmet.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
        "name": "Great Ball",
        "number": "164",
        "set": "SSH"
      },
      {
        "count": 2,
          "name": "Crushing Hammer",
          "number": "115",
          "set": "SUM"
      },
      {
        cardImg: '../../assets/cards/2019-2020/enhanced-hammer-gri.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/counter-catcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/super-scoop-up-ces.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/sky-pillar.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 3,
          "name": "Water Energy",
          "number": "water",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/energy/dce.png',
        numImg: '../../assets/01.png'
      },
    ]
  },
  {
    firstName: 'Gavin Irving',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/jolteon.png',
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
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/eevee.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Wobbuffet",
          "number": "93",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/max-potion.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 8,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Karl Blake',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-flying-flip.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
          "count": 3,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/acerola.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 2,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 7,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Joe Montalbano',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/jolteon.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/eevee.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/max-potion.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 8,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Adam Hawkins',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/blank.png',
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
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/eevee.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 5,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Tanner Hurley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
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
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Lewis Mason',
    flag: '../../../assets/flags/uk.png',
    sprite1: '../../../assets/sprites/blank.png',
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
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Kaya Lichtleitner',
    flag: '../../../assets/flags/germany.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
        cardImg: '../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zorua.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lycanroc-gx-dusk.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rockruff-corner.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/grimer-alolan-dark.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/kukui.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acerola.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
      },
      {
          "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2018-17/mallow.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/devoured-field.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 3,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/dce.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 1,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
    ]
  },
  {
    firstName: 'Julius Mo Krag',
    flag: '../../../assets/flags/denmark.png',
    sprite1: '../../../assets/sprites/regigigas.png',
    sprite2: '../../../assets/sprites/hoopa-unbound.png',
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
        cardImg: '../../assets/cards/2019-2020/regigigas.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/hoopa-gaurd.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/larvitar.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lugia-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Bill's Analysis",
          "number": "133",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/steven-resolve.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acerola.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lusamine.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/plumeria.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Faba",
          "number": "173",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/gladion.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Tate & Liza",
          "number": "148",
          "set": "CES"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/skull-grunt.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/max-potion.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/counter-catcher.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/enhanced-hammer-gri.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ancient-crystal.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/lavender-town.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 1,
          "name": "Wondrous Labyrinth ♢",
          "number": "158",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/dce.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
    ]
  },
  {
    firstName: 'Alexandre Solé',
    flag: '../../../assets/flags/belgium.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/muk-alola.png',
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
        cardImg: '../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zorua.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/grimer-alolan.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Oranguru",
          "number": "114",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/girafarig.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/acerola.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/plumeria.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Crushing Hammer",
          "number": "115",
          "set": "SUM"
      },
      {
          "count": 3,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/enhanced-hammer-gri.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2018-17/bodybuilding-dumbells.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lavender-town.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/energy/dce.png',
        numImg: '../../assets/04.png'
      },
    ]
  },
  {
    firstName: 'Liam Halliburton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Wobbuffet",
          "number": "93",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/field-blower.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Isaiah Bradner',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Wobbuffet",
          "number": "93",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/weakness-policy.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 11,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Regan Retzloff',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/jolteon-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/eevee.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Wobbuffet",
          "number": "93",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 1,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/weakness-policy.png',
        numImg: '../../assets/01.png'
      },
      {
         "count": 1,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 10,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Šimon Belanyi',
    flag: '../../../assets/flags/slovakia.png',
    sprite1: '../../../assets/sprites/malamar.png',
    sprite2: '../../../assets/sprites/necrozma-ultra.png',
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
        cardImg: '../../assets/cards/2019-2020/malamar.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/inkay.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/necrozma-ultra.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/gengar-mimikyu-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/giratina-distortion-door.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-flying-flip.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 3,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/acerola.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 1,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 4,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
         "count": 3,
          "name": "Viridian Forest",
          "number": "156",
          "set": "TEU"
      },
      {
        "count": 6,
          "name": "Psychic Energy",
          "number": "psychic",
          "set": "TEU"
      },
      {
        "count": 3,
        "name": "Metal Energy",
        "number": "metal",
        "set": "TEU"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Daniel Magda',
    flag: '../../../assets/flags/czech-republic.png',
    sprite1: '../../../assets/sprites/blank.png',
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
          "count": 4,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Noah Donen',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/zoroark.png',
    sprite2: '../../../assets/sprites/lycanroc-midnight.png',
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
        cardImg: '../../assets/cards/2019-2020/zoroark-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/zorua.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/lycanroc-gx-midnight.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/rockruff-corner.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/ninetales-gx-fairy.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/vulpix-alolan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/grimer-alolan.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/weavile.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/sneasel.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 2,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Judge",
          "number": "108",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/acerola.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/mallow.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/professor-elm-lecture.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/kukui.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Pokémon Communication",
          "number": "152",
          "set": "TEU"
        },
      {
        cardImg: '../../assets/cards/2019-2020/energy-loto.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/field-blower.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 1,
          "name": "Pal Pad",
          "number": "132",
          "set": "UPR"
        },
      {
          "count": 1,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2018-17/timer-ball.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2018-17/devoured-field.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Counter Gain",
          "number": "170",
          "set": "LOT"
      },
      {
        "count": 1,
        "name": "Fighting Energy",
        "number": "fighting",
        "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/energy/dce.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 2,
        "name": "Unit Energy DFY",
        "number": "118",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
    ]
  },
  {
    firstName: 'Roan Godfrey-Robbins',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
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
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Naganadel",
          "number": "108",
          "set": "LOT"
      },
      {
        "count": 3,
          "name": "Poipole",
          "number": "55",
          "set": "FLI"
      },
      {
        "count": 1,
          "name": "Poipole",
          "number": "107",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        "count": 2,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 2,
          "name": "Ultra Space",
          "number": "115",
          "set": "FLI"
      },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
          "count": 15,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Benny Billinger',
    flag: '../../../assets/flags/canada.png',
    sprite1: '../../../assets/sprites/zapdos.png',
    sprite2: '../../../assets/sprites/pikachu-zekrom-tagteam.png',
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
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 2,
          "name": "Pikachu & Zekrom GX",
          "number": "33",
          "set": "TEU"
      },
      {
        "count": 2,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Zeraora GX",
          "number": "86",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Wobbuffet",
          "number": "93",
          "set": "LOT"
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 4,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        "count": 1,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 10,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
    ]
  },
  {
    firstName: 'Yuichi Matsuo',
    flag: '../../../assets/flags/australia.png',
    sprite1: '../../../assets/sprites/blank.png',
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
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Absol",
          "number": "88",
          "set": "TEU"
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Shrine of Punishment",
          "number": "143",
          "set": "CES"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Lucas Miller',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
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
          "count": 3,
          "name": "Jirachi",
          "number": "99",
          "set": "TEU"
        },
      {
        "count": 3,
          "name": "Zapdos",
          "number": "40",
          "set": "TEU"
      },
      {
        "count": 1,
        "name": "Buzzwole",
        "number": "77",
        "set": "FLI"
      },
      {
        "count": 1,
        "name": "Nihilego",
        "number": "106",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2018-17/tapu-koko-gx.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-koko-prism.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 2,
        "name": "Zebstrika",
        "number": "82",
        "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/blitzle.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 4,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/04.png'
      },
      {
          "count": 2,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Volkner",
          "number": "135",
          "set": "UPR"
      },
      {
        "count": 4,
          "name": "Electropower",
          "number": "172",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/nest-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/03.png'
      },
      {
          "count": 3,
          "name": "Switch",
          "number": "147",
          "set": "CES"
        },
      {
        cardImg: '../../assets/cards/2019-2020/escape-rope.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/rescue-stretcher.png',
        numImg: '../../assets/02.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-loto.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/choice-band.png',
        numImg: '../../assets/02.png'
      },
      {
          "count": 2,
          "name": "Escape Board",
          "number": "122",
          "set": "UPR"
        },
      {
        "count": 1,
          "name": "Thunder Mountain ♢",
          "number": "191",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Lightning Energy",
          "number": "lightning",
          "set": "TEU"
      },
      {
        "count": 4,
        "name": "Rainbow Energy",
        "number": "151",
        "set": "CES"
      },
      {
        cardImg: '../../assets/cards/energy/counter-energy.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
      },
    ]
  },
  {
    firstName: 'Ivan Lorente',
    flag: '../../../assets/flags/spain.png',
    sprite1: '../../../assets/sprites/blacephalon.png',
    sprite2: '../../../assets/sprites/naganadel.png',
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
        cardImg: '../../assets/cards/2019-2020/blacephalon-gx.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 4,
          "name": "Naganadel",
          "number": "108",
          "set": "LOT"
      },
      {
        "count": 4,
          "name": "Poipole",
          "number": "107",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/alolan-muk.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/grimer-alolan.png',
        numImg: '../../assets/01.png'
      },
      {
        "count": 1,
          "name": "Ditto ♢",
          "number": "154",
          "set": "LOT"
      },
      {
        cardImg: '../../assets/cards/2019-2020/marshadow-let-loose.png',
        numImg: '../../assets/01.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/tapu-lele-gx.png',
        numImg: '../../assets/01.png'
      },
      {
          "count": 4,
          "name": "Cynthia",
          "number": "119",
          "set": "UPR"
        },
      {
        "count": 3,
          "name": "Lillie",
          "number": "125",
          "set": "UPR"
      },
      {
        cardImg: '../../assets/cards/2019-2020/guzma.png',
        numImg: '../../assets/03.png'
      },
      {
        "count": 2,
          "name": "Erika's Hospitality",
          "number": "140",
          "set": "TEU"
      },
      {
        cardImg: '../../assets/cards/2019-2020/ultra-ball.png',
        numImg: '../../assets/04.png'
      },
      {
        cardImg: '../../assets/cards/2019-2020/beast-ring.png',
        numImg: '../../assets/04.png'
      },
      {
        "count": 3,
          "name": "Mysterious Treasure",
          "number": "113",
          "set": "FLI"
      },
      {
        cardImg: '../../assets/cards/2019-2020/energy-switch-ces.png',
        numImg: '../../assets/02.png'
      },
      {
        "count": 1,
          "name": "Ultra Space",
          "number": "115",
          "set": "FLI"
      },
      {
          "count": 1,
          "name": "Heat Factory ♢",
          "number": "178",
          "set": "LOT"
        },
      {
          "count": 15,
          "name": "Fire Energy",
          "number": "fire",
          "set": "TEU"
        },
      {
        "count": 1,
        "name": "Beast Energy ♢",
        "number": "117",
        "set": "FLI"
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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2019 EUIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2019 EUIC";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2019 EUIC";

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
