$(document).ready(function () {
  $(".rectangle-switch-container").on("click", function () {
    $(this).toggleClass("translated");
    $(".selected, .selected-two").toggleClass("bg-toggle");

    if ($(this).hasClass("translated")) {
      $(".selected").css("background-color", "#484C59");
      $(".selected-two").css("background-color", "var(--beige)");
    } else {
      $(".selected").css("background-color", "var(--beige)");
      $(".selected-two").css("background-color", "#484C59");
    }
  });

  $(".register").on("click", function () {
    $(".register-card-wrapper").css("display", "block");
    setTimeout(function () {
      $(".register-card-wrapper").addClass("active");
    }, 10);

    $("nav").addClass("transparent");
  });

  $(".close-btn").on("click", function () {
    $(".register-card-wrapper").removeClass("active");

    $("nav").removeClass("transparent");

    setTimeout(function () {
      $(".register-card-wrapper").css("display", "none");
    }, 750);
  });

  let currentStep = 0; // Track the current step (0 for first input, 1 for second input)

  // Handle the "NEXT" button click
  $(".next-btn").on("click", function () {
    if (currentStep === 0) {
      // Update to the second input
      $(".input-title").text("EMAIL");
      $("input").attr("placeholder", "example@email.com");
      $("input").val("");

      // Animate circles: move the color from the first to the second circle
      $(".circle").eq(0).css("background-color", "#484C59"); // Reset the first circle to original color
      $(".circle").eq(1).css("background-color", "beige"); // Set the second circle to beige

      // Show the "BACK" button
      $(".back-btn").css("opacity", "1").css("pointer-events", "auto");

      currentStep = 1; // Move to the second step
    }
  });

  // Handle the "BACK" button click
  $(".back-btn").on("click", function () {
    if (currentStep === 1) {
      // Return to the first input
      $(".input-title").text("FIRST & LAST NAME");
      $("input").attr("placeholder", "First & Last Name");
      $("input").val("");

      // Animate circles: move the color back from the second to the first circle
      $(".circle").eq(1).css("background-color", "#484C59"); // Reset the second circle to original color
      $(".circle").eq(0).css("background-color", "beige"); // Set the first circle back to beige

      // Hide the "BACK" button
      $(".back-btn").css("opacity", "0").css("pointer-events", "none");

      currentStep = 0; // Move back to the first step
    }
  });
});
