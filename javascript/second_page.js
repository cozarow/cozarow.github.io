// mostly Claude, aside from commented parts
let locked = true;

function blockScroll(e) {
  if (locked) e.preventDefault();
}

window.addEventListener("wheel", blockScroll, { passive: false });
window.addEventListener("touchmove", blockScroll, { passive: false });
window.addEventListener("keydown", (e) => {
  const scrollKeys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", " ", "Home", "End"];
  if (locked && scrollKeys.includes(e.key)) e.preventDefault();
});

document.addEventListener("secondDone", () => {
  document.getElementById("scroll-arrow").classList.add("visible");
});

document.getElementById("scroll-arrow").addEventListener("click", () => {
  locked = false;
  document.body.style.overflow = "auto"; // my touch
  document.getElementById("page2").scrollIntoView({ behavior: "smooth" });
  document.getElementById("scroll-arrow").classList.remove("visible"); // my touch
});