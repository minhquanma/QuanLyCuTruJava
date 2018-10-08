package com.mmq.QuanLyCuTru.controller;

import com.mmq.QuanLyCuTru.config.Constants;
import com.mmq.QuanLyCuTru.model.NguoiDung;
import com.mmq.QuanLyCuTru.service.NguoiDungService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(Constants.QUANLYDAN_URL)
@CrossOrigin()
public class QuanLyDanController {

    @Autowired
    NguoiDungService nguoiDungService;

    // Lấy danh sách người dùng
    @GetMapping("")
    public ResponseEntity<List<NguoiDung>> getNguoiDungs() {
        List<NguoiDung> nguoiDungs = nguoiDungService.getNguoiDungs();
        return ResponseEntity.ok(nguoiDungs);
    }

    // Lấy người dùng theo id
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<NguoiDung> getNguoiDungById(@PathVariable int id) {
        try {
            // Lấy ra 1 object NguoiDung dựa trên param id
            NguoiDung nguoiDung = nguoiDungService.getNguoiDungById(id);

            // Trường hợp object NguoiDung rỗng (= null)
            if (nguoiDung == null) {
                // Trả về mã lỗi 404 Not Found
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            // Trường hợp object NguoiDung có dữ liệu
            // Trả về object CuTru
            return ResponseEntity.ok(nguoiDung);
        } catch (Exception ex) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        // Kết thúc xử lý
    }
}
