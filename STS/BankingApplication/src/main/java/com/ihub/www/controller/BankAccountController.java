package com.ihub.www.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ihub.www.dto.AddBankAccountRequestDto;
import com.ihub.www.dto.BankAccountResponseDto;
import com.ihub.www.dto.BankAccountStatusUpdateRequestDto;
import com.ihub.www.dto.CommonApiResponse;
import com.ihub.www.resource.BankAccountResource;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("api/bankAccount/")
public class BankAccountController {
 
	@Autowired
	private BankAccountResource bankAccountResource;
	
	@PostMapping("add")
	@Operation (summary="API to add BankAccount")
	public ResponseEntity<CommonApiResponse> addBankAccount (@RequestBody AddBankAccountRequestDto request){
		
		return this.bankAccountResource.addBankAccount(request);
	}
	  
	@GetMapping("fetch/all")
	 public ResponseEntity<BankAccountResponseDto> getAllBankAccounts (@RequestBody BankAccountResponseDto response ){
		
		return this.bankAccountResource.fetchAllBankAccounts();
	}
	 
	@GetMapping("fetch/BankIdWise")
	
	public ResponseEntity<BankAccountResponseDto> getBankAccounts (@RequestParam("BankId") int bankId ){
		
		return this.bankAccountResource.fetchBankAccountByBank(bankId);
	}
	@GetMapping ("fetch/Id")
	public ResponseEntity<BankAccountResponseDto> getBankAccountsById (@RequestParam("AccountId") int bankId ){
		return this.bankAccountResource.fetchBankAccountById(bankId);
	}
	
	@GetMapping("fetch/User")
	public ResponseEntity<BankAccountResponseDto> getBankAccountsByUser (@RequestParam("UserId") int userId ){
		
		return this.bankAccountResource.fetchBankAccountByUserId(userId);
	}
	
	@GetMapping ("search")
	public ResponseEntity<BankAccountResponseDto> searchBankAccount (@RequestParam("BankId") int bankId,@RequestParam("AccountNumber") String accountNumber){
		return this.bankAccountResource.searchBankAccounts(accountNumber,bankId);	
	}
	
	@PostMapping ("update/status")
	public ResponseEntity<CommonApiResponse> updateBankAccountStatus(@RequestParam("request") BankAccountStatusUpdateRequestDto request){
		return this.bankAccountResource.updateBankAccountStatus(request);
	} 
	
	
	     
}
