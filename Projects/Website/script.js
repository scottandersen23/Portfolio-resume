// Dark / Light Mode Toggle with Persistence
const modeToggle = document.getElementById('mode-toggle');
const currentMode = localStorage.getItem('theme');

// Sidebar Active Link Highlight & Smooth Scroll
const sidebarLinks = document.querySelectorAll('aside a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default jump
        sidebarLinks.forEach(l => l.classList.remove('active-link'));
        link.classList.add('active-link');

        const targetId = link.getAttribute('href').substring(1);
        const targetPost = document.getElementById(targetId);

        targetPost.scrollIntoView({ behavior: 'smooth' });
    });
});

// Apply saved theme on page load
if (currentMode) {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(currentMode);
}

// Toggle mode on button click
modeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    }
});

// Example Hover Button Effect
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('You clicked the Home button!');
    });
});
