/**
 *  zustand 관련 이벤트(액션 - 목적성을 가짐 ) 발생
 *      - 3. 값증가, 값 감소
 */
import {
    useState,
    useEffect
} from 'react';
import useStore from "./store";

export default function MultiButton  ()  {
   const {increment, decrement} = useStore;
    return (
        <div>  
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
            
        </div>
    ); 
}