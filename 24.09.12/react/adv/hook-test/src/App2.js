/**
 *  useState, useRef, useEffect 사용 실습
 * 
 * 
 */
// 1. 모듈가져오기
import './App.css';
import {
    useState,
    useEffect,
    useMemo,
    useCallback,
    useRef,
    useContext,
} from 'react';

// 2. 대표모듈로 함수형 컴포넌트 정의
//    props를 바로 객체구조분해해서 데이터를 추출할때 => { 속성명,... }
/**
 * 로딩순서
 *  - 함수 내부 먼저 수행
 *  - useEffect() 수행, useEffect()간에는 먼저 기술한 순서대로 호출됨
 */
export default function App2 ( { name, url, pid } ) {
    console.log(`${name} 테스트 App2`);

    // 요구사항 : 실습 4분
    // 1. 상태변수 count 생성, 초기값 1
    const [ count, setCount ] = useState( 1 );
    // 2. 화면상 카운트(count값) 버튼을 만들어서 출력, => JSX
    const countJsx  = (
        <>
            {/* 3. 버튼 클릭하면 +1증가, 화면상에서도 증가되게 보인다  */}
            <button onClick={ ()=>setCount( count+1 ) }>
                카운트({ count })
            </button>
        </>
    );
    
    // 조건부 랜더링 => JSX상에 null인 데이터를 랜더링한타면 => 랜더링 않함.
    const [ pageContent, setPagecontent ] = useState(null);
    // 랜더링에 관여하지 않는 변수
    const marketkurly= useRef(url) ;
    const productID= useRef(Number(pid)); // parseInt(pid) useEffect쓰기에는 적합하지 않는다.  상태변수에만 적용 가능
    

    // 배치순서
    // useState, useRef, useMemo, useCallback 먼저 기술
    // 일반변수, 함수 기술
    // useEffect 나중에 기술

    // 최초 1회 수행하는 코트, 상태변수를 모니터링해서 처리할 작업용
    // 컴포넌트가 최초 생성될때 호출된다!!
    // [] 내에 아무것도 존재하지 않으면 return 파트가 호출되지 않음
    useEffect( ()=>{
        // 1회만 작동하는 위치 => componentDidMount()의 대체제
        console.log('[최초] useEffect() 컴포넌트가 생성되었다');
        // 연산 비용이 높지 않은 초기화 작업 수행

        /* 수행않됨
        return ()=>{
            console.log('[최초] useEffect() 뒷정리 함수');
        }
        */
    }, [] );
    
    // useEffect()에 특정 상태변수를 등록하면 => 상태변수의 변화에 따라 반응 => componentDidUpdate() 대체제
    useEffect( ()=>{
        console.log('count 상태변수용 useEffect()', count);
        return ()=>{
            // 변경되기전 이전값을 이용하여 뭔가 작업해야하면 구현
            console.log('count 상태변수용 뒷정리함수()', count);
        };
    }, [count] );

    // useEffect()에 useRef용 변수 등록? <=사용하지 않는다.
    useEffect( ()=>{
        console.log('productID 상태변수용 useEffect()', productID.current);
        return ()=>{
            // 변경되기전 이전값을 이용하여 뭔가 작업해야하면 구현
            console.log('productID 상태변수용 뒷정리함수()', productID.current);
        };
    }, [productID.current] );

    const dummyJsx  = (
        <>
            {/* 3. 버튼 클릭하면 +1증가, 화면상에서도 증가되게 보인다  */}
            <button onClick={ ()=>{productID.current +=1} }>
                pid({ productID.current })
            </button>
        </>
    );
    return (
        <div className="App">
            <p>기본페이지</p>
            { countJsx }
            {dummyJsx}
            {/** 조건부 랜더링, null이면 랜더링 안함, 값이 있으면 랜더링함 클릭하면  Ref변수 마켓컬리값을 세팅*/}
            <div onClick = {()=>{setPagecontent(marketkurly.current)} }>
               pageContent= [{pageContent}];
            </div >           
            {/* 수평선 */}
            <hr width = "100%" color = "blue" size = "1"/>
        </div>
    );
}