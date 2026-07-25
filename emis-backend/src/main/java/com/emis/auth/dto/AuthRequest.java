package com.emis.auth.dto;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Data
@ToString
public class AuthRequest {
	
//	@NotBlan(message = "Email is required!!!")
//	@Email(message = "Email format invalid!!!")
	private String email;
	//@Pattern(regexp="((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message="Invalid password format!!!")
	private String password;
	
}
