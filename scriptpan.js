
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
new WOW().init();


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

document.getElementById("switch1").onclick = FunctionChangeSrc1;
document.getElementById("switch2").onclick = FunctionChangeSrc2;
document.getElementById("switch3").onclick = FunctionChangeSrc3;

function FunctionChangeSrc1(){
        let picture = document.getElementById("picture1");

        
        picture.style.opacity = 0;

        setTimeout(() => {
            picture.src = '/src/red/bludo.png';
          }, 100)

    

        setTimeout(() => {
            picture.style.opacity = 1;
          }, 400)
        

        document.querySelectorAll('.goods__item-switch').forEach(item => {
            item.classList.remove('switch--active');
        });
        const switch1 = document.querySelector("#switch1");
        switch1.classList.add("switch--active");

     
}















function FunctionChangeSrc2(){
    
        let picture = document.getElementById("picture1");
        
        picture.style.opacity = 0;
        
        setTimeout(() => {
            picture.src = '/src/red/bludo-black.png';
          }, 100)

        // picture.src = '/src/red/bludo-black.png';
        
        setTimeout(() => {
            picture.style.opacity = 1;
          }, 400)

        document.querySelectorAll('.goods__item-switch').forEach(item => {
            item.classList.remove('switch--active');
        });

        const switch2 = document.getElementById("switch2");
        switch2.classList.add("switch--active");
    
}

function FunctionChangeSrc3(){
        let picture = document.getElementById("picture1");
        
        picture.style.opacity = 0;
        
        setTimeout(() => {
            picture.src = '/src/red/bludo-gray.png';
          }, 100)
        
        setTimeout(() => {
            picture.style.opacity = 1;
          }, 400)
        
        document.querySelectorAll('.goods__item-switch').forEach(item => {
            item.classList.remove('switch--active');
        });

        const switch3 = document.getElementById("switch3");
        switch3.classList.add("switch--active");
}

document.getElementById("switch4").onclick = FunctionChangeSrc4;
document.getElementById("switch5").onclick = FunctionChangeSrc5;
document.getElementById("switch6").onclick = FunctionChangeSrc6;
document.getElementById("switch7").onclick = FunctionChangeSrc7;
document.getElementById("switch8").onclick = FunctionChangeSrc8;
document.getElementById("switch9").onclick = FunctionChangeSrc9;
document.getElementById("switch10").onclick = FunctionChangeSrc10;
document.getElementById("switch11").onclick = FunctionChangeSrc11;
document.getElementById("switch12").onclick = FunctionChangeSrc12;

function FunctionChangeSrc4(){
    let picture = document.getElementById("picture2");

    picture.style.opacity = 0;
        
        setTimeout(() => {
            picture.src = '/src/red/glass.png';
          }, 100)
        
        setTimeout(() => {
            picture.style.opacity = 1;
          }, 400)
    
    // picture.src = '/src/red/glass.png';
    
    document.querySelectorAll('.goods__item-switch').forEach(item => {
        item.classList.remove('switch--active2');
    });

    const switch4 = document.getElementById("switch4");
    switch4.classList.add("switch--active2");
}

function FunctionChangeSrc5(){
    let picture = document.getElementById("picture2");

    picture.style.opacity = 0;
        
        setTimeout(() => {
            picture.src = '/src/red/glass-black.png';
          }, 100)
        
        setTimeout(() => {
            picture.style.opacity = 1;
          }, 400)

    // picture.src = '/src/red/glass-black.png';
    
    document.querySelectorAll('.goods__item-switch').forEach(item => {
        item.classList.remove('switch--active2');
    });

    const switch5 = document.getElementById("switch5");
    switch5.classList.add("switch--active2");
}

function FunctionChangeSrc6(){
    let picture = document.getElementById("picture2");

    picture.style.opacity = 0;
        
        setTimeout(() => {
            picture.src = '/src/red/glass-green.png';
          }, 100)
        
        setTimeout(() => {
            picture.style.opacity = 1;
          }, 400)
    // picture.src = '/src/red/glass-green.png';
    
    document.querySelectorAll('.goods__item-switch').forEach(item => {
        item.classList.remove('switch--active2');
    });

    const switch6 = document.getElementById("switch6");
    switch6.classList.add("switch--active2");
}
//

function FunctionChangeSrc7(){
    let picture = document.getElementById("picture3");

    picture.style.opacity = 0;
        
        setTimeout(() => {
            picture.src = '/src/red/tarelka.png';
          }, 100)
        
        setTimeout(() => {
            picture.style.opacity = 1;
          }, 400)

    // picture.src = '/src/red/tarelka.png';
    
    document.querySelectorAll('.goods__item-switch').forEach(item => {
        item.classList.remove('switch--active3');
    });

    const switch7 = document.getElementById("switch7");
    switch7.classList.add("switch--active3");
}
function FunctionChangeSrc8(){
    let picture = document.getElementById("picture3");

    picture.style.opacity = 0;
        
        setTimeout(() => {
            picture.src = '/src/red/tarelka-purple.png';
          }, 100)
        
        setTimeout(() => {
            picture.style.opacity = 1;
          }, 400)

    // picture.src = '/src/red/tarelka-purple.png';
    
    document.querySelectorAll('.goods__item-switch').forEach(item => {
        item.classList.remove('switch--active3');
    });

    const switch8 = document.getElementById("switch8");
    switch8.classList.add("switch--active3");
}
function FunctionChangeSrc9(){
    let picture = document.getElementById("picture3");

    picture.style.opacity = 0;
        
        setTimeout(() => {
            picture.src = '/src/red/tarelka-yellow.png';
          }, 100)
        
        setTimeout(() => {
            picture.style.opacity = 1;
          }, 400)

    // picture.src = '/src/red/tarelka-yellow.png';
    
    document.querySelectorAll('.goods__item-switch').forEach(item => {
        item.classList.remove('switch--active3');
    });

    const switch9 = document.getElementById("switch9");
    switch9.classList.add("switch--active3");
}
//
function FunctionChangeSrc10(){
    let picture = document.getElementById("picture4");

    picture.style.opacity = 0;
        
        setTimeout(() => {
            picture.src = '/src/red/bundle.png';
          }, 100)
        
        setTimeout(() => {
            picture.style.opacity = 1;
          }, 400)

    // picture.src = '/src/red/bundle.png';
    
    document.querySelectorAll('.goods__item-switch').forEach(item => {
        item.classList.remove('switch--active4');
    });

    const switch10 = document.getElementById("switch10");
    switch10.classList.add("switch--active4");
}
function FunctionChangeSrc11(){
    let picture = document.getElementById("picture4");

    picture.style.opacity = 0;
        
        setTimeout(() => {
            picture.src = '/src/red/bundle-blue.png';
          }, 100)
        
        setTimeout(() => {
            picture.style.opacity = 1;
          }, 400)

    // picture.src = '/src/red/bundle-blue.png';
    
    document.querySelectorAll('.goods__item-switch').forEach(item => {
        item.classList.remove('switch--active4');
    });

    const switch11 = document.getElementById("switch11");
    switch11.classList.add("switch--active4");
}
function FunctionChangeSrc12(){
    let picture = document.getElementById("picture4");
    // picture.src = '/src/red/bundle-purple.png';

    picture.style.opacity = 0;
        
        setTimeout(() => {
            picture.src = '/src/red/bundle-purple.png';
          }, 100)
        
        setTimeout(() => {
            picture.style.opacity = 1;
          }, 400)
    
    document.querySelectorAll('.goods__item-switch').forEach(item => {
        item.classList.remove('switch--active4');
    });

    const switch12 = document.getElementById("switch12");
    switch12.classList.add("switch--active4");
}