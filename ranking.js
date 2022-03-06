const list = document.querySelector('.list');

const sortName = document.querySelector('.sort-name')
const sortAttendance = document.querySelector('.sort-a-points')
const sortCsPoints = document.querySelector('.sort-cs-points')

let players = [
  {
    firstName: 'Alex Wilson',
    attendancePoints: 5,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Samuel Roach',
    attendancePoints: 4,
    csPoints: 26,
    first: 0,
    second: 0,
    top4: 1,
    top8: 1,
    top16: 0,
    img1: '../assets/sprites/urshifu-gmax.png',
    img2: '../assets/sprites/umbreon.png'
  },
  {
    firstName: 'Chris Diller',
    attendancePoints: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    top16: 0,
    img1: '../assets/sprites/sableye.png',
    img2: '../assets/sprites/weezing-galar.png'
  },
  {
    firstName: 'James Briglia',
    attendancePoints: 5,
    csPoints: 100,
    first: 2, // etern | etern
    second: 0,
    top4: 0,
    top8: 2, // etern
    top16: 0,
    img1: '../assets/sprites/eternatus-eternamax.png',
    img2: '../assets/sprites/umbreon.png'
  },
  {
    firstName: 'Ricky (Zane) Carter',
    attendancePoints: 10,
    csPoints: 232,
    first: 3, // ice rider 1 | mew 1
    second: 2, // eternatus 1 | duraludon 1
    top4: 2, // eternatus 1 | jolteon 1
    top8: 2, // mew 1 | etern 1
    top16: 0,
    img1: '../assets/sprites/eternatus-eternamax.png',
    img2: '../assets/sprites/weezing-galar.png'
  },
  {
    firstName: "Mitch O'Neill",
    attendancePoints: 9,
    csPoints: 112,
    first: 1, // jolt 30+
    second: 1, // jolt 1
    top4: 2, // jolt
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/jolteon.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Anthony Nimmons',
    attendancePoints: 7,
    csPoints: 92,
    first: 1, // moltres zap
    second: 0,
    top4: 1, // moltres zap
    top8: 3, // duraludon 1 | molt zap 1 | ston 30+
    top16: 0,
    img1: '../assets/sprites/moltres-galar.png',
    img2: '../assets/sprites/zapdos-galar.png'
  },
  {
    firstName: 'Kelly Nimmons',
    attendancePoints: 7,
    csPoints: 88,
    first: 1, // duraludon
    second: 0,
    top4: 2, // sylv rs ursh 1 | dural 1
    top8: 1, // leaf 30+
    top16: 0,
    img1: '../assets/sprites/duraludon-gmax.png',
    img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Olivia Farmer',
    attendancePoints: 4,
    csPoints: 46,
    first: 0,
    second: 0,
    top4: 1, // mew
    top8: 3, // jolt 2 | mew 1 
    top16: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Phillip Lineberry',
    attendancePoints: 2,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    top16: 0,
    img1: '../assets/sprites/malamar.png',
    img2: '../assets/sprites/octillery.png'
  },
  {
    firstName: 'Gaberiel Labra',
    attendancePoints: 2,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jennifer Perez',
    attendancePoints: 6,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Chris Urcinola',
    attendancePoints: 7,
    csPoints: 16,
    first: 0,
    second: 0,
    top4: 1,
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/dracozolt.png',
    img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Joseph Bjerg',
    attendancePoints: 3,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jessica (Raven) Carter',
    attendancePoints: 9,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/blank.png',
    img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Landon Hawkins',
    attendancePoints: 5,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/blank.png',
    img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jeremiah Lynch',
    attendancePoints: 5,
    csPoints: 26,
    first: 0,
    second: 0,
    top4: 1, // glc lightning
    top8: 1, // bolt
    top16: 0,
    img1: '../assets/sprites/zekrom.png',
    img2: '../assets/sprites/raikou.png'
  },
  {
    firstName: 'Jason Joyce',
    attendancePoints: 10,
    csPoints: 110,
    first: 1, // moltre
    second: 2, // moltre 1 | glc 1
    top4: 0,
    top8: 1,
    top16: 0,
    img1: '../assets/sprites/moltres-galar.png',
    img2: '../assets/sprites/zapdos-galar.png'
  },
  {
    firstName: 'Zak Kobos',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Bennet Kobos',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Ben Fletcher',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jonathan Arias',
    attendancePoints: 11,
    csPoints: 186,
    first: 2, // mew 2
    second: 3, // mew 3
    top4: 1, // mew 1
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'James (Jay) Quick',
    attendancePoints: 6,
    csPoints: 76,
    first: 1, // mew 1
    second: 0,
    top4: 0,
    top8: 3, // 30+ players mew | ir caly 2
    top16: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Caleb Rogerson',
    attendancePoints: 9,
    csPoints: 244,
    first: 3, // mew 3
    second: 2, // mew 1 | mew 1
    top4: 3, // mew 3
    top8: 1, // weez 30+
    top16: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Tristan Bennett',
    attendancePoints: 1,
    csPoints: 16,
    first: 0,
    second: 0,
    top4: 1,
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/urshifu-rapid-strike-gmax.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Tristan Lackey',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Carl Simpson',
    attendancePoints: 5,
    csPoints: 50,
    first: 0,
    second: 0,
    top4: 0,
    top8: 4,
    top16: 1,
    img1: '../assets/sprites/calyrex-ice-rider.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Nathan Osterkatz',
    attendancePoints: 3,
    csPoints: 40,
    first: 0,
    second: 0,
    top4: 1, // 30+ players | mew
    top8: 1, // mew
    top16: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Tony Vuong',
    attendancePoints: 6,
    csPoints: 30,
    first: 0,
    second: 0,
    top4: 0,
    top8: 2, // ursh 2
    top16: 1,
    img1: '../assets/sprites/urshifu-gmax.png',
    img2: '../assets/sprites/umbreon.png'
  },
  {
    firstName: 'Cole Lewis',
    attendancePoints: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    top16: 0,
    img1: '../assets/sprites/urshifu-rapid-strike-gmax.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Alex Robbins',
    attendancePoints: 6,
    csPoints: 80,
    first: 0,
    second: 1, // expanded dark
    top4: 1, // mew 30+
    top8: 2, // mew 2
    top16: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Dick Collier',
    attendancePoints: 2,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Kalie Kren',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Justin Chestnut',
    attendancePoints: 3,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 1, // 30+ players
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Carter Petrocci',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Nathon Trimberger',
    attendancePoints: 6,
    csPoints: 106,
    first: 2, // mew 2
    second: 0,
    top4: 1, // mew
    top8: 1,
    top16: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Jake Pilch',
    attendancePoints: 3,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Clint Quinn',
    attendancePoints: 4,
    csPoints: 32,
    first: 0,
    second: 0,
    top4: 2, // jolt 2
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/jolteon.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Karla Wilson',
    attendancePoints: 3,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jorden Hamilton',
    attendancePoints: 4,
    csPoints: 86,
    first: 1, // mew
    second: 1, // mew
    top4: 1, // mew
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Vernon Hoffman',
    attendancePoints: 2,
    csPoints: 16,
    first: 0,
    second: 0,
    top4: 1,
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/zacian-crowned.png',
    img2: '../assets/sprites/zamazenta-crowned.png'
  },
  {
    firstName: 'Maxwell Hoffman',
    attendancePoints: 2,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Zac Cooper',
    attendancePoints: 2,
    csPoints: 50,
    first: 0,
    second: 1, // jolt 30+
    top4: 0,
    top8: 1, // glc
    top16: 0,
      img1: '../assets/sprites/jolteon.png',
      img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Taylor Greenstreet',
    attendancePoints: 9,
    csPoints: 86,
    first: 1, // suicune 1
    second: 0,
    top4: 1, // mew 1
    top8: 2, // mew 2
    top16: 1,
    img1: '../assets/sprites/suicune.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Kevin Fallin',
    attendancePoints: 9,
    csPoints: 110,
    first: 1, // rs intel
    second: 2, // jolteon 1 | gengar 1
    top4: 0,
    top8: 1,
    top16: 0,
    img1: '../assets/sprites/urshifu-rapid-strike-gmax.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Joshua Frowley',
    attendancePoints: 4,
    csPoints: 102,
    first: 1, // mew
    second: 1, // mew
    top4: 2, // mew 2
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Tim Weaver',
    attendancePoints: 3,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    top16: 0,
    img1: '../assets/sprites/blank.png',
    img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Chase Weaver',
    attendancePoints: 3,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Cody Criner',
    attendancePoints: 2,
    csPoints: 40,
    first: 1,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/gengar-gmax.png',
      img2: '../assets/sprites/houndoom.png'
  },
  {
    firstName: 'Cody Smith',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Robbie Trittschuh',
    attendancePoints: 6,
    csPoints: 40,
    first: 0,
    second: 1, // mew
    top4: 0,
    top8: 1, // mew
    top16: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Jonathan Jiro',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Dillon Bussert',
    attendancePoints: 2,
    csPoints: 32,
    first: 0,
    second: 0,
    top4: 2, // zam 1 17 ppl | sirf 1 14 ppl
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/zacian-crowned.png',
    img2: '../assets/sprites/zamazenta-crowned.png'
  },
  {
    firstName: 'Brady Bussert',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Matthew Reimels',
    attendancePoints: 2,
    csPoints: 26,
    first: 0,
    second: 0,
    top4: 1, // jolt
    top8: 1, // ss
    top16: 0,
    img1: '../assets/sprites/jolteon.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Evan Campbell',
    attendancePoints: 5,
    csPoints: 90,
    first: 1, // mew
    second: 1, // mew
    top4: 0,
    top8: 1, // mew
    top16: 1,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Gabriel Hernandez',
    attendancePoints: 3,
    csPoints: 48,
    first: 0,
    second: 0,
    top4: 3, // ss urshi 2 | rs urshi 1
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/urshifu-gmax.png',
    img2: '../assets/sprites/houndoom.png'
  },
  {
    firstName: 'Justin Nesmith',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Tyler Perry',
    attendancePoints: 7,
    csPoints: 32,
    first: 0,
    second: 0,
    top4: 2,
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/calyrex-ice-rider.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Jerry Riley',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Daniel Henson',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Frankie Puleio',
    attendancePoints: 2,
    csPoints: 80,
    first: 2,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    img1: '../assets/sprites/malamar.png',
    img2: '../assets/sprites/blacephalon.png'
  },
  {
    firstName: 'Stephen Tysinger',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Marco Mandujano',
    attendancePoints: 1,
    csPoints: 10,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Steven Bauer',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Nathan Hall',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Morgan Dunn',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Brandon Kassab',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Abby Kassab',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Samantha Mills',
      attendancePoints: 1,
      csPoints: 30,
      first: 0,
      second: 1,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/moltres-galar.png',
      img2: '../assets/sprites/weezing-galar.png'
  },
  {
    firstName: 'Kameron Cox',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Will Whitener',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Brian Fox',
      attendancePoints: 3,
      csPoints: 90,
      first: 0,
      second: 3, // victini 2
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/victini.png'
  },
  {
    firstName: 'Nicholas Vause',
      attendancePoints: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/mew.png',
      img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Lucas Clark',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Clark Tew',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jean-luc Pennington',
      attendancePoints: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/duraludon-gmax.png'
  },
  {
    firstName: 'Keith Luehrs',
      attendancePoints: 2,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Roxie Bair',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Bailey Kernoodle',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Adam Pennington',
      attendancePoints: 2,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Raul Garay',
      attendancePoints: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Brianna Krausmann',
      attendancePoints: 2,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Matthew Krausmann',
      attendancePoints: 2,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Aaron Bair',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Ross Carpenter',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: "Alexander D’Amico",
      attendancePoints: 3,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/gengar-gmax.png',
      img2: '../assets/sprites/houndoom.png'
  },
  {
    firstName: 'Timothy Weaver',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Nathan Wilkins',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Charlie Matteson',
      attendancePoints: 3,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Evan Lee',
      attendancePoints: 7,
      csPoints: 152,
      first: 1, // mew 1
      second: 2, // 30+ players mew 1 | mew 1
      top4: 2, // mew 2
      top8: 1, // mew 1
      top16: 1,
      img1: '../assets/sprites/mew.png',
      img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Bryan Lindley',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Grant Manley',
      attendancePoints: 6,
      csPoints: 136,
      first: 2, // expanded necro 1 | mew 1
      second: 1, // ss umb
      top4: 0,
      top8: 2, // 30+ players | ss umb
      top16: 0,
      img1: '../assets/sprites/mew.png',
      img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Chip Richey',
      attendancePoints: 2,
      csPoints: 32,
      first: 0,
      second: 0,
      top4: 2, // mala | expanded caly
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/calyrex-shadow-rider.png',
      img2: '../assets/sprites/muk-alola.png'
  },
  {
    firstName: 'Joseph Ennis',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'George Wynn',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Miguel Sotelo',
      attendancePoints: 2,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Luis Gasca',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Luis Sotelo',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Andrew Wisniewsky',
      attendancePoints: 3,
      csPoints: 40,
      first: 0,
      second: 0,
      top4: 1, // 30+ players
      top8: 1,
      top16: 0,
      img1: '../assets/sprites/zacian-crowned.png',
      img2: '../assets/sprites/zamazenta-crowned.png'
  },
  {
    firstName: 'Ryan Moore',
      attendancePoints: 2,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/gengar-gmax.png',
      img2: '../assets/sprites/houndoom.png'
  },
  {
    firstName: 'Ruby Best',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Ethan Haynes',
      attendancePoints: 2,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1, // 30+ players
      top16: 0,
      img1: '../assets/sprites/duraludon-gmax.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Fretty Jay',
      attendancePoints: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1, // 30+ players
      top16: 0,
      img1: '../assets/sprites/sylveon.png',
      img2: '../assets/sprites/urshifu-rapid-strike-gmax.png'
  },
  {
    firstName: 'Michael Delgado',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Cordelia Ramont',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Bradley Kampa',
      attendancePoints: 2,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Kian Watkins',
      attendancePoints: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Shane Caughell',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'IsaBella Sztyber',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Simon Snell',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'John Orgel',
      attendancePoints: 3,
      csPoints: 60,
      first: 0,
      second: 1, // glc
      top4: 1, // mew 30+
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/mew.png',
      img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Kermit Jones',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jason Pike',
      attendancePoints: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Vaughan Mitchell',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Benjamin Pelton',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Nate Warren',
      attendancePoints: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jackson Connor',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jacob Muser',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jose Hidalgo',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Emilio Hidalgo',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'John Baires',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Elijah Crane',
      attendancePoints: 3,
      csPoints: 20,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Thomas Roche',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Blaine Hill',
      attendancePoints: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Kevin Arreola',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Kevin Rogerson',
      attendancePoints: 5,
      csPoints: 26,
      first: 0,
      second: 0,
      top4: 1, // jolt 1
      top8: 1, // jolt 1
      top16: 0,
      img1: '../assets/sprites/jolteon.png',
      img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Dillon Shumpert',
      attendancePoints: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/sylveon.png',
      img2: '../assets/sprites/urshifu-rapid-strike-gmax.png'
  },
  {
    firstName: 'Thomas Pierson',
      attendancePoints: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/urshifu-rapid-strike-gmax.png',
      img2: '../assets/sprites/falinks.png'
  },
  {
    firstName: 'Emma Pierson',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Patton Courie',
      attendancePoints: 2,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/weezing-galar.png',
      img2: '../assets/sprites/guzzlord.png'
  },
  {
    firstName: 'Paulo Castelo',
      attendancePoints: 2,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Brienna Krausmann',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Andrew Nance',
      attendancePoints: 2,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Andrew Walker',
      attendancePoints: 1,
      csPoints: 40,
      first: 1,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/mew.png',
      img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Oliver Harrison',
      attendancePoints: 2,
      csPoints: 30,
      first: 0,
      second: 1,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/jolteon.png',
      img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Ness Foster',
      attendancePoints: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/leafeon.png',
      img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Megan Wadsworth',
      attendancePoints: 2,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Tyle Krayah',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Brianna Austin',
      attendancePoints: 2,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Brian Meredith',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Addison Gercon',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Tony Austin',
      attendancePoints: 2,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Stephen Kennedy ',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Austin Murray',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jessica Austin',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Chase Weaver',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0
  },
  {
    firstName: 'Adam Crowe',
      attendancePoints: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/gengar-gmax.png',
      img2: '../assets/sprites/houndoom.png'
  },
  {
    firstName: 'Grayson Flax',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Will Whitey',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Christopher Black',
      attendancePoints: 6,
      csPoints: 32,
      first: 0,
      second: 0,
      top4: 2, // sr caly 1 | ? 1
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/calyrex-shadow-rider.png',
      img2: '../assets/sprites/gengar.png'
  },
  {
    firstName: 'Aiden Brittain',
      attendancePoints: 5,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Braxton Collier',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Russell Hylton',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Tryston Black',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Stephanie Hurst',
      attendancePoints: 6,
      csPoints: 40,
      first: 1,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/calyrex-shadow-rider.png',
      img2: '../assets/sprites/articuno-galar.png'
  },
  {
    firstName: 'Wesley Gantt',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Caleb Shelton',
      attendancePoints: 1,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1, // sr caly
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Danny Schmidinger',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Benjamin Bussert',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Vincent Pruitt',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Gerald Pruitt',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Maddilyn Hargan',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Harrison Burch',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Ryan Harrison',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Ravynia',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Diego Valdivia',
      attendancePoints: 2,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Wesley Johnson',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jared Thomas',
      attendancePoints: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jared Morales',
      attendancePoints: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/weezing-galar.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Stephen Hunter',
      attendancePoints: 2,
      csPoints: 30,
      first: 0,
      second: 1,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/mew.png',
      img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Matt Pereira',
      attendancePoints: 4,
      csPoints: 48,
      first: 0,
      second: 0,
      top4: 3, // jolt 3
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/jolteon.png',
      img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Trevor Wall',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Brandyn Osborne',
      attendancePoints: 2,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Max Lentz',
      attendancePoints: 3,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Jonathan Benitez',
      attendancePoints: 2,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Kyle Cook',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Evan Hearne',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Emily Smith',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Yubanny Lopez',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Victor Lopez',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Luna Dunham',
      attendancePoints: 1,
      csPoints: 30,
      first: 0,
      second: 1,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/suicune.png',
      img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Chesney Anderson',
      attendancePoints: 3,
      csPoints: 10,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Richard Collier',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Andre Maldorado',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Dino Ioannou',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Ty Wilson',
      attendancePoints: 2,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Milton Powell',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Gibby Tang',
      attendancePoints: 2,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 0,
      top8: 1, // duraludon 30+
      top16: 0,
      img1: '../assets/sprites/duraludon-gmax.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Loren Chester',
      attendancePoints: 3,
      csPoints: 40,
      first: 0,
      second: 1,
      top4: 0,
      top8: 0,
      top16: 1,
      img1: '../assets/sprites/urshifu-rapid-strike-gmax.png',
      img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Raymundo Prado',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Alberto Torres',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  },
  {
    firstName: 'Dominic Cenceli',
      attendancePoints: 1,
      csPoints: 16,
      first: 0,
      second: 0,
      top4: 1,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/suicune.png',
      img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Ash Ketchum',
      attendancePoints: 1,
      csPoints: 0,
      first: 0,
      second: 0,
      top4: 0,
      top8: 0,
      top16: 0,
      img1: '../assets/sprites/blank.png',
      img2: '../assets/sprites/blank.png'
  }
]

let desc = false;
sortName.addEventListener('click', () => {
  let array = sort_array_by_name(players, 'firstName', desc);
  displayList(array);
  desc = !desc;
  sortName.style.backgroundColor = 'rgb(151, 14, 14)';
  sortCsPoints.style.backgroundColor = 'rgb(206, 46, 46)';
  sortAttendance.style.backgroundColor = 'rgb(206, 46, 46)';
  document.querySelector('.list').classList.remove('color-rank');
  document.querySelector('.list').classList.remove('bold-rank');
});
function sort_array_by_name(array, sort, desc) {
  array.sort(function (a, b) {
    if (a[sort] < b[sort]) return -1;
    if (a[sort] > b[sort]) return 1;
    return 0;
  })

  // if (desc) array.reverse();

  return array;
}

sortAttendance.addEventListener('click', () => {
  let array = sort_array_by(players, 'attendancePoints', desc);
  displayList(array);
  desc = !desc;
  sortName.style.backgroundColor = 'rgb(206, 46, 46)';
  sortCsPoints.style.backgroundColor = 'rgb(206, 46, 46)';
  sortAttendance.style.backgroundColor = 'rgb(151, 14, 14)';
  document.querySelector('.list').classList.add('color-rank');
  document.querySelector('.list').classList.remove('bold-rank');
});
function sort_array_by(array, sort, desc) {
  array.sort(function (a, b) {
    if (a[sort] < b[sort]) return 1;
    if (a[sort] > b[sort]) return -1;
    return 0;
  })

  // if (desc) array.reverse();

  return array;
}

sortCsPoints.addEventListener('click', () => {
  let array = sort_array_by_cs(players, 'csPoints', desc);
  displayList(array);
  desc = !desc;
  sortName.style.backgroundColor = 'rgb(206, 46, 46)';
  sortCsPoints.style.backgroundColor = 'rgb(151, 14, 14)';
  sortAttendance.style.backgroundColor = 'rgb(206, 46, 46)';
  document.querySelector('.list').classList.add('color-rank');
  document.querySelector('.list').classList.add('bold-rank');
});
function sort_array_by_cs(array, sort, desc) {
  array.sort(function (a, b) {
    if (a[sort] < b[sort]) return 1;
    if (a[sort] > b[sort]) return -1;
    return 0;
  })

  // if (desc) array.reverse();

  return array;
}

function displayList(array = []) {
  list.innerHTML = '';

  for (let i = 0; i < array.length; i++) {
    let item = array[i];

    let item_element = document.createElement('li');
    item_element.classList.add('list-item');

    let title = document.createElement('li');
    title.classList.add('item-title');
    title.classList.add('player-name');
    title.innerHTML = item.firstName + " " + "(" + item.attendancePoints + ")";

    item_element.appendChild(title);

    if (item.csPoints >= 1) {
      item_element.addEventListener('click', function () {
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.modal-name').innerHTML = item.firstName;
        document.querySelector('.modal-cs').innerHTML = item.csPoints;
        document.querySelector('.modal-ap').innerHTML = item.attendancePoints;
        document.querySelector('.place1').innerHTML = item.first;
        document.querySelector('.place2').innerHTML = item.second;
        document.querySelector('.place3').innerHTML = item.top4;
        document.querySelector('.place4').innerHTML = item.top8;
        document.querySelector('.place5').innerHTML = item.top16;
        document.querySelector('.modal-img1').src = item.img1;
        document.querySelector('.modal-img2').src = item.img2;
      })
    }

    // let meta = document.createElement('div');
    // meta.classList.add('item-meta');
    // meta.innerHTML = item.attendancePoints;

    // item_element.appendChild(meta);

    let cs = document.createElement('div');
    cs.classList.add('item-point');
    cs.innerHTML = item.csPoints;

    item_element.appendChild(cs);

    list.appendChild(item_element);
  }
}

const modal = document.querySelector('.modal');
const modalX = document.querySelector('.modal-x');
const behind = document.querySelector('.behind-modal');

modalX.addEventListener('click', () => {
  modal.style.display = 'none';
  behind.style.display = 'none';
})
behind.addEventListener('click', () => {
  modal.style.display = 'none';
  behind.style.display = 'none';
})

// document.addEventListener('click', function (event) {
//   if (target.matches(modalX) || !target.closest(modal)) {closeModal()}
// }, false)

displayList(players);

window.onload = function () {
  document.querySelector('.sort-cs-points').click();
};