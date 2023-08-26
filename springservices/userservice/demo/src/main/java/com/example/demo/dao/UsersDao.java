package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.beans.Users;

@Repository
public interface UsersDao extends JpaRepository<Users,Integer>{

	@Query(value="select u from Users u")
	List<Users> getAllUsers();
	
	@Query(value="select u from Users u where u.username=?1 and password=?2")
	Users Login(String username, String password);
	
}
