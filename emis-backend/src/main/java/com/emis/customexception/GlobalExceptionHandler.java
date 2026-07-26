package com.emis.customexception;



import com.emis.common.ApiResp;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(AuthenticationFailedException.class)
	public ResponseEntity<?> handelAuthenticationFailedException(AuthenticationFailedException e){
		System.out.println("Authentication Failed....");
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResp("Failed" , e.getMessage()));
	}
	
	@ExceptionHandler(DuplicateResourceException.class)
	public ResponseEntity<?> handelDuplicateResourceException(DuplicateResourceException e){
		System.out.println("DuplicateResource Found......");
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResp("Failed", e.getMessage()));
	}
}
