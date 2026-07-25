package com.emis.user;

import com.emis.auth.dto.AuthRequest;
import com.emis.auth.dto.AuthResponse;
import com.emis.common.ApiResp;


public interface UserService {
	
	AuthResponse authenticateUser(AuthRequest request);
	ApiResp addUser(User user);
}
