package com.emis.notices;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NoticeRepository extends JpaRepository<Notices,Long> {

    List<Notices> findTop5ByOrderByPublishDateDesc();
}

