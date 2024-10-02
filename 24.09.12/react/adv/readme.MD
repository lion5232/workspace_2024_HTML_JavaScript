# 리액트 개념, 개발환경 구축

# basic
    - 구동 원리
    - 컴포넌트 특징
        - props
        - state
        - 이벤트
        - 컴포넌트 종류
            - 클래스형
            - 함수형
        - 컴포넌트 조합
# ADV(advance) 확장
    - DEMO
        - 컴포넌트 심화 (클래스 형)
            - 라이브 사이클 함수
            - 체크박스, INPUT, Select 등 Form 요소들을 직접 구성
    - Hook-test
        - 함수형 컴포넌트
        - 어플리케이션 제작, 훅 연습
            - 기타 : useEffect, use State, useRef 연습 중요!
            - useContext 테스트
            - 레이아웃 저굥 (material-ui 기반 대시보드)
                - 대시보드  구조 이해, 라우팅(url 적용)
                - 네트워크 + material-ui + useEffect + useState, useRef => 게시판, 상세보기 
                
                - 환율 계산기 ->(네트워크?) 더미데이터를 활용해서 이벤트, 상태변수, UI: material-ui 사용 
            
    - last
        - 리액트 개발 도구 설치 (크럼 브라우저) 익스텐션
            - 리액트 가동
            - 개발자 모드 > Console > https://reactjs.org/link/react-devtools
                - 링크 진입 
                - 크롬용
                    - 진입후 설치
                    - https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
                - 브라우저 재가동 후 사용
                    - 개발자 도구
                        - 컴포넌트
                            - 개별 컴포넌트의 구성 및 트리구조 확인
                        - 프로파일러
                            - 개별 씬에 때한 상세분석
                            - 랜더링이 오래 걸리는 부분 체크 -> 개선등 할 수 있다.
                            - 최적화에 대한 도구

        - (*)기타훅
            - useReducer (리덕스 스타일)            
        - 전역 상태 관리 
            -> 여러개의 페이지, 여러개의 컴포넌트를 넘나 들면서 공통의 데이터 수정/사용 가능
            - 1세대: redux 
            - 2세대: mobX, ..
            - 3세대: Recoil, ```Zustand```, Jotai,...
                - ``` $ npm install zustand --save ```
                - ("zustand": "^5.0.0-rc.2")
        - (*)커스텀훅
            - 사용자 정의 훅
        - 스타일 적용
            - (*)css 직접 적용
                - <style> ... <style/>
                - <태그명 style={{css...}}>
            - (*)css Modules 적용
            - 써드 파트 라이브러리
                -(*) Styled-components (CSS-in-JS 라이브러리)            
                    - 특정 스타일을 가진 컴포넌트를 정의해서 JSX에서 바로 사용가능함
                    - ```$ npm i styled-components --save```
                - Emotion (material-ui 사용시 설치했음)
                    -```$npm i @emotion/react @emotion/styled --save```
                - Tailwind CSS
                    - 다른 스타일을 모두 무시한다.
                    - 단독으로 사용 추천
                    - 반응형 디자인, 커스터마이징 방식 유리
                    - ```$npm i tailwindcss postcss autoprefixer --save ```
                - sass, Scss | LESS
                    - css 전처리기를 이용하여 변수를 정의
                    - 정의된 변수를 이용해서 Css를 구성
                    - ```$ npm i sass --save ```
                    - ```$ npx tailwindcss init -p ```
                    -tailwind.config.js 파일 자동 생성
                    - 수정
                        ```
                            content: [
                                './src/**/*.{js,ts,jsx,tsx}' // 경로 맞게 수정
                            ],
                            ...
                        ```
    - 기타
        - 빌드
            - react -> 빌드 -> 배포버전준비 -> 스프링부트에 배포
        - ESLint, Prettier
            - 코딩 스타일, 유효성 검사(코드에 관련된) => 팀별 통일
        - Next.js
            - SSR, ...
        - AWS 배포, github, ci/cd