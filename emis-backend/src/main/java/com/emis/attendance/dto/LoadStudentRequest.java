package com.emis.attendance.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class LoadStudentRequest {

    private Integer semester;
    private Integer subjectId;
}
