package com.mmq.QuanLyCuTru.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "LOAICUTRUS")
public class LoaiCuTru {
    @Id
    @Column(name = "Id")
    private int id;

    @Column(name = "Ten")
    private String Ten;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTen() {
        return Ten;
    }

    public void setTen(String ten) {
        Ten = ten;
    }

    public LoaiCuTru() {
    }

    public LoaiCuTru(int id, String ten) {
        this.id = id;
        Ten = ten;
    }
}

