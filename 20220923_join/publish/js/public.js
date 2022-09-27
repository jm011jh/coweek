const publicNoticeSwiper = new Swiper('.publicNoticeSwiper', {//인공지능
    // loop: true,
    direction: "vertical",
    // speed : 200,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: false,
    navigation: {
      nextEl: '.publicNoticeSwiper-button-next',
      prevEl: '.publicNoticeSwiper-button-prev',
    },
});