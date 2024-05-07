let nome = "Ealgan"
let nivel = 12
let nomeDoNivel = "Ferro"

let niveisDeExperiencia = [
    { nomeNivel: "Bronze", minimoXp: 1001 },
    { nomeNivel: "Prata", minimoXp: 2001 },
    { nomeNivel: "Ouro", minimoXp: 5001 },
    { nomeNivel: "Platina", minimoXp: 7001 },
    { nomeNivel: "Ascendente", minimoXp: 8001 },
    { nomeNivel: "Imortal", minimoXp: 9001 },
    { nomeNivel: "Radiante", minimoXp: 10001 },
]

for (let i = 0; i < niveisDeExperiencia.length; i++) {
    if (niveisDeExperiencia[i].minimoXp <= nivel) {
        nomeDoNivel = niveisDeExperiencia[i].nomeNivel
    }
}

console.log("O Herói de nome " + nome + " está no nível de " + nomeDoNivel)