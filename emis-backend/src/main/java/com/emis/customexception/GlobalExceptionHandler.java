package com.emis.customexception;



import com.emis.common.ApiResp;
import com.emis.logger.LogRequest;
import com.emis.logger.LoggerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
@RequiredArgsConstructor
public class GlobalExceptionHandler {

	private final LoggerService loggerService;
	@ExceptionHandler(AuthenticationFailedException.class)
	public ResponseEntity<?> handelAuthenticationFailedException(AuthenticationFailedException e){
		System.out.println("Authentication Failed....");

		loggerService.log("ERROR", e.getMessage());
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new ApiResp("Failed" , e.getMessage()));
	}

	
	@ExceptionHandler(DuplicateResourceException.class)
	public ResponseEntity<?> handelDuplicateResourceException(DuplicateResourceException e){
		System.out.println("DuplicateResource Found......");
		loggerService.log("ERROR", e.getMessage());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResp("Failed", e.getMessage()));
	}

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<?> handleResourceNotFoundException(ResourceNotFoundException e){
		loggerService.log("ERROR", e.getMessage());
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResp("Failed", e.getMessage()));
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> handleAllException(Exception e){
		log.info(e.getMessage());
		loggerService.log("ERROR", e.getMessage());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Backend failed");
	}
}
