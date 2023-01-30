const arr = [1, 2, 3, 4, 5];

const arrMap = arr.map( (arrs) => {
  let sum = 0;

  sum += arrs
  return sum;
});
console.log(arrMap);


let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers);



function timesTwo(x) {
  return x * 5;
}
console.log(arr.map(timesTwo));

