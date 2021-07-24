window.onload = function() {

var city1 = ["lahore","karachi","multan"];

      console.log(...city1);

var city2 = [...city1,"faislabad","islamabad","hyderabad"];

      console.log(city2);

var num1 = [1,2,3];

var num2 = [...num1,4,5,6];

      console.log(num2);

var num = [6,2,5];
      function addNum(a,b,c){

      console.log(a+b+c);

 }
addNum(...num);


var carName = 'corolla';
  
    carName = 'civic';

var carData = `this is a ${carName} car`;

    console.log(carData);



}