package com.ihub.www.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ihub.www.entity.BankAccount;

@Repository
public interface BankAccountDao extends JpaRepository<BankAccount, Integer> {
	
	BankAccount findByUser_IdAndStatus(long userId, String status);
	List<BankAccount> findByBank_Id(int bankId);
	List<BankAccount> findByBank_IdAndStatus(int bankId, String status);
	List<BankAccount> findByStatus(String status);
	BankAccount findByNumberAndIfscCodeAndBank_IdAndStatus(String accNumber, String ifscCode, int bankId, String Status);
	BankAccount findByNumberAndIfscCodeAndStatus(String accNumber, String ifscCode, String Status);
	List<BankAccount> findByNumberContainingIgnoreCaseAndBank_Id(String accountNumber, int bankId);
	BankAccount findByUser_Id(int userId);
	List<BankAccount> findByNumberContainingIgnoreCase(String accountNumber);
	
}
