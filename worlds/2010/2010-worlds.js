const masterList = document.querySelector('.masters-ol');
const seniorList = document.querySelector('.seniors-ol');
const juniorList = document.querySelector('.juniors-ol');

const modalBottom = document.querySelector('.modal-bottom');

let masters = [
  {
    firstName: 'Yuta Komatsuda',
    flag: '../../assets/flags/japan.png',
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
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dragonite.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
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
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pont.png',
        "count": 3,
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
        "count": 3,
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
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
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
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Michael Pramawat',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
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
        cardImg: '../../assets/cards/2008-2010/machamp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/machop-kick.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dusclops.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2008-2010/unown-guard.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
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
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
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
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
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
      }
    ]
  },
  {
    firstName: 'Frank Diaz',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gengar.png',
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
    firstName: 'Miguel Garcia',
    flag: '../../assets/flags/switzerland.png',
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
        cardImg: '../../assets/cards/2008-2010/entei-raikou-top.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/entei-raikou-bottom.png',
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
        cardImg: '../../assets/cards/2008-2010/azelf.png',
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
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roserade.png',
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
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
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
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 3,
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
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        "count": 3,
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
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Yasmin Kiss',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010/gyarados.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/magikarp.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        "count": 1,
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
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
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
        cardImg: '../../assets/cards/2008-2010/regice.png',
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
        cardImg: '../../assets/cards/2008-2010/looker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-drawer-plus.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-hgss.png',
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
        cardImg: '../../assets/cards/energy/dp-darkness-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Curtis Lyon',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
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
        cardImg: '../../assets/cards/2008-2010/nidoqueen.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/nidoran-f.png',
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
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2008-2010/lucians-assignment.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokehealer-plus.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        "count": 1,
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
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        "count": 1,
      }
    ]
  },
  {
    firstName: 'Sami Sekkoum',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Wai Kit Lam',
    flag: '../../assets/flags/hong-kong.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Con Le',
    flag: '../../assets/flags/usa.png',
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
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/dragonite.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot-sp.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-initiative.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
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
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxury-ball.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/dp-darkness-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Gordon Coates',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ralts-future-sight.png',
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
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull-shiny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucians-assignment.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
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
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 5,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Yee Wei Chun',
    flag: '../../assets/flags/liberia-malaysia.png',
    sprite1: '../../assets/sprites/dialga.png',
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
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
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
        cardImg: '../../assets/cards/2008-2010/crobat.png',
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
        "count": 1,
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
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Tomi Sjöblom',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/regigigas.png',
    sprite2: '../../assets/sprites/abomasnow.png',
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
        cardImg: '../../assets/cards/2008-2010/regigigas-lvx.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/regigigas.jpg',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/abomasnow.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/snover.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2008-2010/relicanth.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/regice.png',
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
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/time-space-distortion.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-water.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-metal.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-fighting.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Tsuguyoshi Yamato',
    flag: '../../assets/flags/japan.png',
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
        cardImg: '../../assets/cards/2008-2010/gardevoir-psychic-lock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/kirlia.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ralts-future-sight.png',
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
        cardImg: '../../assets/cards/2008-2010/azelf.png',
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
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dragonite.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/purugly.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,,
        oldCard: true
      },
      {
        cardImg: '../../assets/cards/2008-2010/absol.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
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
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Morten Gundesen',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/abomasnow.png',
    sprite2: '../../assets/sprites/ampharos.png',
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
        cardImg: '../../assets/cards/2008-2010/abomasnow.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/snover.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ampharos.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/flaafy.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mareep.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/chatot.png',
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
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/underground-expedition.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/copycat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 2,
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
        cardImg: '../../assets/cards/energy/hgss-energy-water.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Colin Stromberg',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Takuya Yoneda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/dialga.png',
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
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2008-2010/froslass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/honchkrow-sp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roserade.png',
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
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-initiative.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 3,
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
        cardImg: '../../assets/cards/energy/hgss-energy-dark.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Erik Nance',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/steelix.png',
    sprite2: '../../assets/sprites/blissey.png',
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
        cardImg: '../../assets/cards/2008-2010/steelix-prime.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/onix.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/blissey.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/chansey.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pachirisu.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pont.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/engineers-adjustments.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/volkner.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/life-herb.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/moomoo-milk.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pluspower.png',
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
        cardImg: '../../assets/cards/energy/hgss-energy-metal.png',
        "count": 2,
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
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Aziz Al-Yami',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/sableye.png',
    sprite2: '../../assets/sprites/blaziken.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/blaziken.png',
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
        cardImg: '../../assets/cards/2008-2010/ambipom.png',
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
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-initiative.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
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
        cardImg: '../../assets/cards/2008-2010/looker.png',
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-fire.png',
        "count": 2,
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
        cardImg: '../../assets/cards/energy/dp-darkness-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Toni Taitto',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/manectric.png',
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
        cardImg: '../../assets/cards/2008-2010/donphan-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/phanpy.png',
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
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/manectric.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/electrike.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/regirock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/relicanth.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
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
        cardImg: '../../assets/cards/2008-2010/bench-shield.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/stark-mountain.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-fighting.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/multi-energy-dp.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Justin Bokhari',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gengar.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Matthew Koo',
    flag: '../../assets/flags/canada.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'David Booij',
    flag: '../../assets/flags/netherlands.png',
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
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
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
        "count": 3,
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
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        "count": 2,
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
      }
    ]
  },
  {
    firstName: 'Christophe Caron',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gyarados.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Lorenzo Pieri',
    flag: '../../assets/flags/italy.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Leandro Cerisola',
    flag: '../../assets/flags/argentina.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'David Sturm',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/flygon.png',
    sprite2: '../../assets/sprites/torterra.png',
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
        cardImg: '../../assets/cards/2008-2010/flygon-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/flygon.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vibrava.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/trapinch.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/torterra-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/torterra-hgss-grass.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/torterra-fighting.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/grotle.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/turtwig.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2008-2010/bronzong-psychic.png',
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
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
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
        cardImg: '../../assets/cards/energy/hgss-energy-grass.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 2,
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
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Denny Rodriguez',
    flag: '../../assets/flags/germany.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Drew Guritzky',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/garchomp.png',
    sprite2: '../../assets/sprites/dusknoir.png',
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
        cardImg: '../../assets/cards/2008-2010/dusknoir.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/duskull-shiny.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
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
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
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
        cardImg: '../../assets/cards/2008-2010/unown-quick.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 3,
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
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Sho Sasaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Stephan Norregaard',
    flag: '../../assets/flags/denmark.png',
    sprite1: '../../assets/sprites/gengar.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tom Hall',
    flag: '../../assets/flags/uk.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sergio Ortiz',
    flag: '../../assets/flags/mexico.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  }
]

let seniors = [
  {
    firstName: 'Jacob Lesage',
    flag: '../../assets/flags/canada.png',
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
        cardImg: '../../assets/cards/2008-2010/mismagius.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/misdreavus.png',
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
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/ambipom.png',
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
        cardImg: '../../assets/cards/2008-2010/chatot.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cyrus-conspiracy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
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
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
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
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Mychael Bryan',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-body.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf-downer-aterial.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/combee.png',
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
        "count": 3,
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
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/cyclone-energy-dp.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        "count": 3,
      }
    ]
  },
  {
    firstName: 'Ann-Marie Thompson',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/gengar.png',
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
        cardImg: '../../assets/cards/2008-2010/haunter-smog.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gastly.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2008-2010/manectric.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/electrike.png',
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
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
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
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/moonlight-stadium.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 6,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        "count": 1,
      },
    ]
  },
  {
    firstName: 'Hiroki Yano',
    flag: '../../assets/flags/japan.png',
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
        cardImg: '../../assets/cards/2008-2010/murkrow.png',
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
        cardImg: '../../assets/cards/2008-2010/dragonite.png',
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
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sp-radar.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/energy-gain.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-lightning.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-psychic.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dark.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Michael Diaz',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Kaia Hovland Jensen',
    flag: '../../assets/flags/norway.png',
    sprite1: '../../assets/sprites/sableye.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Toya Nishimaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/entei.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Edmund Kuras',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
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
        cardImg: '../../assets/cards/2008-2010/claydol.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/baltoy-fighting.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
        "count": 3,
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/lucians-assignment.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokehealer-plus.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
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
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Aaron Choong',
    flag: '../../assets/flags/australia.png',
    sprite1: '../../assets/sprites/dialga.png',
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
        cardImg: '../../assets/cards/2008-2010/dialga-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/dialga-g.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
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
        cardImg: '../../assets/cards/2008-2010/crobat.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
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
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Brandon Jones',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
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
        cardImg: '../../assets/cards/2008-2010/gardevoir-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gardevoir-psychic-lock.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/gardevoir-psychic-connect.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2008-2010/uxie-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
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
        cardImg: '../../assets/cards/2008-2010/spiritomb.png',
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
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 4,
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
        "count": 4,
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
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dce.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Karri Makela',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Takuto Itagaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ojvind Svinhufvud',
    flag: '../../assets/flags/finland.png',
    sprite1: '../../assets/sprites/donphan.png',
    sprite2: '../../assets/sprites/manectric.png',
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
        cardImg: '../../assets/cards/2008-2010/donphan-prime.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/phanpy.png',
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
        cardImg: '../../assets/cards/2008-2010/uxie.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/azelf.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/manectric.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/electrike.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/regirock.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/relicanth.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2008-2010/poke-collector.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/judge-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/warp-point.png',
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
        cardImg: '../../assets/cards/2008-2010/bench-shield.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/stark-mountain.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-fighting.png',
        "count": 7,
      },
      {
        cardImg: '../../assets/cards/energy/multi-energy-dp.png',
        "count": 4,
      }
    ]
  },
  {
    firstName: 'Michael Bergerac',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Andrew Krekeler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/gardevoir.png',
    sprite2: '../../assets/sprites/gallade.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Ty Wheeler',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  }
]

let juniors = [
  {
    firstName: 'Yuka Furusawa',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/jumpluff.png',
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
        cardImg: '../../assets/cards/2008-2010/jumpluff.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/skiploom.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/hoppip-bounce.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/hoppip-body.png',
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
        cardImg: '../../assets/cards/2008-2010/crobat.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/unown-retire.png',
        "count": 4,
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
        cardImg: '../../assets/cards/2008-2010/roseannes-research.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rare-candy-hgss.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pluspower.png',
        "count": 3,
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
        cardImg: '../../assets/cards/2008-2010/expert-belt.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-grass.png',
        "count": 6,
      }
    ]
  },
  {
    firstName: 'Juan Arenas',
    flag: '../../assets/flags/usa.png',
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
        cardImg: '../../assets/cards/2008-2010/mismagius.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/misdreavus.png',
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
        cardImg: '../../assets/cards/2008-2010/lucario.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/toxicroak_g-fighting.jpg',
        "count": 1,,
        oldCard: true
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/bebes-search.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/aarons-collection.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/cynthias-feelings.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/looker.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/palmers-contribution.png',
        "count": 1,
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
        cardImg: '../../assets/cards/2008-2010/power-spray.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/premier-ball.png',
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
      }
    ]
  },
  {
    firstName: 'Simon Taylor',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010/combee.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/regice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
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
        cardImg: '../../assets/cards/2008-2010/looker.png',
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
        cardImg: '../../assets/cards/2008-2010/poke-reversal.png',
        "count": 3,
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
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
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
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Thomas Harle',
    flag: '../../assets/flags/france.png',
    sprite1: '../../assets/sprites/blank.png',
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
        cardImg: '../../assets/cards/2008-2010/gyarados.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/magikarp.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/sableye-overgear.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray-lvx.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/luxray.jpg',
        "count": 1,
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
        cardImg: '../../assets/cards/2008-2010/mesprit-pbind.png',
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
        cardImg: '../../assets/cards/2008-2010/regice.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/rapidash-sp.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/felicitys-drawing.png',
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
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-turn.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/super-scoop-up-hgss.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/2008-2010/poke-rescue.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/2008-2010/time-space-distortion.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/night-maintenance.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/pokemon-communication-hgss.png',
        "count": 1,
      },
      {
        cardImg: '../../assets/cards/2008-2010/vs-seeker.png',
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
        cardImg: '../../assets/cards/2008-2010/broken-time-space.png',
        "count": 4,
      },
      {
        cardImg: '../../assets/cards/energy/hgss-energy-dark.png',
        "count": 2,
      },
      {
        cardImg: '../../assets/cards/energy/call-energy.png',
        "count": 3,
      },
      {
        cardImg: '../../assets/cards/energy/warp_energy.jpg',
        "count": 2,
      }
    ]
  },
  {
    firstName: 'Toshimi Yamazaki',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Koichi Nishida',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Henry Chao',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Hiroki Masuda',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sota Horikawa',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Gustavo Wada',
    flag: '../../assets/flags/brazil.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Tsubasa Nakamura',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Nao Kawamura',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Nathan Sweet',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/luxray.png',
    sprite2: '../../assets/sprites/garchomp.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Micah Olton',
    flag: '../../assets/flags/usa.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Titouan Vannay',
    flag: '../../assets/flags/switzerland.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/sprites/shuppet.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
        "count": 4,
      },
    ]
  },
  {
    firstName: 'Sumika Yanagida',
    flag: '../../assets/flags/japan.png',
    sprite1: '../../assets/sprites/blank.png',
    sprite2: '../../assets/hyphen.png',
    list: '../../assets/sprites/blank.png',
    type: '',
    deck: [
      {
        cardImg: '../../assets/cards/2008-2010',
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
                        document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 Worlds";

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
                    document.querySelector('.playerName').innerHTML = item.firstName + " - 2010 Worlds";

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
