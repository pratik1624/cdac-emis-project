package com.emis.logger;

import com.emis.auth.dto.AuthResponse;
import lombok.RequiredArgsConstructor;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
@RequiredArgsConstructor
public class LoggingAspect {

    private final LoggerService loggerService;

    // LOGIN
    @Around("execution(* com.emis.user.UserServiceImpl.authenticateUser(..))")
    public Object logLogin(ProceedingJoinPoint joinPoint) throws Throwable {

        try {

            Object result = joinPoint.proceed();

            AuthResponse response = (AuthResponse) result;

            String role = response.getRole().toString();

            loggerService.log(
                    "INFO",
                    role + " Login Successfully"
            );

            return result;

        } catch (Exception e) {

            loggerService.log(
                    "ERROR",
                    "Login failed: " + e.getMessage()
            );

            throw e;
        }
    }

    // OTHER ERRORS
    @AfterThrowing(
            pointcut = "execution(* com.emis..*ServiceImpl.*(..))"
                    + " && !execution(* com.emis.user.UserServiceImpl.authenticateUser(..))",
            throwing = "ex"
    )
    public void logException(Exception ex) {

        loggerService.log(
                "ERROR",
                ex.getMessage()
        );
    }
}