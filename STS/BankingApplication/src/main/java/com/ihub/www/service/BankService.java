package com.ihub.www.service;

	

	import java.util.List;

import com.ihub.www.entity.Bank;

	public interface BankService {
		
		Bank getBankById(int bankId);
		Bank addBank(Bank bank);
		Bank updateBank(Bank bank);
//		Bank registerBank(Bank bank);
		List<Bank> getAllBank();
//		List<Bank> getByBank(int bankId);
//		List<Bank> getByNumberContainingIgnoreCaseAndBank(String accountNumber, int bankId);
//	

	}


