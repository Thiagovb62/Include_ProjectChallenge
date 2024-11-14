let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.addEventListener('click', toggleNavList);

function toggleNavList() {
    if (window.innerWidth < 950) {
        navlist.style.display = 'none';
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('open');
        navlist.style.display = navlist.classList.contains('open') ? 'flex' : 'none';
        navlist.style.backdropFilter = navlist.classList.contains('open') ? 'blur(32px)' : 'none';
    }
}

function closeNavList() {
    if (window.innerWidth < 950) {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
        navlist.style.display = 'none';
        navlist.style.backdropFilter = 'none';
    } else {
        navlist.style.display = 'flex';
        navlist.style.backdropFilter = 'none';
    }
}

window.addEventListener('resize', closeNavList);