/*
const inputArr = [2, 4, 6, 8, 10];

const reducefn = (acc, cur, idx, src) => {
  console.log(`acc:${acc} / cur:${cur} /  idx:${idx} / src:${src}`);
  return acc + cur;
};

const result = inputArr.reduce(reducefn, 0);
console.log(result);
*/

/*
const inputarr = [2, 4, 6, 8, 10];

const sum = (arr) => {

    let a = 0;

    for(let i = 0; i < arr.length; i++) {

        a += arr[i];

    }
    return a;
}

const result = 

inputArr.reducr()
*/

/*
const arr = [
  "강석원",
  "박종훈",
  "이진우",
  "윤승준",
  "이슬비",
  "이정운",
  "이종석",
  "이진우",
  "장효택",
  "최도원",
  "최승준",
];

const filterfn = (value, index, arr) => {
  console.log(`[{${index}}] ${value}`);
};

const filterResult = arr.filter(filterfn);
console.log(filterResult);

arr.push("홍길동", 1234);

console.log(arr);
*/

/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filterfn = (value, index, arr) => {
  console.log(`[{${value}}] ${index}`);
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const filterResult = arr.filter(filterfn);
console.log(filterResult);
*/

/*
const sunmoonfn = (value, index, arr) => {
  console.log(`value:${value} / index:${index} / arr:${arr}`);
};

const sunmoonfn1 = (value, index) => {
  console.log(`[${index}] ${index}`);
};

const forEachResult = arr.forEach(sunmoonfn);
//const forEachResult = arr.forEach(sunmoonfn1);
*/

/*
const sunmoonfn = (value, index, arr) => {
  console.log(`[${index}] ${value}`);
  return value * value;
};

const mapReslt = arr.map(sunmoonfn);
console.log(mapReslt);
*/

//const mapResult = arr.map();
//console.log(mapResult);

/*
const call3Times = (callback) => {
  //  console.log(callback);
  for (let i = 0; i < 3; i++) {
    //console.log(typeof callback);
    if (i === 2) {
      callback(i);
    }
    callback(i);
  }
};

const myPrint = (idx) => console.log(`${idx} 번째 함수 호출`);

call3Times(function (idx) {
  console.log(`${idx} 번째 함수 호출`);
});
*/

//console.log()

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
//const strInput = "안녕,하세요,박종훈,입니다";
//console.log(strInput.split(","));

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
