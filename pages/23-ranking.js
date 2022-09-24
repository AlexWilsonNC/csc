const list = document.querySelector('.list');

const sortName = document.querySelector('.sort-name')
const sortAttendance = document.querySelector('.sort-a-points')
const sortCsPoints = document.querySelector('.sort-cs-points')

let players = [
  {
    firstName: 'Alex Wilson',
    attendancePoints: 1,
    bfl: 1,
    csPoints: 15,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Evan Lee',
    attendancePoints: 1,
    bfl: 1,
    csPoints: 45,
    first: 1,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Joseph Bjerg',
    attendancePoints: 1,
    bfl: 1,
    csPoints: 30,
    first: 0,
    second: 1,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Samuel Roach',
    attendancePoints: 1,
    bfl: 1,
    csPoints: 20,
    first: 0,
    second: 0,
    top4: 1,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Tony Vuong',
    attendancePoints: 1,
    bfl: 1,
    csPoints: 20,
    first: 0,
    second: 0,
    top4: 1,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Chris Urcinola',
    attendancePoints: 1,
    bfl: 1,
    csPoints: 15,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    top16: 0,
    invite: true
  },
  {
    firstName: 'John Bailey',
    attendancePoints: 1,
    bfl: 1,
    csPoints: 15,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Morgan Dunn',
    attendancePoints: 1,
    bfl: 1,
    csPoints: 15,
    first: 0,
    second: 0,
    top4: 0,
    top8: 1,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Christopher Endriga',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Madison Wighton',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Collin Yarbrough',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Jonathan Arias',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Zane Carter',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Clay Heath',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Chesney Anderson',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Bernal Garcia',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Andrew Reinhardt',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Donovan Yarborough',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Matt Pereira',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Hunter Swanzy',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Adam Jones',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Adam Reinhardt',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Brett Dunn',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: "Mitchell O'Neill",
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Lucas Miller',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Andrew Miller',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Luis Sotelo',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
  {
    firstName: 'Nathan Hall',
    attendancePoints: 1,
    bfl: 0,
    csPoints: 0,
    first: 0,
    second: 0,
    top4: 0,
    top8: 0,
    top16: 0,
    invite: false
  },
]

let desc = false;
sortName.addEventListener('click', () => {
  let array = sort_array_by_name(players, 'firstName', desc);
  displayList(array);
  desc = !desc;
  sortName.style.backgroundColor = 'rgb(151, 14, 14)';
  sortCsPoints.style.backgroundColor = 'rgb(206, 46, 46)';
  // sortAttendance.style.backgroundColor = 'rgb(206, 46, 46)';
  document.querySelector('.list').classList.remove('color-rank');
  document.querySelector('.list').classList.remove('bold-rank');
});
function sort_array_by_name(array, sort, desc) {
  array.sort(function (a, b) {
    if (a[sort] < b[sort]) return -1;
    if (a[sort] > b[sort]) return 1;
    return 0;
  })

  return array;
}

sortAttendance.addEventListener('click', () => {
  let array = sort_array_by(players, 'attendancePoints', desc);
  displayList(array);
  desc = !desc;
  sortName.style.backgroundColor = 'rgb(206, 46, 46)';
  sortCsPoints.style.backgroundColor = 'rgb(206, 46, 46)';
  sortAttendance.style.backgroundColor = 'rgb(151, 14, 14)';
  document.querySelector('.list').classList.remove('color-rank');
  document.querySelector('.list').classList.remove('bold-rank');

});
function sort_array_by(array, sort, desc) {
  array.sort(function (a, b) {
    if (a[sort] < b[sort]) return 1;
    if (a[sort] > b[sort]) return -1;
    return 0;
  })

  return array;
}

sortCsPoints.addEventListener('click', () => {
  let array = sort_array_by_cs(players, 'csPoints', desc);
  displayList(array);
  desc = !desc;
  sortName.style.backgroundColor = 'rgb(206, 46, 46)';
  sortCsPoints.style.backgroundColor = 'rgb(151, 14, 14)';
  // sortAttendance.style.backgroundColor = 'rgb(206, 46, 46)';
  document.querySelector('.list').classList.add('color-rank');
  document.querySelector('.list').classList.add('bold-rank');
});
function sort_array_by_cs(array, sort, desc) {
  array.sort(function (a, b) {
    if (a[sort] < b[sort]) return 1;
    if (a[sort] > b[sort]) return -1;
    return 0;
  })

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
    // item.attendancePoints.classList.add('small-points');

    // if (item.invite == true) {
    //   document.querySelector('.item-title').classList.add('bold-txt');
    // }

    item_element.appendChild(title);

    // if (item.csPoints >= 1) {
      item_element.addEventListener('click', function () {
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.behind-modal').style.display = 'block';
        document.querySelector('.modal-name').innerHTML = item.firstName;
        document.querySelector('.modal-bfl').innerHTML = `${item.bfl}/10`;
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
    // }

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
