//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
let currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
let currentYear = currentDate.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
let currentMonth = currentDate.getMonth();
console.log(currentMonth);
let monthName =
  currentMonth === 0
    ? "Январь"
    : currentMonth === 1
    ? "Февраль"
    : currentMonth === 2
    ? "Март"
    : currentMonth === 3
    ? "Апрель"
    : currentMonth === 4
    ? "Май"
    : currentMonth === 5
    ? "Июнь"
    : currentMonth === 6
    ? "Июль"
    : currentMonth === 7
    ? "Август"
    : currentMonth === 8
    ? "Сентябрь"
    : currentMonth === 9
    ? "Октябрь"
    : currentMonth === 10
    ? "Ноябрь"
    : currentMonth === 11
    ? "Декабрь"
    : "Неизвестный месяц";
console.log(monthName);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
let currentDay = currentDate.getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
let birthday = new Date("2024, 6, 7");
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.
let futureDate = new Date(2024, 2, 18);
console.log(futureDate);

let futureDate2 = new Date();
futureDate2.setMonth(futureDate2.getMonth() + 1);
futureDate2.setDate(futureDate2.getDate() + 10);
futureDate2.setHours(0, 0, 0, 0);
console.log("2ой способ задания даты в будущем:\n" + futureDate2);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
let differenceFuture = futureDate - currentDate;
console.log(
  `Разница между датами: ${Math.floor(
    differenceFuture / 1000 / 3600 / 24
  )} дней`
);

let differenceFuture2 = futureDate2 - currentDate;
console.log(
  `Разница между датами 2: ${Math.floor(
    differenceFuture2 / 1000 / 3600 / 24
  )} дней`
);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
let pastDate = new Date(2024, 1, 3);
console.log(pastDate);

let pastDate2 = new Date();
pastDate2.setDate(pastDate2.getDate() - 5);
pastDate2.setHours(0, 0, 0, 0);
console.log("2ой способ задания даты в прошлом:\n" + pastDate2);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
let differencePast = currentDate - pastDate;
console.log(
  `Разница между датами: ${Math.floor(differencePast / 1000 / 3600 / 24)} дней`
);

let differencePast2 = currentDate - pastDate2;
console.log(
  `Разница между датами 2: ${Math.floor(
    differencePast2 / 1000 / 3600 / 24
  )} дней`
);

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
let nextWeek = new Date(2024, 1, 13);
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
let dayOfWeek =
  nextWeek.getDay() === 0
    ? "Воскресенье"
    : nextWeek.getDay() === 1
    ? "Понедельник"
    : nextWeek.getDay() === 2
    ? "Вторник"
    : nextWeek.getDay() === 3
    ? "Среда"
    : nextWeek.getDay() === 4
    ? "Четверг"
    : nextWeek.getDay() === 5
    ? "Пятница"
    : nextWeek.getDay() === 6
    ? "Суббота"
    : "Неизвестный день недели";
console.log(dayOfWeek);

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
let futureYear = new Date();
futureYear.setFullYear(futureYear.getFullYear() + 5);
console.log(futureYear.getFullYear());

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
let futureDateInFutureYear = birthday;
futureDateInFutureYear.setFullYear(futureDateInFutureYear.getFullYear() + 1);
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
console.log(
  "Разница в годах: " + (futureYear.getFullYear() - currentDate.getFullYear())
);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.
const strDate = "2023-06-15T08:30:00.000Z";
console.log(new Date(strDate));

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
console.log(Date.parse(strDate));

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else
const date = "2023/06/15";
let wrongDate = Date.parse(date);

if (wrongDate == NaN) {
  console.log("Неправильный формат даты");
} else {
  console.log("Правильный формат даты");
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;

number >= 0
  ? console.log(`Число ${number} - положительное`)
  : console.log(`Число ${number} - отрицательное`);

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
number % 2 == 0
  ? console.log(`Число ${number} - чётное`)
  : console.log(`Число ${number} - нечётное`);

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
number % 3 == 0
  ? console.log(`Число ${number} - кратно трём`)
  : console.log(`Число ${number} - некратно трём`);

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
Math.abs(number) < 10
  ? console.log(`Число ${number} - однозначное`)
  : console.log(`Число ${number} - неоднозначное`);

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (Math.abs(number) >= 10 && Math.abs(number) < 100) {
  console.log(`Число ${number} - двузначное`);
} else {
  console.log(`Число ${number} - недвузначное`);
}

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number == 0) {
  console.log(`Число ${number} - равно нулю`);
} else if (number > 0) {
  console.log(`Число ${number} - положительное`);
} else {
  console.log(`Число ${number} - отрицательное (не положительное и не ноль)`);
}

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 == 0 && number % 7 == 0) {
  console.log(`Число ${number} - кратно 5 и 7`);
} else if (number % 5 == 0) {
  console.log(`Число ${number} - кратно 5`);
} else if (number % 7 == 0) {
  console.log(`Число ${number} - кратно 7`);
} else {
  console.log(`Число ${number} - не кратно 5 и не кратно 7`);
}

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.
if (Math.abs(number) != number) {
  console.log(`Число ${number} - отрицательное`);
} else if (number == 0) {
  console.log(`Число ${number} - равно нулю`);
} else {
  console.log(
    `Число ${number} - положительное (не отрицательное и не равно нулю)`
  );
}

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (
  Math.abs(number) >= 100 &&
  Math.abs(number) < 1000 &&
  Math.abs(number) == number
) {
  console.log(`Число ${number} - трёхзначное положительное`);
} else {
  console.log(`Число ${number} - не является трёхзначным положительным`);
}

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let numberOfDay = 5;
let weekDay;

switch (numberOfDay) {
  case 1:
    weekDay = "Понедельник";
    break;
  case 2:
    weekDay = "Вторник";
    break;
  case 3:
    weekDay = "Среда";
    break;
  case 4:
    weekDay = "Четверг";
    break;
  case 5:
    weekDay = "Пятница";
    break;
  case 6:
    weekDay = "Суббота";
    break;
  case 7:
    weekDay = "Воскресенье";
    break;
  default:
    weekDay = "Неверные данные";
}
console.log(weekDay);

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = "W";
let fullName;

switch (direction) {
  case "N":
    fullName = "Север";
    break;
  case "S":
    fullName = "Юг";
    break;
  case "W":
    fullName = "Запад";
    break;
  case "E":
    fullName = "Восток";
    break;
  default:
    fullName = "Неверные данные";
}
console.log(fullName);
