package com.emis.department;

import com.emis.customexception.DuplicateResourceException;
import com.emis.customexception.ResourceNotFoundException;
import com.emis.department.dto.DepartmentRequest;
import com.emis.department.dto.DepartmentResponse;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepository departmentRepository;

    private final ModelMapper mapper;

    @Override
    public DepartmentResponse addDepartment(DepartmentRequest request) {

        departmentRepository.findByDepartmentCode(request.getDepartmentCode())
                .ifPresent(dept -> {
                    throw new DuplicateResourceException(
                            "Department code already exists."
                    );
                });

        departmentRepository.findByDeptName(request.getDeptName())
                .ifPresent(dept -> {
                    throw new DuplicateResourceException(
                            "Department name already exists."
                    );
                });

        Department department = mapper.map(request, Department.class);

        department = departmentRepository.save(department);

        return mapper.map(department, DepartmentResponse.class);
    }

    @Override
    public DepartmentResponse updateDepartment(Long id,
                                               DepartmentRequest request) {

        Department department = departmentRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Department not found."));

        // Check Department Code
        departmentRepository.findByDepartmentCode(request.getDepartmentCode())
                .ifPresent(existing -> {

                    if (!existing.getId().equals(id)) {

                        throw new DuplicateResourceException(
                                "Department code already exists."
                        );

                    }

                });

        // Check Department Name
        departmentRepository.findByDeptName(request.getDeptName())
                .ifPresent(existing -> {

                    if (!existing.getId().equals(id)) {

                        throw new DuplicateResourceException(
                                "Department name already exists."
                        );

                    }

                });

        department.setDepartmentCode(request.getDepartmentCode());

        department.setDeptName(request.getDeptName());

        department = departmentRepository.save(department);

        return mapper.map(department, DepartmentResponse.class);
    }

    @Override
    @Transactional(readOnly = true)
    public List<DepartmentResponse> getAllDepartments() {

        return departmentRepository.findAll()
                .stream()
                .map(department ->
                        mapper.map(department, DepartmentResponse.class))
                .toList();
    }

    @Override
    public void deleteDepartment(Long id) {

        Department department = departmentRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Department not found."));

        departmentRepository.delete(department);
    }
}
