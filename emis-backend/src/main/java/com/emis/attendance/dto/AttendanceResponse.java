package com.emis.attendance.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AttendanceResponse {

    private String subjectCode;
    private String subjectName;
    private Integer totalClasses;
    private Integer attendedClasses;
    private Double attendancePercentage;
}
