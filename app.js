window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 100) { // Change 100 to the desired scroll height
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
});


const testimonies = document.querySelectorAll('.testimony');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateTestimonial(index) {
    const wrapper = document.querySelector('.testimony-wrapper');
    wrapper.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.dataset.index, 10);
        updateTestimonial(currentIndex);
    });
});

// Initialize the first dot as active
dots[0].classList.add('active');


// =================================== TOGGLE MENU JS ========================== //
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".togle-btn");
    const navLinks = document.querySelector(".navlinks");

    // Toggle the menu on button click (only in mobile view)
    toggleBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when clicking a nav link
    document.querySelectorAll(".navlinks ul li a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // Close menu when clicking outside (only in mobile view)
    document.addEventListener("click", function (event) {
        if (window.innerWidth <= 600 && !navLinks.contains(event.target) && !toggleBtn.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });

    // Ensure navlinks are always visible on larger screens
    window.addEventListener("resize", function () {
        if (window.innerWidth > 600) {
            navLinks.classList.remove("active");
            navLinks.style.display = "flex";
        } else {
            navLinks.style.display = "none";
        }
    });
});
