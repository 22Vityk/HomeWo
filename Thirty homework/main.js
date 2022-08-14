//1 - Є змінна х, яка ви надаєте вільне числове значення.
//    Якщо змінна x не дорівнює нулю, введіть 'Вірно', інакше введіть 'Невірно'. Перевірте скрипт при a, що дорівнює 1, 0, -3
// let x = 0;
//     if(x = 1){
//         console.log("Не вірно")
//     } else {
//         console.log("Вірно")
//     } if (x = 0){
//         console.log('Не вірно')
//     } else {
//         console.log('Вірно')
//     } if (x = -3){
//         console.log('Не вірно')
//     }else {
//         console.log('Вірно')
// }

//2 - Дано змінний час, який відповідає числу від 0 до 59. Потрібно написати код, який перевірив, до якої четвертої години потрапляє число
//(в першу, другу, третю або четверту частину години).
// let time = 15;
//       if(time <= 15){
//     console.log('Перша частина дня')
//     }else if (time >= 16 && time <=30){
//          console.log("друга половина дня")
//     } if (time >= 31 && time <= 45){
//          console.log('третя половина дня')
//     }else if (time >= 46 && time <= 59){
//     console.log('четверта половина дня')
// };

//3 - У змінний день дано якесь число від 1 до 31. Потрібно працювати, у яку половину(декаду) місяця випускається це число (у першу, другу чи третю).
// let day = 10;
// if (day <= 10){
//     console.log('First dec')
// }else if(day >= 11 && day <= 20){
//     console.log('second dec')
// }else if(day >= 21 && day <31){
//     console.log('3-th dec')
// }

//4 - Скласти розклад на тиждень для домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інформація, що запланована на цей день (можна замість плану на день, назва дня англійською).
// let xday = prompt("На який день потрібен розклад ?")
// switch (xday){
//     case 'Monday',"1":
//         console.log('1.Практичне заняття')
//         console.log('2.Готування до лекції')
//         break;
//     case 'Вівторок','2':
//         console.log('1.lesson','2.Homework');
//         break;
//     case 'Wednesday','3':
//         console.log('1.Praktic',"2.Prewue");
//         break;
//     case 'Thursday','4':
//         console.log('1.Lessons',"2.Homework");
//         break;
//     case 'Friday','5':
//         console.log('Chillday');
//         break;
//     case'Saturday','6':
//         console.log("1.England");
//         break;
//     case 'Sunday','7':
//         console.log("1.Chillday")
//         break;
//     default:
//         console.log('1.Monday')
//         console.log('2.Tuesday')
//         console.log('3.Wednesday')
//         console.log('4.Thursday')
//         console.log('5.Friday')
//         console.log('6.Saturday')
//         console.log('7.Sunday')
//         break;
// };

//5 - Користувач вводить або має два числа.
//    Потрібно знайти та вивести максимальне число з цих двох.
//    Також потрібно врахувати коли введені рівні числа.
// let x = 11;
// let y = 12;
// if (x > y){
//     console.log(x)
// }else if (y > x) {
//     console.log(y)
// } if (x === y){
//   console.log("значення рівносильні")
// }

//6 - є змінна х, яка може прийняти будь-яке значення (рядок, число, undefined, null і тд включно). Напишіть код який,
//  за допомогу оператора || буде присвоювати змінний х значення, якщо значення "за замовчуванням" зміненого х являється фальшивим (хибноподібне, тобто кастується до false)
// let x = 5454 || "deafut";
// console.log(x)







