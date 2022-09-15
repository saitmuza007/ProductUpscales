package  com.muzz.upscaleproductdevelopmentagency.model;;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name="quotation")
public class Quotation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="name",nullable = false)
    private String name;
    @Column(name="description",nullable = false)
    private String desc;
    @Column(name="price",nullable = false)
    private Double price;
    @Column(name="type",nullable = false)
    private  String type;
    @Column(name="timeofdelivery",nullable = false)
    private Double tdelivery;
    @Column(name="clientname",nullable = false)
    private String cname;

    @Column(name = "create_time", nullable = false)
    private LocalDateTime createTime;




}
