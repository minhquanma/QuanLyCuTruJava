package com.mmq.QuanLyCuTru.DAO;

import com.mmq.QuanLyCuTru.model.CuTru;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.swing.text.html.parser.Entity;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public class CuTruDAOImpl implements CuTruDAOCustom {

    @Autowired
    EntityManager entityManager;

    @Override
    public Optional<List<CuTru>> searchCuTrus(int loaiTimKiem,
                                              int loaiCuTru,
                                              int loaiTrangThai,
                                              int loaiThoiHan,
                                              String noiDung) {

        StringBuilder builder = new StringBuilder();
        builder.append("SELECT DISTINCT C FROM CuTru C");

        switch (loaiTimKiem) {
            case 1:
                builder.append(" JOIN C.congDans N WHERE lower(N.hoTen) LIKE %:noiDung%");
                break;
            case 2:
                builder.append(" JOIN C.congDans N WHERE lower(N.noiSinh) LIKE %:noiDung%");
                break;
            default:
                builder.append(" WHERE");
                break;
        }

        if (loaiCuTru == 1 || loaiCuTru == 2) {
            builder.append(" AND C.loaiCuTruId = :noiDung");
        }

        switch (loaiTrangThai) {
            // Chưa duyệt
            case 1:
                builder.append(" AND C.daDuyet = true");
                break;
            case 2:
                builder.append(" AND C.daDuyet = false");
                break;
        }

        switch (loaiThoiHan) {
            case 1:
                builder.append(" AND C.ngayHetHan >= :dateNow");
                break;
            case 2:
                builder.append(" AND C.daDuyet < :dateNow");
                break;
        }

        Query query = entityManager.createQuery(builder.toString());
        query.setParameter("noiDung", noiDung);
        query.setParameter("dateNow", new Date());

        return Optional.of(query.getResultList());
    }
}
