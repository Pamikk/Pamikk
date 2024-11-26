// FILE: scripts.js
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    const footer = document.getElementById('main-footer');
    if (window.scrollY > 30) {
        header.classList.add('shrink');
        footer.classList.add('shrink');
    }
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    const ul = document.querySelector('header nav ul');
    ul.style.display = ul.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function() {
        const header = document.getElementById('main-header');
        header.classList.add('shrink');
        const footer = document.getElementById('main-footer');
        footer.classList.add('shrink');
    });
});
// Function to create falling pictures
function createFallingPicture(src, containerId) {
    const picture = document.createElement('img');
    picture.src = src;
    picture.classList.add('falling-picture');
    picture.style.left = `${Math.random() * 100}%`;
    document.getElementById(containerId).appendChild(picture);

    // Remove the picture after the animation ends
    picture.addEventListener('animationend', () => {
        picture.remove();
    });
}

// Add falling pictures at intervals
setInterval(() => {
    createFallingPicture('./summer/3 cute2.jpg', 'falling-pictures-left'); // Replace with your image paths
    createFallingPicture('./summer/bunny2.webp', 'falling-pictures-right'); // Replace with your image paths
}, 1000); // Adjust the interval as needed