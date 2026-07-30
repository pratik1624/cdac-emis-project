package com.emis.department;

import com.emis.common.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "departments")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Department extends BaseEntity {

    @Column(name = "department_code", nullable = false, unique = true, length = 10)
    private String departmentCode;

    @Column(name = "department_name", nullable = false, unique = true, length = 100)
    private String deptName;


}

