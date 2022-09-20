// 배열 연산자 : Array

// 변수 vs 배열 : 값을 1개만 저장 vs 여러개의 값을 저장

//변수
let k = 10;     // 변수
const j = 100;  // 상수
/*
k = 50;
console.log(k);

j = 50; //상수 (=변하지 않는 수, 재할당시 오류 발생)
console.log(j);
*/

//배열 선언 : 리터럴, 생성자
//배열[인덱스] : 0부터 배열길이값 n-1까지 배열 '인덱스(주소, 번지)'를 갖는다
let arr1 = [1, 10, '100', '광주', null];
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[1]);

const arr2 = new Array('1',null,50,'A');
console.log(arr2);