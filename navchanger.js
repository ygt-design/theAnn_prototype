function checkNavPosition() {
  const nav = document.querySelector("nav");
  const outdoorsWrapper = document.querySelector(".outdoors-wrapper");

  // Get the bottom position of the nav and the top position of the outdoors-wrapper
  const navBottom = nav.getBoundingClientRect().bottom;
  const outdoorsTop = outdoorsWrapper.getBoundingClientRect().top;

  // Check if the bottom of the nav hits the top of the outdoors-wrapper
  if (navBottom >= outdoorsTop) {
    document.body.classList.add("change-colors"); // Add class to change colors
  } else {
    document.body.classList.remove("change-colors"); // Remove class when condition no longer met
  }
}

// Listen for scroll events
window.addEventListener("scroll", checkNavPosition);
