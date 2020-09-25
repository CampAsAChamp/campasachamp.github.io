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
        // mybutton.style.display = "block";
        mybutton.style.opacity = 1;
    } else {
        // mybutton.style.display = "none";
        mybutton.style.opacity = 0;
    }

    if (!passed) {
        if (document.body.scrollTop > mouseScrollLength || document.documentElement.scrollTop > mouseScrollLength) {
            mouseIndicator.style.opacity = 0;
            passed = true;
        }
    }
}

////////////
// Modal
////////////
window.onload = function () {
    // your code

    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("contact-me-button");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        console.log("Opened");
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        console.log("Closed");

        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav ul");
    const navLinks = document.querySelectorAll("nav li");

    function addClickListener(item) {
        item.addEventListener("click", () => {
            nav.classList.toggle("nav-active");
            burger.classList.toggle("toggle");
        });
    }

    navLinks.forEach(addClickListener);
    burger.addEventListener("click", () => {
        // Toggle Nav
        nav.classList.toggle("nav-active");

        // Animate links
        // navLinks.forEach((link, index) => {
        //     link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.25}s`;

        //     // if (link.style.animation) {
        //     //     link.style.animation = "";
        //     // } else {
        //     //     link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.25}s`;
        //     // }
        // });

        // Burger animation
        burger.classList.toggle("toggle");
    });
};

navSlide();
