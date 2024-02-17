package com.ihub.www.entity;

import java.math.BigDecimal;
import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class BankAccount {
	 @Id
	 @GeneratedValue(strategy=GenerationType.IDENTITY)
	 private long id;
	
	 private String number;
	 
	 private String ifscCode;
	
	 private String type;
	
	 private BigDecimal balance;
	 
	 private Date creationDate;
	
	 private String Status;

	private User user;

	private Bank bank;

	private BigDecimal zero;

	private String valueOf;
	
	private String accountNumber;
	

	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getIfscCode() {
		return ifscCode;
	}

	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public BigDecimal getBalance() {
		return balance;
	}

	public void setBalance(BigDecimal balance) {
		this.balance = balance;
	}

	public Date getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	 public void setUser(User user) {
		this.user=user;
	}

	public void setBank(Bank bank) {
		this.bank=bank;
		
	}

	public void setbalance(BigDecimal zero) {
		this.zero=zero;
		
	}

	public void setCreationDate(String valueOf) {
		this.valueOf=valueOf;
		
	}

	public User getUser() {
		return user;
	}

	public Bank getBank() {
		return bank;
	}
	 
	 
	 
	 
	
	

}
