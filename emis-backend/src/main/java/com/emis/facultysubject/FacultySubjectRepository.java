package com.emis.facultysubject;

import com.emis.faculty.Faculty;
import com.emis.subject.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FacultySubjectRepository extends JpaRepository<FacultySubject , Long> {

    List<FacultySubject> findBySubjectId(Long subjectId);
    List<FacultySubject> findByFacultyId(Long facultyId);
}
