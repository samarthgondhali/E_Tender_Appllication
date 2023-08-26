package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.beans.UserTenderInfo;

@Repository
public interface UsersTenderDao extends JpaRepository<UserTenderInfo,Integer>{
	
	@Query(value="select u from UserTenderInfo u where username=?1")
	List<UserTenderInfo> getTenderInfoForUser(String username);
	
}
