package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

	@Query("from Product e where e.emailId = :emailId and e.password = :password")
	Product fetchUserByEmailIdAndPassword(@Param("emailId") String emailId, @Param("password") String password);
	
	@Query("from Product e where e.emailId = :emailId")
	Product fetchUserEmail(@Param("emailId") String emailId) ;
	
	@Query("from Product e where e.phoneno = :phoneno")
	Product fetchUserPhone(@Param("phoneno") long phoneno);
		
	

}
