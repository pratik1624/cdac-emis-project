package com.emis.security;

import java.io.IOException;
import java.util.List;

import com.emis.user.UserRole;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class JwtVerificationFilter extends OncePerRequestFilter {

    private final JwtUtils jwtUtils;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        try {

            System.out.println("JWT Filter Executed");

            // Check Authorization header
            String authHeader = request.getHeader("Authorization");
            System.out.println("Header = " + authHeader);

            // Verify Bearer token
            if (authHeader != null && authHeader.startsWith("Bearer ")) {

                String jwt = authHeader.substring(7);

                Claims payload = jwtUtils.verifyJwtAndExtractClaims(jwt);

                Long userId = payload.get("user_id", Long.class);
                String roleName = payload.get("user_role", String.class);
                String email = payload.getSubject();


                CustomUserDetails userDetails = new CustomUserDetails(
                        userId,
                        email,
                        null,
                        UserRole.valueOf(roleName)
                );


                System.out.println("UserId = " + userId);
                System.out.println("Role = " + roleName);

                UsernamePasswordAuthenticationToken authentication =
                        new UsernamePasswordAuthenticationToken(


                                userDetails,

                                null,
                                List.of(new SimpleGrantedAuthority("ROLE_" + roleName))
                        );

                SecurityContextHolder.getContext().setAuthentication(authentication);
            }

            filterChain.doFilter(request, response);

        } catch (Exception e) {

            SecurityContextHolder.clearContext();

            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("Invalid JWT Token");
        }
    }
}
