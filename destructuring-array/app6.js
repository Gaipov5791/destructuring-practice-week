
let arr = [2025, 12, 31];

// function getDay() {
// 	return new Date().getDate();
// }

// function getMonth() {
// 	return new Date().getMonth() + 1;
// }

// function getYear() {
// 	return new Date().getFullYear();
// }

let [year = getYear(), month = getMonth(), day] = arr;

console.log(getYear());
console.log(getMonth());
console.log(getDay());