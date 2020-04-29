const documentElement = document.querySelector('html');
const contentElement = document.querySelector('.main-content');
const sidebarElement = document.querySelector('.sidebar');
const sidebarIsOpen = () =>
  documentElement.classList.contains('sidebar-is-open');

const openSidebar = () => {
  /* How you trigger the change is up to you */
  documentElement.classList.add('sidebar-is-open');
  document.getElementById('myImage').src = 'images/exit.svg';
};

const closeSidebar = () => {
  documentElement.classList.remove('sidebar-is-open');
  document.getElementById('myImage').src = 'images/menu.svg';
};

const toggleSidebar = () => {
  sidebarIsOpen() ? closeSidebar() : openSidebar();
};
