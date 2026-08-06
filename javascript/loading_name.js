const sentence1 = "hi, i'm cerulean ozarow!!!";
let index1 = 0;
const speed1 = 100;

function typeWriter1() {
  const textElement = document.getElementById("text1");
  if (index1 < sentence1.length) {
    textElement.innerHTML += sentence1.charAt(index1);
    index1++;
    setTimeout(typeWriter1, speed1);
  } else {
    // finished typing — let the next script know
    document.dispatchEvent(new Event("firstDone"));
  }
}

window.onload = typeWriter1;
