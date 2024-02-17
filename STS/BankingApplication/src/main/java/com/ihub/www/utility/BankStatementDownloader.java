package com.ihub.www.utility;

import java.awt.Color;
import java.util.List;

import com.ihub.www.entity.BankAccountTransaction;
import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

import jakarta.servlet.http.HttpServletResponse;

public class BankStatementDownloader {
	
//	BankAccount bankAccount= new BankAccount() ;
	private List<BankAccountTransaction> transactions;
	private String startDate;
	private String endDate;
	public BankStatementDownloader(List<BankAccountTransaction> transactions,String startDate,String endDate) {
		
		this.transactions=transactions;
		this.startDate=startDate;
		this.endDate=endDate;
		
	   }
	private void writeTableHeader(PdfPTable table) {
		PdfPCell cell=new PdfPCell();
		cell.setBackgroundColor(new Color(12,23,34));
		cell.setPadding(5);
		Font font=FontFactory.getFont(FontFactory.HELVETICA);
		font.setColor(new Color(23,45,34));
		cell.setPhrase(new Phrase("Transaction Id",font));
		table.addCell(cell);
		cell.setPhrase(new Phrase("Transaction Type",font));
		table.addCell(cell);
		cell.setPhrase(new Phrase("Amount",font));
		table.addCell(cell);
		cell.setPhrase(new Phrase("Narration",font));
		table.addCell(cell);
		cell.setPhrase(new Phrase("Beneficiary Account",font));
		table.addCell(cell);
		cell.setPhrase(new Phrase("Transaction Time",font));
		table.addCell(cell);
		}
	private void writeTableData(PdfPTable table) {
		for (BankAccountTransaction transaction:transactions) {
			
			table.addCell(transaction.getTransactionId());
			table.addCell(transaction.getType());
			table.addCell(String.valueOf(transaction.getAmount()));
			//Beneficiary or Destination both are same
			table.addCell(transaction.getDestinationBankAccount()!=null ? transaction.getDestinationBankAccount().getNumber() : "--");
			table.addCell(transaction.getNarration());
			table.addCell(DateTimeUtils.getLocalDateTimeFromEpochTime(transaction.getTransactionTime()));
			
			
		}
	}
	
	public void export (HttpServletResponse response) throws DocumentException, java.io.IOException{
		Document document=new Document(PageSize.A4);
		PdfWriter.getInstance(document,response.getOutputStream());
		document.open();
		
		// Customer Bank Statement
		
		Font headerFont=FontFactory.getFont(FontFactory.HELVETICA_BOLD);
		headerFont.setSize(25);
		headerFont.setColor(new Color(123,55,135));
		Paragraph pHeader= new Paragraph("Customer Bank Statement\n",headerFont);
		pHeader.setAlignment(Paragraph.ALIGN_CENTER);
		document.add(pHeader);
		
		
		//Bank Details
		
		Font p1Font=FontFactory.getFont(FontFactory.HELVETICA_BOLD);
		p1Font.setSize(25);
		p1Font.setColor(new Color(123,55,135));
		Paragraph p1Header= new Paragraph("Bank Details\n",p1Font);
		p1Header.setAlignment(Paragraph.ALIGN_CENTER);
		document.add(p1Header);
		
		//Bank Transactions
		
		Font p2Font=FontFactory.getFont(FontFactory.HELVETICA_BOLD);
		p2Font.setSize(25);
		p2Font.setColor(new Color(123,55,135));
		Paragraph p2Header= new Paragraph("Bank Transactions\n",p2Font);
		p2Header.setAlignment(Paragraph.ALIGN_CENTER);
		document.add(p2Header);
		
		//Bank Statement
		
		Font p3Font=FontFactory.getFont(FontFactory.HELVETICA_BOLD);
		p3Font.setSize(25);
		p3Font.setColor(new Color(123,55,135));
		Paragraph p3Header= new Paragraph("Bank Statement from"+startDate+"to"+endDate+"\n",p3Font);
		p3Header.setAlignment(Paragraph.ALIGN_CENTER);
		document.add(p3Header);
		
		//Bank Name
		
		Font p4Font=FontFactory.getFont(FontFactory.HELVETICA_BOLD);
		p4Font.setSize(25);
		p4Font.setColor(new Color(123,55,135));
		Paragraph p4Header= new Paragraph("Bank Name :"+transactions.get(0).getBank().getName(),p4Font);
		p4Header.setAlignment(Paragraph.ALIGN_CENTER);
		document.add(p4Header);
		
		
       //Account Number
		

//		Font p5Font=FontFactory.getFont(FontFactory.HELVETICA_BOLD);
//		p5Font.setSize(25);
//		p5Font.setColor(new Color(123,55,135));
        pHeader.add("Account No: "+transactions.get(0).getBankAccount().getAccountNumber());
        pHeader.setAlignment(Paragraph.ALIGN_CENTER);
        document.add(pHeader);
   
    	// BankCode

//		Font p6Font=FontFactory.getFont(FontFactory.HELVETICA_BOLD);
//		p6Font.setSize(25);
//		p6Font.setColor(new Color(123,55,135));
        pHeader.add("Bank Code: "+transactions.get(0).getBank().getCode());
        pHeader.setAlignment(Paragraph.ALIGN_CENTER);
        document.add(pHeader);
        
        // IFSC code
//        Font p7Font=FontFactory.getFont(FontFactory.HELVETICA_BOLD);
//		p7Font.setSize(25);
//		p7Font.setColor(new Color(123,55,135));
        pHeader.add("IFSC Code : "+transactions.get(0).getBankAccount().getIfscCode());
        pHeader.setAlignment(Paragraph.ALIGN_CENTER);
        document.add(pHeader);
        
        //bankEmail
//        Font p8Font=FontFactory.getFont(FontFactory.HELVETICA_BOLD);
//		p8Font.setSize(25);
//		p8Font.setColor(new Color(123,55,135));
        pHeader.add("Bank Email ID : "+transactions.get(0).getBank().getEmail());
        pHeader.setAlignment(Paragraph.ALIGN_CENTER);
        document.add(pHeader);
        
        //mobile no
        
//        Font p9Font=FontFactory.getFont(FontFactory.HELVETICA_BOLD);
//		p9Font.setSize(25);
//		p9Font.setColor(new Color(123,55,135));
        pHeader.add("Mobile Number : "+transactions.get(0).getUser().getContact());
        pHeader.setAlignment(Paragraph.ALIGN_CENTER);
        document.add(pHeader);
		
	
	//we are generating PDF table from PDF class
	
	PdfPTable table=new PdfPTable(6);
	
	table.setWidthPercentage(100f);
	table.setSpacingBefore(10);
	writeTableHeader(table);
	writeTableData(table);
	document.add(table);
	document.close();
	
	}
}
