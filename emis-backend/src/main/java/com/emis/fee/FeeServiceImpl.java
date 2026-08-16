package com.emis.fee;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    @Transactional
    public FeeResponse addFee(FeeRequest request) {

        // 1. Check whether student exists
        Student student = studentRepository
                .findByIdWithDepartment(request.getStudentId())
                .orElseThrow(() ->
                        new RuntimeException("Student not found"));

        // 2. Check whether fee already exists for student
        if (feeRepository.existsByStudent_Id(request.getStudentId())) {
            throw new RuntimeException(
                    "Fee record already exists for this student");
        }

        // 3. Validate amounts
        if (request.getTotalFee() == null ||
            request.getPaidAmount() == null) {

            throw new RuntimeException(
                    "Total fee and paid amount are required");
        }

        if (request.getTotalFee().signum() < 0 ||
            request.getPaidAmount().signum() < 0) {

            throw new RuntimeException(
                    "Fee amount cannot be negative");
        }

        if (request.getPaidAmount()
                .compareTo(request.getTotalFee()) > 0) {

            throw new RuntimeException(
                    "Paid amount cannot be greater than total fee");
        }

        // 4. Create Fee
        Fee fee = new Fee();

        fee.setStudent(student);
        fee.setTotalFee(request.getTotalFee());
        fee.setPaidAmount(request.getPaidAmount());

        // 5. Calculate pending amount
        fee.setPendingAmount(
                request.getTotalFee()
                        .subtract(request.getPaidAmount())
        );

        // 6. Calculate payment status
        fee.setPaymentStatus(
                calculateStatus(
                        request.getTotalFee(),
                        request.getPaidAmount()
                )
        );

        fee.setPaymentDate(request.getPaymentDate());
        fee.setRemarks(request.getRemarks());

        // 7. Save
        Fee savedFee = feeRepository.save(fee);

        // 8. Convert entity to response
        return mapToResponse(savedFee);
    }

    @Override
    @Transactional(readOnly = true)
    public FeeResponse getFeeByStudent(Long studentId) {

        Fee fee = feeRepository.findByStudent_Id(studentId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Fee record not found for this student"));

        // Department may be lazy, so initialize it while session is open
        fee.getStudent().getDepartment().getDeptName();

        return mapToResponse(fee);
    }

    @Override
    @Transactional(readOnly = true)
    public List<FeeResponse> getAllFees() {

        List<Fee> fees = feeRepository.findAll();

        // Initialize Department while session is open
        fees.forEach(fee ->
                fee.getStudent().getDepartment().getDeptName()
        );

        return fees.stream()
                .map(this::mapToResponse)
                .toList();
    }

    @Override
    @Transactional
    public FeeResponse updateFee(
            Long feeId,
            UpdateFeeRequest request) {

        Fee fee = feeRepository.findById(feeId)
                .orElseThrow(() ->
                        new RuntimeException("Fee record not found"));

        if (request.getTotalFee() == null ||
            request.getPaidAmount() == null) {

            throw new RuntimeException(
                    "Total fee and paid amount are required");
        }

        if (request.getTotalFee().signum() < 0 ||
            request.getPaidAmount().signum() < 0) {

            throw new RuntimeException(
                    "Fee amount cannot be negative");
        }

        if (request.getPaidAmount()
                .compareTo(request.getTotalFee()) > 0) {

            throw new RuntimeException(
                    "Paid amount cannot be greater than total fee");
        }

        fee.setTotalFee(request.getTotalFee());
        fee.setPaidAmount(request.getPaidAmount());

        // Recalculate pending amount
        fee.setPendingAmount(
                request.getTotalFee()
                        .subtract(request.getPaidAmount())
        );

        // Recalculate payment status
        fee.setPaymentStatus(
                calculateStatus(
                        request.getTotalFee(),
                        request.getPaidAmount()
                )
        );

        fee.setPaymentDate(request.getPaymentDate());
        fee.setRemarks(request.getRemarks());

        Fee updatedFee = feeRepository.save(fee);

        return mapToResponse(updatedFee);
    }

    @Override
    @Transactional
    public void deleteFee(Long feeId) {

        Fee fee = feeRepository.findById(feeId)
                .orElseThrow(() ->
                        new RuntimeException("Fee record not found"));

        feeRepository.delete(fee);
    }

    // --------------------------------
    // Helper Methods
    // --------------------------------

    private FeeStatus calculateStatus(
            BigDecimal totalFee,
            BigDecimal paidAmount) {

        if (paidAmount.signum() == 0) {

            return FeeStatus.PENDING;

        } else if (paidAmount.compareTo(totalFee) < 0) {

            return FeeStatus.PARTIALLY_PAID;

        } else {

            return FeeStatus.PAID;
        }
    }

    private FeeResponse mapToResponse(Fee fee) {

        FeeResponse response = new FeeResponse();

        Student student = fee.getStudent();

        response.setFeeId(fee.getId());
        response.setStudentId(student.getId());

        response.setStudentName(
                student.getFirstName() + " "
                + student.getLastName()
        );

        response.setRollNumber(student.getRollNumber());

        response.setDepartment(
                student.getDepartment().getDeptName()
        );

        response.setSemester(student.getSemester());

        response.setTotalFee(fee.getTotalFee());
        response.setPaidAmount(fee.getPaidAmount());
        response.setPendingAmount(fee.getPendingAmount());

        response.setPaymentStatus(
                fee.getPaymentStatus().name()
        );

        response.setPaymentDate(fee.getPaymentDate());
        response.setRemarks(fee.getRemarks());

        return response;
    }
}