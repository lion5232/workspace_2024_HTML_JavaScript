import "./App.css";
import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useContext,
} from "react";
import axios from "axios";
import {
  Chip,
  Avatar,
  Table, // 테이블 태그
  TableHead, // 테이블 헤더 => 컬럼명
  TableBody, // 테이블 바디 => 데이터
  TableRow, // 데이터 한줄
  TableCell, // 데이터 한줄당 컬럼별 데이터
  TableContainer, // ?, 테이블을 포함할수 있는 컨테이너, 가장 바깥쪽에 사용
  Paper, // ?, 페이저는 컨테이저에 적용한 컴포넌트 유형값 사용
  Button, // 버튼, 닫기용
  Dialog, // 팝업으로 뜨는 다이얼로그 전체를 대변
  DialogActions, // 팝업에서 이벤트 등록, 구성
  DialogContent, // 팝업에서 내용 => 상품 상세 정보
  DialogContentText, // 상세 내용이 텍스트만 존재한다면
  DialogTitle, // 팝업의 제목

  Card,         // 특정 장면을 위한 큰 단위  
  CardActions,  // 카드상에 이벤트 
  CardContent,  // 카드상에 내용
  CardMedia,    // 카드상에 멀티미디어(사진, 음악, 동영상,...) 삽입
  Typography,    // 텍스트 처리
  filledInputClasses
} from "@mui/material";


async function getAllProducts(url) {
  const res = await axios.get(url);
  return res.data.map((product, idx) => {
    const { image, price } = product;
    return (
      <li key={idx}>
        <img src={image} width="30px" />
        <b>{price}</b>
      </li>
    );
  });
}

const makeProductJSX = (p, idx, handleClick) => {
  const { title, price } = p;
  return (
    <div style={{ margin: "2px" }} key={idx}>
      <Chip
        label={`${title} - ${price} $`}
        variant="outlined"
        onClick={handleClick}
      />
    </div>
  );
};

export default function App3({ name, url, pid }) {
  // props를 객체구조분해 { name,... }를 바로 적용
  const productID = useRef(parseInt(pid)); // 현재 클릭한 제품의 고유 ID
  const [productAll, setProductAll] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {});

  const pdtClickHandler = useCallback(async () => {
    const res = await axios.get(`${url}/${productID.current}`);
    const { title, description, price, category, image } = res.data;    
    setProduct(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 200 ,objectFit:'fill'}}
                image={image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {title} / {price} $ / {category}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                { description }
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    //   <>
    //     <Avatar alt={title} src={image} sx={{ width: 100, height: 100 }} />
    //     <p>{title}</p>
    //     <p>{price}</p>
    //     <p>{category}</p>
    //     <p>{description}</p>
    //   </>
    );
  }, [url, productID.current]);

  // 제품목록 1개를 클릭하면 호출된다
  function detailProduct(pdt_id) {
    // pid: 제품의 고유 id값, 클릭이벤트가 발생한 셀에 등록된 제품의 고유 ID값
    console.log(pdt_id);
    productID.current = pdt_id; // 현재 클릭한 제품 번호 세팅
    pdtClickHandler(); // 상세 정보 세팅 => 상태변수세팅 => 자동 화면갱신
    handleClickOpen(); // 팝업 오픈
  }

  const pdtAllMemo = useMemo(async () => {
    const res = await axios.get(url);
    const arr = res.data.map((product, idx) => {
      //makeProductJSX(p, idx, pdtClickHandler)
      // 1. 상품 정보별로 게시판에 표시할 정보 추출
      const { id, title, price, description } = product;
      // 2. 자체적인 필터링을 통해 가격이 150달러 이상(>=)인 제품만 포함시키겠다
      if (price >= 150) {
        return (
          <TableRow
            key={idx}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            onClick={() => detailProduct(id)}
          >
            <TableCell align="right">{id}</TableCell>
            <TableCell align="right">
              {title.substring(0, 25) + " .."}
            </TableCell>
            <TableCell align="right">{price}</TableCell>
            <TableCell align="right">
              {description.substring(0, 25 * 2) + " .."}
            </TableCell>
          </TableRow>
        );
      }
      return null; // JSX값이 null이면 화면 처리 않함 => 조건부 랜더링
    });
    setProductAll(arr);
    return arr;
  }, [url]);

  // 다이얼로그 팝업을 보이는가? 않보이게하는가? => 상태변수
  const [open, setOpen] = useState(false);
  // 팝업을 보이게 처리하는 이벤트 핸들러 함수
  const handleClickOpen = () => {
    setOpen(true);
  };
  // 팝업을 않 보이게 처리하는 이벤트 핸들러 함수
  const handleClose = () => {
    setOpen(false);
    setProduct(null);
  };

  return (
    <div className="App">
      <p>
        <span style={{ color: "red" }}>기본</span>
        <b>페이지</b>
      </p>
      {/* 상품 정보를 게시판 형태로 노출, 테이블, 헤더(컬럼배치), 바디(데이터는 비어있음), 페이징? */}
      <center>
        <TableContainer component={Paper}>
          {/* sx:스타일시트 인라인 직접 적용 css 속성 */}
          <Table sx={{ maxWidth: "80%" }} aria-label="상품 목록">
            <TableHead>
              <TableRow>
                {/* 컬럼 4개 */}
                <TableCell>No</TableCell>
                <TableCell align="right">제품명</TableCell>
                <TableCell align="right">가격($)</TableCell>
                <TableCell align="right">제품설명</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{productAll}</TableBody>
          </Table>
        </TableContainer>
      </center>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"제품 상세 정보"}
        </DialogTitle>
        <DialogContent>
          { product }
        </DialogContent>
        <DialogActions>          
          <Button onClick={handleClose} autoFocus>
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}