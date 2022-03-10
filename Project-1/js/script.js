"use strict";

// For Mobile Nav
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const faqAccordionEl = document.querySelector(".faq-container");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

faqAccordionEl.addEventListener("click", function () {
  faqAccordionEl.classList.toggle("close");
});
