package com.emis.notices;

import com.emis.common.BaseEntity;
import jakarta.persistence.AttributeOverride;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "notices")
@AttributeOverride(name = "Id" , column = @Column(name = "notice_id"))
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@AttributeOverride(name = "Id" , column = @Column(name = "notice_id"))
public class Notices extends BaseEntity {

    @Column(length = 50)
    private String title;
    private String description;
    @Column(name = "public_date" , nullable = false)
    private LocalDate publishDate;

}
