package com.mmq.QuanLyCuTru.DAO;

import com.mmq.QuanLyCuTru.model.NguoiDung;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NguoiDungDAO extends JpaRepository<NguoiDung, Integer> {

    // Tìm kiếm theo mã công dân
    NguoiDung findById(int id);
}
