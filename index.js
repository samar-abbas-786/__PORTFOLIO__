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
