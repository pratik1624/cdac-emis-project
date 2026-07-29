package com.emis.attendance;


import com.emis.attendance.dto.AttendanceRequest;
import com.emis.attendance.dto.AttendanceResponse;
import com.emis.attendance.dto.StudentAttendanceDto;
import com.emis.common.ApiResp;
import com.emis.customexception.ResourceNotFoundException;
import com.emis.student.Student;
import com.emis.student.StudentRepository;
import com.emis.subject.Subject;
import com.emis.subject.SubjectRepository;
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
    private final SubjectRepository subjectRepository;

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

    @Override
    public ApiResp uploadAttendance(AttendanceRequest request) {

        Subject subject = subjectRepository.findById(request.getSubjectId()).orElseThrow(() -> new ResourceNotFoundException("Subject not found........."));

        for(StudentAttendanceDto dto : request.getStudents()){

            Student student = studentRepository.findById(dto.getStudentId()).orElseThrow(()-> new ResourceNotFoundException("Student Not Found...."));

            Attendance attendance = attendanceRepository.findByStudentAndSubject(student,subject).orElse(null);


            if(attendance == null){
                attendance = new Attendance();
                attendance.setStudent(student);
                attendance.setSubject(subject);
                attendance.setTotalClasses(1);

                attendance.setAttendedClasses(dto.getPresent() ? 1 : 0);


            }
            else{
                if (dto.getPresent()){

                    attendance.setAttendedClasses(attendance.getAttendedClasses()+1);
                }
                attendance.setTotalClasses(attendance.getTotalClasses()+1);

            }

            attendanceRepository.save(attendance);
        }
        return new ApiResp("SUCCESS" , "Attendance Added Successfully....");
    }
}