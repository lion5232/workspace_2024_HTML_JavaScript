/**
 * - node 기반에서 모듈 가져오기를 할때 
 *  - "써드파트 모듈명", "상대경로법 내가만든모듈명"
 *  - 내가 만든 모듈인경우 확장자 .js 생략 가능함( 통상적으로는 사용함)
 *  - 내가 만든 모듈인데 확장자가 없는 경우
 *      - './form' 
 *             - form을 폴더로 간주하고 하위에 index.js를 체크한다.
 *             - 존재하면 해당 내용을 가져온다.
 *      - './form/MyCheckBox' 
 *             - MyCheckBox를 폴더로 간주 => index.js 검사
 *             - 없으면 , MyCheckBox.js로 검사
 *      - './form/MyCheckBox.js' 
 *             - MyCheckBox.js를 검사
 *      - index.js를 사용의미
 *             - 여러개의 컴포넌트를 묶어서 대표 모듈을 생성할때 사용
 *             - 패키지 구성하는 느낌
 */ 

//1. 모듈 가져오기
import LifeCycle from './LifeCycle'; // 커스텀 컴포넌트, 컴포넌트의 생애주기용도 체크
import MyInput from './MyInput'; // 커스텀 컴포넌트, 컴포넌트의 생애주기용도 체크
import MyCheckBox from './MyCheckBox'; // 커스텀 컴포넌트, 컴포넌트의 생애주기용도 체크
import MySelect from './MySelect'; // 커스텀 컴포넌트, 컴포넌트의 생애주기용도 체크

//2. 모듈화 실습  
export  {
    LifeCycle,
    MyInput,
    MyCheckBox,
    MySelect
};
//3.대표모듈 설정
//export default obj;