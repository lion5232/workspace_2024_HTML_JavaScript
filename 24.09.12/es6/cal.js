/**
 *  오류 상황 처리 -> try ~ catch ~finally : 자바와 유사
 *  코드 전개시 오류 방지 코드를 삽입
 * - 옵셔널 체이닝 코드에서 방지 코드를 삽입 : ?. 
 *  A.b.c?.d.e...
 * - 값을 선택적으로 선택할때 방어코드 : Nullish Coalescing : ??
 * 
 */

//데이터 샘플
const A = {
    proc: {
        msg: {
            code: 10 
        },
        check: null
    },
}
// 코드값 출력 : 분해 방식 말고 옵셔널 체이닝을 사용
console.log(A.proc.msg.code); // 10 출력
// 만약 정상적인 데이터라면, check 밑에도 code가 있었다.(가정)
// ?. 처리하면  코드 셧다운 않되고 undefined를 리턴하여 => 코드는 대응할 수 있다..
console.log(A.proc?.check?.code);

// 선택적 값 처리 => 서버의 포트 설정(커스텀 || 커스텀: 환경변수)
console.log( '' || 'hello'); //hello 출력
console.log( 0 || 'hello'); // hello 출력 ''를 원했는데  || 특성상 FALSE로 간주해서 뒷값을 취하게 되었다.
console.log( 'a' || 'hello'); // a 출력

//의도대로 정상 작동한다, 선택적 값 처리 => ??
console.log( '' ?? 'hello');
console.log( 0 ?? 'hello');