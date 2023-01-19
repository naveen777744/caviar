package com.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.Product;

@Service
public class ProductDao {
	@Autowired
	ProductRepository productRepository;
	
	public Product fetchUserEmail(String tempemailid) {
		return productRepository.fetchUserEmail(tempemailid);
	}
	
	public Product fetchUserPhone(long tempphone) {
		return productRepository.fetchUserPhone(tempphone);
	}
	
	public Product registerProduct(Product product) {
		return productRepository.save(product);
		
	}
	public Product fetchUserByEmailIdAndPassword(String tempemailid, String temppass) {
		// TODO Auto-generated method stub
		return productRepository.fetchUserByEmailIdAndPassword(tempemailid, temppass);
	}

}
