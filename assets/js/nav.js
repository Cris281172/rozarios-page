const test = [...document.querySelectorAll('.link')];
const menuBar = document.querySelector('#menu-bar');


const actualUrlArray = window.location.href.split('/');
const actualUrlString = actualUrlArray[actualUrlArray.length - 1];


const test2 = test.find(el => {
    return el.getAttribute('data') === actualUrlString

})

test2.classList.add('active')

const menuAnimationBar = () => {
    document.querySelector('.nav-list').classList.toggle('menu-active')
    document.querySelectorAll('.main-header .main-nav .nav-list .item').forEach((el) => el.classList.toggle('menu-active'))
}

menuBar.addEventListener('click', menuAnimationBar)