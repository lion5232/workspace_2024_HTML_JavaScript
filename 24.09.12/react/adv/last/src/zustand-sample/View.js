/**
 * 전역적 상태변수로 관리되는 값중 count값을 출력
 *  - 2. 전역적 상태 변수 사용
 */
import useStore from "./store";

export default function View () {
    const { count } = useStore(); // 커스텀 훅 (틱한)  스타일
    return (
        <>
            { count }
        </>
    );
}