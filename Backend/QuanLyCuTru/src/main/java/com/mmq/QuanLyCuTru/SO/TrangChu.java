package com.mmq.QuanLyCuTru.SO;

import com.mmq.QuanLyCuTru.model.CuTru;

import java.util.List;

public class TrangChu {
    private int tongSo;
    private int dangKyHomNay;
    private int choDuyet;
    private int hetHan;
    private List<CuTru> cuTrus;

    public int getTongSo() {
        return tongSo;
    }

    public void setTongSo(int tongSo) {
        this.tongSo = tongSo;
    }

    public int getDangKyHomNay() {
        return dangKyHomNay;
    }

    public void setDangKyHomNay(int dangKyHomNay) {
        this.dangKyHomNay = dangKyHomNay;
    }

    public int getChoDuyet() {
        return choDuyet;
    }

    public void setChoDuyet(int choDuyet) {
        this.choDuyet = choDuyet;
    }

    public int getHetHan() {
        return hetHan;
    }

    public void setHetHan(int hetHan) {
        this.hetHan = hetHan;
    }

    public List<CuTru> getCuTrus() {
        return cuTrus;
    }

    public void setCuTrus(List<CuTru> cuTrus) {
        this.cuTrus = cuTrus;
    }

    public TrangChu() {
    }

    public TrangChu(int tongSo, int dangKyHomNay, int choDuyet, int hetHan, List<CuTru> cuTrus) {
        this.tongSo = tongSo;
        this.dangKyHomNay = dangKyHomNay;
        this.choDuyet = choDuyet;
        this.hetHan = hetHan;
        this.cuTrus = cuTrus;
    }
}
