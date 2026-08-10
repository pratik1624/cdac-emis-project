package com.emis.admin;
import com.emis.admin.AdminService;
import com.emis.admin.dto.AdminDashboardResponse;
import com.emis.department.DepartmentService;
import com.emis.faculty.FacultyService;
import com.emis.notices.NoticeService;
import com.emis.student.StudentService;
import com.emis.subject.SubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {

    private final StudentService studentService;
    private final FacultyService facultyService;
    private final DepartmentService departmentService;
    private final SubjectService subjectService;
    private final NoticeService noticeService;

    @Override
    public AdminDashboardResponse getDashboardData() {

        AdminDashboardResponse response = new AdminDashboardResponse();

        response.setTotalStudents(studentService.countStudents());

        response.setTotalFaculty(facultyService.countFaculty());

        response.setTotalDepartments(departmentService.countDepartments());

        response.setTotalSubjects(subjectService.countSubjects());

        response.setRecentNotices(
                noticeService.getAllNotices()
        );

        return response;
    }
}