//Array
let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 10)); // توليد أعداد عشوائية من 0 إلى 9
}

// SUM
let sumEven = 0;
//SUM<5
let sumLessThan5 = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        sumEven += numbers[i];
    }
    if (numbers[i] < 5) {
        sumLessThan5 += numbers[i];
    }
}

console.log("SUM = " + sumEven);
console.log("SUM <5 =" + sumLessThan5);



//OBJ
let obj ={
    name: "Reham",
    age: 21,
    email: "rehammaarabi1@gmail.com",
    phone: "0967304203"
}
  


//obj all
console.log(obj);

//obj one
console.log(obj.name);
console.log(obj.age);
console.log(obj.email);
console.log(obj.phone);