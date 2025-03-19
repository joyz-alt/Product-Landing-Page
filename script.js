document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
        const faqItem = btn.parentElement;
        faqItem.classList.toggle('active');
    });
});



const sections = document.querySelectorAll(".features, .test-about, .pricing, .faq")
const navLinks = document.querySelectorAll(".link")


const observer = new IntersectionObserver(entries => {

    let activeEntry = null;

    entries.forEach(entry => {
        if (entry.isIntersecting) {

            if (!activeEntry || entry.boundingClientRect.top < activeEntry.boudingClientRect.top) {
                activeEntry = entry;
            }
        }
    });

    if (activeEntry) {
        const activeSectionId = activeEntry.target.id;
        navLinks.forEach(link => {
            if (link.getAttribute("href") === '#' + activeSectionId) {
                link.classList.add("show");
            } else {
                link.classList.remove("show");
            }
        });
    }


}, { threshold: 0.5 })


sections.forEach(section => observer.observe(section));






//slideshow logic 

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".testimonial");
  
    // Mobile condition using matchMedia
    if (window.matchMedia("(max-width: 468px)").matches) {
      let currentSlide = 0;
  
      function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
      }
  
      function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }
  
      // Start the slideshow
      showSlide(currentSlide); // Ensure the first slide is active initially
      setInterval(nextSlide, 4000);
    } else {
      // For larger screens, ensure all testimonials are visible.
      slides.forEach(slide => slide.classList.add("active"));
    }
  });
  