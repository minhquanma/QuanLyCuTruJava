package com.mmq.QuanLyCuTru.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CHUCVUS")
public class ChucVu {
    @Id
    @Column(name = "Id")
    private int id;

    @Column(name = "Ten")
    private String ten;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public ChucVu() {
    }

    public ChucVu(int id, String ten) {
        this.id = id;
        this.ten = ten;
    }
}
