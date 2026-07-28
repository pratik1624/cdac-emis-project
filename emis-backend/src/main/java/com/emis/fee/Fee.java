package com.emis.fee;



import java.time.LocalDate;

import com.emis.common.BaseEntity;
import com.emis.student.Student;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Fee extends BaseEntity {

    @OneToOne
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    private Double totalFee;

    private Double paidAmount;

    private Double remainingAmount;

    @Enumerated(EnumType.STRING)
    private FeeStatus status;

    private LocalDate paymentDate;

}