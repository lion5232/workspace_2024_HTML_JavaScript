/*
    사용자 정의 클래스형 컴포넌트
*/

//1. 모듈 가져오기
import React, {Component} from 'react';
//설치된 모듈명은 상대경로 package.json에서 가져옴


//2. 컴포넌트 정의
// 파일명과 컴포넌트명은 반드시 같을 필요는 없다.
// 컴포넌트의 생애주기에 맞춰서 함수들이 호출되고, 이 타이밍 맞춰서 작업 가능!!
// vue에서는 컴포넌트 훅이라고 부르고, 리액트는 생애주기 함수라고 부른다.
// 생애주기 함수 => 호출 타이밍에 맞춰 작업을 진행할 떄 사용, 클래스형에서만 지원
// 함수형은 훅으로 대체처리 가능함.
class LifeCycle extends Component {
    //생성자
    constructor(props) {
        super(props);
        console.log('constructor() call')
    } 
    //랜더 함수 
    render() {    
    //JSX 리턴 
        console.log('render() call')
        return (
            <>
            오늘 점심?
            {/* shouldComponentUpdate() => render() => componentDidUpdate()*/}
            <button onClick={()=> this.setState({r:Math.random()})}>상태변경 이벤트 발생</button>
            </>
        );
    }
    //1.컴포넌트가 마운트 되기전 =>  화면에 컴포넌트가 
    // componentWillMount () {
    // }
    componentDidMount () {
        // 화면이 보이기 직전 
        console.log('컴포넌트가 마운트 되었다.')
    }
    //2.컴포넌트가 마운트 된 후 화면 갱신 => 컴포넌트 내에 nextprops, nextstate, nextContext 바뀌면 실행된다.
    shouldComponentUpdate(nextprops, nextstate, nextContext) {
        console.log("shouldComponentUpdate call")
        return true;
    }
    componentDidUpdate () {
        //변경 완료 됐음을 인지할때 호출됨
        console.log(' componentDidUpdate call, 업데이트가 완료되면 호출')
    }
    //3.컴포넌트가 마운트 해제되기전
    componentWillUnmount () {
        // 뒷정리 코드를 발동시킬 때 활용, 로그 정리, 자원 정리, 파일 저장, ... 필요할 경우 수행
        console.log('화면에서 사라질려고 한다.');
    }
}

//3. 컴포넌트를  대표 모듈로 선언하기
export default LifeCycle;