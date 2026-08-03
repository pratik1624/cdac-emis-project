package com.emis.student.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoadStudentForAttendanceDto {
    private Long studentId;
    private String rollNo;
    private String firstName;
    private String lastName;
}
