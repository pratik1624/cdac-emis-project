package com.emis.fee.dto;



import java.time.LocalDate;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FeeRequest {

    @NotNull(message = "Student Id is required")
    private Long studentId;

    @NotNull(message = "Total fee is required")
    @Min(value = 0, message = "Total fee cannot be negative")
    private Double totalFee;

    @NotNull(message = "Paid amount is required")
    @Min(value = 0, message = "Paid amount cannot be negative")
    private Double paidAmount;

    @NotNull(message = "Payment date is required")
    private LocalDate paymentDate;

}
