/* 
1. Do NOT change any of the existing code.
2. You are NOT allowed to type any numbers.
3. You should NOT redeclare the variables a and b.
4. When the code is run, it should output:
a is 8
b is 3 
*/

function test() {
  let a = "3";
  let b = "8";

  /***********Do not change the code above 👆*******/
  //Write your code on lines 16 - 18:
  [a, b] = [b, a];
  /***********Do not change the code below 👇*******/

  console.log("a is " + a);
  console.log("b is " + b);
}

test();
