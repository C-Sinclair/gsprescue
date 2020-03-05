tippy("#email", {
  content: "Email: info@gsprescuesw.co.uk",
  interactive: true
});

tippy("#phone", {
  content: "Phone: 01472398653",
  interactive: true
});

const scroll = event => {
  if (window.pageYOffset > 0) {
    document.querySelector("section #logo").classList.add("scrolled");
  } else {
    document.querySelector("section #logo").classList.remove("scrolled");
  }
};
window.addEventListener("scroll", scroll);

const openListener = bool => event => {
  if (bool) {
    document.querySelector("main").classList.add("open");
  } else {
    document.querySelector("main").classList.remove("open");
  }
};
document.querySelector(".opener").addEventListener("click", openListener(true));
document
  .querySelector(".closer")
  .addEventListener("click", openListener(false));
