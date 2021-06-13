$(document).ready(function(){
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
});
