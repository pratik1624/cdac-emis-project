package com.emis.student;


import com.emis.student.dto.StudentProfileResponse;

public interface StudentService {

    StudentProfileResponse getStudentDetails(Long studentId);

}