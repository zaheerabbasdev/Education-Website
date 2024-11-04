 let isMobileMenuOpen = false;

        function toggleMobileMenu() {
            const navList = document.getElementById('navList');
            const hamburger = document.getElementById('hamburger');
            isMobileMenuOpen = !isMobileMenuOpen;

            if (isMobileMenuOpen) {
                navList.classList.add('open');
                hamburger.classList.add('active');
            } else {
                navList.classList.remove('open');
                hamburger.classList.remove('active');
            }
        }

  
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove('fade-out'); // Remove fade-out class for all slides
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].classList.add('fade-in'); // Add fade-in class
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";

    // Start the fade-out for the current slide
    setTimeout(() => {
        slides[slideIndex - 1].classList.remove('fade-in');
        slides[slideIndex - 1].classList.add('fade-out');
    }, 4000); // Wait 4 seconds before fading out
}

// Auto-slide functionality
setInterval(() => {
    plusSlides(1);
}, 5000); // Change image every 5 seconds