/**
 *  체크박스 입니다.
 *  -커스텀 컴포넌트
 *  -컴포넌트의 주요 요소 props, state, 이벤트 사용
 *  -써드 파트 모듈중 머터리얼 디자인 적용
 */

// 1. 모듈가져오기 
import React, { Component } from 'react';
import { 
    Input,
    Checkbox,
    FormControlLabel
} from '@mui/material';

// 2. 클래스형 컴포넌트 구현,3. 대표 모듈화 처리
export default class MyCheckBox extends Component{
    constructor (props) {
        super( props );
        // 1. 상태변수 초기화
        this.state = { // 항목을 선택했는지 기억
            checked:false
        }
    }

    onChangeHandler (e) {
        console.log('값이 구분된지 않음, 호출된 상황만 사용', e.target.value);
        //3. 이벤트가 발생하면 (체크박스 클릭) 상태변수를 업데이트함= > render() 자동호출 => 화면갱신
        this.setState({checked:!this.state.checked});
    }
    render() {
        //this.props : 읽기 전용, 속성(혹은 특성)
        const {label} = this.props;
        const {checked} = this.state;
        const onChangeHandler = evt => this.onChangeHandler(evt);
        return (
            <>
                <div>
                    {/* 2. 상태변수 사용 */}
                    <input type='checkbox'
                        checked ={checked}
                        onChange={onChangeHandler}/> { label }
                </div>
                <div>
                    {/* 2. 상태변수 사용 */}
                    <Input type='checkbox'
                        checked ={checked}
                        onChange={onChangeHandler}/> { label }  
                    <br/>
                    <FormControlLabel 
                        control={<Checkbox checked ={ checked }
                                color="success"
                                onChange={ onChangeHandler } />} 
                                label={ label } />
                </div>
            </>
        );
    }
}










