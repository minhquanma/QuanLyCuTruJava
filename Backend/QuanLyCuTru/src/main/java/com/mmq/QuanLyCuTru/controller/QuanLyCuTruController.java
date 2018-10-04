package com.mmq.QuanLyCuTru.controller;

import com.mmq.QuanLyCuTru.SO.TrangChu;
import com.mmq.QuanLyCuTru.config.Constants;
import com.mmq.QuanLyCuTru.model.CuTru;
import com.mmq.QuanLyCuTru.service.CuTruService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping(Constants.QUANLYCUTRU_URL)
@CrossOrigin(origins = Constants.CLIENT_URL)
public class QuanLyCuTruController {

    @Autowired
    CuTruService cuTruService;

    // Lấy danh sách cư trú
    @GetMapping("")
    public ResponseEntity<List<CuTru>> getCuTrus() {
        List<CuTru> cuTrus = cuTruService.getCuTrus();
        return ResponseEntity.ok(cuTrus);
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

    // Tìm kiếm cư trú theo loại cư trú
    @RequestMapping(value = "", params = "loai", method = RequestMethod.GET)
    public ResponseEntity<?> getCuTrusByType(int loai) {
        // Lấy ra object CuTru dựa trên param loai
        Optional<List<CuTru>> cuTrus = cuTruService.getCuTrusByType(loai);

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
                // Trường hợp param hetHan bằng 0
                // Trả về danh sách cư trú chưa hết hạn
                return ResponseEntity.ok(cuTruService.getUnexpiredCuTrus());
            default:
                // Ngoài 2 trường hợp trên
                // Trả về danh sách cư trú
                return ResponseEntity.ok(cuTruService.getCuTrus());
        }
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

    // Tìm kiếm cư trú theo nơi sinh
    @RequestMapping(value = "", params = "noisinh", method = RequestMethod.GET)
    public ResponseEntity<?> getCuTrusByBirthPlace(@RequestParam("noisinh") String noiSinh) {
        // Lấy ra object CuTru dựa trên param noiSinh
        Optional<List<CuTru>> cuTrus = cuTruService.getCuTrusByBirthPlace(noiSinh);

        // Trả về object CuTru
        return ResponseEntity.ok(cuTrus);

        // Kết thúc xử lý
    }

    // Tìm kiếm cư trú theo quê quán
    @RequestMapping(value = "", params = "quequan", method = RequestMethod.GET)
    public ResponseEntity<?> getCuTrusByHometown(@RequestParam("quequan") String queQuan) {
        // Lấy ra object CuTru dựa trên param queQuan
        Optional<List<CuTru>> cuTrus = cuTruService.getCuTrusByHometown(queQuan);

        // Trả về object CuTru
        return ResponseEntity.ok(cuTrus);

        // Kết thúc xử lý
    }

    // Tìm kiếm cư trú theo quốc tịch
    @RequestMapping(value = "", params = "quoctich", method = RequestMethod.GET)
    public ResponseEntity<?> getCuTrusByNationality(@RequestParam("quoctich") String quocTich) {
        // Lấy ra object CuTru dựa trên param quocTich
        Optional<List<CuTru>> cuTrus = cuTruService.getCuTrusByNationality(quocTich);

        // Trả về object CuTru
        return ResponseEntity.ok(cuTrus);

        // Kết thúc xử lý
    }

    // Tìm kiếm cư trú theo địa chỉ cư trú
    @RequestMapping(value = "", params = "diachi", method = RequestMethod.GET)
    public ResponseEntity<?> getCuTrusByAddress(@RequestParam("diachi") String diaChi) {
        // Lấy ra object CuTru dựa trên param diaChi
        Optional<List<CuTru>> cuTrus = cuTruService.getCuTrusByAddress(diaChi);

        // Trả về object CuTru
        return ResponseEntity.ok(cuTrus);

        // Kết thúc xử lý
    }

    // Tìm kiếm cư trú theo địa chỉ dân
    @RequestMapping(value = "", params = "diachidan", method = RequestMethod.GET)
    public ResponseEntity<?> getCuTrusByPersonalAddress(@RequestParam("diachidan") String diaChiDan) {
        // Lấy ra object CuTru dựa trên param diaChiDan
        Optional<List<CuTru>> cuTrus = cuTruService.getCuTrusByPersonalAddress(diaChiDan);

        // Trả về object CuTru
        return ResponseEntity.ok(cuTrus);

        // Kết thúc xử lý
    }

    // Lấy thông tin tóm tắt cho trang chủ
    @RequestMapping(value = "/trangchu", method = RequestMethod.GET)
    public ResponseEntity<TrangChu> getTrangChuInfo() {
        // Lấy ra object TrangChu
        TrangChu trangChu = cuTruService.getTrangChuInfo();

        // Trả về object TrangChu
        return ResponseEntity.ok(trangChu);
    }

    // Tìm kiếm cư trú theo bộ lọc (filter)
    @RequestMapping(value = "",
                    params = { "loaitimkiem", "loaicutru", "loaitrangthai", "loaihan", "timkiem"},
                    method = RequestMethod.GET)
    public ResponseEntity<?> searchCuTrus(@RequestParam("loaitimkiem")   int loaiTimKiem,
                                          @RequestParam("loaicutru")     int loaiCuTru,
                                          @RequestParam("loaitrangthai") int loaiTrangThai,
                                          @RequestParam("loaihan")       int loaiHan,
                                          @RequestParam("timkiem")       String timKiem) {

        // Khởi tạo danh sách CuTru rỗng
        List<CuTru> cuTrus = new ArrayList<>();
        Constants.LoaiTimKiem _loaiTimKiem;
        Constants.LoaiCuTru _loaiCuTru;
        Constants.LoaiTrangThai _loaiTrangThai;
        Constants.LoaiHan _loaiHan;

        if (timKiem.isEmpty()) {
            _loaiTimKiem = Constants.LoaiTimKiem.MacDinh;
        } else {
            // Loại tìm kiếm
            try {
                _loaiTimKiem = Constants.LoaiTimKiem.values()[loaiTimKiem];
            } catch (ArrayIndexOutOfBoundsException e) {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }

        switch (_loaiTimKiem) {
            case MacDinh:
                cuTrus = cuTruService.getCuTrus();
                break;
            case Ten:
                cuTrus = cuTruService.getCuTrusByName(timKiem)
                        .orElse(new ArrayList<>());
                break;
            case NoiSinh:
                cuTrus = cuTruService.getCuTrusByBirthPlace(timKiem)
                        .orElse(new ArrayList<>());
                break;
            case QueQuan:
                cuTrus = cuTruService.getCuTrusByHometown(timKiem)
                        .orElse(new ArrayList<>());
                break;
            case QuocTich:
                cuTrus = cuTruService.getCuTrusByNationality(timKiem)
                        .orElse(new ArrayList<>());
                break;
            case DiaChiCuTru:
                cuTrus = cuTruService.getCuTrusByAddress(timKiem)
                        .orElse(new ArrayList<>());
                break;
            case DiaChiDan:
                cuTrus = cuTruService.getCuTrusByPersonalAddress(timKiem)
                        .orElse(new ArrayList<>());
                break;
        }

        // Loại cư trú
        try {
            _loaiCuTru = Constants.LoaiCuTru.values()[loaiCuTru];
        } catch (ArrayIndexOutOfBoundsException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        switch(_loaiCuTru) {
            case MacDinh:
                // Bỏ qua
                break;
            case TamTru:
                cuTrus = cuTrus.stream()
                            .filter(cuTru -> cuTru.getLoaiCuTruId() == Constants.TAM_TRU)
                            .collect(Collectors.toList());
                break;
            case TamVang:
                cuTrus = cuTrus.stream()
                            .filter(cuTru -> cuTru.getLoaiCuTruId() == Constants.TAM_VANG)
                            .collect(Collectors.toList());
                break;
        }

        // Loại trạng thái
        try {
            _loaiTrangThai = Constants.LoaiTrangThai.values()[loaiTrangThai];
        } catch (ArrayIndexOutOfBoundsException e)
        {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        switch (_loaiTrangThai) {
            case MacDinh:
                // Bỏ qua
                break;
            case DaDuyet:
                cuTrus = cuTrus.stream()
                            .filter(cuTru -> cuTru.isDaDuyet() == true)
                            .collect(Collectors.toList());
                break;
            case ChuaDuyet:
                cuTrus = cuTrus.stream()
                            .filter(cuTru -> cuTru.isDaDuyet() == false)
                            .collect(Collectors.toList());
                break;
        }

        // Loai thời hạn
        try {
            _loaiHan = Constants.LoaiHan.values()[loaiHan];
        } catch (ArrayIndexOutOfBoundsException e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        switch (_loaiHan) {
            case MacDinh:
                // Bỏ qua
                break;
            case ConHan:
                cuTrus = cuTrus.stream()
                            .filter(cuTru -> cuTru.getNgayHetHan().compareTo(new Date()) > 0)
                            .collect(Collectors.toList());
                break;
            case HetHan:
                cuTrus = cuTrus.stream()
                        .filter(cuTru -> cuTru.getNgayHetHan().compareTo(new Date()) < 0)
                        .collect(Collectors.toList());
                break;
        }
        return ResponseEntity.ok(cuTrus);
    }
}
