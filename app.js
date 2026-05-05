let appearObjs = document.querySelectorAll(".appear");
let progressBars = document.querySelectorAll(".progress-bar");
let toTopBtn = document.querySelector(".to-top");
let showMenuBtn = document.querySelector(".menu-show");
let menu = document.querySelector(".menu-container");
let bgShadow = document.querySelector(".background-shadow");
let navLi = document.querySelectorAll(".nav-li");
let header = document.querySelector(".header");

gsap.from(header, {
  opacity: 0,
  duration: 1,
});

const closeMenu = () => {
  showMenuBtn.classList.remove("close-menu");
  menu.classList.remove("active");
  bgShadow.classList.remove("active");

  gsap.to(".nav-li", {
    opacity: 0,
  });

  gsap.to(showMenuBtn, {
    x: 0,
    y: 0,
    duration: 0.1,
    ease: "none",
  });
};

const openMenu = () => {
  showMenuBtn.classList.add("close-menu");
  menu.classList.add("active");
  bgShadow.classList.add("active");

  gsap.to(".nav-li", {
    opacity: 1,
    stagger: 0.11,
  });

  gsap.to(showMenuBtn, {
    x: -100,
    y: -40,
    ease: "none",
    duration: 0.1,
  });
};

showMenuBtn.addEventListener("click", () => {
  if (!showMenuBtn.classList.contains("close-menu")) {
    openMenu();
  } else {
    closeMenu();
  }
});

bgShadow.addEventListener("click", (e) => {
  if (e.target.classList.contains("background-shadow")) {
    closeMenu();
  }
});

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 500) {
    toTopBtn.classList.remove("hidden");
  } else {
    toTopBtn.classList.add("hidden");
  }
});

appearObjs.forEach((element, index) => {
  let direction = index % 2 === 0 ? -100 : 100;

  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "bottom 10%",
      toggleActions: "restart reverse restart reverse",
    },
    opacity: 0,
    x: direction,
    duration: 1,
    ease: "power2.out",
    clearProps: "all",
  });
});

gsap.from(".progress-bar", {
  scrollTrigger: {
    trigger: ".skills-container",
  },
  clipPath: "inset(0% 100% 0% 0%)",
  stagger: 0.2,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out",
});
