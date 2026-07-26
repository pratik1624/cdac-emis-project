package com.emis.notices;

import com.emis.common.ApiResp;
import com.emis.notices.dto.NoticeDto;

import java.util.List;

public interface NoticeService {

    ApiResp addNotice(NoticeDto request);

    List<NoticeDto> getAllNotices();

    NoticeDto getNoticeById(Long id);

    ApiResp updateNotice(Long id, NoticeDto updateRequest);

    ApiResp deleteNotice(Long id);
}
