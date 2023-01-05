var emails = document.getElementById("email");
var pass = document.getElementById("pass");
var re_pass = document.getElementById("re_pass");


var flag = true;
function  login(){
    //email
    if(emails.value ==''){
        document.getElementById('email_err').innerHTML="bạn chưa nhập email";
        flag = false;
    }else{
        document.getElementById('email_err').innerHTML="";
    }

    //pass
    // if(pass.value ==''){
    //     document.getElementById('pass_err').innerHTML="bạn chưa nhập pass";
    //     flag = false;
    // }else{
    //     document.getElementById('pass_err').innerHTML="";
    // }
    
    var reg_pass = /^\w{8,}$/;
    if(!reg_pass.test(pass.value)){
        document.getElementById('pass_err').innerHTML="bạn chưa nhập pass";
        flag = false;
    }else{
        document.getElementById('pass_err').innerHTML="";
    }
    

    //re-pass
    if(re_pass.value ==''){
        document.getElementById('repass_err').innerHTML="bạn chưa nhập repass";
        flag = false;
    }else{
        document.getElementById('repass_err').innerHTML="";
    }

    return flag;
}
