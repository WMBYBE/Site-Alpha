document.getElementById("addA").addEventListener("click", function () {apple.changeAmount(true, 1)});
document.getElementById("subA").addEventListener("click", function () {apple.changeAmount(false, 1)});
document.getElementById("addO").addEventListener("click", function () {orange.changeAmount(true, 1)});
document.getElementById("subO").addEventListener("click", function () {orange.changeAmount(false, 1)});
document.getElementById("smoothie").addEventListener("click", function () {smoothie.makeSmoothie()});

class Fruit {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }
  changeAmount (adding, num) {
    if (adding) {
      this.amount += num;
    }
      else {
        this.amount -= num;
      }
    document.getElementById("fruits").innerHTML = "There are "+this.amount+" "+this.name+"s left.";
}
};
 const apple = new Fruit("Apple", 50);
 const orange = new Fruit("Orange", 25);

const smoothie = {fruits:[apple, orange],makeSmoothie() {
   document.getElementById("smoothiemsg").innerHTML = "You made a smoothie."
} };