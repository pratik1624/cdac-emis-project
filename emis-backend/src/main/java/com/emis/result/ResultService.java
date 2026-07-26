package com.emis.result;

import com.emis.result.dto.ResultResponse;

import java.util.List;

public interface ResultService {

    List<ResultResponse> getResults(Long studentId);

}