package com.ihub.www.dto;

import java.util.ArrayList;
import java.util.List;

import com.ihub.www.entity.User;

public class UserListResponseDto extends CommonApiResponse{

	private List<User> users = new ArrayList<>();
	public void setUsers(List<User> users) {
		this.users=users;
	}
        
}
