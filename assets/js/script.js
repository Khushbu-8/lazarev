// locomotive scroll

function LocomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        tablet :{smooth :true},
        smartphone :{smooth :true},
    });
   
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}


function LodeadingAnimation(){

    let tl = gsap.timeline();

tl.from('.Slider',{
    transform: 'scaleX(0.9) translateY(100%)',
    borderRadius:"50% 50% 0 0",
    duretion:0.5,
    ease:"expo-out"
})

tl.from("nav",{
    opacity:0
})
tl.from(".heading h1, .heading p, .heading div",{
    opacity:0,
    duretion:0.5,
    stagger:0.2
})


}

function navAnimation() {

    var nav = document.querySelector("header .manu")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to(".nav-b", {
            height: "35vh"
        })

        tl.to(".nav-bottom ul li", {
            display: "block"
        })
        tl.to(".nav-bottom ul li", {
            y: 0,

            stagger: {
                amount: 0.5
            }
        })

    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()

        tl.to(".nav-bottom ul li", {
            display: "none",
            y: 25,
            stagger: {
                amount: 0.2
            }

        })
        tl.to(".nav-bottom ul li", {
            display: "none",
            duretion: 0.2

        })

        tl.to(".nav-b", {
            height: "0px",
            duretion: 0.2,
        })
    })
}


function NewsPageAnimation() {
    var rightElem = document.querySelectorAll("#right-elem")

    rightElem.forEach(function (elm) {
        elm.addEventListener("mouseenter", function () {

            gsap.to(elm.childNodes[3], {
                opacity: 1,
                scale: 1
            })

        })
        elm.addEventListener("mouseleave", function () {
            gsap.to(elm.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        elm.addEventListener("mousemove", function (dates) {
            gsap.to(elm.childNodes[3], {
                x: dates.x - elm.getBoundingClientRect().x - 10,
                y: dates.y - elm.getBoundingClientRect().y - 130
            })
        })
    })
}

function VideoAnimation() {
    var Reelcenter = document.querySelector(".reel .icon")
    var video = document.querySelector(".reel-section video")

    Reelcenter.addEventListener("click", function () {
        video.play();
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRedius: 0,
        })
    })
    video.addEventListener("click", function () {
        video.pause();
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRedius: "30px",
        })

    })

}

function CasesPageAnimation() {
    var casesRight = document.querySelector(".case-right video")
    var video = document.querySelector("#case-right video")
    var caseElem = document.querySelectorAll("#case-right");

    casesRight.addEventListener("mouseenter", function () {
        video.play();
        gsap.to(video, {
            opacity: 1,
            display: block
        })
    })
    casesRight.addEventListener("mouseleave", function () {
        video.load();


    })

    caseElem.forEach(function (elm) {

        elm.addEventListener("mouseenter", function () {

            gsap.to(elm.childNodes[3], {
                opacity: 1,

            })

        })
        elm.addEventListener("mouseleave", function () {
            gsap.to(elm.childNodes[3], {
                opacity: 0,

            })
        })
        elm.addEventListener("mousemove", function (dates) {
            gsap.to(elm.childNodes[3], {
                x: dates.x - elm.getBoundingClientRect().x - 820,
                y: dates.y - elm.getBoundingClientRect().y - 70
            })
        })
    })
}

function processAnimation() {
    gsap.from("#btm-parts h4", {
        x: 0,
        duretion: 1,
        scrollTrigger: {
            trigger: "#btm-parts",
            scroller: "#main",
            start: "top 80%",
            end: "top 5%",
            scrub: true
        }
    })
}

function CaseBottumAnimation(){
    var caseImg = document.querySelector(".case-right-b img")
var Cvideo = document.querySelector(".case-right-b video")

caseImg.addEventListener("click", function () {
    Cvideo.play();
    gsap.to(Cvideo, {
        transform: "scaleX(1) scaleY(1)",
        opacity: 1,
        borderRedius: 0,
    })
})
Cvideo.addEventListener("click", function () {
    Cvideo.pause();
    gsap.to(Cvideo, {
        transform: "scaleX(0) scaleY(0)",
        opacity: 0,
        borderRedius: "30px",
    })

})

}
LocomotiveAnimation();

LodeadingAnimation()

navAnimation();

CasesPageAnimation();

VideoAnimation();

NewsPageAnimation();

processAnimation();

CaseBottumAnimation();

