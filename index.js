const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});

// Helper function to check if an element is in the viewport (using Locomotive Scroll)
function isInViewport(element, instance) {
  const rect = element.getBoundingClientRect();
  const offsetTop = instance.scroll.y;
  const elementTop = rect.top + offsetTop;
  const elementBottom = rect.bottom + offsetTop;

  // Check if the element's top is above the bottom of the viewport
  return (
    elementTop < window.innerHeight + instance.scroll.y &&
    elementBottom > instance.scroll.y
  );
}

// Function to check if the nav has hit the top of the .outdoors-wrapper
function checkNavColorChange(instance) {
  const nav = document.querySelector("nav");
  const outdoorsWrapper = document.querySelector(".outdoors-wrapper");
  const amenitiesWrapper = document.querySelector(".third-section-divider");
  const interiorsWrapper = document.querySelector(".interiors-wrapper");

  // Get the bottom of the nav and the top of each wrapper
  const navBottom = nav.getBoundingClientRect().bottom + instance.scroll.y;

  const outdoorsTop =
    outdoorsWrapper.getBoundingClientRect().top + instance.scroll.y;
  const amenitiesTop =
    amenitiesWrapper.getBoundingClientRect().top + instance.scroll.y;
  const interiorsTop =
    interiorsWrapper.getBoundingClientRect().top + instance.scroll.y;

  // Reset all color change classes first
  nav.classList.remove(
    "nav-color-change",
    "nav-color-amenities",
    "nav-color-interiors"
  );

  // Check if nav hits the outdoors-wrapper
  if (navBottom >= outdoorsTop && navBottom < amenitiesTop) {
    nav.classList.add("nav-color-change"); // Change nav color for outdoors-wrapper
  }
  // Check if nav hits the amenities-wrapper
  else if (navBottom >= amenitiesTop && navBottom < interiorsTop) {
    nav.classList.add("nav-color-amenities"); // Change nav color for amenities-wrapper
  }
  // Check if nav hits the interiors-wrapper
  else if (navBottom >= interiorsTop) {
    nav.classList.add("nav-color-interiors"); // Change nav color for interiors-wrapper
  }
}

// Scroll event handler for Locomotive Scroll
scroll.on("scroll", (instance) => {
  var scrollTop = instance.scroll.y;
  var maxScroll = document.body.scrollHeight - window.innerHeight;

  // Calculate the border-radius for each element
  var newRadiusFirstSection = (scrollTop / maxScroll) * 2100;
  var newRadiusRectangleSwitch = (scrollTop / maxScroll) * 650;

  // Animate border-radius for .first-section-divider
  $(".first-section-divider").css(
    "border-radius",
    "0px 0px " + newRadiusFirstSection + "px 0px"
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

  // Check if .second-section-divider is in the viewport using Locomotive Scroll's internal system
  if (isInViewport(secondSectionDivider, instance)) {
    var newRadiusSecondSection = (scrollTop / maxScroll) * 1200; // Adjust the max value
    $(".second-section-divider").css(
      "border-radius",
      "0px " + newRadiusSecondSection + "px 0px 0px"
    );
  }

  // Check if nav color should change based on its position relative to .outdoors-wrapper
  checkNavColorChange(instance);
});
