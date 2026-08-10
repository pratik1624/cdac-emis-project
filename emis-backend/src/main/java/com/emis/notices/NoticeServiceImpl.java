package com.emis.notices;

import com.emis.customexception.ResourceNotFoundException;
import com.emis.common.ApiResp;
import com.emis.notices.dto.NoticeRequest;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class NoticeServiceImpl implements NoticeService{

    private final NoticeRepository noticeRepository;
    private final ModelMapper mapper;

    //ADD
    @Override
    public ApiResp addNotice(NoticeRequest request) {
       Notices notice = mapper.map(request , Notices.class);
       noticeRepository.save(notice);
       return new ApiResp("SUCCESS" , "Notice Added.....");
    }

    //GET ALL
    @Override
    public List<NoticeRequest> getAllNotices() {

        List<NoticeRequest> dtoList = new ArrayList<>();

        List<Notices> dbNotices =
                noticeRepository.findTop5ByOrderByPublishDateDesc();

        for (Notices notice : dbNotices) {
            NoticeRequest dto = new NoticeRequest();
            mapper.map(notice, dto);
            dtoList.add(dto);
        }

        return  dtoList;
        //-----------Better code using Stream Programing-----------------
         /*
        @Override
        public List<NoticeDto> getAllNotices() {

            return noticeRepository.findAll()
            .stream()
            .map(notice -> mapper.map(notice, NoticeDto.class))
            .toList();
        }
         */

    }

    //GET BY ID
    @Override
    public NoticeRequest getNoticeById(Long id) {
        Notices dbNotice = noticeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Notice Not Found......"));
        return new NoticeRequest(dbNotice.getId(), dbNotice.getTitle(),dbNotice.getDescription(),dbNotice.getPublishDate());
    }

    //UPDATE NOTICE BY ID
    @Override
    public ApiResp updateNotice(Long id, NoticeRequest updateRequest) {
        Notices dbNotice = noticeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Notice Not Found....."));
        dbNotice.setTitle(updateRequest.getTitle());
        dbNotice.setDescription(updateRequest.getDescription());
        dbNotice.setPublishDate(updateRequest.getPublishDate());
        noticeRepository.save(dbNotice);
        return new ApiResp("SUCCESS","Notice Updated Successfully........");
    }

    //DELETE BY ID
    @Override
    public ApiResp deleteNotice(Long id) {
        Notices dbNotice = noticeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Notice Not Found....."));
        noticeRepository.delete(dbNotice);
        return new ApiResp("SUCCESS" , "Notice Deleted Successfully........");
    }


}
