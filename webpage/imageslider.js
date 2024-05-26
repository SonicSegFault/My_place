let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider img');
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    } else {
        slideIndex = index;
    }
    const offset = -slideIndex * 100;
    const direction = index < slideIndex ? 'right' : 'left'; // Determine direction
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
    document.querySelector('.slider').style.transitionDirection = direction; // Set transition direction
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

// Auto-play
setInterval(nextSlide, 4000); // Change slide every 3 seconds
