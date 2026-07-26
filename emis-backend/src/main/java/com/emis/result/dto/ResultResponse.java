package com.emis.result.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResultResponse {

    private String subjectCode;
    private String subjectName;
    private Integer obtainedMarks;
    private Integer totalMarks;
    private String grade;
}