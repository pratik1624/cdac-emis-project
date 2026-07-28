package com.emis.attendance;

import com.emis.attendance.dto.AttendanceRequest;
import com.emis.attendance.dto.AttendanceResponse;
import com.emis.common.ApiResp;

import java.util.List;

public interface AttendanceService {

    List<AttendanceResponse> getAttendance(Long studentId);


    ApiResp uploadAttendance(AttendanceRequest request);
}
