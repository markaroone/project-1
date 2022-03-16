"use strict";

const toggleButtonEl = document.querySelector(".toggle-button");
const navBarLinksEl = document.querySelector(".navbar-links");
const faqAccordionEls = document.querySelectorAll(".faq-accordion");

const allLinks = document.querySelectorAll("a:link");

// Mobile Navigation
toggleButtonEl.addEventListener("click", () => {
  navBarLinksEl.classList.toggle("active");
});

// FAQ Section Accordion
faqAccordionEls.forEach((val, i) => {
  val.addEventListener("click", () => {
    const currentAccordion = document.querySelector(".faq-accordion.open");

    if (currentAccordion && currentAccordion !== val) {
      currentAccordion.classList.toggle("open");
      currentAccordion.querySelector(".faq-hidden").style.maxHeight = 0;
    }

    val.classList.toggle("open");

    const accordionBody = val.querySelector(".faq-hidden");
    if (val.classList.contains("open")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
      accordionBody.style.maxHeight = 0;
    }
  });
});

// Smooth Scrolling Animation
{
  /*
  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const href = link.getAttribute("href");
      console.log(href);

      // Scroll back to top
      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  */
}
