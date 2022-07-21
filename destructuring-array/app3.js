// ----------- Пропуск значений -------------------

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let department = arr[2];
// let position = arr[3];

// console.log(department);
// console.log(position);


// Код с использованием деструктуризации

let [, , department, position, , ,] = arr;

console.log(department);
console.log(position);