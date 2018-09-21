package com.mmq.QuanLyCuTru.DAO;

import com.mmq.QuanLyCuTru.model.CuTru;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CuTruDAO extends JpaRepository<CuTru, Integer> {
}
