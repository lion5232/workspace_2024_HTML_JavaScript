// 환율 정보 가져오기
// http://api.manana.kr/exchange/rate/KRW/JPY,USD,EUR.json
// 요구사항 -> 통화 기준을 변경(왼쪽) -> 입력창 모두 초기화, 왼쪽 기준 통화에 따라 환율 계산
//            오른쪽은 KRW로 고정
// 리뷰 시 => 실시간 환율 가져와서 적용하거나 새로 고침 기능 추가,
//           CrossDomain 문제 발생할 수 있음 (스프링부트 릴레이)

// 1. 모듈 가져오기
import "./App.css"; // 스타일 시트 가져오기
import {
  useState, // 상태 관리를 위한 훅
  useEffect, // 사이드 이펙트를 처리하기 위한 훅
  useMemo, // 메모이제이션을 위한 훅
  useRef, // 참조를 위한 훅
} from "react"; // React에서 필요한 훅 가져오기
import axios from "axios"; // Axios 라이브러리 가져오기 (HTTP 요청)
import {
  TextField, // 텍스트 입력 필드 컴포넌트
  Select, // 드롭다운 선택 필드 컴포넌트
  MenuItem, // 드롭다운 메뉴 아이템 컴포넌트
} from "@mui/material"; // MUI (Material-UI) 라이브러리의 컴포넌트 가져오기

// 숫자만 입력할 수 있는 함수
function nonNumberFiltering(str) {
  return str.replace(/[^0-9]/g, ""); // 숫자가 아닌 모든 문자를 제거
}

// 2. 함수형 컴포넌트 정의
export default function App4({ name, url, pid }) {
  // 환율 정보 상태 변수 초기화
  const [exchange, setExchange] = useState({
    JPY: 9.08926637837689, // 초기 엔화 환율
    USD: 1317.88, // 초기 달러 환율
    EUR: 1472.82074206527, // 초기 유로 환율
  });

  // 더미 환율 데이터 참조
  const dummyExchangeRef = useRef([
    {
      date: "2024-09-27 14:09:02", // 데이터의 수집 날짜
      name: "KRWKRW=X", // 통화 코드 (원화)
      rate: 1, // 원화의 환율 (자기 자신)
      timestamp: "1727413742", // 데이터의 타임스탬프
    },
    {
      date: "2024-09-27 14:09:02",
      name: "JPYKRW=X", // 통화 코드 (엔화)
      rate: 9.03363156561681, // 엔화의 환율
      timestamp: "1727413742",
    },
    {
      date: "2024-09-27 14:00:14",
      name: "USDKRW=X", // 통화 코드 (달러)
      rate: 1319.66, // 달러의 환율
      timestamp: "1727413214",
    },
    {
      date: "2024-09-27 14:08:24",
      name: "EURKRW=X", // 통화 코드 (유로)
      rate: 1473.9863732827, // 유로의 환율
      timestamp: "1727413704",
    },
  ]);

  // 현재 선택된 통화 코드 상태 변수
  const [curCode, setCurCode] = useState('USD'); // 기본 통화는 USD로 설정

  // 왼쪽 입력창 상태 변수
  const [leftInput, setLeftInput] = useState(""); // 왼쪽 입력값 초기화
  // 오른쪽 입력창 상태 변수
  const [rightInput, setRightInput] = useState(""); // 오른쪽 입력값 초기화

  // 왼쪽 입력창의 값이 변경될 때 호출되는 핸들러
  function onChangeHander1(e) {
    // 숫자 외의 문자 제거 후 상태 업데이트
    setLeftInput(nonNumberFiltering(e.target.value)); // 필터링된 값으로 상태 업데이트
  }

  // 오른쪽 입력창의 값이 변경될 때 호출되는 핸들러
  function onChangeHander2(e) {
    // 숫자 외의 문자 제거 후 상태 업데이트
    setRightInput(nonNumberFiltering(e.target.value)); // 필터링된 값으로 상태 업데이트
  }

  // 왼쪽 입력창의 값이 변경될 때 환율 계산
  useEffect(() => {
    console.log(`leftInput값이 변경되었다 ${leftInput}`); // 변경된 왼쪽 입력값 로그 출력
    // 선택된 통화의 환율을 사용하여 오른쪽(KRW) 값을 계산
    setRightInput(leftInput * exchange[curCode]); // 왼쪽 입력값에 해당 환율 곱하기
  }, [leftInput, curCode]); // leftInput 또는 curCode가 변경될 때 호출

  // 오른쪽 입력창의 값이 변경될 때 환율 계산
  useEffect(() => {
    console.log(`계산된 원화값 ${rightInput}`); // 계산된 오른쪽 입력값 로그 출력
    // KRW 값을 사용하여 왼쪽 통화 값 계산
    setLeftInput(rightInput / exchange[curCode]); // 오른쪽 입력값을 환율로 나누어 왼쪽 입력값 계산
  }, [rightInput, curCode]); // rightInput 또는 curCode가 변경될 때 호출

  // 통화 코드 목록 캐싱
  const exchangeCode = useMemo(() => {
    // 더미 데이터에서 통화 코드 목록 생성
    return dummyExchangeRef.current.map((exchange, idx) => {
      let code = exchange.name.substring(0, 3); // 통화 코드 추출 (첫 3글자)
      return (
        <MenuItem value={code} key={idx}>  {/* 메뉴 아이템 생성 */}
          {code} {/* 표시할 통화 코드 */}
        </MenuItem>
      );
    });
  }, []); // 의존성 배열이 비어 있으므로 최초 렌더링 시 한 번만 실행

  // 통화 변경 핸들러
  function exchangeHandler(e) {
    // 왼쪽 통화코드를 변경할 때 호출된다
    setLeftInput(0); // 왼쪽 입력 초기화
    setRightInput(0); // 오른쪽 입력 초기화
    setCurCode(e.target.value); // 선택한 통화코드를 현재 통화코드로 세팅
  }

  return (
    <div className="App" style={{ margin: "5px" }}>
      <h2>환율 계산기</h2>
      <fieldset>
        <div>
          {/* 왼쪽 통화 선택 */}
          <Select
            style={{ width: "45%" }} // 스타일 설정
            onChange={exchangeHandler} // 통화 변경 핸들러
            value={curCode} // 현재 선택된 통화 코드
          >
            {exchangeCode} {/* 통화 코드 목록 렌더링 */}
          </Select>
          =
          {/* 오른쪽 통화는 KRW로 고정 */}
          <Select
            style={{ width: "45%" }} // 스타일 설정
            value={'KRW'} // 고정된 KRW 선택
            disabled // 비활성화된 선택 필드
          >
            {exchangeCode} {/* 통화 코드 목록 렌더링 (고정된 필드이므로 사용 안 함) */}
          </Select>
        </div>
        <br />
        <div>
          {/* 왼쪽 입력 필드 */}
          <TextField
            value={leftInput} // 왼쪽 입력값
            onChange={onChangeHander1} // 입력 변경 핸들러
            label="exchange" // 레이블
            variant="outlined" // 텍스트 필드 스타일
            placeholder="숫자만 입력하세요" // 플레이스홀더
          />
          =
          {/* 오른쪽 입력 필드 */}
          <TextField
            value={rightInput} // 오른쪽 입력값
            onChange={onChangeHander2} // 입력 변경 핸들러
            label="exchange" // 레이블
            variant="outlined" // 텍스트 필드 스타일
            placeholder="숫자만 입력하세요" // 플레이스홀더
          />
        </div>
      </fieldset>
    </div>
  );
}

/*
동작 원리:
1. 사용자가 왼쪽 입력 필드에 통화 값을 입력하면, onChangeHander1 함수가 호출되어 숫자 외의 문자를 제거하고 상태를 업데이트합니다.
2. useEffect 훅이 트리거되어 입력된 통화 값에 선택된 통화의 환율을 곱하여 오른쪽 입력 필드(KRW)에 해당하는 값을 계산합니다.
3. 사용자가 오른쪽 입력 필드에 값을 입력할 경우 onChangeHander2가 호출되어 같은 방식으로 동작하며, 오른쪽 입력 값을 사용하여 왼쪽 통화 값을 계산합니다.
4. 통화 선택이 변경되면 exchangeHandler가 호출되어 입력 필드를 초기화하고, 선택된 통화 코드를 업데이트합니다.
5. 모든 통화 계산은 useEffect 훅을 통해 자동으로 이루어지며, 결과는 실시간으로 반영됩니다.
*/

/*
동작 원리:
1. **초기 상태 설정**: 컴포넌트가 렌더링될 때, 초기 환율 정보와 입력값 상태를 설정합니다. 기본 통화는 'USD'로 지정되어 있으며, 오른쪽 입력 필드는 KRW로 고정되어 있습니다.

2. **입력값 처리**: 사용자가 왼쪽 입력 필드에 값을 입력하면, `onChangeHander1` 함수가 호출되어 숫자가 아닌 문자를 필터링한 후 상태를 업데이트합니다. 오른쪽 입력 필드의 값은 자동으로 계산되기 위해 `useEffect`가 트리거됩니다.

3. **환율 계산**: 왼쪽 입력값이 변경되면, 해당 통화의 환율을 기반으로 오른쪽 입력값(KRW)을 계산합니다. 이 과정에서 `curCode`에 따라 환율이 결정되며, 최종적으로 오른쪽 입력 필드에 해당 값이 업데이트됩니다.

4. **반대 방향 계산
*/


/*
동작 원리:
1. **초기 설정**: 컴포넌트가 처음 렌더링될 때, 기본 환율 정보와 통화 코드 상태를 설정합니다. 왼쪽 입력 필드는 비어 있으며, 오른쪽 입력 필드는 KRW로 고정됩니다.

2. **사용자 입력**: 사용자가 왼쪽 입력 필드에 값을 입력하면, `onChangeHander1`가 호출되어 숫자가 아닌 문자를 제거합니다. 이때 필터링된 값이 왼쪽 입력 상태에 저장됩니다.

3. **왼쪽 입력값에 따른 환율 계산**: `leftInput` 값이 변경될 때마다 `useEffect`가 호출됩니다. 이 훅은 현재 선택된 통화의 환율을 기반으로 오른쪽 입력 필드의 값을 계산하여 업데이트합니다. 예를 들어, USD에서 KRW로의 변환이 이루어집니다.

4. **오른쪽 입력값 처리**: 만약 사용자가 오른쪽 입력 필드에 값을 입력하면 `onChangeHander2`가 호출되어 숫자 외의 문자가 제거되고, `rightInput` 상태가 업데이트됩니다.

5. **오른쪽 입력값에 따른 환율 계산**: `rightInput` 값이 변경될 때마다 또 다른 `useEffect`가 호출됩니다. 이 훅은 오른쪽 입력값을 기준으로 왼쪽 입력값을 계산하여 업데이트합니다. 즉, KRW에서 선택된 통화로 변환됩니다.

6. **통화 변경 시 상태 초기화**: 사용자가 통화 선택 드롭다운에서 통화를 변경하면 `exchangeHandler`가 호출됩니다. 이 함수는 왼쪽과 오른쪽 입력 필드를 모두 0으로 초기화하고, 새로운 통화 코드로 `curCode`를 업데이트합니다.

7. **환율 데이터 활용**: 이 과정에서, 컴포넌트는 환율 정보를 사용하여 사용자 입력에 따라 실시간으로 계산된 값을 반영합니다. 더미 데이터를 사용하고 있지만, 실제 API에서 환율 정보를 가져올 수도 있습니다.

8. **렌더링**: 상태가 변경되면 React는 자동으로 컴포넌트를 리렌더링하여 사용자에게 최신 값을 보여줍니다. 사용자가 입력할 때마다 계산된 결과가 실시간으로 반영됩니다.

9. **메모이제이션 사용**: `useMemo` 훅을 활용하여 통화 코드 목록을 메모이제이션함으로써, 불필요한 렌더링을 방지하고 성능을 최적화합니다.

10. **결과**: 최종적으로, 이 컴포넌트는 사용자가 선택한 통화에 따라 실시간 환율 변환을 수행하는 인터페이스를 제공합니다.
*/