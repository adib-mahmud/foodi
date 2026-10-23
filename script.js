// Dark & Light Mode 

const dark = document.querySelector("#dark");
const stylefile = document.querySelector("#stylefile");

dark.addEventListener("click", darkMode);

function darkMode (){
    // alert("Hello Dark mode");
    // console.log(stylefile.href);
    // stylefile.href = "http://127.0.0.1:5500/css/dark.css"


    if(stylefile.getAttribute("href") == "./css/style.css") {
        stylefile.setAttribute("href", "./css/dark.css"); // dark mode
        dark.innerHTML = "Light";
    } else {
        stylefile.setAttribute ("href", "./css/style.css"); // light mode
        dark.innerHTML = "Dark";

    }

}