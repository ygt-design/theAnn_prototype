const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

function checkNavColorChange(instance) {
  const nav = document.querySelector("nav");
  const ctaBackground = document.querySelector(".cta-background");
  const ctaImageFive = document.querySelector(".cta-image-five");

  // Get the bottom of the nav and the top of each wrapper

  const ctaBackgroundTop =
    ctaBackground.getBoundingClientRect().top + instance.scroll.y;
  const ctaImageFiveTop =
    ctaImageFive.getBoundingClientRect().top + instance.scroll.y;

  const navBottom = nav.getBoundingClientRect().bottom + instance.scroll.y;
  nav.classList.remove("nav-color-amenities");
  ctaBackground.style.backgroundColor = ""; // Reset cta background color

  // Check if nav hits the interiors-wrapper
  if (navBottom < ctaBackgroundTop) {
    nav.classList.add("nav-color-interiors"); // Change nav color for interiors-wrapper
    nav.style.backgroundColor = ""; // Reset nav background color
    document.querySelector(".logo").style.backgroundImage =
      "url('../assets/images/TheA.svg')";
  }
  // Check if nav hits the cta-background
  else if (navBottom >= ctaBackgroundTop && navBottom < ctaImageFiveTop) {
    nav.classList.add("nav-color-amenities"); // Change nav color to match amenities
    ctaBackground.style.backgroundColor = "var(--darkBlue)"; // Change background color of cta-background
    document.querySelector(".logo").style.backgroundImage =
      "url('../assets/images/TheABeige.svg')";
  }
  // Check if nav hits the cta-image-five and revert to default
  else if (navBottom >= ctaImageFiveTop) {
    nav.classList.remove("nav-color-amenities"); // Reset to default
    nav.style.backgroundColor = ""; // Reset nav background color
    document.querySelector(".logo").style.backgroundImage =
      "url('../assets/images/TheA.svg')";
  }
}

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
  checkNavColorChange(instance);
});
