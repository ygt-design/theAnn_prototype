function animateCounter(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.innerText = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const outdoorsNumbers = document.querySelector(".outdoors-numbers");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Start counter for each number when the section is in view
        document.querySelectorAll(".number").forEach((el) => {
          const endValue = parseInt(el.innerText.trim());
          animateCounter(el, 0, endValue, 1000); // 2000ms for animation
        });
        observer.disconnect(); // Stop observing after the numbers have been animated
      }
    });
  },
  { threshold: 0.5 }
);

// Start observing the .outdoors-numbers section
observer.observe(outdoorsNumbers);
