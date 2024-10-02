# 프로젝트 생성
    ```
        $npx create-react-app demo
    ```
# 프로젝트 실행
    ```
        #1회 진행
        $ cd demo

        # 실행
        $npm start

        # 종료 (터미널에 포커스가 있는 상황에서)
        ctrl + c

        # 빌드 (빌드 폴더가 만들어지고 정적파일들이 그 하위에 생성된다. => 이 파일들을 백엔드에 추가하면 된다. => 자동화가 필요(빌드된 파일이 자동으로 스프링 부트 resource 하위에 위치하도록 덮어쓸 필요가 있다.  => 설정에서 추가하면 됨))
        $ npm run build
        
    ```
# 프로젝트 중요 구조( $tree/f)
├─node_ㅡmodules  :npm instll 하면 생성, 앱상에 모든 
├─public
│      favicon.ico
│      index.html : REACT가 작동하는 HTML, SPA상 1개의 html
│        ...
│      logo192.png
│      logo512.png
│      manifest.json
│      robots.txt
│
└─src
        App.css
        App.js    :첫글자가 대문자 : 사용자 정의 컴포넌트
        App.test.js  : 사용자 정의 컴포넌트 테스트용
        index.css
        index.js  : React 메인코드
        logo.svg
        reportWebVitals.js
        setupTests.js
└─package.json    :프로젝트를 설명, 사용라이브러리 등록, 명령어(스크립트) (실행, 빌드, 테스트...) 등록






























# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
