package com.emis.student.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LoadStudentForAttendanceDto {

    private Long rollNo;
    private String firstName;
    private String lastName;
}
