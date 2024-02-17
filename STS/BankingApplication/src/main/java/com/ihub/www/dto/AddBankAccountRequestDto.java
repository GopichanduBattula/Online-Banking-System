package com.ihub.www.dto;

import org.springframework.beans.BeanUtils;

import com.ihub.www.entity.BankAccount;

public class AddBankAccountRequestDto {
  
	
	private long number;
	
	private String ifscCode;
	
	private int bankId;
	 
	private int userId;

	public long getNumber() {
		return number;
	}

	public void setNumber(long number) {
		this.number = number;
	}

	public String getIfscCode() {
		return ifscCode;
	}

	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}

	public int getBankId() {
		return bankId;
	}

	public void setBankId(int bankId) {
		this.bankId = bankId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public static BankAccount toBankAccountEntity(AddBankAccountRequestDto addBankAccountRequestDto ) {
		
		BankAccount bankAccount=new BankAccount();
		BeanUtils.copyProperties(addBankAccountRequestDto,bankAccount,"bankId","userId");
		return bankAccount;
	}
	
	   
}




