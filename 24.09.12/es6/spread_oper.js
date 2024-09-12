/**
 * 스프레드 연산자
 * 배열| 객체 => 이터러블(요소들을 반복적으로 접근, 처리할 수 있는 데이터 형태) 하다
 *  -> ...변수명(배열|객체) 연산자 사용 가능
 * - 배열 | 객체 병합 ,  깊은 복사, 함수 인자 활용,..
 */

//배열 병합
const arr1 = [1,2,3];
const arr2 = [4,5,6];
// 단순하게 배열을 맴버로 묶는 행위 => (2,3) 크기의 배열로 구성)
const arr = [arr1, arr2];
console.log(arr);

//목표 => (6, ) : 1차원에 맴버 6개의 배열을 구성
const arr_concat = [...arr1, ...arr2];
console.log(arr_concat);

//2. 깊은 복사
const arr3 = [...arr1];
console.log(arr1, arr3);

// 사본의 특정 맴버 조작했다.
arr3[0] =100;
// 원본은 원래값을 유지하는가?
console.log( arr1, arr3 );

//3. 배열구조 분해에서 나머지 연산
// let [ g, ...rest ] = [1, 2, [3, 4], 5];
// console.log( g, rest );

//4. 문자열의 스프레드 연산
console.log([..."helloworld"])

//5. 객체 병합 -> 맴버명이 동일하다면? => 나중객체것을 우선한다(덮어쓰기)
const s1 ={name:'A', pay:1000};
const s2= {name:'C', age:30};
console.log({...s1,...s2}); // c 출력됨

//6. 객체  깊은 복사
const s3 = {...s1};
s3.name = 'z';
// 사본(s3)의 데이터를 변경해도 ,원본(s1)은 유지된다.
console.log(s1,s3);

// 7. 함수에 스프레드 연산 활용
// 함수명 test, 파라미터 a,b,c 내용 a,b,c 값 출력, 표준함수로 구현
function test(a,b,c) {
    console.log(a,b,c);
}
test(arr1);
//만약 a,b,c 각각 자리에 배령의 값을 순서대로 넣고 싶다면 
test(arr1[0], arr1[1], arr1[2]);
//배열을 스프레드 연산해서 호출시 인자로 전달, 위의 목적을 달성함
test(...arr1);
//배열의 수(6개)가 파라미터 수(3개)보다 많으면!!
// 결론 배열 구조분해가 자동으로 진행됨
test(...arr_concat);

//함수의 파라미터에 객체 구조 분해 작용 - 응용
function test2({name, pay}) {
    console.log(name, pay);
}
test2(s1); // 

// const test3 = ({name, pay}) => {
//     console.log(name, py);
// }


//7.3 가변인자 => 매개변수들이 배열 형태로 전달됨
function test4 (...data) {
    console.log(data);
}
test4(1,2,3);
test4 (2,3);
test4(1);

//a는 일반파라미터, data: 가변 인자(파라미터)
function test5 (a, ...data) {
    console.log(a, data);
}
test5(1,2,3);