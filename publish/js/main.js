const mainBannerSwiper = new Swiper('.mainBannerSwiper', {
    loop: true,
    speed : 10,
    allowTouchMove : false,
    effect: 'fade',
    autoplay: {
      delay: 5010,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.mainBannerSwiper-button-next',
      prevEl: '.mainBannerSwiper-button-prev',
    },
});
const mainBannerSwiperScrollbar = document.querySelector(".mainBannerSwiper-scrollbar")
const mainBannerSwiperCount = document.getElementById("mainBannerSwiperCount")
const mainBannerSwiperTotal = document.getElementById("mainBannerSwiperTotal")
var slideLength = (mainBannerSwiper.slides.length - mainBannerSwiper.loopedSlides*2)
mainBannerSwiperTotal.innerHTML = "0" + slideLength;

mainBannerSwiper.on('slideChange',function(){
    var slideNumber = mainBannerSwiper.realIndex + 1
    mainBannerSwiperCount.innerHTML = "0" + slideNumber;
    mainBannerSwiperScrollbar.classList.remove("animation")
    setTimeout(()=>{
      mainBannerSwiperScrollbar.classList.add("animation")
    },10)
})

const figureSwiper01 = new Swiper('.figureSwiper01', {//인공지능
    // loop: true,
    speed : 100,
    slidesPerView: 1.2,
    spaceBetween: 10,
    // effect: 'fade',
    navigation: {
      nextEl: '.figureSwiper01-button-next',
      prevEl: '.figureSwiper01-button-prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      767: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    },
});
const figureSwiper02 = new Swiper('.figureSwiper02', {//빅데이터
    // loop: true,
    speed : 100,
    slidesPerView: 1.2,
    spaceBetween: 10,
    // effect: 'fade',
    navigation: {
      nextEl: '.figureSwiper02-button-next',
      prevEl: '.figureSwiper02-button-prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      767: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    },
});
const figureSwiper03 = new Swiper('.figureSwiper03', {//차세대반도체
    // loop: true,
    speed : 100,
    slidesPerView: 1.2,
    spaceBetween: 10,
    // effect: 'fade',
    navigation: {
      nextEl: '.figureSwiper03-button-next',
      prevEl: '.figureSwiper03-button-prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      767: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    },
});
const figureSwiper04 = new Swiper('.figureSwiper04', {//미래자동차
    // loop: true,
    speed : 100,
    slidesPerView: 1.2,
    spaceBetween: 10,
    // effect: 'fade',
    navigation: {
      nextEl: '.figureSwiper04-button-next',
      prevEl: '.figureSwiper04-button-prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      767: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    },
});
const figureSwiper05 = new Swiper('.figureSwiper05', {//바이오헬스
  // loop: true,
  speed : 100,
  slidesPerView: 1.2,
  spaceBetween: 10,
  // effect: 'fade',
  navigation: {
    nextEl: '.figureSwiper05-button-next',
    prevEl: '.figureSwiper05-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    767: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  },
});
const figureSwiper06 = new Swiper('.figureSwiper06', {//실감미디어
  // loop: true,
  speed : 100,
  slidesPerView: 1.2,
  spaceBetween: 10,
  // effect: 'fade',
  navigation: {
    nextEl: '.figureSwiper06-button-next',
    prevEl: '.figureSwiper06-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    767: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  },
});
const figureSwiper07 = new Swiper('.figureSwiper07', {//지능형로봇
  // loop: true,
  speed : 100,
  slidesPerView: 1.2,
  spaceBetween: 10,
  // effect: 'fade',
  navigation: {
    nextEl: '.figureSwiper07-button-next',
    prevEl: '.figureSwiper07-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    767: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  },
});
const figureSwiper08 = new Swiper('.figureSwiper08', {//지능형로봇
  // loop: true,
  speed : 100,
  slidesPerView: 1.2,
  spaceBetween: 10,
  // effect: 'fade',
  navigation: {
    nextEl: '.figureSwiper08-button-next',
    prevEl: '.figureSwiper08-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    767: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  },
});
const promoSwiper = new Swiper('.promoSwiper', {//이벤트프로모션
    // loop: true,
    speed : 100,
    slidesPerView: 1.2,
    spaceBetween: 10,
    // effect: 'fade',
    navigation: {
      nextEl: '.promoSwiper-button-next',
      prevEl: '.promoSwiper-button-prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 2.2,
        spaceBetween: 20
      },
      767: {
        slidesPerView: 3,
      },
    },
});

const mainVideo = document.getElementById("mainVideo")
const mainVideoCover = document.getElementById("mainVideoCover")
mainVideoCover.addEventListener('click',function(){
  mainVideoCover.classList.add("hide")
  mainVideo.play();
})
mainVideo.addEventListener('click',function(){
  mainVideoCover.classList.remove("hide")
  mainVideo.pause();
})