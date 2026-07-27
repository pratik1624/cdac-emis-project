package com.emis.faculty.dto;

import com.emis.common.Gender;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FacultyReq {

    private String employeeCode;
    private String firstName;
    private String lastName;
    private LocalDate DOB;
    private String designation;
    private Gender gender;
    private LocalDate joiningDate;
    private String email;
    private String phone;
    private String department;
}
