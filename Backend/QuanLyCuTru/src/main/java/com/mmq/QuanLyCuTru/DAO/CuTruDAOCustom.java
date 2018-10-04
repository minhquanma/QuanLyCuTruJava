package com.mmq.QuanLyCuTru.DAO;

import com.mmq.QuanLyCuTru.model.CuTru;

import java.util.List;
import java.util.Optional;

public interface CuTruDAOCustom {
    Optional<List<CuTru>> searchCuTrus(int loaiTimKiem,
                                       int loaiCuTru,
                                       int loaiTrangThai,
                                       int loaiThoiHan,
                                       String noiDung);
}
