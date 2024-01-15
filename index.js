document.addEventListener("DOMContentLoaded", function () {
  // Scroll-triggered animation
  const animatedElements = document.querySelectorAll(".animated");

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    animatedElements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // Intersection Observer for other hidden elements
  const hiddenElements = document.querySelectorAll(".hidden");
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  };

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  };

  let observer = new IntersectionObserver(callback, options);
  hiddenElements.forEach((element) => {
    observer.observe(element);
  });
});

// REAL JS

document.querySelectorAll(".left").forEach((element) => {
  element.addEventListener("mousein", () => {
    element.querySelector("h1").style.color = "chocolate";
    element.querySelector("span").style.color = "white";
    element.style.transition = "1s";
  });
});
document.querySelectorAll(".left").forEach((element) => {
  element.addEventListener("mouseout", () => {
    element.querySelector("h1").style.color = "white";
    element.querySelector("span").style.color = "chocolate";
    element.style.transition = "1s";
  });
});
