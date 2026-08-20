package com.emis.fee.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import lombok.Data;

@Data
public class FeeRequest {

    private Long studentId;

    private BigDecimal totalFee;

    private BigDecimal paidAmount;

    private LocalDate paymentDate;

    private String remarks;
}