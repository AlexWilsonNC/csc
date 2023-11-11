const masterList = document.querySelector('.uk-masters-ol');
const seniorList = document.querySelector('.uk-seniors-ol');
const juniorList = document.querySelector('.uk-juniors-ol');
const tenList = document.querySelector('.ten-ol');
const fiveList = document.querySelector('.five-ol');
const sixList = document.querySelector('.six-ol');
const sevenList = document.querySelector('.seven-ol');
const eightList = document.querySelector('.eight-ol');
const nineList = document.querySelector('.nine-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
    {
        firstName: 'Edward Kuang',
        sprite1: '../../assets/sprites/zekrom.png',
        sprite2: '../../assets/sprites/pachirisu.png',
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
                 cardImg: '../../assets/cards/2010-2012/zekrom.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/pachirisu.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/shaymin.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/reshiram.png',
        "count": 1,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/bouffalant.png',
        "count": 1,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 3,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 2,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/seeker.png',
        "count": 1,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/super-scoop-up.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/pokegear.png',
        "count": 3,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/pluspower-hgss.png',
        "count": 3,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/defender.png',
        "count": 3,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 3,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        "count": 1,,
            },
            {
                 cardImg: '../../assets/cards/2010-2012/revive.png',
        "count": 1,,
            },
            {
                 cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        "count": 11,,
            },
            {
                 cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 3,,
            },
        ]
    },
    {
        firstName: 'Reed Mascola',
        sprite1: '../../assets/sprites/kingdra.png',
        sprite2: '../../assets/sprites/yanmega.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Charles Dutrisac',
        sprite1: '../../assets/sprites/donphan.png',
        sprite2: '../../assets/sprites/yanmega.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Simon Luong',
        sprite1: '../../assets/sprites/magnezone.png',
        sprite2: '../../assets/sprites/emboar.png',
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
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/emboar.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/pignite.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/tepig.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/rayquaza-deoxys-top.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/rayquaza-deoxys-bottom.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/tyrogue-col.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        "count": 10,,
            },
            {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        "count": 2,,
            },
        ]
    },
    {
        firstName: 'Julian Wong',
        sprite1: '../../assets/sprites/yanmega.png',
        sprite2: '../../assets/sprites/magnezone.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Alaric M-Boone',
        sprite1: '../../assets/sprites/ambipom.png',
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
        cardImg: '../../assets/cards/2010-2012/ambipom.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/aipom.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/weavile.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/sneasel.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/slowking.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/slowpoke.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/bouffalant.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/donphan-prime.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/phanpy-col.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/xatu.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/natu.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/tyrogue-col.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/dual-ball.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/darkness-energy-hgss.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Sebastian Crema',
        sprite1: '../../assets/sprites/yanmega.png',
        sprite2: '../../assets/sprites/magnezone.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Andrew V',
        sprite1: '../../assets/sprites/yanmega.png',
        sprite2: '../../assets/sprites/magnezone.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Juan Lorenzo',
        sprite1: '../../assets/sprites/yanmega.png',
        sprite2: '../../assets/sprites/vileplume.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Sebastien P',
        sprite1: '../../assets/sprites/zekrom.png',
        sprite2: '../../assets/sprites/yanmega.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Matthew K',
        sprite1: '../../assets/sprites/yanmega.png',
        sprite2: '../../assets/sprites/vileplume.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Colman F',
        sprite1: '../../assets/sprites/donphan.png',
        sprite2: '../../assets/sprites/cinccino.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Matthew B',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/gengar.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Zach Lesage',
        sprite1: '../../assets/sprites/magnezone.png',
        sprite2: '../../assets/sprites/emboar.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Sean L',
        sprite1: '../../assets/sprites/yanmega.png',
        sprite2: '../../assets/sprites/magnezone.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Sebastian S',
        sprite1: '../../assets/sprites/cinccino.png',
        sprite2: '../../assets/sprites/kingdra.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
]

let seniors = [
    {
        firstName: 'Hampus Eriksson',
        sprite1: '../../assets/sprites/mew.png',
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
        cardImg: '../../assets/cards/2010-2012/mew-prime.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/gyarados.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/magikarp.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/smeargle.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/regice.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/combee.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/seeker.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/poke-rescue.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
                "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        "count": 2,,
            },
        ]
    },
    {
        firstName: 'Karl Persson',
        sprite1: '../../assets/sprites/sableye.png',
        sprite2: '../../assets/sprites/garchomp.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Henrik Reimer',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Albert S',
        sprite1: '../../assets/sprites/seviper.png',
        sprite2: '../../assets/sprites/mightyena.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Yuna',
        sprite1: '../../assets/sprites/umbreon.png',
        sprite2: '../../assets/sprites/scizor.png',
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
        cardImg: '../../assets/cards/2010-2012/sableye.jpg',
                "count": 4,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2010-2012/umbreon.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2007-2008/eevee-flowers.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/scizor-prime.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/pl.130.scyther.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/seeker.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/black-belt.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/cyrus-initiative.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/sf.090.poke_healer.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-hgss.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/sf.082.conductive_quarry.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-metal.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/special-metal-energy-hgss.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/darkness-energy-hgss.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 1,,
            },
        ]
    },
]

let juniors = [
    {
        firstName: 'Daniel Cohen',
        sprite1: '../../assets/sprites/mew.png',
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
            cardImg: '../../assets/cards/2010-2012/mew-prime.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/gyarados.png',
            "count": 3,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/magikarp.png',
            "count": 4,,
        },
        {
            cardImg: '../../assets/cards/2010-2012/smeargle.png',
            "count": 4,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/crobat.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/uxie.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/azelf.png',
            "count": 1,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
            "count": 1,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
            "count": 1,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/regice.png',
            "count": 1,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
            "count": 1,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/combee.png',
            "count": 1,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/unown-quick.png',
            "count": 1,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/poke-collector.png',
            "count": 4,,
        },
        {
            cardImg: '../../assets/cards/2010-2012/seeker.png',
            "count": 3,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/looker.png',
            "count": 1,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/bebes-search.png',
            "count": 1,,
        },
        {
            cardImg: '../../assets/cards/2010-2012/sages-training.png',
            "count": 1,,
        },
        {
            cardImg: '../../assets/cards/2010-2012/junk-arm.png',
            "count": 4,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/poke-turn.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/poke-rescue.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/warp-point.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/2008-2010//luxury-ball.png',
            "count": 1,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
            "count": 1,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/expert-belt.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/energy-gain.png',
            "count": 1,,
        },
        {
            cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
            "count": 3,,
        },
        {
            cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/energy/warp_energy.jpg',
            "count": 2,,
        },
        {
            cardImg: '../../assets/cards/energy/rescue-energy.png',
            "count": 2,,
        },
        ]
    },
    {
        firstName: 'Long Dao',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Sandro Pirkheim',
        sprite1: '../../assets/sprites/machamp.png',
        sprite2: '../../assets/sprites/umbreon.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Dominik Faist',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/hyphen.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
]

let tenEvent = [
    {
        firstName: 'Rudolf Hoffmann',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Tobias Thesing',
        sprite1: '../../assets/sprites/magnezone.png',
        sprite2: '../../assets/sprites/steelix.png',
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
                    cardImg: '../../assets/cards/2008-2010/la.142.magnezone_lv_x.jpg',
                "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/sf.006.magnezone.jpg',
                "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/sf.042.magneton.jpg',
                "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/sf.066.magnemite.jpg',
                "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/steelix-prime.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/onix.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/blissey.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/chansey.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/skuntank-sp.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/ditto-dna.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 1,,
            },
                {
                    cardImg: '../../assets/cards/2010-2012/ud.073.energy_exchanger.jpg',
                "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/ruins-of-alph.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/rr.094.sunyshore_city_gym.jpg',
                "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        "count": 3,,
            },
                {
                    cardImg: '../../assets/cards/energy/cl.087.metal_energy.jpg',
                "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
                "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 1,,
            },
        ]
    },
    {
        firstName: 'Sebastian Grüwel',
        sprite1: '../../assets/sprites/vileplume.png',
        sprite2: '../../assets/sprites/gengar.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Sandro Althaus',
        sprite1: '../../assets/sprites/mew.png',
        sprite2: '../../assets/sprites/gyarados.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
]

let fiveEvent = [
    {
        firstName: 'Nikola Vakarelov',
        sprite1: '../../assets/sprites/magnezone.png',
        sprite2: '../../assets/sprites/regirock.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Vincent Azzolin',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/gyarados.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Vanessa Duflot',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Mathieu Lingelser',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/magnezone.png',
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
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/sf.006.magnezone.jpg',
                "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/sf.042.magneton.jpg',
                "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/sf.066.magnemite.jpg',
                "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/electrode-prime.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/voltorb-shiny.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/unown-retire.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/regice.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/poke-drawer-plus.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/pokedex.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/poke-rescue.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-hgss.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2008-2010/rr.094.sunyshore_city_gym.jpg',
                "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        "count": 8,,
            },
            {
        cardImg: '../../assets/cards/energy/cyclone-energy-dp.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
                "count": 2,,
            },
        ]
    },
    {
        firstName: 'Stéphane Ruffe',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Fabien Garnier',
        sprite1: '../../assets/sprites/mew.png',
        sprite2: '../../assets/sprites/gyarados.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Anaïs ',
        sprite1: '../../assets/sprites/vileplume.png',
        sprite2: '../../assets/sprites/gengar.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Cedric Gouin',
        sprite1: '../../assets/sprites/gyarados.png',
        sprite2: '../../assets/sprites/exeggutor.png',
        // list: '../../assets/list-icon.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,,
            },
        ]
    },
]

let sixEvent = [
    {
        firstName: 'Patricia Walsh',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
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
                "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/garchomp-lvx.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/garchomp-c.png',
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
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/ambipom.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/dragonite.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/pont.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2010-2012/twins.png',
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
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 3,
            },
        ]
    },
    {
        firstName: 'Javier Favilli',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Diego Cassiraga',
        sprite1: '../../assets/sprites/dialga.png',
        sprite2: '../../assets/sprites/garchomp.png',
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Martin Garcia',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,
            },
        ]
    },
]

let sevenEvent = [
    {
        firstName: 'Yacine Sekkoum',
        sprite1: '../../assets/sprites/vileplume.png',
        sprite2: '../../assets/sprites/gengar.png',
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Karl Blake',
        sprite1: '../../assets/sprites/luxray.png',
        sprite2: '../../assets/sprites/garchomp.png',
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Tom Hall',
        sprite1: '../../assets/sprites/sableye.png',
        sprite2: '../../assets/sprites/garchomp.png',
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
        cardImg: '../../assets/cards/2010-2012/sableye.jpg',
                "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/garchomp-lvx.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/garchomp-c.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/blaziken-lvx.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/blaziken.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/honchkrow-ability.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/murkrow.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2008-2010/dragonite.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
                "count": 1,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/cyrus-initiative.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-dark.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-fire.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/energy/darkness-energy-hgss.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
            },
        ]
    },
    {
        firstName: 'Ben S-Armstead',
        sprite1: '../../assets/sprites/sableye.png',
        sprite2: '../../assets/sprites/garchomp.png',
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Dave Martin',
        sprite1: '../../assets/sprites/vileplume.png',
        sprite2: '../../assets/sprites/gengar.png',
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Tamao Cameron',
        sprite1: '../../assets/sprites/vileplume.png',
        sprite2: '../../assets/sprites/gengar.png',
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,
            },
        ]
    },
    {
        firstName: 'Nitish Doolub',
        sprite1: '../../assets/sprites/dialga.png',
        sprite2: '../../assets/sprites/garchomp.png',
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/vileplume.png',
        sprite2: '../../assets/sprites/gengar.png',
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,
            },
        ]
    },
]

let eightEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2010-2012',
                "count": 4,
            },
        ]
    },
]

let nineEvent = [
    {
        firstName: 'eeee',
        sprite1: '../../assets/sprites',
        sprite2: '../../assets/sprites',
        list: '../../assets/list-icon.png',
        // list: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2010-2012',
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

        if (item.list === '../../assets/list-icon.png') {
            console.log('hey')
            item_element.addEventListener('click', function () {
                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 Canada Nats";

                if (item.type == 'psychic') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/psychic-bg.png)";
                } else if (item.type == 'fire') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fire-bg.png)";
                } else if (item.type == 'fairy') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/fairy-bg.png)";
                } else if (item.type == 'normal') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/normal-bg.png)";
                } else if (item.type == '') {
                    document.querySelector('.modal').style.backgroundImage = "url(../../../assets/-bg.png)";
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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 Sweden Nats";

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 Austria Nats";

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

// ten
function displayList4(array = []) {
    tenList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 Germany Nats";

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

        tenList.appendChild(item_element);
    }
}

// five
function displayList5(array = []) {
    fiveList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 France Nats";

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

        fiveList.appendChild(item_element);
    }
}

// six
function displayList6(array = []) {
    sixList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 Argentina Nats";

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

        sixList.appendChild(item_element);
    }
}

// seven
function displayList7(array = []) {
    sevenList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 UK Nats";

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

        sevenList.appendChild(item_element);
    }
}

// eight
function displayList8(array = []) {
    eightList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 UK Nats";

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

        eightList.appendChild(item_element);
    }
}

// nine
function displayList9(array = []) {
    nineList.innerHTML = '';

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

        if (item.list === '../../assets/list-icon.png') {

            item_element.addEventListener('click', function () {

                document.querySelector('#modal-section').style.display = "flex";
                document.querySelector('.modal').style.display = 'block';
                document.querySelector('.behind-modal').style.display = 'block';
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2014 Brazil Nats";

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

        nineList.appendChild(item_element);
    }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
displayList4(tenEvent);
displayList5(fiveEvent);
displayList6(sixEvent);
displayList7(sevenEvent);
displayList8(eightEvent);
displayList9(nineEvent);