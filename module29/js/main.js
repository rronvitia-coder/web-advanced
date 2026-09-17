//Arrays
//Data types ['','','']


var programmingLanguages = ['Javascript','PHP',"Python"];

console.log(programmingLanguages)

console.log(programmingLanguages[0])
console.log(programmingLanguages[1])
console.log(programmingLanguages[2])

programmingLanguages.push('Java');
console.log(programmingLanguages)

programmingLanguages.pop();
console.log(programmingLanguages)

programmingLanguages.unshift('C#');
console.log(programmingLanguages)

programmingLanguages.shift();
console.log(programmingLanguages)

programmingLanguages.splice(0,2,'Ruby');
console.log(programmingLanguages)

console.log(Math.random()*5);
console.log(Math.floor(Math.random()*5));

var places = ["London","Paris","New york","Berlin"]

//destrukturimi

var [firstPlace, secondPlace, thirdPlace] = places;
console.log(thirdPlace);

var numbers = [1,2,3,4,5,6,,7,8,9,10]

var [firstNumber,secondNumber, ...otherNumbers] = numbers;

console.log(firstNumber)
console.log(secondNumber)
console.log(otherNumbers.toString())

var friendsNames = ['Jon','Lum',"Lir","Rigon","Arian"];

console.log(friendsNames)

console.log(friendsNames[1])

var randomNumbers = [1,2,3,4,5];

randomNumbers.push(6);
console.log(randomNumbers)

randomNumbers.shift();
console.log(randomNumbers)

randomNumbers.splice(2,3,3,4,5,6);
console.log(randomNumbers)

console.log(randomNumbers)

var [firstPlace, secondPlace, thirdPlace] = places;
console.log(thirdPlace);

console.log(Math.random()*5);
console.log(Math.floor(Math.random()*5));

console.log(firstNumber)
console.log(secondNumber)
console.log(otherNumbers.toString())