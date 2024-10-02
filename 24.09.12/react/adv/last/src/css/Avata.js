/**
 *  emotion 적용한 컴포넌트 
 *  
 */

// emotion을 쓰기 위해선 아래 주석 표현도 같이 사용해야함
/**@jsxImportSource @emotion/react*/
import { css } from '@emotion/react';

import myStyle from '.';
import './Avata.css';

// 객체 분해 user (props안에 있는 user 값)
export default function Avata( { user } ) {
    const { name, url, size } = user;
    return (
        <div style={ myStyle.styleMargin }>
            <img
                src={ url }
                alt={ `이미지 로드 실패 : ${name}` }
                style={{
                    width:size,
                    heigth:size,
                }}
                className='avata'// 클래스 
            />
            <div  css = {css `
                    color: red; 
                `}>
                e,m
            </div>
        </div>
    );
}

