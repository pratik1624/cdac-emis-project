package com.emis.common;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class ApiResp {
	private String status;
	private String message;
	private LocalDateTime timestamp;
	public ApiResp(String status , String error) {
		this.status = status;
		this.message = error;
		this.timestamp = LocalDateTime.now();
	}
}
