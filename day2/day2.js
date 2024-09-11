// 변수 선언 let
// - 기본 자료형은 let 사용 (number, string, boolean, null, undefined)

// 상수 선언 const
// -참조 자료형은 const 사용 (list, object, class 등)

//기본 자료형 : 값 전달 
// function test(nick){
//     nick = 'tom';
//     console.log(nick)
// }
//  const nick= 'john';
//  test(nick);
//  console.log(nick);

// function test1(nick, age){
//     nick = 'tom';
//     console.log(nick+'  '+ age)
// }

// test1('john')
// test1('john', 200)

//참조 자료형(객체) : 주소 전달
// function changeNameByObject(obj) {
//     obj.name = 'tom';
// }
// const user = { name: 'john' };
// changeNameByObject(user); // 함수 호출
// console.log(user); // 함수 호출 후 user의 값 확인

// 가변인자
// function printAll(...args) {
//     for(let i = 0; i < args.length; i++) {
//     console.log(args[i]);
//     }
//     for(const arg of args) {
//     console.log(arg);
//     }
//     args.forEach((arg) => console.log(arg));
// }

// printAll('java', 'script', 'html/css');

//함수를 인자로 사용하여 CallBack 처리
// function quiz(answer, printYes, printNo) {
//     if (answer === 'love you') {
//         printYes();
//     } else {
//         printNo();
//     }
// }
// const printYes = function () {
//     console.log('yes!');
// }
// const printNo = function () {
//     console.log('no!');
// }
// quiz('wrong', printYes, printNo);
// quiz('love you', printYes, printNo);



// const animals=[11,22,33,44];

// for (const key in animals) {
//     console.log(key);
// }

// for (const element of animals) {
//     console.log(element)
// }

// animals.forEach(function(animal,index,array){
//     console.log(`${animal} || ${index} || ${array}` )
// });

// animals.forEach((animal,index,array)=>{
//     console.log(`${animal} || ${index} || ${array}` )
// });

// funcA();
//에러발생
// funcB();

// function funcA() {
//     console.log('java');
// };

// const funcB = function () {
//     console.log('script');
// }

// 중복 선언으로 에러 발생
// const funcA = function () {
//     console.log('script');
// };
// function funcA() {
//     console.log('java');
// }
// funcA();

// 자바스크립트로 서버와 통신하기(Ajax)
// 1. 모든 서버는 자바스크립트의 네트워크 요청을 거부하도록 설정되어 있음
//     - 백엔드 개발자가 요청을 허용하도록 수정해줘야 통신 가능

// 2. fetch() 함수 사용
//     2-1. fetch() 함수는 await 와 함께 사용
//     2-2. await는 async 함수 내에서 사용

// get(); // 호이스팅 hoisting

// async function get() {
//     const url = 'http://ggoreb.com/http/html1.jsp';
//     //    response  result
//     const res = await fetch(url);
//     const data = await res.text(); // res.json();
//     // const data = await res.json()
//     console.log(data)
// }

//Closure
// function sequence() {
//     //원하지 않는 값이 리턴 될수 있음
//     // let seq = 0;
//     return function () {
//         //해결책....let을 이용해서 해결
//       let seq = 0;
//       return ++seq;
//     };
//   }
//   const seq = sequence();  
// //   const seq = function () {
// //     return ++seq;
// //   };

// //   console.log(sequence());
// //   console.log(sequence()());
// //   console.log(sequence()());

//   console.log(seq());
//   console.log(seq());
//   console.log(seq());

// 이후의 Closure 예제는 HTML 파일로 작성하겠습니다

// (function hello() {
//     console.log('IIFE');
//  })();

//  (function () {
//     // 내부에서 정의된 변수는 외부에서 접근 불가
//     var aName = "Kate";
//     console.log(aName);
//   })();
//   console.log(aName);

  const result = (function () {
    let name = "John";
    return name;
  })();
  console.log(result);
  
  