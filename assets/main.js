const body = document.body;
const sidebar = document.querySelector('.sidebar');
const toggle_sidebar = document.querySelector('.toggle-sidebar');
const toggle_darkmode = document.querySelector('.toggle-darkmode');

toggle_sidebar.addEventListener('click', (e) => {
  e.preventDefault();
  sidebar.classList.toggle('open');
});

toggle_darkmode.addEventListener('click', (e) => {
  e.preventDefault();
  toggle_darkmode.classList.toggle('active');
  body.classList.toggle('dark');
});