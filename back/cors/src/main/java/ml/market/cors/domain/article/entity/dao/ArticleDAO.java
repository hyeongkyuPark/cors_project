package ml.market.cors.domain.article.entity.dao;

import lombok.Getter;
import lombok.NoArgsConstructor;
import ml.market.cors.domain.article.entity.enums.Division;
import ml.market.cors.domain.article.entity.enums.Progress;
import ml.market.cors.domain.article.service.ArticleForm;
import ml.market.cors.domain.bookcategory.entity.Book_CategoryDAO;
import ml.market.cors.domain.member.entity.MemberDAO;

import javax.persistence.*;
import java.lang.reflect.Member;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name="article")
@Getter
@NoArgsConstructor
public class ArticleDAO {
    @Id
    @Column(name = "article_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long article_id;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "count_id")
    private CountDAO countDAO;

    @Column(name = "content")
    private String content;

    @Column(name = "title")
    private String title;

    @Column(name = "rprice")
    private int rprice;

    @Column(name = "write_date")
    private LocalDateTime write_date;

    @Enumerated(EnumType.STRING)
    @Column(name = "progress")
    private Progress progress;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="cid")
    private Book_CategoryDAO category;

    @Column(name = "tprice")
    private int tprice;

    @Enumerated(EnumType.STRING)
    private Division division;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "member_id")
    private MemberDAO member;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "index_id")
    private Image_infoDAO image_info;

    public ArticleDAO(CountDAO countDAO, String content, int rprice, LocalDateTime write_date,
                      Progress progress, int tprice, Division division,
                      Image_infoDAO image_info,String title,MemberDAO memberDAO) {
        this.countDAO = countDAO;
        this.content = content;
        this.rprice = rprice;
        this.write_date = write_date;
        this.progress = progress;
        this.tprice = tprice;
        this.division = division;
        this.member = member;
        this.image_info=image_info;
        this.title=title;
        this.member=memberDAO;
    }

    public static ArticleDAO createArticleForm(ArticleForm articleForm, MemberDAO member){
        return new ArticleDAO(
                new CountDAO(), articleForm.getContent(),
                articleForm.getRprice(), LocalDateTime.now(),
                articleForm.getProgress(), articleForm.getTprice(),
                articleForm.getDivision(),
                new Image_infoDAO(articleForm.getImage1(), articleForm.getImage2(), articleForm.getImage3(), articleForm.getDivision()),
                articleForm.getTitle(),member);
    }

    public ArticleDAO updateArticle(ArticleForm articleForm,Image_infoDAO image_info) {
        this.content = articleForm.getContent();
        this.progress = articleForm.getProgress();
        this.tprice = articleForm.getTprice();
        this.division = articleForm.getDivision();
        this.image_info=image_info;
        return this;
    }

    public Progress updateProgress(Progress progress){
        this.progress=progress;
        return this.getProgress();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ArticleDAO that = (ArticleDAO) o;
        return getRprice() == that.getRprice() && getTprice() == that.getTprice() && Objects.equals(getArticle_id(), that.getArticle_id()) && Objects.equals(getContent(), that.getContent()) && getProgress() == that.getProgress() && getDivision() == that.getDivision();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getArticle_id(), getContent(), getRprice(), getProgress(), getTprice(), getDivision());
    }
}