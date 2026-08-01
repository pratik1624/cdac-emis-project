package com.emis.fee;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FeeRepository extends JpaRepository<Fee, Long> {

    Optional<Fee> findByStudentId(Long studentId);

    boolean existsByStudentId(Long studentId);

}