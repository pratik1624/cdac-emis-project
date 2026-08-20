package com.emis.logger;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class LoggerService {

    private final RestTemplate restTemplate;

    public void log(String level, String message) {

        LogRequest request = new LogRequest();

        request.setServiceName("EMIS");

        request.setLevel(level);

        request.setMessage(message);

        request.setTimeStamp(LocalDateTime.now());

        restTemplate.postForObject(
                "http://localhost:5005/api/logs",
                request,
                String.class
        );
    }
}
