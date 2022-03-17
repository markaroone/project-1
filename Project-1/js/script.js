"use strict";

// MOBILE NAVIGATION
{
  const toggleMobileNav = function () {
    hamburgerBtnEl.classList.toggle(active);
    mobileNavEl.classList.toggle(active);
    htmlEl.classList.toggle(active);
  };

  //   DOM Elements
  const htmlEl = document.querySelector("html");
  const hamburgerBtnEl = document.querySelector(".hamburger");
  const mobileNavEl = document.querySelector(".mobile-nav");
  const mobileNavLinksEl = document.querySelectorAll(".mobile-nav-link");

  //   Local var
  const active = "active";

  //   Events
  hamburgerBtnEl.addEventListener("click", () => {
    toggleMobileNav();
  });

  mobileNavLinksEl.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMobileNav();
    });
  });
}

// FAQ Section Accordion
{
  const faqAccordionEls = document.querySelectorAll(".faq-accordion");

  faqAccordionEls.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      const currentAccordion = document.querySelector(".faq-accordion.open");

      if (currentAccordion && currentAccordion !== accordion) {
        currentAccordion.classList.toggle("open");
        currentAccordion.querySelector(".faq-hidden").style.maxHeight = 0;
      }

      accordion.classList.toggle("open");

      const accordionBody = accordion.querySelector(".faq-hidden");

      if (accordion.classList.contains("open")) {
        accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
      } else {
        accordionBody.style.maxHeight = 0;
      }
    });
  });
}

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
