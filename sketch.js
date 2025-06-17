const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

/**
 * Construct aligned equilateral triangle given 
 * coordinates of bottom left point and edge length.
 * E.g. equilat(100, 300, 200) makes an equilateral
 * triangle with bottom left point at (100, 300) and side length 200.
 */
function equilat(x0, y0, length) {
  const x1 = x0 + length;
  const y1 = y0;
  const x2 = x0 + length / 2;
  const height = Math.sqrt(length ** 2 - (length / 2) ** 2);
  const y2 = y1 - height;
  stroke(0);
  noFill();
  triangle(x0, y0, x1, y1, x2, y2);
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
}

function sierp(x0, y0, length, depth) {
  if (depth == 0) {
    return;
  }
  equilat(x0, y0, length);
  const childLength = length / 2;
  const childDepth = depth - 1;
  sierp(x0, y0, childLength, childDepth);
  sierp(x0 + childLength, y0, childLength, childDepth);
  const yDelta = length / 4 * Math.sqrt(3);
  sierp(x0 + length / 4, y0 - yDelta, childLength, childDepth);
}

function draw() {
  background(255);
  const length = 200;
  const x0 = 100;
  const y0 = 300;
  sierp(x0, y0, length, 6);
}
