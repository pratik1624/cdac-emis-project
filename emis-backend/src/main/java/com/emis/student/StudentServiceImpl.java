package com.emis.student;


import com.emis.common.ApiResp;
import com.emis.customexception.ResourceNotFoundException;
import com.emis.department.Department;
import com.emis.department.DepartmentRepository;
import com.emis.student.dto.StudentProfileResponse;
import com.emis.student.dto.StudentRequest;
import com.emis.user.User;
import com.emis.user.UserRole;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;
    private final ModelMapper mapper;
    private final DepartmentRepository departmentRepository;
    private final PasswordEncoder encoder;

    //admin and student
    @Override
    public StudentProfileResponse getStudentDetails() {

        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        Student student = studentRepository
                .findByUserDetailsEmail(email)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Student Not Found"));

        StudentProfileResponse response =
                mapper.map(student, StudentProfileResponse.class);

        response.setEmail(student.getUserDetails().getEmail());
        response.setPhone(student.getUserDetails().getMobileNo());
        response.setDepartment(student.getDepartment().getDeptName());

        return response;
    }

    // admin
    @Override
    public ApiResp addStudent(StudentRequest request) {

        Student student = mapper.map(request, Student.class);


        student.setUserDetails(new User());
        student.getUserDetails().setEmail(request.getEmail());
        student.getUserDetails().setPassword(encoder.encode(request.getFirstName()));
        student.getUserDetails().setMobileNo(request.getPhone());
        student.getUserDetails().setRole(UserRole.STUDENT);


        Department department = departmentRepository
                .findByDeptName(request.getDepartment())
                .orElseGet(() -> {
                    Department dept = new Department();
                    dept.setDeptName(request.getDepartment());
                    return departmentRepository.save(dept);
                });

        student.setDepartment(department);

        studentRepository.save(student);

        return new ApiResp("SUCCESS", "Student Registered Successfully");
    }

    // admin
    @Override
    public List<StudentProfileResponse> getAllStudent() {

        List<Student> students = studentRepository.findAll();

        return students.stream()
                .map(student -> {

                    StudentProfileResponse dto =
                            mapper.map(student, StudentProfileResponse.class);

                    dto.setEmail(student.getUserDetails().getEmail());
                    dto.setPhone(student.getUserDetails().getMobileNo());
                    dto.setDepartment(student.getDepartment().getDeptName());

                    return dto;

                }).toList();
    }



    //  admin  and student
    @Override
    public ApiResp updateStudnetById(
            Long id,
            StudentProfileResponse updateRequest) {

        Student student = studentRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Student Not Found"));

        mapper.map(updateRequest, student);


        student.getUserDetails().setEmail(updateRequest.getEmail());
        student.getUserDetails().setMobileNo(updateRequest.getPhone());


        Department department = departmentRepository
                .findByDeptName(updateRequest.getDepartment())
                .orElseThrow(() ->
                        new ResourceNotFoundException("Department Not Found"));

        student.setDepartment(department);

        studentRepository.save(student);

        return new ApiResp("SUCCESS", "Student Updated Successfully");
    }

    // for ADMIN  only
    @Override
    public ApiResp deleteStudentById(Long id) {

        Student student = studentRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Student Not Found"));

        studentRepository.delete(student);

        return new ApiResp("SUCCESS", "Student Deleted Successfully");
    }


}
