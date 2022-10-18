const numbers = [1, 2, 3, 4, 5, 6]
const numbers2 = [1, 2, 3]
const numbers3 = [1, 2, 3, 4]
function array(arr1) {
  if(arr1.length === 0)
  return 0

  let sum = 0

  for (let i =0; i < arr1.length; i++) {
    sum += arr1[i]
  }
  return sum / arr1.length
}

console.log(array(numbers));
console.log(array(numbers2));
console.log(array(numbers3));