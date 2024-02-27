//Задание 1
// Выведите числа от 1 до 10 в консоль
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
let evenNum = 1;
while (evenNum < 20) {
  console.log(evenNum + 1);
  evenNum += 2;
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
for (let i = 1; i <= 10; i++) {
  console.log(i * 5);
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
let sumFromOneToHundred = 0;
for (let i = 1; i <= 100; i++) {
  sumFromOneToHundred = sumFromOneToHundred + i;
}
console.log(sumFromOneToHundred);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < 5; i++) {
  console.log(array[i]);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
let arraySum = 0;
for (let i = 0; i < numbers.length; i += 1) {
  arraySum = arraySum + numbers[i];
}
console.log(arraySum);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i < animals.length; i += 1) {
  animals[i] = animals[i] + " - прекрасное животное";
  console.log(animals[i]);
}

//Задание 9
// Выведите символы в строке в консоль
const str = "Hello";
for (let symbol of str) {
  console.log(symbol);
}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
for (let element of array) {
  console.log(element);
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ["Hello, world!", "How are you?"];
for (let sentence of sentences) {
  sentence = sentence.split(" ");
  for (let word of sentence) {
    console.log(word);
  }
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
let arraySum2 = 0;
for (let num of numbers) {
  arraySum2 = arraySum2 + num;
}
console.log(arraySum2);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ["apple", "banana", "cherry"];
for (let word of list) {
  let wordLength = word.length;
  console.log(wordLength);
}

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
const words = ["Hello", "world", "!"];

for (let i = 0; i < words.length; i += 1) {
  const word = words[i];
  const upperCWord = word.toUpperCase();
  words[i] = upperCWord;
}
console.log(words);

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = "Hello, world!";
let vowelCount = 0;
const vowels = ["a", "e", "i", "o", "u"];

for (let char of greeting) {
  if (vowels.includes(char)) vowelCount++;
}
console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words2 = ["Hello", "world", "!"];
let sentenceFromWords = "";
for (let word of words2) {
  sentenceFromWords = sentenceFromWords + word + " ";
}
console.log(sentenceFromWords);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
let index = 1;
while (index <= 10) {
  console.log(index);
  index++;
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
while (index - 1 >= 1) {
  console.log(index - 1);
  index--;
}

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;

while (allPositive == true) {
  for (let num of allNumbers) {
    if (num < 0) {
      allPositive = false;
      console.log("Есть отрицательное число");
    }
  }
  break;
}

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
const random = [2, 4, 6, -3, 8, 10];
rndIndex = 0;
do {
  console.log(random[rndIndex]);
  rndIndex++;
} while (random[rndIndex] > 0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while

let a = 0;
do {
  a++;
  if (a % 3 === 0) {
    continue;
  }
  console.log(a);
} while (a < 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
let sumOfNum = 0;
while (sumOfNum <= 100) {
  let firstNum = prompt("Введите первое число");
  let secondNum = prompt("Введите второе число");
  sumOfNum = Number(firstNum) + Number(secondNum);
}

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
const titlesH4 = document.querySelectorAll("h4");
for (let title of titlesH4) {
  title.style.backgroundColor = "blue";
}

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";

for (let i = 1; i <= 6; i++) {
  let rndCharInd = Math.floor(Math.random() * alphabet.length);
  randomString = randomString + alphabet[rndCharInd];
}
console.log(randomString);
