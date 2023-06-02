// #1

let fruits = ["Apple", "Banana", "Papaya", "Grape", "Cherry", "Peach"];
fruits.reverse();
console.log(fruits);
/* 
Output: 
Peach
Cherry
Grape
Papaya
Banana
Apple
*/

// #2

let month = [
  "January",
  "February",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
month.splice(2, 0, "March", "April", "May", "June");
console.log(month);
/* 
Output: 
 ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
*/

// #3
const mesage = "Sampaikan pada Sabrina belajar Javascript sangat menyenangkan";
let arrMes = mesage.split(" ");
arrMes.splice(0, 3);
delete arrMes[2];
console.log(arrMes.join(" "));
/* 
Output: belajar Javascript menyenangkan
*/

// #4
const message = "Sampaikan pada Sabrina belajar Javascript sangat menyenangkan";
let arrMess = message.split(" ");
arrMess.splice(0, 3);
delete arrMess[2];
arrMess[0] = "Belajar";
console.log(arrMess.join(" "));
/* 
Output: Belajar Javascript menyenangkan
*/

/* #5 Buat function untuk menghitung BMI (Body Mass Index)
- BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
- Steven weights 78 kg and is 1.69 m tall. Bill weights 92 kg and is 1.95 
m tall
*/
function calcBMI(mass, height) {
  let BMI = mass / (height * height);
  console.log(BMI);
}
let StevenBMI = calcBMI(78, 1.69);
let BillBMI = calcBMI(92, 1.95);

/* #6 Menghitung BMI dengan if else statement
- John weights 95 kg and is 1.88 m tall. Nash weights 85 kg and is 1.76 
m tall

Output example:
John's BMI (28.3) is higher than Nash's (23.5)
*/
let JohnBMI = calcBMI(95, 1.88);
let NashBMI = calcBMI(85, 1.76);
if (JohnBMI > NashBMI) {
  console.log(`John's BMI (26.8) is higher than Nash's (27.4)`);
} else {
  console.log(`Nash's (27.4) is higher than John's BMI (26.8)`);
}
//  #7 Looping

let data = [10, 20, 30, 40, 50];
let total = 0;

/* You code here (you are allowed to reassigned the variable) 
Maybe you can write 3 lines or more
Use for, do while, while for, or forEach
*/
data.forEach((item) => {
  total += item;
});
console.log(`Jumlah total = ${total}`);

/* 
Jumlah total = 150
*/
