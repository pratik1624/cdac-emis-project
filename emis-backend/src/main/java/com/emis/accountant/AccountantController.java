package com.emis.accountant;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.emis.accountant.dto.AccountantDashboardResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/accountant")
@RequiredArgsConstructor
public class AccountantController {

    private final AccountantService accountantService;

    // ==========================================
    // CREATE ACCOUNTANT
    // ==========================================

    @PostMapping
    public ResponseEntity<Accountant> createAccountant(
            @RequestBody Accountant accountant) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(
                        accountantService
                                .createAccountant(accountant)
                );
    }

    // ==========================================
    // GET ACCOUNTANT PROFILE
    // ==========================================

    @GetMapping
    public ResponseEntity<Accountant> getAccountant() {

        return ResponseEntity.ok(
                accountantService.getAccountant()
        );
    }

    // ==========================================
    // ACCOUNTANT DASHBOARD
    // ==========================================

    @GetMapping("/dashboard")
    public ResponseEntity<AccountantDashboardResponse>
            getDashboard() {

        return ResponseEntity.ok(
                accountantService.getDashboard()
        );
    }
}