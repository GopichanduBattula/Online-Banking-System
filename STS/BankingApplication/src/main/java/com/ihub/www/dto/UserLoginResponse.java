package com.ihub.www.dto;

import com.ihub.www.entity.User;

public class UserLoginResponse extends CommonApiResponse{


private User user;
private String jwtToken;
   public void setUser(User user2 ) {
	   this.user=user;
   }
   public void setJwtToken(String jwtToken) {
	   this.jwtToken=jwtToken;
   }
}
