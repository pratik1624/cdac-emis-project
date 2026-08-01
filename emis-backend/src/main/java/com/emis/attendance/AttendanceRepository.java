package com.emis.attendance;

import com.emis.student.Student;
import com.emis.subject.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AttendanceRepository
        extends JpaRepository<Attendance, Long> {

    List<Attendance> findByStudentId(Long studentId);
    Optional<Attendance> findByStudentAndSubject(Student student , Subject subject);

}
