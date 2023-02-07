
var input = document.querySelector("input");
var error = document.querySelector(".error");
(function (){
    error.style.display = "none";
})();

var button = document.querySelector("#button");
button.onclick = function (){

    var myValue = document.querySelector("input").value;
    var inner =  document.getElementById("inner");
    if ( myValue ==  "" ) {
        error.style.display = "block";
        inner.innerHTML = "Please provide a valid mail!";
    } else {
        error.style.display = "none";
    };


    for ( i=0; i < 1000000;  i++){
        if ( myValue == i) {
            error.style.display = "block";
        }
    };
    
};


input.onclick = function (){
    var inner =  document.getElementById("inner");
    // var input = document.querySelector("input");
    error.style.display = "none";
    inner.style.display = "none";
    // input.value.style.textAlign = "center";
}




