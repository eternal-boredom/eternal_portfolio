document.addEventListener('DOMContentLoaded', (event) => {
  const sections = document.querySelectorAll('.snap');

  const observerOptions = {
      root: document.getElementById('scrollable-container'),
      rootMargin: '0px',
      threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const newBgColor = entry.target.getAttribute('data-bgcolor');
              document.body.style.backgroundColor = newBgColor;
              console.log('Entered section:', entry.target, 'Background color:', newBgColor);
          }
      });
  }, observerOptions);

  sections.forEach(section => {
      observer.observe(section);
  });
});
