//전역 상태 관리
/**
 * useContext(하위), createContext(전역공간) -> 상위에서 JSX에서 표현 사용
 * 상위 컴포넌트의 데이터를 하위 컴포넌트로 전달시 (상위 -> 하위)
 *  - 기본 방법 props
 *  - useContext는 props를 사용하지 않고 간단하게 전달하는 방법 제시
 */
// 실습 기본형 함수형컴포넌트 구성 실습 2분 
import './App.css';
import {
    useState,
    useEffect,
    useMemo,
    useCallback,
    useRef,
    useContext,
    createContext,
} from 'react';

// 요구사항: 취상위 컴포넌트 App7의 데이터를 최하위 컴포넌트 End에서 사용하고 싶다!!

// 컨텍스트는 글로벌하게 관리 가능
const TextContext = createContext("징검다리 황금연휴 Start!! 공부~!");

function End () {
    // 저 위에있는 컴포넌트의 데이터를 사용하겠다
    const conText = useContext( TextContext );
    return (
        <>
            <p>가장 하위 컴포넌트</p>
            { conText }
        </>
    );
}
function Mid () {
    return (
        <>
            <End/>
        </>
    );
}
export default function App7 ( {} ) {
    const [sendText, setSendText] = useState("연휴");
    return (
        <>
            <h2>useContext Test</h2>
            {/* 전달하는 데이터는 어떤식이던 변경 가능함 
                TextContext.Provider 가 공급하는 value가 중요!!
            */}
            <TextContext.Provider value={ sendText }>
                <Mid/>
            </TextContext.Provider>   
            <input onChange={ e=> setSendText(e.target.value) } value={sendText}/>         
        </>
    );
}