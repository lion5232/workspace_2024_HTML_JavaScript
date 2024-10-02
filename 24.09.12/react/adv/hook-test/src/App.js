/**
 * 함수형 컴포넌트
 *  - react 16에서 추가
 *  - 함수형 컴포넌트는 hook이라는 개념을 도입함으로써, 
 *    클레스형 컴포넌트와 비슷하게 사용 가능해졌다 
 *  - hook : 기존의 기능에 붙여서 그럴싸하게 그런 기능을 대체한것
 *  - 함수형은 state x, 생애주기함수 x, ... => 훅을 통해서 대체제로 제공
 */
import './App.css';
// 훅 가져오기
import {
  useState,   // 상태 변수 대체체
  useEffect,  // 중요 생애 주기 함수 통합 대체
              // com
  //----------
  useMemo,    // 메모이제이션 기능 제공, 연산비용이 높은 작업 결과물(데이터)를 저장하고 사용
  useCallback,// 메모이제이션 기능 제공, 연산비용이 높은 작업 결과물(함수)를 저장하고 사용
  useRef,     // 데이터를 가지고 있다. 데이터가 변경되도 랜더링 되지 않는다(필요하지 않다)
  // ---------
  useContext, // 
  // ---------
  // ...
} from 'react';

// App에서만 사용하는 컴포넌트
const App2 = ( props ) => {
  return (
    <>내부용 컴포넌트</>
  );
}


/**
 * 함수형 컴포넌트에서 상태변수를 변경하면 => return 위의 모든 코드가 다 다시 작동됨!!
 * 필요시 고연산을 수행하는 코드는 최적화(메모이제이션등) 동반해야한다 -> 갱신 속도 유지
 */
function App ( props ) {
    //1. 상태변수 생성 및 초기화
    //const [변수명, set변수명(카멜표기법)] = useState(초기값);
    //set 변수명은 필요없으면 누락해도 됨.

    const [cnt, setCnt] = useState(0);
    const [check, setCheck] = useState(false);

    // useRef내의 값이 변경되더라도 랜더링(영향)하지 않는다.
    const score = useRef(10);

    let {name} = props; //매번 동일한 화면 갱신때 마다 원값으로 계속 세팅된다.
    console.log(name);

    const [myName, setMyName] = useState(name); // 컴포넌트 속성을 추출해서 상태 변수에 세팅한다면 

    function checkUseRef() {
        //useRef값 증가 
        score.current += 1;
        console.log(score.current);
        // props 값을 수정
        name += " 수정"; //뻑남 : Assignment to constant variable. 왜 ? const name이니까
        console.log( name );
        // 상태변수 수정
        setMyName(myName + " 수정");
    }

    return (
        <div className="App">
        <div>
            {/* 통상 화면에 출력하지 않는다.  화면에 안보이고 값을 증감 시킬려고 할때 사용한다. */}
            <p>useRef의 값{score.current} / {name} / {myName} </p>
            <button onClick={checkUseRef}>useRef 값증가</button>
        </div>
        <div>
            <p >체크{ check ?  "ON" : "OFF"} </p>
            {/* 체크 버튼을 클릭하면 ON->OFF 스위칭 되도록 함수 인라인 */}
            {/* <button onClick={() => setCheck(prevCheck => !prevCheck)}>체크</button> */}
            <button onClick={() => setCheck(!check)}>체크</button>
        </div>
        <div>
            <App2/>
            {/* 2. 상태변수 사용 */}
            <p>카운트{cnt} </p> 
            
            {/** 버튼을 클릭(이벤트 onClick) => cnt 증가 (setCnt 사용) 
             * => 내부적으로 render() 호출 => 화면 갱신됨 */}
             {/* setState({}) 랑 비슷함 */}
             {/* prevCnt는 setCnt 함수에 전달된 콜백 함수의 매개변수로, 현재 상태값(cnt)을 나타냅니다. 
             React의 useState 훅을 사용할 때, 상태를 업데이트하는 함수(setCnt)에 함수를 전달하면 그 함수의 인자로 현재 상태값이 자동으로 전달됩니다. */}
            <button onClick={()=> setCnt(prevCnt=> prevCnt+1)}>상태변수 +</button> 
            {/* 상태변수 - 버튼 만들어서 값을 감소 시켜라 */}
            <br/>
            <button onClick={()=> setCnt(prevCnt=> prevCnt-1)}>상태변수 -</button> 

        </div>
        </div>
    );
}

// 대표는 1개만 지정 가능
export default App;