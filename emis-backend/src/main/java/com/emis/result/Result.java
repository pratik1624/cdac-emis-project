package com.emis.result;


import com.emis.common.BaseEntity;
import com.emis.student.Student;
import com.emis.subject.Subject;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "results")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
//@AttributeOverride(name = "Id" , column = @Column(name = "result_id"))
public class Result extends BaseEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "subject_id", nullable = false)
    private Subject subject;

    @Column(nullable = false)
    private Integer totalMarks;

    @Column(nullable = false)
    private Integer obtainedMarks;

    @Column(nullable = false)
    private String grade;
}