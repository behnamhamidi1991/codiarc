document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("header-dropdown");
  const menu = document.querySelector(".header-courses-menu");
  const icon = button.querySelector("i"); // Select the icon inside the button

  button.addEventListener("click", function (event) {
    // Toggle menu on button click
    if (menu.style.display === "flex") {
      menu.style.animation = "slideUp 0.3s forwards";
      setTimeout(() => {
        menu.style.display = "none"; // Hide after animation
      }, 500); // Match the animation duration
      icon.classList.remove("rotated"); // Rotate back
    } else {
      menu.style.display = "flex"; // Open the menu
      menu.style.animation = "slideDown 0.3s forwards";
      icon.classList.add("rotated"); // Rotate icon
    }
    event.stopPropagation(); // Prevent click propagation
  });

  document.addEventListener("click", function () {
    // Close the menu when clicking anywhere else
    if (menu.style.display === "flex") {
      menu.style.animation = "slideUp 0.3s forwards";
      setTimeout(() => {
        menu.style.display = "none"; // Hide after animation
      }, 500); // Match the animation duration
      icon.classList.remove("rotated"); // Rotate back
    }
  });

  menu.addEventListener("click", function (event) {
    // Prevent clicks inside the menu from closing it
    event.stopPropagation();
  });
});
