package com.emis.faculty;

import com.emis.attendance.AttendanceService;
import com.emis.attendance.dto.AttendanceRequest;
import com.emis.attendance.dto.LoadStudentRequest;
import com.emis.faculty.dto.FacultyProfileDto;
import com.emis.faculty.dto.FacultyUpdateDto;
import com.emis.faculty.dto.MarksRequest;
import com.emis.security.CustomUserDetails;
import com.emis.student.StudentRepository;
import com.emis.student.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/faculty")
@RequiredArgsConstructor
public class FacultyController {

    //-------------------------------------------SELF----------------------------------------
    private final FacultyService facultyService;

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(FacultyProfileDto profile) {
        return ResponseEntity.ok(facultyService.getProfile());
    }

    //UPDATE PROFILE
    @PutMapping("/profile/{id}")//---use security conext
    public ResponseEntity<?> updateProfile(@PathVariable Long id , @RequestBody FacultyUpdateDto updateRequest){
        return ResponseEntity.ok(facultyService.updateFacultyProfile(id , updateRequest));
    }


    //------------------------------ATTENDANCE-----------------------------------
    private final AttendanceService attendanceService;
    //Load and Upload
    //GetAll students for Attendance
    @PostMapping("/attendance/loadstudents")
    public ResponseEntity<?> loadStudentsForAttendance(@RequestBody LoadStudentRequest loadRequest){
        System.out.println(">>>>>>>inside loadStudentsForAttendance");
        return ResponseEntity.ok(facultyService.loadStudentsForAttendance(loadRequest));
    }


    @PostMapping("/attendance/upload")
    public ResponseEntity<?> uploadAttendance(@RequestBody AttendanceRequest request){
        return ResponseEntity.ok(attendanceService.uploadAttendance(request));
    }
    //Load and Upload Done
    //GET ALL ATTENDANCE OF STUDENTS
    @GetMapping("/attendance")
    public ResponseEntity<?> getAttendance(){
        return null;
    }



    //------------------------------GET /faculty/students------------------------------
    private final StudentService studentService;

    @GetMapping("/students")
    public ResponseEntity<?> getDepartmentStudents(Integer semester){
        return ResponseEntity.ok(facultyService.getDepartmentStudents(semester));
    }

    @GetMapping("student/{id}")
    public ResponseEntity<?> getStudentProfileDetails(@PathVariable Long id){
        return ResponseEntity.ok(facultyService.getStudentProfile(id));
    }

    //----------------------------------SUBJECTS--------------------------------------
    /*
                ---------------------------------------------------------
            Subject : Java Programming
            Semester : 5

            ---------------------------------------------------------
            | Roll No | Student Name | Marks | Total | Grade |
            ---------------------------------------------------------
            | CT23001 | Rahul         | [84 ] | 100 | A      |
            | CT23002 | Priya         | [79 ] | 100 | B+     |
            | CT23003 | Aman          | [91 ] | 100 | A+     |
            ---------------------------------------------------------

                        [ Save Marks ]
     */
    //my subject

    @GetMapping("/subjects")
    public ResponseEntity<?> getAssignedSubjects(){

        return ResponseEntity.ok(
                facultyService.getAssignedSubjects());
    }

    //manage marks
    @GetMapping("/subjects/{subjectId}/marks")
    public ResponseEntity<?> getStudentMarks(@PathVariable Long subjectId){
        return ResponseEntity.ok(facultyService.getSubjectMarks(subjectId));
    }

    //save marks
    @PutMapping("/subjects/{subjectId}/marks")
    public ResponseEntity<?> saveMarks(@PathVariable  Long subjectId , @RequestBody List<MarksRequest> markRequest){
        System.out.println("Inside saveMarks");
        return ResponseEntity.ok(facultyService.saveMarks(subjectId,markRequest));
    }

    //-----------------------------NOTICES----------------------------------

    @GetMapping("/notices")
    public ResponseEntity<?> getNotices(){

        return ResponseEntity.ok(facultyService.getNotices());
    }









}
