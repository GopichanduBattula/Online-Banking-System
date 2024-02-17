package com.ihub.www.dto;

public class BankAccountStatusUpdateRequestDto {

	 
	 private int accountId;
	 
	 private String status;
	 
	 private String bankId;

	public String getBankId() {
		return bankId;
	}

	public void setBankId(String bankId) {
		this.bankId = bankId;
	}

	public int getAccountId() {
		return accountId;
	}

	public void setAccountId(int accountId) {
		this.accountId = accountId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	
}
