package com.mmq.QuanLyCuTru.service;

import com.mmq.QuanLyCuTru.DAO.CuTruDAO;
import com.mmq.QuanLyCuTru.model.CuTru;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}

