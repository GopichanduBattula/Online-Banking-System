package com.ihub.www.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ihub.www.entity.Bank;

@Repository
public interface BankDao extends JpaRepository<Bank, Integer> {

	List<Bank> findById(long bankId);
	Bank findAll(int bankId);
	
	
}
