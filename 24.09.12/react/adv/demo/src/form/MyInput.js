/**
 * 커스텀 컴포넌트
 * 숫자만 입력 받을수 있는 입력폼 컴포넌트
 * input의 type을 number로 구성 => 모바일에서는 가상키보드가 숫자 패드로만 나옴
 * PC용을 위한 수치입력 전용 컴포넌트
 */

// 1. 모듈가져오기
import React, { Component } from 'react';
// import { 
//     Button,
//     Input 
// } from "@material-tailwind/react";
import {
    TextField, 
    Button
} from '@mui/material';

// 2. 클래스형 컴포넌트 구현
class MyInput extends Component {
    constructor (props) {
        super( props );
        // 1. 상태변수 초기화
        this.state = {
            inputValue:''
        }
    }

    onChangeHandler(evt) {
        /*
           - 이벤트를 직접 연결한 맴버함수 내에서 this를 사용하면 인식을 못함
           - 처리방법
                -render() 내에서 내부함수 내부에서 호출하여 연결 (현재는 이 방법을 씀)
                -생성자에서 this를 재정의 하면 (나중에 확인)
        */ 

        //입력창에서 입력을 하면 => 값이 변한다 => 이벤트 발생
        //=> 내부함수 onChangerHander 호출 => this.onChangeHandler 호출
        console.log("입력값이 변하고 있다.", evt.target.value);
        //1.입력값 획득
        let orr_text = evt.target.value.replace();
        //2.입력값 중 숫자가 아니면 무시 => 정규식을 처리해라.
        //(/[^0-9]/g) => 숫자가 아닌 모든 문자는 replace
        // [정규식] : 문자클래스 => 문자 1개를 표현
        // [0-9] : 10진수 아라비아 숫자를 표현
        //[^0-9] : 숫자만 빼고 나머지 모든 문자 표현 (A-Z,a-z,가-힣,ㄱ-ㅎ,ㅏ-ㅣ....)
        const value = orr_text.replace(/[^0-9]/g, ''); // replace는 공백으로 대체해라.
        //3.숫자만 반영 => 입력값을 들고 있는 상태변수를 갱신해라
        this.setState({inputValue: value}); //다이렉트로 접근하면 오류 
        
    }

    onSubmitHandler (evt) {
        evt.preventDefault(); //submit 이벤트 무효화
        //값 추출
        console.log(this.state.inputValue);
        //향후, 로그인, 검색등 입력창 기반 작업시 참고, 
        //ex) 서버와 통신
        //입력값 초기화
        this.setState({inputValue:'' });
    }

    //랜더 함수 
    render() {    
    //JSX 리턴 
       // console.log('render() call')
        //2-1. 상태변수 추출
        let{inputValue} =this.state;
        const onChangeHandler = evt =>this.onChangeHandler(evt)
        const onSubmitHandler = evt =>this.onSubmitHandler(evt)

        //JSX 리턴 -> 컴포넌트의 모습
        return (
            <div style={{margin:20}}>
                <form onSubmit={onSubmitHandler}>
                    {/*2. 상태변수 사용*/}
                    <input type="text" onChange={onChangeHandler} value={inputValue} placeholder='숫자만 입력하세요'/>
                    <input type="submit" value="전송"/>
                </form>
                <form  onSubmit={onSubmitHandler}>
                   {/* 써드파트 라이브러리를 사용해도 개발자가 기능을 입히면 동일하게 작동함 */}
                   <TextField onChange={onChangeHandler}
                        value={inputValue}
                        label="점수" 
                        variant="outlined" 
                        placeholder='숫자만 입력하세요'
                        slotProps={{
                        input: {
                            style: { backgroundColor: '#f0f0f0' } // 배경색 설정
                        }
                        }}
                    />
                    <Button variant="contained" type="submit">전송</Button>
                </form>

            </div>
        );
    } 
}

// 3. 대표 모듈화 처리
export default MyInput;