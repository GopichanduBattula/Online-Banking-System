package com.ihub.www.config;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.ihub.www.entity.User;
import com.ihub.www.service.UserService;

public class CustomUserDetailsService implements UserDetailsService
{
  @Autowired
  
  private UserService userService;
  
  @Override
   public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException
   {
	  User user=this.userService.getUserByEmail(email);
	   
	  CustomUserDetails customUserDetails=new CustomUserDetails(user);
	   return customUserDetails;
	  
   }
  
   
  
}