package com.emis.logger;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class LogRequest {

    private String serviceName;
    private String level;
    private String message;
    private LocalDateTime timeStamp;
}
