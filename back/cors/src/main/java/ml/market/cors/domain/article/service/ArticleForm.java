package ml.market.cors.domain.article.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ml.market.cors.domain.article.entity.enums.Division;
import ml.market.cors.domain.article.entity.enums.Progress;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ArticleForm {

    private Long articleId;
    private Long memberId;
    private String image1;
    private String image2;
    private String image3;
    private String content;
    private String title;
    private Long cid;


    private int rprice;

    private LocalDateTime writeDate;

    private Progress progress;

    private int tprice;

    private Division division;


}