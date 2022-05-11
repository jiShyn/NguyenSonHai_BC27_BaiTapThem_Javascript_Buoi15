//hàm gắn ở attribute onchange tại thẻ select
function showNumOfConnections() {
   //khi chọn option có value là "business" sẽ mở div có id:numOfConnections. Chọn các option khác thì ẩn đi.
   if (document.getElementById("typeObj").value === "business") {
      document.getElementById("numOfConnections").style.display = "block";
   } else {
      document.getElementById("numOfConnections").style.display = "none";
   }
}

//hàm gắn ở nút button
function cableBill() {
   var typeObj = document.getElementById("typeObj").value;
   var idUser = document.getElementById("idUser").value;
   var numOfChannels = document.getElementById("numOfChannels").value;
   var numOfConnections = document.getElementById("numOfConnections").value;
   var totalCableBill;

   //gọi hàm kiểm tra typeObj
   var getTypeObj = check_typeObj(typeObj);
   if (getTypeObj === "stop") {
      return;
   }

   //gọi hàm kiểm tra idUser
   var getIdUser = check_idUser(idUser);
   if (getIdUser === "stop") {
      return;
   }

   //gọi hàm kiểm tra numOfChannels
   var getnumOfChannels = check_numOfChannels(numOfChannels);
   if (getnumOfChannels === "stop") {
      return;
   }

   //nếu là nhà dân thì chạy hàm calc_cableBill và truyền các đối số.
   if (getTypeObj === "home") {
      totalCableBill = calc_cableBill(
         4.5,
         20.5,
         1,
         0,
         0,
         7.5,
         getnumOfChannels
      );
      console.log(totalCableBill);
   }

   //nếu là doanh nghiệp thì chạy hàm calc_cableBill và truyền các đối số.
   if (getTypeObj === "business") {
      //gọi hàm kiểm tra numOfConnections
      var getNumOfConnections = check_numOfConnections(numOfConnections);
      if (getNumOfConnections === "stop") {
         return;
      }

      //nếu số kết nối <= 10 thì phí kết nối dịch vụ là 75$. Nếu trên 10 thì tính 5$/kết nối
      if (getNumOfConnections <= 10) {
         totalCableBill = calc_cableBill(15, 75, 1, 0, 0, 50, getnumOfChannels);
      } else {
         totalCableBill = calc_cableBill(
            15,
            75,
            1,
            5,
            getNumOfConnections,
            50,
            getnumOfChannels
         );
      }
   }

   //gọi hàm hiển thị kết quả ra giao diện
   showRes(getIdUser, totalCableBill);
}




//hàm kiểm tra user chọn loại khách hàng typeObj chưa.
function check_typeObj(typeObj) {
   if (typeObj === "") {
      alert("Vui lòng chọn loại khách hàng !!!");
      return "stop";
   }
   return typeObj;
}

//hàm kiểm tra user nhập mã khách hàng idUser chưa.
function check_idUser(idUser) {
   if (idUser === "") {
      alert("Vui lòng nhập mã khách hàng !!!");
      return "stop";
   }
   return idUser;
}

//hàm kiểm tra user nhập số kênh numOfChannels chưa.
function check_numOfChannels(numOfChannels) {
   if (numOfChannels === "" || +numOfChannels <= 0) {
      alert("Vui lòng nhập số kênh hợp lệ !!!");
      return "stop";
   }
   return +numOfChannels;
}

//hàm kiêm tra user nhập số kết nối numOfConnections chưa.
function check_numOfConnections(numOfConnections) {
   if (numOfConnections === "" || +numOfConnections <= 0) {
      alert("Vui lòng nhập số kết nối hợp lệ !!!");
      return "stop";
   }
   return +numOfConnections;
}

//hàm tính tiền cáp
function calc_cableBill(
   phiXuLyHoaDon,
   phiKetNoi_duoi_10,
   soKetNoi_duoi_10,
   phiKetNoi_tren_10,
   soKetNoi_tren_10,
   phiThueKenh,
   soKenh
) {
   return (
      phiXuLyHoaDon +
      phiThueKenh * soKenh +
      phiKetNoi_duoi_10 * soKetNoi_duoi_10 +
      phiKetNoi_tren_10 * (soKetNoi_tren_10 - 10)
   );
}

//hàm hiển thị kết quả ra giao diện
function showRes(getIdUser, totalCableBill) {
   document.getElementById("res").style.color = "blue";
   document.getElementById(
      "res"
   ).innerHTML = `Khách hàng ${getIdUser} cần thanh toán $${totalCableBill.toLocaleString()} tiền cáp.`;
}
