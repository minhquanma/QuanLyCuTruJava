/* getCuTruById(id): T�m ki?m c? tr� theo h? t�n c�ng d�n */

SELECT C.* FROM DANGKYCUTRU DK
INNER JOIN CUTRUS C ON DK.CuTruId = C.Id 
INNER JOIN NGUOIDUNGS N ON DK.CongDanId = N.Id 
WHERE upper(HoTen) LIKE upper(N'%rin%');