"use strict";

// For Mobile Nav

const faqAccordionEl = document.querySelector(".faq-container");

const toggleButtonEl = document.querySelector(".toggle-button");
const navBarLinksEl = document.querySelector(".navbar-links");

toggleButtonEl.addEventListener("click", () => {
  navBarLinksEl.classList.toggle("active");
});

faqAccordionEl.addEventListener("click", function () {
  faqAccordionEl.classList.toggle("open");
});
