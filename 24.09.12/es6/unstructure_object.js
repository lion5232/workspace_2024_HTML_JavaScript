/**
 *  객체 구조 분해, 객체 비구조화 할당
 * - {...}, json으로 받은 데이터 메모리 로드하면 => 객체로 본다.
 *  특징 : 객체는 맴버변수 맴버함수가 있으므로 맴버의 이름으로 분해, 이름이 틀리면 처리 안되고 undefined 처리됨
 */

// 0. 객체 준비, 기존 사용방식 (5가지 방법이 존재)
const nm = 'SPA developer';
const pay = 60000000;
const obj = { 
    // 객체 리터럴 방식, 1회성 객체, 이름 x, 함수(혹은 생성자)의 파라미터로 주로 사용
    nm, 
    pay 
}
console.log(obj);

/*
// 함수의 파라미터로 여러 데이터를 가지고 1회성으로 객체를 생성해서 전달하는 유형
$.ajax
*/

//데이터 접근 : 객체명. 맴버변수(함수)
//js에서는 와이드한  표현이다. 간소화되어 있지않다, 코드가 길다. 
console.log(obj.nm, obj.pay);

//1. 객체의 맴버명으로 추출
const {nm1, pay1} = obj;
console.log(nm1,pay1); // 이름이 다르면 undefined
var station = {
s1: "다정동",
s2: "나성동",
s3: ["정부종합청사북측", "정부종합청사남측"]

}
console.log(station); // 이름없이 그대로 출력됨

//2. 맴버명과 동일하게 변수를 생성하여 분해
let {s2,s1,s3} =station; // 순서가 달라고 상관없는지 확인
console.log(s1,s2,s3);

//3. 분해되서 생성된 변수값을 수정하면, 원본은 유지되는가?
s1= "오송역";
console.log(station, s1); // 원본은 유지됨(deep copy)

//4. 중첩구조 제시, 함수 추가됨
const objs = {
    name: '세종',
    date:{
        year:2015,
        month:5
    },
    info() { //객체의 표준함수 표현 => function 제거
        return "웰컴";

    }
}
console.log(objs);
// 분해
const {name, date:{year,month}, info} = objs;
console.log(year, month, info()); 
