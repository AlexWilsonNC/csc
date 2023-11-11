const masterList = document.querySelector('.uk-masters-ol');
const seniorList = document.querySelector('.uk-seniors-ol');
const juniorList = document.querySelector('.uk-juniors-ol');
const sevenList = document.querySelector('.seven-ol');
const fiveList = document.querySelector('.five-ol');
const tenList = document.querySelector('.ten-ol');
const elevenList = document.querySelector('.eleven-ol');
const twelveList = document.querySelector('.twelve-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
    {
        firstName: 'Andrew Tandianus',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/shaymin-sky.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Marcus Raj',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/slurpuff.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/swirlix.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ghetsis.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
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
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Jordan Palmer',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/shaymin-sky.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/munna.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
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
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trainers-mail.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/town-map-bw.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Shaun Murphy',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/manectric-mega.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Mohamad Razak',
        sprite1: '../../assets/sprites/raichu.png',
        sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Harley Mangan',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/manectric-mega.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Victor Yi',
        sprite1: '../../assets/sprites/raichu.png',
        sprite2: '../../assets/sprites/leafeon.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Cale Vickery',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/shaymin-sky.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
]

let seniors = [
    {
        firstName: 'Thomas Vernier',
        sprite1: '../../assets/sprites/virizion.png',
        sprite2: '../../assets/sprites/genesect.png',
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
        cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/genesect-ex-plasma.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mew-ex-ltr.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shadow-triad.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/g-booster.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/energy-switch.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 2,,
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
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professors-letter.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/tool-retriever.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 10,,
            },
            {
        cardImg: '../../assets/cards/energy/energy-plasma.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Stéphane Ivanoff',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/slurpuff.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/swirlix.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/cassius.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/rock-guard.png',
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
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Cedric Gouin',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Eric Pujol',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Christophe Caron',
        sprite1: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Florent Planard',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/flareon.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Heddi Brahmi',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Jean-Baptiste Henard',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
]

let juniors = [
    {
        firstName: 'David Sturm',
        sprite1: '../../assets/sprites/flareon.png',
        sprite2: '../../assets/sprites/empoleon.png',
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
        cardImg: '../../assets/cards/2014-2016/flareon-plasma.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/leafeon.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/glaceon-plasma.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/eevee-signs-of-evo.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/audino.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/empoleon.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ditto.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/exeggcute.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
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
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/silver-bangle.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Niklas L-Rappel',
        sprite1: '../../assets/sprites/bronzong.png',
        sprite2: '../../assets/sprites/aegislash.png',
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
        cardImg: '../../assets/cards/2014-2016/bronzong.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/bronzor.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/dialga-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ghetsis.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/steel-shelter.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 8,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Fatih Akdemir',
        sprite1: '../../assets/sprites/gardevoir-mega.png',
        sprite2: '../../assets/sprites/aromatisse.png',
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
        cardImg: '../../assets/cards/2014-2016/xerneas.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/m-gardevoir-ex-prc.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/gardevoir-ex-sts.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/aromatisse.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/spritzee-sweet-scent.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/spiritomb.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
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
        cardImg: '../../assets/cards/2014-2016/max-potion-bw.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/gardevoir-spirit-link.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/fairy-garden.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-fairy.png',
        "count": 12,,
            },
        ]
    },
    {
        firstName: 'Karl Peters',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/slurpuff.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/swirlix.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/cassius.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/skyla-bw.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Friedrich Illbruck',
        sprite1: '../../assets/sprites/joltik.png',
        sprite2: '../../assets/sprites/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2014-2016/pumpkaboo.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/joltik.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lampent.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mew-ex-ltr.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/empoleon.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/boufallant-sap-sipper.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
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
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/escape-rope.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deminsion-valley.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Markus Jakob',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ghetsis.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Ole Stognief',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/landorus-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hawlucha.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lucario-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/dedenne.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/korrina.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/repeat-ball.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/fighting-stadium.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-fighting.png',
        "count": 5,,
            },
            {
        "count": 4,
          "name": "Strong Energy",
          "number": "104",
          "set": "FFI",
            },
        ]
    },
    {
        firstName: 'Robin Schulz',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/slurpuff.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/swirlix.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
            },
        ]
    },
]

let sevenEvent = [
    {
        firstName: 'Chase Moloney',
        sprite1: '../../assets/sprites/bronzong.png',
        sprite2: '../../assets/sprites/aegislash.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Matthew Koo',
        sprite1: '../../assets/sprites/raichu.png',
        sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Aneil Saini',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/raichu.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Rob Davies',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016/yveltal.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/crobat.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/golbat.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/zubat-free-flight.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/leafeon.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/eevee-signs-of-evo.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/absol-plasma.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/dowsing-machine.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/repeat-ball.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/sacred-ash.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/silver-bangle.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-dark.png',
        "count": 11,,
            },
        ]
    },
    {
        firstName: 'Ciaran Farah',
        sprite1: '../../assets/sprites/raichu.png',
        sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Jason Greenberg',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Andrew Estrada',
        sprite1: '../../assets/sprites/landorus-therian.png',
        sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Chris Venier',
        sprite1: '../../assets/sprites/raichu.png',
        sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
]

let fiveEvent = [
    {
        firstName: 'Felippo Colamorea',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trubbish-poison-gas.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ghetsis.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
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
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/weakness-policy.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/joltik.png',
        sprite2: '../../assets/sprites/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2014-2016',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Kim Pobega',
        sprite1: '../../assets/sprites/exeggutor.png',
        sprite2: '../../assets/sprites/garbodor.png',
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
        cardImg: '../../assets/cards/2014-2016/exeggutor.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/exeggcute.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/garbodor-ltr.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/trubbish-pound.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/shaymin-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virizion-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/wally.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
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
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 3,,
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/raichu.png',
        sprite2: '../../assets/sprites/crobat.png',
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
        cardImg: '../../assets/cards/2014-2016',
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
        cardImg: '../../assets/cards/2014-2016',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
]

let tenEvent = [
    {
        firstName: 'Lukas P',
        sprite1: '../../assets/sprites/bronzong.png',
        sprite2: '../../assets/sprites/aegislash.png',
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
        cardImg: '../../assets/cards/2014-2016/bronzong.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/bronzor.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/aegislash-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/dialga-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/cobalion-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/keldeo-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/colress.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/az.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
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
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/steel-shelter.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-metal.png',
        "count": 8,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Luca S',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/slurpuff.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/swirlix.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
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
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/cassius.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'David R',
        sprite1: '../../assets/sprites/flareon.png',
        sprite2: '../../assets/sprites/empoleon.png',
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
        cardImg: '../../assets/cards/2014-2016/flareon-plasma.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/leafeon.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/glaceon-plasma.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/eevee-signs-of-evo.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/empoleon.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/audino.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/exeggcute.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mr-mime.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ditto.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/deoxys-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/archie-ace-in-hole.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
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
        cardImg: '../../assets/cards/2014-2016/battle-compressor.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/silver-bangle.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-grass.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: 'Sandro P',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/slurpuff.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/swirlix.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/cassius.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/max-potion.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/startling-megaphone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
            },
        ]
    },
]

let elevenEvent = [
    {
        firstName: 'Patrick Landis',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/slurpuff.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/swirlix.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/scoop-up-cyclone.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
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
        cardImg: '../../assets/cards/2014-2016/switch.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/head-ringer.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/xy-energy-water.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/joltik.png',
        sprite2: '../../assets/sprites/pumpkaboo.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/virizion.png',
        sprite2: '../../assets/sprites/genesect.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/yveltal.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Sascha ',
        sprite1: '../../assets/sprites/yveltal.png',
        sprite2: '../../assets/sprites/seismitoad.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },

    {
        firstName: '--',
        sprite1: '../../assets/sprites/donphan.png',
        sprite2: '../../assets/sprites/groudon-primal.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
]

let twelveEvent = [
    {
        firstName: 'Manu Riemis',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
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
        cardImg: '../../assets/cards/2014-2016/seismitoad-ex.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/slurpuff.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/swirlix.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/mewtwo-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/jirachi-ex.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/professor-sycamore.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/n-promo.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandre.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/team-flare-grunt.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/xerosic.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/lysandres-trump-card.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/computer-search.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/crushing-hammer-xy.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/hypnotoxic-laser.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/super-scoop-up.png',
        "count": 4,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/vs-seeker.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/acro-bike.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/ultra-ball.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/enhanced-hammer.png',
        "count": 1,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/muscle-band.png',
        "count": 3,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/float-stone-bw.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/virbank-city-gym.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/2014-2016/silent-lab.png',
        "count": 2,,
            },
            {
        cardImg: '../../assets/cards/energy/dce-xy1.png',
        "count": 4,,
            },
        ]
    },
    {
        firstName: '--',
        sprite1: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Theo',
        sprite1: '../../assets/sprites/seismitoad.png',
        sprite2: '../../assets/sprites/slurpuff.png',
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
        cardImg: '../../assets/cards/2014-2016',
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
        cardImg: '../../assets/cards/2014-2016',
                "count": 4,,
            },
        ]
    },
    {
        firstName: 'Marius v.E.',
        sprite1: '../../assets/sprites/blank.png',
        sprite2: '../../assets/sprites/donphan.png',
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
        cardImg: '../../assets/cards/2014-2016',
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 Australia Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 France Nats";

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 Germany Nats";

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

// seven
function displayList4(array = []) {
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 Canada Nats";

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
        console.log('meep')

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 Italy Nats";

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

// ten
function displayList10(array = []) {
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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 Austria Nats";

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

// eleven
function displayList11(array = []) {
    elevenList.innerHTML = '';

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 Switzerland Nats";

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

        elevenList.appendChild(item_element);
    }
}

// twelve
function displayList12(array = []) {
    twelveList.innerHTML = '';

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
                document.querySelector('.playerName').innerHTML = item.firstName + " - 2015 Belgium Nats";

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

        twelveList.appendChild(item_element);
    }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

displayList(masters);
displayList2(seniors);
displayList3(juniors);
displayList4(sevenEvent);
displayList5(fiveEvent);
displayList10(tenEvent);
displayList11(elevenEvent);
displayList12(twelveEvent);