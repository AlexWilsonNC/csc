const closeAlert = document.querySelector('.close-alert');
const alertWhole = document.querySelector('.weather-alert');

closeAlert.addEventListener('click', function closeIt() {
    alertWhole.classList.add('close');
})