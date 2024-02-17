package com.ihub.www.utility;

public class Constants {

	public enum UserRole{
		ROLE_CUSTOMER("customer"),
		ROLE_ADMIN("admin"),
		ROLE_BANK("bank");
		private String role;
		private UserRole(String role) {
			this.role=role;
		}
		public String value() {
			return this.role;
		}
	}
	
	public enum UserStatus {
		ACTIVATED("active"),
		DEACTIVATED("deactivate");
		private String status;
		private UserStatus(String status) {
			this.status=status;
		}
		public String value() {
			return this.status;
		}
		
	}
	
	public enum IsAccountLinked{
		YES("yes"),
		NO("no");
		private String linked;
		private IsAccountLinked(String linked) {
			this.linked=linked;	
		}
		public String value() {
			return this.linked;
		}
	}
	
	public enum BankAccountStatus{
		OPEN("open"),
		DELETED("deleted"),
		LOCK("lock");
		private String accountstatus;
		private BankAccountStatus(String accountstatus) {
			this.accountstatus=accountstatus;
			
		}
		public String value() {
			return this.accountstatus;
		}
	}
	
	
	public enum BankAccountType{
		SAVINGS("savings"),
		CURRENT("current");
		private String accounttype;
		private BankAccountType(String accounttype) {
			this.accounttype=accounttype;
		}
		public String value() {
			return this.accounttype;
		}
	}
	
	public enum TransactionType{
		WITH_DRAW("with_draw"),
		DEPOSIT("deposit"),
		BALANCE_FETCH("balance_fetch"),
		ACCOUNT_TRANSFER("account_trasfer");
		private String transactiontype;
		private TransactionType(String transactiontype) {
			this.transactiontype=transactiontype;
		}
		public String value() {
			return this.transactiontype;
		}
	}
	
	

	public enum TransactionNarration {
		BANK_WITHDRAW("bank_withdraw"),
		BANK_DEPOSIT("bank_deposit");
		private String narration;
		private  TransactionNarration (String narration) {
			this.narration=narration;
		}
		public String value() {
			return this.narration;
				
	}
  }
}
