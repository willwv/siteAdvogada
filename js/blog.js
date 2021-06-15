window.onload = function(){
    loadDocument("blog-page-include-header", "/components/", "header", true);
    loadDocument("blog-page-include-footer", "/components/", "footer", false);
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
}