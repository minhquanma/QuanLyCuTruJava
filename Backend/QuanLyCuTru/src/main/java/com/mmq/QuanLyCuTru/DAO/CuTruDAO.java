package com.mmq.QuanLyCuTru.DAO;

import com.mmq.QuanLyCuTru.model.CuTru;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CuTruDAO extends JpaRepository<CuTru, Integer> {
    CuTru findById(int id);

    @Query(value =
            "SELECT C.* FROM DANGKYCUTRU DK " +
            "INNER JOIN CUTRUS C ON DK.CuTruId = C.Id " +
            "INNER JOIN NGUOIDUNGS N ON DK.CongDanId = N.Id " +
            "WHERE lower(HoTen) LIKE %:hoTen% ", nativeQuery = true
    )
    Optional<List<CuTru>> findByName(@Param("hoTen") String hoTen);
}
