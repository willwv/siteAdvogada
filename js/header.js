window.onscroll = function() {scrollFunction()};
if(window.location.pathname != "/"){
    document.getElementById("header").style.backgroundColor = "#242C40";
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 || window.location.pathname != "/") {
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
document.getElementsByClassName("options-all")[0].onclick = function(){
    document.getElementsByClassName("all-options")[0].style.display = 'none';
};

document.getElementById("header-home").onclick = () => headerGoTo("home");
document.getElementById("header-escritorio").onclick = () => headerGoTo("escritorio");
document.getElementById("header-atendimento").onclick = () => headerGoTo("atendimento");
document.getElementById("header-atuacao").onclick = () => headerGoTo("atuacao");
document.getElementById("header-sobre").onclick = () => headerGoTo("sobre");
document.getElementById("header-blog").onclick = () => headerGoTo("blog");
document.getElementById("header-mobile-home").onclick = () => headerGoTo("home");
document.getElementById("header-mobile-escritorio").onclick = () => headerGoTo("escritorio");
document.getElementById("header-mobile-atendimento").onclick = () => headerGoTo("atendimento");
document.getElementById("header-mobile-atuacao").onclick = () => headerGoTo("atuacao");
document.getElementById("header-mobile-sobre").onclick = () => headerGoTo("sobre");
document.getElementById("header-mobile-blog").onclick = () => headerGoTo("blog");

function headerGoTo(divId){
    if(window.location.pathname == "/"){
        let element = document.getElementById(divId);

        const y = element.getBoundingClientRect().top + window.pageYOffset -97;
        window.scrollTo({top: y, behavior: 'smooth'});
        // element.scrollIntoView() -= 97;
    }else{
        window.location.href = window.location.origin + "/#" + divId;
    }
}