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
  