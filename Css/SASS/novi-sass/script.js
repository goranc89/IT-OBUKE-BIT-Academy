const hamburger = document.querySelector(".hamburger");
const navLinksWrap = document.querySelector(".nav-links-wrap");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinksWrap.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinksWrap.classList.remove("active");
  })
);
