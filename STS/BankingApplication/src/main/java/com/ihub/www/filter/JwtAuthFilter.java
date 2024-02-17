package com.ihub.www.filter;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.ihub.www.service.JwtService;
import com.ihub.www.service.UserService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {
 @Autowired
 private JwtService jwtService;
 
 @Autowired
 private UserService userService;

@Override
protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
		throws ServletException, IOException {
	// TODO Auto-generated method stub
	
  String authHeader=request.getHeader("Authorization");
    String token=null;
    String username=null;
    if(authHeader!=null && authHeader.startsWith("Bearer")) {
    	
    	token=authHeader.substring(7);
    	username=jwtService.extractUsername(token);		
    }
    	
    	
    
	}
	
 
}
