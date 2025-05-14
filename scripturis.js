var swiper = new Swiper(".mySwiper-our", {
    // slidesPerView: 2,
    spaceBetween: 25,
    // loop: true,
    slidesPerView: "auto",
  });

var swiper = new Swiper(".mySwiper-urists", {
    slidesPerView: 4,
    spaceBetween: 25,
    // loop: true,
    slidesPerView: "auto",
    
  });

var swiper = new Swiper(".mySwiper-feedback", {
  slidesPerView: "auto",
    spaceBetween: 10,
    // loop: true,
    // centeredSlides: true,
    
  });

  var swiper = new Swiper(".mySwiper-goods", {
    // slidesPerView: 3,
    slidesPerView: "auto",
    spaceBetween: 15,
    //  loop: true,
    
    
  });

  $('.icon-menu').click(function(){
      $('.icon-menu').toggleClass('_active');
      $('.menu__list').toggleClass('open');
      $('.logo__img').toggleClass('fix')
  })