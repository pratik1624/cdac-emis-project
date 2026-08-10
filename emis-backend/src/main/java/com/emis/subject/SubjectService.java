package com.emis.subject;

import com.emis.common.ApiResp;
import com.emis.subject.dto.SubjectRequest;
import com.emis.subject.dto.SubjectResponse;

import java.util.List;

public interface SubjectService {

    ApiResp addSubject(
            SubjectRequest request);

    List<SubjectResponse> getAllSubjects();

    ApiResp updateSubject(
            Long id,
            SubjectRequest request);

    ApiResp deleteSubject(Long id);

    long countSubjects();
}