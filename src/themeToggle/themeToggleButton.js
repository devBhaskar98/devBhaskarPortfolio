document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const navLinks = document.querySelectorAll('#desktop-nav .nav-links a');

  // PROFILE
  const actionButtons = document.querySelectorAll('.action-button');
  const actionIcons = document.querySelectorAll('.icon');



  // Check if dark mode was previously enabled
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.classList.add('dark-mode');

    toggleDarkMode(navLinks);
    toggleDarkMode(actionButtons);
    toggleDarkMode(actionIcons);
  }

  darkModeToggle.addEventListener('click', () => {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');
    darkModeToggle.classList.toggle('dark-mode');

    toggleDarkMode(navLinks);
    toggleDarkMode(actionButtons);
    toggleDarkMode(actionIcons);
  });
});

function toggleDarkMode(toggleElements) {
  // Toggle dark mode class on all nav links
  toggleElements.forEach(
    element => {
      element.classList.toggle('dark-mode')

      console.log('element.tagName.toLowerCase()', element.tagName.toLowerCase())

      // If the element is an image, toggle its src attribute
      if (element.tagName.toLowerCase() === 'img') {
        if (element.classList.contains('dark-mode')) {
          switch (element.id) {
            case 'icoLinkedIn':
              element.src = './assets/dark-mode-icons/linkedin.png';
              break;
            case 'icoGithub':
              element.src = './assets/dark-mode-icons/github.png';
              break;
            case 'icoEmail':
              element.src = './assets/dark-mode-icons/email.png';
              break;
          }
        } else {
          switch (element.id) {
            case 'icoLinkedIn':
              element.src = './assets/linkedin.png';
              break;
            case 'icoGithub':
              element.src = './assets/github.png';
              break;
            case 'icoEmail':
              element.src = './assets/email.png';
              break;
          }
        }
      }
    })




  // light/dark image





  // Save the current mode in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
}