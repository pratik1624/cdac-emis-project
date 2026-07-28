package com.emis.fee;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.emis.fee.dto.FeeRequest;
import com.emis.fee.dto.FeeResponse;
import com.emis.fee.dto.UpdateFeeRequest;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/fees")
@RequiredArgsConstructor
public class FeeController {

    private final FeeService feeService;

    @PostMapping
    public ResponseEntity<FeeResponse> addFee(@Valid @RequestBody FeeRequest request) {
        System.out.println("******************Inside");
        FeeResponse response = feeService.addFee(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping("/{feeId}")
    public ResponseEntity<FeeResponse> updateFee(
            @PathVariable Long feeId,
            @Valid @RequestBody UpdateFeeRequest request) {

        FeeResponse response = feeService.updateFee(feeId, request);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<FeeResponse>> getAllFees() {

        return ResponseEntity.ok(feeService.getAllFees());
    }

    @GetMapping("/student/{studentId}")
    public ResponseEntity<FeeResponse> getFeeByStudent(@PathVariable Long studentId) {

        return ResponseEntity.ok(feeService.getFeeByStudent(studentId));
    }

    @DeleteMapping("/{feeId}")
    public ResponseEntity<String> deleteFee(@PathVariable Long feeId) {

        feeService.deleteFee(feeId);
        return ResponseEntity.ok("Fee record deleted successfully.");
    }
}
