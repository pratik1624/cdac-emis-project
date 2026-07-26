package com.emis.faculty;

import com.emis.common.ApiResp;
import com.emis.faculty.dto.FacultyProfileDto;
import com.emis.faculty.dto.FacultyReq;

import java.util.List;

public interface FacultyService {

       FacultyProfileDto getProfile();
       ApiResp addFaculty(FacultyReq request);
       List<FacultyProfileDto> getAllFaculty();
       FacultyProfileDto getFacultyById(Long id);
       ApiResp updateFacultyById(Long id , FacultyProfileDto updateRequest);
       ApiResp deleteFacultyById(Long id);
}
