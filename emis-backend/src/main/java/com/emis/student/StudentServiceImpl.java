package com.emis.student;


import com.emis.customexception.ResourceNotFoundException;
import com.emis.student.dto.StudentProfileResponse;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final StudentRepository studentRepository;
    private final ModelMapper mapper;

    @Override
    public StudentProfileResponse getStudentDetails(Long studentId) {

        Student student = studentRepository.findById(studentId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Invalid Student ID"));

        StudentProfileResponse response =
                mapper.map(student, StudentProfileResponse.class);

        // email comes from User
        response.setEmail(student.getUserDetails().getEmail());

        return response;
    }
}
