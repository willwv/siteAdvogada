window.onload = function() {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.backgroundColor = "#242C40";
        } else {
        document.getElementById("header").style.backgroundColor = "transparent";
        }
    }
    
    document.getElementsByClassName("all-options")[0].style.display = 'none';
    document.getElementsByClassName("options-mobile")[0].onclick = function(){
        document.getElementsByClassName("all-options")[0].style.display = 'flex';
    };
    document.getElementsByClassName("options-close")[0].onclick = function(){
        document.getElementsByClassName("all-options")[0].style.display = 'none';
    };
    document.getElementsByClassName(".options-all")[0].onclick = function(){
        document.getElementsByClassName("all-options")[0].style.display = 'none';
    };
};
