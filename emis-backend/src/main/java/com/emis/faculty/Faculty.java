package com.emis.faculty;

import com.emis.common.BaseEntity;
import com.emis.common.Gender;
import com.emis.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "faculty")
//@AttributeOverride(name = "Id" , column = @Column(name = "faculty_id"))
@NoArgsConstructor
@Getter
@Setter
public class Faculty extends BaseEntity {

    @Column(name = "emp_code")
    String employeeCode;
    @Column(name = "first_name")
    String firstName;
    @Column(name = "last_name")
    String lastName;
    @Column(name = "DOB")
    LocalDate DOB;
    @Column(nullable = false)
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

//    @ManyToOne
//    @JoinColumn(name = "dept_id")
//    Department assignedDepartment;

    }
