// When the user scrolls down to the scroll length from the top of the document, show the button
window.onscroll = function () {
    hideElement();
};

// Global variable to track if the user has scrolled passed the mouse scroll indicator
var passed = false;

function hideElement() {
    var mybutton = document.getElementById("scroll-to-top-button");
    let scrollLength = 800; // In pixels

    var mouseIndicator = document.getElementById("mouse-scroll-indicator");
    let mouseScrollLength = 100; // In pixels

    if (document.body.scrollTop > scrollLength || document.documentElement.scrollTop > scrollLength) {
        mybutton.style.opacity = 1;
    } else {
        mybutton.style.opacity = 0;
    }

    if (!passed) {
        if (document.body.scrollTop > mouseScrollLength || document.documentElement.scrollTop > mouseScrollLength) {
            mouseIndicator.style.opacity = 0;
            passed = true;
        }
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    mybutton.style.opacity = 0;
}
