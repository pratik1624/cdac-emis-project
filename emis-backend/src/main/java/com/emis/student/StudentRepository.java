package com.emis.student;

import com.emis.department.Department;
import com.emis.student.dto.StudentProfileResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {

    List<Student> findByDepartmentAndSemester(Long department , Integer semester);
    Optional<Student> findByUserDetailsEmail(String email);
    List<Student> findByDepartmentId(Long id);


    @Query("""
            SELECT s
            FROM Student s
            JOIN FETCH s.department
            WHERE s.Id = :studentId
        """)
    Optional<Student> findByIdWithDepartment(
            @Param("studentId") Long studentId);
}



