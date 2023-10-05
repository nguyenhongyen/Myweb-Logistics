

gsap.registerPlugin(ScrollTrigger);

gsap.to(".section-intro__left", {
    duration: 5,
    y:-80,
    scrollTrigger:{
        trigger:".section-intro__image",
        start:"top 10%",
        scrub:3,
    }
});

gsap.to(".section-intro__right", {
    duration: 5,
    y:-60,
    scrollTrigger:{
        trigger:".section-intro__right",
        scrub:3,
    }
});


let tl = gsap.timeline();
tl.to('#repeat-text-two', {
    xPercent:-25,
    scrollTrigger:{
        trigger:"#repeat-text-two",
        scrub:1
    }
})

let tl1 = gsap.timeline();
tl1.to('#repeat-text-three', {
    xPercent:25,
    scrollTrigger:{
        trigger:"#repeat-text-three",
        scrub:1
    }
})


gsap.to(".scroll__text", {
    scrollTrigger: {
        trigger: ".scroll__text",
        scrub: 1,
        start: 'center center',
        end: '+=5000',
        repeat: -1
    },
    rotation: 1440,
    duration: 360,
    ease: "none",

});

tl1.to(".section-blog",5,{x:-window.innerWidth})
    .from(".section-blog__one .section-image-left",1, {opacity:0,y:100},{y: 0})
    .from(".section-blog__one .section-image-right",1, {opacity:0,y:-100},{y: 0})
    .to(".section-blog",5,{x:-window.innerWidth * 2})
     .from(".section-blog__two .section-image-left",2, {opacity:0,x:-100},{x:0})
      .from(".section-blog__two .section-image-right",2, {opacity:0,x:100},{x:0})
     .to(".section-blog",5,{x:-window.innerWidth * 3})
     .from(".section-blog__three .section-image-left",5,{opacity:0},{opacity:1})
      .from(".section-blog__three .section-image-right",5, {opacity:0,y:100},{y: 0})
      .from(".section-blog__four .section-blog__image",6, {opacity:0,scale:1},{scale:2})

ScrollTrigger.create({
    animation:tl1,
    trigger:".section-blog",
    start:"center center",
    end: '+=3000',
    scrub:1,
    pin:true
})

let tl2 = gsap.timeline();
tl2.to('.section-article__gird .gird-item:nth-child(odd)', {
    scrollTrigger:{
        trigger:".gird-item:nth-child(odd)",
        scrub:1,
    },
    y:-110,
    pin:true
})

