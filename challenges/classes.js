// 1. Copy and paste your prototype in here and refactor into class syntax.
class Es6CuboidMaker {
  constructor(cAttrs) {
    this.length = cAttrs.length;
    this.width = cAttrs.width;
    this.height = cAttrs.height;
  }
  volume() {
    return this.length * this.width * this.height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  }
}

const anotherCuboid = new Es6CuboidMaker({ length: 4, width: 5, height: 5 });
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(anotherCuboid.volume()); // 100
console.log(anotherCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends Es6CuboidMaker {
  constructor(cubeAttrs) {
    super(cubeAttrs);
  }
  volume() {
    return this.length ** 3;
  }
  surfaceArea() {
    return 6 * this.length ** 2;
  }
}

const cube = new CubeMaker({ length: 5, width: 5, height: 5 });
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150
