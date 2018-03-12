"use strict";
v = "Strict mode 에서는 선언되지 않은 변수 사용시 경고한다.";
// v is not defined; please fix or add /*global v*/

v = 15;
function f1() {
    "use strict";
    var v = "Strict MODE";
}

