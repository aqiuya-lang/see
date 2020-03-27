
let arr = [12,[1,4,25],23,11];
//方法一
//concat 加递归
function arrqFlatten1 (arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        let arrItem = arr[i];
        //判断数组的 item 是否还是数组
        if(Array.isArray(arrItem)){
            // concat 合并数组  特点 ：返回一个新数组而且对原数组没有影响
            result = result.concat(arrItem);
        }else{
            result.push(arrItem)
        }
    }
    return result;
}
console.log(arrqFlatten1(arr));
//方法二
//使用 reduce 归并方法和 concat
// function arrFlatten2 (arr) {
//     return arr.reduce((result,arrItem) => {
//         return result.concat(Array.isArray(arrItem) ? arrFlatten1(arrItem) : arrItem)
//     },[])
// } 
// console.log(arrFlatten2(arr));
// //方法三
// //直接扁平化后的字符串，然后在调用 split 方法转换成数组
// function arrFlatten3 (arr) {
//     return arr.toString().split(',').map(function (item) {
//         return +item //可以快速获得 Number 类型
//     })
// }
// console.log(arrFlatten3(arr));
// //柯里化函数
// function add(...values){
//     let sum = 0;
//     for (key of values) {
//         sum += key;
//     }
// let tmp = (x) => {
//     sum += x;
//     return tmp;
// }
// tmp.toString = () => sum;
// return tmp

// }

// console.log(add(1)(2));