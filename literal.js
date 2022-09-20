"use strict";

//숫자(Number)
let myName="홍길동";                    //리터럴
let yourName = new String("김길동");    //생성자
console.log(myName, yourName);
console.log(typeof myName, typeof yourName);

//문자열(Strings)
let myScore = 100;                      //리터럴
let yourScore = new Number(70);         //생성자
console.log(myScore, yourScore);
console.log(typeof myScore, typeof yourScore);

//배열(Arrays)
let myArr = [10, 20, 30];               //리터럴
let yourArr = new Array(10,20,30);      //생성자
console.log(myArr,yourArr);
console.log(typeof myArr,typeof yourArr);

//객체(Object)
let myObj = {
    name: "지현우",
    gender: "남",
    liveIn: "남구"
}

let yourObj = new Object({
    name: "홍길동",
    gender: "남성",
    born: "전남"
})

console.log(myObj.name, myObj['gender']);
console.log(yourObj.name, yourObj['born']);

let isOk = true;    //pyton: True
let isNo = false;   //pyton: False

function myFunc(){
    console.log('hello world');
}