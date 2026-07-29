package com.emis.faculty.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AttendanceSummaryDto {

    private String subjectName;

    private Integer attendedClasses;

    private Integer totalClasses;

    private Double percentage;
}
