const sentence = "welcome to my website :)";
let index = 0;
const speed = 75; // Speed of typing in milliseconds

function typeWriter() {
  const textElement = document.getElementById("text2");
  
  // Add the next character to the text element
  if (index < sentence.length) {
    textElement.innerHTML += sentence.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

// Call the function to start typing when the page loads
window.onload = typeWriter;
