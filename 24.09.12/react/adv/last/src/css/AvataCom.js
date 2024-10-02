/**
 * 여러 유형의 css 스타일을 적용한 컴포넌트
 */
// [2. css modules ]
import myStyle from '.'; // "./index"

// css styled-components
import styled from 'styled-components';

// emotion 적용 컴포넌트
import Avata from './Avata';

import TWCom from './TWCom'; // 다른 스타일에 영향을 미침 (단독 사용 추천)


import './styles.scss';
// css styled-components
const Title = styled.h2`
    color:green;
`;
const Button = styled.button({
    color: 'grey',
});


const user ={
    name: '9월 말',
    url: 'https://i.imgur.com/Pzb2wJO_d.webp?maxwidth=520&shape=thumb&fidelity=high',
    size: 100,
}

export default function AvataCom () {
    return (
        <div>
            <div>            
                {/* 
                    [ 1. css 직접 적용 ]
                    해당 요소에만 영향을 받게 적용 
                    CSS 적용 순서 : 기본 브라우저 css -> external css 
                    -> internal css -> inline css (최종)
                    우선순위가 가장 높은 방식 inline css, 태그에 직접 적용
                */}    
                <div style={{ color:'red' }}>css 기본 적용</div>
            </div>
            <div>
                {/* css modules */}
                <p style={ myStyle.styleDiv }>CSS 모듈형</p>
            </div>
            <div>
                {/* css styled-components */}
                <Title>컴포넌트+스타일 일체형</Title>
                <Button onClick={ ()=>alert('팝업')}>스타일드 버튼</Button>
            </div>
            <div>
                {/* props를 통해서 유저 정보 전달, 스타일 emotion 적용 */}
                <Avata user={ user }/>
            </div>
            <div>
                 <TWCom />
            </div>
            <div className='title'>
                    sass, scss, ...
            </div>
        </div>
    );
}