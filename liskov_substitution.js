// A subclass should be able to substitute its parent
// class without breaking the functionality

// Let's suppose we have a *Rectangle* factory function and a *Square*
// factory function. A *Square* is a special type of *Rectangle* where
// the width and height are equal. We want to ensure that a *Square*
// can substitute a *Rectangle* without breaking the program

const createRectangle = (width, height) => {
  return {
    width,
    height,
    setWidth(newSize) {
      this.width = newSize;
    },
    setHeight(newHeight) {
      this.height = newHeight;
    },
    getArea() {
      return this.width * this.height;
    },
  };
};

const createSquare = (side) => {
  return {
    ...createRectangle(side, side),
    setWidth(newWidth) {
      this.width = newWidth;
      this.height = newWidth;
    },
    setHeight(newHeight) {
      this.height = newHeight;
      this.width = newHeight;
    },
  };
};

const printArea = (shape) => console.log("Area: ", shape.getArea());

const LSP = () => {
  const rectangle = createRectangle(5, 10);
  const square = createSquare(7);

  console.log("---------------- *********** LSP *********** ----------------");
  printArea(rectangle);
  printArea(square);

  rectangle.setWidth(4);
  rectangle.setHeight(6);
  console.log("Set by methods in rectangle");
  printArea(rectangle);

  console.log("Set by method in square");
  square.setWidth(8);
  printArea(square);

  square.setHeight(6);
  printArea(square);
};

module.exports = LSP;
