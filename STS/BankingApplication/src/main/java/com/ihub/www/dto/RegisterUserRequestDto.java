package com.ihub.www.dto;

import org.springframework.beans.BeanUtils;

import com.ihub.www.entity.User;

public class RegisterUserRequestDto {

	private Long id;
	private String name;
	private String email;
	private String password;
	private String roles;
	private String gender;
	private Long contact;
	private String street;
	private String city;
	private int pincode;
	private int bankId;
	
	public static User toUserEntity(RegisterUserRequestDto registerUserRequestDto) {
	User user=new User();
	
	BeanUtils.copyProperties(registerUserRequestDto, user, "bankId");
	return user;
	}
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
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRoles() {
		return roles;
	}
	public void setRoles(String roles) {
		this.roles = roles;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Long getContact() {
		return contact;
	}
	public void setContact(Long contact) {
		this.contact = contact;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public int getBankId() {
		return bankId;
	}
	public void setBankId(int bankId) {
		this.bankId = bankId;
	}
         
	 

}
