package com.emis.auth;


import com.emis.auth.dto.AuthRequest;
import com.emis.auth.dto.ChangePasswordRequest;
import com.emis.user.User;
import com.emis.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
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


	@PostMapping("/changepassword")
	public ResponseEntity<?> changePassword(
			Authentication authentication,
			@RequestBody ChangePasswordRequest request){

		System.out.println("*************************inside changepasswod  " + authentication.getName());
		userservice.changePassword(
				authentication.getName(),
				request);

		return ResponseEntity.ok("Password Changed Successfully"+authentication.getName());
	}

	//for testing purpose
	@PostMapping("/signup")
	public ResponseEntity<?> userSignUp(@RequestBody User user){
		System.out.println("**********************inside Signup");
		return ResponseEntity.ok(userservice.addUser(user));
	}

}
