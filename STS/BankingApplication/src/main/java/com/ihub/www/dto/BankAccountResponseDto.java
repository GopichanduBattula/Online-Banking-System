package com.ihub.www.dto;

import java.util.List;

import com.ihub.www.entity.BankAccount;


public class BankAccountResponseDto extends CommonApiResponse
{
   private List<BankAccount> accounts;
   private String banks;
   

	public List<BankAccount> getAccounts() {
	return accounts;
}

public void setAccounts(List<BankAccount> accounts) {
	this.accounts = accounts;
}

	public String getBanks() {
		return banks;
	}

	public void setBanks(String banks) {
		this.banks = banks;
	}
	
}
