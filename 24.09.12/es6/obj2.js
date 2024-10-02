/**
 *  ES6에서는 전통적이 클레스 생성 문법으로 
 *  객체를 표현할 수 있게 지원
 *  
 */

// 정의
class Food {
    // 생성자
    constructor (name, age) {
        //  1. 맴버변수의 생성(메모리 공간에 잡어주고) 및초기화
        this.name = name;
        this.age = age;
    } 
    // 맴버변수
    // 맴버함수 -> 자동으로 prototype 으로 확장 된다. 신경 안써도 됨.
    info() {
        console.log( `${this.name} ${this.age}`);
    }
}
// 사용
const obj = new Food('돈까스', 10);
console.log(obj);
obj.info();

// 상속, 재정의 생략