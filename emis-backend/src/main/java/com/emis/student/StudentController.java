package com.emis.student;


import com.emis.attendance.AttendanceService;
import com.emis.result.ResultService;
import com.emis.result.dto.ResultResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
public class StudentController {

    private final StudentService studentService;

    @GetMapping("/{studentId}")
    public ResponseEntity<?> getStudentDetails(@PathVariable Long studentId) {

        return ResponseEntity.ok(studentService.getStudentDetails(studentId));

    }
    private final AttendanceService attendanceService;
    @GetMapping("/{studentId}/attendance")
    public ResponseEntity<?> getAttendance(@PathVariable Long studentId) {
        return ResponseEntity.ok(attendanceService.getAttendance(studentId));
    }

    private final ResultService resultService;

    @GetMapping("/{studentId}/results")
    public ResponseEntity<List<ResultResponse>> getResults(
            @PathVariable Long studentId) {

        return ResponseEntity.ok(resultService.getResults(studentId));
    }
}
