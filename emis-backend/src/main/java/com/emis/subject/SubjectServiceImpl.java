package com.emis.subject;

import com.emis.common.ApiResp;
import com.emis.department.Department;
import com.emis.department.DepartmentRepository;
import com.emis.subject.dto.SubjectRequest;
import com.emis.subject.dto.SubjectResponse;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SubjectServiceImpl implements SubjectService {

    private final SubjectRepository subjectRepository;
    private final DepartmentRepository departmentRepository;
    private final ModelMapper mapper;

    @Override
    public ApiResp addSubject(
            SubjectRequest request) {

        if (subjectRepository.existsBySubjectCode(
                request.getSubjectCode())) {

            throw new RuntimeException(
                    "Subject already exists.");
        }

        Department department =
                departmentRepository.findByDeptName(
                                request.getDepartment())
                        .orElseThrow(() ->
                                new EntityNotFoundException(
                                        "Department not found"));

        Subject subject =
                mapper.map(request, Subject.class);

        subject.setDepartment(department);

        Subject saved =
                subjectRepository.save(subject);

//        SubjectResponse response = new SubjectResponse();
//
//        response.setId(saved.getId());
//        response.setSubjectCode(saved.getSubjectCode());
//        response.setSubjectName(saved.getSubjectName());
//        response.setSemester(saved.getSemester());
//        response.setDepartment(saved.getDepartment().getDeptName());
//
//        response.setDepartment(
//                saved.getDepartment().getDeptName());

        return new ApiResp("SUCCESS" , "Subject Added Successfully....");
    }


    @Override
    @Transactional(readOnly = true)
    public List<SubjectResponse> getAllSubjects() {

        List<Subject> subjects = subjectRepository.findAll();

        return subjects.stream().map(subject -> {

            SubjectResponse dto = new SubjectResponse();

            dto.setId(subject.getId());
            dto.setSubjectCode(subject.getSubjectCode());
            dto.setSubjectName(subject.getSubjectName());
            dto.setSemester(subject.getSemester());
            dto.setDepartment(subject.getDepartment().getDeptName());

            return dto;

        }).toList();
    }

    @Override
    public ApiResp updateSubject(
            Long id,
            SubjectRequest request) {

        Subject dbSubject =
                subjectRepository.findById(id)

                        .orElseThrow(() ->
                                new EntityNotFoundException(
                                        "Subject not found"));

        Department department =
                departmentRepository.findByDeptName(
                                request.getDepartment())

                        .orElseThrow(() ->
                                new EntityNotFoundException(
                                        "Department not found"));

        mapper.map(request , dbSubject);
        dbSubject.setDepartment(
                department);

        subjectRepository.save(dbSubject);
        return new ApiResp("SUCCESS" , "Updated Successfully");
    }

    @Override
    public ApiResp deleteSubject(Long id) {

        Subject subject =
                subjectRepository.findById(id)

                        .orElseThrow(() ->
                                new EntityNotFoundException(
                                        "Subject not found"));

        subjectRepository.delete(subject);
        return new ApiResp("SUCCESS" , "Subject Deleted...");

    }

    @Override
    public long countSubjects() {

        return subjectRepository.count();

    }

}