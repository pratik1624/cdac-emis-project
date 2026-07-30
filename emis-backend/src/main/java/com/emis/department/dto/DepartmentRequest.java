package com.emis.department.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DepartmentRequest {

    @NotBlank(message = "Department code is required")
    @Size(max = 10)
    private String departmentCode;

    @NotBlank(message = "Department name is required")
    @Size(max = 100)
    private String deptName;
}
