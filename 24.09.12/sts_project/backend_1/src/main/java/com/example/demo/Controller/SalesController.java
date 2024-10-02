package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.SalesService;
import com.example.demo.dto.SalesGroupBy;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;


//http://localhost:8080/swagger-ui/index.html
@CrossOrigin //향후 react나 vue에서 접근 시 crossdomain문제 해결하기 위해 임시처리 ,서버를 2개이상 쓸 때 필요
@RequestMapping("/api")
@RestController
public class SalesController {
	//1. 서비스 DI
	@Autowired
	private SalesService salesService;
	//2. Sales 관련  집계 데이터를 응답하는 API를 제공하는 라우터, 메소드 구성 
	// ~api/sales , get 방식, swagger를 이용한 테스트
	@GetMapping("/sales")
	@Tag(name="세일 데이터 집계", description = "세일 데이터 집계")
	 @Operation(summary ="카테고리 개수에 맞춰 집계한 평균 판매가, 평균개수 조회", description = "카테고리 개수에 맞춰 집계한평균 판매가, 평균 개수 조회" )
	public List<SalesGroupBy> sales() {
		//todo number 7 쿼리 결과를 json 형태로 응답을 하고 있습니다.
		return salesService.getSalesGroupBy();//todo number 2s
 	}
	
}
