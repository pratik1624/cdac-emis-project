package com.emis.faculty.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SubjectMarksResponse {

    private Long resultId;

    private Long studentId;

    private String rollNumber;

    private String studentName;

    private Integer obtainedMarks;

    private Integer totalMarks;

    private String grade;
}
