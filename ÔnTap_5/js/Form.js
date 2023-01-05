var sanpham = document.getElementById("sanpham");
var loai = document.getElementById("loai");
var dongia = document.getElementById("dongia");
var soluong = document.getElementById('soluong')
var thanhtien = document.getElementById("thanhtien");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var noithanh = document.getElementById("noithanh");
var ngoaithanh = document.getElementById("ngoaithanh");

var flag = true;
function muahang() {

    //SP
    if (sanpham.value == '') {
        document.getElementById('sanpham_err').innerHTML = "Bạn chưa nhập tên sản phẩm";
        flag = false;
    } else {
        document.getElementById('sanpham_err').innerHTML = "";

    }
    //loai
    if (loai.value == '') {
        document.getElementById('loai_err').innerHTML = "Bạn chưa chọn loại";
        flag = false;
    } else {
        document.getElementById('loai_err').innerHTML = "";

    }
    //dơn giá
    if (dongia.value == '') {
        document.getElementById('dongia_err').innerHTML = "Bạn chưa chọn đơn giá";
        flag = false;
    } else {
        document.getElementById('dongia_err').innerHTML = "";

    }
    // if(option1.selected == true){
    //     dongia.value = 50000
    // }
    // if(option2.selected == true){
    //     dongia.value = 30000
    // }
    // if(option3.selected == true){
    //     dongia.value = 10000
    // }


    //số lượng
    if (soluong.value == '') {
        document.getElementById('soluong_err').innerHTML = "Bạn chưa chọn số lượng";
        flag = false;
    } else {
        document.getElementById('soluong_err').innerHTML = "";

    }
    //Thành tiền
    if (thanhtien.value == '') {
        document.getElementById('thanhtien_err').innerHTML = "Bạn chưa chọn loại";
        flag = false;
    } else {
        document.getElementById('thanhtien_err').innerHTML = "";
    }
    thanhtien.value = dongia.value * soluong.value;

    //phí vận chuyển
    if (noithanh.checked == false && ngoaithanh.checked == false) {
        document.getElementById('noithanh_err').innerHTML = 'bạn chưa chọn nơi vận chuyển';
        document.getElementById('ngoaithanh_err').innerHTML = 'bạn chưa chọn nơi vận chuyển';
        flag = false;
    } else {
        document.getElementById('noithanh_err').innerHTML = '';
        document.getElementById('ngoaithanh_err').innerHTML = '';

    }
    if(flag==true){
            // console.log("sanpham");
            alert("sanpham");
    }
    return flag;

}

//hiển thị phí vc
function hien_thi(visible){
    var phi_vc = document.getElementById('phi_vc');
    phi_vc.style.display = visible? "": "none"
}