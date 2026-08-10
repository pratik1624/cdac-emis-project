package com.emis.subject.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SubjectResponse {

    private Long Id;

    private String subjectCode;

    private String subjectName;

    private Integer semester;

    private String department;
}