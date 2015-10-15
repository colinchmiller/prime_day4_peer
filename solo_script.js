//the original employee objects
var objectAtticus = {name :"Atticus", employeeNumber: "2405", baseSalary: "47000", reviewScore: 3};
var objectJem = {name: "Jem", employeeNumber: "62347", baseSalary: "63500", reviewScore: 4};
var objectBoo = {name: "Boo", employeeNumber: "11435", baseSalary: "54000", reviewScore: 3};
var objectScout = {name: "Scout", employeeNumber: "6243", baseSalary: "74750", reviewScore: 5};

//creating an array and placing the objects into it in order to iterate
var array = [objectAtticus, objectJem, objectBoo, objectScout];


$(document).ready(function(){
  //the button console print function
  $("#bigContainer").on('click', '.benjamin', function(){
    for(i = 0; i < array.length; i++){
      console.log(array[i].name);
      console.log(array[i].bonusRate);
      console.log(array[i].totalIncome);
      console.log(array[i].bonusAmount);    
      }
  });

//creates divs and places employee data within in html
for(var i = 0; i < array.length; i++){
  $("#bigContainer").append("<div class='miniContainer'></div>");
  var $el = $("#bigContainer").children().last();
  //calling the function to calculate the bonuses/////
  array[i] = calculateSTI(array[i]);
  ///////////////////////////////////////////////////
  $el.append("<p>" + array[i].name + "</p>");
  $el.append("<p>" + array[i].bonusRate + "</p>");
  $el.append("<p>" + array[i].totalIncome + "</p>");
  $el.append("<p>" + array[i].bonusAmount + "</p>");
  $el.append("<button class='benjamin'>Click</button>");
  };
});


//the function to calculate the bonus information
function calculateSTI(array){
  var newObjectFirst = {};
  var newObjectSecond = {};

//Taking each iteration of the array and assigning the associated object location
  newObjectFirst.employeeName = array.name;
  newObjectFirst.employeeNumber = array.employeeNumber;
  newObjectFirst.baseSalary = array.baseSalary;
  newObjectFirst.reviewScore = array.reviewScore;

//the variable bonus
  var bonus = getBaseSTI(newObjectFirst.reviewScore) + getYearAdjustment(newObjectFirst.employeeNumber) - getIncomeAdjustment(newObjectFirst.baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

//calculating, console logging, and returning the employee bonus
  newObjectSecond.name = newObjectFirst.employeeName;
  newObjectSecond.bonusRate = bonus;
  newObjectSecond.totalIncome = Math.round(newObjectFirst.baseSalary * (1.0 + bonus)); //BUG #3 Need to parenthesize 1.0 + bonus to override order of operations and parseInt to round to whole number
  newObjectSecond.bonusAmount = newObjectFirst.baseSalary * bonus;
  console.log(newObjectSecond.name + " " + newObjectSecond.bonusRate + " " + newObjectSecond.totalIncome + " " + newObjectSecond.bonusAmount);
  return newObjectSecond;
}

//used to calculate variable bonus
function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; 
}

//used to calculate variable bonus
function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

//used to calculate variable bonus
function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}