window.onload = function(){
    var OPERACAO_CONCLUIDA = 4;
    loadDocument("blog-page-include-header", "/components/", "header", true);
    loadDocument("blog-page-include-footer", "/components/", "footer", false);
    fitText();
    function loadDocument (id, documentFolder, documentName, importJs, e) {
        (e || window.event).preventDefault();
    
        fetch(window.location.origin + documentFolder + documentName + ".html")
        .then((response) => response.text())
        .then((html) => {
            document.getElementById(id).innerHTML = html;
            if(importJs){
                var script = document.createElement('script');
                script.src = window.location.origin + "/js/" + documentName + ".js";
                document.getElementsByTagName('body')[0].appendChild(script);
            }
        })
        .catch((error) => {
            console.warn(error);
        });
    }
    function fitText(){
        let textName = getParameterByName('text');
        readTextFile(textName);
    }
    function readTextFile(documentName)
    {
        let rawFile = new XMLHttpRequest();
        let filePath =  window.location.origin + "/texts/" + documentName + ".txt";
        console.log(filePath);
        rawFile.open("GET", filePath, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === OPERACAO_CONCLUIDA)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    document.getElementsByClassName("blog-texto-fit")[0].innerText = rawFile.responseText;
                }
            }
        }
        rawFile.send(null);
    }
    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
}