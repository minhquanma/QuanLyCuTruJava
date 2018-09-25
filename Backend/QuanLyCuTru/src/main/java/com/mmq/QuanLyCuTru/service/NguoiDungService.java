package com.mmq.QuanLyCuTru.service;

import com.mmq.QuanLyCuTru.DAO.NguoiDungDAO;
import com.mmq.QuanLyCuTru.model.NguoiDung;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NguoiDungService {

    @Autowired
    NguoiDungDAO nguoiDungDAO;

    // Lấy danh sách người dùng
    public List<NguoiDung> getNguoiDungs() {
        return nguoiDungDAO.findAll();
    }

    // Lấy người dùng theo id
    public NguoiDung getNguoiDungById(int id) {
        return nguoiDungDAO.findById(id);
    }
}
