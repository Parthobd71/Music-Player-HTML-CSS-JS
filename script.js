//SHOW & HIDE SIDEBAR
let sidebarBtn = document.querySelector('.sidebar-btn');
let sidebarIcon = document.querySelector('.sidebar-btn i');
let aside = document.querySelector('aside');


//hide & how sidebar elements
let logo = document.querySelector('.logo');
let miniLogo = document.querySelector('.small-logo');
let musicMenuH2 = document.querySelectorAll('.music-menu h2');
let musicMenuP = document.querySelectorAll('.music-menu ul li a p');
let musicMenuLi = document.querySelectorAll('.music-menu ul li');

sidebarBtn.addEventListener('click', () => {
    aside.classList.toggle('sidebar-hide');
    sidebarIcon.classList.toggle('toggle-sidebar-btn');
    miniLogo.classList.toggle('show-element');
    musicMenuH2.forEach(h2 => h2.classList.toggle('hide-element'));
    musicMenuP.forEach(p => p.classList.toggle('hide-element'));
    musicMenuLi.forEach(li => li.classList.toggle('menu-gap'));
    logo.classList.toggle('hide-element')
});