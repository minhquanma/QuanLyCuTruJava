package com.mmq.QuanLyCuTru.service;

import com.mmq.QuanLyCuTru.DAO.CuTruDAO;
import com.mmq.QuanLyCuTru.SO.TrangChu;
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

    // Tìm kiếm cư trú theo loại cư trú
    public Optional<List<CuTru>> getCuTrusByType(int loai) {
        return cuTruDAO.findByType(loai);
    }

    // Tìm kiếm cư trú theo trạng thái hết hạn (đã hết hạn hay chưa)
    public Optional<List<CuTru>> getExpiredCuTrus() {

        // Lấy ngày hệ thống
        Date dateNow = new Date();

        return cuTruDAO.findExpiredCuTrus(dateNow);
    }
    // Lấy cư trú chưa hết hạn
    public Optional<List<CuTru>> getUnexpiredCuTrus() {

        // Lấy ngày hệ thống
        Date dateNow = new Date();

        return cuTruDAO.findUnexpiredCuTrus(dateNow);
    }

    // Lấy cư trú theo tên công dân
    public Optional<List<CuTru>> getCuTrusByName(String hoTen) {
        return cuTruDAO.findByName(hoTen);
    }

    // Lấy cư trú theo nơi sinh
    public Optional<List<CuTru>> getCuTrusByBirthPlace(String noiSinh) {
        return cuTruDAO.findByBirthPlace(noiSinh);
    }

    // Lấy cư trú theo quê quán
    public Optional<List<CuTru>> getCuTrusByHometown(String queQuan) {
        return cuTruDAO.findByHometown(queQuan);
    }

    // Lấy cư trú theo quốc tịch
    public Optional<List<CuTru>> getCuTrusByNationality(String quocTich) {
        return cuTruDAO.findByNationality(quocTich);
    }

    // Lấy cư trú theo địa chỉ cư trú
    public Optional<List<CuTru>> getCuTrusByAddress(String diaChi) {
        return cuTruDAO.findByAddress(diaChi);
    }

    // Tìm kiếm cư trú theo địa chỉ công dân
    public Optional<List<CuTru>> getCuTrusByPersonalAddress(String diaChiDan) {
        return cuTruDAO.findByPersonalAddress(diaChiDan);
    }

    // Tạo mới cư trú
    public CuTru createCuTru(CuTru cuTru) {
        CuTru createdCuTru = cuTruDAO.save(cuTru);
        return createdCuTru;
    }

    // Cập nhật cư trú theo id
    public void updateCuTru(CuTru cuTru) {
        cuTruDAO.save(cuTru);
    }

    // Duyệt cư trú theo id
    public void duyetCuTru(int id) {
        cuTruDAO.updateTrangThaiDuyet(id, true);
    }
    // Duyệt cư trú theo id
    // Lấy thông tin tóm tắt cho trang chủ
    public TrangChu getTrangChuInfo() {
        // Tạo mới object TrangChu
        TrangChu trangChu = new TrangChu();

        // Lấy ngày hệ thống
        Date today = new Date();

        // Lấy dữ liệu từ DAO
        int tongSo = (int)cuTruDAO.count();
        int dangKyHomNay = cuTruDAO.countByNgayDangKy(today);
        int choDuyet = cuTruDAO.countByDaDuyet(false);
        int hetHan = cuTruDAO.countByNgayHetHanLessThan(today);
        List<CuTru> cuTrus = cuTruDAO.findByState(false).get();

        // Gán dữ liệu
        trangChu.setTongSo(tongSo);
        trangChu.setDangKyHomNay(dangKyHomNay);
        trangChu.setChoDuyet(choDuyet);
        trangChu.setHetHan(hetHan);
        trangChu.setCuTrus(cuTrus);

        return trangChu;
    }
}

