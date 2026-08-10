package com.emis.faculty;

import com.emis.common.BaseEntity;
import com.emis.department.Department;
import com.emis.common.Gender;
import com.emis.subject.Subject;
import com.emis.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "faculty")
//@AttributeOverride(name = "Id" , column = @Column(name = "faculty_id"))
@NoArgsConstructor
@Getter
@Setter
public class Faculty extends BaseEntity {

    @Column(name = "emp_code" , length = 10 , unique = true)
    String employeeCode;
    @Column(name = "first_name" , length = 10 , nullable = false )
    String firstName;
    @Column(name = "last_name" , length = 20 , nullable = false)
    String lastName;
    @Column(name = "DOB" , nullable = false )
    LocalDate DOB;
    @Column(nullable = false , length = 30)
    String designation;
    @Enumerated(EnumType.STRING)
    Gender gender;
    @Column(name = "joining_date")
    LocalDate joiningDate;
    /*
     faculty 1 -> 1 user
     */
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "faculty_id",nullable = false)
    @MapsId
    User userDetails;
     /*
        faculty * -> 1 department
     */

    @ManyToOne
    @JoinColumn(name = "dept_id")
    Department assignedDepartment;

    @ManyToMany
    @JoinTable(
            name = "faculty_subject",
            joinColumns = @JoinColumn(name = "faculty_id"),
            inverseJoinColumns = @JoinColumn(name = "subject_id")
    )
    private List<Subject> mySubjects;

    }
