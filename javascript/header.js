function showHeader() {
  const header = document.getElementById("site-header");
  header.style.transition = "opacity 1s ease";
  header.style.opacity = "1";
}

document.addEventListener("secondDone", showHeader);
