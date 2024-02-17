package com.ihub.www.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ihub.www.dto.CommonApiResponse;
import com.ihub.www.dto.RegisterUserRequestDto;
import com.ihub.www.dto.UserListResponseDto;
import com.ihub.www.dto.UserLoginRequest;
import com.ihub.www.dto.UserLoginResponse;
import com.ihub.www.dto.UserStatusUpdateRequestDto;
import com.ihub.www.resource.UserResource;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("api/user/")
public class UserController {

	@Autowired
	  
	private UserResource userResource;
	
	@PostMapping ("register/User")
	@Operation (summary="API to register user")
	public ResponseEntity <CommonApiResponse> registerUser (@RequestBody RegisterUserRequestDto register){
		return this.userResource.registerUser(register);
	}

	@PostMapping ("admin/register")
	public ResponseEntity <CommonApiResponse> registerAdmin (@RequestBody RegisterUserRequestDto register){
		return this.userResource.registerUser(register);
	}
	
	@PostMapping("login")

	public ResponseEntity<UserLoginResponse> login(@RequestBody UserLoginRequest loginRequest) {
		return this.userResource.login(loginRequest); 
	}
	
	@GetMapping("fetch/AllBankUsers")
	
	public ResponseEntity<UserListResponseDto> fetchAllBankUsers(@RequestParam("Role") String role){
		
		return this.userResource.getUsersByRole(role);
	}
	
	@GetMapping("fetch/AllBankManagers")
	@Operation(summary="API to get bank managers who is not assigned to any other bank")
	
	public ResponseEntity<UserListResponseDto> fetchAllBankManagers(){
		return this.userResource.fetchBankManagers();
	}
	
	@PostMapping("Update/user Status")
	
	public ResponseEntity<CommonApiResponse> updateUserStatus(UserStatusUpdateRequestDto request){
		return this.userResource.updateUserStatus(request);
	}
	
	@GetMapping("fetch/By BankId")
	
	public ResponseEntity<UserListResponseDto> fetchBankCustomerByBankId(@RequestParam ("BankId")int bankId){
		return this.userResource.fetchBankCustomerByBankId(bankId);
	}
	
	@GetMapping("search/Id's,customers")
	
	public ResponseEntity<UserListResponseDto> searchBankCustomerId(@RequestParam("BankId") int bankId,@RequestParam("CustomerName") String customerName){
		return this.userResource.searchBankCustomer(bankId,customerName);
	}
	
	@GetMapping ("customer/search")
	
	public ResponseEntity<UserListResponseDto> searchBankCustomer(@RequestParam("CustomerName") String customerName){
		return this.userResource.searchBankCustomers(customerName);
	}
	
}
