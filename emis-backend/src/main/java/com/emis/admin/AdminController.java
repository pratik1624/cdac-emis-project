package com.emis.admin;


import com.emis.accountant.AccountantService;
import com.emis.accountant.CreateAccountantRequest;
import com.emis.department.DepartmentService;
import com.emis.department.dto.DepartmentRequest;
import com.emis.department.dto.DepartmentResponse;
import com.emis.faculty.FacultyService;
import com.emis.faculty.dto.FacultyProfileDto;
import com.emis.faculty.dto.FacultyReq;
import com.emis.notices.dto.NoticeDto;
import com.emis.result.dto.ResultResponse;
import com.emis.notices.NoticeService;
import com.emis.notices.NoticeService;
import com.emis.common.ApiResp;
import com.emis.result.ResultService;
import com.emis.student.StudentService;
import com.emis.student.dto.StudentProfileResponse;
import com.emis.student.dto.StudentRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AccountantService accountantService;
    private final NoticeService noticeService;
    private final StudentService studentService;
    private final DepartmentService departmentService;
    private final FacultyService facultyService;
    private final ResultService resultService;

    @GetMapping("/hello")
    public String hello() {
        return "Hello Admin";
    }

     //---------------- Accountant APIs ----------------

    @PostMapping
    public ResponseEntity<String> createAccountant(
            @Valid @RequestBody CreateAccountantRequest request) {

        accountantService.createAccountant(request);

        return new ResponseEntity<>(
                "Accountant created successfully.",
                HttpStatus.CREATED
        );
    }

    // ---------------- Notice APIs ----------------

    @PostMapping("/notices")
    public ResponseEntity<ApiResp> addNotice(
            @Valid @RequestBody NoticeDto request) {

        return new ResponseEntity<>(
                noticeService.addNotice(request),
                HttpStatus.CREATED);
    }

    @GetMapping("/notices")
    public ResponseEntity<List<NoticeDto>> getAllNotices() {

        return ResponseEntity.ok(
                noticeService.getAllNotices());
    }

    @GetMapping("/notices/{id}")
    public ResponseEntity<NoticeDto> getNoticeById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                noticeService.getNoticeById(id));
    }

    @PutMapping("/notices/{id}")
    public ResponseEntity<ApiResp> updateNotice(
            @PathVariable Long id,
            @Valid @RequestBody NoticeDto updateRequest) {

        return ResponseEntity.ok(
                noticeService.updateNotice(id, updateRequest));
    }

    @DeleteMapping("/notices/{id}")
    public ResponseEntity<ApiResp> deleteNotice(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                noticeService.deleteNotice(id));
    }


    // ---------------- Student APIs ----------------

    @PostMapping("/students")
    public ResponseEntity<ApiResp> addStudent(
            @Valid @RequestBody StudentRequest request) {

        return new ResponseEntity<>(
                studentService.addStudent(request),
                HttpStatus.CREATED);
    }

    @GetMapping("/students")
    public ResponseEntity<List<StudentProfileResponse>> getAllStudents() {

        return ResponseEntity.ok(
                studentService.getAllStudent());
    }

    @GetMapping("/students/profile")
    public ResponseEntity<StudentProfileResponse> getStudentDetails() {

        return ResponseEntity.ok(
                studentService.getStudentDetails());
    }

    @PutMapping("/students/{id}")
    public ResponseEntity<ApiResp> updateStudent(
            @PathVariable Long id,
            @Valid @RequestBody StudentProfileResponse updateRequest) {

        return ResponseEntity.ok(
                studentService.updateStudnetById(id, updateRequest));
    }

    @DeleteMapping("/students/{id}")
    public ResponseEntity<ApiResp> deleteStudent(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                studentService.deleteStudentById(id));
    }

    @PutMapping("/students/profile")
    public ResponseEntity<ApiResp> updateProfile(
            @Valid @RequestBody StudentProfileResponse request) {

        return ResponseEntity.ok(
                studentService.updateProfile(request));
    }



    // ---------------- Department APIs ----------------

    @PostMapping("/departments")
    public ResponseEntity<DepartmentResponse> addDepartment(
            @Valid @RequestBody DepartmentRequest request) {

        DepartmentResponse response =
                departmentService.addDepartment(request);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping("/departments/{id}")
    public ResponseEntity<DepartmentResponse> updateDepartment(
            @PathVariable Long id,
            @Valid @RequestBody DepartmentRequest request) {

        return ResponseEntity.ok(
                departmentService.updateDepartment(id, request));
    }

    @GetMapping("/departments")
    public ResponseEntity<List<DepartmentResponse>> getAllDepartments() {

        return ResponseEntity.ok(
                departmentService.getAllDepartments());
    }

    @DeleteMapping("/departments/{id}")
    public ResponseEntity<Void> deleteDepartment(
            @PathVariable Long id) {

        departmentService.deleteDepartment(id);

        return ResponseEntity.noContent().build();
    }


    // ---------------- Faculty Management ----------------

    @PostMapping("/faculties")
    public ResponseEntity<ApiResp> addFaculty(
            @Valid @RequestBody FacultyReq request) {

        return new ResponseEntity<>(
                facultyService.addFaculty(request),
                HttpStatus.CREATED);
    }

    @GetMapping("/faculties")
    public ResponseEntity<List<FacultyProfileDto>> getAllFaculty() {

        return ResponseEntity.ok(
                facultyService.getAllFaculty());
    }

    @GetMapping("/faculties/{id}")
    public ResponseEntity<FacultyProfileDto> getFacultyById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                facultyService.getFacultyById(id));
    }

    @PutMapping("/faculties/{id}")
    public ResponseEntity<ApiResp> updateFaculty(
            @PathVariable Long id,
            @Valid @RequestBody FacultyProfileDto request) {

        return ResponseEntity.ok(
                facultyService.updateFacultyById(id, request));
    }

    @DeleteMapping("/faculties/{id}")
    public ResponseEntity<ApiResp> deleteFaculty(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                facultyService.deleteFacultyById(id));
    }

    // ---------------- Result APIs ----------------

    @GetMapping("/results")
    public ResponseEntity<List<ResultResponse>> getResults() {

        return ResponseEntity.ok(
                resultService.getResults());
    }

}