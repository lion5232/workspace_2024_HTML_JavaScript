/**
 *  클레스 표현 -> 객체 생성 : 유형체크 
 *  {}
 */

//1. 객체 리터럴
//  용도: 데이터를 여러개를 들고 함수( 혹은 생성자 )의 인자로 전달할때, 1회성 객체 사용시
const obj = {
    //맴버 변수
    name:'sejong',
    age :10,
    //맴버 함수
    // v표준함수로 구성한 맴버의 
    getAge: function(){
        return `${this.name}의 연식은 ${this.age}입니다.`;
    },
    getAge1: function() {
        const self = this; // 'this'를 외부 변수에 저장
        return () =>  `${self.name}의 연식은 ${self.age}입니다.`;
    }

}; // 이코드가 수행되면 객체가 생성됨.
console.log(obj.name);
console.log(obj.getAge());
const ageInfo = obj.getAge1();
console.log(ageInfo()); // 홍길동의 연식은 30입니다. 

//2. object 상속

//3. 생성자 함수 => 생략(사용빈도 낮음), new ~ 

//4. (*) 생성자 함수 + prototype 확장, new ~
// js 내부의 라이브러리 구성 방식, 함수를 모든 객체가 같이 사용 -> 메모리 이득이 발생함 - 그래서 이거를 쓴다.
// 생성자 함수: 함수명이 대문자로 시작함, 함수 내부에 this를 사용해서 맴버 구성
//              맴버 함수는prototype으로 확장
//4-1 정의 지칭할수 있는 클레스명이 Person으로 만들어짐
function Person (nm) {
    this.type = nm ?? '사람';
}
//4-2 확장 객체 내부로 세팅 x, 일종의 공용공간으로 배치 => 모든 동일 타입의 객체가 공유
Person.prototype.type2 = '변수확장'; // 이건 좀 비추 (객체끼리 공유해야 하기 때문)
Person.prototype.getAge = function() {
    return `${this.type} 의 나이는 ?`;    
}
//4-3 사용
const obj2 = new Person('sejong');
console.log(obj2);
console.log(obj2.type);
console.log(obj2.type2);
console.log(obj2.getAge());
