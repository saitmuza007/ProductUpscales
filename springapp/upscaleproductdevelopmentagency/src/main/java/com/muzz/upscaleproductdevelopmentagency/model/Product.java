package com.muzz.upscaleproductdevelopmentagency.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;


@Data
@Entity
@Table(name = "product")
public class Product
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;



    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "link", nullable = false)
    private String link;
    @Column(name = "type", nullable = false)
    private String type;

    @Column(name = "price", nullable = false)
    private Double price;


    @Column(name = "create_time", nullable = false)
    private LocalDateTime createTime;

    //@OneToMany(fetch = FetchType.LAZY, mappedBy = "product")
    //private Set<Purchase> purchaseList;
}
