package com.emis.user;


import com.emis.auth.dto.AuthRequest;
import com.emis.auth.dto.AuthResponse;
import com.emis.common.ApiResp;
import com.emis.security.CustomUserDetails;
import com.emis.security.JwtUtils;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
//import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
	
	private final UserRepository userrepository;
//	private final ModelMapper mapper;
	private final AuthenticationManager manager;
	private final JwtUtils jwtUtils;
	private final PasswordEncoder encoder;
	@Override
	public AuthResponse authenticateUser(AuthRequest request) {
		
		//1.Create Authentication Object
		UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword());
		
		//2.Invoke authenticate mtd to Authentication Manager
		
		Authentication fullyAuthenticated = manager.authenticate(token);
		
		CustomUserDetails userDetails = (CustomUserDetails) fullyAuthenticated.getPrincipal();
		
		return new AuthResponse(userDetails.getUserId(),userDetails.getUsername(),userDetails.getRole(),jwtUtils.generateJWT(userDetails));
		//.....................Continue on jwtutils--> creating jwt token
		
		//flow config secu -> then jwtVerificationFilter - > if no bearer then check it has permissoin -> /users/sign (permitAll) --> userContoller -> UserserviceImple
	}

	@Override
	public ApiResp addUser(User user) {
		user.setPassword(encoder.encode(user.getPassword()));
		userrepository.save(user);
		return new ApiResp("Success", "User Register Successfully");
	}


}
