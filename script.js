$('.icon-menu').click(function(){
    $('.icon-menu').toggleClass('_active');
    $('.menu__list').toggleClass('open');
    $('.logo__img').toggleClass('fix')
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