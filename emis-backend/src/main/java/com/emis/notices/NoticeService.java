package com.emis.notices;

import com.emis.common.ApiResp;
import com.emis.notices.dto.NoticeRequest;

import java.util.List;

public interface NoticeService {

    ApiResp addNotice(NoticeRequest request);

    List<NoticeRequest> getAllNotices();

    NoticeRequest getNoticeById(Long id);

    ApiResp updateNotice(Long id, NoticeRequest updateRequest);

    ApiResp deleteNotice(Long id);

//    List<RecentNoticeDto> getRecentNotices();
}
