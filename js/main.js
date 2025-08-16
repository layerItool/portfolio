
$(document).ready(function () {
const navIcon = document.querySelector('.nav-mobile__icon');
const nav = document.querySelector('.nav-mobile__desc');
const mob = document.querySelector('.mobile-bg');
const bod = document.querySelector('body');

navIcon.addEventListener('click', function(){
    this.classList.toggle('nav-mobile__icon--active');
    nav.classList.toggle('nav--active');
    mob.classList.toggle('mobile-bg--active');
    bod.classList.toggle('overlay');
    bod.classList.toggle('fix-scroll-jump');
});

const navLinks = document.querySelectorAll('.nav-mobile__desc a');


navLinks.forEach(function (item){
    
    item.addEventListener('click', function(){
        navIcon.classList.remove('nav-mobile__icon--active');
        nav.classList.remove('nav--active')
        mob.classList.remove('mobile-bg--active')
        bod.classList.remove('overlay')
        bod.classList.remove('fix-scroll-jump')
    })
})

//Закрытие при нажатии на bg
const navMobs = document.querySelectorAll('.mobile-bg');

navMobs.forEach(function (item) {

    item.addEventListener('click', function () {


        navIcon.classList.remove('nav-mobile__icon--active');
        nav.classList.remove('nav--active')
        mob.classList.remove('mobile-bg--active')
        bod.classList.remove('overlay')
        bod.classList.remove('fix-scroll-jump')
    })
   
})

// plagin pageNav
    $('#header-menu').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 100,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
    });

});

//mixitup
$(document).ready(function(){
    let containerEl = document.querySelector('#mix-cards');
    let mixer = mixitup(containerEl, {
        classNames:{
            block: ""
        }
    });
})

//BACKTOP
const backTopBtn = document.querySelector('#backtop');

backTopBtn.style.opacity = 0;

document.addEventListener('scroll', function(){
    if(window.scrollY > 700){
        backTopBtn.style.opacity = 1
        backTopBtn.classList.remove('hidden')
        

    }else{
        backTopBtn.style.opacity = 0
        backTopBtn.classList.add('hidden')
        

    }
})

AOS.init();

//ПАРАЛАКС
let prxScene = document.querySelector('.contacts');
let prxItem = document.querySelectorAll('.contact-img');

prxScene.addEventListener('mousemove', function(e){
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    for(let item of prxItem){
        item.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    }
})








// $(document).ready(function () {
//     document.querySelector('.nav-mobile__icon').addEventListener('click', function () {
//         document.querySelector('.nav-mobile__icon').classList.toggle('nav-mobile__icon--active');
//         document.querySelector('.nav-mobile__desc').classList.toggle('nav--active');
//         document.querySelector('.mobile-bg').classList.toggle('mobile-bg--active');
//         document.querySelector('body').classList.toggle('overlay');
//         // document.querySelector('.nav-mobile__desc a').classList.toggle('nav-mobile__icon--active');
//     });

//     document.querySelector('.mobile-bg').addEventListener('click', function () {
//         document.querySelector('.nav-mobile__icon').classList.remove('nav-mobile__icon--active');
//         document.querySelector('.nav-mobile__desc').classList.remove('nav--active');
//         document.querySelector('.mobile-bg').classList.remove('mobile-bg--active');
//         document.querySelector('body').classList.remove('overlay');
//     });


//     document.querySelector('.nav-mobile__desc').addEventListener('click', function () {
//         document.querySelector('.nav-mobile__icon').classList.remove('nav-mobile__icon--active');
//         document.querySelector('.nav-mobile__desc').classList.remove('nav--active');
//         document.querySelector('.mobile-bg').classList.remove('mobile-bg--active');
//         document.querySelector('body').classList.remove('overlay');
//     });

  
    
    // // plagin pageNav
    // $('#header-menu').onePageNav({
    //     currentClass: 'active',
    //     changeHash: false,
    //     scrollSpeed: 750,
    //     scrollThreshold: 0.5,
    //     filter: '',
    //     easing: 'swing',
    // });



    // });

   




  




