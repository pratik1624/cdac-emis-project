package com.emis.faculty;

import com.emis.faculty.Faculty;
import com.emis.subject.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface FacultyRepository extends JpaRepository<Faculty , Long> {

    Optional<Faculty> findByUserDetailsEmail(String email);
    Optional<Faculty> findByIdAndMySubjects_Id(Long facultyId , Long subjectId);
}
