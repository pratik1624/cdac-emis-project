package com.emis.fee;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.emis.fee.dto.FeeRequest;
import com.emis.fee.dto.FeeResponse;
import com.emis.fee.dto.UpdateFeeRequest;
import com.emis.student.Student;
import com.emis.student.StudentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FeeServiceImpl implements FeeService {

    private final FeeRepository feeRepository;
    private final StudentRepository studentRepository;

    @Override
    public FeeResponse addFee(FeeRequest request) {
        System.out.println("******************Inside");

        if (feeRepository.existsByStudentId(request.getStudentId())) {
            throw new RuntimeException("Fee record already exists for this student.");
        }

        Student student = studentRepository.findById(request.getStudentId())
                .orElseThrow(() -> new RuntimeException("Student not found."));

        if (request.getPaidAmount() > request.getTotalFee()) {
            throw new RuntimeException("Paid amount cannot be greater than total fee.");
        }

        Fee fee = new Fee();
        fee.setStudent(student);
        fee.setTotalFee(request.getTotalFee());
        fee.setPaidAmount(request.getPaidAmount());

        double remainingAmount = request.getTotalFee() - request.getPaidAmount();
        fee.setRemainingAmount(remainingAmount);

        fee.setStatus(calculateStatus(request.getTotalFee(), request.getPaidAmount()));
        fee.setPaymentDate(request.getPaymentDate());

        Fee savedFee = feeRepository.save(fee);

        return mapToResponse(savedFee);
    }

    @Override
    public FeeResponse updateFee(Long feeId, UpdateFeeRequest request) {

        Fee fee = feeRepository.findById(feeId)
                .orElseThrow(() -> new RuntimeException("Fee record not found."));

        double newPaidAmount = fee.getPaidAmount() + request.getPaidAmount();

        if (newPaidAmount > fee.getTotalFee()) {
            throw new RuntimeException("Paid amount cannot exceed total fee.");
        }

        fee.setPaidAmount(newPaidAmount);

        double remainingAmount = fee.getTotalFee() - newPaidAmount;
        fee.setRemainingAmount(remainingAmount);

        fee.setStatus(calculateStatus(fee.getTotalFee(), newPaidAmount));

        Fee updatedFee = feeRepository.save(fee);

        return mapToResponse(updatedFee);
    }

    @Override
    public List<FeeResponse> getAllFees() {

        return feeRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public FeeResponse getFeeByStudent(Long studentId) {

        Fee fee = feeRepository.findByStudentId(studentId)
                .orElseThrow(() -> new RuntimeException("Fee record not found."));

        return mapToResponse(fee);
    }

    @Override
    public void deleteFee(Long feeId) {

        Fee fee = feeRepository.findById(feeId)
                .orElseThrow(() -> new RuntimeException("Fee record not found."));

        feeRepository.delete(fee);
    }

    private FeeStatus calculateStatus(Double totalFee, Double paidAmount) {

        if (Double.compare(paidAmount, 0.0) == 0) {
            return FeeStatus.UNPAID;
        }

        if (paidAmount.equals(totalFee)) {
            return FeeStatus.PAID;
        }

        return FeeStatus.PARTIALLY_PAID;
    }

    private FeeResponse mapToResponse(Fee fee) {

        FeeResponse response = new FeeResponse();

        response.setId(fee.getId());
        response.setStudentName(
                fee.getStudent().getFirstName() + " " + fee.getStudent().getLastName()
        );
        response.setTotalFee(fee.getTotalFee());
        response.setPaidAmount(fee.getPaidAmount());
        response.setRemainingAmount(fee.getRemainingAmount());
        response.setStatus(fee.getStatus());
        response.setPaymentDate(fee.getPaymentDate());

        return response;
    }
}
