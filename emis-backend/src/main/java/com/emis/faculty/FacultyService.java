package com.emis.faculty;

import com.emis.attendance.dto.LoadStudentRequest;
import com.emis.common.ApiResp;
import com.emis.faculty.dto.FacultyProfileDto;
import com.emis.faculty.dto.FacultyReq;
import com.emis.faculty.dto.FacultyUpdateDto;
import com.emis.student.dto.LoadStudentForAttendanceDto;
import com.emis.student.dto.StudentProfileResponse;

import java.util.List;

public interface FacultyService {


       //FACULTY
       FacultyProfileDto getProfile();
       ApiResp updateFacultyProfile(Long id , FacultyUpdateDto facultyUpdateDto);

       //load Students
       List<LoadStudentForAttendanceDto>loadStudentsForAttendance(LoadStudentRequest loadStudentRequest);
       //ATTENDANCE
     //  ApiResp uploadAttendance(LoadStudentRequest attendanceRequest);




       ApiResp addFaculty(FacultyReq request);
       List<FacultyProfileDto> getAllFaculty();
       FacultyProfileDto getFacultyById(Long id);
       ApiResp updateFacultyById(Long id , FacultyProfileDto updateRequest);

       ApiResp deleteFacultyById(Long id);
}
