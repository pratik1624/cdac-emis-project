package com.emis.security;



import java.util.Date;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap.KeySetView;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtUtils {

    @PostConstruct
    public void init() {
        log.info("JWT Secret Key Generated");
    }
    @Value("${jwt.secret.key}")
    private String secret;
    @Value("${jwt.exp.time}")
    private long expTime;

    private SecretKey key;

    @PostConstruct
    public void MyInit() {
        log.info("******* in init - generating symmetric secret key SHA 256");
        key=Keys.hmacShaKeyFor(secret.getBytes());
    }

    public String generateJWT(CustomUserDetails userDetails) {

        Date now = new Date();
        Date expDate = new Date(now.getTime()+expTime);

        return Jwts.builder() //creates JWT builder
                .subject(userDetails.getUsername()) //adding subject
                .issuedAt(now) //adding iat
                .expiration(expDate) //adding exp
                //add custom claims
                .claims
                        (Map.of("user_id", userDetails.getUserId(), //k1,v1
                                "user_role",userDetails.getRole().name()))
                .signWith(key)
                .compact();
    }

    public Claims verifyJwtAndExtractClaims(String jwt) {
        return Jwts.parser() //creates a builder to parse JWT
                .verifyWith(key) //verifying signature
                .build() //builds JWT parser
                .parseSignedClaims(jwt) //in case of invalid JWT - throws exception
                .getPayload();//extracting the claims
    }
}



