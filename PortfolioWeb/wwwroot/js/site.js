// These are all values that can be changed to your own liking
// Changing these will change text and links!
// All code written by h_24, open sourced for you!

// NAME
const myname = "vivian"
// LOCATION
document.getElementById('locationPutter').innerHTML = "The Hague, Netherlands ";
// EMAIL
document.getElementById('emailPutter').innerHTML = `${myname}speijer@gmail.com `;
// PHONE NUMBER
document.getElementById('phonePutter').innerHTML = "+31 6 38734563 ";


// NAVBAR SCROLL WITH SCREEN
$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

// DYNAMIC LINE ON SCROLL
const scrollPath = document.getElementById('scroll-path');
const lineLength = scrollPath.getTotalLength();
let startOffset = 420;
let desiredCompletionPercentage = 100;
let scrollPercentage = 0;
var beegboximg = document.getElementsByClassName("beegbox-img");

console.log("Linelength: "+lineLength);

scrollPath.style.strokeDasharray = lineLength;
scrollPath.style.strokeDashoffset = lineLength;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > startOffset) {
        scrollPercentage = ((scrollPosition - startOffset) / (document.body.scrollHeight - startOffset - window.innerHeight)) * 100;
    } else if (scrollPosition <= startOffset) {
        scrollPercentage = 0;
    }

    // DYNAMIC CIRCLES POPPING IN ON LINE

    const scrollThresholds = {
        Home: [19.23, 45.21, 79.17],
        About: [50, 63],
        Education: [17, 40, 75]
        // Projects: [],
        // Contact: []
    };

    const pageTitle = document.title;
    let thresholds = [];
    let desiredCompletionPercentage = 0;

    switch (true) {
        case pageTitle.includes("Home"):
            thresholds = scrollThresholds.Home;
            desiredCompletionPercentage = 100;
            break;
        case pageTitle.includes("About"):
            thresholds = scrollThresholds.About;
            desiredCompletionPercentage = 80;
            break;
        case pageTitle.includes("Education"):
            thresholds = scrollThresholds.Education;
            desiredCompletionPercentage = 100;
            break;
    }

    const classToRemove = Array.from({ length: 9 }, (_, index) => `scrollcircle${index + 1}`);

    $('.beegbox-img').removeClass(classToRemove.join(" "));

    if (thresholds) {
        thresholds.forEach((threshold, index) => {
            if (scrollPercentage > threshold) {
                let classIndex = index + 1;
                if (pageTitle.includes("About")) {
                    classIndex += 3;
                } else if (pageTitle.includes("Education")) {
                    classIndex += 5;
                }
                $('.beegbox-img').addClass(`scrollcircle${classIndex}`);
            }
        });
    }

    scrollPath.style.strokeDashoffset = lineLength - (lineLength * (scrollPercentage / desiredCompletionPercentage));
});