package com.emis.student;


import com.emis.user.User;
import org.springframework.data.jpa.repository.JpaRepository;


import com.emis.department.Department;
import com.emis.student.dto.StudentProfileResponse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {
    Optional<Student> findByUserDetails(User user);

    List<Student> findByDepartmentAndSemester(Department department , Integer semester);
    Optional<Student> findByUserDetailsEmail(String email);
}



