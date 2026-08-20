package com.emis.accountant;

import java.util.List;

import org.springframework.stereotype.Service;

import com.emis.accountant.dto.AccountantDashboardResponse;
import com.emis.accountant.dto.RecentPaymentResponse;
import com.emis.fee.Fee;
import com.emis.fee.FeeRepository;
import com.emis.user.User;
import com.emis.user.UserRepository;
import com.emis.student.StudentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AccountantServiceImpl implements AccountantService {

    private final AccountantRepository accountantRepository;

    private final UserRepository userRepository;

    private final StudentRepository studentRepository;

    private final FeeRepository feeRepository;

    // ==========================================
    // CREATE ACCOUNTANT
    // ==========================================

    @Override
    public Accountant createAccountant(Accountant accountant) {

        // Only one Accountant is allowed
        if (accountantRepository.count() > 0) {
            throw new RuntimeException("Accountant already exists");
        }

        // Get existing User
        Long userId = accountant
                .getUserDetails()
                .getId();

        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        // Make sure the User is an Accountant
        if (user.getRole() != com.emis.user.UserRole.ACCOUNTANT) {
            throw new RuntimeException(
                    "User does not have ACCOUNTANT role");
        }

        // Attach existing User
        accountant.setUserDetails(user);

        return accountantRepository.save(accountant);
    }

    // ==========================================
    // GET ACCOUNTANT
    // ==========================================

    @Override
    public Accountant getAccountant() {

        return accountantRepository.findAll()
                .stream()
                .findFirst()
                .orElseThrow(() ->
                        new RuntimeException(
                                "Accountant not found"));
    }

    // ==========================================
    // ACCOUNTANT DASHBOARD
    // ==========================================

    @Override
    public AccountantDashboardResponse getDashboard() {

        // Total students
        long totalStudents =
                studentRepository.count();

        // Total collected
        var totalCollected =
                feeRepository.getTotalCollected();

        // Total pending
        var totalPending =
                feeRepository.getTotalPending();

        // Students with dues
        long studentsWithDues =
                feeRepository.countStudentsWithDues();

        // Recent payments
        List<RecentPaymentResponse> recentPayments =
                feeRepository
                        .findTop5ByPaymentDateIsNotNullOrderByPaymentDateDesc()
                        .stream()
                        .map(this::mapRecentPayment)
                        .toList();

        return new AccountantDashboardResponse(
                totalStudents,
                totalCollected,
                totalPending,
                studentsWithDues,
                recentPayments
        );
    }

    // ==========================================
    // MAP RECENT PAYMENT
    // ==========================================

    private RecentPaymentResponse mapRecentPayment(
            Fee fee) {

        var student = fee.getStudent();

        String studentName =
                student.getFirstName()
                + " "
                + student.getLastName();

        return new RecentPaymentResponse(
                student.getId(),
                studentName,
                fee.getPaidAmount(),
                fee.getPaymentDate(),
                fee.getPaymentStatus().name()
        );
    }
}