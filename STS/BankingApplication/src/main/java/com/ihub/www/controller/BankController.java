package com.ihub.www.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ihub.www.dto.BankDetailsResponseDto;
import com.ihub.www.dto.CommonApiResponse;
import com.ihub.www.dto.RegisterBankRequestDto;
import com.ihub.www.resource.BankResource;

import io.swagger.v3.oas.annotations.Operation;
 
@RestController
@RequestMapping("api/bank/")
public class BankController {

	@Autowired
	private BankResource bankResource;
	@PostMapping ("register")
	@Operation (summary="API to register Bank")
	public ResponseEntity <CommonApiResponse> registerBank (@RequestBody RegisterBankRequestDto register){
		return this.bankResource.registerBank(register);
	}
	
	@GetMapping ("fetch/allBanks")
	public ResponseEntity<BankDetailsResponseDto> fetchAllBanks(){
		return this.bankResource.fetchAllBanks();
	}
	
	@GetMapping ("fetch/Id")
	public ResponseEntity<BankDetailsResponseDto> fetchBankById(@RequestParam ("BankId") int bankId){
		return this.bankResource.fetchBankById(bankId);
	}
	
	@GetMapping ("fetch/user")
	public ResponseEntity<BankDetailsResponseDto> fetchBankByUserId(@RequestParam("UserId") int userId){
		return this.bankResource.fetchBankByUserId(userId);
	}
	
	
}
