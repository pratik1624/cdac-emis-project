package com.emis.accountant;


import com.emis.common.BaseEntity;
import com.emis.user.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "accountants")
@Getter
@Setter
@NoArgsConstructor
@ToString(callSuper = true, exclude = "userDetails")
public class Accountant extends BaseEntity {

    @Column(name = "first_name", length = 30, nullable = false)
    private String firstName;

    @Column(name = "last_name", length = 30, nullable = false)
    private String lastName;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User userDetails;
}