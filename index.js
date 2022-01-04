let darkMode = localStorage.getItem('darkMode');
const darkButton = document.getElementById('theme-btn');

const enableDarkMode = () => {
  document.body.classList.add('dark');
  document.getElementById('theme-btn').innerText = 'Light Mode';
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('dark');
  document.getElementById('theme-btn').innerText = 'Dark Mode';
  localStorage.setItem('darkMode', null);
};

if(darkMode === 'enabled') {
  enableDarkMode();
}

darkButton.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});