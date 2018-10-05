package com.mmq.QuanLyCuTru.model;


import com.fasterxml.jackson.annotation.JsonInclude;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "CUTRUS")
public class CuTru {
    @Id
    @SequenceGenerator(name="CuTrus_Id", sequenceName="CUTRUS_ID_1SEQ")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "CuTrus_Id")
    @Column(name = "Id")
    private int id;

    @Column(name = "NgayTao")
    @Temporal(TemporalType.TIMESTAMP)
    private Date ngayTao;

    @Column(name = "NgayDangKy")
    @Temporal(TemporalType.TIMESTAMP)
    private Date ngayDangKy;

    @Column(name = "NgayHetHan")
    @Temporal(TemporalType.TIMESTAMP)
    private Date ngayHetHan;

    @Column(name = "Email")
    private String email;

    @Transient
    @JsonInclude
    private String hoTen;

    @Column(name = "DienThoai")
    private String dienThoai;

    @Column(name = "SoNha")
    private String soNha;

    @Column(name = "Duong")
    private String duong;

    @Column(name = "Phuong")
    private String phuong;

    @Column(name = "Quan")
    private String quan;

    @Column(name = "ThanhPho")
    private String thanhPho;

    @Transient
    @JsonInclude
    private String diaChi;

    @Column(name = "DaDuyet")
    private boolean daDuyet;

    @Column(name = "LoaiCuTruId")
    private int loaiCuTruId;

    @Column(name = "CanBoId")
    private Integer canBoId;

    @ManyToMany(cascade = {
            CascadeType.MERGE
    })
    @JoinTable(name = "DANGKYCUTRU",
            joinColumns = @JoinColumn(name = "CuTruId"),
            inverseJoinColumns = @JoinColumn(name = "CongDanId")
    )
    private List<NguoiDung> congDans = new ArrayList<>();

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getNgayTao() {
        return ngayTao;
    }

    public void setNgayTao(Date ngayTao) {
        this.ngayTao = ngayTao;
    }

    public Date getNgayDangKy() {
        return ngayDangKy;
    }

    public void setNgayDangKy(Date ngayDangKy) {
        this.ngayDangKy = ngayDangKy;
    }

    public Date getNgayHetHan() {
        return ngayHetHan;
    }

    public void setNgayHetHan(Date ngayHetHan) {
        this.ngayHetHan = ngayHetHan;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHoTen() {
        if (congDans.size() > 1) {
            return "Nhieu nguoi";
        } else if (congDans.size() == 1) {
            return congDans.get(0).getHoTen();
        }
        return "Khong co";
    }

    public String getDienThoai() {
        return dienThoai;
    }

    public void setDienThoai(String dienThoai) {
        this.dienThoai = dienThoai;
    }

    public String getSoNha() {
        return soNha;
    }

    public void setSoNha(String soNha) {
        this.soNha = soNha;
    }

    public String getDuong() {
        return duong;
    }

    public void setDuong(String duong) {
        this.duong = duong;
    }

    public String getPhuong() {
        return phuong;
    }

    public void setPhuong(String phuong) {
        this.phuong = phuong;
    }

    public String getQuan() {
        return quan;
    }

    public void setQuan(String quan) {
        this.quan = quan;
    }

    public String getThanhPho() {
        return thanhPho;
    }

    public void setThanhPho(String thanhPho) {
        this.thanhPho = thanhPho;
    }

    public String getDiaChi() {
        return String.format("%s %s, Phường %s, Quận %s, %s", soNha, duong, phuong, quan, thanhPho);
    }

    public boolean isDaDuyet() {
        return daDuyet;
    }

    public void setDaDuyet(boolean daDuyet) {
        this.daDuyet = daDuyet;
    }

    public int getLoaiCuTruId() {
        return loaiCuTruId;
    }

    public void setLoaiCuTruId(Integer loaiCuTruId) {
        this.loaiCuTruId = loaiCuTruId;
    }

    public Integer getCanBoId() {
        return canBoId;
    }

    public void setCanBoId(int canBoId) {
        this.canBoId = canBoId;
    }

    public List<NguoiDung> getCongDans() {
        return congDans;
    }

    public void setCongDans(List<NguoiDung> congDans) {
        this.congDans = congDans;
    }

    public CuTru() { }
    public CuTru(int id, Date ngayTao, Date ngayDangKy, Date ngayHetHan, String email, String dienThoai, String soNha, String duong, String phuong, String quan, String thanhPho, boolean daDuyet, int loaiCuTruId, int canBoId) {
        this.id = id;
        this.ngayTao = ngayTao;
        this.ngayDangKy = ngayDangKy;
        this.ngayHetHan = ngayHetHan;
        this.email = email;
        this.dienThoai = dienThoai;
        this.soNha = soNha;
        this.duong = duong;
        this.phuong = phuong;
        this.quan = quan;
        this.thanhPho = thanhPho;
        this.daDuyet = daDuyet;
        this.loaiCuTruId = loaiCuTruId;
        this.canBoId = canBoId;
    }
}
