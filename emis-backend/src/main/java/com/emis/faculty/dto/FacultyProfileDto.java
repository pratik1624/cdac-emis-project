package com.emis.faculty.dto;

import com.emis.common.Gender;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FacultyProfileDto {

    private Long Id;
    private String firstName;
    private String lastName;
    private LocalDate DOB;
    private String employeeCode;
    private String email;
    private Gender gender;
    private String phone;
    private String designation;
    private String department;
    private String role;

}
