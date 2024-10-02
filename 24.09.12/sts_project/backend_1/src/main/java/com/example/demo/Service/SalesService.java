package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repository.SalesRepository;
import com.example.demo.dto.SalesGroupBy;
import com.example.demo.dto.SalesGroupByInterface;

@Service
public class SalesService {	
	//DI 
	@Autowired
	private SalesRepository salesRepository;
	
	public List<SalesGroupBy> getSalesGroupBy() { 
		List<SalesGroupByInterface>  sales = salesRepository.findSalesGroupByData(); //todo number 3
		//log.info("데이터의 총 개수" + sales.size() );
		// sales에서 데이터를 추출하여 SalesGroupBy 객체에 담아서
		// 객체에 담은후, 값 확인 => toString()
		// List<SalesGroupBy> res에 담아서 size() 출력
		List<SalesGroupBy> res  = new ArrayList<SalesGroupBy>();//todo number 6 쿼리 결과를 DTO로 데이터 전환 처리
		for(SalesGroupByInterface sale : sales) {
			SalesGroupBy data = SalesGroupBy.builder()
					.category(sale.getCategory())
					.cnt(sale.getCnt())
					.price(sale.getPrice())
					.amount(sale.getAmount())
					.build();
			//log.info("데이터 확인" + data.toString());
			res.add(data);
		}
		//log.info("데이터 확인 res" + res.size());		
		return res;
	}
}
