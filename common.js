const progress = document.querySelector('.progress');
    
const swiper = new Swiper('.swiper-container', {
  loop: true,
  loopedSlides: 3,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next.next1',
    prevEl: '.swiper-button-prev.prev1',
  },
  pagination: {
    el: ".swiper-pagination.pag1",
    type: "fraction",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  on: {
    init: function () {
      progress.classList.remove("animate");
      progress.classList.add("animate");
    },
    slideChangeTransitionStart: function () {
      progress.classList.remove("animate");
    },
    slideChangeTransitionEnd: function () {
      progress.classList.add("animate");
    }
  }
});


const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  breakpoints : {
    400: {
      slidesPerView: 1,
    },

    700: {
      slidesPerView: 2,
    },

    1000: {
      slidesPerView: 3.5,
    },
  },
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  navigation: {
    nextEl: ".swiper-button-next.next2",
    prevEl: ".swiper-button-prev.prev2",
  },
});


const swiper3 = new Swiper(".mySwiper3", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next.next3",
    prevEl: ".swiper-button-prev.prev3",
  },
});

$(function(){
  $('header .hd_bar').click(function(){
      $('.toggle_mo').fadeToggle()
  })
})

