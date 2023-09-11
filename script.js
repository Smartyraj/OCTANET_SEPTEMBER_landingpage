const bar = document.getElementById('bars');
const hide = document.getElementById('close');
const nav = document.getElementById('menuItems');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.toggle('show');
    })
}

if(hide){
    hide.addEventListener('click', () => {
        nav.classList.toggle('show');
    })
}