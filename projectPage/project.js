const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

let lastScrollY = 0;
let isNavHidden = false;

// Function to hide or show the nav based on scroll direction
function handleNavVisibility(instance) {
  const nav = document.querySelector("nav");
  const currentScrollY = instance.scroll.y;

  // Check if scrolling down
  if (currentScrollY > lastScrollY && !isNavHidden) {
    nav.style.transform = "translateY(-100%)"; // Hide the nav
    isNavHidden = true;
  }
  // Check if scrolling up
  else if (currentScrollY < lastScrollY && isNavHidden) {
    nav.style.transform = "translateY(0)"; // Show the nav
    isNavHidden = false;
  }

  lastScrollY = currentScrollY;
}

// Image toggle click event - Move outside scroll handler to avoid multiple bindings
let originalSrc = "./assets/images/rectangleSwitch.svg";
let alternativeSrc = "./assets/images/alternativeClick.svg";

$(".rectangle-switch").on("click", function () {
  let $img = $(this);

  // Get the current image source
  let currentSrc = $img.attr("src");

  // Toggle the image source
  $img.attr("src", currentSrc === originalSrc ? alternativeSrc : originalSrc);
});

// Scroll event handler for Locomotive Scroll
scroll.on("scroll", (instance) => {
  var scrollTop = instance.scroll.y;
  var maxScroll = document.body.scrollHeight - window.innerHeight;

  // Calculate the border-radius for each element
  var newRadiusFirstSection = (scrollTop / maxScroll) * 2100;
  var newRadiusRectangleSwitch = (scrollTop / maxScroll) * 650;
  var newRadiusFirstProject = (scrollTop / maxScroll) * 1600;

  // Animate border-radius for .first-section-divider
  $(".first-section-divider").css(
    "border-radius",
    "0px 0px " + newRadiusFirstSection + "px 0px"
  );

  $(".first-project-display").css(
    "border-radius",
    "0px 0px " + newRadiusFirstProject + "px 0px"
  );

  // Animate border-radius for .rectangle-switch
  $(".rectangle-switch").css(
    "border-radius",
    "0px 0px " + newRadiusRectangleSwitch + "px 0px"
  );

  // Get the .second-section-divider element
  const secondSectionDivider = document.querySelector(
    ".second-section-divider"
  );

  // Change background color of .cta-background after specific scroll
  const ctaBackground = document.querySelector(".cta-background");
  const scrollThreshold = 3800; // Change this value to your desired threshold
  const bottomThreshold = 4560;
  console.log(scrollTop);

  if (scrollTop > scrollThreshold) {
    // Remove the gradient and set a solid background color
    ctaBackground.style.background = "#343741";
  } else if (scrollTop < scrollThreshold) {
    // Revert back to the gradient when scrolling back up
    ctaBackground.style.background = "white";
  }

  if (scrollTop > bottomThreshold) {
    // Revert back to the gradient when scrolling back up
    ctaBackground.style.background = "white";
  } else if (scrollTop < scrollThreshold) {
    // Revert back to the gradient when scrolling back up
    ctaBackground.style.background = "white";
  }

  // Handle nav visibility based on scroll direction
  // handleNavVisibility(instance);
});
