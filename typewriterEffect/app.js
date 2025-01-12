const text = "Hello World. This text is being rendered with a 50ms interval. Have a Good Day!";
let index = 0;
let typeInterval;
const typeWriter = () => {
  const divText = document.getElementById("text");
  console.log("here2");
  if (index < text.length) {
    console.log("here");
    
    divText.textContent = divText.textContent + text.charAt(index);
    index++;
  } else {
    clearInterval(typeInterval);
  }
};

typeInterval = setInterval(typeWriter, 50);
