function payTax() {
   var fullName = document.getElementById("fullName").value;
   var totalIncome = document.getElementById("totalIncome").value;
   var numOfDependents = document.getElementById("numOfDependents").value;



   //gọi hàm kiểm tra tổng thu nhập hợp lệ hay không
   var get_totalIncome = check_totalIncome(totalIncome);
   if (get_totalIncome === "stop") {
      return;
   }


   //gọi hàm kiểm tra số người phụ thuộc hợp lệ hay không
   var get_numOfDependents = check_numOfDependents(numOfDependents);
   if (get_numOfDependents === "stop") {
      return;
   }


   //hàm tính THU NHẬP CHỊU THUẾ
   var get_incomeTaxes = calcIncomeTaxes(get_totalIncome, get_numOfDependents);


   //gọi hàm tính THUẾ
   var get_taxableIncome = calcTaxableIncome(
      get_incomeTaxes,
      60000000,
      120000000,
      210000000,
      384000000,
      624000000,
      960000000,
      5,
      10,
      15,
      20,
      25,
      30,
      35
   );


		if (get_taxableIncome > 0) {
			//gọi hàm in kết quả ra giao diện
			showRes(fullName, get_taxableIncome)
		} else {
			alert("Vất vả nuôi nhiều người quá. Cho miễn thuế đấy !!!")
		}
}

//hàm kiểm tra TỔNG THU NHẬP hợp lệ hay không
function check_totalIncome(totalIncome) {
   if (totalIncome === "") {
      alert("Vui lòng nhập Tổng thu nhập năm !!!");
      return "stop";
   }

   if (+totalIncome <= 4000000) {
      alert(
         "Tổng thu nhập năm trên 4 triệu mới đóng thuế. Lewlew nghèo quá !!!"
      );
      return "stop";
   }

   return +totalIncome;
}

//hàm kiểm tra SỐ NGƯỜI phụ thuộc hợp lệ hay không
function check_numOfDependents(numOfDependents) {
   if (numOfDependents === "") {
      alert("Vui lòng nhập Số người phụ thuộc !!!");
      return "stop";
   }

   if (+numOfDependents < 0) {
      alert("Vui lòng nhập Số người phụ thuộc hợp lệ !!!");
      return "stop";
   }

   return +numOfDependents;
}

//hàm tính THU NHẬP CHỊU THUẾ
function calcIncomeTaxes(get_totalIncome, get_numOfDependents) {
   return get_totalIncome - 4000000 - get_numOfDependents * 1600000;
}

//hàm tính THUẾ giống bài mẫu
function calcTaxableIncome(
   get_incomeTaxes,
   income_1,
   income_1_2,
   income_2_3,
   income_3_4,
   income_4_5,
   income_5_6,
   tax_1,
   tax_1_2,
   tax_2_3,
   tax_3_4,
   tax_4_5,
   tax_5_6,
   tax_6_7
) {
   if (get_incomeTaxes <= income_1) {
      return get_incomeTaxes * (tax_1 / 100);
   }

   if (get_incomeTaxes <= income_1_2) {
      return get_incomeTaxes * (tax_1_2 / 100);
   }

   if (get_incomeTaxes <= income_2_3) {
      return get_incomeTaxes * (tax_2_3 / 100);
   }

   if (get_incomeTaxes <= income_3_4) {
      return get_incomeTaxes * (tax_3_4 / 100);
   }

   if (get_incomeTaxes <= income_4_5) {
      return get_incomeTaxes * (tax_4_5 / 100);
   }

   if (get_incomeTaxes <= income_5_6) {
      return get_incomeTaxes * (tax_5_6 / 100);
   }

   return get_incomeTaxes * (tax_6_7 / 100);
}

//hàm in kết quả ra giao diện
function showRes(fullName, get_taxableIncome) {
	var res = document.getElementById("res");
	res.innerHTML = `Khách hàng ${fullName} phải trả ${get_taxableIncome.toLocaleString()} VNĐ tiền thuế.`

}

//hàm tính THUẾ GIỐNG công thức bài tập GRAB
// function calcTaxableIncome(
//    get_incomeTaxes,
//    income_1,
//    income_1_2,
//    income_2_3,
//    income_3_4,
//    income_4_5,
//    income_5_6,
//    tax_1,
//    tax_1_2,
//    tax_2_3,
//    tax_3_4,
//    tax_4_5,
//    tax_5_6,
//    tax_6_7
// ) {
//    if (get_incomeTaxes <= income_1) {
//       return get_incomeTaxes * (tax_1 / 100);
//    }

//    if (get_incomeTaxes <= income_1_2) {
//       return (
//          income_1 * (tax_1 / 100) +
//          (get_incomeTaxes - income_1) * (tax_1_2 / 100)
//       );
//    }

//    if (get_incomeTaxes <= income_2_3) {
//       return (
//          income_1 * (tax_1 / 100) +
//          (income_1_2 - income_1) * (tax_1_2 / 100) +
//          (get_incomeTaxes - income_1_2) * (tax_2_3 / 100)
//       );
//    }

//    if (get_incomeTaxes <= income_3_4) {
//       return (
//          income_1 * (tax_1 / 100) +
//          (income_1_2 - income_1) * (tax_1_2 / 100) +
//          (income_2_3 - income_1_2) * (tax_2_3 / 100) +
//          (get_incomeTaxes - income_2_3) * (tax_3_4 / 100)
//       );
//    }

//    if (get_incomeTaxes <= income_4_5) {
//       return (
//          income_1 * (tax_1 / 100) +
//          (income_1_2 - income_1) * (tax_1_2 / 100) +
//          (income_2_3 - income_1_2) * (tax_2_3 / 100) +
//          (income_3_4 - income_2_3) * (tax_3_4 / 100) +
//          (get_incomeTaxes - income_3_4) * (tax_4_5 / 100)
//       );
//    }

//    if (get_incomeTaxes <= income_5_6) {
//       return (
//          income_1 * (tax_1 / 100) +
//          (income_1_2 - income_1) * (tax_1_2 / 100) +
//          (income_2_3 - income_1_2) * (tax_2_3 / 100) +
//          (income_3_4 - income_2_3) * (tax_3_4 / 100) +
//          (income_4_5 - income_3_4) * (tax_4_5 / 100) +
//          (get_incomeTaxes - income_4_5) * (tax_5_6 / 100)
//       );
//    }

//    return (
//       income_1 * (tax_1 / 100) +
//       (income_1_2 - income_1) * (tax_1_2 / 100) +
//       (income_2_3 - income_1_2) * (tax_2_3 / 100) +
//       (income_3_4 - income_2_3) * (tax_3_4 / 100) +
//       (income_4_5 - income_3_4) * (tax_4_5 / 100) +
//       (income_5_6 - income_4_5) * (tax_5_6 / 100) +
//       (get_incomeTaxes - income_5_6) * (tax_6_7 / 100)
//    );
// }
