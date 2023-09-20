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

scrollPath.style.strokeDasharray = lineLength;
scrollPath.style.strokeDashoffset = lineLength;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > startOffset) {
        scrollPercentage = ((scrollPosition - startOffset) / (document.body.scrollHeight - startOffset - window.innerHeight)) * 100;
    }

    scrollPath.style.strokeDashoffset = lineLength - (lineLength * (scrollPercentage / 100));
});