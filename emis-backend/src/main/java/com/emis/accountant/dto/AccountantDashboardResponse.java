package com.emis.accountant.dto;

import java.math.BigDecimal;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AccountantDashboardResponse {

    private long totalStudents;

    private BigDecimal totalCollected;

    private BigDecimal totalPending;

    private long studentsWithDues;

    private List<RecentPaymentResponse> recentPayments;
}