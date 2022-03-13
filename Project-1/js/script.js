"use strict";

const faqAccordionEl = document.querySelectorAll(".faq-accordion");
const toggleButtonEl = document.querySelector(".toggle-button");
const navBarLinksEl = document.querySelector(".navbar-links");
const faqIconEl = document.querySelector("faq-icon");

toggleButtonEl.addEventListener("click", () => {
  navBarLinksEl.classList.toggle("active");
});

for (const [key, val] of faqAccordionEl.entries()) {
  faqAccordionEl[key].addEventListener("click", () => {
    faqAccordionEl[key].classList.toggle("open");

    faqAccordionEl[key].classList.toggle("invert-icon");
  });
}
