/**
 * select 태그에 대한 컴포넌트
 */
import React, { Component } from 'react';
import {
    Select,
    MenuItem
} from '@mui/material';

export default class MySelect extends Component {
    constructor (props) {
        super( props );        
        this.state = {   
            selLanguage:this.props.initValue,                     
        }
    }
    render () {
        const { selLanguage } = this.state;
        const { languages } = this.props;
        // 배열 => 작업 => [ <option value="자바">자바</option>, ... ]        
        // "자바" => <option value="자바">자바</option> JSX로 생성        
        // 실습 4분 : 배열의 연산 (foreach, map, filter, reduce)
        const options = languages.map( (item, idx)=>{
            return (
                <option value={item} key={idx}>{ item }</option>
            );
        } );
        const m_options = languages.map( (item, idx)=>{
            return (
                <option value={item} key={idx}>{ item }</option>
            );
        } );
        const onChangeHandler = e => {
            console.log('사용자 선택한 값', e.target.value);
            // 3. 상태변수 업그레이드
            this.setState( { selLanguage:e.target.value } );
        }
        return (
            <>
                <select value={ selLanguage } onChange={ onChangeHandler }>
                    {/* <option value="자바">자바</option>
                    <option value="자바스크립트">자바스크립트</option> */}
                    { options }
                </select>
                <br/>
                <select label="언어" value={ selLanguage } onChange={ onChangeHandler }>
                    {/* <option value="자바">자바</option>
                    <option value="자바스크립트">자바스크립트</option> */}
                    { m_options }
                </select>

            </>
        );
    }
}