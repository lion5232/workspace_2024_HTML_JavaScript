/**
 *  커스텀 훅 사용 
 * (라이브러리 (예시 같은거  모듈 갔다 쓰는거 정규식 갔다가 쓰는거 처럼))
 */
import useWindowInfo from "./useWindowInfo";
import myStyle from "../css";

const CusHook = () => {
    const {width, height } = useWindowInfo();
    return (
        <>
            <div style={myStyle.styleMargin}>
                <h3> CusHook</h3>
                <p> 윈도우 크기 조정</p>
                <p> {width}px / {height}px </p> 
                {/* 136/ 864  (전체화면시) */}
            </div>
        </>
    ); 
}

export default CusHook;