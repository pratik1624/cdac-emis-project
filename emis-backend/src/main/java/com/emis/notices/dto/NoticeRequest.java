package com.emis.notices.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class NoticeRequest {

    private Long id;
    private String title;
    private String description;
    private LocalDate publishDate;
}
