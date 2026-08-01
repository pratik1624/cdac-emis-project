package com.emis.fee.dto;



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
public class UpdateFeeRequest {

    @NotNull(message = "Paid amount is required")
    @Min(value = 0, message = "Paid amount cannot be negative")
    private Double paidAmount;

}
