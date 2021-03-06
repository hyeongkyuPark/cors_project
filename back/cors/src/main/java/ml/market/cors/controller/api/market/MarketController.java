package ml.market.cors.controller.api.market;

import lombok.RequiredArgsConstructor;
import ml.market.cors.domain.market.entity.dto.MarketApproveStatusUpdateDTO;
import ml.market.cors.domain.market.entity.dto.MarketViewDTO;
import ml.market.cors.domain.market.enums.MarketKey;
import ml.market.cors.domain.market.service.MarketService;
import ml.market.cors.domain.market.entity.vo.MarketApproveListVO;
import ml.market.cors.domain.security.member.JwtCertificationToken;
import ml.market.cors.domain.util.Message;
import ml.market.cors.domain.util.ResponseEntityUtils;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;
import java.util.List;

@RestController
@RequestMapping("/api/market")
@RequiredArgsConstructor
public class MarketController {
    private final ResponseEntityUtils responseEntityUtils;

    private final MarketService marketService;

    @GetMapping("/approve/list")
    @Secured("ROLE_ADMIN")
    public ResponseEntity<Message<Object>> getApproveList(@RequestParam("page") int pageIndex){
        List<MarketApproveListVO> marketList = marketService.list(pageIndex);
        ResponseEntity<Message<Object>> messageResponseEntity = responseEntityUtils.getMessageResponseEntityOK(marketList);
        return messageResponseEntity;
    }

    @PutMapping("/approve/update")
    @Secured("ROLE_ADMIN")
    public ResponseEntity<Message<Object>> update(@ModelAttribute MarketApproveStatusUpdateDTO marketApproveStatusUpdateDTO, @AuthenticationPrincipal JwtCertificationToken jwtCertificationToken){
        ResponseEntity<Message<Object>> messageResponseEntity = null;
        boolean bResult = marketService.updateStatus(marketApproveStatusUpdateDTO);
        if(!bResult){
            messageResponseEntity = responseEntityUtils.getMessageResponseEntityBadRequest("상태 수정 실패");
        } else{
            messageResponseEntity = responseEntityUtils.getMessageResponseEntityOK("상태 수정 성공");
        }
        return messageResponseEntity;
    }

    @PostMapping("/view")
    public ResponseEntity<Message<Object>> view(@RequestParam("marketId") long marketId, @RequestParam("page") int pageIndex){
        MarketViewDTO marketViewDTO = marketService.view(marketId, pageIndex);
        ResponseEntity<Message<Object>> messageResponseEntity = responseEntityUtils.getMessageResponseEntityOK(marketViewDTO);
        return messageResponseEntity;
    }


    @PutMapping("/update")
    public ResponseEntity<Message<Object>> updateMyMarket(@RequestParam Map<MarketKey, Object> marketInfo, @AuthenticationPrincipal JwtCertificationToken jwtCertificationToken
    ,@RequestPart(value = "image", required = false) MultipartFile imageFile){
        ResponseEntity<Message<Object>> messageResponseEntity = null;
        String email = jwtCertificationToken.getName();
        long memberId = (long)jwtCertificationToken.getCredentials();
        try{
            boolean bResult = marketService.updateMyMarket(marketInfo, email, memberId, imageFile);
            if(!bResult){
                throw new RuntimeException();
            }
            messageResponseEntity = responseEntityUtils.getMessageResponseEntityOK("변경 성공");
        }catch (Exception e){
            messageResponseEntity = responseEntityUtils.getMessageResponseEntityBadRequest("변경 실패");
        }
        return messageResponseEntity;
    }

    @PostMapping("/save")
    public ResponseEntity<Message<Object>> requestRegisterMarket(@RequestParam Map<MarketKey, Object> marketInfo, @AuthenticationPrincipal JwtCertificationToken jwtCertificationToken
    , @RequestPart("image") MultipartFile imageFile){
        ResponseEntity<Message<Object>> messageResponseEntity = null;
        String email = jwtCertificationToken.getName();
        long memberId = (long)jwtCertificationToken.getCredentials();
        try{
            boolean bResult = marketService.save(marketInfo, email, memberId, imageFile);
            if(!bResult){
                throw new RuntimeException();
            }
        }catch (Exception e){
            messageResponseEntity = responseEntityUtils.getMessageResponseEntityBadRequest("마켓 승인 요청 실패");
        }
        return messageResponseEntity;
    }

    @PostMapping("/delete")
    @Secured("ROLE_CEO")
    public ResponseEntity<Message<Object>> delete(HttpServletResponse response, HttpServletRequest request, @RequestParam("marketId") long marketId, @AuthenticationPrincipal JwtCertificationToken jwtCertificationToken){
        long memberId = (long)jwtCertificationToken.getCredentials();
        String email = jwtCertificationToken.getName();
        boolean bResult = marketService.delete(email, marketId, memberId, response, request);
        ResponseEntity<Message<Object>> messageResponseEntity;
        if(!bResult){
            messageResponseEntity = responseEntityUtils.getMessageResponseEntityBadRequest("삭제 실패");
        } else{

            messageResponseEntity = responseEntityUtils.getMessageResponseEntityOK("삭제 성공");
        }

        return messageResponseEntity;
    }
}
