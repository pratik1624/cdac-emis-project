package com.emis.faculty;

import com.emis.faculty.Faculty;
import com.emis.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FacultyRepository extends JpaRepository<Faculty , Long> {

    Optional<Faculty> findByUserDetailsEmail(String email);
    Optional<Faculty> findByUserDetails(User user);
}
