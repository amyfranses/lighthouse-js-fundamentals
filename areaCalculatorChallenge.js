function calculateRectangleArea(length, width){
  let rectangleArea = length * width;
  if (rectangleArea > 0){
  return rectangleArea;
  } else {
    return undefined;
  }
}


function calculateTriangleArea(base, height){
  let triangleArea = base * height / 2;
    if (triangleArea > 0){
      return triangleArea;
  } else {
    return undefined;
  }
}


function calculateCircleArea(radius){
  let circleArea = Math.PI * Math.pow(radius, 2);
    if (circleArea > Math.PI){
      return circleArea;
  } else {
    return undefined;
  }
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined