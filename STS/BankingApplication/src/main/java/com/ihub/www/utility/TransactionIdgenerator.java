package com.ihub.www.utility;

import java.util.UUID;

public class TransactionIdgenerator {
	
	public static String Idgenerator() {
		UUID u=UUID.randomUUID();
		String UUIDhex=u.toString().replace("-",""); //removes hyphens
		String UUID16digits=UUIDhex.substring(0,16); //16 digits
		
		return UUID16digits;
	}
}
	