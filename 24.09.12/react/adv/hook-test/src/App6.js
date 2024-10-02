// $ npm i @toolpad/core --save
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";

import App3리펙토링 from './App3리펙토링';
import App4 from './App4';
import App7 from './App7';

// 배열, 현 컴포넌트에서 이동할수있는 모든 페이지 주소, 내용등 등록
const NAVIGATION = [
    // 왼쪽 사이드바 상단파트 헤더 정보
  {
    kind: "header",
    title: "메인 메뉴",
  },
  {
    segment: "dashboard",       // 라우터상 주소
    title: "대시보드",          // 화면에 표시되는 메뉴명
    icon: <DashboardIcon />,    // 아이콘
  },
  {
    segment: "orders",
    title: "장바구니",
    icon: <ShoppingCartIcon />,
  },
  {
    kind: "divider",    // 메뉴상에 섹션 나누기, 구분선
  },
  {
    kind: "header",
    title: "분석",
  },
  {
    segment: "reports",
    title: "보고서",
    icon: <BarChartIcon />,
    children: [             // 하위 메뉴 표현
      {
        segment: "sales",
        title: "판매",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "트레픽-로그",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    kind: "divider",    // 메뉴상에 섹션 나누기, 구분선
  },
  {
    kind: "header",
    title: "유틸리티",
  },
  {
    segment: "integrations",
    title: "제품 목록",
    icon: <LayersIcon />,
  },
  {
    segment: "exchange",
    title: "환율계산기",
    icon: <LayersIcon />,
  },
  {
    segment: "context",
    title: "훅-useContext",
    icon: <LayersIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// 함수형 컴포넌트
// 용도 : 개별 페이지들을 화면에 보이게 하는 기본 껍데기
function DemoPageContent({ pathname }) {
  console.log( '현재 페이지 url', pathname);
  return (
    // Box : 머터리얼UI상 블록단위
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
      {/* 라우팅 처리, URL별로 어떤 컴포넌트가 작동할지 설정 */}
      { pathname === '/integrations' &&
        <App3리펙토링 name="훅" url="https://fakestoreapi.com/products" pid="1"/>
      }
      { pathname === '/dashboard' && <></> }
      { pathname === '/orders' && <></> }
      { pathname === '/reports/sales' && <></> }
      { pathname === '/reports/traffic' && <></> }
      { pathname === '/exchange' && <App4/> }
      { pathname === '/context' && <App7/> }
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

// 대표 함수형 컴포넌트 => return 체크 => JSX
function DashboardLayoutBasic(props) {
  const { window } = props;

  const [pathname, setPathname] = React.useState("/dashboard");

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // 앱과 툴패드(UI)간 브릿지 역활
    <AppProvider
      navigation={NAVIGATION}   // 네비게이션, 고정값으로 사용 샘플, 메뉴구성과 연관을 가짐
      router={router}           // 페이지 이동, next.js 라우터 연동/통합
      theme={demoTheme}         // 밝은, 어둠
      window={demoWindow}       // ?
      // 브랜드 노출, 없으면 기본 툴패드 로고 등장
      branding={{               
        logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: 'MUI',
      }}
      // 인증과 세션 => 로그인/로그아웃 후 처리
      //authentication={}
      //session={}
    >
      <DashboardLayout>
        <DemoPageContent pathname={pathname} /> {/* 상세 페이지 화면 */}
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

DashboardLayoutBasic.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutBasic;