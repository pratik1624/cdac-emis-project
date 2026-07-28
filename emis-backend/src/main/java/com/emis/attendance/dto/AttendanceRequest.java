package com.emis.attendance.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class AttendanceRequest {

    private Long subjectId;
    private Integer semester;
    private List<StudentAttendanceDto> students;
}
