/**
 * justand를 이용한 전역 상태 관리 메인
 *  - 1. create를 이용하여 저장소 생성
 *      - 상태변수, 액션 정의
 *  - 특징:리덕스를 최소로 간소화한 느낌(상태변수, 액션(함수)), 커스텀훅 사용하듯이 사용가능
 */
import { create } from 'zustand'

// 저장소 생성
//const useStore = create( (set)=>{ return {} } );
const useStore = create( (set)=>({
    // 상태변수
    count:0,
    // 액션
    // 상태변수 값을 증가/감소한 객체로 바꾸기
    increment:()=>set( (state)=>({ count: state.count + 1 }) ), 
    decrement:()=>set( (state)=>({ count: state.count - 1 }) )
}) );

export default useStore;