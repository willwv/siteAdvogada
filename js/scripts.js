window.onload = function(){

    loadDocument("index-page-include-header", "/components/", "header", true);
    loadDocument("index-page-include-footer", "/components/", "footer", false);

    document.getElementById("input-button").click(function(){
        showLoading();
        if(nameValidation() && emailValidation()){
            let formData = {
                Nome: document.getElementById("inputs-nome").value,
                Email: document.getElementById("inputs-email").value,
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
        document.getElementById("loading").style.display = 'block';
        document.getElementById("input-button").style.display = 'none';
    }
    function hideLoading(){
        document.getElementById("loading").style.display = 'none';
        document.getElementById("input-button").style.display = 'block';
    }
    function emailValidation() {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(document.getElementById("inputs-email").value).toLowerCase())){
            document.getElementById("inputs-email").val('').attr("placeholder","Informe um e-mail válido").focus();
            return false;
        }else{
            return true;
        }
    }
    function nameValidation() {
        
        if(document.getElementById("inputs-nome").value.length <= 0){
            document.getElementById("inputs-nome").attr("placeholder","Informe um nome válido").focus();
            return false;
        }else{
            return true;
        }
    }
    function loadDocument (id, documentFolder, documentName, importJs, e) {
        (e || window.event).preventDefault();
    
        fetch(window.location.origin + documentFolder + documentName + ".html")
        .then((response) => response.text())
        .then((html) => {
            document.getElementById(id).innerHTML = html;
            if(importJs){
                var script = document.createElement('script');
                script.src = window.location.origin + "/js/" + documentName + ".js";
                document.getElementsByTagName('html')[0].appendChild(script);
            }
        })
        .catch((error) => {
            console.warn(error);
        });
    } 
};
