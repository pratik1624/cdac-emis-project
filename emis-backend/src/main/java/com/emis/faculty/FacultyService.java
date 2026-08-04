package com.emis.faculty;

import com.emis.attendance.dto.LoadStudentRequest;
import com.emis.common.ApiResp;
import com.emis.faculty.dto.*;
import com.emis.notices.Notices;
import com.emis.student.dto.LoadStudentForAttendanceDto;
import com.emis.student.dto.StudentProfileResponse;
import com.emis.subject.SubjectDto;

import java.util.List;
import java.util.Set;

public interface FacultyService {



       ApiResp updateFacultyProfile(Long id , FacultyUpdateDto facultyUpdateDto);




              ApiResp addFaculty(FacultyReq request);
              List<FacultyProfileDto> getAllFaculty();
              FacultyProfileDto getFacultyById(Long id);
              ApiResp updateFacultyById(Long id , FacultyProfileDto updateRequest);
              ApiResp deleteFacultyById(Long id);





         //STUDENT PROFILE
         StudentProfileDetails getStudentProfile(Long studentId);












    FacultyDashboardDto getDashboard();



        //29-07-2026

         //SUBJECTRESPONSE (mysubject ui)
         Set<SubjectResponse> getAssignedSubjects();

         // Student navbarresponse
         List<StudentListDto> getDepartmentStudents(Integer semester);

         //notice navbarresponse
         List<Notices> getNotices();

         //FACULTY profile navbar
         FacultyProfileDto getProfile();

        //load Students attendance navbar
        List<LoadStudentForAttendanceDto>loadStudentsForAttendance(LoadStudentRequest loadStudentRequest);

        //load Subject marks
        List<SubjectMarksResponse> getSubjectMarks(Long subjectId);
        //Save Marks
         ApiResp saveMarks(Long subjectId, List<MarksRequest> markRequest);
}
