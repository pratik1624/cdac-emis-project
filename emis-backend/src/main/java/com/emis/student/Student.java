package com.emis.student;

import com.emis.common.BaseEntity;
import com.emis.common.Gender;
import com.emis.department.Department;
import com.emis.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "students")
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true, exclude = "userDetails")
public class Student extends BaseEntity {

    @Column(name = "first_name", length = 30, nullable = false)
    private String firstName;

    @Column(name = "last_name", length = 30, nullable = false)
    private String lastName;

    @Column(length = 15)
    private String phone;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Gender gender;

    @Column(length = 100)
    private String address;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id", nullable = false)
    private Department department;

    @Column(nullable = false)
    private Integer semester;

    @Column(nullable = false)
    private String dob;

    @Column(nullable = false)
    private String rollNumber;

    @OneToOne
    @JoinColumn(name = "student_id", nullable = false)
    @MapsId
    private User userDetails;
}

