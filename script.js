console.log("page loaded...");

var request = 2

function borrar(user) {
    console.log(user);
    if (user == "user1") {
        document.getElementById("user1").remove("#user1");
    }
    if (user == "user2") {
        document.getElementById("user2").remove("#user2");
    }
    request--;
    document.getElementById("numero_request").innerText=request;
}

var conection = 500
function incluir(user) {
    console.log(user);
    if (user == "user1") {
        document.getElementById("user1").remove("#user1");
    }
    if (user == "user2") {
        document.getElementById("user2").remove("#user2");
    }
    conection++;
    document.getElementById("numero_conection").innerText=conection;
    request--;
    document.getElementById("numero_request").innerText=request;
}

function editar_nombre () {
    document.querySelector(".escondido").style.visibility="visible";
    
}

function ok() {
    var nuevoNombreInput = document.getElementById("input_nombre").value;
    console.log(nuevoNombreInput);
    document.getElementById("user_name").innerText= nuevoNombreInput;
    
    document.querySelector(".escondido").remove(".esconcido");
}