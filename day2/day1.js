//표준함수
// function full(name, year){
//     console.log(name, year);
// }
//문자열 표시 "", ''
// 문자열 표시 ``(BackTick)
// function full(name='자바', year=2024){
//     console.log(name =`${name}, year=${year} 입니다.`);
// }

// full('스프링',2222 );

// - 변수 종류 및 스코프
//         var : 함수 스코프 변수
//         let : 블록 스코프 변수
//         const : 상수

// const PI=3.14;
// console.log(PI);
// PI=6666;

// console.log('\n\n');
// var a=1;
// function test() {
//     if(true){
//         var a=2;
//         var b=2;
//         let c=3;
//     }
//      // 함수 안에만 있으면 var는 다 통용됨
//     // let는 블록 스코프여서 {} 넘어가면 오류

//     console.log('a=',a);
//     console.log('b=',b);
//     //에러가 발생함, 영역을 벗어남
//     // console.log('c=',c)
// }
// test();
// console.log('함수밖에서 a=',a);
//에러발생 함수영역을 벗어났음
// console.log('b=',b);

// function test2() {
//     // 같은 이름의 변수를 선언은 가능함
//     // 마지막에 할당된 값으로 설정
//     var name ='A';
//     var name ='B';
//     console.log(name);

//     let name1 ='A';
//     // let name1 ='B';
//     console.log(name1);
// }
// test2();

// let a1=1, b1=2, c1;
// console.log(a1,b1,c1);

// ES6에서는 let, const 사용을 적극 권장
// 실제 구동시 통상 대부분 프레임웍에서는 var로 변환되서 처리됨
// 미지원 브라우저 대비


//익명함수(이름 없음)
// 주로 1회성, 특정 변수의 값으로 설정 가능
//특정함수의 인자값 또는 콜백함수 역활로 주로 사용됨

// const noNameFunc=function(name='자바', year=2024){    
//     console.log(name =`${name}, year=${year} 입니다.`);
// }
// noNameFunc();

// //특정 함수의 인자값으로 익명 함수 사용
// function noName() {
//     setTimeout(function(){
//         console.log('=>')
//     },3000);    
// }
// noName();

// 화살표함수
// 표준함수 => 익명함수 변경 절차
// 1. function 제거
// 2. 파라미터가 1개면 () 제거할수 있다, 반면 없으면 () 사용
// 3. ()과 {} 사이에 => 추가
// 4. {}는 수행문이 하나인 경우 생략 가능
// 5. 수행문이 하나이고, 중괄호가 생략되어 있으면 return 생략

//1번 이름이 있는 함수
// function getInfoArrow(name) {
//     return `${name} ...!!!@@@@`;
// }
//2번 익명함수
// const getInfoArrow=function(name) {
//     return `${name} ...!!!@@@@`;
// }

//3번 화살표 함수로 변경
// const getInfoArrow = name=> `${name} ...!!!@@@@`;
// console.log(getInfoArrow('Sejong'));

//파라미터가 2개 이상인 경우의 화살표 함수

// function getInfoArrow2(name, age) {
//     return `${name} ${age}...!@!@!@!@!@`;
// }

// const getInfoArrow2=function(name, age) {
//     return `${name} ${age}...!@!@!@!@!@`;
// }

// const getInfoArrow2=(name, age) => `${name} ${age}...!@!@!@!@!@`
    
// console.log(getInfoArrow2('월요일', 30));

// 화살표 함수내에서 this -> 함수 자체가 아닌 속해있는 
// 부모(상위) 객체를 가르킴
// 에로우 함수 this 사용
// const obj ={
//     name :'월요일',
//     load : function(){
//            setTimeout(function(){
//             console.log('=>', this.name);
//             // console.log('=>', obj.name);
//            },3000); 
//     }
// }

// obj.load();

// const obj2 ={
//     name :'화요일',
//     load : function(){
//            setTimeout( ()=> console.log('=>', this.name),3000); 
//     }
// }
// obj2.load();

// const obj3 ={
//     name :'수요일',
//     load(){
//  에로우 한번일 때 정상 처리됨
//            setTimeout( ()=> console.log('=>', this.name),3000); 
//     }
// }
// obj3.load();

const obj4 ={
    name :'목요일',
    load : ()=>{
           setTimeout(()=>
             console.log('=>', obj4.name),3000); 
            //  console.log('=>', this.name),3000); 
    }
}
obj4.load();

