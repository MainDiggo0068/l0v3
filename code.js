const btn = document.querySelector("#btn");
function amor(){
    const love = document.getElementById("love").value;
    if (love.includes("S") || love.includes("s")) {
        alert("Eu também te amo, S2")
    } else {
        alert("Resposta errada, tente novamente")
    }
}

btn.addEventListener("click", amor);
