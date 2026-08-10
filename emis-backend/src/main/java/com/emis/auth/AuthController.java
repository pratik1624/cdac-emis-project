package com.emis.auth;


import com.emis.auth.dto.AuthRequest;
import com.emis.auth.dto.ChangePasswordRequest;
import com.emis.common.ApiResp;
import com.emis.security.CustomUserDetails;
import com.emis.user.User;
import com.emis.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
	
	private final UserService userservice;
	
	@PostMapping("/signin")
	public ResponseEntity<?> userSignIn(@RequestBody AuthRequest request){
		   System.out.println(">>> Inside Signin Controller");
		return ResponseEntity.ok(userservice.authenticateUser(request));
		
	}
	
//	@PostMapping("/changepassword")
//	public ResponseEntity<?> changePassword(){
//
//	}
	
	@GetMapping("/profile")
	public ResponseEntity<?> getUser(){
		return null;
	}

	//for testing purpose
	@PostMapping("/signup")
	public ResponseEntity<?> userSignUp(@RequestBody User user){
		System.out.println("**********************inside Signup");
		return ResponseEntity.ok(userservice.addUser(user));
	}

	@PostMapping("/changepassword")
	public ResponseEntity<?> changePassword(@RequestBody ChangePasswordRequest request){
		CustomUserDetails userDetails = (CustomUserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		Long id = userDetails.getUserId();
		return ResponseEntity.ok(userservice.changePassword(id,request));

	}
}
