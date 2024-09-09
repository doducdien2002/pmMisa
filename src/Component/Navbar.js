import React from "react";
import { Link } from "react-router-dom"; // Sử dụng Link từ react-router-dom
// Đảm bảo rằng bạn đã tạo tệp CSS này
import "../style.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="grid-container">
        {/* Row 1 */}
        <div className="step">Báo Giá</div>
        <div className="step">Ghi Nhận Doanh Số</div>
        <div className="step">Trả Lại Hàng Bán</div>
        <div className="step">Thu Tiền Khách Hàng</div>

        {/* Row 2 */}
        <div className="step row2">Đơn Đặt Hàng</div>
        <div className="step row2 row22">Báo Cáo Phân Tích</div>

        {/* Row 3 */}
        <div className="step row3">Hợp Đồng</div>
        <div className="step row3">Xuất Hóa Đơn</div>
        <div className="step row3">Giảm Giá Hàng Bán</div>
      </div>
 
    </nav>
  );
};

export default Navbar;
