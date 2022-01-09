const list = document.querySelector('.list');

const sortName = document.querySelector('.sort-name')
const sortAttendance = document.querySelector('.sort-a-points')
const sortCsPoints = document.querySelector('.sort-cs-points')

let list_items = [
  // {
  //   firstName: 'Alex Wilson',
  //   attendancePoints: 0,
  //   csPoints: 0
  // },
  {
    firstName: 'Samuel Roach',
    attendancePoints: 1,
    csPoints: 15
  },
  {
    firstName: 'Chris Diller',
    attendancePoints: 1,
    csPoints: 8
  },
  {
    firstName: 'James Briglia',
    attendancePoints: 1,
    csPoints: 25
  },
  {
    firstName: 'Ricky (Zane) Carter',
    attendancePoints: 1,
    csPoints: 20
  },
  {
    firstName: "Mitch O'Neill",
    attendancePoints: 1,
    csPoints: 15
  },
  {
    firstName: 'Anthony Nimmons',
    attendancePoints: 1,
    csPoints: 8
  },
  {
    firstName: 'Kelly Nimmons',
    attendancePoints: 1,
    csPoints: 0
  },
  {
    firstName: 'Olivia Farmer',
    attendancePoints: 1,
    csPoints: 8
  },
  {
    firstName: 'Phillip Lineberry',
    attendancePoints: 1,
    csPoints: 8
  },
  {
    firstName: 'Gaberiel Labra',
    attendancePoints: 1,
    csPoints: 0
  },
  {
    firstName: 'Jennifer Perez',
    attendancePoints: 1,
    csPoints: 0
  },
  {
    firstName: 'Chris Urcinola',
    attendancePoints: 1,
    csPoints: 0
  },
  {
    firstName: 'Joseph Bjerg',
    attendancePoints: 1,
    csPoints: 0
  },
  {
    firstName: 'Jessica (Raven) Carter',
    attendancePoints: 1,
    csPoints: 0
  },
  {
    firstName: 'Landon Hawkins',
    attendancePoints: 1,
    csPoints: 0
  },
  {
    firstName: 'Jeremiah Lynch',
    attendancePoints: 1,
    csPoints: 0
  },
  {
    firstName: 'Jason Joyce',
    attendancePoints: 1,
    csPoints: 0
  },
  {
    firstName: 'Zak Kobos',
    attendancePoints: 1,
    csPoints: 0
  },
  {
    firstName: 'Bennet Kobos',
    attendancePoints: 1,
    csPoints: 0
  },
  {
    firstName: 'Jonathan Arias',
    attendancePoints: 1,
    csPoints: 0
  },
  {
    firstName: 'James Quick',
    attendancePoints: 1,
    csPoints: 0
  }
]

let desc = false;
sortName.addEventListener('click', () => {
  let array = sort_array_by_name(list_items, 'firstName', desc);
  displayList(array);
  desc = !desc;
  sortName.style.backgroundColor = 'rgb(207, 83, 83)';
  sortCsPoints.style.backgroundColor = 'rgb(206, 46, 46)';
  sortAttendance.style.backgroundColor = 'rgb(206, 46, 46)';
});
function sort_array_by_name (array, sort, desc) {
  array.sort(function (a, b) {
    if (a[sort] < b[sort]) return -1;
    if (a[sort] > b[sort]) return 1;
    return 0;
  })

  // if (desc) array.reverse();

  return array;
}

// sortAttendance.addEventListener('click', () => {
//   let array = sort_array_by(list_items, 'attendancePoints', desc);
//   displayList(array);
//   desc = !desc;
//   sortName.style.backgroundColor = 'rgb(206, 46, 46)';
//   sortCsPoints.style.backgroundColor = 'rgb(206, 46, 46)';
//   sortAttendance.style.backgroundColor = 'rgb(207, 83, 83)';
// });
// function sort_array_by (array, sort, desc) {
//   array.sort(function (a, b) {
//     if (a[sort] < b[sort]) return 1;
//     if (a[sort] > b[sort]) return -1;
//     return 0;
//   })

//   // if (desc) array.reverse();

//   return array;
// }

sortCsPoints.addEventListener('click', () => {
  let array = sort_array_by_cs(list_items, 'csPoints', desc);
  displayList(array);
  desc = !desc;
  sortName.style.backgroundColor = 'rgb(206, 46, 46)';
  sortCsPoints.style.backgroundColor = 'rgb(207, 83, 83)';
  sortAttendance.style.backgroundColor = 'rgb(206, 46, 46)';
});
function sort_array_by_cs (array, sort, desc) {
  array.sort(function (a, b) {
    if (a[sort] < b[sort]) return 1;
    if (a[sort] > b[sort]) return -1;
    return 0;
  })

  // if (desc) array.reverse();

  return array;
}

function displayList (array = []) {
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

    // let meta = document.createElement('div');
    // meta.classList.add('item-meta');
    // meta.innerHTML = item.attendancePoints;

    // item_element.appendChild(meta);

    let cs = document.createElement('div');
    cs.classList.add('item-age');
    cs.innerHTML = item.csPoints;

    item_element.appendChild(cs);

    list.appendChild(item_element);
  }
}

displayList(list_items);

window.onload = function () {
  document.querySelector('.sort-cs-points').click();
};