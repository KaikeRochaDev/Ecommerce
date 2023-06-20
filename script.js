function copyMenu(){
    var dptCategory = document.querySelector('.dpt-cat')
    var dptPlace = document.querySelector('.departments')
    dptPlace.innerHTML = dptCategory.innerHTML

    var mainNav = document.querySelector('.header-nav nav')
    var navPlace= document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML

    var topNav = document.querySelector('.header-top .wrapper')
    var topPlace = document.querySelector('.off-canvas .thetop-nav')
    topPlace.innerHTML = topNav.innerHTML
}

copyMenu()

const menuButton = document.querySelector('.trigger')
const closeButton = document.querySelector('.t-close')
const addclass = document.querySelector('.site')
menuButton.addEventListener('click', function(){
    addclass.classList.toggle('showmenu')
})


closeButton.addEventListener('click', function(){
    addclass.classList.remove('showmenu')
})

const submenu = document.querySelectorAll('.has-child .icon-small')
submenu.forEach((menu) => menu.addEventListener('click', toggle))

function toggle(e){
    e.preventDefault()
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null)
    if(this.closest('.has-child').classList != 'expand'){
        this.closest('.has-child').classList.toggle("expand")
    }
}

const swiper = new Swiper(".swiper", {
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

})

const searchButton = document.querySelector('.t-search'),
    tClose = document.querySelector('.search-close'),
    showClass = document.querySelector('.site');
searchButton.addEventListener('click', function () {
    showClass.classList.toggle('showsearch');
})
tClose.addEventListener('click', function () {
    showClass.classList.remove('showsearch')
})

window.addEventListener("load", function() {
    var mySwiper = new Swiper(".myslider", {
      loop: true,
      effect: "slide",
      direction: "horizontal",
      autoplay: {
        delay: 4000, 
      },
      on: {
        slideChange: function() {
          var activeIndex = this.realIndex;
          var paginationBullets = document.querySelectorAll(
            ".swiper-pagination-bullet"
          );
  
          for (var i = 0; i < paginationBullets.length; i++) {
            paginationBullets[i].classList.remove("swiper-pagination-bullet-active");
          }
  
          paginationBullets[activeIndex].classList.add("swiper-pagination-bullet-active");
        },
      },
    });
  });
  
const dptButton = document.querySelector('.dpt-cat .dpt-trigger')
const dptClass = document.querySelector('.site')

dptButton.addEventListener('click', function(){
  dptClass.classList.toggle('showdpt')
})

var productThumb = new Swiper ('.small-image', {
  loop: true,
  spaceBetween: 10,
  slidesPerView:3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    481: {
      spaceBetween: 32,
    }
  }
})

var productBig = new Swiper ('.big-image', {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productThumb
  }
})

var stocks = document.querySelectorAll('.products .stock')
for (let x = 0; x < stocks.length; x++) {
  let stock = stocks[x].dataset.stock,
  available = stocks[x].querySelector('.qty-available').innerHTML,
  sold = stocks[x].querySelector('.qty-sold').innerHTML,
  percent = sold * 100 / stock;

  stocks[x].querySelector('.available').style.width = percent + "%"
}

const divtoShow = ".mini-cart"
const divPopup = document.querySelector(divtoShow)
const divTrigger = document.querySelector('.cart-shopping')

divTr.addEventListener('click', () => {
  setTimeout(() => {
    if(!divPopup.classList.contains("show")) {
      divPopup.classList.add('show')
    }
  }, 250)
})

document.addEventListener('click', (e) => {
  const isClosest = e.target.closest(divtoShow)
  if(!isClosest && divPopup.classList.contains('show')){
    divPopup.classList.remove('show')
  }
})

window.onload = function() {
  document.querySelector('.site').classList.toggle('showmodal')
}

document.querySelector('.modalclose').addEventListener('click', function() {
  document.querySelector('.site').classList.remove('showmodal')
})