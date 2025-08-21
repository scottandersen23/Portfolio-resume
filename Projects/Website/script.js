// Dark / Light Mode Toggle with Persistence
const modeToggle = document.getElementById('mode-toggle');
const currentMode = localStorage.getItem('theme');

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
