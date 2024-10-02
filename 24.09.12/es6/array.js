/**
 *  배열 데이터 엑세스, 연산, 변형, 필터링, ..
 */
let arr = [10,20,30,40,50];

// 1. 맴버들을 하나씩 접근해서, 뭔가 작업을 수행한다면?
//for문보다 훨씬 빠르기 때문이다.
arr.forEach((data, index) => {
    console.log(data, index);
})

//2. 배열의 모든 맴버들을 3배 증가시켜라

const arr_3x = arr.map( data => data*3 )
//const arr_3x_2 = arr.map( function(data) {return data*3; } ) // 같은 표현
console.log(arr_3x); // alt + shift + 화살표 : 한줄복사

//3. 필터링
console.log(arr.map( data => data/10 ).filter(data => data %2)); 
//필터 조건 짝수 홀수 조건에 만족하는 맴버만을 추출할 때 사용하면 됨.

//4. 배열 맴버들을 이용한 연산
// 맴버들의 총합 획득
console.log( arr.reduce((pv, cv) => pv+cv) ); // 총합 150 추정 출력됨.