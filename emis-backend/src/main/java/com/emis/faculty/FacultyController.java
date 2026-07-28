package com.emis.faculty;

import com.emis.attendance.AttendanceService;
import com.emis.attendance.dto.AttendanceRequest;
import com.emis.attendance.dto.LoadStudentRequest;
import com.emis.faculty.dto.FacultyProfileDto;
import com.emis.faculty.dto.FacultyUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/faculty")
@RequiredArgsConstructor
public class FacultyController {

    /*
    GET /faculty/profile-->DONE
    PUT /faculty/profile--->DONE
    GET /faculty/courses
    GET /faculty/students
    POST /faculty/attendance
    PUT  /faculty/attendance
    POST /faculty/marks
    PUT  /faculty/marks
    GET  /faculty/notices
     */
    private final FacultyService facultyService;

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(FacultyProfileDto profile) {
        return ResponseEntity.ok(facultyService.getProfile());
    }

    //UPDATE PROFILE
    @PutMapping("/profile/{id}")
    public ResponseEntity<?> updateProfile(@PathVariable Long id , @RequestBody FacultyUpdateDto updateRequest){
        return ResponseEntity.ok(facultyService.updateFacultyProfile(id , updateRequest));
    }


    //------------------------------ATTENDANCE-----------------------------------

    //Load and Upload
    //GetAll students for Attendance
    @PostMapping("/attendance/loadstudents")
    public ResponseEntity<?> loadStudentsForAttendance(@RequestBody LoadStudentRequest loadRequest){
        System.out.println(">>>>>>>inside loadStudentsForAttendance");
        return ResponseEntity.ok(facultyService.loadStudentsForAttendance(loadRequest));
    }

    private final AttendanceService attendanceService;
    @PostMapping("/attendance/upload")
    public ResponseEntity<?> uploadAttendance(@RequestBody AttendanceRequest request){
        return ResponseEntity.ok(attendanceService.uploadAttendance(request));
    }
    //Load and Upload Done

    //GET ALL ATTENDANCE OF STUDENTS








}
