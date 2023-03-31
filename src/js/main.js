'use strict'

const tabItem = document.querySelectorAll('.tabs__btn');
const tabContent = document.querySelectorAll('.tabs-content__item');
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')
const videoBtn = document.querySelectorAll('.video__btn')
const popap = document.querySelector('.popap')
const btnClose = document.querySelector('.popap__btn-close')

videoBtn.forEach(function(el){
  el.addEventListener('click', function(){
    popap.classList.add('popap--open')
  })
})


tabItem.forEach(function(el) {
  el.addEventListener('click', open);
})

burger.addEventListener('click', function() {
  menu.classList.toggle('menu--opened')
  burger.classList.toggle('burger--opened')
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

btnClose.addEventListener('click', function(){
  popap.classList.remove('popap--open')
})


