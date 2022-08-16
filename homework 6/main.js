//1 - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log('hello world'.length)
// console.log('lorem ipsun'.length)
// console.log('javascript is cool'.length)

//2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
//console.log('hello world'.toUpperCase())
//console.log('lorem ipsum'.toUpperCase())
//console.log('javascript is cool'.toUpperCase())

// 3 - Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log('HELLO WORLD'.toLowerCase());
// console.log('LOREM IPSUM'.toLowerCase());
// console.log('javascript if cool'.toLowerCase());

// 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let dirty ='      dirty string   ';
//    let clear = dirty.trim()
// console.log(clear)

// 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
 //   let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); //['Ревуть', 'воли', 'як', 'ясла', 'повні']
//  let str = 'Ревуть воли як ясла повні';
//      function stringToarray(){
//          let arr = str.split(' ')
//         return arr
//      }
//  console.log(stringToarray())

// 6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let array = [10,8,-7,55,987,-1011,0,1050,0]
// let map = array.map(numer => numer.toString())
// console.log(map)

// 7- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//sortNums(nums,'ascending') // [3,11,21]
// let nums = [11,21,3];
// let sortNums =nums.sort((nums1,nums2) => nums1 - nums2 )
// console.log(sortNums)

//sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
//   let sortNums = nums.sort((nums1,nums2) => nums2 - nums1 )
//console.log(sortNums)

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

// let coursesAndDurationArray = [
//      {title: 'JavaScript Complex', monthDuration: 5},
//      {title: 'Java Complex', monthDuration: 6},
//      {title: 'Python Complex', monthDuration: 6},
//      {title: 'QA Complex', monthDuration: 4},
//      {title: 'FullStack', monthDuration: 7},
//      {title: 'Frontend', monthDuration: 4}
// ];
// function sort(){
// let x = coursesAndDurationArray.sort((a,b) => a.monthDuration - b.monthDuration )
//  return x
//    console.log(x)
// }
// console.log(sort())
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// function sort(){
//      let x = coursesAndDurationArray.filter(nun => nun.monthDuration >= 5);
//      return x;
// }
// console.log(sort())
//

// let x = coursesAndDurationArray.sort((month1, month2) => {
//
//       if (month1.monthDuration > month2.monthDuration) {
//        return 1;
//       }
//       if (month1.monthDuration < month2.monthDuration) {
//        return -1;
//       }
//       if (month1.monthDuration === month2.monthDuration){
//        return 0;
//       }else {
//
//       }
// })
// console.log(x)
// 9 - описати колоду карт
// let cards = [
//      {cardSuit: 'clubs',value: 'Ace',color:'black'},
//      {cardSuit: 'clubs',value: 2,color: 'black'},
//      {cardSuit: 'clubs',value: 3,color: 'black'},
//      {cardSuit: 'clubs',value: 4,color: 'black'},
//      {cardSuit: 'clubs',value: 5,color: 'black'},
//      {cardSuit: 'clubs',value: 6,color: 'black'},
//      {cardSuit: 'clubs',value: 7,color: 'black'},
//      {cardSuit: 'clubs',value: 8,color: 'black'},
//      {cardSuit: 'clubs',value: 9,color: 'black'},
//      {cardSuit: 'clubs',value: 10,color: 'black'},
//      {cardSuit: 'clubs',value: 'Jack',color: 'black'},
//      {cardSuit: 'clubs',value: 'Queen',color: 'black'},
//      {cardSuit: 'clubs',value: 'King',color: 'black'},
//      {cardSuit: '',value: 'Joker',color: 'black'},
//
//      {cardSuit:'diamonds',value: 'Ace',color: 'red'},
//      {cardSuit:'diamonds',value: 2,color: 'red'},
//      {cardSuit:'diamonds',value: 3,color: 'red'},
//      {cardSuit:'diamonds',value: 4,color: 'red'},
//      {cardSuit:'diamonds',value: 5,color: 'red'},
//      {cardSuit:'diamonds',value: 6,color: 'red'},
//      {cardSuit:'diamonds',value: 7,color: 'red'},
//      {cardSuit:'diamonds',value: 8,color: 'red'},
//      {cardSuit:'diamonds',value: 9,color: 'red'},
//      {cardSuit:'diamonds',value: 10,color: 'red'},
//      {cardSuit:'diamonds',value: 'Jack',color: 'red'},
//      {cardSuit:'diamonds',value: 'Queen',color: 'red'},
//      {cardSuit:'diamonds',value: 'King',color: 'red'},
//
//      {cardSuit:'Hearts',value: 'Ace',color: 'red'},
//      {cardSuit:'Hearts',value: 2,color: 'red'},
//      {cardSuit:'Hearts',value: 3,color: 'red'},
//      {cardSuit:'Hearts',value: 4,color: 'red'},
//      {cardSuit:'Hearts',value: 5,color: 'red'},
//      {cardSuit:'Hearts',value: 6,color: 'red'},
//      {cardSuit:'Hearts',value: 7,color: 'red'},
//      {cardSuit:'Hearts',value: 8,color: 'red'},
//      {cardSuit:'Hearts',value: 9,color: 'red'},
//      {cardSuit:'Hearts',value: 10,color: 'red'},
//      {cardSuit:'Hearts',value: 'Jack',color: 'red'},
//      {cardSuit:'Hearts',value: 'Queen',color: 'red'},
//      {cardSuit:'Hearts',value: 'King',color: 'red'},
//      {cardSuit: '',value: 'Joker',color: 'red'},
//
//      {cardSuit:'Spades',value: 'Ace',color: 'black'},
//      {cardSuit:'Spades',value:  2,color: 'black'},
//      {cardSuit:'Spades',value: 3,color: 'black'},
//      {cardSuit:'Spades',value: 4,color: 'black'},
//      {cardSuit:'Spades',value: 5,color: 'black'},
//      {cardSuit:'Spades',value: 6,color: 'black'},
//      {cardSuit:'Spades',value: 7,color: 'black'},
//      {cardSuit:'Spades',value: 8,color: 'black'},
//      {cardSuit:'Spades',value: 9,color: 'black'},
//      {cardSuit:'Spades',value: 10,color: 'black'},
//      {cardSuit:'Spades',value: 'Jack',color: 'black'},
//      {cardSuit:'Spades',value: 'Queen',color: 'black'},
//      {cardSuit:'Spades',value: 'King',color: 'black'},
// ]
// - знайти піковий туз
// let x = cards.filter((numl) => numl.cardSuit == 'Spades' && (numl.value =='Ace'))
// console.log(x)

// - всі шістки
// let x = cards.filter(numl => numl.value == 6)
// console.log(x)

// - всі червоні карти
// let x = cards.filter(numl => numl.color == "red")
// console.log(x)

// - всі буби
// let x = cards.filter(numl => numl.cardSuit == 'diamonds')
// console.log(x)

// // - всі трефи від 9 та більше
// let x = cards.filter((num) => num.cardSuit == 'Spades' && !(num.value <= 8))
// console.log(x)


// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
