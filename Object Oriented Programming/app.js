let car = {
name : "Toyota",
feulType : "Petrol",
capacity: 5 ,
transmissionType : "manual",
model: "2017",

drive: function (){
    console.log("true");
}

}
console.log(car.model);
car.drive();

//factory function
function drive(model){
    return{
      model,
      draw: function() {
          console.log("starting for drive");
      }
    };
} const car1 = drive(2017);
car1.draw();

function createCarObjects(capacity){
    return{
        capacity,
        draw: function() {
            console.log("five member can sit.")
        }
    };
} const car3 = createCarObjects(5);
car3.draw();

// constructor function

function draw(name,model){
    this.name = name;
    this.model = model;
    this. draw = function (){
        console.log("true");
    }
}
let other = new draw("Toyota" , 2017);