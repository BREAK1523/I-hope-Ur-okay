//start animation on load
window.onload = function () {
    animationTimeline();    
}

//animation initialization
const animationTimeline = function () {
    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }
    
    const Timeline = new TimelineMax();
    
    Timeline.to(".container", 0.6, {
        visibility: "visible",
    })

    //start animation
    //first slide
    .from(".uno", 0.6, {
        y: 10,
        opacity: 0,
    })

    .to(".uno", 0.7, {
        y: 10,
        skewX: -10,
        opacity: 0,
    }, "+=3.5")

    //second slide
    .from(".dos", 0.6, {
        y: 10,
        opacity: 0,
    })

    .to(".dos", 0.7, {
        y: 10,
        opacity: 0,
    }, "+=3.5")

    //second slide
    .from(".tres", 0.6, {
        y: 10,
        opacity: 0,
    })

    .to(".tres", 0.7, {
        y: 10,
        opacity: 0,
    }, "+=3.5")
}