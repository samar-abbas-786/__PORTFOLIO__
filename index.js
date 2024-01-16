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

leave = () => {
  document.querySelectorAll(".left h1").forEach((element) => {
    element.style.color = "chocolate";
    element.style.transition = "color 1s";
  });

  document.querySelectorAll(".left span").forEach((element) => {
    element.style.color = "white";
    element.style.transition = "color 1s";
  });
};
enter = () => {
  document.querySelectorAll(".left h1").forEach((element) => {
    element.style.color = "white";
    element.style.transition = "color 1s";
  });

  document.querySelectorAll(".left span").forEach((element) => {
    element.style.color = "chocolate";
    element.style.transition = "color 1s";
  });
};

openGit = () => {
  const url = "http://www.github.com/samar-abbas-786";
  window.open(url, "_blank");
};

openInsta = () => {
  const url = "https://www.instagram.com/samar_abbas_786";
  window.open(url, "_blank");
};

openLink = () => {
  const url = "https://www.linkedin.com/in/samar-abbas-a1ab4625a";
  window.open(url, "_blank");
};

openWhatsp = () => {
  const url = "https://wa.me/9997405528";
  window.open(url, "_blank");
};
openEmail = () => {
  const url =
    "mailto:samarabbas172003@gmail.com?subject=Hello&body=Body%20of%20the%20email";
  window.location.href = url;
};

AVS = () => {
  const url = "https://aligeriansvisionaryclasses.com/";
  window.open(url, "_blank");
};

CFC = () => {
  const url = "https://gym-website-virid.vercel.app/";
  window.open(url, "_blank");
};
resume = () => {
  url = "images/LAB_RESUME.pdf";
  window.open(url, "_blank");
};
