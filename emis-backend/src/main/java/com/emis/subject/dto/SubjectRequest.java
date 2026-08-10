package com.emis.subject.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SubjectRequest {

    @NotBlank
    private String subjectCode;

    @NotBlank
    private String subjectName;

    @NotNull
    private Integer semester;

    @NotBlank
    private String department;
}