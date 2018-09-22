/* getCuTruById(id): Tìm ki?m c? trú theo h? tên công dân */

SELECT C.* FROM DANGKYCUTRU DK
INNER JOIN CUTRUS C ON DK.CuTruId = C.Id 
INNER JOIN NGUOIDUNGS N ON DK.CongDanId = N.Id 
WHERE upper(HoTen) LIKE upper(N'%rin%');