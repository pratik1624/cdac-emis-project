package com.emis.attendance.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.GetMapping;

@Getter
@Setter
public class StudentAttendanceDto {

    private Long studentId;
    private Boolean present;
}
