package com.emis.faculty;

import com.emis.faculty.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FacultyRepository extends JpaRepository<Faculty , Long> {

    Optional<Faculty> findByUserDetailsEmail(String email);
}
