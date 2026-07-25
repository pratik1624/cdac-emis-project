package com.emis.security;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.emis.user.UserRepository;
import com.emis.user.User;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        log.info("********* in load user by user name ");
        User user = userRepository.findByEmail(email)
                .orElseThrow(()-> new UsernameNotFoundException("User by Email not Found !!!!"));

        return new CustomUserDetails(user.getId(),user.getEmail(),user.getPassword(),user.getRole());
    }
}









