CREATE TABLE sales (
      order_id NUMBER(10,0) NOT NULL primary key,       
      indate TIMESTAMP,
      cate VARCHAR(50),
      itemcode NUMBER(10,0),
      price NUMBER(10,0),
      amount NUMBER(10,0)
);


select * from sales;

-- sales ���̺���
-- cate�� �������� ���� => group by
-- ����� category, ����(��Ī cnt), ��հ���(price), ��հǼ�(amount) ���
-- ��հ��� ���� �������� ����
-- SQL �ۼ��Ͻÿ�, �Ҽ��� 2�ڸ� ���� round(��, 2)
-- @Query() ��� ó�� -> ȸ�翡 DB�� ������� �ʴ´ٴ� ���� ����


select 
    cate as category ,count(cate) cnt, round(avg(price),2) price, round(avg(amount),2)amount 
from Sales -- ��ƼƼ�� Sales�� ����� �� �����̹Ƿ� �빮�ڷ� ���̺�� ����
group by cate 
order by category desc; 
