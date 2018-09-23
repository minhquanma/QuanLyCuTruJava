/* getCuTruById(id): Tim kiem cu tru theo ho ten cong dan */
/* SQL :*/
SELECT C.* FROM DANGKYCUTRU DK
INNER JOIN CUTRUS C ON DK.CuTruId = C.Id 
INNER JOIN NGUOIDUNGS N ON DK.CongDanId = N.Id 
WHERE lower(HoTen) LIKE lower(N'%hoTen%');

/* JPQL :*/
SELECT C FROM CuTru C JOIN C.congDans N WHERE lower(N.hoTen) LIKE %:hoTen%

/* getExpiredCuTru(hetHan) */
/* SQL :*/
SELECT * FROM CUTRUS
WHERE TO_CHAR(NGAYHETHAN, 'YYYY-MM-DD') < '2019-09-23';

/* JPQL :*/
SELECT C FROM CuTru C WHERE C.ngayHetHan < :dateNow