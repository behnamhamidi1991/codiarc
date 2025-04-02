// Swiper JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1703: {
      slidesPerView: 15,
    },

    1500: {
      slidesPerView: 12,
    },
    1350: {
      slidesPerView: 10,
    },
    1095: {
      slidesPerView: 9,
    },
    920: {
      slidesPerView: 8,
    },
    790: {
      slidesPerView: 7,
    },

    625: {
      slidesPerView: 5,
    },
    500: {
      slidesPerView: 4,
    },
    200: {
      slidesPerView: 3,
    },
  },
});

// Mega Menu
document.addEventListener("DOMContentLoaded", () => {
  const dropdownButton = document.getElementById("header-dropdown");
  const megaMenu = document.querySelector(".mega-menu");
  const icon = dropdownButton.querySelector("i");

  // Toggle mega menu visibility on button click
  dropdownButton.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent immediate closing due to outside click detection

    if (megaMenu.style.top === "-500px" || !megaMenu.style.top) {
      // Open the menu
      megaMenu.style.top = "90px";
      megaMenu.style.zIndex = "50"; // Make it visible
      icon.classList.add("rotated"); // Rotate the icon
    } else {
      // Close the menu
      megaMenu.style.top = "-500px";
      megaMenu.style.zIndex = "50"; // Hide it
      icon.classList.remove("rotated"); // Reset the icon rotation
    }
  });

  // Close mega menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!megaMenu.contains(e.target) && !dropdownButton.contains(e.target)) {
      megaMenu.style.top = "-500px"; // Hide the menu
      megaMenu.style.zIndex = "50"; // Send it backward
      icon.classList.remove("rotated"); // Reset the icon rotation
    }
  });
});

// Hamburger Menu
// Select the hamburger button and the mobile navbar
const hamburgerButton = document.getElementById("hamburger");
const mobileNavbar = document.querySelector(".mobile-navbar");

// Add click event listener to toggle the 'show-mobile-menu' class
hamburgerButton.addEventListener("click", () => {
  mobileNavbar.classList.toggle("show-mobile-menu");
});
