'use strict'

const tabItem = document.querySelectorAll('.tabs__btn');
const tabContent = document.querySelectorAll('.tabs-content__item');

tabItem.forEach(function(el) {
  el.addEventListener('click', open);
})

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;
  tabItem.forEach(function(item){
    item.classList.remove('tabs__btn--active')
  })
  tabContent.forEach(function(item){
    item.classList.remove('tabs-content__item--active')
  })
  tabTarget.classList.add('tabs__btn--active')
  document.querySelector(`#${button}`).classList.add('tabs-content__item--active')
}