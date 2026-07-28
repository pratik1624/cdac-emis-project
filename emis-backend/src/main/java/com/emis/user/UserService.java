package com.emis.user;

import com.emis.auth.dto.AuthRequest;
import com.emis.auth.dto.AuthResponse;
import com.emis.auth.dto.ChangePasswordRequest;
import com.emis.common.ApiResp;
import com.emis.user.dto.ProfileResponse;
import com.emis.user.dto.UserResponse;


public interface UserService {
	
	AuthResponse authenticateUser(AuthRequest request);
	ApiResp addUser(User user);
	ProfileResponse getProfile();
	void changePassword(String email,
	                    ChangePasswordRequest request);
}
