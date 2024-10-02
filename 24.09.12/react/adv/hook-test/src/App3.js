/**
 * 네트워크 연동
 *  - 서버로부터 가져온 데이터를 훅을 이용하여 변수로 저장
 *      - $ npm i axios --save
 *      - 네트워크용 라이브러리로 axios or fetch()  사용 가능함
 *  - 이 과정에서 최적화
 *      - 메모이제이션 => 캐싱 => 1회성으로 세팅되면, 화면갱신시 재구성 x, 변하지 않는 고연산 데이터/함수등 대체
 *  - 확장 
 *      - 환전 => 환율계산기 응용, 물타기계산기
 */
// 1. 모듈가져오기
import './App.css'; //css 가져오기
import { // 훅 관리
    useState, //상태 관리를 위한 훅
    useEffect, // 사이드 이펙트를 처리하기 위한 훅
    useMemo, // 메모이제이션을 위한 훅
    useCallback, // 메모이제이션된 콜백을 위한 훅
    useRef, // 참조를 만들기 위한 훅
    useContext,  // 컨텍스트 API를 사용하기 위한 훅
} from 'react';

import axios from 'axios'; // axios를 가져와 API 요청을 처리  

import {
    Chip    // 상품목록중 제목과 가격만 DP 용도 + 클릭 이벤트 추가 // 상품 목록에서 제목과 가격을 표시하기 위한 Material-UI 컴포넌트
    ,Avatar // 상품 이미지를 표시하기 위한 컴포넌트
} from '@mui/material';

// 2. 모든 상품 정보를 가져오는 비동기 함수 정의
async function  getAllProducts ( url ) { // API 요청을 위한 URL을 인자로 받는 비동기 함수
    console.log('모든 상품 정보를 가져온다');  // 콘솔에 로그 출력
    const res = await axios.get( url );  // axios로 GET 요청하여 데이터 가져오기
    
    // 제품 사진과 가격 정보를 포함한 JSX 리스트를 생성하여 반환
    // 제품사진, 가격 => JSX 생성 => 목록 표시(특정 가격이상 필터링, 카테고리 선택으로 필터링 )
    return res.data.map( (product, idx) => {   // return res.data.map(...) 부분에서 데이터를 JSX 형태로 변환 // 응답 데이터에서 각 상품을 순회하여 JSX로 변환
        const { image, price } = product;   // 각 상품의 이미지와 가격을 추출
        return (<li key={idx}>  {/* 고유한 키를 부여하여 리액트에서 효율적으로 업데이트 */}
            <img src={ image } width='30px'/> {/* 이미지 표시 */}
            <b>{ price }</b> {/* 가격 표시 */}
        </li>);
    } );
}



// 2. 대표모듈로 함수형 컴포넌트 정의
//    props를 바로 객체구조분해해서 데이터를 추출할때 => { 속성명,... }
export default function App3 ( { name, url, pid } ) {
    // url을 직접 사용, pid는 useRef 훅을 사용하여 참조
    const id  = useRef( parseInt(pid) ); // pid를 정수로 변환하여 저장
    const [productAll, setProductAll]  = useState( null );   // 모든 상품 정보를 저장할 상태 변수
    const [product, setProduct]  = useState( null ); // 1개 상품 정보 JSX // 선택된 상품 정보를 저장할 상태 변수 !!

    // 1회성에서는 상태변수 초기화 주의!!  // 컴포넌트가 처음 렌더링될 때 데이터 요청
    useEffect(()=>{
        console.log('1회 초기화', url, id.current);  // 초기화 로그 출력
        // const res = getAllProducts( url );   // 모든 상품 정보를 가져오는 함수 호출 (주석 처리됨)
        // res.then( data=>{
        //     //console.log( data );
        //     // 상품 데이터중 이미지와 가격 정보를 추출한 JSX를 상태변수에 세팅
        //     //setProductAll( data );
        // } );        
    });

    // 리뷰시간 : 1번 제품 클릭 => 1번 상세보기, 2번 클릭 => 2번 상세보기,...
    // 메모이제이션 함수 캐싱 -> 함수 로드를 1회만 수행해라 -> 사용할대는 캐싱된 함수를 사용    
    // 상품 클릭 핸들러
    const pdtClickHandler = useCallback( async (id)=>{
        // 최종 요청 페이지는 : 'https://fakestoreapi.com/products'+'/'+1
        console.log('useCallback()에 캐싱된 함수 콜'); // 핸들러 호출 로그 출력
        const res = await axios.get( `${url}/${id}` ); // 선택된 상품의 상세 정보를 요청
        console.log('선택한 것은 :', res.data.id);
        const {title, description, price, category, image } = res.data; // 필요한 정보를 객제 구조 분해로 정보 추출
        // 상태변수에 JSX 세팅 -> 자동으로 render() call -> 자동으로 화면 갱신됨
        setProduct(
            <>
                <Avatar
                    alt={title}  // 상품 제목을 alt 속성으로 설정
                    src={image} // 상품 이미지를 src 속성으로 설정
                    sx={{ width: 100, height: 100 }} // 이미지 크기 설정
                    />
                <p>{title}</p>
                <p>{price}</p>
                <p>{category}</p>
                <p>{description}</p>
            </>
        );
    }, [url, pid] ); // url과 pid가 변경될 때만 새로 호출
    
    // 상품 정보 입력 => 상품 DP용 JSX 생성 함수 (마크업으로 표시) // 상품 정보를 입력 받아 JSX를 생성하는 함수
    //const makeProductJSX = (p, idx)=><li key={idx}><img src={ p.image } width='30px'/><b>{ p.price }</b></li>;
    const makeProductJSX = (p, idx )=>{
        // https://mui.com/material-ui/react-chip/#basic-chip
    
        const { id, title, price } = p;  // 상품의 제목과 가격을 구조 분해하여 추출
        return (
            <div style={{ margin:"2px" }} key={idx}>
                <Chip label={ `${title} - ${price} $` } variant="outlined" onClick={()=> pdtClickHandler(id)} />  {/* 클릭 시 상품 ID 전달 */}
                {/* 상품 제목과 가격을 Chip으로 표시하고 클릭 이벤트 추가 */}
            </div>
        );
    };
    
    // 모든 상품 정보를 메모이제이션하여 데이터 캐싱 구현
    // 1. 인수를 받지 않는 뭔가를 계산해서 반환하는 함수 : 1번인자
    // 2. 함수 내부에서 계산시 사용할 재료(인자)을 포함하는 종속석 목록(배열) : 2번인자
    // (*) 화면이 갱신되도, 해당 코드는 작동 X => 캐싱되어 있다
    
    const pdtAllMemo = useMemo( async ()=>{
        console.log( 'useMemo() 1회 호출' ); // 메모이제이션 함수 호출 로그 출력
        const res = await axios.get( url ); // 모든 상품 정보를 요청
        const arr = res.data.map( (p, idx)=>makeProductJSX( p, idx, pdtClickHandler ) ); // 상품 정보를 JSX로 변환
        setProductAll( arr ); // 상태변수에 상품 목록 설정
        return arr; //배열로 변환
    }, [ url ] ); // url이 변경될 때만 새로 호출

    // 메모이제이션된 상품 목록을 콘솔에 출력 (Promise 객체)
    console.log( pdtAllMemo );// 여기서는 Promise 객체(통신을 수행해서 나온결과)로 데이터가 캐싱되어 있다
    //promise 객체 패턴(통신을 수행해서 나온 결과)로 데이터가 캐싱되어 있으니 then으로 써줘야 한다.

    // 제목, 이미지, 가격, 상세보기 버튼 추가 <= .then을 상태 변수를 업데이트 해라



    return (
        <div className="App">
            <p><span style={{ color:'red' }}>기본</span><b>페이지</b></p>
            <div>
                상세 상품 정보
                { product } {/* 선택된 상품의 상세 정보 출력 */}
            </div>
            <div>
                { productAll } {/* 모든 상품 목록 출력 */}
            </div>
            {/* 수평선 */}
            <hr width = "100%" color = "blue" size = "1"/>
        </div>
    );
}