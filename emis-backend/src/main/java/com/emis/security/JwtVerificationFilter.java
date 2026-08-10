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

        String authHeader = request.getHeader("Authorization");

        // Only attempt JWT processing if a Bearer token is present.
        // Anything outside this block (i.e. the rest of the chain,
        // including controller/service exceptions) must NOT be caught
        // here, otherwise real errors get masked as "Invalid JWT Token".
        if (authHeader != null && authHeader.startsWith("Bearer ")) {

            try {
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

                log.debug("Authenticated userId={} role={}", userId, roleName);

                UsernamePasswordAuthenticationToken authentication =
                        new UsernamePasswordAuthenticationToken(
                                userDetails,
                                null,
                                List.of(new SimpleGrantedAuthority("ROLE_" + roleName))
                        );

                SecurityContextHolder.getContext().setAuthentication(authentication);

            } catch (Exception e) {

                log.warn("JWT verification failed: {}", e.getMessage());

                SecurityContextHolder.clearContext();

                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                response.getWriter().write("Invalid JWT Token");
                return; // stop here — do not continue the filter chain
            }
        }

        // Runs for: no Authorization header, non-Bearer header, or
        // successful authentication above. Any exception thrown further
        // down the chain (controllers/services) is NOT caught here,
        // so it reaches Spring's normal error handling (/error) instead
        // of being reported as an auth failure.
        filterChain.doFilter(request, response);
    }
}