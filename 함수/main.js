
console.log()

/*const myPrint = (...data) => {

let result = " ";

    console.log(data);

    for(let i = 0; i < data.length; i++) {
        result = result + data[i] + " ";
    }

    console.log(result);

console.log(data.join(","));

};

myPrint("안녕", "하세요");
*/
const strInput = "안녕,하세요,박종훈,입니다";
console.log(strInput.split(","));


/*
const min = (...items) => {

    console.log(items);

};
console.log(min(10, 20, 30, 40));


console.log("a", "b", "c");
*/

/*
const min = (arr) => {

    let result = arr[0];

    console.log(arr);
    for(let i = 0; i < arr.length; i++) {
        if (result > arr[i]) {
            result = arr[i];
        }
    }
        return result;
};

const input = [10, 5, 20, 100];
console.log(min(input));
*/

/*const isLeapYear = (year) => 
(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`);
console.log(`2010년은 윤년일까? === ${isLeapYear(2010)}`);
console.log(`2000년은 윤년일까? === ${isLeapYear(2000)}`);
console.log(`1900년은 윤년일까? === ${isLeapYear(1900)}`);

*/

/*function sum(a, b) {
    return a + b;

}
console.log(sum(2, 5));

const sum2 = function (a, b) {
return a + b;

};
console.log(sum2(4, 6));

const sum3 = (a, b) => a + b;
console.log(sum3(1, 3));
    
const sum4 = (a, b) => a +b;
console.log(sum4(1, 3));
    
//prompt("입력")
let a = prompt("좋아하는 과일은?", "입력");
console.log(a);

let b = confirm("Y & N");
console.log(b);

let c = alert("?");
console.log(c);
*/

/*
let main2 = function () {

    console.log("두번째 함수 입니다");

}

main2();
*/
/*
main();
main();

console.log(typeof main);
console.log(typeof 1234);
console.log(typeof "1234");
console.log(typeof [1, 2, 3, 4]);

const obj = {a:1, b:2, c:3};
console.log(typeof obj);
console.log(typeof 123.23);

console.log(main);
console.log(console.log);

*/