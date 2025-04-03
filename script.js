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
    .from(".one", 0.6, {
        y: 10,
        opacity: 0,
    })

    .from(".two", 0.6, {
        y: 10,
        opacity: 0,
    })

    .from(".two2", 0.6, {
        delay: 0.3,
        y: 10,
        opacity: 0,
    })

    .to(".one", 0.7, {
        y: 10,
        skewX: -10,
        opacity: 0,
    }, "+=3.5")

    .to(".two", 0.7, {
        y: 10,
        opacity: 0,
    }, "-=1")

    //second slide
    .from(".three", 0.6, {
        y: 10,
        opacity: 0,
    })

    .to(".three", 0.7, {
        y: 10,
        opacity: 0,
    }, "+=3")

    //third slide
    .from(".four", 0.6, {
        display: "none",
        y: 10,
        opacity: 0,
    })
}

//Main Content
// Yes button functionality
document.getElementById("yes").onclick = function () {

    //Sweet alert pop up
    Swal.fire({
        text: "You sure?",
        confirmButtonText: "YES",
        confirmButtonColor: "#003049",
        showCancelButton: true,
        cancelButtonText: "NO",
        cancelButtonColor: "#780000",
    }).then(function (result) {

        //if yes SWAL confirmation
        if (result.isConfirmed) {
            window.location.href="Pages/yes.html";
        }
        else {
            //if no SWAL confirmation
            window.location.href="Pages/no.html";
        }
    });
}

document.getElementById("no").onclick = function () {
    window.location.href="Pages/no.html";
}
