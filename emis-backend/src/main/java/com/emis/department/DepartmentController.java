package com.emis.department;

import com.emis.department.dto.DepartmentRequest;
import com.emis.department.dto.DepartmentResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/department")
@RequiredArgsConstructor
public class DepartmentController {

    private final DepartmentService departmentService;

    @PostMapping("/add")
    public ResponseEntity<DepartmentResponse> addDepartment(
            @Valid @RequestBody DepartmentRequest request) {

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(departmentService.addDepartment(request));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<DepartmentResponse> updateDepartment(
            @PathVariable Long id,
            @Valid @RequestBody DepartmentRequest request) {

        return ResponseEntity.ok(
                departmentService.updateDepartment(id, request)
        );
    }

    @GetMapping("/get")
    public ResponseEntity<List<DepartmentResponse>> getAllDepartments() {

        return ResponseEntity.ok(
                departmentService.getAllDepartments()
        );
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteDepartment(
            @PathVariable Long id) {

        departmentService.deleteDepartment(id);

        return ResponseEntity.ok("Department deleted successfully.");
    }
}
