function init() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
init()

var crsr = document.querySelector(".cursor")
main = document.querySelector(".main")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + 20 + "px"
    crsr.style.top = dets.y + 20 + "px"
})

// var videos = document.querySelectorAll("video")
// videos.forEach(function (elem) {
//     elem.addEventListener("mouseenter" || "mouseover", function () {
//         document.querySelector(".cursor").innerHTML = "Sound On";
//         crsr.style.width = "auto"
//         crsr.style.height = "auto"
//         crsr.style.borderRadius = "2px"
//         console.log("mouse in")
//     })
//     elem.addEventListener("mouseleave", function () {
//         document.querySelector(".cursor").innerHTML = "";
//         // crsr.style.height = "20px"
//         // crsr.style.width = "20px"
//         // crsr.style.borderradius = "50%"
//         console.log("mouse out")
//     })
// })

gsap.from(".page1 h1", {
    y: 100,
    rotate: -5,
    duration: 1
})
gsap.from(".page1 h2", {
    y: 100,
    rotate: -5,
    duration: 1,
    // delay: 0.5
    // scrub: 3
})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -100,
}, "anime")
tl.to(".page1 h2", {
    x: 100,
}, "anime")
tl.to(".page1 video", {
    width: "90%",
}, "anime")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -115%",
        end: "top -120%",
        scrub: 5,
    }
})
tl2.to(".main", {
    backgroundColor: '#fff'
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        start: "top -280%",
        end: "top -300%",
        scrub: 5,
    }
})
tl3.to(".main", {
    backgroundColor: '#0f0d0d'
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        var image = elem.getAttribute("data-image")
        crsr.style.height = "370px"
        crsr.style.width = "470px"
        crsr.style.borderRadius = "0px"
        crsr.style.backgroundImage = `url(${image})`
    })
    elem.addEventListener("mouseleave", function () {
        elem.style.backgroundColor = "transparent"
        crsr.style.height = "20px"
        crsr.style.width = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})