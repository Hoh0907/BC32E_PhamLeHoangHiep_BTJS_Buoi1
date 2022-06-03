/* Bài 1 : Tính tiền Lương Nhân viên 
    Mô hình 3 khối :
    - Input :
        - Luong1Ngay
        - NgayCong
    - Xử lý :
        - Tạo biến cho Luong1Ngay vs NgayCong
        - Tạo biến TienLuong
        - Gán giá trị cho Luong1Ngay vs NgayCong
        - Sử đụng công thức để tính TienLuong = Luong1Ngay * NgayCong
    - Output :
        -  TienLuong = ??????
*/
var Luong1Ngay = 0;
var NgayCong = 0;
var TienLuong = 0;
Luong1Ngay = 320000;
NgayCong = 21;
TienLuong = Luong1Ngay * NgayCong;
console.log("Tiền Lương :" + TienLuong + "VND");

/* End Bài 1 */

/* Bài 2 : Tính giá trị trung bình
 Mô hình 3 khối :
    - Input :
        - So1
        - So2
        - So3
        - So4
        - So5
    - Xử lý :
        - Tạo biến cho So1 ,So2 ,So3 ,So4 ,So5
        - Tạo biến GiaTTB
        - Gán giá trị cho So1 ,So2 ,So3 ,So4 ,So5
        - Sử đụng công thức để tính GiaTTB = (So1 + So2 + So3 + So4 + So5)/5
    - Output :
        -  GiaTTB = ??????
*/
var So1 = 0;
var So2 = 0;
var So3 = 0;
var So4 = 0;
var So5 = 0;
var GiaTTB = 0;
So1 = 10;
So2 = 20;
So3 = 30;
So4 = 25;
So5 = 5;
GiaTTB = (So1 + So2 + So3 + So4 + So5) / 5;
console.log("Giá trị trung bình :" + GiaTTB);

/* End Bài 2 */

/* Bài 3 : Đổi tiền 
Mô hình 3 khối :
    - Input :
        - USD
    - Xử lý :
        - Tạo biến  USD
        - Tạo biến GiaUSD = 23500 
        - Tạo biến DoiTienVND 
        - Gán giá trị cho USD
        - Sử đụng công thức để tính DoiTienVND = USD * GiaUSD
    - Output :
        - DoiTienVND =  ?????
*/
var USD = 0;
var GiaUSD = 23500;
var DoiTienVND = 0;
USD = 20;
DoiTienVND = USD * GiaUSD;
console.log("Quy Đổi Tiền:" + DoiTienVND + "VND")
    /* End Bài 3 */

/* Bài 4 : Tính diện tích , chu vi hình chữ nhật 
    Mô hình 3 khối :
    - Input :
        - Dai
        - Rong
    - Xử lý :
        - Tạo biến cho Canh1 , Canh2
        - Tạo biến Chuvi , DienTich
        - Gán giá trị cho Canh1 , Canh2
        - Sử đụng công thức để tính ChuVi = (Dai + Rong)*2
        - Sử đụng công thức để tính DienTich = (Dai * Rong)
    - Output :
        - ChuVi =  ?????
        - DienTich = ?????
*/
var Dai = 0;
var Rong = 0;
var ChuVi = 0;
var DienTich = 0;
Dai = 20;
Rong = 13;
ChuVi = (Dai + Rong) * 2;
DienTich = (Dai * Rong);
console.log("Chu vi :" + ChuVi);
console.log("Diện Tích :" + DienTich);
/* En Bài 4 */

/* Bài 5 : Tỏng 2 ký số 
Mô hình 3 khối :
    - Input :
        - So
    - Xử lý :
        - Tạo biến cho So
        - Tạo biến SoHangDv , SoHangChuc , Tong
        - Gán giá trị cho So
        - Sử đụng công thức để tính SoHangDV = So % 10 ;
        - Sử đụng công thức để tính SoHangChuc = So / 10 ;
        - Tong = SoHangDv + SoHangChuc
    - Output :
        - Tong =  ?????
*/
var So = 0;
var SoHangDV = 0;
var SoHangChuc = 0;
var Tong = 0;
So = 97;
SoHangDV = Math.floor(So % 10);
SoHangChuc = Math.floor(So / 10);
Tong = SoHangDV + SoHangChuc;
console.log("Tổng 2 ký số :" + Tong);
/* End Bài 5 */