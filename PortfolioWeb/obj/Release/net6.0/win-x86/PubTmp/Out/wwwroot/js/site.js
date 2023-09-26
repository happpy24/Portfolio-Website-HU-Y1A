// These are all values that can be changed to your own liking
// Changing these will change text and links!
// All code written by h_24, open sourced for you!

// LOCATION
document.getElementById('locationPutter').innerHTML = "The Hague, Netherlands";
// EMAIL
document.getElementById('emailPutter').innerHTML = "vivianspeijer@gmail.com";
// PHONE NUMBER
document.getElementById('phonePutter').innerHTML = "+31 6 38734563";

$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

const scrollPath = document.getElementById('scroll-path');
const lineLength = scrollPath.getTotalLength();
const startOffset = 400;
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

    if (document.title.includes("Home")) {
        if (scrollPercentage > 19.23) {
            $('.beegbox-img').addClass("scrollcircle1");
        } else {
            $('.beegbox-img').removeClass("scrollcircle1");
        }
        if (scrollPercentage > 45.21) {
            $('.beegbox-img').addClass("scrollcircle2");
        } else {
            $('.beegbox-img').removeClass("scrollcircle2");
        }
        if (scrollPercentage > 79.17) {
            $('.beegbox-img').addClass("scrollcircle3");
        } else {
            $('.beegbox-img').removeClass("scrollcircle3");
        }
    }

    

    scrollPath.style.strokeDashoffset = lineLength - (lineLength * (scrollPercentage / 100));
});