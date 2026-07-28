
   //this all are for students apis
/*
   GET /students/profile
   PUT /students/profile
   GET /students/notice
   GET /students/results
   GET /students/attendance
   GET /studnets/fees
    */






package com.emis.student;


   import com.emis.attendance.AttendanceService;
   import com.emis.notices.NoticeService;
   import com.emis.result.ResultService;
   import lombok.RequiredArgsConstructor;
   import org.springframework.http.ResponseEntity;
   import org.springframework.web.bind.annotation.GetMapping;
   import org.springframework.web.bind.annotation.RequestMapping;
   import org.springframework.web.bind.annotation.RestController;

   @RestController
   @RequestMapping("/student")
   @RequiredArgsConstructor
   public class StudentController {

       private final StudentService studentService;
       private final AttendanceService attendanceService;
       private final ResultService resultService;
       private final NoticeService noticeService;

       @GetMapping("/profile")
       public ResponseEntity<?> getStudentDetails() {
           return ResponseEntity.ok(studentService.getStudentDetails());
       }

       @GetMapping("/attendance")
       public ResponseEntity<?> getAttendance() {
           return ResponseEntity.ok(attendanceService.getAttendance());
       }

       @GetMapping("/results")
       public ResponseEntity<?> getResults() {
           return ResponseEntity.ok(resultService.getResults());
       }

       @GetMapping("/notices")
       public ResponseEntity<?> getNotices() {
           return ResponseEntity.ok(noticeService.getAllNotices());
       }
   }

