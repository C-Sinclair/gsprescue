tippy("#email", {
  content: "Email: info@gsprescuesw.co.uk",
  interactive: true
});

tippy("#phone", {
  content: "Phone: 01472398653",
  interactive: true
});

const openListener = event => {
  const { classList } = document.querySelector("main")
  const open = classList.contains("open")
  if (!open) {
    console.log("adding open")
    classList.add("open");
  } else {
    classList.remove("open");
  }
};
document.querySelector(".opener").addEventListener("click", openListener);
