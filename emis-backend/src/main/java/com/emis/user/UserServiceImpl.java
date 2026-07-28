package com.emis.user;


import com.emis.admin.AdminRepository;
import com.emis.auth.dto.AuthRequest;
import com.emis.auth.dto.AuthResponse;
import com.emis.auth.dto.ChangePasswordRequest;
import com.emis.common.ApiResp;
import com.emis.customexception.ResourceNotFoundException;
import com.emis.faculty.Faculty;
import com.emis.faculty.FacultyRepository;
import com.emis.security.CustomUserDetails;
import com.emis.security.JwtUtils;
import com.emis.student.Student;
import com.emis.student.StudentRepository;
import com.emis.user.dto.ProfileResponse;
import com.emis.user.dto.UserResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
//import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.AbstractValidatingPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.lang.module.ResolutionException;
import com.emis.user.dto.*;

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
	private  final StudentRepository studentrepository;
	private final FacultyRepository facultyrepository;
//	private final AdminRepository adminrepository;

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


	@Override
	public ProfileResponse getProfile() {

		Authentication authentication =
				SecurityContextHolder.getContext().getAuthentication();

		String email = authentication.getName();

		User user = userrepository.findByEmail(email)
				.orElseThrow(() -> new ResourceNotFoundException("User not found"));

		ProfileResponse response = new ProfileResponse();


		switch (user.getRole()) {

			case STUDENT -> {

				Student student = studentrepository.findByUserDetails(user)
						.orElseThrow(() ->
								new ResourceNotFoundException("Student not found"));

				response.setId(student.getId());
				response.setFullName(
						student.getFirstName() + " " + student.getLastName());
				response.setEmail(user.getEmail());
				response.setMobile(student.getPhone());
				response.setRole(user.getRole().name());
			}

			case FACULTY -> {

				Faculty faculty = facultyrepository.findByUserDetails(user)
						.orElseThrow(() ->
								new ResourceNotFoundException("Faculty not found"));

				response.setId(faculty.getId());
				response.setFullName(
						faculty.getFirstName() + " " + faculty.getLastName());
				response.setEmail(user.getEmail());

				// Faculty entity has no phone field
				response.setMobile(null);

				response.setRole(user.getRole().name());
			}

//			case ADMIN -> {
//
//				Admin admin = adminRepository.findByUser(user)
//						.orElseThrow(() -> new ResourceNotFoundException("Admin not found"));
//
//				response.setId(admin.getId());
//				response.setFullName(admin.getFullName());
//				response.setEmail(user.getEmail());
//				response.setMobile(admin.getMobile());
//				response.setRole("ADMIN");
//			}

			default -> throw new RuntimeException("Invalid role");
		}

		return response;
	}

	@Override
	public void changePassword(String email, ChangePasswordRequest request) {

		User user = userrepository.findByEmail(email)
				.orElseThrow(() ->
						new ResourceNotFoundException("User not found"));

        if (!encoder.matches(
				request.getOldPassword(),
				user.getPassword())) {

			throw new ResourceNotFoundException(
					"Old Password is Incorrect");
		}

		user.setPassword(
				encoder.encode(
						request.getNewPassword()));

		userrepository.save(user);
	}


}
