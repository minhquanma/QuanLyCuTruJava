package com.mmq.QuanLyCuTru.controller;

import com.mmq.QuanLyCuTru.config.Constants;
import com.mmq.QuanLyCuTru.model.CuTru;
import com.mmq.QuanLyCuTru.service.CuTruService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/quanlycutru")
@CrossOrigin(origins = Constants.CLIENT_URL)
public class QuanLyCuTruController {

    @Autowired
    CuTruService cuTruService;

    // Lấy danh sách cư trú
    @GetMapping("")
    public List<CuTru> getCuTrus() {
        return cuTruService.getAll();
    }

    // Lấy cư trú theo id
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<CuTru> getCuTruById(@PathVariable int id) {
        // Lấy ra 1 object CuTru dựa trên param id
        CuTru cuTru = cuTruService.getById(id);

        // Trường hợp object CuTru rỗng (= null)
        if (cuTru == null) {
            // Trả về mã lỗi 404 Not Found
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        // Trường hợp object CuTru có dữ liệu
        // Trả về object CuTru
        return ResponseEntity.ok(cuTru);

        // Kết thúc xử lý
    }

    // Tìm kiếm cư trú theo tên công dân
    @RequestMapping(value = "", params = "hoten", method = RequestMethod.GET)
    public ResponseEntity<?> getCuTrusByName(@RequestParam("hoten") String hoTen) {
        // Lấy ra object CuTru dựa trên param hoTen
        Optional<List<CuTru>> cuTrus = cuTruService.getByName(hoTen);

        if (cuTrus.isPresent() == false) {
            // Trả về mã lỗi 404 Not Found
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        // Trường hợp object CuTru có dữ liệu
        // Trả về object CuTru
        return ResponseEntity.ok(cuTrus.get());

        // Kết thúc xử lý
    }
}
