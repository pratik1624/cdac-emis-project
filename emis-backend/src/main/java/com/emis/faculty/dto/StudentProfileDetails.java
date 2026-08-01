package com.emis.faculty.dto;

import com.emis.student.dto.StudentRequest;
import lombok.Getter;
import lombok.Setter;


import java.util.List;

@Getter
@Setter
public class StudentProfileDetails {

    private StudentRequest student;

    private List<AttendanceSummaryDto> attendance;

    private List<ResultResponse> results;
}