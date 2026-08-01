package com.emis.fee.dto;

import java.time.LocalDate;

import com.emis.fee.FeeStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FeeResponse {

    private Long id;

    private String studentName;

    private Double totalFee;

    private Double paidAmount;

    private Double remainingAmount;

    private FeeStatus status;

    private LocalDate paymentDate;

}