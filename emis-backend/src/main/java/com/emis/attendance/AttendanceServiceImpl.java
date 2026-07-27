package com.emis.attendance;


import com.emis.attendance.dto.AttendanceResponse;
import com.emis.customexception.ResourceNotFoundException;
import com.emis.student.Student;
import com.emis.student.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class AttendanceServiceImpl implements AttendanceService {

    private final AttendanceRepository attendanceRepository;
    private final StudentRepository studentRepository;

    @Override
    public List<AttendanceResponse> getAttendance() {

        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        Student student = studentRepository
                .findByUserDetailsEmail(email)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Student Not Found"));

        List<Attendance> attendanceList =
                attendanceRepository.findByStudentId(student.getId());

        return attendanceList.stream().map(attendance -> {

            AttendanceResponse dto = new AttendanceResponse();

            dto.setSubjectCode(attendance.getSubject().getSubjectCode());
            dto.setSubjectName(attendance.getSubject().getSubjectName());

            dto.setTotalClasses(attendance.getTotalClasses());
            dto.setAttendedClasses(attendance.getAttendedClasses());

            dto.setAttendancePercentage(
                    attendance.getAttendedClasses() * 100.0
                            / attendance.getTotalClasses());

            return dto;

        }).toList();
    }
}