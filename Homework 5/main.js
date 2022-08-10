// /1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function calc(a,b){ або => a*b
//      return a * b
// }

//console.log(foo(20, 30))
//2 - створити функцію яка обчислює та повертає площу кола з радіусом r
// function calc(p,r){
//     return p * (r * r)
//  }
//  let s = calc(3.14,5)
// console.log(s)

//3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function calc(p,r,h){
//     return 2 * p * (r * h)
// }
// let res = calc(3.14,5,6)
// console.log(res)

 //4 - створити функцію яка приймає масив та виводить кожен його елемент
// let users = [
//     {name: 'vasya', age: 31, status: true},
//     {name: 'petya', age: 33, status: false},
//     {name: 'anna', age: 28, status: true},
//     {name: 'olya', age: 29, status: false}
// ]
//     for (const user of users){
//     }
// console.log(users)
//..або
// let arr = [1,3,5,6]
// function foo (arr){
//     console.log(arr)
// }
// foo(arr)

//5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function foo (text){
//     document.write(`<p>${text}</p>`)
// }
//     foo ("sda")

//6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list (arguments){
//     document.write("<ul>" +
//         "<li>"+arguments+"</li>" +
//         "<li>"+arguments+"</li>" +
//         "<li>"+arguments+"</li>" +
//         "</ul>")
// }
// list("Hello")

//7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function print_li(pazda,count){
//     let text = ""
//     for (let i = 0 ; i < count; i++) {
//         text += "<li>"+pazda+"</li>";
//     }
//     document.write("<ul>"+text+"</ul>")
// }
// print_li("Vityk wa cat",4)

//8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//  let users = [true, `vasya`,31]
//  function ddd(arr){
//     document.write(`<ul>`)
//         for (const arrele of arr){
//             document.write(`<li>${arrele}</li>`)
//         }
//     document.write(`</ul>`)
// }
//       ddd(users)

// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array = [
//     {
//         id: 1,
//         name: "vasy",
//         age: 23
//     },
//     {
//         id: 2,
//         name: "seey",
//         age: 24
//     },
//     {
//         id: 21,
//         name: "day",
//         age: 2},
// ]
// function  foo(arr){
//     for(const arrele of arr){
//         document.write(`<div>${arrele.id}${arrele.name}${arrele.age}</div>`)
//     }
// }
// foo(array)
//10 - створити функцію яка повертає найменьше число з масиву
//  let arr = [1,2,4]
// function foo (array){
//     let min = [0]
//     for (const minelem of arr){
//         if (minelem < min){
//             min = minelem
//         }
//     }
//     return min
// }
// console.log(foo(arr))

//11 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let nub = [1,2,10]
// function foo(arr){
//     let min= 0
//     for(const eee of nub){
//         min += eee;
//     }
//     return min
// }
// console.log(foo())