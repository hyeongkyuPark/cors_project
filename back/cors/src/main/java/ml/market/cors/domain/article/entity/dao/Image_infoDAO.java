package ml.market.cors.domain.article.entity.dao;

import lombok.Getter;
import lombok.NoArgsConstructor;
import ml.market.cors.domain.article.entity.enums.Division;

import javax.persistence.*;

@Entity
@Table(name = "image_info")
@NoArgsConstructor
@Getter
public class Image_infoDAO {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "index_id")
    private Long index_id;

    private String image1;
    private String image2;
    private String image3;

    @Enumerated(EnumType.STRING)
    private Division division;

    public Image_infoDAO(String image1, String image2, String image3, Division division) {
        this.image1 = image1;
        this.image2 = image2;
        this.image3 = image3;
        this.division = division;
    }

    public void update_Image_info(String image2,String image3,Division division){
        this.image2=image2;
        this.image3=image3;
        this.division=division;
    }
}