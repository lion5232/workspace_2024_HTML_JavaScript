CREATE TABLE sales (
      order_id NUMBER(10,0) NOT NULL primary key,       
      indate TIMESTAMP,
      cate VARCHAR(50),
      itemcode NUMBER(10,0),
      price NUMBER(10,0),
      amount NUMBER(10,0)
);


select * from sales;

-- sales 테이블에서
-- cate을 기준으로 집계 => group by
-- 결과는 category, 개수(별칭 cnt), 평균가격(price), 평균건수(amount) 출력
-- 평균가격 기준 내림차순 정렬
-- SQL 작성하시오, 소수점 2자리 제한 round(값, 2)
-- @Query() 사용 처리 -> 회사에 DB가 변경되지 않는다는 전제 조건


select 
    cate as category ,count(cate) cnt, round(avg(price),2) price, round(avg(amount),2)amount 
from Sales -- 엔티티가 Sales로 만들어 질 예정이므로 대문자로 테이블명 조정
group by cate 
order by category desc; 
