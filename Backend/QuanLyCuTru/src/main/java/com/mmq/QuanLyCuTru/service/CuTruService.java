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

    public List<CuTru> getAll() {
        return cuTruDAO.findAll();
    }
}

