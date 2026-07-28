package com.emis.student.dto;


import com.emis.common.Gender;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentProfileResponse {

    private Long Id;
    private String firstName;
    private String lastName;
    private String rollNumber;
    private String email;
    private String phone;
    private Gender gender;
    private String address;
    private String department;
    private Integer semester;
    private String dob;
}
