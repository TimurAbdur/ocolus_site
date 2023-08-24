AOS.init({
    once: true,
});

const tabItem = document.getElementsByClassName('tabs__btn-item');
const tabContent = document.getElementsByClassName('tabs__content-item');

let i;
for(i = 0; i < tabItem.length; i++) {
    tabItem[i].addEventListener('click', open)
}

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    for(i = 0; i < tabItem.length; i++) {
        tabItem[i].classList.remove('tabs__btn-item--active');
    }

    for(i = 0; i < tabItem.length; i++) {
        tabContent[i].classList.remove('tabs__content-item--active');
    }

    tabTarget.classList.add('tabs__btn-item--active')

    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}


const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('menu--active')
})