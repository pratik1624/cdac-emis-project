package com.emis.result;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ResultRepository extends JpaRepository<Result, Long> {

    List<Result> findByStudentId(Long studentId);

    List<Result> findBySubjectId(Long subjectId);

    Optional<Result> findBySubjectIdAndStudentId(Long subjectId, Long id);
}
