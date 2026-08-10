package com.emis.subject;

import com.emis.common.BaseEntity;
import com.emis.department.Department;
import com.emis.faculty.Faculty;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "subjects")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//AttributeOverride(name = "Id" , column = @Column(name = "subject_id"))
public class Subject extends BaseEntity {

    @Column(name = "subject_code", nullable = false, unique = true, length = 10)
    private String subjectCode;

    @Column(name = "subject_name", nullable = false, length = 50)
    private String subjectName;

    @Column(nullable = false)
    private Integer semester;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "department_id", nullable = false)
    private Department department;


    @ManyToMany(mappedBy = "mySubjects")
    private List<Faculty> faculties;
}
