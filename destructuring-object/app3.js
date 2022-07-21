// let options = {
// 	width:  400,
// 	height: 500,
// };

// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }

// let width  = options.width;
// let height = options.height;


// Деструктурируем код
let options = {
	width:  400,
	height: 500,
};

let {width, height, color = "black"} = options;

console.log(color);
console.log(width);
console.log(height);