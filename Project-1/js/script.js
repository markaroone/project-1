"use strict";

const faqAccordionEl = document.querySelectorAll(".faq-accordion");
const toggleButtonEl = document.querySelector(".toggle-button");
const navBarLinksEl = document.querySelector(".navbar-links");

toggleButtonEl.addEventListener("click", () => {
  navBarLinksEl.classList.toggle("active");
});

for (const [key, val] of faqAccordionEl.entries()) {
  faqAccordionEl[key].addEventListener("click", () => {
    faqAccordionEl[key].classList.toggle("open");
  });
}
