package com.mmq.QuanLyCuTru.service;

import com.mmq.QuanLyCuTru.DAO.CuTruDAO;
import com.mmq.QuanLyCuTru.model.CuTru;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CuTruService {
    @Autowired
    CuTruDAO cuTruDAO;

    // Lấy danh sách cư trú
    public List<CuTru> getCuTrus() {
        return cuTruDAO.findAll();
    }

    // Lấy cư trú theo id
    public CuTru getCuTruById(int id) {
        return cuTruDAO.findById(id);
    }

    // Lấy cư trú theo tên công dân
    public Optional<List<CuTru>> getCuTrusByName(String hoTen) {
        return cuTruDAO.findByName(hoTen);
    }

    // Tìm kiếm cư trú theo trạng thái hết hạn (đã hết hạn hay chưa)
    public Optional<List<CuTru>> getExpiredCuTrus() {

        // Lấy ngày hệ thống
        Date dateNow = new Date();

        return cuTruDAO.findExpiredCuTrus(dateNow);
    }

    public Optional<List<CuTru>> getUnexpiredCuTrus() {

        // Lấy ngày hệ thống
        Date dateNow = new Date();

        return cuTruDAO.findUnexpiredCuTrus(dateNow);
    }
}

