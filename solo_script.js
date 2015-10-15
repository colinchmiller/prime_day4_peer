// ! ! !
// Three Bugs
//bug #1: line 22: calculateSTI(array) requires the [i] index to iterate through the arrays
//bug #2: line 69: basePercent should not be subtracted by 1
//bug #3: line 44: when reassigning the value of newArray[2] to the total of the bonus plus the base salary, needed to parseInt the value to round the result and put parenthesis around the 1 + bonus to override the order of operations

var objectAtticus = {name :"Atticus", employeeNumber: "2405", baseSalary: "47000", reviewScore: 3};
var objectJem = {name: "Jem", employeeNumber: "62347", baseSalary: "63500", reviewScore: 4};
var objectBoo = {name: "Boo", employeeNumber: "11435", baseSalary: "54000", reviewScore: 3};
var objectScout = {name: "Scout", employeeNumber: "6243", baseSalary: "74750", reviewScore: 5};

var array = [objectAtticus, objectJem, objectBoo, objectScout];

//Create variables used to write to the DOM
//var newEl, newText, position;
//Capture the position of insertion into the DOM
//position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
$(document).ready(function(){
  $("#bigContainer").on('click', '.benjamin', function(){

    for(i = 0; i < array.length; i++){
      console.log(array[i].name);
      console.log(array[i].bonusRate);
      console.log(array[i].totalIncome);
      console.log(array[i].bonusAmount);    
      }
  });


for(var i = 0; i < array.length; i++){
  $("#bigContainer").append("<div class='miniContainer'></div>");
  var $el = $("#bigContainer").children().last();
  array[i] = calculateSTI(array[i]);
  //console.log("this is array[i]: ", array[i]);
  $el.append("<p>" + array[i].name + "</p>");
  $el.append("<p>" + array[i].bonusRate + "</p>");
  $el.append("<p>" + array[i].totalIncome + "</p>");
  $el.append("<p>" + array[i].bonusAmount + "</p>");
  $el.append("<button class='benjamin'>Click</button>");
  };
});

 // 	newEl = document.createElement('li');
	// newText = document.createTextNode(array[i].employeeName + " " + newObject.employeeName + " " + newObject.bonusRate + " " + newObject.totalIncome + " " + newObject.bonusAmount);
 //  console.log("This is the DOM text: " , newText);
	// newEl.appendChild(newText);
	// position.appendChild(newEl);

function calculateSTI(array){
  var newObjectFirst = {};
  var newObjectSecond = {};

//Taking each iteration of the array and assigning the associated object location
  newObjectFirst.employeeName = array.name;
  newObjectFirst.employeeNumber = array.employeeNumber;
  newObjectFirst.baseSalary = array.baseSalary;
  newObjectFirst.reviewScore = array.reviewScore;

  // var employeeNumber = array.employeeNumber;
  // var baseSalary = array.baseSalary;
  // var reviewScore = array.reviewScore;

  var bonus = getBaseSTI(newObjectFirst.reviewScore) + getYearAdjustment(newObjectFirst.employeeNumber) - getIncomeAdjustment(newObjectFirst.baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newObjectSecond.name = newObjectFirst.employeeName;
  newObjectSecond.bonusRate = bonus;
  newObjectSecond.totalIncome = Math.round(newObjectFirst.baseSalary * (1.0 + bonus)); //BUG #3 Need to parenthesize 1.0 + bonus to override order of operations and parseInt to round to whole number
  newObjectSecond.bonusAmount = newObjectFirst.baseSalary * bonus;
  console.log(newObjectSecond.name + " " + newObjectSecond.bonusRate + " " + newObjectSecond.totalIncome + " " + newObjectSecond.bonusAmount);
  return newObjectSecond;
}

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

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}