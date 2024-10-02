/**
 * SQL 수행 결과(집계 쿼리)를 받아줄 DTO
 *  수행결과를 1대1로 받아줄 Entity는 존재하지 않음 -> DTO 로 대체처리
 *  만약 DTO 데이터가 입력되지 않는다면, 동일 컬럼명의 인터페이스를 구축(Getter만 구현) 하여 받아준다.
 */
package com.example.demo.dto;

 
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class SalesGroupBy {
	private String category;
	private int cnt;
	private float price;
	private float amount;
	
	@Builder
	public SalesGroupBy(String category, int cnt, float price, float amount) {
		super();
		this.category = category;
		this.cnt = cnt;
		this.price = price;
		this.amount = amount;
	}
}
