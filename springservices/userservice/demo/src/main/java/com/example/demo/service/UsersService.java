package com.example.demo.service;

import java.util.List;

import com.example.demo.beans.Users;

public interface UsersService {
	List<Users> getAllUsers();
	
	Users Login(String username, String password);

	Users register(Users users);
}
