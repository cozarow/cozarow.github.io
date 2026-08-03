function fadeText2() {
  const textElement = document.getElementById("text2");
  textElement.style.transition = "color 2s ease";
  requestAnimationFrame(() => {
    textElement.style.color = "white";
  });
}

// wait for first.js to signal it's done, instead of using window.onload
document.addEventListener("firstDone", fadeText2);
