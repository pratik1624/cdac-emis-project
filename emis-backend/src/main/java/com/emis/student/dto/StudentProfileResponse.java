package com.emis.student.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudentProfileResponse {

    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String address;
    private String department;
    private Integer semester;
}