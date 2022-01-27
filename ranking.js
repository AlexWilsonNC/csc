const list = document.querySelector('.list');

const sortName = document.querySelector('.sort-name')
const sortAttendance = document.querySelector('.sort-a-points')
const sortCsPoints = document.querySelector('.sort-cs-points')

let players = [
  {
    firstName: 'Alex Wilson',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 1,
    top8: 0
  },
  {
    firstName: 'Samuel Roach',
    attendancePoints: 1,
    csPoints: 15,
    first: 0,
    second: 0,
    top4: 1,
    top8: 0,
    img1: '../assets/sprites/urshifu-gmax.png',
    img2: '../assets/sprites/umbreon.png'
  },
  {
    firstName: 'Chris Diller',
    attendancePoints: 1,
    csPoints: 8,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    img1: '../assets/sprites/sableye.png',
    img2: '../assets/sprites/weezing-galar.png'
  },
  {
    firstName: 'James Briglia',
    attendancePoints: 1,
    csPoints: 25,
    first: 1,
    second: 0,
    top4: 0,
    top8: 0,
    img1: '../assets/sprites/eternatus-eternamax.png',
    img2: '../assets/sprites/umbreon.png'
  },
  {
    firstName: 'Ricky (Zane) Carter',
    attendancePoints: 2,
    csPoints: 35,
    first: 0,
    second: 1,
    top4: 1,
    top8: 0,
    img1: '../assets/sprites/eternatus-eternamax.png',
    img2: '../assets/sprites/weezing-galar.png'
  },
  {
    firstName: "Mitch O'Neill",
    attendancePoints: 3,
    csPoints: 30,
    first: 0,
    second: 0,
    top4: 2,
    top8: 0,
    img1: '../assets/sprites/jolteon.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Anthony Nimmons',
    attendancePoints: 3,
    csPoints: 8,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    img1: '../assets/sprites/duraludon-gmax.png',
    img2: '../assets/sprites/zacian-crowned.png'
  },
  {
    firstName: 'Kelly Nimmons',
    attendancePoints: 3,
    csPoints: 15,
    first: 0,
    second: 0,
    top4: 1,
    top8: 0,
    img1: '../assets/sprites/urshifu-rapid-strike-gmax.png',
    img2: '../assets/sprites/sylveon.png'
  },
  {
    firstName: 'Olivia Farmer',
    attendancePoints: 3,
    csPoints: 31,
    first: 0,
    second: 0,
    top4: 1,
    top8: 2,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Phillip Lineberry',
    attendancePoints: 1,
    csPoints: 8,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    img1: '../assets/sprites/malamar.png',
    img2: '../assets/sprites/octillery.png'
  },
  {
    firstName: 'Gaberiel Labra',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Jennifer Perez',
    attendancePoints: 3,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Chris Urcinola',
    attendancePoints: 2,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Joseph Bjerg',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Jessica (Raven) Carter',
    attendancePoints: 2,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Landon Hawkins',
    attendancePoints: 3,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Jeremiah Lynch',
    attendancePoints: 3,
    csPoints: 15,
    first: 0,
    second: 0,
    top4: 1,
    top8: 0,
    img1: '../assets/sprites/zekrom.png',
    img2: '../assets/sprites/raikou.png'
  },
  {
    firstName: 'Jason Joyce',
    attendancePoints: 5,
    csPoints: 40,
    first: 0,
    second: 2,
    top4: 0,
    top8: 0,
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
    top8: 0
  },
  {
    firstName: 'Bennet Kobos',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Jonathan Arias',
    attendancePoints: 4,
    csPoints: 40,
    first: 0,
    second: 2,
    top4: 0,
    top8: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'James Quick',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Caleb Rogerson',
    attendancePoints: 2,
    csPoints: 40,
    first: 1,
    second: 0,
    top4: 1,
    top8: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Tristan Bennett',
    attendancePoints: 1,
    csPoints: 15,
    first: 0,
    second: 0,
    top4: 1,
    top8: 0,
    img1: '../assets/sprites/urshifu-rapid-strike-gmax.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Carl Simpson',
    attendancePoints: 1,
    csPoints: 8,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    img1: '../assets/sprites/calyrex-ice-rider.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Nathan Osterkatz',
    attendancePoints: 1,
    csPoints: 8,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    img1: '../assets/sprites/jolteon.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Tony Vuong',
    attendancePoints: 2,
    csPoints: 16,
    first: 0,
    second: 0,
    top4: 0,
    top8: 2,
    img1: '../assets/sprites/urshifu-gmax.png',
    img2: '../assets/sprites/umbreon.png'
  },
  {
    firstName: 'Cole Lewis',
    attendancePoints: 1,
    csPoints: 8,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    img1: '../assets/sprites/urshifu-rapid-strike-gmax.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Alex Robbins',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Dick Collier',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Justin Chestnut',
    attendancePoints: 2,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Carter Petrocci',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Nathon Trimberger',
    attendancePoints: 1,
    csPoints: 25,
    first: 1,
    second: 0,
    top4: 0,
    top8: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Jake Pilch',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Clint Quinn',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Karla Wilson',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Jorden Hamilton',
    attendancePoints: 1,
    csPoints: 25,
    first: 1,
    second: 0,
    top4: 0,
    top8: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Vernon Hoffman',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Maxwell Hoffman',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Taylor Greenstreet',
    attendancePoints: 1,
    csPoints: 8,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    img1: '../assets/sprites/urshifu-rapid-strike-gmax.png',
    img2: '../assets/sprites/inteleon.png'
  },
  {
    firstName: 'Kevin Fallin',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Joshua Frowley',
    attendancePoints: 1,
    csPoints: 15,
    first: 0,
    second: 0,
    top4: 1,
    top8: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Tim Weaver',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Chase Weaver',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Cody Criner',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Robbie Trittschuh',
    attendancePoints: 1,
    csPoints: 20,
    first: 0,
    second: 1,
    top4: 0,
    top8: 0,
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
    top8: 0
  },
  {
    firstName: 'Dillon Bussert',
    attendancePoints: 1,
    csPoints: 15,
    first: 0,
    second: 0,
    top4: 1,
    top8: 0,
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
    top8: 0
  },
  {
    firstName: 'Matthew Reimels',
    attendancePoints: 1,
    csPoints: 8,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    img1: '../assets/sprites/urshifu-gmax.png',
    img2: '../assets/sprites/umbreon.png'
  },
  {
    firstName: 'Evan Campbell',
    attendancePoints: 1,
    csPoints: 25,
    first: 1,
    second: 0,
    top4: 0,
    top8: 0,
    img1: '../assets/sprites/mew.png',
    img2: '../assets/sprites/genesect.png'
  },
  {
    firstName: 'Gabriel Hernandez',
    attendancePoints: 1,
    csPoints: 15,
    first: 0,
    second: 0,
    top4: 1,
    top8: 0,
    img1: '../assets/sprites/urshifu-gmax.png',
    img2: '../assets/sprites/umbreon.png'
  },
  {
    firstName: 'Justin Nesmith',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Tyler Pesry',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Jerry Riley',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Daniel Henson',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Frankie Puleio',
    attendancePoints: 1,
    csPoints: 25,
    first: 1,
    second: 0,
    top4: 0,
    top8: 0,
    img1: '../assets/sprites/gardevoir.png',
    img2: '../assets/sprites/dragapult.png'
  },
  {
    firstName: 'Stephen Tysinger',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  },
  {
    firstName: 'Steven Bauer',
    attendancePoints: 1,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0
  }
]
// ,
//   {
//     firstName: 'name',
//     attendancePoints: 1,
//     csPoints: 0,
//     first: 0,
//     second: 0,
//     top4: 0,
//     top8: 0
//   }

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