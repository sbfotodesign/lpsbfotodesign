document.addEventListener("DOMContentLoaded", function() {
    const banner = document.querySelector('.banner');
    const images = [
        'images/background1.jpg',
        'images/background2.jpeg',
        'images/background3.jpeg',
        'images/background4.jpeg'
    ];
    let currentIndex = 0;

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        banner.style.backgroundImage = `url('${images[currentIndex]}')`;
    }

    setInterval(changeBackground, 3000); 
});