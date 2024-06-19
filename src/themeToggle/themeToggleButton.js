document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const navLinks = document.querySelectorAll('#desktop-nav .nav-links a');

    // Check if dark mode was previously enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      darkModeToggle.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
      // Toggle dark mode class on the body
      document.body.classList.toggle('dark-mode');
      darkModeToggle.classList.toggle('dark-mode');
      // 
      // Toggle dark mode class on all nav links
      navLinks.forEach(link => link.classList.toggle('dark-mode'));




      // Save the current mode in localStorage
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });
});