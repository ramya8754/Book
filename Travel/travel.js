'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

// Book Now

document.addEventListener("DOMContentLoaded", function() {
  const bookNowButton = document.querySelector(".btn-primary");

  bookNowButton.addEventListener("click", function() {
    alert("Booking functionality will be added here!");
    // You can add your booking logic here, such as redirecting to a booking page
    // window.location.href = "https://example.com/booking";
  });
});

// More Distribution
document.addEventListener("DOMContentLoaded", function() {
  const moreDestButton = document.querySelector(".btn-primary");

  moreDestButton.addEventListener("click", function() {
    const destinationSection = document.getElementById("destination");
    destinationSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.querySelector(".search-btn");
  const navOpenButton = document.querySelector(".nav-open-btn");
  const searchForm = document.querySelector(".tour-search-form");
  const navbar = document.querySelector(".navbar");

  searchButton.addEventListener("click", function() {
    searchForm.classList.toggle("active");
  });

  navOpenButton.addEventListener("click", function() {
    navbar.classList.toggle("active");
  });
});

