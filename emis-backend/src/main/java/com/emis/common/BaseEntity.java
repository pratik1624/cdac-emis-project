package com.emis.common;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Data
@MappedSuperclass
public class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY	)
    private Long Id;

    @CreationTimestamp
    private LocalDateTime CreatedAt;

    @CreationTimestamp
    private LocalDateTime UpdatedAt;
}
