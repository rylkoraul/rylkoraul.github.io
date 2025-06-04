function logar() {
   var textologin = document.getElementById("login").value;
    if (textologin == "") {
        alert("escreva algo na caixa")
        
    } else {
        document.location.href = "paginicial.html";
    }
}