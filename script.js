 // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const html = document.documentElement;

    // Check for saved user preference or use system preference
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    html.classList.add(savedTheme);
    updateIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
      if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        updateIcon('light');
      } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        updateIcon('dark');
      }
    });

    function updateIcon(theme) {
      if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    }

    // Scroll to top button
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.remove('opacity-0');
        scrollToTopBtn.classList.add('opacity-100');
      } else {
        scrollToTopBtn.classList.remove('opacity-100');
        scrollToTopBtn.classList.add('opacity-0');
      }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Modal functions
    function openModal(imgSrc) {
      const modal = document.getElementById('imageModal');
      const modalImg = document.getElementById('modalImage');
      modal.style.display = 'block';
      modalImg.src = imgSrc;
    }

    function closeModal() {
      document.getElementById('imageModal').style.display = 'none';
    }

    // Close modal when clicking outside the image
    window.onclick = function(event) {
      const modal = document.getElementById('imageModal');
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }