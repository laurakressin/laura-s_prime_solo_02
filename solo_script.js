// ! ! !
// Three Bugs
//Bug #1: in line 18, var calculateSTI was entering the whole array, and not array[i]
//Bug #2: in line 63, you only need to return the basePercent, without subtracting 1
//Bug #3: in line 41, newArray[2] needed to multiply bonus and baseSalary and add it to the baseSalary.  I also changed the base Salary to have a parseInt, so it wouldn't be a string.
function employee(name, idNum, salary, reviewRating){
  this.name = name;
  this.idNum = idNum;
  this.salary = salary;
  this.reviewRating = reviewRating
};

var atticus = new employee("Atticus", "2405", "4700", 3);
var jem = new employee("Jem", "62347", "63500", 4);
var boo = new employee("Boo", "11435", "54000", 3);
var scout = new employee("Scout", "6243", "74750", 5);

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [atticus, jem, boo, scout];

//Create variables used to write to the DOM
var newEl, newText, position;

//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i].join(', '));
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(array){
  var newArray = [];
  newArray[0] = array.name;
  var employeeNumber = array.idNum;
  var baseSalary = parseInt(array.salary);
  var reviewScore = array.reviewRating;
  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus;
  newArray[2] = Math.round(baseSalary + (baseSalary * bonus));
  newArray[3] = Math.round(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
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