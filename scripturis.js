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
  $('.menu-list__link').click(function(){
     $('.icon-menu').removeClass('_active');
      $('.menu__list').removeClass('open');
      $('.logo__img').removeClass('fix')
   })

  
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}