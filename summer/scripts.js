// FILE: scripts.js
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 30) {
        header.classList.add('shrink');
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
    });
});