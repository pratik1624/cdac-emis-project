package com.emis.result;


import com.emis.customexception.ResourceNotFoundException;
import com.emis.result.dto.ResultResponse;
import com.emis.student.Student;
import com.emis.student.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ResultServiceImpl implements ResultService {

    private final ResultRepository resultRepository;
    private final ModelMapper mapper;
    private final StudentRepository studentRepository;
    @Override
    public List<ResultResponse> getResults() {

        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        Student student = studentRepository
                .findByUserDetailsEmail(email)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Student Not Found"));

        List<Result> results = resultRepository.findByStudentId(student.getId());

        return results.stream().map(result -> {

            ResultResponse dto = new ResultResponse();

            dto.setSubjectCode(result.getSubject().getSubjectCode());

            dto.setSubjectName(result.getSubject().getSubjectName());

            dto.setObtainedMarks(result.getObtainedMarks());

            dto.setTotalMarks(result.getTotalMarks());

            dto.setGrade(result.getGrade());

            return dto;

        }).toList();
    }
}
