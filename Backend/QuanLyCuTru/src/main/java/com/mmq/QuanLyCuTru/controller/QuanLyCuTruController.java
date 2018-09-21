package com.mmq.QuanLyCuTru.controller;

import com.mmq.QuanLyCuTru.model.CuTru;
import com.mmq.QuanLyCuTru.service.CuTruService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/quanlycutru")
public class QuanLyCuTruController {

    @Autowired
    CuTruService cuTruService;

    @GetMapping("")
    public List<CuTru> getCuTrus() {
        return cuTruService.getAll();
    }
}
