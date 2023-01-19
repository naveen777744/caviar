package com.model;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;



@Entity
public class Product {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id = 1;
	
	private String name;
	private String gender;
	private String country;
//	private double price;
//	private String model;
//	private String ram;
	
	private String emailId;
	private long phoneno;
	private String password;
	private String cpassword;
	public Product() {
		super();
	}
	public Product(int id, String name, String gender, String country, String emailId, long phoneno, String password, String cpassword) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.country = country;
		this.emailId = emailId;
		this.phoneno = phoneno;
		this.password = password;
		this.cpassword = cpassword;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public long getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(long phoneno) {
		this.phoneno = phoneno;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getCpassword() {
		return cpassword;
	}
	public void setCpassword(String cpassword) {
		this.cpassword = cpassword;
	}
	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", gender=" + gender + ", country=" + country + ", emailId="
				+ emailId + ", phoneno=" + phoneno + ", password=" + password + ", cpassword=" + cpassword + "]";
	}
	
	}
	
		
	


	
	


