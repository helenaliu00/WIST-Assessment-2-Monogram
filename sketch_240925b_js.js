let rect1, rect2, rect3, rect4, rect5;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(220, 255, 200);
  textAlign(CENTER, CENTER);
  textFont("Bebas Neue"); 
  rect1 = { x: width / 2 - 100, y: height / 4, width: 50, height: 300 };
  rect2 = { x: width / 2 + 100, y: height / 4, width: 50, height: 300 };
  rect3 = { x: width / 2 - 100, y: height / 4 + 125, width: 200, height: 50 };
  rect4 = { x: width / 2, y: height / 4 + 50, width: 50, height: 300 };
  rect5 = { x: width / 2, y: height / 4 + 300, width: 200, height: 50 };
}

function draw() {
  
  background(220, 255, 200);
  
  // Move Letter "H"
  moveRect(rect1);
  moveRect(rect2);
  moveRect(rect3);
  
  // Move Letter "L"
  moveRect(rect4);
  moveRect(rect5);
  
    // Draw rectangles
    fill(153, 255, 179);
    noStroke();
  rect(rect1.x, rect1.y, rect1.width, rect1.height);
  rect(rect2.x, rect2.y, rect2.width, rect2.height);
  rect(rect3.x, rect3.y, rect3.width, rect3.height);
    fill(0, 220, 50);
  rect(rect4.x, rect4.y, rect4.width, rect4.height);
  rect(rect5.x, rect5.y, rect5.width, rect5.height);
}
  function moveRect(rect) {
  // Calculate distance between mouse and the rectangle
  let d = dist(mouseX, mouseY, rect.x + rect.width / 2, rect.y + rect.height / 2);
  
  // If the mouse is close (within 150px), move the rectangle away
  if (d < 150) {
    let angle = atan2((rect.y + rect.height / 2) - mouseY, (rect.x + rect.width / 2) - mouseX);
    rect.x += cos(angle) * 5;
    rect.y += sin(angle) * 5;
  }
  
  }
