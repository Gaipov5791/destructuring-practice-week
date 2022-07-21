
// ----------------- Пропуск значений ----------------
let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let name    = arr[0];
// let surname = arr[1];

// let info = arr.slice(2);


// Код с использованием деструктуризации
let [name, surname, ...rest] = arr;

console.log(name);
console.log(surname);
console.log(rest);