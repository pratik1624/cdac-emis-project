package com.emis.fee.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.Data;

@Data
public class FeeResponse {

    private Long feeId;

    private Long studentId;

    private String studentName;

    private String rollNumber;

    private String department;

    private Integer semester;

    private BigDecimal totalFee;

    private BigDecimal paidAmount;

    private BigDecimal pendingAmount;

    private String paymentStatus;

    private LocalDate paymentDate;

    private String remarks;
}