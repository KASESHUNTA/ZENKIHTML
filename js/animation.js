"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.from("#tex1", {
    opacity: 0,
    translateY: "100%",
    scrollTrigger: {
      start: "25% 60%",
      end: "40% center",
      toggleActions: "play none none reverse",
    },
  });

  gsap.from("#tex2", {
    opacity: 0,
    translateY: "100%",
    scrollTrigger: {
      start: "43% 60%",
      end: "55% center",
      toggleActions: "play none none reverse",
    },
  });
});

document.querySelector(".JSKI").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const MENU = document.querySelector(".header__btn");

const btn = document.querySelector("nav");

const BAGA = [...document.querySelectorAll(".line")];

MENU.addEventListener("click", function () {
  btn.classList.toString("open");
  BAGA.forEach((line) => line.classList.toggle("open"));
  btn.classList.toggle("open");
  MENU.classList.toggle("open");
});
