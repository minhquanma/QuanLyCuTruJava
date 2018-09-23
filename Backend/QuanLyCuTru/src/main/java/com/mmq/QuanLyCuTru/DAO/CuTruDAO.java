package com.mmq.QuanLyCuTru.DAO;

import com.mmq.QuanLyCuTru.model.CuTru;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface CuTruDAO extends JpaRepository<CuTru, Integer> {
    CuTru findById(int id);

    @Query(value = "SELECT C FROM CuTru C JOIN C.congDans N WHERE lower(N.hoTen) LIKE %:hoTen%")
    Optional<List<CuTru>> findByName(@Param("hoTen") String hoTen);

    @Query(value = "SELECT C FROM CuTru C WHERE C.ngayHetHan < :dateNow")
    Optional<List<CuTru>> findExpiredCuTrus(@Param("dateNow") Date dateNow);

    @Query(value = "SELECT C FROM CuTru C WHERE C.ngayHetHan >= :dateNow")
    Optional<List<CuTru>> findUnexpiredCuTrus(@Param("dateNow") Date dateNow);
}
