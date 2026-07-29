package com.emis.student;


import com.emis.common.ApiResp;
import com.emis.student.dto.StudentProfileResponse;
import com.emis.student.dto.StudentRequest;

import java.util.List;

public interface StudentService {

    StudentProfileResponse getStudentDetails();
    ApiResp addStudent(StudentRequest request);
    List<StudentProfileResponse> getAllStudent();
    ApiResp updateStudnetById(Long id , StudentProfileResponse updateRequest);
    ApiResp deleteStudentById(Long id);
    ApiResp updateProfile(StudentProfileResponse request);

}