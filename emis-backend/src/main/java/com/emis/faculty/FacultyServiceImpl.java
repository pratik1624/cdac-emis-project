package com.emis.faculty;

import com.emis.attendance.dto.LoadStudentRequest;
import com.emis.customexception.ResourceNotFoundException;
import com.emis.common.ApiResp;
import com.emis.department.Department;
import com.emis.department.DepartmentRepository;
import com.emis.faculty.dto.FacultyProfileDto;
import com.emis.faculty.dto.FacultyReq;
import com.emis.faculty.dto.FacultyUpdateDto;
import com.emis.student.Student;
import com.emis.student.StudentRepository;
import com.emis.student.dto.LoadStudentForAttendanceDto;
import com.emis.student.dto.StudentProfileResponse;
import com.emis.user.User;
import com.emis.user.UserRole;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
        dbFaculty.getAssignedDepartment().setDeptName(updateRequest.getDepartment());

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

    //----------------------------------------------FACULTY-------------------------------------------
    @Override
    public ApiResp updateFacultyProfile(Long id, FacultyUpdateDto facultyUpdateDto) {
       Faculty dbFaculty =  facultyRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Faculty Not Found....."));
       dbFaculty.getUserDetails().setEmail(facultyUpdateDto.getEmail());
       dbFaculty.getUserDetails().setMobileNo(facultyUpdateDto.getPhone());
       facultyRepository.save(dbFaculty);
       return new ApiResp("SUCCESS","Updated Successfully.....");
    }

    //--------------------------------------------ATTENDANCE-----------------------------------------------
    //LOADSTUDENTFORATTENDANCE
    @Override
    public List<LoadStudentForAttendanceDto> loadStudentsForAttendance(LoadStudentRequest loadStudentRequest) {
        System.out.println(">>>>>>>inside loadStudentsForAttendance Service");
       String email = SecurityContextHolder.getContext().getAuthentication().getName();
        System.out.println("username" + email);
      Faculty dbFaculty = facultyRepository.findByUserDetailsEmail(email).orElseThrow(() -> new ResourceNotFoundException("Faculty Not Found....."));

       Department department = dbFaculty.getAssignedDepartment();

       List<Student> list = studentRepository.findByDepartmentAndSemester(department,loadStudentRequest.getSemester());
       List<LoadStudentForAttendanceDto> studList = new ArrayList<>();
       for(Student dbStudent : list){
           LoadStudentForAttendanceDto studentDetails = new LoadStudentForAttendanceDto(dbStudent.getId() , dbStudent.getFirstName(),dbStudent.getLastName());
           studList.add(studentDetails);
       }
       return studList;
    }


}
