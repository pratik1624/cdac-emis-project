package com.emis.attendance;


import com.emis.attendance.dto.AttendanceResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class AttendanceServiceImpl implements AttendanceService {

    private final AttendanceRepository attendanceRepository;

    @Override
    public List<AttendanceResponse> getAttendance(Long studentId) {

        List<Attendance> attendanceList =
                attendanceRepository.findByStudentId(studentId);

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