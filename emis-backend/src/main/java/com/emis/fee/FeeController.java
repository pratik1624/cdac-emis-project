package com.emis.fee;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emis.fee.dto.FeeRequest;
import com.emis.fee.dto.FeeResponse;
import com.emis.fee.dto.UpdateFeeRequest;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/accountant/fees")
@RequiredArgsConstructor
public class FeeController {

    private final FeeService feeService;

    @PostMapping
    public ResponseEntity<FeeResponse> addFee(
            @RequestBody FeeRequest request) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(feeService.addFee(request));
    }

    @GetMapping
    public ResponseEntity<List<FeeResponse>> getAllFees() {

        return ResponseEntity.ok(
                feeService.getAllFees()
        );
    }

    @GetMapping("/student/{studentId}")
    public ResponseEntity<FeeResponse> getFeeByStudent(
            @PathVariable Long studentId) {

        return ResponseEntity.ok(
                feeService.getFeeByStudent(studentId)
        );
    }

    @PutMapping("/{feeId}")
    public ResponseEntity<FeeResponse> updateFee(
            @PathVariable Long feeId,
            @RequestBody UpdateFeeRequest request) {

        return ResponseEntity.ok(
                feeService.updateFee(feeId, request)
        );
    }

    @DeleteMapping("/{feeId}")
    public ResponseEntity<Void> deleteFee(
            @PathVariable Long feeId) {

        feeService.deleteFee(feeId);

        return ResponseEntity.noContent().build();
    }
}