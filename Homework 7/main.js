// function calc(a,b){
//      if (b === 0){
//          throw new Error('b is 0');
//      } else if (a === 0){
//         throw new Error('a is 0');
//     }
//     return a/b
// }
// console.log(calc (0,1))
//     let name = "serhii";
//     let age = 21;
//     let user = {
//
//      fort() {
//             console.log(this)
//      }
//     }
//     console.log(user)
let user = {
    name: "serhii",
    age : 12,
    func (){
        console.log("dick")
    }
}
let {func} = user
func();
console.log(user)