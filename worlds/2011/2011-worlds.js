const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'David Cohen',
    flag: '../../assets/flags/usa.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/emboar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pignite.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tepig.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rayquaza-deoxys-top.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rayquaza-deoxys-bottom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/fisherman.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Ross Cawthon',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/vileplume.png',
    sprite2: '../../assets/sprites/reuniclus.png',
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
        cardImg: '../../assets/cards/2010-2012/vileplume.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/gloom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/oddish.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/reuniclus.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/duosion.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/solosis.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/donphan-prime.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/phanpy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/zekrom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pichu.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/blissey-prime.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/chansey.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/suicune-entei-top.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/suicune-entei-bottom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/seeker.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tropical-beach.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tom Dolezal',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
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
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ninetales.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/vulpix.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        "count": 13,
      }
    ]
  },
  {
    firstName: 'Josue Palomino',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
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
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ninetales.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/vulpix.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/samurott.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/oshawott.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/engineers-adjustments.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        "count": 12,
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Josh Wittenkeller',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yanmega.png',
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
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/kingdra.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/horsea.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/jirachi.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-psychic.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Jeremy Jallen',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
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
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ninetales.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/vulpix.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tyrogue-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        "count": 12,
      }
    ]
  },
  {
    firstName: 'Lorenzo Voltolina',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/magnezone.png',
    sprite2: '../../assets/sprites/emboar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dylan Lefavour',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
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
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ninetales.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/vulpix.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokegear.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        "count": 11,
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Sami Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/magnezone.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dylan Bryan',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Luke Reed',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'David Meulenbroeks',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Filipp Lausch',
    flag: '../../assets/flags/austria.png',
    sprite1: '../../assets/sprites/yanmega.png',
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
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/kingdra.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/horsea.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/absol-prime.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pachirisu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 10,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-water.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Mitchel Silva',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jay Hornung',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yanmega.png',
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
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/kingdra.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/horsea.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pachirisu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 10,
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Miska Saari',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
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
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokegear.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-circulator.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/lost-remover.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Nelson Chua',
    flag: '../../assets/flags/singapore.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Aaron Choong',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Simone Soldo',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/kingdra.png',
    sprite2: '../../assets/sprites/yanmega.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Gabriel Arriola',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alessandro Cremascoli',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/magnezone.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'David Booij',
    flag: '../../assets/flags/netherlands.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Matt Souerby',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Simon Eriksen',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yacine Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/magnezone.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Marco Escher',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/magnezone.png',
    sprite2: '../../assets/sprites/emboar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Matius Hurskainen',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ulises Santamria',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jayson Harry',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/magnezone.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ricardo Garcia',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alex Fields',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yanmega.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  }
]

let seniors = [
  {
    firstName: 'Christopher Kan',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
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
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/engineers-adjustments.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/elm-training-method.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokegear.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        "count": 10,
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Marco Facchin',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/yanmega.png',
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
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/kingdra.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/horsea.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/jirachi.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pachirisu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/manaphy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Grafton Roll',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yanmega.png',
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
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/kingdra.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/seadra.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/horsea.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pachirisu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/seeker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Luke Burke',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
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
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokegear.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/revive.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/lost-remover.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        "count": 11,
      }
    ]
  },
  {
    firstName: 'Ryan McGregor',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yanmega.png',
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
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/kingdra.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/horsea.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/jirachi.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/twins.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Jacob Lesage',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/yanmega.png',
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
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/absol-prime.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pachirisu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokegear.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/super-scoop-up-hgss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 10,
      }
    ]
  },
  {
    firstName: 'Kay Lüdecke',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Brian Hathaway',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/mew.png',
    sprite2: '../../assets/sprites/vileplume.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Fares Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Niko Kivimäki',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Johannes Martikkala',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Miloslav Poslední',
    flag: '../../assets/flags/czech-republic.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
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
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/zoroark.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/zorua.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/donphan-prime.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/phanpy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/phanpy-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/bouffalant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tyrogue-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokegear.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-circulator.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Adler Pierce',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'William Boatman',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yuka Furusawa',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Xavier Delfosse',
    flag: '../../assets/flags/switzerland.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  }
]

let juniors = [
  {
    firstName: 'Gustavo Wada',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/yanmega.png',
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
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/kingdra.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/seadra.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/horsea.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tyrogue-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pachirisu.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 10,
      }
    ]
  },
  {
    firstName: 'Kohei Takenaka',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
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
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokegear.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        "count": 9,
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Alex Krekeler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
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
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/zoroark.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/zorua.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/donphan-prime.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/phanpy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/bouffalant.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/professor-juniper.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/potion-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fighting.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Joseph Nawal',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/yanmega.png',
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
        cardImg: '../../assets/cards/2010-2012/yanmega.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/yanma.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnezone-prime.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magneton.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/magnemite.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/kingdra.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/seadra.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/horsea.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tyrogue-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/judge-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/copycat.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/flower-shop-lady.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-lightning.png',
        "count": 8,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-grass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/rescue-energy.png',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Ethan Christopher',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/magnezone.png',
    sprite2: '../../assets/sprites/emboar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Klein Houmani',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Devon Roth',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/magnezone.png',
    sprite2: '../../assets/sprites/emboar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jonas Rasmussen',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/magnezone.png',
    sprite2: '../../assets/sprites/emboar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Colter Decker',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/zoroark.png',
    list: '../../assets/sprites/blank.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Martin Guillemet',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/magnezone.png',
    sprite2: '../../assets/sprites/emboar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Patrick Martinez',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/emboar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sydney Morisoli',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
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
        cardImg: '../../assets/cards/2010-2012/reshiram.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/typhlosion-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/quilava.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cyndaquil-col.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/ninetales.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/vulpix.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2010-2012/cleffa-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/tyrogue-col.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pont.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/sages-training.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/flower-shop-lady.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pokemon-communication-bw.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/poke-reversal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/pluspower.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/junk-arm.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/rare-candy-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/energy-retrieval-bw.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/bw-energy-fire.png',
        "count": 12,
      },
    ]
  },
  {
    firstName: 'Thomas Guillemet',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jan Zimmer',
    flag: '../../assets/flags/czech-republic.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Simon Taylor',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/reshiram.png',
    sprite2: '../../assets/sprites/typhlosion.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Keito Arai',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2010-2012',
        "count": 4,
      },
    ]
  }
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
        if (item.banned === true) {
          playerName.classList.add('crossed-out');
        }

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

        if (item.list === '../../assets/list-icon.png') {
          item_element.addEventListener('click', function () {
            document.querySelector('#modal-section').style.display = "flex";
            document.querySelector('.modal').style.display = 'block';
            document.querySelector('.behind-modal').style.display = 'block';
                        document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 Worlds";

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

              // cardSpace.forEach(card => {
              //   card.addEventListener('click', () => {
              //     pokeCard.classList.add('large-card')
              //   })
              // })

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

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 Worlds";

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

    if (item.list === '../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2011 Worlds";

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

          // pokeCard.onclick = function() {
          //   document.querySelector('.pok-card-small').style.width = '500px';
          // }

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
