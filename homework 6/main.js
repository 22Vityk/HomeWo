//1 - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('hello world'.length)
//console.log('lorem ipsun'.length)
//console.log('javascript is cool'.length)

//2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//console.log('hello world'.toUpperCase())
//console.log('lorem ipsum'.toUpperCase())
//console.log('javascript is cool'.toUpperCase())
//3 - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// 3 - Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('javascript if cool'.toLowerCase());

// 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let dirty =' dirty string   ';
//    let clear = dirty.trim()
// console.log(clear)
// 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
//     function stringToarray(){
//          let arr = str.split(' ')
//         return arr
//      }
// console.log(stringToarray())

// 6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let array = [10,8,-7,55,987,-1011,0,1050,0];
// let new2 = 10
// let new3 = myToStringFunction(new2)
//  let arraystring = array.map(myToStringFunction);
// function myToStringFunction(el) {
//     let newres = el+1;
//     let new2 = el+2
//     return new2.toString();
// }
//     console.log(arraystring);
// console.log(new3)
// 7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nams = [11, 21, 3]
// const sortNums = (direction, arr) => {
//     if (direction === 'ascending') {
//         arr.sort(a, b)=>a - b;
//     elso if
//         arr.sort((a, b) => b - a);
// }
// return arr
// }
//
// sortNums('ascending', nums)

// 8 - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// 9 - описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
