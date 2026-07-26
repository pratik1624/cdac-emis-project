package com.emis.result;


import com.emis.result.dto.ResultResponse;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ResultServiceImpl implements ResultService {

    private final ResultRepository resultRepository;
    private final ModelMapper mapper;

    @Override
    public List<ResultResponse> getResults(Long studentId) {

        List<Result> results = resultRepository.findByStudentId(studentId);

        return results.stream()
                .map(result -> mapper.map(result, ResultResponse.class))
                .toList();
    }
}
