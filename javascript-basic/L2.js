/*
Chatper 2
Objects
Classes
Event Handling
*/

/*
verb: 封裝
Car:
name
model
weight
color
*/

// Object定義了物件的屬性
// const Car = {
//     name: "BMW",
//     model: "X5",
//     weight: 1000,
//     color: "black",
// };

// console.log(Car.name+Car.model+":")
// console.log(Car.color)

class CarTemplate {
  // Private
  positionX = 0;
  positionY = 0;
  // initialization: Public Variable
  constructor(name, model, weight, color) {
    this.name = name;
    this.model = model;
    this.weight = weight;
    this.color = color;
  }

  forward() {
    this.positionY += 1;
    console.log(this.name + this.model + ": Go forward");
  }

  backword() {
    this.positionY -= 1;
    console.log(this.name + this.model + ": Go backword");
  }
  left() {
    this.positionX -= 1;
    console.log(this.name + this.model + ": Go left");
  }

  right() {
    this.positionX += 1;
    console.log(this.name + this.model + ": Go right");
  }

  showPosition() {
    console.log("X:", this.positionX, "Y:", this.positionY);
  }
}

const myCar1 = new CarTemplate("BMW", "X5", 1000, "black");

const myInput = prompt("Please enter:")