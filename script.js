// Optional: Add JavaScript for scroll-based animations or other dynamic effects
// For example, to trigger fade-in-up when elements come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up-active');
            // No need to set opacity and transform directly here if the CSS animation handles 'forwards'
            // and the 'fade-in-up-active' class ensures the final state.
        }
    });
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

document.querySelectorAll('.fade-in-up').forEach(element => {
    observer.observe(element);
});
