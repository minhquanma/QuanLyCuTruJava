package com.mmq.QuanLyCuTru.DAO;

import com.mmq.QuanLyCuTru.model.CuTru;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface CuTruDAO extends JpaRepository<CuTru, Integer>, CuTruDAOCustom {

    // Tìm kiếm theo mã cư trú
    CuTru findById(int id);

    // Tìm kiếm theo loại cư trú
    @Query(value = "SELECT C FROM CuTru C WHERE C.loaiCuTruId = :loai")
    Optional<List<CuTru>> findByType(@Param("loai") int loai);

    // Tìm kiếm theo trạng thái duyệt (đã duyệt hay chưa)
    @Query(value = "SELECT C FROM CuTru C WHERE C.daDuyet = :duyet")
    Optional<List<CuTru>> findByState(@Param("duyet") boolean duyet);

    // Tìm kiếm cư trú đã hết hạn
    @Query(value = "SELECT C FROM CuTru C WHERE C.ngayHetHan < :dateNow")
    Optional<List<CuTru>> findExpiredCuTrus(@Param("dateNow") Date dateNow);

    // Tìm kiếm cư trú chưa hết hạn
    @Query(value = "SELECT C FROM CuTru C WHERE C.ngayHetHan >= :dateNow")
    Optional<List<CuTru>> findUnexpiredCuTrus(@Param("dateNow") Date dateNow);

    // Tìm kiếm theo họ tên công dân
    @Query(value = "SELECT DISTINCT C FROM CuTru C JOIN C.congDans N WHERE lower(N.hoTen) LIKE %:hoTen%")
    Optional<List<CuTru>> findByName(@Param("hoTen") String hoTen);

    // Tìm kiếm cư trú theo nơi sinh
    @Query(value = "SELECT DISTINCT C FROM CuTru C JOIN C.congDans N WHERE lower(N.noiSinh) LIKE %:noiSinh%")
    Optional<List<CuTru>> findByBirthPlace(@Param("noiSinh") String noiSinh);

    // Tìm kiếm cư trú theo quê quán
    @Query(value = "SELECT DISTINCT C FROM CuTru C JOIN C.congDans N WHERE lower(N.queQuan) LIKE %:queQuan%")
    Optional<List<CuTru>> findByHometown(@Param("queQuan") String queQuan);

    // Tìm kiếm cư trú theo quốc tịch
    @Query(value = "SELECT DISTINCT C FROM CuTru C JOIN C.congDans N WHERE lower(N.quocTich) LIKE %:quocTich%")
    Optional<List<CuTru>> findByNationality(@Param("quocTich") String quocTich);

    // Tìm kiếm cư trú theo địa chỉ cư trú
    @Query(value =
            "SELECT C FROM CuTru C WHERE " +
            "lower(concat(C.soNha, C.duong, C.phuong, C.quan, C.thanhPho)) LIKE %:diaChi%")
    Optional<List<CuTru>> findByAddress(@Param("diaChi") String diaChi);

    // Tìm kiếm cư trú địa chỉ dân
    @Query(value =
            "SELECT DISTINCT C FROM CuTru C JOIN C.congDans N WHERE " +
            "lower(concat(N.soNha, N.duong, N.phuong, N.quan, N.thanhPho)) LIKE %:diaChiDan%")
    Optional<List<CuTru>> findByPersonalAddress(@Param("diaChiDan") String diaChiDan);

    // Số cư trú chờ duyệt (chưa duyệt)
    int countByDaDuyet(boolean daDuyet);

    // Số lượt đăng ký hôm nay
    int countByNgayDangKy(Date ngayDangKy);

    // Số cư trú đã hết hạn
    int countByNgayHetHanLessThan(Date ngayHetHan);
}
