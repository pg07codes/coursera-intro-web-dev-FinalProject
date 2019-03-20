

// function to validate various details like firstname,lastname,phone,email,password are written below

function validateFName(){
    var x=document.querySelector("#firstname").value;
    if(x.length<3 || x.length>10){
        document.querySelector("#feedbfname").innerHTML=" Invalid value provided ";
        return false;
    }else{

        document.querySelector("#feedbfname").innerHTML=" Valid ";
        return true;
    }
}


function validateLName(){
    var x=document.querySelector("#lastname").value;
    if(x.length<5 || x.length>15){
        document.querySelector("#feedblname").innerHTML=" Invalid value provided ";
        return false;
    }else{
        document.querySelector("#feedblname").innerHTML=" Valid ";
        return true;
    }
}

function validatePassword(){
    var x=document.querySelector("#password").value;
    if(x.length<8 || x.length>16){
        document.querySelector("#feedbpassword").innerHTML=" Invalid value provided ";
        return false;
    }else{
        document.querySelector("#feedbpassword").innerHTML=" Valid ";
        return true;
    }
}

function validatePhone(){
    var x=document.querySelector("#phone").value;
    if(x.length!==10){
        document.querySelector("#feedbphone").innerHTML=" Invalid value provided ";
        return false;
    }else{
        document.querySelector("#feedbphone").innerHTML=" Valid ";
        return true;
    }

}

function getAccType(){
    var Atype;
    if(document.querySelector("#private").checked){
        Atype=document.querySelector("#private").value;
    }else if(document.querySelector("#public").checked){
        Atype=document.querySelector("#public").value;
    }

    return Atype;
}

function validateEmailAndType(){

    var email=document.querySelector("#email").value;

    var regexEmail = /^\S+@\S+\.\S+$/;

    if(regexEmail.test(email)){
        document.querySelector("#feedbemail").innerHTML="Valid Email";
        return true;
    }else{
        document.querySelector("#feedbemail").innerHTML="Invalid Email";
        return false;
    }


}

function validDate(){
    if(document.querySelector("#date").value.length==0){
        document.querySelector("#feedbdate").innerHTML="Select a Date";
        return false;
    }
    else{
        document.querySelector("#feedbdate").innerHTML="Valid";
        return true;
    }
}

// this function checks if all above details are valid 
// and is used to check whether preview can be shown(valid) or not(invalid)

function areAllValid(){
    return validateEmailAndType() && validDate() && validateFName() && validateLName() && validatePassword() && validatePhone();
}

var previewbtn=document.querySelector("#previewbtn");

// onclick event on preview button to generate preview of our information
// only shows preview if all above fields are valid
previewbtn.onclick=function(){
    if(areAllValid()){
        var data="";
        var elem=document.getElementById('myform').elements;

        for( var i=0;i<6;i++){
            data+="<b>Type : </b>"+elem[i].type +"&nbsp&nbsp";
            data+="<b>Field Name : </b>"+elem[i].id +"&nbsp&nbsp";
            data+="<b>Value : </b>"+elem[i].value +"&nbsp&nbsp";
            data+="<br><br>"
        }
        document.querySelector("#previewFormData").innerHTML=data;

    }else{
        document.querySelector("#previewFormData").innerHTML="<h4>Please Insert Valid Details</h4>";
    }
}

