package com.emis.auth.dto;



import com.emis.user.UserRole;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class AuthResponse {
	private Long id;
	private String name;
	private UserRole role;
	private String jwt;
}	
