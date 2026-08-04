package com.emis.faculty.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StudentListDto {

    private String rollNumber;
    private String studentName;
    private Integer semester;
    private String email;
    private Long studentId;
}