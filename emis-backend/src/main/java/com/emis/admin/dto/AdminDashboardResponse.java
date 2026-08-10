package com.emis.admin.dto;

import com.emis.notices.dto.NoticeRequest;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdminDashboardResponse {

    private Long totalStudents;
    private Long totalFaculty;
    private Long totalDepartments;
    private Long totalSubjects;

    private List<NoticeRequest> recentNotices;
}