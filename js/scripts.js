$(document).ready(function(){
    window.onscroll = function() {scrollFunction()};
    
    $("#input-button").click(function(){
        showLoading();
        if(nameValidation() && emailValidation()){
            let formData = {
                Nome: $("#inputs-nome").val(),
                Email: $("#inputs-email").val(),
                Data: "x-sheetmonkey-current-date-time"
            }
            $.ajax({
                type: "POST",
                url: "https://api.sheetmonkey.io/form/swF19Rzp6QNJFXwPXXHFBE",
                data: formData,
                success: () => hideLoading()
                // dataType: dataType
            });
        }else{
            hideLoading();
        }
    });
    function showLoading(){
        $("#loading").show();
        $("#input-button").hide();
    }
    function hideLoading(){
        $("#loading").hide();
        $("#input-button").show();
    }
    function emailValidation() {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String($("#inputs-email").val()).toLowerCase())){
            $("#inputs-email").val('').attr("placeholder","Informe um e-mail válido").focus();
            return false;
        }else{
            return true;
        }
    }
    function nameValidation() {
        
        if($("#inputs-nome").val().length <= 0){
            $("#inputs-nome").attr("placeholder","Informe um nome válido").focus();
            return false;
        }else{
            return true;
        }
    }
});
