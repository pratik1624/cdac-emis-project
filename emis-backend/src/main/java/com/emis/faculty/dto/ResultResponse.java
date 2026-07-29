package com.emis.faculty.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResultResponse {

    private String subjectName;

    private Integer obtainedMarks;

    private Integer totalMarks;

    private String grade;
}
