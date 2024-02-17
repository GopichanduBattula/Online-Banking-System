package com.ihub.www.entity;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class Bank {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	private String name;
	
	private String code;
	
	private String address;
	
	private long phoneNumber;
	
	private String email;

	private String website;
	
	private String country;
	
	private String currency;

	private User user;

	private Bank bank;

	private String valueOf;

	private BigDecimal zero;
	
	

	

	public String getValueOf() {
		return valueOf;
	}

	public void setValueOf(String valueOf) {
		this.valueOf = valueOf;
	}

	public BigDecimal getZero() {
		return zero;
	}

	public void setZero(BigDecimal zero) {
		this.zero = zero;
	}

	public User getUser() {
		return user;
	}

	public Bank getBank() {
		return bank;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public void setUser(User user) {
		this.user=user;
		
	}

	public void setBank(Bank bank) {
		this.bank=bank;
	}

	public void setCreationDate(String valueOf) {
		this.valueOf=valueOf;
		
	}

	public void setBalance(BigDecimal zero) {
		this.zero=zero;
		
	}
//
//	public void add(Bank bank2) {
//		
//		
//	}
//
//	public void setStatus(String status) {
//		
//		
//	}
	

}
