package com.emis.fee;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FeeRepository extends JpaRepository<Fee, Long> {

    Optional<Fee> findByStudent_Id(Long studentId);

    boolean existsByStudent_Id(Long studentId);

    // ==========================================
    // Total Collected
    // ==========================================

    @Query("""
            SELECT COALESCE(SUM(f.paidAmount), 0)
            FROM Fee f
            """)
    BigDecimal getTotalCollected();

    // ==========================================
    // Total Pending
    // ==========================================

    @Query("""
            SELECT COALESCE(SUM(f.pendingAmount), 0)
            FROM Fee f
            """)
    BigDecimal getTotalPending();

    // ==========================================
    // Students With Dues
    // ==========================================

    @Query("""
            SELECT COUNT(f)
            FROM Fee f
            WHERE f.pendingAmount > 0
            """)
    long countStudentsWithDues();

    // ==========================================
    // Recent Payments
    // ==========================================

    List<Fee> findTop5ByPaymentDateIsNotNullOrderByPaymentDateDesc();
}