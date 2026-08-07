function fadeText2() {
  const textElement = document.getElementById("text2");
  textElement.style.transition = "color 4s ease";

// Allow header to appear while still transitioning
  setTimeout(() => {
    document.dispatchEvent(new Event("secondDone"));
  }, 2000);

  requestAnimationFrame(() => {
    textElement.style.color = "white";
  });
}

document.addEventListener("firstDone", fadeText2);
