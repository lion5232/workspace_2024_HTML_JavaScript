/**
 
 *  만약 DTO 데이터가 입력되지 않는다면, 동일 컬럼명의 인터페이스를 구축(Getter만 구현) 하여 받아준다.
 */
package com.example.demo.dto;

 
 
 
public interface SalesGroupByInterface {//todo number 5
	 String getCategory();
	  int getCnt();
	  float getPrice();
	  float getAmount();
	
 
}
