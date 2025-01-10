// const circle = document.getElementById("circle");

// document.addEventListener("mousemove", (e) => {
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

//     circle.style.left = `${mouseX}px`;
//     circle.style.top = `${mouseY}px`;
// })

//playground

// onclick of cursor -> create a circle at the point, with center of circle at the cursor

document.addEventListener("click", (event) => {
  // console.log("clicked", event);
  //   console.log("x: ", event.clientX, "y:", event.clientY);
  const circle = document.createElement("div");
  circle.style.left = event.clientX - 50 + "px";
  circle.style.top = event.clientY - 50 + "px";
  circle.style.width = "100px";
  circle.style.height = "100px";
  circle.classList.add("circle-2");
  document.body.appendChild(circle);

  // there can only be 3 circles at a time on the page, if 4th is added, remove the first circle

  const circleList = document.querySelectorAll(".circle-2");
  const numberOfCircles = circleList?.length;

  if (numberOfCircles > 2) {
    document.body.removeChild(circleList[0]);
  }

  let calculatedDistance;
  if (numberOfCircles >= 2) {
    console.log(
      circleList[numberOfCircles - 1],
      circleList[numberOfCircles - 2]
    );

    const { x: circle1X, y: circle1Y } =
      circleList[numberOfCircles - 1].getBoundingClientRect();
    const { x: circle2X, y: circle2Y } =
      circleList[numberOfCircles - 2].getBoundingClientRect();
    const distanceCoords = {
      x: Math.abs(circle1X - circle2X),
      y: Math.abs(circle1Y - circle2Y),
    };

    calculatedDistance = Math.round(
      Math.sqrt(distanceCoords.x ** 2 + distanceCoords.y ** 2)
    );
    document.getElementById("distance").innerHTML = calculatedDistance + "px";

    //hyp : sqrt(a^2 + b^2)
  }

  let overlap = false;
  if (calculatedDistance <= 100) {
    overlap = true;
  }

  document.getElementById("overlap").innerHTML = overlap
    ? "overlapping"
    : "not overlapping";
  //calculate distance between 2 circles center point
});
