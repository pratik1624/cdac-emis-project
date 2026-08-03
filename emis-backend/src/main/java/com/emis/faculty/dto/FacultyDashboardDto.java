package com.emis.faculty.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FacultyDashboardDto {

    private String facultyName;

    private String employeeCode;

    private String department;

    private String email;

    private Integer totalStudents;

    private Integer totalSubjects;

    private Integer pendingAttendance;

    private Integer pendingResults;

}