
// preloader
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
}
// end preloader


let buttons = document.querySelectorAll('.botton-box');
buttons.forEach((el) =>{
    for (let i = 1; i <= 4; i++) {
	let span = document.createElement('span');
	el.appendChild(span);
}
});




gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

gsap.to('.offer__title h2', {
    scale: 1,
    opacity: 1,
    duration: 1
});
gsap.to('.offer__decor', {
    rotate: 360,
    duration: 40,
    scale:1.6,
});
gsap.to('.offer__btn', {
    opacity: 1,
    scale:1,
    delay: 1.2,
    duration: 0.4,
});
gsap.fromTo('.offer__wrapper', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.offer',
        start: 100,
        end: 650,
        scrub: true
    }
});
gsap.fromTo('.offer__img', { x:0 }, {
    x: -40,
    scrollTrigger: {
        trigger: '.offer',
        start: 0,
        end: 650,
        scrub: true
    }
});
gsap.fromTo('.offer__btn', { opacity:1 }, {
    opacity:0,
    scrollTrigger: {
        trigger: '.offer',
        start: 0,
        end: 1350,
        scrub: true
    }
});




$( document ).ready(function() {
    
    // Function to change the nav-bar on scroll
    $(window).scroll(function(){
        ($(window).scrollTop() >= 100) ? (
            $('.fixed-nav-bar').addClass('scrolled'),
            $('.the-bass').addClass('scrolled')
        ) : (
            $('.fixed-nav-bar').removeClass('scrolled'),
            $('.the-bass').removeClass('scrolled')
        );
    });
    
    // Drop Down Function
    $('#menuButton').on('change', function(){
        ($('#menuButton').is(':checked')) ? (
            $('.the-bass').addClass('dropped')
        ) : (
            $('.the-bass').removeClass('dropped')
        );
    });
    
});