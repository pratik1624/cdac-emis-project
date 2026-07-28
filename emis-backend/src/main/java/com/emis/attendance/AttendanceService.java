package com.emis.attendance;

import com.emis.attendance.dto.AttendanceResponse;

import java.util.List;

public interface AttendanceService {

    List<AttendanceResponse> getAttendance();

}
