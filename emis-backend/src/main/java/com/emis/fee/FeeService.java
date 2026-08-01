package com.emis.fee;



import java.util.List;

import com.emis.fee.dto.FeeRequest;
import com.emis.fee.dto.FeeResponse;
import com.emis.fee.dto.UpdateFeeRequest;

public interface FeeService {

    FeeResponse addFee(FeeRequest request);

    FeeResponse updateFee(Long feeId, UpdateFeeRequest request);

    List<FeeResponse> getAllFees();

    FeeResponse getFeeByStudent(Long studentId);

    void deleteFee(Long feeId);

}
