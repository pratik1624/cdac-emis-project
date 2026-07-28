package com.emis.accountant;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.emis.accountant.CreateAccountantRequest;
import com.emis.user.User;
import com.emis.user.UserRepository;
import com.emis.user.UserRole;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AccountantServiceImpl implements AccountantService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    @Override
    public void createAccountant(CreateAccountantRequest request) {

        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }


        User user = new User();

        user.setEmail(request.getEmail());

        user.setPassword(
                passwordEncoder.encode(request.getPassword())
        );

        user.setMobileNo(request.getMobileNo());

        user.setRole(UserRole.ACCOUNTANT);


        userRepository.save(user);
    }

}
