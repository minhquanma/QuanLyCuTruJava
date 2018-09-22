package com.mmq.QuanLyCuTru.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "NGUOIDUNGS")
public class NguoiDung {
    @Id
    @SequenceGenerator(name="NguoiDungs_Id", sequenceName="NguoiDungs_Id_SEQ")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "NguoiDungs_Id")
    @Column(name = "Id")
    private int id;

    @Column(name = "HoTen")
    private String hoTen;

    @Column(name = "GioiTinh")
    private boolean gioiTinh;

    @Column(name = "SinhNhat")
    private Date sinhNhat;

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

    private String noiSinh;

    private String queQuan;

    private String quocTich;

    private String avatar;

    private String identityId;

    private int chucVuId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHoTen() {
        return hoTen;
    }

    public void setHoTen(String hoTen) {
        this.hoTen = hoTen;
    }

    public boolean isGioiTinh() {
        return gioiTinh;
    }

    public void setGioiTinh(boolean gioiTinh) {
        this.gioiTinh = gioiTinh;
    }

    public Date getSinhNhat() {
        return sinhNhat;
    }

    public void setSinhNhat(Date sinhNhat) {
        this.sinhNhat = sinhNhat;
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

    public String getNoiSinh() {
        return noiSinh;
    }

    public void setNoiSinh(String noiSinh) {
        this.noiSinh = noiSinh;
    }

    public String getQueQuan() {
        return queQuan;
    }

    public void setQueQuan(String queQuan) {
        this.queQuan = queQuan;
    }

    public String getQuocTich() {
        return quocTich;
    }

    public void setQuocTich(String quocTich) {
        this.quocTich = quocTich;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getIdentityId() {
        return identityId;
    }

    public void setIdentityId(String identityId) {
        this.identityId = identityId;
    }

    public int getChucVuId() {
        return chucVuId;
    }

    public void setChucVuId(int chucVuId) {
        this.chucVuId = chucVuId;
    }

    public NguoiDung() {}
    public NguoiDung(int id, String hoTen, boolean gioiTinh, Date sinhNhat, String soNha, String duong, String phuong, String quan, String thanhPho, String noiSinh, String queQuan, String quocTich, String avatar, String identityId, int chucVuId) {
        this.id = id;
        this.hoTen = hoTen;
        this.gioiTinh = gioiTinh;
        this.sinhNhat = sinhNhat;
        this.soNha = soNha;
        this.duong = duong;
        this.phuong = phuong;
        this.quan = quan;
        this.thanhPho = thanhPho;
        this.noiSinh = noiSinh;
        this.queQuan = queQuan;
        this.quocTich = quocTich;
        this.avatar = avatar;
        this.identityId = identityId;
        this.chucVuId = chucVuId;
    }
}
