package com.ihub.www.dto;

import java.util.ArrayList;
import java.util.List;

import com.ihub.www.entity.Bank;


public class BankDetailsResponseDto extends CommonApiResponse{

	private List<Bank> banks = new ArrayList<>();
	
	public void setBanks(List<Bank> banks) {
		this.banks=banks;
	}
		
}
