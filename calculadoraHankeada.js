function calcularNivel (vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let nivel ="";

    if (vitorias <= 10) {
        nivel = "ferro";
   }else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "bronze";
   }else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "prata";
   }else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "ouro";
   }else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "diamante";
   }else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "lendário";
   }else if (vitorias > 100) {
        nivel = "imortal";
   }
    return  { 
        saldoVitorias: saldo,
         nivel: nivel
    };
}

    const jogadores = [
    { vit: 15, der: 5 },
    { vit: 55, der: 10 },
    { vit: 120, der: 20 }
];

for (let i = 0; i < jogadores.length; i++) {
    let resultado = calcularNivel(jogadores[i].vit, jogadores[i].der);
    console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);
}