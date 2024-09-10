/**
 * 기재부에서 8월 내년도 예산이 나왔다.
 * 
 * esg사업, 회사에서 미리 일을 배우는 인턴십 12개월
 */

//기본자료형: 값전달
// function changeName(name) {
//     name ='tom';
// }
// const name = 'john';
// changeName(name); //name에 취소선이 뜨면서 값 변경이 되지 않는다.
// console.log(name);

//참조자료형(객체) : 참조(주소) 전달
// function changeNameByObject(obj) {
//     obj.name = 'tom';
//     }
// const user = { name: 'john' }; //참조자료형(객체) : 참조(주소) 전달
// changeNameByObject(user);
// console.log(user);

//참조 자료형의 사용 오류... 


//<json> 표현식
// var jsonText = '{ "name": "Someone else", "lastName": "Kim" }';  // JSON 형식의 문자열
// var realObject = JSON.parse(jsonText); //JSON 형식의 텍스트를 자바스크립트 객체로 변환한다.
// var jsonText2 = JSON.stringify(realObject); //자바스크립트 객체를 JSON 텍스트로 변환한다.

// console.log(realObject);
// console.log(jsonText2);


//const animals=[11,22,33,44];
// for( const key in animals){ // in이면 key 값을 가져온다.
//     console.log(key);
// }
// for(const element of animals){ //of이면 value 값을 가져온다.
//     console.log(element);
// }

// animals.forEach(function(animal,index,array){
//     console.log(`${animal} || ${index} || ${array}`)
// });

// animals.forEach((animal,index,array) =>{
//     console.log(`${animal} || ${index} || ${array}`)
// });

//가변 인자
// function printAll(...args) {
//     for(let i = 0; i < args.length; i++) {
//     console.log(args[i]); //args['java','script','html/css']
//     }
//     for(const arg of args) {
//     console.log(arg);
//     }
//     args.forEach((arg) => console.log(arg));
// }
// printAll('java', 'script', 'html/css');

// 함수를인자로사용하여Callback 처리
// function quiz(answer, printYes, printNo) { //함수의 인자로 함수를 받은 변수를 받을 수 있다.
//     if(answer === 'love you') {
//     printYes();
//     } else {
//     printNo();
//     }
//     }
//     const printYes = function() {
//     console.log('yes!');
//     }
//     const printNo = function () {
//     console.log('no!');
//     } 
//     quiz('wrong', printYes, printNo);
//     quiz('love you', printYes, printNo);

/*
자바스크립트로 서버와 통신하기(Ajax)
1. 모든 서버는 자바스크립트의 네트워크 요청을 거부하도록 설정되어 있음
    - 백엔드 개발자가 요청을 허용하도록 수정해줘야 통신 가능
2. fetch() 함수 사용
    2-1. fetch() 함수는 await와 함께 사용
    2-2. await는 async 함수 내에서 사용
*/

// get(); // 호이스팅 hoisting

// async function get() { 
//     const url = 'http://ggoreb.com/http/html1.jsp';
//     // response result
//     const res = await fetch(url);
//     const data = await res.text();// res.json();
//     //const data = await res.json();
//     console.log(data);
// }



// 나중에 여기 이해 하기!!!! 클로저 부분
// function sequence() {
//     let seq = 0;
//     return function () {
//     return ++seq;
//     };
//     }
    //const seq = sequence();// seq는 동일한 함수를 가리키게 된다.
    // const seq = function () { // 이거랑 위랑 동일한 코드
    // return ++seq;
    //    };
    //console.log(sequence()());//시퀀스 함수를 ()를 두번 씀으로 독립적으로 실행 시킴.
    // console.log( seq() ); //sequence()를 가리킨다. let seq- 0; 
    // console.log( seq() ); //sequence()를 가리킨다. let seq= 1;으로 시작
    // console.log( seq() ); //sequence()를 가리킨다. let seq= 2;으로 시작

// // 해결책
// function sequence() {
//    // let seq = 0;
//     return function () {
//         let seq = 0; // 여기다가 쓰면 해결 된다.
//         return ++seq;
//     };
// }
//     const seq = sequence();// seq는 동일한 함수를 가리키게 된다.
//     // const seq = function () { // 이거랑 위랑 동일한 코드
//     // return ++seq;
//     //    }; 
//     console.log( seq() ); //sequence()를 가리킨다.
//     console.log( seq() ); //sequence()를 가리킨다.
//     console.log( seq() ); //sequence()를 가리킨다.

/*
새로 생성된 seq 변수: 매번 sequence 함수를 호출하면 새로운 스코프가 생성되지만, seq라는 변수는 각각의 호출에서 독립적입니다.
반환된 함수는 오직 호출된 특정 sequence 함수의 seq 변수를 참조합니다. 
즉, 클로저는 자신이 생성된 스코프의 seq 변수를 기억하고, 이 변수를 지속적으로 업데이트합니다.
결론: 클로저는 함수를 정의할 때의 스코프를 기억하며, 이 스코프의 변수들을 계속 참조할 수 있습니다.
따라서 클로저가 seq 변수를 참조하고 있기 때문에, 클로저가 생성된 함수의 seq 값이 계속 유지되고 변경됩니다.
 */

// function foo(x) {
//     return function (y) {
//     console.log(`${x} : ${y}`);
//     }
//     }
//     const bar1 = foo("과목");
//     bar1("국어");
//     bar1("영어");
//     bar1("수학");
//     const bar2 = foo("성적");
//     bar2(100);
//     bar2(90);
//     bar2(80);

// 클로저 함수선언 후 바로 실행 사용법 
(function hello() {
    console.log('IIFE');
})();

const result = (function (){
    let name = "John";
    return name;
})();
console.log(result);

const total = ((x,y) => x+y); //파라미터 사용
console.log(`total: ${total(1,2)}`);


