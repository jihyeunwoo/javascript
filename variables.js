"use strict";
let a = 5;  //number
console.log("a의 자료형 : " + typeof a)

let b = 5.0;    //number
console.log('b의 자료형 : ' + typeof b)

let c = "test"; //string
console.log(`c의 자료형 : ${typeof c}`)  //template literal 문법

let d = 't';    //string

let e = false;  //boolean

let f = null;   //NULL

let g;          //Undefined(변수는 선언했지만, 값을 대입/할당하지 않은 상태)

let h = [1,2,3];    //Array , Array()

let i = {           //object
    name : 'seon',
    job: 'tutor'
}

let j = function(){     //function
    console.log('hello javascript world!')
}
k= 100;
console.log(k);

//일반적인 자바스크립트 타입 ==> ES2015(ES6) 추가된 Symbol(), Class도 있음