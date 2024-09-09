//표준 함수를 만드는 법
/*
function 함수 이름(파라미터,.....) {
    console.log (콘솔으로 바로 값 보기); ;(세미콜론 자바스크립트에선 써도 되고 안써도 됨.)
} 참고:호이스팅(함수를 뒤에다가 놓아도 실행이 되게끔 할 수 있음)
*/ 

// 문자열 표시 "", ''
// 문자열 표시 ``(backTick) => 
// function full(name='자바', year=2024) {
//     console.log(name = `${name}, year=${year} 입니다.`);   
// }

// full('스프링', 2222);

/*
- 변수의 종류 및 스코프  (ECMA 2006(ES6) 부터는 var와 let이 구별해서 사용하게 됨)
        var   : 함수 스코프 변수 - 전역 변수, js안에서 사용가능
        let   : 블록 스코프 변수 - {}안에서만 사용 가능 특징 : var과 다르게 재선언이 불가하므로 오류 방지 가능.
        const : 상수 , 클래스
*/

const PI =3.14;
console.log(PI);
//PI=6666; //TypeError: Assignment to constant variable.

console.log ('\n\n'); //2줄 줄바꿈

var a = 1;
var b = 2;
let d = 5;
function test(){
    if(true){
        var a = 2;
        var b = 3;
        var c = 4;
        //let d = 5;
    }
    // 함수 안에만 있으면 var는 다 통용됨
    // let는 블록 스코프여서 {} 넘어가면 오류

    console.log("함수안에서 a=", a);
    console.log('b=', b);
    console.log('c=', c);
    //d는 에러가 발생함. 영역을 벗어남
    console.log('d=', d);
    
}
test();
//console.log("함수밖에서 c=", c); //ReferenceError: c is not defined
console.log('함수밖에서 a=', a);
// 함수 안에서는 var를 쓰고 let은 전역에서 써라.    

//------------------------------------------------------------------------------
function test2() {
    //같은 이름의 변수를 선언은 가능함.
    //그렇지만 마지막에 할당된 값으로 설정됨.
    var name = 'a';
    var name = 'v';
    console.log(name);
    //하지만 let은 재선언이 안됨
    let name1 = 'a';
    //let name1 = 'b'; //Identifier 'name1' has already been declared
    console.log(name1);
}
test2();

let a1=1, b1=2, c1;
console.log(a1,b1,c1); //값이 할당 되지 않으면 undefined가 뜬다.
// ES6에서는 let,const 사용을 적극 권장
// 실제 구동시 통상 대부분 프레임웍에서는 var로 변환되서 처리됨
// 미지원 브라우저 대비


//익명 함수 (콜백함수), () -> 로 바꿀 수 있음
// 주로 1회성, 특정 변수 변수의 값으로 설정 가능
// 특정함수의 인자값, 또는 콜백함수 역할로 주로 사용됨.
// 콜백함수 (시작 시 자동으로 실행되는 함수)
const noNameFunc = function (name='자바', year=2024) {
    //alert("이름없는 함수입니다...."); //브라우저에서만 사용 
    //alert is not defined
    console.log(name = `${name}, year=${year} 입니다.`);   
}
noNameFunc();


setInterval // 무한 반복
setTimeout  // 1번만 실행