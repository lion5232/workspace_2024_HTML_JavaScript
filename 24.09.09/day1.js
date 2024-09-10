//표준 함수를 만드는 법
/*
function 함수 이름(파라미터,.....) {
    console.log (콘솔으로 바로 값 보기); ;(세미콜론은 자바스크립트에선 써도 되고 안써도 됨.)
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
        var   : 함수 스코프 변수 - 범위: 전역 변수, js안에서 사용가능
        let   : 블록 스코프 변수 - {}안에서만 사용 가능 특징 : var과 다르게 재선언이 불가하므로 오류 방지 가능.
        const : 상수 , 클래스    - 재선언 , 재할당이 불가
*/

// const PI =3.14;
// console.log(PI);
// //PI=6666; //TypeError: Assignment to constant variable.

// console.log ('\n\n'); //2줄 줄바꿈

// var a = 1;
// var b = 2;
// let d = 5;
// function test(){
//     if(true){
//         var a = 2;
//         var b = 3;
//         var c = 4;
//         //let d = 5;
//     }
//     // 함수 안에만 있으면 var는 다 통용됨
//     // let는 블록 스코프여서 {} 넘어가면 오류

//     console.log("함수안에서 a=", a);
//     console.log('b=', b);
//     console.log('c=', c);
//     //d는 에러가 발생함. 영역을 벗어남
//     console.log('d=', d);
    
// }
// test();
// //console.log("함수밖에서 c=", c); //ReferenceError: c is not defined
// console.log('함수밖에서 a=', a);
// // 함수 안에서는 var를 쓰고 let은 전역에서 써라.    

//------------------------------------------------------------------------------
// function test2() {
//     //같은 이름의 변수를 선언은 가능함.
//     //그렇지만 마지막에 할당된 값으로 설정됨.
//     var name = 'a';
//     var name = 'v';
//     console.log(name);
//     //하지만 let은 재선언이 안됨
//     let name1 = 'a';
//     //let name1 = 'b'; //Identifier 'name1' has already been declared
//     console.log(name1);
// }
// test2();

// let a1=1, b1=2, c1;
// console.log(a1,b1,c1); //값이 할당 되지 않으면 undefined가 뜬다.
// ES6에서는 let,const 사용을 적극 권장
// 실제 구동시 통상 대부분 프레임웍에서는 var로 변환되서 처리됨
// 미지원 브라우저 대비


// 익명 함수 (콜백함수), () -> 로 바꿀 수 있음
// 주로 1회성, 특정 변수의 값으로 설정 가능
// 특정함수의 인자값, 또는 콜백함수 역할로 주로 사용됨.
// 콜백함수 (시작 시 자동으로 실행되는 함수)
// const noNameFunc = function (name='자바', year=2024) {
//     //alert("이름없는 함수입니다...."); //브라우저에서만 사용 
//     //alert is not defined
//     console.log(name = `${name}, year=${year} 입니다.`);   
// }
// noNameFunc();


//setInterval // 특정 시간 동안 무한 반복
//setTimeout (handler, time) // 1번만 실행
//---------------------------------------------- 위에까지는 오전 아래부터 오후

// 특정함수의 인자값으로 익명 함수 사용
// function noName() {
//     setTimeout(function(){
//        console.log('=>');
//     }, 3000); // 3초 기다렸다가 function 한 번 실행
// }
// noName();

// 화살표 함수
// 표준 함수 => 익명함수 변경 절차
// 1.function 제거
// 2. 파라미터가 1개면 () 제거할수 있다, 반면 없으면 () 필수로 사용
// 3. ()과 {} 사이에 => 추가
// 4. {}는 수행문이 하나인 경우 생략 가능
// 5. 수행문이 하나이고, 중괄호가 생략되어 있으면 return 생략

// 1번 이름이 있는 함수
// function getInfoArrow(name){
//     return `${name} ....!!!@@@`;
// }

// 2번 익명함수
// const getInfoArrow = function (name){
//     return `${name} ....!!!@@@`;
// } 

// 3번 화살표 함수로 변경
// const getInfoArrow = name => `${name} ....!!!@@@`;
// console.log (getInfoArrow('sejong'));

//파라미터가 2개 이상인 경우의 화살표 함수
// 1번 이름이 있는 함수
// function getInfoArrow2(name, age) {
//     return `${name} ....!!!@@@ ${age}`;
// }

// 2번 익명함수
// const getInfoArrow2 = function (name, age) {
//     return `${name} ....!!!@@@ ${age}`;
// }

// 3번 화살표 함수로 변경
// const getInfoArrow2 = (name, age) => `${name} ....!!!@@@ ${age}`;

// console.log(getInfoArrow2('김정인',23));

//object {'김정인'}는 문자열이지만 {name:'김정인'}처럼 중괄호 안에 키와 벨류를 넣으면 이건 오브젝트라고 한다.
// var obj ={
//     name : '김정인',
//     age : '23',
//     load : function(){
//         setTimeout(function(){
//             console.log('=>');
//         } , 2000);
//     }  
// };
// console.log(obj.name);
// obj.load(); 


//화살표 함수내에서 this -> 함수 자체가 속해있는 부모(상위) 객체를 가르킴
//방법 : 애로우 함수 this 사용
// var oobj = {
//     name : '김정인',
//     load : function() {
//         setTimeout(function(){
//             console.log('=>', this.name);// oobj.name을 써도 된다.
//         }, 2000);
//     }
// }
// oobj.load(); //undefined 뜸

// const obj2 = {
//     name : '월요일',
//     load : function() {
//         setTimeout(() => console.log('=>', this.name), 2000);
//     }
// }
// obj2.load(); // 애로우 함수를 쓸때는 위에 있는 부모 객체를 가져 올 수 있으므로 월요일이 정상적으로 출력된다.

// const obj3 = {
//     name : '수요일',
//     load() {
////     에로우 한번일 때 정상 처리됨
//         setTimeout(() => console.log('=>', this.name), 2000);
//     }
// }
// obj3.load(); // 키 : 벨류 으로 안해도 함수를 사용할때는 키(){}로 해도 출력된다. 

const obj4 = {
    name : '목요일',
    load : () => {
        setTimeout(()=> console.log('=>', obj4.name) , 2000);
    }
}
obj4.load(); 
// 여기서 obj4.name을 주고 this.name을 주지 않은 이유: 
//load 메서드를 화살표 함수로 바꾸면 this의 값이 다르게 동작하게 된다. 
//화살표 함수는 자신의 this를 가지지 않고, 정의된 위치의 상위 스코프의 this를 사용하기 때문에, 
//객체의 메서드로 사용될 때 원하는 대로 동작하지 않을 수 있다.
//그러나, load 메서드를 화살표 함수로 변경하고 싶다면, this를 명확히 설정해야 한다. 
//load 메서드를 화살표 함수로 바꾸면 this는 obj4를 참조하지 않으므로, 별도로 obj4를 저장해두고 사용해야 함.
// 즉 this를 사용할때는 애로우 함수를 한 번만 사용해야 상위 부모의 스코프의 this를 사용할 수 있다.
