package com.ihub.www.dto;

import org.springframework.beans.BeanUtils;

import com.ihub.www.entity.Bank;

public class RegisterBankRequestDto {

	private Long id;
	private String name;
	private int code;
	private String address;
	private Long phoneNumber;
	private String email;
	private String website;
	private String country;
	private String currency; 
	private int userId;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Long getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(Long phoneNumber) {
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
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public static Bank toBankEntity(RegisterBankRequestDto registerBankRequestDto) {

      Bank bank= new Bank();
      BeanUtils.copyProperties(registerBankRequestDto,bank,"userId");
   return bank;
	}
}
