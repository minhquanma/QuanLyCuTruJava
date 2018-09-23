package com.mmq.QuanLyCuTru.controller;

import com.mmq.QuanLyCuTru.config.Constants;
import com.mmq.QuanLyCuTru.model.CuTru;
import com.mmq.QuanLyCuTru.service.CuTruService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
        return cuTruService.getCuTrus();
    }

    // Lấy cư trú theo id
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<CuTru> getCuTruById(@PathVariable int id) {
        // Lấy ra 1 object CuTru dựa trên param id
        CuTru cuTru = cuTruService.getCuTruById(id);

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
        Optional<List<CuTru>> cuTrus = cuTruService.getCuTrusByName(hoTen);

        // Trả về object CuTru
        return ResponseEntity.ok(cuTrus);

        // Kết thúc xử lý
    }

    // Tìm kiếm cư trú theo trạng thái hết hạn (đã hết hạn hay chưa)
    @RequestMapping(value = "", params = "hethan", method = RequestMethod.GET)
    public ResponseEntity<?> getExpiredCuTrus(@RequestParam("hethan") Integer hetHan) {
        switch (hetHan) {
            case Constants.HET_HAN:
                // Trường hợp param hetHan bằng 1
                // Trả về danh sách cư trú hết hạn
                return ResponseEntity.ok(cuTruService.getExpiredCuTrus());
            case Constants.CHUA_HET_HAN:
                // Trường hợp param hetHan bằng 1
                // Trả về danh sách cư trú chưa hết hạn
                return ResponseEntity.ok(cuTruService.getUnexpiredCuTrus());
            default:
                // Ngoài 2 trường hợp trên
                // Trả về danh sách cư trú
                return ResponseEntity.ok(cuTruService.getCuTrus());
        }
        // Kết thúc xử lý
    }
}
