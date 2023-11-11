const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Con Le',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
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
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
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
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/honchkrow-ability.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/honchkrow-sp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/murkrow.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,,
        oldCard: true
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
        cardImg: '../../assets/cards/2008-2010/cyrus-initiative.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        "count": 1,
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
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 2,
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
    firstName: 'Erik Nance',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
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
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        "count": 3,
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
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/banette.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/shuppet.png',
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
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 1,
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
        "count": 4,
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
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kyle Sucevich',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dialga.png',
    sprite2: '../../../assets/sprites/garchomp.png',
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
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/drifblim-sp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ambipom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
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
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-metal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-special-dp.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Kyle St Charles',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/donphan.png',
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
        cardImg: '../../assets/cards/2010-2012/kingdra.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/la.007.kingdra.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/la.070.seadra.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/la.102.horsea.jpg',
        "count": 4,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/donphan-prime.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/phanpy.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull-shiny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-water.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/multi-energy-dp.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Gino Lombardi',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Stefan Tabaco',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dialga.png',
    sprite2: '../../../assets/sprites/garchomp.png',
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
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/drifblim-sp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dragonite.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
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
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 1,
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
        "count": 2,
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
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2010-2012/switch-hgss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-metal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/metal-energy-special-dp.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Mark Garcia',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/garchomp.png',
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
        cardImg: '../../assets/cards/2008-2010/md.097.garchomp_lv_x.jpg',
        "count": 1,,
        exCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/garchomp.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gabite.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gible.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull-shiny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-reversal.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/cyclone-energy-dp.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Murat Gursoz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Joseph Sanchez',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
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
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        "count": 2,
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/donphan-prime.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/phanpy-sw.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/giratina.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mt.115.team_galactics_wager.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-fighting.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Alex Fields',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Brad Curcio',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kyle Morris',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Chas McLin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alex Frezza',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Mike Fouchet',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
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
        cardImg: '../../assets/cards/2008-2010/gardevoir-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gardevoir-psychic-lock.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gallade.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/kirlia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ralts-future-sight.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull-shiny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/giratina.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 5,
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
    firstName: 'Omar Izaguirre',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Benjamin Sauk',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
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
        cardImg: '../../assets/cards/2008-2010/gardevoir-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gardevoir-psychic-lock.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gallade.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/kirlia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2007-2008/kirlia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ralts-future-sight.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull-shiny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/giratina.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 5,
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
    firstName: 'Jason Chen',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
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
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/blaziken.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot-sp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ambipom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/sv.044.shedinja.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/sv.117.nincada.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
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
        cardImg: '../../assets/cards/2008-2010/cyrus-initiative.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-fire.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dark.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'James Fontes',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
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
        cardImg: '../../assets/cards/2008-2010/gengar-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gengar-fainting-spell.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gengar-curse.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/haunter-hypnosis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gastly.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidorina.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull-shiny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Benjamin Angee',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alexander Daus',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/machamp.png',
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
        cardImg: '../../assets/cards/2008-2010/machamp-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/machamp.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/machoke.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/machop-low-kick.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/regirock.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-radar.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokedex.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/stark-mountain.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-fighting.png',
        "count": 10,
      },
      {
        cardImg: '../../assets/cards/energy/upper-energy.png',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Adam Garcia',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andrew Murray',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Craig Abley',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Paul Wells III',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/palkia.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason Schelin',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
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
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        "count": 2,
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ambipom.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bronzong.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-metal.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Aaron Curry',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/tyranitar.png',
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
        cardImg: '../../assets/cards/2008-2010/tyranitar-prime.webp',
                "count": 3,,
                radiusCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/sf.047.pupitar.jpg',
                "count": 2,,
                oldCard: true
            },
            {
        cardImg: '../../assets/cards/2008-2010/larvitar.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/machamp.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/machoke.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/machop-kick.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/nidorina.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,
            },
            {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 2,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-dark.png',
        "count": 1,
            },
            {
        cardImg: '../../assets/cards/energy/darkness-energy-hgss.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/rainbow-energy-hgss.png',
        "count": 4,
            },
            {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
            },
    ]
  },
  {
    firstName: 'Johnny Rabus',
    flag: '../../../assets/flags/usa.png',
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
        cardImg: '../../assets/cards/2008-2010/gyarados.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/magikarp.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ge.076.lunatone.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/sv.032.lunatone.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/sv.045.solrock.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/entei-raikou-top.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/entei-raikou-bottom.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/combee.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ditto-dna.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-rescue.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-fire.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dark.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Alex Brosseau',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dialga.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Emmanuel Divens',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jeff Prasad',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/regigigas.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Vincent B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason F',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kristopher G ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Marc P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dialga.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kevin N',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia.png',
    sprite2: '../../../assets/sprites/mesprit.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Colin S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Drew Holton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Igor D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tracy K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Adam Capriola',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gyarados.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/gyarados.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/magikarp.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sv.045.solrock.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/ge.076.lunatone.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/regice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/combee.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-rescue.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/cyclone-energy-dp.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        "count": 2,
      },
    ]
  },
  {
    firstName: 'Ryan M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Harrison Leven',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Joshua H',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Quin D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Stephen M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ian R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tom D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Robert A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Roberto A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Matt A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Paarth S ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'James H',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jose M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/donphan.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Zachary M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Hanaan R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Brian V',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/tyranitar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Gabriel A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Chris A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Clint A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Stephan D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gyarados.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Gregory C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jim T',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kevin W',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Paul W',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/palkia.png',
    sprite2: '../../../assets/sprites/mesprit.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Justin C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Michael P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tad W',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blaziken.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Justin P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Omar F',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yehoshua T',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Azul Griego',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/shuppet.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Emre A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Josh Wittenkeller',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sebastian M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Colin Moll',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/dialga.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Orion Craig',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andy M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'James S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Steven H',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Eric A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gyarados.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Alex O',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Bryan V',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/donphan.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Collan B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tyler K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Luke R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Stephen S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/tyranitar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Daniel C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Peter O',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tyler N',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Zach Z',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gliscor.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Taylor D',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Vikas P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gyarados.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Samantha B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gyarados.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dane S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/manectric.png',
    sprite2: '../../../assets/sprites/entei-raikou.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Brent S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jason Klaczynski',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/sableye.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dillon M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Colin Peterik',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/tyranitar.png',
    list: '../../../assets/list-icon.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010/tyranitar-prime.webp',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/sf.047.pupitar.jpg',
        "count": 2,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2010-2012/ul.051.larvitar.jpg',
        "count": 3,,
        radiusCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidorina-2008.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sv.044.shedinja.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/sv.117.nincada.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/volkner.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucians-assignment.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/memory-berry-2009.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dark.png',
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
        cardImg: '../../assets/cards/energy/dp-darkness-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Nick K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Franco P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dylan P',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/nidoqueen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ryan K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Austin B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Troy L',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/torterra.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Timothy M ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/tyranitar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tim B',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/tyranitar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Eddie M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/nidoqueen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kenton A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ryan G',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jeffrey A',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Justin M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Josh R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Carson R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andrew W ',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'MK C',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Matthew L',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/donphan.png',
    sprite2: '../../../assets/sprites/manectric.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Edwin L',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Dustin Zimmerman',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Stephon R',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jose S',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jon N',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Derrick K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/flygon.png',
    sprite2: '../../../assets/sprites/torterra.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andrew M',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Nicholas K',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Pedro G',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/shuppet.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
]

let seniors = [
  {
    firstName: 'Michael Diaz',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Spencer Brown',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sam Glassett',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Aylam R.',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Chuck L.',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/jumpluff.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Isaiah Rufus',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gengar.png',
    sprite2: '../../../assets/sprites/garchomp.png',
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
        cardImg: '../../assets/cards/2008-2010/gengar-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gengar-fainting-spell.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/haunter-hypnosis.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gastly.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/giratina.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 5,
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
    firstName: 'Andrew Krekeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/azelf.png',
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
        cardImg: '../../assets/cards/2008-2010/gardevoir-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gardevoir-psychic-lock.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gallade.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/kirlia.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ralts-future-sight.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-downer-aterial.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull-shiny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-fighting.png',
        "count": 1,
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
    firstName: 'Eric Wu',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/gallade.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Geoffrey Sauk',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gyarados.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jeffrey H.',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Thomas Arena',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kyle M.',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Brandon Jones',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/gardevoir.png',
    sprite2: '../../../assets/sprites/azelf.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tim H.',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/kingdra.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'George W.',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/garchomp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ty Wheeler',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
]

let juniors = [
  {
    firstName: 'Victor Aung',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/gengar.png',
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
        cardImg: '../../assets/cards/2008-2010/gengar-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gengar-fainting-spell.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ar.041.haunter.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/haunter-smog.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gastly.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidorina-2008.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mewtwo.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 3,
      },
    ]
  },
  {
    firstName: 'Patrick Lane',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/tyranitar.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Henry S.',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/luxray.png',
    sprite2: '../../../assets/sprites/blaziken.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
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
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
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
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
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
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
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
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
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
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
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
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
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
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
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
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
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
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Maximilian Armitage',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/sprites/machamp.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Jeremiah Williams',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ian Whiton',
    flag: '../../../assets/flags/usa.png',
    sprite1: '../../../assets/sprites/blank.png',
    sprite2: '../../../assets/hyphen.png',
    // list: '../../../assets/list-icon.png',
    list: '../../../assets/sprites/blank.png',
    deckid: "eee",
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
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
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
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

    if (item.list === '../../../assets/list-icon.png') {
      item_element.addEventListener('click', function () {
        document.querySelector('#modal-section').style.display = "flex";
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 US Nats";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 US Nats";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 US Nats";

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
