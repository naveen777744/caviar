package com.ts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dao.ProductDao;
import com.model.Product;

@RestController
public class ProductController {
 @Autowired
 ProductDao productDao;
 
 @CrossOrigin(origins = "http://localhost:4200")
 @PostMapping("/productLogin")
 public Product getEmpByName(@RequestBody Product pro) {
	 String tempemailid = pro.getEmailId();
	 String temppass = pro.getPassword();
	 Product p = null;
	 p = productDao.fetchUserByEmailIdAndPassword(tempemailid,temppass);
	 if(p != null)
		 return p;
	 return null;
 }
 
 @CrossOrigin(origins = "http://localhost:4200")
 @GetMapping("/otpLogin/{phoneno}")
 public Product getEmail(@PathVariable long phoneno) {
	 Product p = null;
	 p = productDao.fetchUserPhone(phoneno);
	 if(p != null) {
		 System.out.println(p);
		 return p;
	 }
	 return null;
 }
 
 @CrossOrigin(origins = "http://localhost:4200")
 @PostMapping("/registerProduct")
 public Product registerProduct(@RequestBody Product product) {
	 
	 String tempemailid = product.getEmailId();
	 Product pr = productDao.fetchUserEmail(tempemailid);
	 if(pr == null) {
		 Product prod = productDao.registerProduct(product);
		 System.out.println(prod);
		 System.out.println("Product Register successfully");
		 return prod;
	 }
	 
	return null;
	 
 }
}
