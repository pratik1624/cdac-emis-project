package com.emis.customexception;

public class AuthenticationFailedException extends RuntimeException {
	
	public AuthenticationFailedException(String msg) {
		super(msg);
	}
}
