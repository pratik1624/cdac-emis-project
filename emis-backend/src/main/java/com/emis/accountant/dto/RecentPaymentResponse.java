package com.emis.accountant.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecentPaymentResponse {

    private Long studentId;

    private String studentName;

    private BigDecimal amount;

    private LocalDate date;

    private String status;
}