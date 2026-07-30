package com.emis.department;

import com.emis.department.dto.DepartmentRequest;
import com.emis.department.dto.DepartmentResponse;

import java.util.List;

public interface DepartmentService {

    DepartmentResponse addDepartment(
            DepartmentRequest request
    );

    DepartmentResponse updateDepartment(
            Long id,
            DepartmentRequest request
    );

    List<DepartmentResponse> getAllDepartments();

    void deleteDepartment(Long id);

}
