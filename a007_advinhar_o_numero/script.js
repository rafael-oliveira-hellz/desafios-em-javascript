function verificar(){
    var n1 = document.getElementById('n1').innerHTML;
    var n2 = document.getElementById('n2').value;

    if (n1 == n2){
        alert("Você acertou!");
    } else {
        alert("Voce errou!");
    }

    resetar();
}

function resetar(){
    document.getElementById("n2").value = "";

    var rand = Math.floor(Math.random() * 100);
    document.getElementById("n1").innerHTML = rand;
}