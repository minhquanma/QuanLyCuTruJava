package com.mmq.QuanLyCuTru.service;

import com.mmq.QuanLyCuTru.DAO.CuTruDAO;
import com.mmq.QuanLyCuTru.model.CuTru;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CuTruService {
    @Autowired
    CuTruDAO cuTruDAO;

    // Lấy danh sách cư trú
    public List<CuTru> getAll() {
        return cuTruDAO.findAll();
    }

    // Lấy cư trú theo id
    public CuTru getById(int id) {
        return cuTruDAO.findById(id);
    }

    // Lấy cư trú theo tên công dân
    public Optional<List<CuTru>> getByName(String hoTen) {
        return cuTruDAO.findByName(hoTen);
    }
}

