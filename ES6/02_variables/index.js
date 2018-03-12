/*
변수 이름 규칙
- keywords 금지
- 영문과 숫자의 조합
- underscore 와 dollar 기호는 가능하다.
- 숫자로 변수명을 시작할 수 없다.
*/

var variable_name;
var name = "Yohan";
console.log("제 이름은 " + name);

/*
Global 과 Local 변수
*/

var num = 10;
function test() {
    var num = 100;
    console.log("num : " + num);
}

console.log("num outside test() : " + num)
test()

"use strict"
function strict_test() {
    var num = 100
    console.log("value of num in test() " + num) {
        console.log("Inner Block begins")
        let num = 200
        console.log("value of num : " + num)
    }
}
strict_test()