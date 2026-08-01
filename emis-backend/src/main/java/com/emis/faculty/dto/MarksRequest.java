package com.emis.faculty.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MarksRequest {

    private Long studentId;
    private Integer obtainedMarks;
    private Integer totalMarks;
}
