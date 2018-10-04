package com.mmq.QuanLyCuTru.config;

public class Constants {
    public static final String CLIENT_URL = "http://localhost:4200";
    public static final String QUANLYCUTRU_URL = "/quanlycutru";
    public static final String QUANLYDAN_URL = "/quanlydan";
    public static final int HET_HAN = 1;
    public static final int CHUA_HET_HAN = 0;
    public static final int TAM_TRU = 1;
    public static final int TAM_VANG = 2;

    public enum LoaiTimKiem {
        MacDinh,
        Ten,
        NoiSinh,
        QueQuan,
        QuocTich,
        DiaChiCuTru,
        DiaChiDan
    }

    public enum LoaiCuTru {
        MacDinh,
        TamVang,
        TamTru
    }

    public enum LoaiTrangThai {
        MacDinh,
        DaDuyet,
        ChuaDuyet
    }

    public enum LoaiHan {
        MacDinh,
        ConHan,
        HetHan
    }
}
