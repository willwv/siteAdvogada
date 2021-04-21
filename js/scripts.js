$(document).ready(function(){
    console.log(screen.width)
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.backgroundColor = "#242C40";
        } else {
        document.getElementById("header").style.backgroundColor = "transparent";
        }
    }
    
    $(".all-options")[0].style.display = 'none';
    $(".options-mobile").click(function(){
        $(".all-options")[0].style.display = 'flex';
    });
    $(".options-close").click(function(){
        $(".all-options")[0].style.display = 'none';
    });
    $(".options-all").click(function(){
        $(".all-options")[0].style.display = 'none';
    });
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
                url: "https://api.sheetmonkey.io/form/bUNmegi99yE8cU7L17U33y",
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
