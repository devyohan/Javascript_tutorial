// 자료형 연습하기

// boolean
let myVar: boolean = false;
let myBooleanVar: Boolean = new Boolean(true); // TSLint 에서는 Boolean 타입은 쓰지 말라고 한다. 이유는?

console.log(myVar.valueOf());
console.log(myBooleanVar.valueOf());

// number
// TypeScript 에서는 실수, 정수 구분이 없습니다. 모두 실수형으로 처리합니다.
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(octal.valueOf());