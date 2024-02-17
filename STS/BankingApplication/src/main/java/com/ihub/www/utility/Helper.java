package com.ihub.www.utility;

public class Helper {
	public static  String getAlfhaNumericTransactionId() {
		String a= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"0123456789"+"abcdefghijklmnopqrstuvwxyz";
		StringBuilder sb= new StringBuilder(16);
		for(int i=0; i<16; i++) {
					
			int index=(int)(a.length()*Math.random());
			sb.append(a.charAt(index));
			
			}
		return sb.toString();
	}  

}
 


