package com.emis.faculty;

import com.emis.attendance.Attendance;
import com.emis.attendance.AttendanceRepository;
import com.emis.attendance.dto.LoadStudentRequest;
import com.emis.customexception.ResourceNotFoundException;
import com.emis.common.ApiResp;
import com.emis.department.Department;
import com.emis.department.DepartmentRepository;
import com.emis.faculty.dto.*;
import com.emis.notices.NoticeRepository;
import com.emis.notices.Notices;
import com.emis.result.Result;
import com.emis.result.ResultRepository;
import com.emis.security.CustomUserDetails;
import com.emis.student.Student;
import com.emis.student.StudentRepository;
import com.emis.student.dto.LoadStudentForAttendanceDto;
import com.emis.student.dto.StudentRequest;
import com.emis.subject.Subject;
import com.emis.subject.SubjectRepository;
import com.emis.user.User;
import com.emis.user.UserRole;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

//import com.cdac.entities.Department;

@Service
@Transactional
@RequiredArgsConstructor
public class FacultyServiceImpl implements FacultyService {

    private final FacultyRepository facultyRepository;
    private final ModelMapper mapper;
    private final PasswordEncoder encoder;
    private final DepartmentRepository departmentRepository;
    private final StudentRepository studentRepository;
    private final AttendanceRepository attendanceRepository;
    private final ResultRepository resultRepository;
    private final NoticeRepository noticeRepository;



    //----------------------------------------------FACULTY SELF-------------------------------------------
    @Override
    public ApiResp updateFacultyProfile(Long id, FacultyUpdateDto facultyUpdateDto) {
        Faculty dbFaculty =  facultyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Faculty Not Found....."));
        dbFaculty.getUserDetails().setEmail(facultyUpdateDto.getEmail());
        dbFaculty.getUserDetails().setMobileNo(facultyUpdateDto.getPhone());
        facultyRepository.save(dbFaculty);
        return new ApiResp("SUCCESS","Updated Successfully.....");
    }
    //GET PROFILE
    //FACULTY
    @Override
    public FacultyProfileDto getProfile() {
        //geting username(email) from the SecurityContextHolder
        System.out.println(">>>>>>Inside getProfile 1");
       String username = SecurityContextHolder.getContext().getAuthentication().getName();
        System.out.println("Username = " + username);

       Faculty dbfaculty = facultyRepository.findByUserDetailsEmail(username).orElseThrow(() -> new ResourceNotFoundException("Faculty Not Found"));

        System.out.println(">>>>>>Inside getProfile 2");
      FacultyProfileDto dto = mapper.map(dbfaculty, FacultyProfileDto.class);

        System.out.println(">>>>>>Inside getProfile 3");
      dto.setDepartment(dbfaculty.getAssignedDepartment().getDeptName());
        System.out.println(">>>>>>Inside getProfile 4");
      dto.setEmail(dbfaculty.getUserDetails().getEmail());
        System.out.println(">>>>>>Inside getProfile 5");
      dto.setPhone(dbfaculty.getUserDetails().getMobileNo());
      dto.setRole(dbfaculty.userDetails.getRole().name());

      return dto;
    }

    //---------------------------------------ADMIN WORK-------------------------------------------

    //ADD
    //ONLY ADMIN
    @Override
    public ApiResp addFaculty(FacultyReq request) {

        Faculty faculty = mapper.map(request , Faculty.class);

        //userDetails
        faculty.setUserDetails(new User());
        faculty.getUserDetails().setEmail(request.getEmail());
        faculty.getUserDetails().setPassword(encoder.encode(request.getFirstName()));
        faculty.getUserDetails().setMobileNo(request.getPhone());
        faculty.getUserDetails().setRole(UserRole.FACULTY);


        Department department = departmentRepository
                .findByDeptName(request.getDepartment())
                .orElseGet(() -> {
                    Department dept = new Department();
                    dept.setDeptName(request.getDepartment());
                    return departmentRepository.save(dept);
                });

        faculty.setAssignedDepartment(department);
        //departmentDetails;

        //faculty.setAssignedDepartment(new Department());
       // faculty.getAssignedDepartment().setDeptName(request.getDepartment());

        //Add to DB
        facultyRepository.save(faculty);

        return new ApiResp("SUCCESS","Faculty Registered Successfully");

    }

    //GET
    //ONLY ADMIN
    @Override
    public List<FacultyProfileDto> getAllFaculty() {

        List<Faculty> facultyList =  facultyRepository.findAll();

        return facultyList.stream()
                .map(faculty -> {
                    FacultyProfileDto dto = mapper.map(faculty,FacultyProfileDto.class);

                    dto.setEmail(faculty.getUserDetails().getEmail());
                    dto.setPhone(faculty.getUserDetails().getMobileNo());
                    dto.setRole(faculty.getUserDetails().getRole().name());
                    dto.setDepartment(faculty.getAssignedDepartment().getDeptName());

                    return dto;
                }).toList();
    }

    //GET BY ID
    //ONLY ADMIN
    @Override
    public FacultyProfileDto getFacultyById(Long id) {

            Faculty dbfaculty = facultyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Faculty Not exists"));
            FacultyProfileDto dto = mapper.map(dbfaculty , FacultyProfileDto.class);
            dto.setEmail(dbfaculty.getUserDetails().getEmail());
            dto.setPhone(dbfaculty.getUserDetails().getMobileNo());
            dto.setRole(dbfaculty.getUserDetails().getRole().name());
            dto.setDepartment(dbfaculty.getAssignedDepartment().getDeptName());

            return dto;
    }

    //UPDATE BY ID
    //ACCESS BY ADMIN
    @Override
    public ApiResp updateFacultyById(Long id , FacultyProfileDto updateRequest) {

        Faculty dbFaculty = facultyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Faculty of id - " + id + " Not Found" ));
        mapper.map(updateRequest , dbFaculty);
        //userDetails;
        dbFaculty.getUserDetails().setEmail(updateRequest.getEmail());
        dbFaculty.getUserDetails().setMobileNo(updateRequest.getPhone());

        //departmentDetails
      //  MAJOR ISSUE :- Department dept = D -->find dept through db and assign to dbfaculty pending
       Department dbDept = departmentRepository.findByDeptName(updateRequest.getDepartment()).orElseThrow(() -> new ResourceNotFoundException("Not Found"));
       // dbFaculty.getAssignedDepartment().setDeptName(updateRequest.getDepartment());
        dbFaculty.setAssignedDepartment(dbDept);

        facultyRepository.save(dbFaculty);
        return new ApiResp("SUCCESS" , "Faculty Updated Successfully");
    }



    //DELETE BY ID
    //ONLY ADMIN
    @Override
    public ApiResp deleteFacultyById(Long id) {

        Faculty dbFaculty = facultyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Faculty of id - " + id +  "Not Found"));
        facultyRepository.delete(dbFaculty);
        return new ApiResp("SUCCESS" , "Faculty Deleted Successfully");


    }



    //--------------------------------------------ATTENDANCE-----------------------------------------------
    //LOADSTUDENTFORATTENDANCE
    @Override
    public List<LoadStudentForAttendanceDto> loadStudentsForAttendance(LoadStudentRequest loadStudentRequest) {
        System.out.println(">>>>>>>inside loadStudentsForAttendance Service");
       String email = SecurityContextHolder.getContext().getAuthentication().getName();
        System.out.println("username" + email);
      Faculty dbFaculty = facultyRepository.findByUserDetailsEmail(email).orElseThrow(() -> new ResourceNotFoundException("Faculty Not Found....."));

       Long department = dbFaculty.getAssignedDepartment().getId();

       List<Student> list = studentRepository.findByDepartmentAndSemester(department,loadStudentRequest.getSemester());
       List<LoadStudentForAttendanceDto> studList = new ArrayList<>();
       for(Student dbStudent : list){
           LoadStudentForAttendanceDto studentDetails = new LoadStudentForAttendanceDto(dbStudent.getId(),dbStudent.getRollNumber() , dbStudent.getFirstName(),dbStudent.getLastName());
           studList.add(studentDetails);
       }
       return studList;
    }




    //GET PROFILE
    @Override
    public StudentProfileDetails getStudentProfile(Long studentId) {

        Student student = studentRepository.findById(studentId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Student Not Found"));

        StudentRequest studentDto = mapper.map(student, StudentRequest.class);

        studentDto.setDepartment(student.getDepartment().getDeptName());

        studentDto.setEmail(student.getUserDetails().getEmail());

        List<Attendance> attendanceList =
                attendanceRepository.findByStudentId(studentId);

        List<AttendanceSummaryDto> attendanceDtos =
                new ArrayList<>();

        for (Attendance attendance : attendanceList) {

            double percentage =
                    attendance.getTotalClasses() == 0
                            ? 0
                            : (attendance.getAttendedClasses() * 100.0)
                            / attendance.getTotalClasses();

            AttendanceSummaryDto dto =
                    new AttendanceSummaryDto();

            dto.setSubjectName(
                    attendance.getSubject().getSubjectName());

            dto.setAttendedClasses(
                    attendance.getAttendedClasses());

            dto.setTotalClasses(
                    attendance.getTotalClasses());

            dto.setPercentage(
                    Math.round(percentage * 100.0) / 100.0);

            attendanceDtos.add(dto);
        }

        List<Result> resultList =
                resultRepository.findByStudentId(studentId);

        List<ResultResponse> resultDtos =
                new ArrayList<>();

        for (Result result : resultList) {

            ResultResponse dto = new ResultResponse();

            dto.setSubjectName(
                    result.getSubject().getSubjectName());

            dto.setObtainedMarks(
                    result.getObtainedMarks());

            dto.setTotalMarks(
                    result.getTotalMarks());

            dto.setGrade(
                    result.getGrade());

            resultDtos.add(dto);
        }

        StudentProfileDetails response =
                new StudentProfileDetails();

        response.setStudent(studentDto);

        response.setAttendance(attendanceDtos);

        response.setResults(resultDtos);

        return response;
    }

    @Override
    public FacultyDashboardDto getDashboard() {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        Faculty faculty = facultyRepository
                .findByUserDetailsEmail(email)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Faculty Not Found"));

        int totalStudents = studentRepository
                .findByDepartmentId(
                        faculty.getAssignedDepartment().getId()
                )
                .size();

        int totalSubjects = faculty
                .getMySubjects()
                .size();

        int pendingAttendance = 0;

        int pendingResults = 0;

        return new FacultyDashboardDto(

                faculty.getFirstName() + " " + faculty.getLastName(),

                faculty.getEmployeeCode(),

                faculty.getAssignedDepartment().getDeptName(),

                faculty.getUserDetails().getEmail(),

                totalStudents,

                totalSubjects,

                pendingAttendance,

                pendingResults
        );
    }


    //-----29-07-2026
    //my subject backend
    @Override
    public Set<SubjectResponse> getAssignedSubjects() {

        CustomUserDetails userDetails = (CustomUserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
         Long facultyId = userDetails.getUserId();

         Faculty dbFaculty = facultyRepository.findById(facultyId).orElseThrow(() -> new ResourceNotFoundException("Faculty Not Found......"));

         List<Subject> mySubject = dbFaculty.getMySubjects();
         Set<SubjectResponse> response = new HashSet<>();
         for(Subject sub : mySubject){

             SubjectResponse dto = new SubjectResponse(sub.getId(),sub.getSubjectCode(),sub.getSubjectName(),sub.getSemester());
             response.add(dto);
         }
        return response;

    }
    //-----------------------------GET DEPARTMENT STUDENTS BY SEMESTER----------------------------
    @Override
    public List<StudentListDto> getDepartmentStudents(Integer semester) {
        String email = SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();

        Faculty faculty = facultyRepository
                .findByUserDetailsEmail(email)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Faculty not found"));

        Long departmentId = faculty.getAssignedDepartment().getId();

        List<Student> students = studentRepository
                .findByDepartmentAndSemester(departmentId, semester);

        List<StudentListDto> response = new ArrayList<>();

        for (Student student : students) {

            StudentListDto dto = new StudentListDto();
            dto.setStudentId(student.getId());
            dto.setRollNumber(student.getRollNumber());
            dto.setStudentName(
                    student.getFirstName() + " " + student.getLastName());

            dto.setSemester(student.getSemester());

            dto.setEmail(student.getUserDetails().getEmail());

            response.add(dto);
        }

        return response;
    }

    //------------------GET SUBJECT MARKS OF STUDENTS----------------------------
    @Override
    public List<SubjectMarksResponse> getSubjectMarks(Long subjectId) {

      CustomUserDetails userDetails =  (CustomUserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Long facultyId = userDetails.getUserId();

        Faculty dbFaculty = facultyRepository
                .findById(facultyId)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Faculty not found"));
        facultyRepository.findByIdAndMySubjects_Id(facultyId,subjectId).orElseThrow(() -> new ResourceNotFoundException("Subject is not assigned to this faculty"));

        List<Result> results =
                resultRepository.findBySubjectId(subjectId);

        List<SubjectMarksResponse> response =
                new ArrayList<>();

        for(Result result : results){

            Student student = result.getStudent();

            SubjectMarksResponse dto =
                    new SubjectMarksResponse();

            mapper.map(result,dto);
            dto.setResultId(result.getId());
            dto.setRollNumber(result.getStudent().getRollNumber());
            dto.setStudentName(
                    student.getFirstName()
                            +" "
                            +student.getLastName());

            dto.setStudentId(student.getId());

            response.add(dto);
        }

        return response;
    }
    private final SubjectRepository subjectRepository;
    @Override
    public ApiResp saveMarks(Long subjectId, List<MarksRequest> markRequest) {
        Result saveResult;

        Subject subject = subjectRepository.findById(subjectId).orElseThrow(()-> new ResourceNotFoundException("Subject Not Found...."));
        System.out.println("Loop Started");
        for(MarksRequest dto : markRequest){
            System.out.println("Student Id = " + dto.getStudentId());
            Student student = studentRepository.findById(dto.getStudentId()).orElseThrow(() -> new ResourceNotFoundException("Student Not Found...."));

            System.out.println("Student Found");
            Result dbResult = resultRepository.findBySubjectIdAndStudentId(subjectId,student.getId()).orElse(null);
            System.out.println("Result Checked");
            if(dbResult != null){
                saveResult = dbResult;
            }
            else{
                saveResult = new Result();
                saveResult.setSubject(subject);
                saveResult.setStudent(student);
            }

            saveResult.setObtainedMarks(dto.getObtainedMarks());
            saveResult.setTotalMarks(dto.getTotalMarks());


            double percentage  = (dto.getObtainedMarks() * 100) / dto.getTotalMarks();

            if(percentage >= 90)
                saveResult.setGrade("A+");
            else if(percentage >= 80)
                saveResult.setGrade("A");
            else if (percentage >= 70)
                saveResult.setGrade("B+");
            else if (percentage >= 60)
                saveResult.setGrade("B");
            else if (percentage >= 50)
                saveResult.setGrade("C");
            else
                saveResult.setGrade("F");

                resultRepository.save(saveResult);
            }

         return new ApiResp("SUCCESS" , "Marks Uploaded Successfully");
        }

    @Override
    public Long countFaculty() {
        return facultyRepository.count();
    }


    @Override
    public List<Notices> getNotices() {
        return noticeRepository.findAll();
    }


    //ADMIN DASHBOARD


}
