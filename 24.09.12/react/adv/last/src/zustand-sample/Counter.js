
/**
 *  커스텀 훅 사용 
 * (라이브러리 (예시 같은거  모듈 갔다 쓰는거 정규식 갔다가 쓰는거 처럼))
 */
import {
    useState,
    useEffect
} from 'react';
import MultiButton from './MultiButton';
import View from './View';
import mystyle from "../css";

export default function Counter  ()  {
   
    return (
        <div style={ mystyle.styleDiv }>
            <h3>카운터 + 전역상태관리 - justand</h3>
            <View />
            <MultiButton />
        </div>
    ); 
}