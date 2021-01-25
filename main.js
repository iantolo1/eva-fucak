//navigation goin' mobile

//navigation
const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});




gsap.registerPlugin(ScrollTrigger);

//seting page scroll with smoothScroll
gsap.to(".main", {
  scrollTrigger: {
    trigger: ".main",
    start: "66% 65%",
    markers: false,
    scrub: 2.5,
  },
  y: -100,

  duration: 0.5,
});

const scroll = new SmoothScroll(' a[href*="#"]', {
  speed: 800,
});

//green sock awesomness first page scroll
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger",
    start: "top",
    end: "center ",
    scrub: true,
  },
});

const tml = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger",
    start: "top",
    end: "center ",
    scrub: true,
  },
});
const par2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger",
    start: "top",
    end: "center ",
    scrub: true,
  },
});
const gsp1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger",
    start: "top",
    end: "center ",
    scrub: true,
  },
});

const blob = gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger",
    start: "top",
    end: "center ",
    scrub: true,
  },
});

tl.to(".head1", { xPercent: -550, duration: 1 });
tml.to(".par1", { xPercent: -50, duration: 2 });
par2.to(".p2", { xPercent: -170, duration: 7 });
gsp1.to(".gsap1", { xPercent: 170, duration: 7 });
blob.to(".w2", { yPercent: -100, duration: 5 });

//second page scroll

const serv2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "980",
    end: "0 ",
    scrub: true,
    markers: false,
  },
});

serv2.from(".img3", { yPercent: 0, xPercent:1,   duration: 9 });

const serv3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "-480",
    end: "0 ",
    scrub: true,
    markers: false,
  },
});

serv3.from(".gsap2", { xPercent: -150, duration: 3 });

const serv4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "-490",
    end: "0 ",
    scrub: true,
  },
});

serv4.from(".par2", { xPercent: -130, duration: 5 });



const serv5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".services",
    start: "-490",
    end: "0 ",
    scrub: true,
    markers:false
  },
});

serv4.from(".img3", { xPercent: 147, duration: 15 });


//where to GSAP animation 



const serv7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".where",
    start: "-690",
    end: "100 ",
    scrub: true,
  },
});

serv7.from('.left3', { xPercent: -290, duration: 1 });


/*
const serv8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".where",
    start: "-490",
    end: "100",
    scrub: true,
  },
});

serv8.from(".btn2", { xPercent: -290, duration: 10 });
*/


const serv8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".where",
    start: "-490",
    end: "0 ",
    scrub: true,
    markers:false
  },
});

serv8.from(".img2", { xPercent: 127, duration: 5 });



//contact section
const serv9 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "-690",
    end: "100 ",
    scrub: true,
  },
});

serv9.from('.header-contact', { xPercent: -490, duration: 1 });

//mouse animate

let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.nav-links li')
//let h1 = document.querySelector('.left');
//let h2 = document.querySelector('.left2');
let h3 = document.querySelector('.left3');
//let h4 = document.querySelector('.header-contact');
let h5 = document.querySelector('.center');


window.addEventListener('mousemove', cursor);

function cursor(e){
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
 

  
}




//h1.addEventListener('mouseover', () =>{
  //mouseCursor.classList.add('link-grow');});

  //h1.addEventListener('mouseleave', () =>{
    //mouseCursor.classList.remove('link-grow');});

    //h2.addEventListener('mouseover', () =>{
      //mouseCursor.classList.add('link-grow');});
    
      //h2.addEventListener('mouseleave', () =>{
        //mouseCursor.classList.remove('link-grow');});

  h3.addEventListener('mouseover', () =>{
  mouseCursor.classList.add('link-grow');});

  h3.addEventListener('mouseleave', () =>{
    mouseCursor.classList.remove('link-grow');});


    //h4.addEventListener('mouseover', () =>{
      //mouseCursor.classList.add('link-grow');});
    
     // h4.addEventListener('mouseleave', () =>{
     //   mouseCursor.classList.remove('link-grow');});

        h5.addEventListener('mouseover', () =>{
          mouseCursor.classList.add('link-grow');});
        
          h5.addEventListener('mouseleave', () =>{
            mouseCursor.classList.remove('link-grow');});
    




navLinks.forEach(link => {
  link.addEventListener('mouseover', () =>{
  mouseCursor.classList.add('link-grow');
});

link.addEventListener('mouseleave', () =>{
  mouseCursor.classList.remove('link-grow');
});



});



//color change

gsap.to([".services", ], {
  scrollTrigger: {
    trigger: ".services",
    toggleActions: "restart pause reverse pause"
  }, 
  duration: 2, 
  backgroundColor: "#3B589A", 
  ease: "none",
  markers:false,
  start: "top top", 
  end: "+=500"
});
