let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

navlist.style.display = navlist.style.display === 'none' ? 'flex' : 'none';
function toggleNavList() {
    if (window.innerWidth < 950) {
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('open') ? navlist.style.display = 'flex' : navlist.style.display = 'none';
        navlist.style.backdropFilter = navlist.classList.contains('open') ? 'blur(32px)' : 'none';
    }
}

menu.onclick = toggleNavList;

window.onresize = () => {
    if (window.innerWidth >= 950) {
        navlist.classList.remove('open');
        navlist.style.backdropFilter = 'none';
        navlist.style.display = 'none';
    }
}