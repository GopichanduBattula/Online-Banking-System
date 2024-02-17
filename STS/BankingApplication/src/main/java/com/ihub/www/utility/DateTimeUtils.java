package com.ihub.www.utility;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

public class DateTimeUtils {
	
	private static LocalDateTime dateTime;


	public static String getLocalDateTimeFromEpochTime(String epochTimeString) {
		
		Long epochTimeMillis=Long.parseLong(epochTimeString);
		Instant instant=Instant.ofEpochMilli(epochTimeMillis);
		ZoneId zoneId=ZoneId.systemDefault();
		LocalDateTime localDateTime=LocalDateTime.ofInstant(instant,zoneId);
		
		//desired date format
		String DateFormatPattern="YY-MM-DD HH-MM-SS";
		
		//local date time to date time format
		String FormatedDateTime=formatLocalDateTime(localDateTime,DateFormatPattern);
		
		System.out.println(FormatedDateTime);
		return(FormatedDateTime);
	}

	
	private static String formatLocalDateTime(LocalDateTime localDateTime, String dateFormatPattern) {
		// TODO Auto-generated method stub
		
		
		DateTimeFormatter formatter= DateTimeFormatter.ofPattern(dateFormatPattern);
		
		return dateTime.format(formatter);
		
	
	}
	
}











-