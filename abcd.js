gsap.from(".a",{
    x:-500,
    stagger:1,
    opacity: 0,
    duration:2,
    ease:Expo.easeInOut
})
gsap.from(".b",{
    y:20,
    opacity:0,
    stagger:1,
    duration:2,
    ease:Expo.easeInOut
})