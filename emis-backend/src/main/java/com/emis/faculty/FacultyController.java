package com.emis.faculty;

import com.emis.faculty.FacultyService;
import com.emis.faculty.dto.FacultyProfileDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/faculty")
@RequiredArgsConstructor
public class FacultyController {

    /*
    GET /faculty/profile
    PUT /faculty/profile
    GET /faculty/courses
    GET /faculty/students
    POST /faculty/attendance
    PUT  /faculty/attendance
    POST /faculty/marks
    PUT  /faculty/marks
    GET  /faculty/notices
     */
    private final FacultyService facultyService;

    public ResponseEntity<?> getProfile(FacultyProfileDto profile) {
        return ResponseEntity.ok(facultyService.getProfile());
    }
}
